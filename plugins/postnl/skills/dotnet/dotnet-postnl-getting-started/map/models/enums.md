# Enums

16 enums (16 string / 0 int), namespace `PostnlEcommerce.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `AddressType` | StringEnum | `_01 (01)`, `_02 (02)` | Address type. 01 is for the receiver address, 02 is for the sender address. | `Models/Enums/AddressType.cs` |
| `CheckoutCutOffDay` | StringEnum | `_00 (00)`, `_01 (01)`, `_02 (02)`, `_03 (03)`, `_04 (04)`, `_05 (05)`, `_06 (06)`, `_07 (07)` | The day for which the cutoff time applies. 00 is your default cutoff that applies to all otherwise not specified days, 01 to 07 is Monday to Sunday. | `Models/Enums/CheckoutCutOffDay.cs` |
| `CheckoutCutOffType` | StringEnum | `Regular (Regular)`, `Sameday (Sameday)`, `Today (Today)` | Specifies the type belonging to the cutoff time. | `Models/Enums/CheckoutCutOffType.cs` |
| `CheckoutOption` | StringEnum | `Daytime (Daytime)`, `Evening (Evening)`, `Sunday (Sunday)`, `Sameday (Sameday)`, `Today (Today)`, `_08001000 (08:00-10:00)`, `_08001200 (08:00-12:00)`, `_08001700 (08:00-17:00)`, `Pickup (Pickup)` | — | `Models/Enums/CheckoutOption.cs` |
| `CheckoutWarningOption` | StringEnum | `Daytime (Daytime)`, `Evening (Evening)`, `Sameday (Sameday)`, `Sunday (Sunday)`, `Today (Today)`, `_08001000 (08:00-10:00)`, `_08001200 (08:00-12:00)`, `_08001700 (08:00-17:00)`, `_08000900 (08:00-09:00)`, `Pickup (Pickup)` | — | `Models/Enums/CheckoutWarningOption.cs` |
| `Code` | StringEnum | `_00 (00)`, `_01 (01)`, `_02 (02)`, `_03 (03)` | Sustainability score code | `Models/Enums/Code.cs` |
| `Countrycode` | StringEnum | `Nl (NL)`, `Be (BE)` | ISO2 country code. Limited to NL and BE. | `Models/Enums/Countrycode.cs` |
| `Currency` | StringEnum | `Eur (EUR)`, `Gbp (GBP)`, `Usd (USD)`, `Cny (CNY)` | Currency code. only EUR, GBP, USD and CNY are allowed. | `Models/Enums/Currency.cs` |
| `CurrencyLabellingApi` | StringEnum | `Eur (EUR)`, `Uss (USS)` | Currency code,only EUR and USS are allowed | `Models/Enums/CurrencyLabellingApi.cs` |
| `DeliverydateOption` | StringEnum | `Daytime (Daytime)`, `Evening (Evening)`, `Morning (Morning)`, `Noon (Noon)`, `Sunday (Sunday)`, `Today (Today)`, `Afternoon (Afternoon)` | — | `Models/Enums/DeliverydateOption.cs` |
| `Language` | StringEnum | `Nl (NL)`, `En (EN)`, `Cn (CN)`, `De (DE)`, `Fr (FR)` | — | `Models/Enums/Language.cs` |
| `LocationsDeliveryOption` | StringEnum | `Pg (PG)`, `Pa (PA)`, `PgEx (PG_EX)` | — | `Models/Enums/LocationsDeliveryOption.cs` |
| `OriginCountryCode` | StringEnum | `Nl (NL)`, `Be (BE)` | — | `Models/Enums/OriginCountryCode.cs` |
| `ShipmentType` | StringEnum | `Gift (Gift)`, `Documents (Documents)`, `CommercialGoods (Commercial Goods)`, `CommercialSample (Commercial Sample)`, `ReturnedGoods (Returned Goods)` | Type of shipment, possible values: Gift, Documents, Commercial Goods, Commercial Sample, Returned Goods. Is used to fill in the checkbox on the customs form on the shipment label. | `Models/Enums/ShipmentType.cs` |
| `TimeframeOptions` | StringEnum | `Daytime (Daytime)`, `Today (Today)`, `Sameday (Sameday)`, `Evening (Evening)`, `Morning (Morning)`, `Noon (Noon)`, `Sunday (Sunday)`, `Afternoon (Afternoon)` | — | `Models/Enums/TimeframeOptions.cs` |
| `TypeEnum` | StringEnum | `_2S (2S)`, `_3S (3S)`, `Cc (CC)`, `Cp (CP)`, `Cd (CD)`, `Cf (CF)`, `La (LA)`, `Ri (RI)`, `Ue (UE)` | — | `Models/Enums/TypeEnum.cs` |
