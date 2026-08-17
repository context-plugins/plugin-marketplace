<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV3HostedNumbersHostedNumberOrderApi — operations

Accessor: `client.NumbersV3HostedNumbersHostedNumberOrderApi` · Source: `Api/NumbersV3HostedNumbersHostedNumberOrderApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateHostedNumbersHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `CreateHostedNumbersHostedNumberOrder(string phoneNumber, bool smsCapability, string? accountSid, string? friendlyName, string? uniqueName, IReadOnlyList<string>? ccEmails, string? smsUrl, AmdStatusCallbackMethod? smsMethod, string? smsFallbackUrl, AmdStatusCallbackMethod? smsFallbackMethod, string? statusCallbackUrl, AmdStatusCallbackMethod? statusCallbackMethod, string? smsApplicationSid, string? addressSid, string? email, DependentOrderEnumVerificationType? verificationType, string? verificationDocumentSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`accountSid` … `verificationDocumentSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `NumbersV3HostedNumbersHostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `DependentOrderEnumVerificationType` | `Models/Enums/DependentOrderEnumVerificationType.cs` |
| `NumbersV3HostedNumbersHostedNumberOrder` | `Models/NumbersV3HostedNumbersHostedNumberOrder.cs` |

