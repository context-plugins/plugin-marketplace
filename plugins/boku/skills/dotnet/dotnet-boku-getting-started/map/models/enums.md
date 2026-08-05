# Enums

18 enums (18 string / 0 int), namespace `BokuDirectPaymentsApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `AccountProfileResultStatus` | StringEnum | `Ok (ok)`, `NotFound (not-found)`, `NotAuthorized (not-authorized)`, `Error (error)` | The status of the operation | `Models/Enums/AccountProfileResultStatus.cs` |
| `ChargeStatus` | StringEnum | `Success (success)`, `Failed (failed)`, `InProgress (in-progress)` | Status of the charge at the time this response was returned. If 'in-progress' is returned, the charge call should be re-issued with the same request ID until a final status is reached. If null, no charge was created (e.g., because the request was rejected). | `Models/Enums/ChargeStatus.cs` |
| `ChargeType` | StringEnum | `Hosted (hosted)` | Type of charge. | `Models/Enums/ChargeType.cs` |
| `ChargeType1` | StringEnum | `Hosted (hosted)` | Type of charge | `Models/Enums/ChargeType1.cs` |
| `EligibilityStatus` | StringEnum | `Eligible (eligible)`, `NotEligible (not-eligible)`, `NotFound (not-found)` | Eligibility status of the consumer. Provided if result.status == OK. | `Models/Enums/EligibilityStatus.cs` |
| `MandatePeriod` | StringEnum | `Day (day)`, `Week (week)`, `Month (month)`, `Year (year)`, `Transaction (transaction)` | Period over which the specified maximum amount will be enforced. | `Models/Enums/MandatePeriod.cs` |
| `Method` | StringEnum | `Get (GET)`, `Post (POST)` | HTTP method to use for the call, usually 'GET' | `Models/Enums/Method.cs` |
| `OptinPurpose` | StringEnum | `StandingApproval (standing-approval)`, `SingleTransaction (single-transaction)`, `Subscription (subscription)`, `StandingApprovalMandate (standing-approval-mandate)`, `SubscriptionMandate (subscription-mandate)` | Purpose of the Opt-In Defines the behavioral scope and validity of an opt-in. The value determines how long the user’s authorization remains valid and under what conditions it may be reused. Supported Values: - standing-approval: Default opt-in behavior. Valid for subsequent charges until explicitly revoked by the user. - single-transaction: Valid … | `Models/Enums/OptinPurpose.cs` |
| `OptinStatus` | StringEnum | `PendingValidate (pending-validate)`, `PendingConfirm (pending-confirm)`, `Active (active)`, `Closed (closed)` | Gives the status of the opt-in at the time this response was returned | `Models/Enums/OptinStatus.cs` |
| `OptinType` | StringEnum | `Otp (otp)`, `CarrierGw (carrier-gw)`, `Hosted (hosted)`, `SilentMo (silent-mo)` | Specifies which method to use to perform the opt-in. | `Models/Enums/OptinType.cs` |
| `PaymentMethodStatus` | StringEnum | `Pending (pending)`, `Approved (approved)`, `Rejected (rejected)`, `Suspended (suspended)` | The status of Payment Method | `Models/Enums/PaymentMethodStatus.cs` |
| `PeriodUnit` | StringEnum | `Day (day)`, `Week (week)`, `Month (month)`, `Year (year)` | A period is comprised of a unit of time (day, week, month, year) and a count (how many units per period). For example, to define a "3 month" period one would set the unit as "month" and the count as "3". | `Models/Enums/PeriodUnit.cs` |
| `RefundStatus` | StringEnum | `Success (success)`, `Failed (failed)`, `InProgress (in-progress)` | Status of the refund at the time this response was returned. If 'in-progress' is returned, the refund call should be re-issued with the same request ID until a final status is reached. If null, no refund was created, e.g. because the request was rejected. | `Models/Enums/RefundStatus.cs` |
| `RefundType` | StringEnum | `Refund (refund)`, `Chargeback (chargeback)` | Indicates whether refund is a regular refund or chargeback | `Models/Enums/RefundType.cs` |
| `ResultStatus` | StringEnum | `Ok (OK)`, `Error (ERROR)` | The status of the operation | `Models/Enums/ResultStatus.cs` |
| `SellerOfRecordStatus` | StringEnum | `Pending (pending)`, `Approved (approved)`, `Rejected (rejected)`, `Suspended (suspended)` | The status of Seller Of Record | `Models/Enums/SellerOfRecordStatus.cs` |
| `Status` | StringEnum | `Approved (approved)`, `Pending (pending)`, `Disabled (disabled)` | — | `Models/Enums/Status.cs` |
| `TypeEnum` | StringEnum | `QrContent (qr-content)`, `QrImageLink (qr-image-link)`, `QrImageData (qr-image-data)` | — | `Models/Enums/TypeEnum.cs` |
