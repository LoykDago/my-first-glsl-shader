export default /* glsl */ `
uniform float uRadius;
uniform sampler2D uTexture;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {


	// const float RADIUS=0.2;
	
	// vec3 viewDirection=normalize(cameraPosition-vPosition);
	// float fresnel=1.0 - dot(viewDirection,vNormal);


	// vec4 color=vec4( vec3(step(0.9,1.0-abs(vUv.x-0.5))), 1.0 );	

	const vec3 DESATURATE= vec3(0.2126,0.7152,0.0722);
	vec3 color=texture2D(uTexture,vUv).xyz;

	float finalColor= dot(DESATURATE,color);
	gl_FragColor = vec4(vec3(finalColor),1);
}
`;
