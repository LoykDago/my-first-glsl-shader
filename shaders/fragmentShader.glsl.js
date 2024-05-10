export default /* glsl */ `
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
void main() {
	vec4 color=vec4( vec3(step(0.5,vUv.y)), 1.0 );
	gl_FragColor = color;
}
`;
