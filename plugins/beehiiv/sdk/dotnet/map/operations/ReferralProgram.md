<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReferralProgram — operations

Accessor: `client.ReferralProgram` · Source: `src/Beehiiv/Api/ReferralProgram.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Show14

- **Signature**: `Show14(Show14Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `PublicationId`, `Authorization`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `ReferralProgramGetResponse`
- **Error**: `ApiException<Show14Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Show14Request` | `src/Beehiiv/Requests/ReferralProgram/Show14Request.cs` |
| `ReferralProgramGetResponse` | `src/Beehiiv/Models/ReferralProgramGetResponse.cs` |
| `Show14Error` | `src/Beehiiv/Errors/Show14Error.cs` |
| `Error` | `src/Beehiiv/Models/Error.cs` |

