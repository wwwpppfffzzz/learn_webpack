import '../css/style.css';
import '../css/title.less';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '这是一段内容';

document.body.appendChild(divEl);
