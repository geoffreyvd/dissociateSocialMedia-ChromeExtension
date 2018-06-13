// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  var config = {
    minimumDays : 4,
    rangeDays: 2,
    setDay: + new Date(),
    maximumMinutes: 10
  }
  var randomDays = Math.floor((Math.random() * config.rangeDays) + config.minimumDays);

  var blockUntill = new Date(); //needed
  blockUntill.setDate(blockUntill.getDate() + randomDays); //today + random amount of days

  config.blockUntill = + blockUntill;
  //setRandomTime
  chrome.storage.sync.set({config: config}, function() {
    console.log("The time is set to: " + config.blockUntill);
  });
});
