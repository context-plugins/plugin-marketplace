<!-- Generated file — do not edit; regenerated with the SDK. -->

# PractitionerApi — operations

Accessor: `client.PractitionerApi` · Source: `src/HealthGorilla/Api/PractitionerApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReadPractitioner

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadPractitioner(ReadPractitionerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Practitioner`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadPractitionerRequest` | `src/HealthGorilla/Requests/PractitionerApi/ReadPractitionerRequest.cs` |
| `Practitioner` | `src/HealthGorilla/Models/Practitioner.cs` |

### SearchPractitioners

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchPractitioners(SearchPractitionersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `identifier` ← `Identifier`, `name` ← `Name`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchPractitionersRequest` | `src/HealthGorilla/Requests/PractitionerApi/SearchPractitionersRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

