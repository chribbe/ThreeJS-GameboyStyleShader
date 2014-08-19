
/**
 * @author @oosmoxiecode
 */

THREE.PixelateShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },
        "size":    { type: "v2", value: new THREE.Vector2( 512, 512 ) },
        "pixelSize":{ type: "f", value: 100.0 } // inversed, small number large pixels, large number small pixels.

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform vec2 size;",
        "uniform sampler2D tDiffuse;",
        "uniform float pixelSize;",

        "varying vec2 vUv;",

        "void main() {",

        "vec2 uv = gl_FragCoord.xy / size.xy;",
        "vec2 div = vec2(size.x * pixelSize / size.y, pixelSize);",
        "uv = floor(uv * div)/div;",
        "gl_FragColor = texture2D(tDiffuse, uv);",

        "}"

    ].join("\n")

};