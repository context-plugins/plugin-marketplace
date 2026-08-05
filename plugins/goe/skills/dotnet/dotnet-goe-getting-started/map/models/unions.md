# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (13)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `Accountmapping` | IReadOnlyList<EwsAccountMappingItem> | `Accountmapping.ListOfEwsAccountMappingItem(IReadOnlyList<EwsAccountMappingItem>)` | `TryGetListOfEwsAccountMappingItem(out …)` | — | `Models/AnyOf/Accountmapping.cs` |
| `Adviceid` | string, IReadOnlyList<string> | `Adviceid.String(string)`, `Adviceid.ListOfString(IReadOnlyList<string>)` | `TryGetString(out …)`, `TryGetListOfString(out …)` | `string` | `Models/AnyOf/Adviceid.cs` |
| `Adviceid1` | string, IReadOnlyList<string> | `Adviceid1.String(string)`, `Adviceid1.ListOfString(IReadOnlyList<string>)` | `TryGetString(out …)`, `TryGetListOfString(out …)` | `string` | `Models/AnyOf/Adviceid1.cs` |
| `Adviceid2` | string, IReadOnlyList<string> | `Adviceid2.String(string)`, `Adviceid2.ListOfString(IReadOnlyList<string>)` | `TryGetString(out …)`, `TryGetListOfString(out …)` | `string` | `Models/AnyOf/Adviceid2.cs` |
| `Adviceid3` | string, IReadOnlyList<string> | `Adviceid3.String(string)`, `Adviceid3.ListOfString(IReadOnlyList<string>)` | `TryGetString(out …)`, `TryGetListOfString(out …)` | `string` | `Models/AnyOf/Adviceid3.cs` |
| `Adviceid4` | string, IReadOnlyList<string> | `Adviceid4.String(string)`, `Adviceid4.ListOfString(IReadOnlyList<string>)` | `TryGetString(out …)`, `TryGetListOfString(out …)` | `string` | `Models/AnyOf/Adviceid4.cs` |
| `Date` | string, IReadOnlyList<string> | `Date.String(string)`, `Date.ListOfString(IReadOnlyList<string>)` | `TryGetString(out …)`, `TryGetListOfString(out …)` | `string` | `Models/AnyOf/Date.cs` |
| `Date1` | DateTimeOffset, IReadOnlyList<DateTimeOffset> | `Date1.Date(DateTimeOffset)`, `Date1.ListOfDate(IReadOnlyList<DateTimeOffset>)` | `TryGetDate(out …)`, `TryGetListOfDate(out …)` | `DateTimeOffset` | `Models/AnyOf/Date1.cs` |
| `GoalCalculatorInputModelEngagedParticipantTitle` | bool | `GoalCalculatorInputModelEngagedParticipantTitle.Bool(bool)` | `TryGetBool(out …)` | `bool` | `Models/AnyOf/GoalCalculatorInputModelEngagedParticipantTitle.cs` |
| `RunpipeInputModelEngagedParticipantTitle` | bool | `RunpipeInputModelEngagedParticipantTitle.Bool(bool)` | `TryGetBool(out …)` | `bool` | `Models/AnyOf/RunpipeInputModelEngagedParticipantTitle.cs` |
| `RunpipeInputModelRiskOverrideTitle` | bool | `RunpipeInputModelRiskOverrideTitle.Bool(bool)` | `TryGetBool(out …)` | `bool` | `Models/AnyOf/RunpipeInputModelRiskOverrideTitle.cs` |
| `RunpipeInputModelWealthPathProbabilitiesTitle` | IReadOnlyList<double> | `RunpipeInputModelWealthPathProbabilitiesTitle.ListOfDouble(IReadOnlyList<double>)` | `TryGetListOfDouble(out …)` | — | `Models/AnyOf/RunpipeInputModelWealthPathProbabilitiesTitle.cs` |
| `Wealthpath` | IReadOnlyList<double>, IReadOnlyDictionary<string, JsonElement> | `Wealthpath.ListOfDouble(IReadOnlyList<double>)`, `Wealthpath.MapOfJsonElement(IReadOnlyDictionary<string, JsonElement>)` | `TryGetListOfDouble(out …)`, `TryGetMapOfJsonElement(out …)` | — | `Models/AnyOf/Wealthpath.cs` |
