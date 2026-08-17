<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2HostedNumberOrderApi — operations

Accessor: `client.NumbersV2HostedNumberOrderApi` · Source: `Api/NumbersV2HostedNumberOrderApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `CreateHostedNumberOrder(string phoneNumber, string contactPhoneNumber, string addressSid, string email, string? accountSid, string? friendlyName, IReadOnlyList<string>? ccEmails, string? smsUrl, AmdStatusCallbackMethod? smsMethod, string? smsFallbackUrl, bool? smsCapability, AmdStatusCallbackMethod? smsFallbackMethod, string? statusCallbackUrl, AmdStatusCallbackMethod? statusCallbackMethod, string? smsApplicationSid, string? contactTitle, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`accountSid` … `contactTitle`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `NumbersV2HostedNumberOrder` | `Models/NumbersV2HostedNumberOrder.cs` |

### DeleteHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `DeleteHostedNumberOrder(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `FetchHostedNumberOrder(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2HostedNumberOrder` | `Models/NumbersV2HostedNumberOrder.cs` |

### ListHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `ListHostedNumberOrder(DependentOrderEnumStatus? status, bool? smsCapability, string? phoneNumber, string? incomingPhoneNumberSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Status` ← `status`, `SmsCapability` ← `smsCapability`, `PhoneNumber` ← `phoneNumber`, `IncomingPhoneNumberSid` ← `incomingPhoneNumberSid`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListHostedNumberOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DependentOrderEnumStatus` | `Models/Enums/DependentOrderEnumStatus.cs` |
| `ListHostedNumberOrderResponse` | `Models/ListHostedNumberOrderResponse.cs` |

### UpdateHostedNumberOrder

- **Server group**: `Default5`
- **Signature**: `UpdateHostedNumberOrder(string sid, DependentOrderEnumStatus status, int? verificationCallDelay, string? verificationCallExtension, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `verificationCallDelay` — nullable, no default → **must pass explicitly**
  - `verificationCallExtension` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DependentOrderEnumStatus` | `Models/Enums/DependentOrderEnumStatus.cs` |
| `NumbersV2HostedNumberOrder` | `Models/NumbersV2HostedNumberOrder.cs` |

