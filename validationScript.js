        let inputField = document.getElementById('inputField');
        let regex = /^[a-zA-Z0-9]*$/;
      
        document.getElementById('myForm').addEventListener('submit', function() {
          if (!regex.test(inputField.value)) {
            window.alert("Invalid format! Input is not alphanumeric.")
            event.preventDefault();
        }
        else{
          window.alert("submitted")
        }
      });

        