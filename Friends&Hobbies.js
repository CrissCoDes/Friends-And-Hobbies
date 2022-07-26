const Lucas = {
    _friends: [
        {Name: 'Polo', Way: 'Funny'},
        {Name: 'Ralf', Way: 'Smart'},
        {Name: 'Michael', Way: 'Caring'}],
    _hobbies: [
        {Play: 'soccer', Until: '3pm'},
        {Play: 'Videogames', Until: '5pm'},
        {Play: 'Movies', Until: '9pm'}],
    get friends(){
        return this._friends
    },
    get hobbies(){
        return this._hobbies
    },
    foundfriend(newname, newway){
    const friend = {
        Name: newname,
        Way: newway,
    };
       this.friends.push(friend);
    },
    foundhobbie(newplay, newuntil){
        const hobbie = {
            Play: newplay,
            Until: newuntil
        };
        this.hobbies.push(hobbie);
    }
}



Lucas.foundfriend('Martin', 'Stylish');
Lucas.foundhobbie('The Mall', '8pm');


console.log(Lucas);