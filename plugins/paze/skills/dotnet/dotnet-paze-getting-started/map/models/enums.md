# Enums

9 enums (9 string / 0 int), namespace `PazeCheckoutApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `BillingPreference` | StringEnum | `All (ALL)`, `None (NONE)` | — | `Models/Enums/BillingPreference.cs` |
| `ClientAssertionType` | StringEnum | `UrnIetfParamsOauthClientAssertionTypeJwtBearer (urn:ietf:params:oauth:client-assertion-type:jwt-bearer)` | — | `Models/Enums/ClientAssertionType.cs` |
| `GrantType` | StringEnum | `ClientCredentials (client_credentials)` | — | `Models/Enums/GrantType.cs` |
| `Intent` | StringEnum | `ReviewAndPay (REVIEW_AND_PAY)`, `ExpressCheckout (EXPRESS_CHECKOUT)`, `AddCard (ADD_CARD)` | — | `Models/Enums/Intent.cs` |
| `PayloadTypeIndicator` | StringEnum | `Id (ID)`, `Payment (PAYMENT)` | — | `Models/Enums/PayloadTypeIndicator.cs` |
| `PaymentCardBrand` | StringEnum | `Visa (VISA)`, `Mastercard (MASTERCARD)`, `Discover (DISCOVER)` | — | `Models/Enums/PaymentCardBrand.cs` |
| `PaymentCardType` | StringEnum | `Credit (CREDIT)`, `Debit (DEBIT)` | — | `Models/Enums/PaymentCardType.cs` |
| `ProcessingNetwork` | StringEnum | `Visa (VISA)`, `Mastercard (MASTERCARD)`, `Discover (DISCOVER)` | — | `Models/Enums/ProcessingNetwork.cs` |
| `TransactionType` | StringEnum | `CardOnFile (CARD_ON_FILE)`, `Both (BOTH)` | — | `Models/Enums/TransactionType.cs` |
