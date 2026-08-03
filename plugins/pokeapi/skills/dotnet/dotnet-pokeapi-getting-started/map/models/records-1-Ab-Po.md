# Records (`Ability` … `PokemonEntry`)

**Exact coverage: `Ability` through `PokemonEntry`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `PokApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `Ability` | — | `AbilityValue (ability): Ability1 !req`, `IsHidden (is_hidden): bool !req`, `Slot (slot): int !req` | `Models/Ability.cs` |
| `Ability1` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Ability1.cs` |
| `AbilityChange` | — | `VersionGroup (version_group): VersionGroupSummary !req`, `EffectEntries (effect_entries): IReadOnlyList<AbilityChangeEffectText> !req` | `Models/AbilityChange.cs` |
| `AbilityChangeEffectText` | — | `Effect (effect): string !req`, `Language (language): LanguageSummary !req` | `Models/AbilityChangeEffectText.cs` |
| `AbilityDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `IsMainSeries (is_main_series): bool?`, `Generation (generation): GenerationSummary !req`, `Names (names): IReadOnlyList<AbilityName> !req`, `EffectEntries (effect_entries): IReadOnlyList<AbilityEffectText> !req`, `EffectChanges (effect_changes): IReadOnlyList<AbilityChange> !req`, `FlavorTextEntries (flavor_text_entries): IReadOnlyList<AbilityFlavorText> !req`, `Pokemon (pokemon): IReadOnlyList<Pokemon> !req` | `Models/AbilityDetail.cs` |
| `AbilityEffectText` | — | `Effect (effect): string !req`, `ShortEffect (short_effect): string !req`, `Language (language): LanguageSummary !req` | `Models/AbilityEffectText.cs` |
| `AbilityFlavorText` | — | `FlavorText (flavor_text): string !req`, `Language (language): LanguageSummary !req`, `VersionGroup (version_group): VersionGroupSummary !req` | `Models/AbilityFlavorText.cs` |
| `AbilityName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/AbilityName.cs` |
| `AbilitySummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/AbilitySummary.cs` |
| `AffectingItem` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/AffectingItem.cs` |
| `AffectingMoves` | — | `Increase (increase): IReadOnlyList<Increase1> !req`, `Decrease (decrease): IReadOnlyList<Decrease1> !req` | `Models/AffectingMoves.cs` |
| `AffectingNatures` | — | `Decrease (decrease): IReadOnlyList<Decrease> !req`, `Increase (increase): IReadOnlyList<Increase> !req` | `Models/AffectingNatures.cs` |
| `AffectingNatures1` | — | `Increase (increase): IReadOnlyList<Increase2> !req`, `Decrease (decrease): IReadOnlyList<Decrease2> !req` | `Models/AffectingNatures1.cs` |
| `ApiV2MetaResponse` | — | `DeployDate (deploy_date): string?`, `Hash (hash): string?`, `Tag (tag): string?` | `Models/ApiV2MetaResponse.cs` |
| `ApiV2PokemonEncountersResponse` | — | `LocationArea (location_area): LocationArea !req`, `VersionDetails (version_details): IReadOnlyList<VersionDetail4> !req` | `Models/ApiV2PokemonEncountersResponse.cs` |
| `Area` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Area.cs` |
| `AttributeModel` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/AttributeModel.cs` |
| `AwesomeName` | — | `AwesomeNameValue (awesome_name): string !req`, `Language (language): Language !req` | `Models/AwesomeName.cs` |
| `BabyTriggerFor` | — | `Url (url): string !req` | `Models/BabyTriggerFor.cs` |
| `BaseForm` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/BaseForm.cs` |
| `Berry` | — | `Potency (potency): int !req`, `BerryValue (berry): Berry1 !req` | `Models/Berry.cs` |
| `Berry1` | — | `Name (name): string?`, `Url (url): string?` | `Models/Berry1.cs` |
| `BerryDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `GrowthTime (growth_time): int?`, `MaxHarvest (max_harvest): int?`, `NaturalGiftPower (natural_gift_power): int?`, `Size (size): int?`, `Smoothness (smoothness): int?`, `SoilDryness (soil_dryness): int?`, `Firmness (firmness): BerryFirmnessSummary !req`, `Flavors (flavors): IReadOnlyList<Flavor> !req`, `Item (item): ItemSummary !req`, `NaturalGiftType (natural_gift_type): TypeSummary !req` | `Models/BerryDetail.cs` |
| `BerryFirmnessDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Berries (berries): IReadOnlyList<BerrySummary> !req`, `Names (names): IReadOnlyList<BerryFirmnessName> !req` | `Models/BerryFirmnessDetail.cs` |
| `BerryFirmnessName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/BerryFirmnessName.cs` |
| `BerryFirmnessSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/BerryFirmnessSummary.cs` |
| `BerryFlavorDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Berries (berries): IReadOnlyList<Berry> !req`, `ContestType (contest_type): ContestTypeSummary !req`, `Names (names): IReadOnlyList<BerryFlavorName> !req` | `Models/BerryFlavorDetail.cs` |
| `BerryFlavorName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/BerryFlavorName.cs` |
| `BerryFlavorSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/BerryFlavorSummary.cs` |
| `BerrySummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/BerrySummary.cs` |
| `Chain` | — | `EvolutionDetails (evolution_details): IReadOnlyList<object> !req`, `EvolvesTo (evolves_to): IReadOnlyList<EvolvesTo> !req`, `IsBaby (is_baby): bool !req`, `Species (species): Species !req` | `Models/Chain.cs` |
| `CharacteristicDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/CharacteristicDescription.cs` |
| `CharacteristicDetail` | — | `Id (id): int !req`, `GeneModulo (gene_modulo): int !req`, `PossibleValues (possible_values): IReadOnlyList<int> !req`, `HighestStat (highest_stat): StatSummary !req`, `Descriptions (descriptions): IReadOnlyList<CharacteristicDescription> !req` | `Models/CharacteristicDetail.cs` |
| `CharacteristicSummary` | — | `Url (url): string !req` | `Models/CharacteristicSummary.cs` |
| `ConditionValues` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ConditionValues.cs` |
| `ContestCombos` | — | `Normal (normal): Normal !req`, `Super (super): Super !req` | `Models/ContestCombos.cs` |
| `ContestEffectDetail` | — | `Id (id): int !req`, `Appeal (appeal): int !req`, `Jam (jam): int !req`, `EffectEntries (effect_entries): IReadOnlyList<ContestEffectEffectText> !req`, `FlavorTextEntries (flavor_text_entries): IReadOnlyList<ContestEffectFlavorText> !req` | `Models/ContestEffectDetail.cs` |
| `ContestEffectEffectText` | — | `Effect (effect): string !req`, `Language (language): LanguageSummary !req` | `Models/ContestEffectEffectText.cs` |
| `ContestEffectFlavorText` | — | `FlavorText (flavor_text): string !req`, `Language (language): LanguageSummary !req` | `Models/ContestEffectFlavorText.cs` |
| `ContestEffectSummary` | — | `Url (url): string !req` | `Models/ContestEffectSummary.cs` |
| `ContestTypeDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `BerryFlavor (berry_flavor): BerryFlavorSummary !req`, `Names (names): IReadOnlyList<ContestTypeName> !req` | `Models/ContestTypeDetail.cs` |
| `ContestTypeName` | — | `Name (name): string !req`, `Color (color): string !req`, `Language (language): LanguageSummary !req` | `Models/ContestTypeName.cs` |
| `ContestTypeSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ContestTypeSummary.cs` |
| `Cries` | — | `Latest (latest): string !req`, `Legacy (legacy): string !req` | `Models/Cries.cs` |
| `DamageRelations` | — | `NoDamageTo (no_damage_to): IReadOnlyList<NoDamageTo> !req`, `HalfDamageTo (half_damage_to): IReadOnlyList<HalfDamageTo> !req`, `DoubleDamageTo (double_damage_to): IReadOnlyList<DoubleDamageTo> !req`, `NoDamageFrom (no_damage_from): IReadOnlyList<NoDamageFrom> !req`, `HalfDamageFrom (half_damage_from): IReadOnlyList<HalfDamageFrom> !req`, `DoubleDamageFrom (double_damage_from): IReadOnlyList<DoubleDamageFrom> !req` | `Models/DamageRelations.cs` |
| `Decrease` | — | `MaxChange (max_change): int !req`, `Nature (nature): Nature !req` | `Models/Decrease.cs` |
| `Decrease1` | — | `Change (change): int !req`, `Move (move): Move !req` | `Models/Decrease1.cs` |
| `Decrease2` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Decrease2.cs` |
| `DoubleDamageFrom` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/DoubleDamageFrom.cs` |
| `DoubleDamageTo` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/DoubleDamageTo.cs` |
| `EffectChange` | — | `EffectEntries (effect_entries): IReadOnlyList<EffectEntry2> !req`, `VersionGroup (version_group): VersionGroup !req` | `Models/EffectChange.cs` |
| `EffectEntry` | — | `Effect (effect): string !req`, `ShortEffect (short_effect): string !req`, `Language (language): Language !req` | `Models/EffectEntry.cs` |
| `EffectEntry2` | — | `Effect (effect): string !req`, `Language (language): Language !req` | `Models/EffectEntry2.cs` |
| `EggGroup` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EggGroup.cs` |
| `EggGroupDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<EggGroupName> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpecy> !req` | `Models/EggGroupDetail.cs` |
| `EggGroupName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/EggGroupName.cs` |
| `EggGroupSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EggGroupSummary.cs` |
| `EncounterConditionDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Values (values): IReadOnlyList<EncounterConditionValueSummary> !req`, `Names (names): IReadOnlyList<EncounterConditionName> !req` | `Models/EncounterConditionDetail.cs` |
| `EncounterConditionName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/EncounterConditionName.cs` |
| `EncounterConditionSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EncounterConditionSummary.cs` |
| `EncounterConditionValueDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Condition (condition): EncounterConditionSummary !req`, `Names (names): IReadOnlyList<EncounterConditionValueName> !req` | `Models/EncounterConditionValueDetail.cs` |
| `EncounterConditionValueName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/EncounterConditionValueName.cs` |
| `EncounterConditionValueSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EncounterConditionValueSummary.cs` |
| `EncounterDetails` | — | `MinLevel (min_level): int !req`, `MaxLevel (max_level): int !req`, `ConditionValues (condition_values): ConditionValues?`, `Chance (chance): int !req`, `Method (method): Method !req` | `Models/EncounterDetails.cs` |
| `EncounterDetails1` | — | `Chance (chance): double !req`, `ConditionValues (condition_values): IReadOnlyList<ConditionValues> !req`, `MaxLevel (max_level): double !req`, `Method (method): Method !req`, `MinLevel (min_level): double !req` | `Models/EncounterDetails1.cs` |
| `EncounterMethod` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EncounterMethod.cs` |
| `EncounterMethodDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Order (order): int?`, `Names (names): IReadOnlyList<EncounterMethodName> !req` | `Models/EncounterMethodDetail.cs` |
| `EncounterMethodName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/EncounterMethodName.cs` |
| `EncounterMethodRate` | — | `EncounterMethod (encounter_method): EncounterMethod !req`, `VersionDetails (version_details): IReadOnlyList<VersionDetail1> !req` | `Models/EncounterMethodRate.cs` |
| `EncounterMethodSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EncounterMethodSummary.cs` |
| `EvolutionChainDetail` | — | `Id (id): int !req`, `BabyTriggerItem (baby_trigger_item): ItemSummary !req`, `Chain (chain): Chain !req` | `Models/EvolutionChainDetail.cs` |
| `EvolutionChainSummary` | — | `Url (url): string !req` | `Models/EvolutionChainSummary.cs` |
| `EvolutionDetail` | — | `VersionGroup (version_group): VersionGroup !req`, `IsDefault (is_default): bool !req`, `Gender (gender): Gender? !req`, `HeldItem (held_item): HeldItem? !req`, `Item (item): Item? !req`, `KnownMove (known_move): object? !req`, `KnownMoveType (known_move_type): object? !req`, `Location (location): Location? !req`, `MinAffection (min_affection): int? !req`, `MinBeauty (min_beauty): int? !req`, `MinDamageTaken (min_damage_taken): int? !req`, `MinHappiness (min_happiness): int? !req`, `MinLevel (min_level): int? !req`, `MinMoveCount (min_move_count): int? !req`, `MinSteps (min_steps): int? !req`, `NearSpecialRock (near_special_rock): bool? !req`, `NeedsMultiplayer (needs_multiplayer): bool? !req`, `NeedsOverworldRain (needs_overworld_rain): bool? !req`, `PartySpecies (party_species): string? !req`, `PartyType (party_type): string? !req`, `RelativePhysicalStats (relative_physical_stats): string? !req`, `TimeOfDay (time_of_day): string !req`, `TradeSpecies (trade_species): string? !req`, `Trigger (trigger): Trigger !req`, `TurnUpsideDown (turn_upside_down): bool !req`, `UsedMove (used_move): object? !req`, `Region (region): Region? !req`, `BaseForm (base_form): BaseForm? !req`, `EvolvedForm (evolved_form): EvolvedForm? !req` | `Models/EvolutionDetail.cs` |
| `EvolutionTriggerDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<EvolutionTriggerName> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpecy1> !req` | `Models/EvolutionTriggerDetail.cs` |
| `EvolutionTriggerName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/EvolutionTriggerName.cs` |
| `EvolutionTriggerSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EvolutionTriggerSummary.cs` |
| `EvolvedForm` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/EvolvedForm.cs` |
| `EvolvesTo` | — | `EvolutionDetails (evolution_details): IReadOnlyList<EvolutionDetail> !req`, `IsBaby (is_baby): bool !req`, `Species (species): Species !req` | `Models/EvolvesTo.cs` |
| `Experience` | — | `Level (level): int !req`, `ExperienceValue (experience): int !req` | `Models/Experience.cs` |
| `Flavor` | — | `Potency (potency): int !req`, `FlavorValue (flavor): Flavor1 !req` | `Models/Flavor.cs` |
| `Flavor1` | — | `Name (name): string?`, `Url (url): string?` | `Models/Flavor1.cs` |
| `FormName` | — | `Language (language): Language !req`, `Name (name): string !req` | `Models/FormName.cs` |
| `Gender` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Gender.cs` |
| `GenderDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `PokemonSpeciesDetails (pokemon_species_details): IReadOnlyList<PokemonSpeciesDetail2> !req`, `RequiredForEvolution (required_for_evolution): IReadOnlyList<RequiredForEvolution> !req` | `Models/GenderDetail.cs` |
| `GenderSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/GenderSummary.cs` |
| `Genera` | — | `Genus (genus): string !req`, `Language (language): Language !req` | `Models/Genera.cs` |
| `Generation` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Generation.cs` |
| `GenerationDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Abilities (abilities): IReadOnlyList<AbilitySummary> !req`, `MainRegion (main_region): RegionSummary !req`, `Moves (moves): IReadOnlyList<MoveSummary> !req`, `Names (names): IReadOnlyList<GenerationName> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpeciesSummary> !req`, `Types (types): IReadOnlyList<TypeSummary> !req`, `VersionGroups (version_groups): IReadOnlyList<VersionGroupSummary> !req` | `Models/GenerationDetail.cs` |
| `GenerationName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/GenerationName.cs` |
| `GenerationSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/GenerationSummary.cs` |
| `GrowthRateDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/GrowthRateDescription.cs` |
| `GrowthRateDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Formula (formula): string !req`, `Descriptions (descriptions): IReadOnlyList<GrowthRateDescription> !req`, `Levels (levels): IReadOnlyList<Experience> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpeciesSummary> !req` | `Models/GrowthRateDetail.cs` |
| `GrowthRateSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/GrowthRateSummary.cs` |
| `HalfDamageFrom` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/HalfDamageFrom.cs` |
| `HalfDamageTo` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/HalfDamageTo.cs` |
| `HeldByPokemon` | — | `Pokemon (pokemon): Pokemon1 !req`, `VersionDetails (version-details): IReadOnlyList<VersionDetail3> !req` | `Models/HeldByPokemon.cs` |
| `HeldItem` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/HeldItem.cs` |
| `HeldItem1` | — | `Item (item): Item !req`, `VersionDetails (version_details): IReadOnlyList<VersionDetail3> !req` | `Models/HeldItem1.cs` |
| `Increase` | — | `MaxChange (max_change): int !req`, `Nature (nature): Nature !req` | `Models/Increase.cs` |
| `Increase1` | — | `Change (change): int !req`, `Move (move): Move !req` | `Models/Increase1.cs` |
| `Increase2` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Increase2.cs` |
| `Item` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Item.cs` |
| `ItemAttributeDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/ItemAttributeDescription.cs` |
| `ItemAttributeDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Descriptions (descriptions): IReadOnlyList<ItemAttributeDescription> !req`, `Items (items): IReadOnlyList<Item> !req`, `Names (names): IReadOnlyList<ItemAttributeName> !req` | `Models/ItemAttributeDetail.cs` |
| `ItemAttributeName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/ItemAttributeName.cs` |
| `ItemAttributeSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ItemAttributeSummary.cs` |
| `ItemCategoryDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Items (items): IReadOnlyList<ItemSummary> !req`, `Names (names): IReadOnlyList<ItemCategoryName> !req`, `Pocket (pocket): ItemPocketSummary !req` | `Models/ItemCategoryDetail.cs` |
| `ItemCategoryName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/ItemCategoryName.cs` |
| `ItemCategorySummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ItemCategorySummary.cs` |
| `ItemDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Cost (cost): int?`, `FlingPower (fling_power): int?`, `FlingEffect (fling_effect): ItemFlingEffectSummary !req`, `Attributes (attributes): IReadOnlyList<AttributeModel> !req`, `Category (category): ItemCategorySummary !req`, `EffectEntries (effect_entries): IReadOnlyList<ItemEffectText> !req`, `FlavorTextEntries (flavor_text_entries): IReadOnlyList<ItemFlavorText> !req`, `GameIndices (game_indices): IReadOnlyList<ItemGameIndex> !req`, `Names (names): IReadOnlyList<ItemName> !req`, `HeldByPokemon (held_by_pokemon): IReadOnlyList<HeldByPokemon> !req`, `Sprites (sprites): Sprites !req`, `BabyTriggerFor (baby_trigger_for): BabyTriggerFor !req`, `Machines (machines): IReadOnlyList<Machine> !req` | `Models/ItemDetail.cs` |
| `ItemEffectText` | — | `Effect (effect): string !req`, `ShortEffect (short_effect): string !req`, `Language (language): LanguageSummary !req` | `Models/ItemEffectText.cs` |
| `ItemFlavorText` | — | `Text (text): string !req`, `VersionGroup (version_group): VersionGroupSummary !req`, `Language (language): LanguageSummary !req` | `Models/ItemFlavorText.cs` |
| `ItemFlingEffectDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `EffectEntries (effect_entries): IReadOnlyList<ItemFlingEffectEffectText> !req`, `Items (items): IReadOnlyList<ItemSummary> !req` | `Models/ItemFlingEffectDetail.cs` |
| `ItemFlingEffectEffectText` | — | `Effect (effect): string !req`, `Language (language): LanguageSummary !req` | `Models/ItemFlingEffectEffectText.cs` |
| `ItemFlingEffectSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ItemFlingEffectSummary.cs` |
| `ItemGameIndex` | — | `GameIndex (game_index): int !req`, `Generation (generation): GenerationSummary !req` | `Models/ItemGameIndex.cs` |
| `ItemName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/ItemName.cs` |
| `ItemPocketDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Categories (categories): IReadOnlyList<ItemCategorySummary> !req`, `Names (names): IReadOnlyList<ItemPocketName> !req` | `Models/ItemPocketDetail.cs` |
| `ItemPocketName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/ItemPocketName.cs` |
| `ItemPocketSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ItemPocketSummary.cs` |
| `ItemSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/ItemSummary.cs` |
| `Language` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Language.cs` |
| `LanguageDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Official (official): bool?`, `Iso639 (iso639): string !req`, `Iso3166 (iso3166): string !req`, `Names (names): IReadOnlyList<LanguageName> !req` | `Models/LanguageDetail.cs` |
| `LanguageName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/LanguageName.cs` |
| `LanguageSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/LanguageSummary.cs` |
| `LearnedByPokemon` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/LearnedByPokemon.cs` |
| `Location` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Location.cs` |
| `LocationArea` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/LocationArea.cs` |
| `LocationAreaDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `GameIndex (game_index): int !req`, `EncounterMethodRates (encounter_method_rates): IReadOnlyList<EncounterMethodRate> !req`, `Location (location): LocationSummary !req`, `Names (names): IReadOnlyList<LocationAreaName> !req`, `PokemonEncounters (pokemon_encounters): IReadOnlyList<PokemonEncounter> !req` | `Models/LocationAreaDetail.cs` |
| `LocationAreaName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/LocationAreaName.cs` |
| `LocationAreaSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/LocationAreaSummary.cs` |
| `LocationDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Region (region): RegionSummary !req`, `Names (names): IReadOnlyList<LocationName> !req`, `GameIndices (game_indices): IReadOnlyList<LocationGameIndex> !req`, `Areas (areas): IReadOnlyList<LocationAreaSummary> !req` | `Models/LocationDetail.cs` |
| `LocationGameIndex` | — | `GameIndex (game_index): int !req`, `Generation (generation): GenerationSummary !req` | `Models/LocationGameIndex.cs` |
| `LocationName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/LocationName.cs` |
| `LocationSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/LocationSummary.cs` |
| `Machine` | — | `MachineValue (machine): string !req`, `VersionGroup (version_group): VersionGroup !req` | `Models/Machine.cs` |
| `Machine1` | — | `Machine (machine): Machine2 !req`, `VersionGroup (version_group): VersionGroup !req` | `Models/Machine1.cs` |
| `Machine2` | — | `Url (url): string !req` | `Models/Machine2.cs` |
| `MachineDetail` | — | `Id (id): int !req`, `Item (item): ItemSummary !req`, `VersionGroup (version_group): VersionGroupSummary !req`, `Move (move): MoveSummary !req` | `Models/MachineDetail.cs` |
| `MachineSummary` | — | `Url (url): string !req` | `Models/MachineSummary.cs` |
| `Method` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Method.cs` |
| `Move` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Move.cs` |
| `Move2` | — | `Move (move): Move !req`, `VersionGroupDetails (version_group_details): IReadOnlyList<VersionGroupDetail2> !req` | `Models/Move2.cs` |
| `MoveBattleStyleDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<MoveBattleStyleName> !req` | `Models/MoveBattleStyleDetail.cs` |
| `MoveBattleStyleName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/MoveBattleStyleName.cs` |
| `MoveBattleStyleSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveBattleStyleSummary.cs` |
| `MoveChange` | — | `Accuracy (accuracy): int?`, `Power (power): int?`, `Pp (pp): int?`, `EffectChance (effect_chance): int !req`, `EffectEntries (effect_entries): IReadOnlyList<EffectEntry> !req`, `Type (type): TypeSummary !req`, `VersionGroup (version_group): VersionGroupSummary !req` | `Models/MoveChange.cs` |
| `MoveDamageClassDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/MoveDamageClassDescription.cs` |
| `MoveDamageClassDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Descriptions (descriptions): IReadOnlyList<MoveDamageClassDescription> !req`, `Moves (moves): IReadOnlyList<MoveSummary> !req`, `Names (names): IReadOnlyList<MoveDamageClassName> !req` | `Models/MoveDamageClassDetail.cs` |
| `MoveDamageClassName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/MoveDamageClassName.cs` |
| `MoveDamageClassSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveDamageClassSummary.cs` |
| `MoveDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Accuracy (accuracy): int?`, `EffectChance (effect_chance): int !req`, `Pp (pp): int?`, `Priority (priority): int?`, `Power (power): int?`, `ContestCombos (contest_combos): ContestCombos !req`, `ContestType (contest_type): ContestTypeSummary !req`, `ContestEffect (contest_effect): ContestEffectSummary !req`, `DamageClass (damage_class): MoveDamageClassSummary !req`, `EffectEntries (effect_entries): IReadOnlyList<EffectEntry> !req`, `EffectChanges (effect_changes): IReadOnlyList<EffectChange> !req`, `Generation (generation): GenerationSummary !req`, `Meta (meta): MoveMeta !req`, `Names (names): IReadOnlyList<MoveName> !req`, `PastValues (past_values): IReadOnlyList<MoveChange> !req`, `StatChanges (stat_changes): IReadOnlyList<StatChange> !req`, `SuperContestEffect (super_contest_effect): SuperContestEffectSummary !req`, `Target (target): MoveTargetSummary !req`, `Type (type): TypeSummary !req`, `Machines (machines): IReadOnlyList<Machine1> !req`, `FlavorTextEntries (flavor_text_entries): IReadOnlyList<MoveFlavorText> !req`, `LearnedByPokemon (learned_by_pokemon): IReadOnlyList<LearnedByPokemon> !req` | `Models/MoveDetail.cs` |
| `MoveFlavorText` | — | `FlavorText (flavor_text): string !req`, `Language (language): LanguageSummary !req`, `VersionGroup (version_group): VersionGroupSummary !req` | `Models/MoveFlavorText.cs` |
| `MoveLearnMethod` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveLearnMethod.cs` |
| `MoveLearnMethodDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/MoveLearnMethodDescription.cs` |
| `MoveLearnMethodDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<MoveLearnMethodName> !req`, `Descriptions (descriptions): IReadOnlyList<MoveLearnMethodDescription> !req`, `VersionGroups (version_groups): IReadOnlyList<VersionGroup> !req` | `Models/MoveLearnMethodDetail.cs` |
| `MoveLearnMethodName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/MoveLearnMethodName.cs` |
| `MoveLearnMethodSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveLearnMethodSummary.cs` |
| `MoveMeta` | — | `Ailment (ailment): MoveMetaAilmentSummary !req`, `Category (category): MoveMetaCategorySummary !req`, `MinHits (min_hits): int?`, `MaxHits (max_hits): int?`, `MinTurns (min_turns): int?`, `MaxTurns (max_turns): int?`, `Drain (drain): int?`, `Healing (healing): int?`, `CritRate (crit_rate): int?`, `AilmentChance (ailment_chance): int?`, `FlinchChance (flinch_chance): int?`, `StatChance (stat_chance): int?` | `Models/MoveMeta.cs` |
| `MoveMetaAilmentDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Moves (moves): IReadOnlyList<Move> !req`, `Names (names): IReadOnlyList<MoveMetaAilmentName> !req` | `Models/MoveMetaAilmentDetail.cs` |
| `MoveMetaAilmentName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/MoveMetaAilmentName.cs` |
| `MoveMetaAilmentSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveMetaAilmentSummary.cs` |
| `MoveMetaCategoryDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/MoveMetaCategoryDescription.cs` |
| `MoveMetaCategoryDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Descriptions (descriptions): IReadOnlyList<MoveMetaCategoryDescription> !req`, `Moves (moves): IReadOnlyList<Move> !req` | `Models/MoveMetaCategoryDetail.cs` |
| `MoveMetaCategorySummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveMetaCategorySummary.cs` |
| `MoveName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/MoveName.cs` |
| `MoveSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveSummary.cs` |
| `MoveTargetDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/MoveTargetDescription.cs` |
| `MoveTargetDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Descriptions (descriptions): IReadOnlyList<MoveTargetDescription> !req`, `Moves (moves): IReadOnlyList<MoveSummary> !req`, `Names (names): IReadOnlyList<MoveTargetName> !req` | `Models/MoveTargetDetail.cs` |
| `MoveTargetName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/MoveTargetName.cs` |
| `MoveTargetSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/MoveTargetSummary.cs` |
| `Name` | — | `Language (language): Language !req`, `NameValue (name): string !req` | `Models/Name.cs` |
| `Name1` | — | `Url (url): string !req`, `Name (name): string !req` | `Models/Name1.cs` |
| `Nature` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Nature.cs` |
| `NatureBattleStylePreference` | — | `LowHpPreference (low_hp_preference): int !req`, `HighHpPreference (high_hp_preference): int !req`, `MoveBattleStyle (move_battle_style): MoveBattleStyleSummary !req` | `Models/NatureBattleStylePreference.cs` |
| `NatureDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `DecreasedStat (decreased_stat): StatSummary !req`, `IncreasedStat (increased_stat): StatSummary !req`, `LikesFlavor (likes_flavor): BerryFlavorSummary !req`, `HatesFlavor (hates_flavor): BerryFlavorSummary !req`, `Berries (berries): IReadOnlyList<BerrySummary> !req`, `PokeathlonStatChanges (pokeathlon_stat_changes): IReadOnlyList<PokeathlonStatChange> !req`, `MoveBattleStylePreferences (move_battle_style_preferences): IReadOnlyList<NatureBattleStylePreference> !req`, `Names (names): IReadOnlyList<NatureName> !req` | `Models/NatureDetail.cs` |
| `NatureName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/NatureName.cs` |
| `NatureSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/NatureSummary.cs` |
| `NoDamageFrom` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/NoDamageFrom.cs` |
| `NoDamageTo` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/NoDamageTo.cs` |
| `Normal` | — | `UseBefore (use_before): IReadOnlyList<UseBefore?> !req`, `UseAfter (use_after): IReadOnlyList<UseAfter?> !req` | `Models/Normal.cs` |
| `PaginatedAbilitySummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<AbilitySummary> !req` | `Models/PaginatedAbilitySummaryList.cs` |
| `PaginatedBerryFirmnessSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<BerryFirmnessSummary> !req` | `Models/PaginatedBerryFirmnessSummaryList.cs` |
| `PaginatedBerryFlavorSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<BerryFlavorSummary> !req` | `Models/PaginatedBerryFlavorSummaryList.cs` |
| `PaginatedBerrySummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<BerrySummary> !req` | `Models/PaginatedBerrySummaryList.cs` |
| `PaginatedCharacteristicSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<CharacteristicSummary> !req` | `Models/PaginatedCharacteristicSummaryList.cs` |
| `PaginatedContestEffectSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ContestEffectSummary> !req` | `Models/PaginatedContestEffectSummaryList.cs` |
| `PaginatedContestTypeSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ContestTypeSummary> !req` | `Models/PaginatedContestTypeSummaryList.cs` |
| `PaginatedEggGroupSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<EggGroupSummary> !req` | `Models/PaginatedEggGroupSummaryList.cs` |
| `PaginatedEncounterConditionSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<EncounterConditionSummary> !req` | `Models/PaginatedEncounterConditionSummaryList.cs` |
| `PaginatedEncounterConditionValueSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<EncounterConditionValueSummary> !req` | `Models/PaginatedEncounterConditionValueSummaryList.cs` |
| `PaginatedEncounterMethodSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<EncounterMethodSummary> !req` | `Models/PaginatedEncounterMethodSummaryList.cs` |
| `PaginatedEvolutionChainSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<EvolutionChainSummary> !req` | `Models/PaginatedEvolutionChainSummaryList.cs` |
| `PaginatedEvolutionTriggerSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<EvolutionTriggerSummary> !req` | `Models/PaginatedEvolutionTriggerSummaryList.cs` |
| `PaginatedGenderSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<GenderSummary> !req` | `Models/PaginatedGenderSummaryList.cs` |
| `PaginatedGenerationSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<GenerationSummary> !req` | `Models/PaginatedGenerationSummaryList.cs` |
| `PaginatedGrowthRateSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<GrowthRateSummary> !req` | `Models/PaginatedGrowthRateSummaryList.cs` |
| `PaginatedItemAttributeSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ItemAttributeSummary> !req` | `Models/PaginatedItemAttributeSummaryList.cs` |
| `PaginatedItemCategorySummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ItemCategorySummary> !req` | `Models/PaginatedItemCategorySummaryList.cs` |
| `PaginatedItemFlingEffectSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ItemFlingEffectSummary> !req` | `Models/PaginatedItemFlingEffectSummaryList.cs` |
| `PaginatedItemPocketSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ItemPocketSummary> !req` | `Models/PaginatedItemPocketSummaryList.cs` |
| `PaginatedItemSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<ItemSummary> !req` | `Models/PaginatedItemSummaryList.cs` |
| `PaginatedLanguageSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<LanguageSummary> !req` | `Models/PaginatedLanguageSummaryList.cs` |
| `PaginatedLocationAreaSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<LocationAreaSummary> !req` | `Models/PaginatedLocationAreaSummaryList.cs` |
| `PaginatedLocationSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<LocationSummary> !req` | `Models/PaginatedLocationSummaryList.cs` |
| `PaginatedMachineSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MachineSummary> !req` | `Models/PaginatedMachineSummaryList.cs` |
| `PaginatedMoveBattleStyleSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveBattleStyleSummary> !req` | `Models/PaginatedMoveBattleStyleSummaryList.cs` |
| `PaginatedMoveDamageClassSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveDamageClassSummary> !req` | `Models/PaginatedMoveDamageClassSummaryList.cs` |
| `PaginatedMoveLearnMethodSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveLearnMethodSummary> !req` | `Models/PaginatedMoveLearnMethodSummaryList.cs` |
| `PaginatedMoveMetaAilmentSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveMetaAilmentSummary> !req` | `Models/PaginatedMoveMetaAilmentSummaryList.cs` |
| `PaginatedMoveMetaCategorySummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveMetaCategorySummary> !req` | `Models/PaginatedMoveMetaCategorySummaryList.cs` |
| `PaginatedMoveSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveSummary> !req` | `Models/PaginatedMoveSummaryList.cs` |
| `PaginatedMoveTargetSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<MoveTargetSummary> !req` | `Models/PaginatedMoveTargetSummaryList.cs` |
| `PaginatedNatureSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<NatureSummary> !req` | `Models/PaginatedNatureSummaryList.cs` |
| `PaginatedPalParkAreaSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PalParkAreaSummary> !req` | `Models/PaginatedPalParkAreaSummaryList.cs` |
| `PaginatedPokeathlonStatSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokeathlonStatSummary> !req` | `Models/PaginatedPokeathlonStatSummaryList.cs` |
| `PaginatedPokedexSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokedexSummary> !req` | `Models/PaginatedPokedexSummaryList.cs` |
| `PaginatedPokemonColorSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokemonColorSummary> !req` | `Models/PaginatedPokemonColorSummaryList.cs` |
| `PaginatedPokemonFormSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokemonFormSummary> !req` | `Models/PaginatedPokemonFormSummaryList.cs` |
| `PaginatedPokemonHabitatSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokemonHabitatSummary> !req` | `Models/PaginatedPokemonHabitatSummaryList.cs` |
| `PaginatedPokemonShapeSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokemonShapeSummary> !req` | `Models/PaginatedPokemonShapeSummaryList.cs` |
| `PaginatedPokemonSpeciesSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokemonSpeciesSummary> !req` | `Models/PaginatedPokemonSpeciesSummaryList.cs` |
| `PaginatedPokemonSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<PokemonSummary> !req` | `Models/PaginatedPokemonSummaryList.cs` |
| `PaginatedRegionSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<RegionSummary> !req` | `Models/PaginatedRegionSummaryList.cs` |
| `PaginatedStatSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<StatSummary> !req` | `Models/PaginatedStatSummaryList.cs` |
| `PaginatedSuperContestEffectSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<SuperContestEffectSummary> !req` | `Models/PaginatedSuperContestEffectSummaryList.cs` |
| `PaginatedTypeSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<TypeSummary> !req` | `Models/PaginatedTypeSummaryList.cs` |
| `PaginatedVersionGroupSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<VersionGroupSummary> !req` | `Models/PaginatedVersionGroupSummaryList.cs` |
| `PaginatedVersionSummaryList` | — | `Count (count): int !req`, `Next (next): string?`, `Previous (previous): string?`, `Results (results): IReadOnlyList<VersionSummary> !req` | `Models/PaginatedVersionSummaryList.cs` |
| `PalParkAreaDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<PalParkAreaName> !req`, `PokemonEncounters (pokemon_encounters): IReadOnlyList<PokemonEncounter1> !req` | `Models/PalParkAreaDetail.cs` |
| `PalParkAreaName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/PalParkAreaName.cs` |
| `PalParkAreaSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PalParkAreaSummary.cs` |
| `PalParkEncounter` | — | `Area (area): Area !req`, `BaseScore (base_score): int !req`, `Rate (rate): int !req` | `Models/PalParkEncounter.cs` |
| `PastAbility` | — | `Abilities (abilities): IReadOnlyList<Ability> !req`, `Generation (generation): Generation !req` | `Models/PastAbility.cs` |
| `PastDamageRelation` | — | `Generation (generation): Generation !req`, `DamageRelations (damage_relations): DamageRelations !req` | `Models/PastDamageRelation.cs` |
| `PastStat` | — | `Generation (generation): Generation !req`, `Stats (stats): IReadOnlyList<Stat1> !req` | `Models/PastStat.cs` |
| `PastType` | — | `Generation (generation): Generation !req`, `Types (types): IReadOnlyList<TypeModel> !req` | `Models/PastType.cs` |
| `PokeathlonStat` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokeathlonStat.cs` |
| `PokeathlonStatChange` | — | `MaxChange (max_change): int !req`, `PokeathlonStat (pokeathlon_stat): PokeathlonStat !req` | `Models/PokeathlonStatChange.cs` |
| `PokeathlonStatDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `AffectingNatures (affecting_natures): AffectingNatures !req`, `Names (names): IReadOnlyList<PokeathlonStatName> !req` | `Models/PokeathlonStatDetail.cs` |
| `PokeathlonStatName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/PokeathlonStatName.cs` |
| `PokeathlonStatSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokeathlonStatSummary.cs` |
| `Pokedex` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Pokedex.cs` |
| `PokedexDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/PokedexDescription.cs` |
| `PokedexDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `IsMainSeries (is_main_series): bool?`, `Descriptions (descriptions): IReadOnlyList<PokedexDescription> !req`, `Names (names): IReadOnlyList<PokedexName> !req`, `PokemonEntries (pokemon_entries): IReadOnlyList<PokemonEntry> !req`, `Region (region): RegionSummary !req`, `VersionGroups (version_groups): IReadOnlyList<VersionGroup> !req` | `Models/PokedexDetail.cs` |
| `PokedexName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/PokedexName.cs` |
| `PokedexSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokedexSummary.cs` |
| `Pokemon` | — | `IsHidden (is_hidden): bool !req`, `Slot (slot): int !req`, `PokemonValue (pokemon): Pokemon1 !req` | `Models/Pokemon.cs` |
| `Pokemon1` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Pokemon1.cs` |
| `Pokemon5` | — | `Slot (slot): int?`, `Pokemon (pokemon): Pokemon6?` | `Models/Pokemon5.cs` |
| `Pokemon6` | — | `Name (name): string?`, `Url (url): string?` | `Models/Pokemon6.cs` |
| `PokemonColorDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<PokemonColorName> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpeciesSummary> !req` | `Models/PokemonColorDetail.cs` |
| `PokemonColorName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/PokemonColorName.cs` |
| `PokemonColorSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonColorSummary.cs` |
| `PokemonDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `BaseExperience (base_experience): int?`, `Height (height): int?`, `IsDefault (is_default): bool?`, `Order (order): int?`, `Weight (weight): int?`, `Abilities (abilities): IReadOnlyList<Ability> !req`, `PastAbilities (past_abilities): IReadOnlyList<PastAbility> !req`, `Forms (forms): IReadOnlyList<PokemonFormSummary> !req`, `GameIndices (game_indices): IReadOnlyList<PokemonGameIndex> !req`, `HeldItems (held_items): IReadOnlyList<HeldItem1> !req`, `LocationAreaEncounters (location_area_encounters): string !req`, `Moves (moves): IReadOnlyList<Move2> !req`, `Species (species): PokemonSpeciesSummary !req`, `Sprites (sprites): Sprites1 !req`, `Cries (cries): Cries !req`, `Stats (stats): IReadOnlyList<PokemonStat> !req`, `PastStats (past_stats): IReadOnlyList<PastStat> !req`, `Types (types): IReadOnlyList<TypeModel> !req`, `PastTypes (past_types): IReadOnlyList<PastType> !req` | `Models/PokemonDetail.cs` |
| `PokemonDexEntry` | — | `EntryNumber (entry_number): int !req`, `Pokedex (pokedex): PokedexSummary !req` | `Models/PokemonDexEntry.cs` |
| `PokemonEncounter` | — | `Pokemon (pokemon): Pokemon1 !req`, `VersionDetails (version_details): IReadOnlyList<VersionDetail2> !req` | `Models/PokemonEncounter.cs` |
| `PokemonEncounter1` | — | `BaseScore (base_score): int !req`, `PokemonSpecies (pokemon-species): PokemonSpecies !req`, `Rate (rate): int !req` | `Models/PokemonEncounter1.cs` |
| `PokemonEntry` | — | `EntryNumber (entry_number): int !req`, `PokemonSpecies (pokemon_species): PokemonSpecies !req` | `Models/PokemonEntry.cs` |
