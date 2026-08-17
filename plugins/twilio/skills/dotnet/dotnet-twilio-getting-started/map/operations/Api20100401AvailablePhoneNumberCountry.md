<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AvailablePhoneNumberCountry — operations

Accessor: `client.Api20100401AvailablePhoneNumberCountry` · Source: `Api/Api20100401AvailablePhoneNumberCountry.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchAvailablePhoneNumberCountry

- **Signature**: `FetchAvailablePhoneNumberCountry(string accountSid, string countryCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountAvailablePhoneNumberCountry`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountAvailablePhoneNumberCountry` | `Models/ApiV2010AccountAvailablePhoneNumberCountry.cs` |

### ListAvailablePhoneNumberCountry

- **Signature**: `ListAvailablePhoneNumberCountry(string accountSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAvailablePhoneNumberCountryResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListAvailablePhoneNumberCountryResponse` | `Models/ListAvailablePhoneNumberCountryResponse.cs` |

