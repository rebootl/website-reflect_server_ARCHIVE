import re
import urllib.request

def create_ref(s):
    '''create a ref from a string
allows alphanumerics and dashes,
convert everything else to dashes,
lowercase'''
    alnum_dashed = re.sub(r'[^a-zA-Z0-9-]', '-', s)
    return alnum_dashed.lower()

def get_active_topic_tags(sel_data):
    topics = []
    subtags=[]
    for topic in sel_data:
        if topic["active"]: topics.append(topic)
        for subtag in topic["subtags"]:
            if subtag["active"]: subtags.append(subtag)
    return topics, subtags

def fetch_url(url):
    with urllib.request.urlopen(url) as response:
        print(response)
        #html = response.read()
