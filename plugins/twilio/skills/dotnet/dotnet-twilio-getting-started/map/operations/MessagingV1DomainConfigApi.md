<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DomainConfigApi — operations

Accessor: `client.MessagingV1DomainConfigApi` · Source: `Api/MessagingV1DomainConfigApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchDomainConfig

- **Server group**: `Default1`
- **Signature**: `FetchDomainConfig(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1DomainConfig`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1DomainConfig` | `Models/MessagingV1DomainConfig.cs` |

### UpdateDomainConfig

- **Server group**: `Default1`
- **Signature**: `UpdateDomainConfig(string domainSid, string? fallbackUrl, string? callbackUrl, bool? continueOnFailure, bool? disableHttps, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`fallbackUrl` … `disableHttps`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `MessagingV1DomainConfig`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1DomainConfig` | `Models/MessagingV1DomainConfig.cs` |

