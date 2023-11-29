import data from './data.json' assert { type: 'JSON' };
console.log(data);

class Team {
  constructor(sno,team,won,draw,lost, team_won,team_draw,team_lost) {
    this.rank = 0;
    this.sno = sno ;
    this.team = team ;
    this.games = won + draw + lost ;
    this.won = won ;
    this.draw = draw ;
    this.lost = lost ;
    this.team_games = team_won + team_draw + team_lost ;
    this.team_won = team_won ; 
    this.team_draw = team_draw ; 
    this.team_lost = team_lost ; 
    this.tb1 = won + draw * 0.5 ;
    this.tb2 = team_won*2 + team_draw * 1 ;
    this.tb3 = 0 ;  

  }
}





participants = [];
participants = JSON.parse(data);

let count = 0;
participants = [new Team(1,"Ur mum",4,2,6,3,7,8,2)];
while (count <= data.size()/8){
  count += 1;

}

participants.sort((a, b) => {
    if (a.tb1 > b.tb1)
        return 1;
    
    if (a.tb1 < b.tb1)
        return 1;
    
    if (a.tb1 == b.tb1){
      if (a.tb2 > b.tb2)
        return 1;
      
      if (a.tb2 < b.tb2)
        return 1;
      
    }
    return 0;
});




let table = document.querySelector('table');

let x = 0;
while (x <= participants.length){
participants[x].rank = x+1 ;


let template = `
                
                <tr>
                    <th style="text-align: center">${participants[x].rank}</th>
                    <th style="text-align: center">${participants[x].sno}</th>
                    <th style="text-align: center">${participants[x].team}</th>
                    <th style="text-align: center">${participants[x].games}</th>
                    <th style="text-align: center">${participants[x].won}</th>
                    <th style="text-align: center">${participants[x].draw}</th>
                    <th style="text-align: center">${participants[x].lost}</th>
                    <th style="text-align: center">${participants[x].team_games}</th>
                    <th style="text-align: center">${participants[x].team_won}</th>
                    <th style="text-align: center">${participants[x].team_draw}</th>
                    <th style="text-align: center">${participants[x].team_lost}</th>
                    <th style="text-align: center">${participants[x].tb1}</th>
                    <th style="text-align: center">${participants[x].tb2}</th>
                    <th style="text-align: center">${participants[x].tb3}</th>
                    
               </tr>`;
table.innerHTML += template;
x ++ ;
 
}
