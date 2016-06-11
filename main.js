var pebbles = 0;
var pps = 0;
var workers = 0;
var drills = 0;
var mines = 0;
var factories = 0;
var laserturrets = 0;
var timemachines = 0;
var cloningfacilities = 0;
var dimensionalportals = 0;

function roundify(input){
  var output = Math.round(input)
  return output;
}

function rockClick(number){
  pebbles = pebbles + number;
  document.getElementById("pebbles_count").innerHTML = roundify(pebbles);
};

function buyWorker(){
  var workerCost = Math.floor(15 * Math.pow(1.15,workers));
  if(pebbles >= workerCost){
    workers = workers + 1;
    pebbles = pebbles - workerCost;
    document.getElementById('worker_count').innerHTML = roundify(workers);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(15 * Math.pow(1.15,workers));
    document.getElementById('worker_cost').innerHTML = roundify(nextCost);
    pps = pps + 1;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyDrill(){
  var drillCost = Math.floor(100 * Math.pow(1.15,drills));
  if(pebbles >= drillCost){
    drills = drills + 1;
    pebbles = pebbles - drillCost;
    document.getElementById('drill_count').innerHTML = roundify(drills);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(100 * Math.pow(1.15,drills));
    document.getElementById('drill_cost').innerHTML = roundify(nextCost);
    pps = pps + 10;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyMine(){
  var mineCost = Math.floor(1100 * Math.pow(1.15,mines));
  if(pebbles >= mineCost){
    mines = mines + 1;
    pebbles = pebbles - mineCost;
    document.getElementById('mine_count').innerHTML = roundify(mines);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(1100 * Math.pow(1.15,mines));
    document.getElementById('mine_cost').innerHTML = roundify(nextCost);
    pps = pps + 80;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyFactory(){
  var factoryCost = Math.floor(12000 * Math.pow(1.15,factories));
  if(pebbles >= factoryCost){
    factories = factories + 1;
    pebbles = pebbles - factoryCost;
    document.getElementById('factory_count').innerHTML = roundify(factories);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(12000 * Math.pow(1.15,factories));
    document.getElementById('factory_cost').innerHTML = roundify(nextCost);
    pps = pps + 480;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyLaserturret(){
  var laserturretCost = Math.floor(130000 * Math.pow(1.15,laserturrets));
  if(pebbles >= laserturretCost){
    laserturrets = laserturrets + 1;
    pebbles = pebbles - laserturretCost;
    document.getElementById('laserturret_count').innerHTML = roundify(laserturrets);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(130000 * Math.pow(1.15,laserturrets));
    document.getElementById('laserturret_cost').innerHTML = roundify(nextCost);
    pps = pps + 2600;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyTimemachine(){
  var timemachineCost = Math.floor(1400000 * Math.pow(1.15,timemachines));
  if(pebbles >= timemachineCost){
    timemachines = timemachines + 1;
    pebbles = pebbles - timemachineCost;
    document.getElementById('timemachine_count').innerHTML = roundify(timemachines);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(1400000 * Math.pow(1.15,timemachines));
    document.getElementById('laserturret_cost').innerHTML = roundify(nextCost);
    pps = pps + 14000;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyCloningfacility(){
  var cloningfacilityCost = Math.floor(20000000 * Math.pow(1.15,cloningfacilities));
  if(pebbles >= cloningfacilityCost){
    cloningfacilities = cloningfacilities + 1;
    pebbles = pebbles - cloningfacilityCost;
    document.getElementById('cloningfacility_count').innerHTML = roundify(cloningfacilities);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(20000000 * Math.pow(1.15,cloningfacilities));
    document.getElementById('cloningfacility_cost').innerHTML = roundify(nextCost);
    pps = pps + 78000;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

function buyDimensionalportal(){
  var dimensionalportalCost = Math.floor(330000000 * Math.pow(1.15,dimensionalportals));
  if(pebbles >= dimensionalportalCost){
    dimensionalportals = dimensionalportals + 1;
    pebbles = pebbles - dimensionalportalCost;
    document.getElementById('dimensionalportal_count').innerHTML = roundify(dimensionalportals);
    document.getElementById('pebbles_count').innerHTML = roundify(pebbles);
    var nextCost = Math.floor(330000000 * Math.pow(1.15,dimensionalportals));
    document.getElementById('dimensionalportal_cost').innerHTML = roundify(nextCost);
    pps = pps + 440000;
    document.getElementById('pps').innerHTML = roundify(pps);
  };
};

window.setInterval(function(){
  rockClick(workers)
  rockClick(drills * 10)
  rockClick(mines * 80)
  rockClick(factories * 480)
  rockClick(laserturrets * 2600)
  rockClick(timemachines * 14000)
  rockClick(cloningfacilities * 78000)
  rockClick(dimensionalportals * 440000)
}, 1000);
