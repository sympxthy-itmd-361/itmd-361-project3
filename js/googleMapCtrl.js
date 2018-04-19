"use strict";

var map;
        
var defaultPos = {lat: 31.213863, lng: 121.469220};

var theBundPos = {lat: 31.240555, lng: 121.490566};
var theBundMarker;

var yuGardenPos = {lat: 31.227494, lng: 121.492082};
var yuGardenMarker;

var jadeBuddhaTemplePos = {lat: 31.241640, lng: 121.445142};
var jadeBuddhaTempleMarker;

var shanghaiArtMuseumPos = {lat: 31.230835, lng: 121.471075};
var shanghaiArtMuseumMarker;

var longhuaTemplePos = {lat: 31.174137, lng: 121.451911};
var longhuaTempleMarker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: defaultPos,
    zoom: 11
  });
  theBundMarker = new google.maps.Marker({
    position: theBundPos,
    map: map,
    title: "The Bund"
  });
  yuGardenMarker = new google.maps.Marker({
    position: yuGardenPos,
    map: map,
    title: "Yu Garden"
  });
  jadeBuddhaTempleMarker = new google.maps.Marker({
    position: jadeBuddhaTemplePos,
    map: map,
    title: "Jade Buddha Temple"
  });
  shanghaiArtMuseumMarker = new google.maps.Marker({
    position: shanghaiArtMuseumPos,
    map: map,
    title: "Shanghai Art Museum"
  });
  longhuaTempleMarker = new google.maps.Marker({
    position: longhuaTemplePos,
    map: map,
    title: "Longhua Temple"
  });
}

function navToTheBund() {
  console.log("navToTheBund");
  map.panTo(theBundPos);
  map.setZoom(13);
  theBundMarker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
    theBundMarker.setAnimation(null);
  }, 2000);
}

function mavToYuGarden() {
  console.log("navToYuGarden");
  map.panTo(yuGardenPos);
  map.setZoom(13);
  yuGardenMarker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
    yuGardenMarker.setAnimation(null);
  }, 2000);
}

function navToJadeBuddhaTemple() {
  console.log("navToJadeBuddhaTemple");
  map.panTo(jadeBuddhaTemplePos);
  map.setZoom(13);
  jadeBuddhaTempleMarker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
    jadeBuddhaTempleMarker.setAnimation(null);
  }, 2000);
}

function navToShanghaiArtMuseum() {
  console.log("navToShanghaiArtMuseum");
  map.panTo(shanghaiArtMuseumPos);
  map.setZoom(13);
  shanghaiArtMuseumMarker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
    shanghaiArtMuseumMarker.setAnimation(null);
  }, 2000);
}

function navToLonghuaTemple() {
  console.log("mavToLonghuaTemple");
  map.panTo(longhuaTemplePos);
  map.setZoom(13);
  longhuaTempleMarker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout(function() {
    longhuaTempleMarker.setAnimation(null);
  }, 2000);
}