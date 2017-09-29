$(document).ready(function() {
    
    var main = {
        init: function() {
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.$langCol = $("#langCol");
            this.$courseCol = $("#courseCol");
            this.$nameCol = $("#nameCol");
            this.$docCol = $("#docCol");
            this.$contactCol = $("#contactCol");

            this.$language = $("#language");
            this.$course =   $("#course");
            this.$doc =      $("#doc");
            this.$contact =  $("#contact");
            this.$name  =    $("#name");

            this.$width =    $(window).width();
            this.$body =     $('body');

        },
        fadeAndRemoveAll: function(exception, self, callback) {
            console.log(`inside fadeandremoveall`);
            if (exception !== self.$doc) {
                self.$doc.fadeOut(500, function() {
                    $().remove(self);
                })
            }
            if (exception !== self.$course) {
                self.$course.fadeOut(550, function() {
                    $().remove(self);
                })
            }
            if (exception !== self.$name) {
                self.$name.fadeOut(600, function() {
                    $().remove(self);
                })
            }
            if (exception !== self.$language) {
                self.$language.fadeOut(650, function() {
                    $().remove(self);
                })
            }
            if (exception !== self.$contact) {
                self.$contact.fadeOut(700, function() {
                    $().remove(self);
                })
            }

            setTimeout(function() {
                callback();
                
            }, 700);
        },
        bindEvents: function() {
            var self = this;
            self.$language.hover(function() {
                self.$langCol.css({backgroundColor: "#DB3340"}, 500);
                self.$nameCol.css({backgroundColor: "#646060"}, 500);
            }, function() {
                self.$langCol.css({backgroundColor: "#555555"}, 500);
                self.$nameCol.css({backgroundColor: "#28ABE3"}, 500);
            });

            self.$course.hover(function() {
                self.$courseCol.css({backgroundColor: "#E8B71A"}, 500);
                self.$nameCol.css({backgroundColor: "#646060"}, 500);
            }, function() {
                self.$courseCol.css({backgroundColor: "#555555"}, 500);
                self.$nameCol.css({backgroundColor: "#28ABE3"}, 500);
            }); 
            
            self.$doc.hover(function() {
                self.$docCol.css({backgroundColor: "#1FDA9A"}, 500);
                self.$nameCol.css({backgroundColor: "#646060"}, 500);
            }, function() {
                self.$docCol.css({backgroundColor: "#646060"}, 500);
                self.$nameCol.css({backgroundColor: "#28ABE3"}, 500);
            }); 

            self.$contact.hover(function() {
                self.$contactCol.css({backgroundColor: "#F7EAC8"}, 500);
                self.$nameCol.css({backgroundColor: "#646060"}, 500);
            }, function() {
                self.$contactCol.css({backgroundColor: "#646060"}, 500);
                self.$nameCol.css({backgroundColor: "#28ABE3"}, 500);
            }); 

            self.$doc.click(function() {
                self.$body.css({backgroundColor: "#555555"});
                self.fadeAndRemoveAll(self.$doc, self, function() {
                    window.location = "./doc.html";
                });
            });

            self.$course.click(function() {
                self.$body.css({backgroundColor: "#646060"});
                self.fadeAndRemoveAll(self.$course, self, function() {
                    window.location = "./course.html";
                });
            });

            self.$language.click(function() {
                self.$body.css({backgroundColor: "#646060"});                
                self.fadeAndRemoveAll(self.$language, self, function() {
                    window.location = "./language.html";
                });

            });

            self.$contact.click(function() {
                self.$body.css({backgroundColor: "#555555"});
                self.fadeAndRemoveAll(self.$contact, self, function() {
                    window.location = "./contact.html";
                });
                
            });
        }
    }

    main.init();

});

