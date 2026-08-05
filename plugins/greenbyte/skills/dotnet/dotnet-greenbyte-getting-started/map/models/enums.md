# Enums

18 enums (18 string / 0 int), namespace `GreenbyteApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `AggregateMode` | StringEnum | `Device (device)`, `DeviceLevel (deviceLevel)`, `Site (site)`, `Portfolio (portfolio)`, `SiteLevel (siteLevel)` | How data is aggregated in the asset structure. | `Models/Enums/AggregateMode.cs` |
| `CalculationMode` | StringEnum | `Average (average)`, `Sum (sum)`, `Counter (counter)` | Which operation to use when aggregating data. | `Models/Enums/CalculationMode.cs` |
| `CalculationModeRealTime` | StringEnum | `Average (average)`, `Sum (sum)` | Which operation to use when aggregating data. | `Models/Enums/CalculationModeRealTime.cs` |
| `CategoryTime` | StringEnum | `Available (available)`, `Unavailable (unavailable)`, `Excluded (excluded)` | — | `Models/Enums/CategoryTime.cs` |
| `ContractType` | StringEnum | `Service (service)`, `Global (global)`, `Custom (custom)` | — | `Models/Enums/ContractType.cs` |
| `ContractType1` | StringEnum | `Service (service)`, `Global (global)`, `Custom (custom)` | Which contract type to use if using multiple availability contracts. | `Models/Enums/ContractType1.cs` |
| `DurationType` | StringEnum | `Day (day)`, `Week (week)`, `Month (month)`, `Year (year)` | The type of with which the task repeats. | `Models/Enums/DurationType.cs` |
| `Hsecategory` | StringEnum | `Accident (Accident)`, `NearMiss (NearMiss)`, `HazardObservation (HazardObservation)`, `Environmental (Environmental)` | The category of an HSE incident. | `Models/Enums/Hsecategory.cs` |
| `PredictAction` | StringEnum | `None (none)`, `Repair (repair)`, `Replacement (replacement)`, `NoneAutoResolved (none - auto-resolved)` | The action that was taken to resolve the alert. | `Models/Enums/PredictAction.cs` |
| `PredictSeverity` | StringEnum | `High (high)`, `Low (low)` | The severity of a Predict alert. | `Models/Enums/PredictSeverity.cs` |
| `PredictStatus` | StringEnum | `Active (active)`, `Resolved (resolved)`, `Dismissed (dismissed)` | The status of a Predict alert. | `Models/Enums/PredictStatus.cs` |
| `Resolution` | StringEnum | `_5Minute (5minute)`, `_10Minute (10minute)`, `_15Minute (15minute)`, `Hourly (hourly)`, `Daily (daily)`, `Weekly (weekly)`, `Monthly (monthly)`, `Yearly (yearly)`, `Interval (interval)`, `Device (device)` | The resolution for time-series data. | `Models/Enums/Resolution.cs` |
| `State` | StringEnum | `Unresolved (unresolved)`, `Resolved (resolved)` | The state of an HSE incident. | `Models/Enums/State.cs` |
| `StatusCategory` | StringEnum | `Stop (stop)`, `Warning (warning)`, `Informational (informational)`, `Communication (communication)`, `Curtailment (curtailment)` | The category a status belongs to. | `Models/Enums/StatusCategory.cs` |
| `TaskAssigneeType` | StringEnum | `User (user)`, `Personnel (personnel)`, `Manufacturer (manufacturer)`, `Other (other)` | The type of task assignee. | `Models/Enums/TaskAssigneeType.cs` |
| `TaskFileCategory` | StringEnum | `Pictures (Pictures)`, `Reports (Reports)`, `Other (Other)` | — | `Models/Enums/TaskFileCategory.cs` |
| `TaskPriority` | StringEnum | `Low (low)`, `Medium (medium)`, `High (high)` | The priority of a task. | `Models/Enums/TaskPriority.cs` |
| `TaskState` | StringEnum | `Unresolved (unresolved)`, `Resolved (resolved)` | The state of a task. | `Models/Enums/TaskState.cs` |
