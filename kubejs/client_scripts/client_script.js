// priority: 5
// By: knoxhack for NFINIT Labs

//JEI Hide  Items
onEvent('jei.hide.items', event => {
	event.hide('betterfurnacesreforged:cobblestone_generator')
	event.hide('uc:compressed_chiseled_red_sandstone')
	event.hide('uc:compressed_chiseled_sandstone')
	event.hide('uc:compressed_cut_red_sandstone')
	event.hide('uc:compressed_cut_sandstone')
	event.hide('uc:compressed_red_sandstone')
	event.hide('uc:compressed_sandstone')
	event.hide(Item.of('minecraft:potion', '{CustomPotionEffects:[{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:600,Id:112b,ShowIcon:1b,ShowParticles:1b,"forge:id":"mystictools:freeze"}]}'))
    event.hide('industrialforegoing:infinity_nuke')

})
