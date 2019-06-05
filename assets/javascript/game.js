$(document).ready(function gameStart() {
    // variables for the game
    // create variable for holding score
    let points = 0;
    // variable for target points
    // set target score to be random up to 77
    let targetPoints = Math.floor(Math.random() * 77);;
    // variable holds losses
    let losses = 0;
    // variable holds wins
    let wins = 0;
    // sets target total for user to see
    $('#target-points').text(targetPoints);
    // variable for crystal value
    let crystalValue = 0;
    // set crystals value to random
    $('#crystal1').attr('value', Math.floor(Math.random() * 9));
    $('#crystal2').attr('value', Math.floor(Math.random() * 9));
    $('#crystal3').attr('value', Math.floor(Math.random() * 9));
    // $('#crystal4').attr('value', Math.floor(Math.random() * 9));

    // create on click function for clicking crystals
    $("#crystal1,#crystal2,#crystal3,#crystal4").on("click", function() {
        // variable for holding the value of selected crystal
        crystalValue = $(this).attr('value');
        // adds to points when clicking a crystal
        points += parseInt(crystalValue);
        // changes total on the screen
        $('#points').text(points);

        if (points === targetPoints) {
            // win condition and alert
            alert("You Win! GOOD JOB!");
            // win
            wins++;
            // updates wins for user to see
            $('#wins').text(wins);
            // selects new number to guess
            targetPoints = Math.ceil(Math.random() * 77);
            $('#target-points').text(targetPoints);
            // reset points
            points = 0;
            $('#points').text(points);

        } else if (points >= targetPoints) {
            // lose condition and alert
            alert("You lose. Please try again!");
            // lose
            losses++;
            // updates losses for user to see
            $('#losses').text(losses);
            // selects new number to guess
            targetPoints = Math.ceil(Math.random() * 77);
            $('#target-points').text(targetPoints);
            // reset points
            points = 0;
            $('#points').text(points);

        } else {
            // alert("Please select another crystal!");
            // keep going
        }
    });

});