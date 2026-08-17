<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CredentialListMapping — operations

Accessor: `client.Api20100401CredentialListMapping` · Source: `Api/Api20100401CredentialListMapping.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipCredentialListMapping

- **Signature**: `CreateSipCredentialListMapping(string accountSid, string domainSid, string credentialListSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomainSipCredentialListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `Models/ApiV2010AccountSipSipDomainSipCredentialListMapping.cs` |

### DeleteSipCredentialListMapping

- **Signature**: `DeleteSipCredentialListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipCredentialListMapping

- **Signature**: `FetchSipCredentialListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomainSipCredentialListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `Models/ApiV2010AccountSipSipDomainSipCredentialListMapping.cs` |

### ListSipCredentialListMapping

- **Signature**: `ListSipCredentialListMapping(string accountSid, string domainSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipCredentialListMappingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipCredentialListMappingResponse` | `Models/ListSipCredentialListMappingResponse.cs` |

