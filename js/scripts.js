window.onload = function(){

            //step 1: get the DOM object of the iframe.

            var iframe = document.getElementById('test_iframe');
            var html_string = '<html><head></head><body><div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/IenWr92F-H6ePhpfv.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div></body></html>';


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

        function injectHTML2(){

            //step 1: get the DOM object of the iframe.

            var iframe = document.getElementById('test_iframe');
            var html_string = '<html><head></head><body><div style="position:relative; padding-bottom:56.25%; overflow:hidden;"><iframe src="//content.jwplatform.com/players/n1HLaQRO-H6ePhpfv.html" width="100%" height="100%" frameborder="0" scrolling="auto" allowfullscreen style="position:absolute;"></iframe></div></body></html>';


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