/*
* haye
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

export default function Pipe (chars, presenter) {
  presenter.add()
  const charsLength = chars.length

  let i = 0
  let targetProp = 'name'

  while (i < charsLength) {
    const char = chars[i++]
    const charCode = char.charCodeAt(0)

    if (charCode === 58 || charCode === 44) {
      // if : or ,
      targetProp = 'arg'
      presenter.shiftValue()
    } else if (charCode === 124) {
      // if |
      targetProp = 'name'
      presenter.add()
    } else if (targetProp === 'arg') {
      presenter.appendValue(char)
    } else {
      presenter.appendKey(char, charCode)
    }
  }

  return presenter.toJSON()
}
