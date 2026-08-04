# Enums

11 enums (11 string / 0 int), namespace `SplititWebApiV3.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `CardBrand` | StringEnum | `Mastercard (Mastercard)`, `Visa (Visa)`, `AmericanExpress (AmericanExpress)`, `Maestro (Maestro)`, `Jcb (JCB)`, `Cup (CUP)`, `Upi (UPI)`, `Discover (Discover)`, `Other (Other)` | — | `Models/Enums/CardBrand.cs` |
| `CardType` | StringEnum | `Credit (Credit)`, `Debit (Debit)`, `Charge (Charge)`, `Other (Other)`, `Prepaid (Prepaid)`, `VisaDeferredDebit (VisaDeferredDebit)`, `NetworkOnly (NetworkOnly)` | — | `Models/Enums/CardType.cs` |
| `GwAuthorizationStatus` | StringEnum | `Na (NA)`, `Succeeded (Succeeded)`, `Pending3Ds (Pending3DS)`, `Failed (Failed)`, `Canceled (Canceled)`, `Voided (Voided)` | — | `Models/Enums/GwAuthorizationStatus.cs` |
| `InstallmentStatus` | StringEnum | `Pending (Pending)`, `Processed (Processed)`, `Canceled (Canceled)` | — | `Models/Enums/InstallmentStatus.cs` |
| `PaymentMethodType` | StringEnum | `Card (Card)`, `SplititToken (SplititToken)`, `BluesnapVaultedShopperToken (BluesnapVaultedShopperToken)`, `SplititMockerV2Token (SplititMockerV2Token)`, `SpreedlyToken (SpreedlyToken)` | — | `Models/Enums/PaymentMethodType.cs` |
| `PlanStatus` | StringEnum | `Initialized (Initialized)`, `PendingCapture (PendingCapture)`, `Active (Active)`, `Cleared (Cleared)`, `Canceled (Canceled)` | — | `Models/Enums/PlanStatus.cs` |
| `PurchaseMethod` | StringEnum | `InStore (InStore)`, `PhoneOrder (PhoneOrder)`, `Ecommerce (ECommerce)` | — | `Models/Enums/PurchaseMethod.cs` |
| `RefundStatus` | StringEnum | `Pending (Pending)`, `Succeeded (Succeeded)`, `Failed (Failed)` | — | `Models/Enums/RefundStatus.cs` |
| `RefundStrategy` | StringEnum | `FutureInstallmentsFirst (FutureInstallmentsFirst)`, `FutureInstallmentsLast (FutureInstallmentsLast)`, `FutureInstallmentsNotAllowed (FutureInstallmentsNotAllowed)`, `ReduceFromLastInstallment (ReduceFromLastInstallment)` | — | `Models/Enums/RefundStrategy.cs` |
| `ShippingStatus` | StringEnum | `Pending (Pending)`, `Shipped (Shipped)`, `Delivered (Delivered)` | — | `Models/Enums/ShippingStatus.cs` |
| `TestModes` | StringEnum | `None (None)`, `Regular (Regular)`, `Fast (Fast)`, `Automation (Automation)` | — | `Models/Enums/TestModes.cs` |
