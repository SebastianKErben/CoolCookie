/**
 * Simple class for easy cookie handling.
 * 
 * @class CoolCookie
 */
class CoolCookie {
    /**
     * Creates an instance of CoolCookie.
     * 
     * @param {Number} daysValid 
     * @memberof CoolCookie
     */
    constructor(daysValid) {
        this.cookie = {};

        if (document.cookie)
            this.load(document.cookie);

        let date = new Date();
        date.setDate(date.getDate() + daysValid);
        this.cookie.expires = date;
    }

    /**
     * Erase an entry from the cookie list.
     * 
     * @param {any} entry 
     * @memberof CoolCookie
     */
    erase(entry) {
        if (typeof(entry) !== 'string')
            return;

        this.cookie[entry] = undefined;
        let date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = `${entry} = ${this.cookie[entry]}; expires = ${date}`;
    }

    /**
     * Loads the content cookieData
     * as parameters of CoolCookie.cookie.
     * 
     * @param {String} cookieData
     * @memberof CoolCookie
     */
    load(cookieData) {
        if (typeof(cookieData) !== 'string')
            return;

        let cookies = cookieData.split(';');
        let newCookie = {};
        let crumb = '';

        cookies.forEach(element => {
            crumb = element.split('=');
            newCookie[crumb[0].replace(/\s+/g, '')] = crumb[1];
        });

        this.cookie = newCookie;
    }

    /**
     * Saves the parameters of CoolCookie.cookie
     * as cookies of the current domain.
     * 
     * @memberof CoolCookie
     */
    save() {
        for(const name in this.cookie)
            if (this.cookie[name] !== 'undefined')
                document.cookie = `${name} = ${this.cookie[name]}; expires = ${this.cookie.expires}`;
    }
}