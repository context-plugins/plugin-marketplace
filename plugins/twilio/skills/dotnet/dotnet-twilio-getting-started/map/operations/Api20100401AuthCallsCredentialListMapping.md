<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthCallsCredentialListMapping — operations

Accessor: `client.Api20100401AuthCallsCredentialListMapping` · Source: `Api/Api20100401AuthCallsCredentialListMapping.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSipAuthCallsCredentialListMapping

- **Signature**: `CreateSipAuthCallsCredentialListMapping(string accountSid, string domainSid, string credentialListSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `Models/ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping.cs` |

### DeleteSipAuthCallsCredentialListMapping

- **Signature**: `DeleteSipAuthCallsCredentialListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchSipAuthCallsCredentialListMapping

- **Signature**: `FetchSipAuthCallsCredentialListMapping(string accountSid, string domainSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `Models/ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping.cs` |

### ListSipAuthCallsCredentialListMapping

- **Signature**: `ListSipAuthCallsCredentialListMapping(string accountSid, string domainSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSipAuthCallsCredentialListMappingResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListSipAuthCallsCredentialListMappingResponse` | `Models/ListSipAuthCallsCredentialListMappingResponse.cs` |

