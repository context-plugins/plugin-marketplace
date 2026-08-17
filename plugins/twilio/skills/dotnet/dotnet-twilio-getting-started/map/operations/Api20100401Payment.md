<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Payment — operations

Accessor: `client.Api20100401Payment` · Source: `Api/Api20100401Payment.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePayments

- **Signature**: `CreatePayments(string accountSid, string callSid, string idempotencyKey, string statusCallback, PaymentsEnumBankAccountType? bankAccountType, double? chargeAmount, string? currency, string? description, string? input, int? minPostalCodeLength, object? parameter, string? paymentConnector, PaymentsEnumPaymentMethod? paymentMethod, bool? postalCode, bool? securityCode, int? timeout, PaymentsEnumTokenType? tokenType, string? validCardTypes, string? requireMatchingInputs, Confirmation? confirmation, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`bankAccountType` … `confirmation`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountCallPayments`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentsEnumBankAccountType` | `Models/Enums/PaymentsEnumBankAccountType.cs` |
| `PaymentsEnumPaymentMethod` | `Models/Enums/PaymentsEnumPaymentMethod.cs` |
| `PaymentsEnumTokenType` | `Models/Enums/PaymentsEnumTokenType.cs` |
| `Confirmation` | `Models/Enums/Confirmation.cs` |
| `ApiV2010AccountCallPayments` | `Models/ApiV2010AccountCallPayments.cs` |

### UpdatePayments

- **Signature**: `UpdatePayments(string accountSid, string callSid, string sid, string idempotencyKey, string statusCallback, PaymentsEnumCapture? capture, PaymentsEnumStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `capture` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiV2010AccountCallPayments`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PaymentsEnumCapture` | `Models/Enums/PaymentsEnumCapture.cs` |
| `PaymentsEnumStatus` | `Models/Enums/PaymentsEnumStatus.cs` |
| `ApiV2010AccountCallPayments` | `Models/ApiV2010AccountCallPayments.cs` |

