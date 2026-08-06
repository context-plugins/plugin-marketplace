# Enums

4 enums (3 string / 1 int), namespace `ShellDataReportingApis.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `PricedTransactionReqV2InvoiceStatus` | StringEnum | `I (I)`, `U (U)`, `A (A)` | Invoice status of the transactions. Mandatory Possible options:I - Invoiced, U – Un-Invoiced, A – All | `Models/Enums/PricedTransactionReqV2InvoiceStatus.cs` |
| `PricedTransactionReqV2Period` | IntEnum | `Value1 (1)`, `Value2 (2)`, `Value3 (3)` | Pass below one of the value as per the required transaction period 1. Last 7 Days 2. Last 30 Days 3. Last 90 Days | `Models/Enums/PricedTransactionReqV2Period.cs` |
| `PricedTransactionReqV2SortOrder` | StringEnum | `_1 (1)`, `_2 (2)`, `_3 (3)`, `_4 (4)`, `_5 (5)`, `_6 (6)` | Allowed Sorting Options 1. TransactionDateAscending 2. TransactionDateDescending 3. GrossAmountDescending 4. GrossAmountAscending 5. NetAmountAscending 6. NetAmountDescensding | `Models/Enums/PricedTransactionReqV2SortOrder.cs` |
| `PricedTransactionRespV2RefundFlag` | StringEnum | `Y (Y)`, `N (N)` | Flag to check if there is any refund | `Models/Enums/PricedTransactionRespV2RefundFlag.cs` |
