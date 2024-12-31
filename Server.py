import Data


from bottle import route, run, static_file


# function to host stuff.html
@route('/')
def Webhtml():
    return static_file('Web.html', root='')


@route('/tablet.js')
def tables():
    return static_file('tablet.js', root='')


@route('/BarGraph.js')
def BarGraph():
    return static_file('BarGraph.js', root='')


@route('/Data')
def DataGet():
    C = 'https://data.cityofnewyork.us/resource/7x9x-zpz6.json'
    A = 'https://data.cityofnewyork.us/resource/m25r-ji2e.json'
    c = Data.GetCData(C, A)
    return c


run(host='0.0.0.0', port=8080, debug=True)
