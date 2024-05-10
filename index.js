import * as THREE from "three";
import fragmentShader from "./shaders/fragmentShader.glsl";
import vertexShader from "./shaders/vertexShader.glsl";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const radius = 2;
const detail = 3;
const geometry = new THREE.IcosahedronGeometry(radius, detail);
const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

const ico = new THREE.Mesh(geometry, material);
scene.add(ico);

camera.position.z = 5;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
