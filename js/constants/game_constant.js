
gametext = [];

gametext.error = [];

gametext.error[0] = "<p>Please install or activate your Metamask Plugin in your browser. <br> You can't play RigMiner without Metamask installed.</p>";
gametext.error[1] = "<p>Your Metamask locked or you have no valid address please reload the page!</p>";
gametext.error[2] = `<p>Please allow your Metamask to connect to this website, and make sure that you are using the following network:<br>
<center>
Network Name: cheapETH <br>
New RPC URL: https://node.cheapeth.org/rpc <br>
Chain ID: 777 <br>
Currency Symbol: cTH <br>
</center>
</p>`;
gametext.welcome = 
"<span>C:/Mining/Start > RigMinerBeta0.1.exe --tutorial</span> <br> Welcome on RigMiner.io the Original Crypto Mining Idle game DAPP <br><br>"+
"- Setup your own Mining Rig and help the Futurehash network to mint more and more Coin. "+
"It competes to be the one that takes the highest percentage of dividends when tokens are burned every day.<br>"+
"Invest your Coins to BURN everyday and get back up to 1% dividens from Network HODL!<br><br><br><br>"+
"Press Start Game Button on the right side to continue...";


//                   price,           prod.     upgrade,        priceETH, limit
/*
rigData[0] = RigData(128,             1,        64,              0,          64);
rigData[1] = RigData(1024,            64,       512,             0,          64);
rigData[2] = RigData(204800,          1024,     102400,          0,          128);
rigData[3] = RigData(25600000,        8192,     12800000,        0,          128);
rigData[4] = RigData(30000000000,     65536,    30000000000,     0.01 ether, 256);
rigData[5] = RigData(30000000000,     100000,   10000000000,     0,          256);
rigData[6] = RigData(300000000000,    500000,   100000000000,    0,          256);
rigData[7] = RigData(50000000000000,  3000000,  12500000000000,  0.1 ether,  256);
rigData[8] = RigData(100000000000000, 30000000, 50000000000000,  0,          256);
*/

rigData = [];

rigData[0] = {price: 128,    eth:  0.0001,     prod: 10,       upgrade: 64,   limit: 64};
rigData[1] = {price: 1024,     eth:  0.003,      prod: 40,       upgrade: 512,   limit: 64};
rigData[2] = {price: 204800,    eth:  0.0009,       prod: 140,       upgrade: 102400,   limit: 128};
rigData[3] = {price: 25600000,    eth:  0.0027,       prod: 460,       upgrade: 12800000,   limit: 128};
rigData[4] = {price: 30000000000,   eth:  0.0081,        prod: 1450,       upgrade: 30000000000,   limit: 256};
rigData[5] = {price: 30000000000,  eth:  0.0243,         prod: 4500,       upgrade: 10000000000,   limit: 256};
rigData[6] = {price: 300000000000,   eth:  0.0729,        prod: 14000,       upgrade: 100000000000,   limit: 256};
rigData[7] = {price: 50000000000000,   eth:  0.2187,        prod: 43000,       upgrade: 12500000000000,   limit: 256};
rigData[8] = {price: 100000000000000,  eth:  0.6561,         prod: 140000,       upgrade: 50000000000000,   limit: 256};


/*
        boostData[0] = BoostData(30, 0.001 ether);
        boostData[1] = BoostData(50, 0.1 ether);
        boostData[2] = BoostData(100, 1 ether);
*/
boostData = [];

boostData[0] = {bonus: 30, price: 0.3};
boostData[1] = {bonus: 50, price: 0.5};
boostData[2] = {bonus: 100, price: 1.0};

/*
        troopData[0] = TroopData(1,     0,     100000,   0);
        troopData[1] = TroopData(100,   0,     80000000, 0);
        troopData[2] = TroopData(10000, 0,     0,        0.01 ether);
        troopData[3] = TroopData(0,     1,     100000,   0);
        troopData[4] = TroopData(0,     100,   80000000, 0);
        troopData[5] = TroopData(0,     10000, 0,        0.01 ether);
*/


troopData = [];

troopData[0] = {attack: 10,  deffense: 0,    price: 100000,      eth: 0};
troopData[1] = {attack: 1000,  deffense: 0,  price: 80000000,    eth: 0};
troopData[2] = {attack: 100000, deffense: 0, price: 0,           eth: 0.001};
troopData[3] = {attack: 0,    deffense: 15,  price: 100000,      eth: 0};
troopData[4] = {attack: 0,  deffense: 1500,  price: 80000000,    eth: 0};
troopData[5] = {attack: 0, deffense: 150000, price: 0,           eth: 0.002};

