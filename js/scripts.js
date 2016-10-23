window.onload = function(){

            // Introduction Video

            var iframe = document.getElementById('test_iframe');
            var html_string = '<html><head></head><body><div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/JocLyJgy-H6ePhpfv.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div></body></html>';


            var iframedoc = iframe.document;
                if (iframe.contentDocument)
                    iframedoc = iframe.contentDocument;
                else if (iframe.contentWindow)
                    iframedoc = iframe.contentWindow.document;

             if (iframedoc){
                 // Put the content in the iframe
                 iframedoc.open();
                 iframedoc.writeln(html_string);
                 iframedoc.close();
             } else {
                //just in case of browsers that don't support the above 3 properties.
                //fortunately we don't come across such case so far.
                alert('Cannot inject dynamic contents into iframe.');
             }
        }

        // First Video

        function injectHTML1(){

            var iframe = document.getElementById('test_iframe');
            var html_string = '<html><head></head><body><div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/TnfSheNM-H6ePhpfv.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div></body></html>';


            var iframedoc = iframe.document;
                if (iframe.contentDocument)
                    iframedoc = iframe.contentDocument;
                else if (iframe.contentWindow)
                    iframedoc = iframe.contentWindow.document;

             if (iframedoc){
                 // Put the content in the iframe
                 iframedoc.open();
                 iframedoc.writeln(html_string);
                 iframedoc.close();
             } else {
                //just in case of browsers that don't support the above 3 properties.
                //fortunately we don't come across such case so far.
                alert('Cannot inject dynamic contents into iframe.');
             }
        }

        // Second Video

        function injectHTML2(){

            var iframe = document.getElementById('test_iframe');
            var html_string = '<html><head></head><body><div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/kXpH1zmm-H6ePhpfv.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div></body></html>';


            var iframedoc = iframe.document;
                if (iframe.contentDocument)
                    iframedoc = iframe.contentDocument;
                else if (iframe.contentWindow)
                    iframedoc = iframe.contentWindow.document;

             if (iframedoc){
                 // Put the content in the iframe
                 iframedoc.open();
                 iframedoc.writeln(html_string);
                 iframedoc.close();
             } else {
                //just in case of browsers that don't support the above 3 properties.
                //fortunately we don't come across such case so far.
                alert('Cannot inject dynamic contents into iframe.');
             }
        }

        // Third Video

        function injectHTML3(){

            var iframe = document.getElementById('test_iframe');
            var html_string = '<html><head></head><body><div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/2qyP34Ws-H6ePhpfv.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div></body></html>';


            var iframedoc = iframe.document;
                if (iframe.contentDocument)
                    iframedoc = iframe.contentDocument;
                else if (iframe.contentWindow)
                    iframedoc = iframe.contentWindow.document;

             if (iframedoc){
                 // Put the content in the iframe
                 iframedoc.open();
                 iframedoc.writeln(html_string);
                 iframedoc.close();
             } else {
                //just in case of browsers that don't support the above 3 properties.
                //fortunately we don't come across such case so far.
                alert('Cannot inject dynamic contents into iframe.');
             }
        }