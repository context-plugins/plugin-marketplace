<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomFields — operations

Accessor: `client.CustomFields` · Source: `src/Bill/Api/CustomFields.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCustomField

- **Signature**: `CreateCustomField(CreateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CustomFieldResponseDto`
- **Error**: `ApiException<CreateCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomFieldRequest` | `src/Bill/Requests/CustomFields/CreateCustomFieldRequest.cs` |
| `CreateCustomFieldRequestDto` | `src/Bill/Models/CreateCustomFieldRequestDto.cs` |
| `CustomFieldResponseDto` | `src/Bill/Models/CustomFieldResponseDto.cs` |
| `CreateCustomFieldError` | `src/Bill/Errors/CreateCustomFieldError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateCustomFieldValues

- **Signature**: `CreateCustomFieldValues(CreateCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`, `Body`
- **Returns**: `IReadOnlyList<CustomFieldValueResponseDto>`
- **Error**: `ApiException<CreateCustomFieldValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCustomFieldValuesRequest` | `src/Bill/Requests/CustomFields/CreateCustomFieldValuesRequest.cs` |
| `CreateCustomFieldValueRequestDto` | `src/Bill/Models/CreateCustomFieldValueRequestDto.cs` |
| `CustomFieldValueResponseDto` | `src/Bill/Models/CustomFieldValueResponseDto.cs` |
| `CreateCustomFieldValuesError` | `src/Bill/Errors/CreateCustomFieldValuesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteCustomField

- **Signature**: `DeleteCustomField(DeleteCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldRequest` | `src/Bill/Requests/CustomFields/DeleteCustomFieldRequest.cs` |
| `DeleteCustomFieldError` | `src/Bill/Errors/DeleteCustomFieldError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteCustomFieldValue

- **Signature**: `DeleteCustomFieldValue(DeleteCustomFieldValueRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCustomFieldValueError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCustomFieldValueRequest` | `src/Bill/Requests/CustomFields/DeleteCustomFieldValueRequest.cs` |
| `DeleteCustomFieldValuesRequestDto` | `src/Bill/Models/DeleteCustomFieldValuesRequestDto.cs` |
| `DeleteCustomFieldValueError` | `src/Bill/Errors/DeleteCustomFieldValueError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCustomField

- **Signature**: `GetCustomField(GetCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`
- **Returns**: `CustomFieldResponseDto`
- **Error**: `ApiException<GetCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldRequest` | `src/Bill/Requests/CustomFields/GetCustomFieldRequest.cs` |
| `CustomFieldResponseDto` | `src/Bill/Models/CustomFieldResponseDto.cs` |
| `GetCustomFieldError` | `src/Bill/Errors/GetCustomFieldError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCustomFieldValues

- **Signature**: `GetCustomFieldValues(GetCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`, `CustomFieldValueId`
- **Returns**: `CustomFieldValueResponseDto`
- **Error**: `ApiException<GetCustomFieldValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCustomFieldValuesRequest` | `src/Bill/Requests/CustomFields/GetCustomFieldValuesRequest.cs` |
| `CustomFieldValueResponseDto` | `src/Bill/Models/CustomFieldValueResponseDto.cs` |
| `GetCustomFieldValuesError` | `src/Bill/Errors/GetCustomFieldValuesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCustomFieldValues

- **Signature**: `ListCustomFieldValues(ListCustomFieldValuesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoCustomFieldValueResponseDto`
- **Error**: `ApiException<ListCustomFieldValuesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomFieldValuesRequest` | `src/Bill/Requests/CustomFields/ListCustomFieldValuesRequest.cs` |
| `PaginationResponseDtoCustomFieldValueResponseDto` | `src/Bill/Models/PaginationResponseDtoCustomFieldValueResponseDto.cs` |
| `ListCustomFieldValuesError` | `src/Bill/Errors/ListCustomFieldValuesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListCustomFields

- **Signature**: `ListCustomFields(ListCustomFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `sort` ← `Sort`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoCustomFieldResponseDto`
- **Error**: `ApiException<ListCustomFieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCustomFieldsRequest` | `src/Bill/Requests/CustomFields/ListCustomFieldsRequest.cs` |
| `PaginationResponseDtoCustomFieldResponseDto` | `src/Bill/Models/PaginationResponseDtoCustomFieldResponseDto.cs` |
| `ListCustomFieldsError` | `src/Bill/Errors/ListCustomFieldsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateCustomField

- **Signature**: `UpdateCustomField(UpdateCustomFieldRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `CustomFieldId`, `Body`
- **Returns**: `CustomFieldResponseDto`
- **Error**: `ApiException<UpdateCustomFieldError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCustomFieldRequest` | `src/Bill/Requests/CustomFields/UpdateCustomFieldRequest.cs` |
| `UpdateCustomFieldRequestDto` | `src/Bill/Models/UpdateCustomFieldRequestDto.cs` |
| `CustomFieldResponseDto` | `src/Bill/Models/CustomFieldResponseDto.cs` |
| `UpdateCustomFieldError` | `src/Bill/Errors/UpdateCustomFieldError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

