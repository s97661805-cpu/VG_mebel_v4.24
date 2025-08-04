
import "./Ax.css"

function Ax({ openDrawer }) {

	function removeElementOnScroll(elementId, scrollThreshold) {
		window.addEventListener('scroll', () => {
		const element = document.getElementById(elementId);
		if (window.scrollY > scrollThreshold && element) {
			element.remove();
		}
		});
		}
		removeElementOnScroll('myElement', 200);

	return (
			<div className="asdf" onClick={() => openDrawer()}>
				<img src="/images/icons8-menu-100.png" />
			</div>

	);
}

export default Ax;