({
     switchTab: function(component, event) {
        let selected = event.getSource().get("v.value");
        component.set("v.selectedTab", selected);
        let tabs = component.find('button') ;

        helper.selectTab (tab, selected);
    },
    handleBoozesLoade : function(component, event){
        console.log(event.getParam(boozes));
    }
})
