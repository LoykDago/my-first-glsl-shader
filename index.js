import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import japan from "./japan.jpg";
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
const controls = new OrbitControls(camera, canvas);
controls.update();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  // wireframe: true,
});

material.uniforms.uRadius = { value: 0.2 };
material.uniforms.uTexture = { value: new THREE.TextureLoader().load(japan) };

const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

camera.position.z = 2;

renderer.setClearColor("grey", 1);

function render() {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(render);
}

render();
