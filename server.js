@app.route('/log', methods=['POST'])
def log():
  data = request.get_json()
  print(data)
  return "OK"
