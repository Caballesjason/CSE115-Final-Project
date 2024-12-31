import urllib.request


import json


def GetCData(url, URL):
    x = []
    y = []
    response = urllib.request.urlopen(url)
    text = response.read().decode()
    GoodStuff = json.loads(text)
    for stuff in GoodStuff:
        if "boro_nm" in stuff:
            g = stuff['boro_nm']
            x.append(g)
    yes = urllib.request.urlopen(URL)
    message = yes.read().decode()
    Yur = json.loads(message)
    for tings in Yur:
        y.append(tings["arrest_boro"])
    b = [x, y]
    a = json.dumps(b)
    return a
