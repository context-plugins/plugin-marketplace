<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DomainCerts — operations

Accessor: `client.MessagingV1DomainCerts` · Source: `Api/MessagingV1DomainCerts.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteDomainCertV4

- **Server group**: `Default1`
- **Signature**: `DeleteDomainCertV4(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchDomainCertV4

- **Server group**: `Default1`
- **Signature**: `FetchDomainCertV4(string domainSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1DomainCertV4`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1DomainCertV4` | `Models/MessagingV1DomainCertV4.cs` |

### UpdateDomainCertV4

- **Server group**: `Default1`
- **Signature**: `UpdateDomainCertV4(string domainSid, string tlsCert, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MessagingV1DomainCertV4`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `MessagingV1DomainCertV4` | `Models/MessagingV1DomainCertV4.cs` |

