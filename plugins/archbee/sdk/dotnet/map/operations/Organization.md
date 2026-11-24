<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organization — operations

Accessor: `client.Organization` · Source: `src/Archbee/Api/Organization.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### OrganizationDisplayRules

- **Auth**: `options.BearerAuth`
- **Signature**: `OrganizationDisplayRules(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TeamDisplayRulesResponse`
- **Error**: `ApiException<OrganizationDisplayRulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamDisplayRules400Error1([NotNullWhen(true)] out TeamDisplayRules400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TeamDisplayRulesResponse` | `src/Archbee/Models/TeamDisplayRulesResponse.cs` |
| `OrganizationDisplayRulesError` | `src/Archbee/Errors/OrganizationDisplayRulesError.cs` |
| `TeamDisplayRules400Error1` | `src/Archbee/Models/TeamDisplayRules400Error1.cs` |

### OrganizationExport

- **Auth**: `options.BearerAuth`
- **Signature**: `OrganizationExport(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<OrganizationExportError>` — **Case A (typed)**
- **Error accessors**: `TryGetTeamExport400Error1([NotNullWhen(true)] out TeamExport400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OrganizationExportError` | `src/Archbee/Errors/OrganizationExportError.cs` |
| `TeamExport400Error1` | `src/Archbee/Models/TeamExport400Error1.cs` |

