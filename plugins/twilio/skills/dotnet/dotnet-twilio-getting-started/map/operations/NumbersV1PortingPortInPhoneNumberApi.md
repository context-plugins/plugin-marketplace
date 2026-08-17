<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingPortInPhoneNumberApi — operations

Accessor: `client.NumbersV1PortingPortInPhoneNumberApi` · Source: `Api/NumbersV1PortingPortInPhoneNumberApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeletePortingPortInPhoneNumber

- **Server group**: `Default5`
- **Signature**: `DeletePortingPortInPhoneNumber(string portInRequestSid, string phoneNumberSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchPortingPortInPhoneNumber

- **Server group**: `Default5`
- **Signature**: `FetchPortingPortInPhoneNumber(string portInRequestSid, string phoneNumberSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV1PortingPortInPhoneNumber`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV1PortingPortInPhoneNumber` | `Models/NumbersV1PortingPortInPhoneNumber.cs` |

