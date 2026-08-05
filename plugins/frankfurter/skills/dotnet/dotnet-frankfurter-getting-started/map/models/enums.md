# Enums

4 enums (4 string / 0 int), namespace `FrankfurterApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `Expand` | StringEnum | `Providers (providers)` | — | `Models/Enums/Expand.cs` |
| `Group` | StringEnum | `Week (week)`, `Month (month)` | — | `Models/Enums/Group.cs` |
| `PublishCadence` | StringEnum | `Daily (daily)`, `Weekly (weekly)`, `Monthly (monthly)` | How often the provider publishes rates. Determines the unit of publishes_missed: a count of days, ISO weeks, or calendar months. Null for historical-only providers with no scheduled cadence. | `Models/Enums/PublishCadence.cs` |
| `Scope` | StringEnum | `All (all)` | — | `Models/Enums/Scope.cs` |
