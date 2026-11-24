<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatsNew — operations

Accessor: `client.WhatsNew` · Source: `src/DynamicFeed/Api/WhatsNew.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### WhatsNewEpWhatsNewGet

- **Signature**: `WhatsNewEpWhatsNewGet(WhatsNewEpWhatsNewGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cutoff` ← `Cutoff`
- **Returns**: `object`
- **Error**: `ApiException<WhatsNewEpWhatsNewGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WhatsNewEpWhatsNewGetRequest` | `src/DynamicFeed/Requests/WhatsNew/WhatsNewEpWhatsNewGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `WhatsNewEpWhatsNewGetError` | `src/DynamicFeed/Errors/WhatsNewEpWhatsNewGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

