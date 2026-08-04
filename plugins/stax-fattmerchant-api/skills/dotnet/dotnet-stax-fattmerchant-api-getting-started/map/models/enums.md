# Enums

7 enums (7 string / 0 int), namespace `StaxFattMerchantApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `PostInvoiceManualPaymentMethod` | StringEnum | `Cash (cash)`, `Check (check)`, `Giftcard (giftcard)`, `Paypal (paypal)`, `Venmo (venmo)`, `PaypalBnpl (paypal_bnpl)` | — | `Models/Enums/PostInvoiceManualPaymentMethod.cs` |
| `PostReceiptMethod` | StringEnum | `Email (email)`, `Sms (sms)` | — | `Models/Enums/PostReceiptMethod.cs` |
| `PostSendLaterMethod` | StringEnum | `Email (email)`, `Sms (sms)` | — | `Models/Enums/PostSendLaterMethod.cs` |
| `PutReceiptBulkMethodMethod` | StringEnum | `Email (email)`, `Sms (sms)` | — | `Models/Enums/PutReceiptBulkMethodMethod.cs` |
| `PutReceiptMethod` | StringEnum | `Email (email)`, `Sms (sms)` | — | `Models/Enums/PutReceiptMethod.cs` |
| `PutSendInvoiceBulkMethod` | StringEnum | `Email (email)`, `Sms (sms)` | — | `Models/Enums/PutSendInvoiceBulkMethod.cs` |
| `PutSendInvoiceMethod` | StringEnum | `Email (email)`, `Sms (sms)` | — | `Models/Enums/PutSendInvoiceMethod.cs` |
