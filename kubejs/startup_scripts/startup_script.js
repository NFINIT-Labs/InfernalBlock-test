// priority: 5
// By: knoxhack for NFINIT Labs

onEvent('worldgen.remove', event => {
  event.removeOres(ore => {
    ore.blocks = [
      'infernalexp:basalt_iron_ore',
      'nourished_nether:basalt_redstone_ore',
      'nourished_nether:nether_iron_ore',
      'nourished_nether:basalt_ash',
      'minecraft:gravel'
    ]
  })
})

//Blocks Modify
onEvent('block.modification', event => {
    event.modify('minecraft:netherrack', block => {
        block.material = 'wood'
        block.requiresTool = false

    })
})

onEvent('tags.items', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('forge:rods', 'stoneutilities:stone_stick')
  event.add('forge:rods/wooden', 'stoneutilities:stone_stick')

  
})
