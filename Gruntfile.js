module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }, 
	// Less to css
	less: {
		style: {
			files: {
				"build/css/style.css": ["source/less/style.less"]
			}
		}
	},
	
	// Autoprefixer  
	
	autoprefixer: {
		options: {
			browsers: ['last 2 versions', 'ie 8', 'ie 9']
		},
		style: {
			src:"build/css/style.css"
		}
	},
	
	//  Combine-media-queries  
	
	cmq: {
		styles: {
			files: {
				"build/css/style.css": ["build/css/style.css"]
			}
		}
	},
	
	//  Cssmin 
	
	cssmin: {
		style: {
			options: {
				KeepSpecialComments:  0,
				report:  "gzip"
			},
			files: {
				"build/css/style.min.css": ["build/css/style.css"]
			}
		}
	
	},
	
	// Csscomb
	
	csscomb: {
		style: {
			expand:  true,
			src:["less/**/*.less"]
		}
	},
	
	// imagemin
	
	imagemin: {
		images: {
			options: {
				optimizationlevel:  3
			},
			files: [{
				expand:  true,
				src:  ["build/img/**/*.{png, jpg, gif, svg}"]
			}]
		}
	},
	
	//htmlmin  
	
	htmlmin:  {
		dist: {
			options: {
				removeComments:  true,
				collapseWhitespace: true,
				caseSensitive:  true,
				keepClosingSlash:  false
			},
			files: {
				'build/index.min.html': ['build/index.html']
			}
		}
	},   
	
	
	// copy
	
		copy:  {
			build: {
				files:  [{
					expand:  true,
					cwd:  "source",
					src:  [
						"img/**",
						"js/**",
						"index.html",
						"octicons/**"
					],
					dest:  "build"
				}]
			}
		},
		
	// clean  
	
		clean:  {
			build: ["build"]
		}
	
  });

  
  require ("load-grunt-tasks") (grunt);

  grunt.registerTask('lint', ['lintspaces']);
  grunt.registerTask("build", [
  "clean",
  "copy",
  "less",
  "autoprefixer",
  "cmq",
  "cssmin",
  "csscomb",
  "imagemin",
  "htmlmin"
  
  
  ]);
};
