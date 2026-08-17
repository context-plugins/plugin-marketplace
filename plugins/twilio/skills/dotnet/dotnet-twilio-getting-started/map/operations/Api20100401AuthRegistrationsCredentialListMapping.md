<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthRegistrationsCredentialListMapping — operations

Accessor: `client.Api20100401AuthRegistrationsCredentialListMapping` · Source: `Api/Api20100401AuthRegistrationsCredentialListMapping.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipAuthRegistrationsCredentialListMapping

- **Signature**: `CreateSipAuthRegistrationsCredentialListMapping(string accountSid, string domainSid, string credentialListSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SipAuthRegistrationsCredentialListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SipAuthRegistrationsCredentialListMapping` | `Models/SipAuthRegistrationsCredentialListMapping.cs` |

### DeleteSipAuthRegistrationsCredentialListMapping

- **Signature**: `DeleteSipAuthRegistrationsCredentialListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipAuthRegistrationsCredentialListMapping

- **Signature**: `FetchSipAuthRegistrationsCredentialListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SipAuthRegistrationsCredentialListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SipAuthRegistrationsCredentialListMapping` | `Models/SipAuthRegistrationsCredentialListMapping.cs` |

### ListSipAuthRegistrationsCredentialListMapping

- **Signature**: `ListSipAuthRegistrationsCredentialListMapping(string accountSid, string domainSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipAuthRegistrationsCredentialListMappingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipAuthRegistrationsCredentialListMappingResponse` | `Models/ListSipAuthRegistrationsCredentialListMappingResponse.cs` |

