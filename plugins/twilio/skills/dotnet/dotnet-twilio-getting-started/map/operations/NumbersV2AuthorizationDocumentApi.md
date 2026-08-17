<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2AuthorizationDocumentApi — operations

Accessor: `client.NumbersV2AuthorizationDocumentApi` · Source: `Api/NumbersV2AuthorizationDocumentApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAuthorizationDocument

- **Server group**: `Default5`
- **Signature**: `CreateAuthorizationDocument(string addressSid, string email, string contactPhoneNumber, IReadOnlyList<string> hostedNumberOrderSids, string? contactTitle, IReadOnlyList<string>? ccEmails, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `contactTitle` — nullable, no default → **must pass explicitly**
  - `ccEmails` — nullable, no default → **must pass explicitly**
- **Returns**: `NumbersV2AuthorizationDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2AuthorizationDocument` | `Models/NumbersV2AuthorizationDocument.cs` |

### DeleteAuthorizationDocument

- **Server group**: `Default5`
- **Signature**: `DeleteAuthorizationDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchAuthorizationDocument

- **Server group**: `Default5`
- **Signature**: `FetchAuthorizationDocument(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `NumbersV2AuthorizationDocument`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `NumbersV2AuthorizationDocument` | `Models/NumbersV2AuthorizationDocument.cs` |

### ListAuthorizationDocument

- **Server group**: `Default5`
- **Signature**: `ListAuthorizationDocument(string? email, AuthorizationDocumentEnumStatus? status, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`email` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Email` ← `email`, `Status` ← `status`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListAuthorizationDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `AuthorizationDocumentEnumStatus` | `Models/Enums/AuthorizationDocumentEnumStatus.cs` |
| `ListAuthorizationDocumentResponse` | `Models/ListAuthorizationDocumentResponse.cs` |

