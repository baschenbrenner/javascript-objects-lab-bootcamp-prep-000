var recipes = new Object()
recipes = { pancakes: ["eggs", "flour", "milk"]}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]:value})
}

function deleteFromObjectByKey(object, key) {
  var newobject = Object.assign({},object)
  delete newobject[key]
  return newobject

}
function destructivelyDeleteFromObjectByKey(object, key)
{ delete object[key]
return object }
