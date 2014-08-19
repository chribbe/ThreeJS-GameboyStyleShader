
/**
 * @author @chribbe1 based on @oosmoxiecode original C64 Shader
 */

THREE.GameBoyShader = {

    uniforms: {

        "tDiffuse": { type: "t", value: null },

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "void main() {",

        "vec3 c64col[4];",
        "c64col[0] = vec3(15.0,56.0,15.0);",
        "c64col[1] = vec3(48.0,98.0,48.0);",
        "c64col[2] = vec3(139.0,172.0,15.0);",
        "c64col[3] = vec3(155.0,188.0,15.0);",


        "vec3 samp = texture2D(tDiffuse, vUv.xy).rgb;",
        "vec3 match = vec3(0.0,0.0,0.0);",
        "float best_dot = 8.0;",

        "for (int c=4;c>=0;c--) {",
        "float this_dot = distance(c64col[c]/255.0,samp);",
        "if (this_dot<best_dot) {",
        "best_dot=this_dot;",
        "match=c64col[c];",
        "}",
        "}",
        "vec4 color = vec4(match/255.0,0.0);",

        "gl_FragColor = color;",

        "}"

    ].join("\n")

};