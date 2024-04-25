$(document).ready(function() {
    $('.skills__list .bg').each(function() { // Update selector to target .bg directly
        var classes = $(this).attr('class');
        if (classes) {
            var proficiencyLevel = classes.split(/\s+/)[1]; // Change index to 1 to get the second class (proficiency level)
            var proficiencyPercentage = getProficiencyPercentage(proficiencyLevel); // Calculate percentage based on proficiency level
            $(this).attr('data-percent', proficiencyPercentage + '%'); // Set data-percent attribute
            $(this).css('background', 'linear-gradient(to right, ' + getBackgroundColor(proficiencyLevel) + ' ' + proficiencyPercentage + '%, transparent ' + proficiencyPercentage + '%)');
        }
    });
});


function getBackgroundColor(proficiencyLevel) {
    switch(proficiencyLevel) {
        case 'skill-beginner':
            return '#ffcc66'; // Example: Red for beginner
        case 'skill-intermediate':
            return '#ffcc66'; // Example: Green for intermediate
        case 'skill-intermediate-1':
            return '#ffcc66'; // Example: Green for intermediate
        case 'skill-advanced':
            return '#ffcc66'; // Example: Blue for advanced
        default:
            return 'transparent';
    }
}

function getProficiencyPercentage(proficiencyLevel) {
    switch(proficiencyLevel) {
        case 'skill-beginner':
            return 50; // Example: 25% height for beginner
        case 'skill-intermediate-1':
            return 75; // Example: 50% height for intermediate
        case 'skill-intermediate':
            return 90; // Example: 50% height for intermediate
        case 'skill-advanced':
            return 100; // Example: 100% height for advanced
        default:
            return 0;
    }
}