//https://cdn.contentful.com/spaces/2ont6v56h0el/entries/3fyfV5WDOouGYwOmiqkUcO?access_token=e6d312372e090bc3513e7b263c922b1d5072ab7829da3e18d8f361628a99e341
const cdnValue = 'https://cdn.contentful.com/';
var spaceValue = 'spaces/2ont6v56h0el';
var entryValue = '/entries/3fyfV5WDOouGYwOmiqkUcO?';
var accessToken = 'access_token=e6d312372e090bc3513e7b263c922b1d5072ab7829da3e18d8f361628a99e341';

var requestURL = cdnValue + spaceValue + entryValue + accessToken;
var articleDescription = '';
var articleHeading = '';

$(function() {
    $.getJSON( requestURL, function( json ) {
        articleDescription = json.fields.articleDescription;
        articleHeading = json.fields.articleHeading;
        console.log ('assigned the var .....')
        $('.head1').text(articleHeading);
        $('.desc1').text(articleDescription);
    });
});