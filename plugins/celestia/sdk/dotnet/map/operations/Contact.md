<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contact — operations

Accessor: `client.Contact` · Source: `src/Celestia/Api/Contact.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SubmitWebsiteContact

- **Server group**: `DefaultCelestiaWebsiteContactApi`
- **Signature**: `SubmitWebsiteContact(SubmitWebsiteContactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Success`
- **Error**: `ApiException<SubmitWebsiteContactError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorCelestiaWebsiteContactApi([NotNullWhen(true)] out ErrorCelestiaWebsiteContactApi? value)` [400, 405, 408, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitWebsiteContactRequest` | `src/Celestia/Requests/Contact/SubmitWebsiteContactRequest.cs` |
| `ContactInput` | `src/Celestia/Models/ContactInput.cs` |
| `Success` | `src/Celestia/Models/Success.cs` |
| `SubmitWebsiteContactError` | `src/Celestia/Errors/SubmitWebsiteContactError.cs` |
| `ErrorCelestiaWebsiteContactApi` | `src/Celestia/Models/ErrorCelestiaWebsiteContactApi.cs` |

