$(document).ready(function(){
    source = "{{#jobs}}<h2>{{position}}</h2><h3>{{company}}</h3><span>{{start-date}} - {{end-date}}</span><ul>  {{#acomplishments}}    <li>{{.}}</li>  {{/acomplishments}}</ul><span>Utilized: {{#tools}}{{.}}, {{/tools}}</span>/jobs}}"
    template = Handlebars.compile(source)
    $.getJSON('/json/jobs.json', function(view){
      html = template(view)
      $('#main').html(html)
      });
    });


