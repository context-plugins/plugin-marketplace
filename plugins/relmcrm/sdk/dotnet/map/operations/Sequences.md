<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sequences — operations

Accessor: `client.Sequences` · Source: `src/RelmCrm/Api/Sequences.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSequence

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `CreateSequence(CreateSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `CreateSequenceRequest` | `src/RelmCrm/Requests/Sequences/CreateSequenceRequest.cs` |
| `SequenceInput` | `src/RelmCrm/Models/SequenceInput.cs` |

### DeleteSequence

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `DeleteSequence(DeleteSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Deleted`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `DeleteSequenceRequest` | `src/RelmCrm/Requests/Sequences/DeleteSequenceRequest.cs` |
| `Deleted` | `src/RelmCrm/Models/Deleted.cs` |

### Enroll

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `Enroll(EnrollRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EnrollRequest` | `src/RelmCrm/Requests/Sequences/EnrollRequest.cs` |
| `SequencesEnrollRequest` | `src/RelmCrm/Models/SequencesEnrollRequest.cs` |

### GetSequence

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `GetSequence(GetSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetSequenceRequest` | `src/RelmCrm/Requests/Sequences/GetSequenceRequest.cs` |

### ListEnrollments

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListEnrollments(ListEnrollmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEnrollmentsRequest` | `src/RelmCrm/Requests/Sequences/ListEnrollmentsRequest.cs` |

### ListSequences

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `ListSequences(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

### PreviewSequence

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `PreviewSequence(PreviewSequenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `PreviewSequenceRequest` | `src/RelmCrm/Requests/Sequences/PreviewSequenceRequest.cs` |

### SetSequenceEnabled

- **Auth**: `options.BearerAuth` OR `options.Oauth2`
- **Signature**: `SetSequenceEnabled(SetSequenceEnabledRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SetSequenceEnabledRequest` | `src/RelmCrm/Requests/Sequences/SetSequenceEnabledRequest.cs` |
| `SequencesRequest` | `src/RelmCrm/Models/SequencesRequest.cs` |

