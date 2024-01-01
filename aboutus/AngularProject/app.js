// app.js
// Define an Angular module named 'myApp'
var app = angular.module('myApp', []);

// Define a controller named 'FormController'
app.controller('FormController', function ($scope, $timeout) {
    // Object to store form data
    $scope.formData = {};
    // Flag to control the visibility of the success message popup
    $scope.showSuccess = false;

    // Function to handle form submission
    $scope.sendEmail = function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Validate phone number (should have exactly 10 digits)
        if (!$scope.formData.phone || !(/^\d{10}$/.test($scope.formData.phone))) {
            window.alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Validate message (should have at least 10 words)
        if (!$scope.formData.message || $scope.formData.message.split(/\s+/).length < 2) {
            window.alert("Please enter a message with at least 2 words.");
            return;
        }
        // Send email using SMTP
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "thisistest36@gmail.com",
            Password: "56E262B8DBE6A9146F7062A9016548F7E80C",
            To: 'thisistest36@gmail.com',
            From: "thisistest36@gmail.com",
            Subject: "Enquiry",
            Body: "Name: " + $scope.formData.name +
                "<br> Email: " + $scope.formData.email +
                "<br> Phone no: " + $scope.formData.phone +
                "<br> Message: " + $scope.formData.message
        }).then(function (message) {
            // Display success message in a popup window
            window.alert("Form submitted successfully!");

            // Reset form data
            $scope.reset();
        });
    };

    // Function to reset form data
    $scope.reset = function () {
        // Clear form data
        $scope.formData = {};
    };

    // Function to close the success message popup
    $scope.closeSuccess = function () {
        // Set the flag to hide the success message popup
        $scope.showSuccess = false;
    };
});
