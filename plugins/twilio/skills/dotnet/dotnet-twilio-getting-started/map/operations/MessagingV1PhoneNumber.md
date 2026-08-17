<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1PhoneNumber — operations

Accessor: `client.MessagingV1PhoneNumber` · Source: `Api/MessagingV1PhoneNumber.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePhoneNumber

- **Server group**: `Default1`
- **Signature**: `CreatePhoneNumber(string serviceSid, string phoneNumberSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServicePhoneNumber` | `Models/MessagingV1ServicePhoneNumber.cs` |

### DeletePhoneNumber

- **Server group**: `Default1`
- **Signature**: `DeletePhoneNumber(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchPhoneNumber

- **Server group**: `Default1`
- **Signature**: `FetchPhoneNumber(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1ServicePhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServicePhoneNumber` | `Models/MessagingV1ServicePhoneNumber.cs` |

### ListPhoneNumber

- **Server group**: `Default1`
- **Signature**: `ListPhoneNumber(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPhoneNumberResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPhoneNumberResponse` | `Models/ListPhoneNumberResponse.cs` |

