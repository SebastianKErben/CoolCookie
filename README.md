# CoolCookie
Simple __ECMAScript 6__ class for easy cookie handling. The way Cookies are handled is by parsing the cookie parameter of a CoolCookie instance as cookie strings. It's a rather small class.

You first create an instance of CoolCookie which attempts to load existing cookies:

    let cookieHandler = new CoolCookie(3);

_3_ means that the cookies will expire after 3 days. Likewise, _365_ would mean the cookies will expire after 1 year. You can then access existing or create new cookies with:

    cookieHandler.cookie

For example:

    cookieHandler.cookie.name = 'John Smith';

Saving is done by calling:

    cookieHandler.save();

If you would like to delete a value, call:

    cookieHandler.erase

For example deleting _name_ from the example you would call:

    cookieHandler.erase('name');

See the example and QUnit test for more information.
