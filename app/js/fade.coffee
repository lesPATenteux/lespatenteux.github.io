fade = (id, delay) ->
  if delay and delay > 0
    setTimeout ->
      $(id).addClass 'in'
    , delay
  else
    $(id).addClass 'in'
