/**
 * SceneParser - loads and parses a scene .json exported with three.JS editor
 * author: @chribbe1
 */


THREE.SceneParser = function(scene)
{
    this.scene = scene;
    this.loadAndParse = function(url)
    {
          this.load(url);
    }

    this.load = function(url)
    {
        var loader = new THREE.XHRLoader();
        var self = this;
        loader.load( url,function ( text ) {
            var json = JSON.parse( text );
            var loader = new THREE.ObjectLoader();
            var result = loader.parse( json );
            console.log(result);
            console.log(self);
            self.buildScene(result);
        });
    }

   this.buildScene = function(parsedScene)
   {
        parsedScene.traverse( function ( object ) {

          // if shadowCasting == on
        object.receiveShadow = true;
        object.castShadow = true;
      });

        this.scene.add(parsedScene);

   }
}