# Records (`PokemonFormDetail` … `VersionSummary`)

**Exact coverage: `PokemonFormDetail` through `VersionSummary`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

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
| `PokemonFormDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Order (order): int?`, `FormOrder (form_order): int?`, `IsDefault (is_default): bool?`, `IsBattleOnly (is_battle_only): bool?`, `IsMega (is_mega): bool?`, `FormName (form_name): string !req`, `Pokemon (pokemon): PokemonSummary !req`, `Sprites (sprites): Sprites2 !req`, `VersionGroup (version_group): VersionGroupSummary !req`, `FormNames (form_names): IReadOnlyList<FormName> !req`, `Names (names): IReadOnlyList<Name> !req`, `Types (types): IReadOnlyList<TypeModel> !req`, `TriggerConditions (trigger_conditions): IReadOnlyList<TriggerCondition> !req` | `Models/PokemonFormDetail.cs` |
| `PokemonFormSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonFormSummary.cs` |
| `PokemonGameIndex` | — | `GameIndex (game_index): int !req`, `Version (version): VersionSummary !req` | `Models/PokemonGameIndex.cs` |
| `PokemonHabitatDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<PokemonHabitatName> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpeciesSummary> !req` | `Models/PokemonHabitatDetail.cs` |
| `PokemonHabitatName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/PokemonHabitatName.cs` |
| `PokemonHabitatSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonHabitatSummary.cs` |
| `PokemonShapeDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `AwesomeNames (awesome_names): IReadOnlyList<AwesomeName> !req`, `Names (names): IReadOnlyList<Name1> !req`, `PokemonSpecies (pokemon_species): IReadOnlyList<PokemonSpeciesSummary> !req` | `Models/PokemonShapeDetail.cs` |
| `PokemonShapeSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonShapeSummary.cs` |
| `PokemonSpecies` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonSpecies.cs` |
| `PokemonSpeciesDescription` | — | `Description (description): string?`, `Language (language): LanguageSummary !req` | `Models/PokemonSpeciesDescription.cs` |
| `PokemonSpeciesDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Order (order): int?`, `GenderRate (gender_rate): int?`, `CaptureRate (capture_rate): int?`, `BaseHappiness (base_happiness): int?`, `IsBaby (is_baby): bool?`, `IsLegendary (is_legendary): bool?`, `IsMythical (is_mythical): bool?`, `HatchCounter (hatch_counter): int?`, `HasGenderDifferences (has_gender_differences): bool?`, `FormsSwitchable (forms_switchable): bool?`, `GrowthRate (growth_rate): GrowthRateSummary !req`, `PokedexNumbers (pokedex_numbers): IReadOnlyList<PokemonDexEntry> !req`, `EggGroups (egg_groups): IReadOnlyList<EggGroup> !req`, `Color (color): PokemonColorSummary !req`, `Shape (shape): PokemonShapeSummary !req`, `EvolvesFromSpecies (evolves_from_species): PokemonSpeciesSummary !req`, `EvolutionChain (evolution_chain): EvolutionChainSummary !req`, `Habitat (habitat): PokemonHabitatSummary !req`, `Generation (generation): GenerationSummary !req`, `Names (names): IReadOnlyList<Name> !req`, `PalParkEncounters (pal_park_encounters): IReadOnlyList<PalParkEncounter> !req`, `FormDescriptions (form_descriptions): IReadOnlyList<PokemonSpeciesDescription> !req`, `FlavorTextEntries (flavor_text_entries): IReadOnlyList<PokemonSpeciesFlavorText> !req`, `Genera (genera): IReadOnlyList<Genera> !req`, `Varieties (varieties): IReadOnlyList<Variety> !req` | `Models/PokemonSpeciesDetail.cs` |
| `PokemonSpeciesDetail2` | — | `Rate (rate): int !req`, `PokemonSpecies (pokemon_species): PokemonSpecies !req` | `Models/PokemonSpeciesDetail2.cs` |
| `PokemonSpeciesFlavorText` | — | `FlavorText (flavor_text): string !req`, `Language (language): LanguageSummary !req`, `Version (version): VersionSummary !req` | `Models/PokemonSpeciesFlavorText.cs` |
| `PokemonSpeciesSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonSpeciesSummary.cs` |
| `PokemonSpecy` | — | `Name (name): string?`, `Url (url): string?` | `Models/PokemonSpecy.cs` |
| `PokemonSpecy1` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonSpecy1.cs` |
| `PokemonStat` | — | `BaseStat (base_stat): int !req`, `Effort (effort): int !req`, `Stat (stat): StatSummary !req` | `Models/PokemonStat.cs` |
| `PokemonSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/PokemonSummary.cs` |
| `Region` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Region.cs` |
| `RegionDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Locations (locations): IReadOnlyList<LocationSummary> !req`, `MainGeneration (main_generation): GenerationSummary? !req`, `Names (names): IReadOnlyList<RegionName> !req`, `Pokedexes (pokedexes): IReadOnlyList<PokedexSummary> !req`, `VersionGroups (version_groups): IReadOnlyList<VersionGroup> !req` | `Models/RegionDetail.cs` |
| `RegionName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/RegionName.cs` |
| `RegionSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/RegionSummary.cs` |
| `RequiredForEvolution` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/RequiredForEvolution.cs` |
| `Species` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Species.cs` |
| `Sprites` | — | `Default (default): string !req` | `Models/Sprites.cs` |
| `Sprites1` | — | `FrontDefault (front_default): string?` | `Models/Sprites1.cs` |
| `Sprites2` | — | `Default (default): string?` | `Models/Sprites2.cs` |
| `Sprites3` | — | `NameIcon (name-icon): string?` | `Models/Sprites3.cs` |
| `Stat` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Stat.cs` |
| `Stat1` | — | `BaseStat (base_stat): int !req`, `Effort (effort): int !req`, `Stat (stat): Stat !req` | `Models/Stat1.cs` |
| `StatChange` | — | `Change (change): int !req`, `Stat (stat): Stat !req` | `Models/StatChange.cs` |
| `StatDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `GameIndex (game_index): int !req`, `IsBattleOnly (is_battle_only): bool?`, `AffectingMoves (affecting_moves): AffectingMoves !req`, `AffectingNatures (affecting_natures): AffectingNatures1 !req`, `AffectingItems (affecting_items): IReadOnlyList<AffectingItem> !req`, `Characteristics (characteristics): IReadOnlyList<CharacteristicSummary> !req`, `MoveDamageClass (move_damage_class): MoveDamageClassSummary !req`, `Names (names): IReadOnlyList<StatName> !req` | `Models/StatDetail.cs` |
| `StatName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/StatName.cs` |
| `StatSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/StatSummary.cs` |
| `Super` | — | `UseBefore (use_before): IReadOnlyList<UseBefore?> !req`, `UseAfter (use_after): IReadOnlyList<UseAfter?> !req` | `Models/Super.cs` |
| `SuperContestEffectDetail` | — | `Id (id): int !req`, `Appeal (appeal): int !req`, `FlavorTextEntries (flavor_text_entries): IReadOnlyList<SuperContestEffectFlavorText> !req`, `Moves (moves): IReadOnlyList<MoveSummary> !req` | `Models/SuperContestEffectDetail.cs` |
| `SuperContestEffectFlavorText` | — | `FlavorText (flavor_text): string !req`, `Language (language): LanguageSummary !req` | `Models/SuperContestEffectFlavorText.cs` |
| `SuperContestEffectSummary` | — | `Url (url): string !req` | `Models/SuperContestEffectSummary.cs` |
| `Trigger` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Trigger.cs` |
| `TriggerCondition` | — | `Trigger (trigger): string !req`, `Name (name): string !req`, `Url (url): string !req` | `Models/TriggerCondition.cs` |
| `Type1` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/Type1.cs` |
| `TypeDetail` | Serializer for the Type resource | `Id (id): int !req`, `Name (name): string !req`, `DamageRelations (damage_relations): DamageRelations !req`, `PastDamageRelations (past_damage_relations): IReadOnlyList<PastDamageRelation> !req`, `GameIndices (game_indices): IReadOnlyList<TypeGameIndex> !req`, `Generation (generation): GenerationSummary !req`, `MoveDamageClass (move_damage_class): MoveDamageClassSummary !req`, `Names (names): IReadOnlyList<AbilityName> !req`, `Pokemon (pokemon): IReadOnlyList<Pokemon5> !req`, `Moves (moves): IReadOnlyList<MoveSummary> !req`, `Sprites (sprites): IReadOnlyDictionary<string, Sprites3> !req` | `Models/TypeDetail.cs` |
| `TypeGameIndex` | — | `GameIndex (game_index): int !req`, `Generation (generation): GenerationSummary !req` | `Models/TypeGameIndex.cs` |
| `TypeModel` | — | `Slot (slot): int !req`, `Type (type): Type1 !req` | `Models/TypeModel.cs` |
| `TypeSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/TypeSummary.cs` |
| `UseAfter` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/UseAfter.cs` |
| `UseBefore` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/UseBefore.cs` |
| `Variety` | — | `IsDefault (is_default): bool !req`, `Pokemon (pokemon): Pokemon1 !req` | `Models/Variety.cs` |
| `VersionDetail` | Should have a link to Version Group info but the Circular dependency and compilation order fight eachother and I'm not sure how to add anything other than a hyperlink | `Id (id): int !req`, `Name (name): string !req`, `Names (names): IReadOnlyList<VersionName> !req`, `VersionGroup (version_group): VersionGroupSummary !req` | `Models/VersionDetail.cs` |
| `VersionDetail1` | — | `Rate (rate): int !req`, `Version (version): VersionModel !req` | `Models/VersionDetail1.cs` |
| `VersionDetail2` | — | `Version (version): VersionModel !req`, `MaxChance (max_chance): int !req`, `EncounterDetails (encounter_details): EncounterDetails !req` | `Models/VersionDetail2.cs` |
| `VersionDetail3` | — | `Rarity (rarity): int !req`, `Version (version): VersionModel !req` | `Models/VersionDetail3.cs` |
| `VersionDetail4` | — | `EncounterDetails (encounter_details): IReadOnlyList<EncounterDetails1> !req`, `MaxChance (max_chance): double !req`, `Version (version): VersionModel !req` | `Models/VersionDetail4.cs` |
| `VersionGroup` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/VersionGroup.cs` |
| `VersionGroupDetail` | — | `Id (id): int !req`, `Name (name): string !req`, `Order (order): int?`, `Generation (generation): GenerationSummary !req`, `MoveLearnMethods (move_learn_methods): IReadOnlyList<MoveLearnMethod> !req`, `Pokedexes (pokedexes): IReadOnlyList<Pokedex> !req`, `Regions (regions): IReadOnlyList<Region> !req`, `Versions (versions): IReadOnlyList<VersionSummary> !req` | `Models/VersionGroupDetail.cs` |
| `VersionGroupDetail2` | — | `LevelLearnedAt (level_learned_at): int !req`, `MoveLearnMethod (move_learn_method): MoveLearnMethod !req`, `VersionGroup (version_group): VersionGroup !req` | `Models/VersionGroupDetail2.cs` |
| `VersionGroupSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/VersionGroupSummary.cs` |
| `VersionModel` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/VersionModel.cs` |
| `VersionName` | — | `Name (name): string !req`, `Language (language): LanguageSummary !req` | `Models/VersionName.cs` |
| `VersionSummary` | — | `Name (name): string !req`, `Url (url): string !req` | `Models/VersionSummary.cs` |
