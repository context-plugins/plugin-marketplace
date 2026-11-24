<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatabasesThreatFeed — operations

Accessor: `client.DatabasesThreatFeed` · Source: `src/WhoisFreaks/Api/DatabasesThreatFeed.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DownloadThreatFeedMalware

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DownloadThreatFeedMalware(DownloadThreatFeedMalwareRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DownloadThreatFeedMalwareRequest` | `src/WhoisFreaks/Requests/DatabasesThreatFeed/DownloadThreatFeedMalwareRequest.cs` |

### DownloadThreatFeedMalwareSample

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DownloadThreatFeedMalwareSample(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

### DownloadThreatFeedPhishing

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DownloadThreatFeedPhishing(DownloadThreatFeedPhishingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DownloadThreatFeedPhishingRequest` | `src/WhoisFreaks/Requests/DatabasesThreatFeed/DownloadThreatFeedPhishingRequest.cs` |

### DownloadThreatFeedPhishingSample

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DownloadThreatFeedPhishingSample(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

### DownloadThreatFeedSpam

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DownloadThreatFeedSpam(DownloadThreatFeedSpamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DownloadThreatFeedSpamRequest` | `src/WhoisFreaks/Requests/DatabasesThreatFeed/DownloadThreatFeedSpamRequest.cs` |

### DownloadThreatFeedSpamSample

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DownloadThreatFeedSpamSample(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

