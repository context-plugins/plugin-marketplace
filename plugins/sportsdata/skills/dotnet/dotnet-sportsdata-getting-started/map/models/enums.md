# Enums

5 enums (5 string / 0 int), namespace `Sportsdata.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `Format` | StringEnum | `Json (JSON)`, `Xml (XML)` | — | `Models/Enums/Format.cs` |
| `Include` | StringEnum | `Available (available)`, `Unlisted (unlisted)` | — | `Models/Enums/Include.cs` |
| `Playerstoinclude` | StringEnum | `All (all)`, `Fantasy (fantasy)`, `Idp (idp)` | — | `Models/Enums/Playerstoinclude.cs` |
| `Split` | StringEnum | `L (L)`, `R (R)`, `S (S)` | — | `Models/Enums/Split.cs` |
| `TypeModel` | StringEnum | `Current (current)`, `Upcoming (upcoming)`, `Completed (completed)`, `Recent (recent)`, `All (all)` | — | `Models/Enums/TypeModel.cs` |
