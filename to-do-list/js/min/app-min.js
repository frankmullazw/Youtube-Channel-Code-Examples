!function(){$(document).ready(function(){var t={init:function(){this.cacheDom(),this.bindEvents()},cacheDom:function(){this.$button=$("#add-item-submit"),this.$list=$(".list"),this.$input=$("#add-item-input"),this.$completedList=$(".completed-list")},bindEvents:function(){console.log("bind"),this.$button.on("click",this.addNewToDo.bind(this)),this.$list.on("change",'input[type="checkbox"]',this.completeTask)},addNewToDo:function(){var t=this.$input.val();this.$list.prepend('<li><input id="complete-check" type="checkbox">'+t+"</li>"),this.$input.val("")},completeTask:function(){$(this).parent().remove();var t=$(this).parent().text();console.log(t),$(".completed-list").prepend("<li>"+t+"</li>")}};t.init()})}();