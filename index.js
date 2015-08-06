var Elixir = require( 'laravel-elixir' ),
    gulp   = require( 'gulp' ),
    gulpif = require( 'gulp-if' ),
    react  = require( 'gulp-react' ),
    concat = require( 'gulp-concat' ),
    Task   = Elixir.Task;

Elixir.extend( "jsx", function ( src, dest )
{
	src  = src || 'resources/assets/jsx/*.jsx';
	dest = dest || 'public/js';

	var doConcat = ~dest.indexOf( '.js' );


	new Task('jsx', function() {
		gulp.src( src )
			.pipe( react() )
			.pipe( gulpif( doConcat, concat( dest ) ) )
			.pipe( gulp.dest( dest ) );
	}).watch(src);
} );
