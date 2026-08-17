<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1UsAppToPersonUsecase — operations

Accessor: `client.MessagingV1UsAppToPersonUsecase` · Source: `Api/MessagingV1UsAppToPersonUsecase.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchUsAppToPersonUsecase

- **Server group**: `Default1`
- **Signature**: `FetchUsAppToPersonUsecase(string messagingServiceSid, string? brandRegistrationSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `brandRegistrationSid` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `BrandRegistrationSid` ← `brandRegistrationSid`
- **Returns**: `MessagingV1ServiceUsAppToPersonUsecase`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1ServiceUsAppToPersonUsecase` | `Models/MessagingV1ServiceUsAppToPersonUsecase.cs` |

