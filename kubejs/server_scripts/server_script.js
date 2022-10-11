// priority: 5
// By: knoxhack for NFINIT Labs

// Recipes
onEvent('recipes', event => {

event.shapeless('2x minecraft:cobblestone', ['minecraft:basalt', 'minecraft:basalt'])
event.shapeless('2x minecraft:cobblestone', ['minecraft:netherrack', 'minecraft:netherrack'])
event.shapeless('2x minecraft:cobblestone', ['minecraft:blackstone', 'minecraft:blackstone'])
event.shapeless('exnihilosequentia:porcelain_clay', ['minecraft:clay_ball', 'exnihilosequentia:dust'])

event.shapeless('2x biomesoplenty:hellbark_sapling', ['biomesoplenty:hellbark_log', 'biomesoplenty:hellbark_log'])
event.shapeless('2x minecraft:oak_sapling', ['minecraft:oak_log', 'minecraft:oak_log'])



event.stonecutting('minecraft:oak_log', 'biomesoplenty:hellbark_log')

event.remove({output: 'quark:cobblestone_bricks'})
event.remove({output: 'exnihilosequentia:stone_crook'})
event.remove({output: 'exnihilosequentia:porcelain_clay'})

event.remove({output: 'cyclic:emerald_helmet'})
event.remove({output: 'cyclic:emerald_chestplate'})
event.remove({output: 'cyclic:emerald_leggings'})
event.remove({output: 'cyclic:emerald_boots'})

event.remove({output: 'cyclic:emerald_axe'})
event.remove({output: 'cyclic:emerald_hoe'})
event.remove({output: 'cyclic:emerald_shovel'})
event.remove({output: 'cyclic:emerald_sword'})
event.remove({output: 'cyclic:emerald_pickaxe'})

event.remove({output: 'exnihilosequentia:acacia_crucible'})
event.remove({output: 'exnihilosequentia:birch_crucible'})
event.remove({output: 'exnihilosequentia:dark_oak_crucible'})
event.remove({output: 'exnihilosequentia:jungle_crucible'})
event.remove({output: 'exnihilosequentia:oak_crucible'})
event.remove({output: 'exnihilosequentia:spruce_crucible'})

event.remove({output: 'exnihilosequentia:end_cake'})





// Shaped

event.shaped(Item.of('ftbquests:lootcrate', '{type:"common_crate"}'), [
    'SS ',
    'SS ',
    '   '
], {
    S: 'doom:argent_energy'
})

// Shaped

event.shaped(Item.of('ftbquests:lootcrate', '{type:"rare"}'), [
    'SS ',
    'SS ',
    '   '
], {
    S: Item.of('ftbquests:lootcrate', '{type:"common_crate"}')
})

// Shaped

event.shaped(Item.of('ftbquests:lootcrate', '{type:"legendary"}'), [
    'SS ',
    'SS ',
    '   '
], {
    S: Item.of('ftbquests:lootcrate', '{type:"rare"}')
})


// market
event.remove({output: 'farmingforblockheads:market'})
event.shaped('farmingforblockheads:market', [
    'NFN',
    'SMS',
    'SSS'
], {
    S: '#minecraft:logs',
    N: '#minecraft:planks',
    F: '#forge:wool',
    M: 'doom:argent_energy'
})


// Shaped

event.shaped('exnihilosequentia:stone_crook', [
    'SS ',
    ' S ',
    ' S '
], {
    S: 'minecraft:cobblestone'
})

// cobblestone parts
event.remove({output: 'stonechest:part_cobblestone'})
event.shaped('stonechest:part_cobblestone', [
    'NO ',
    'ON ',
    '   '
], {
    N: 'minecraft:cobblestone',
    O: 'stoneutilities:stone_stick'

})

//argent energy recipe
event.shaped('doom:argent_energy', [
    ' N ',
    'NNN',
    ' N '
], {
    N: 'minecraft:gold_nugget'

})

//
event.remove({output: 'betterfurnacesreforged:raw_ore_processing_upgrade'})
event.shaped('betterfurnacesreforged:raw_ore_processing_upgrade', [
    'NON',
    'MSL',
    'NKN'
], {
    S: 'minecraft:raw_iron_block',
    N: 'betterfurnacesreforged:netherhot_conductor_block',
    O: 'minecraft:blaze_powder',
    M: '#forge:gems/fluorite',
    K: '#forge:gems/sulfur',
    L: '#forge:gems/niter'
})

//Shears

//Wooden
event.remove({output: 'assortedtools:wood_shears'})
event.shaped('assortedtools:wood_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#minecraft:planks'
})

//Stone Shears
event.remove({output: 'assortedtools:stone_shears'})
event.shaped('assortedtools:stone_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:cobblestone'
})

//Stone Shears
event.remove({output: 'assortedtools:aluminum_shears'})
event.shaped('assortedtools:aluminum_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:ingots/aluminum'
})

//Stone Shears
event.remove({output: 'assortedtools:tin_shears'})
event.shaped('assortedtools:tin_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:ingots/tin'
})

//Stone Shears
event.remove({output: 'assortedtools:copper_shears'})
event.shaped('assortedtools:copper_shears', [
    ' S ',
    'S  ',
    '   '
], {
    S: '#forge:ingots/copper'
})

//crafting stick
event.remove({output: 'cyclic:crafting_stick'})
event.shaped('cyclic:crafting_stick', [
    'MS ',
    'NM ',
    '   '
], {
    S: '#forge:workbench',
    N: '#forge:rods/wooden',
    M: '#minecraft:planks'
})



  function fluidItem(fluid, input, result) {
    event.custom({
      type: `exnihilosequentia:fluid_item`,
      fluid: Fluid.of(fluid).toJson(),
      input: Ingredient.of(input).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  // Fluid Item Transformation
  fluidItem(`minecraft:lava`,`minecraft:netherrack`,`minecraft:crimson_stem`)
  fluidItem(`minecraft:lava`,'minecraft:soul_sand','biomesoplenty:hellbark_log')
  fluidItem(`minecraft:lava`,'minecraft:dirt','minecraft:oak_log')
  fluidItem(`minecraft:lava`,'minecraft:gravel','minecraft:warped_stem')



event.recipes.exnihilosequentia.hammer('minecraft:netherrack')
        .addDrop('minecraft:cobblestone', 1, 1)


})
