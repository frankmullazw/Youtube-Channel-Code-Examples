!function(){$(document).ready(function(){var e={init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$container=$(".to-do-list"),this.$button=$("#add-item-submit"),this.$list=$(".list"),this.$input=$("#add-item-input"),this.$completedList=$(".completed-list"),this.$deleteButton=this.$container.find(".delete"),console.log("cached")},bindEvents:function(){console.log("bind"),this.$button.on("click",this.addNewToDo.bind(this)),this.$list.on("change",'input[type="checkbox"]',this.completeTask),this.$deleteButton.on("click",this.deleteTask)},addNewToDo:function(){var e=this.$input.val();this.$list.append('<li><input id="complete-check" type="checkbox">'+e+'<i class="fa fa-times delete"></i></li>'),this.$input.val("")},completeTask:function(){$(this).parent().remove();var e=$(this).parent().text();console.log(e),$(".completed-list").prepend("<li>"+e+'<i class="fa fa-times delete"></i></li>')},deleteTask:function(){$(this).parent().remove(),console.log("delete")}};e.init();var t=$("#friendsList"),i=$("#name"),n=$("#age");$.ajax({type:"GET",url:"http://rest.learncode.academy/api/garrett/friends",success:function(e){$.each(e,function(e,i){t.append("<li>Name: "+i.name+" Age: "+i.age+"</li>")})}}),$(".add-friend-button").on("click",function(){console.log("add friend");var e={name:i.val(),age:n.val()};$.ajax({type:"POST",url:"http://rest.learncode.academy/api/garrett/friends",data:e,sucess:function(e){e.success===!0&&t.append("<li>Name:  "+e.name+"Age:  "+e.age+"</li>")}})}),$.ajax({type:"GET",url:"https://teamtreehouse.com/garrettsanderson.json",dataType:"json",success:function(e){var t=e.name;$(".tree-house-title").append("<h2>"+t+"'s badges</h2>");var i=JSON.stringify(e);$.each(e.badges,function(e,t){$("#treehouse-info").append('<img class="badges" src="'+t.icon_url+'">')})}})})}();