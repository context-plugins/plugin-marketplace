<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClassificationsApi — operations

Accessor: `client.ClassificationsApi` · Source: `src/Divvy/Api/ClassificationsApi.cs` · 70 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveClassificationAccountingClass

- **Signature**: `ArchiveClassificationAccountingClass(ArchiveClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<ArchiveClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Divvy/Models/ClassificationAccountingClassResponseDto.cs` |
| `ArchiveClassificationAccountingClassError` | `src/Divvy/Errors/ArchiveClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveClassificationChartOfAccounts

- **Signature**: `ArchiveClassificationChartOfAccounts(ArchiveClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<ArchiveClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `ArchiveClassificationChartOfAccountsError` | `src/Divvy/Errors/ArchiveClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveClassificationDepartment

- **Signature**: `ArchiveClassificationDepartment(ArchiveClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<ArchiveClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentResponseDto` | `src/Divvy/Models/ClassificationDepartmentResponseDto.cs` |
| `ArchiveClassificationDepartmentError` | `src/Divvy/Errors/ArchiveClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveClassificationEmployee

- **Signature**: `ArchiveClassificationEmployee(ArchiveClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<ArchiveClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeResponseDto` | `src/Divvy/Models/ClassificationEmployeeResponseDto.cs` |
| `ArchiveClassificationEmployeeError` | `src/Divvy/Errors/ArchiveClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveClassificationItem

- **Signature**: `ArchiveClassificationItem(ArchiveClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<ArchiveClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationItemRequest.cs` |
| `ClassificationItemResponseDto` | `src/Divvy/Models/ClassificationItemResponseDto.cs` |
| `ArchiveClassificationItemError` | `src/Divvy/Errors/ArchiveClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveClassificationJob

- **Signature**: `ArchiveClassificationJob(ArchiveClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<ArchiveClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationJobRequest.cs` |
| `ClassificationJobResponseDto` | `src/Divvy/Models/ClassificationJobResponseDto.cs` |
| `ArchiveClassificationJobError` | `src/Divvy/Errors/ArchiveClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ArchiveClassificationLocation

- **Signature**: `ArchiveClassificationLocation(ArchiveClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<ArchiveClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/ArchiveClassificationLocationRequest.cs` |
| `ClassificationLocationResponseDto` | `src/Divvy/Models/ClassificationLocationResponseDto.cs` |
| `ArchiveClassificationLocationError` | `src/Divvy/Errors/ArchiveClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationAccountingClass

- **Signature**: `BulkArchiveClassificationAccountingClass(BulkArchiveClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkArchiveClassificationAccountingClassError` | `src/Divvy/Errors/BulkArchiveClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationChartOfAccounts

- **Signature**: `BulkArchiveClassificationChartOfAccounts(BulkArchiveClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkArchiveClassificationChartOfAccountsError` | `src/Divvy/Errors/BulkArchiveClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationDepartment

- **Signature**: `BulkArchiveClassificationDepartment(BulkArchiveClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkArchiveClassificationDepartmentError` | `src/Divvy/Errors/BulkArchiveClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationEmployee

- **Signature**: `BulkArchiveClassificationEmployee(BulkArchiveClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkArchiveClassificationEmployeeError` | `src/Divvy/Errors/BulkArchiveClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationItem

- **Signature**: `BulkArchiveClassificationItem(BulkArchiveClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationItemRequest.cs` |
| `ClassificationItemBulkResponseDto` | `src/Divvy/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkArchiveClassificationItemError` | `src/Divvy/Errors/BulkArchiveClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationJob

- **Signature**: `BulkArchiveClassificationJob(BulkArchiveClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationJobRequest.cs` |
| `ClassificationJobBulkResponseDto` | `src/Divvy/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkArchiveClassificationJobError` | `src/Divvy/Errors/BulkArchiveClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkArchiveClassificationLocation

- **Signature**: `BulkArchiveClassificationLocation(BulkArchiveClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/BulkArchiveClassificationLocationRequest.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Divvy/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkArchiveClassificationLocationError` | `src/Divvy/Errors/BulkArchiveClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationAccountingClass

- **Signature**: `BulkCreateClassificationAccountingClass(BulkCreateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationAccountingClassRequest.cs` |
| `CreateClassificationAccountingClassRequestDto` | `src/Divvy/Models/CreateClassificationAccountingClassRequestDto.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkCreateClassificationAccountingClassError` | `src/Divvy/Errors/BulkCreateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationChartOfAccounts

- **Signature**: `BulkCreateClassificationChartOfAccounts(BulkCreateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationChartOfAccountsRequest.cs` |
| `CreateClassificationChartOfAccountsRequestDto` | `src/Divvy/Models/CreateClassificationChartOfAccountsRequestDto.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkCreateClassificationChartOfAccountsError` | `src/Divvy/Errors/BulkCreateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationDepartment

- **Signature**: `BulkCreateClassificationDepartment(BulkCreateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationDepartmentRequest.cs` |
| `CreateClassificationDepartmentRequestDto` | `src/Divvy/Models/CreateClassificationDepartmentRequestDto.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkCreateClassificationDepartmentError` | `src/Divvy/Errors/BulkCreateClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationEmployee

- **Signature**: `BulkCreateClassificationEmployee(BulkCreateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationEmployeeRequest.cs` |
| `CreateClassificationEmployeeRequestDto` | `src/Divvy/Models/CreateClassificationEmployeeRequestDto.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkCreateClassificationEmployeeError` | `src/Divvy/Errors/BulkCreateClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationItem

- **Signature**: `BulkCreateClassificationItem(BulkCreateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationItemRequest.cs` |
| `CreateClassificationItemRequestDto` | `src/Divvy/Models/CreateClassificationItemRequestDto.cs` |
| `ClassificationItemBulkResponseDto` | `src/Divvy/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkCreateClassificationItemError` | `src/Divvy/Errors/BulkCreateClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationJob

- **Signature**: `BulkCreateClassificationJob(BulkCreateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationJobRequest.cs` |
| `CreateClassificationJobRequestDto` | `src/Divvy/Models/CreateClassificationJobRequestDto.cs` |
| `ClassificationJobBulkResponseDto` | `src/Divvy/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkCreateClassificationJobError` | `src/Divvy/Errors/BulkCreateClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkCreateClassificationLocation

- **Signature**: `BulkCreateClassificationLocation(BulkCreateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/BulkCreateClassificationLocationRequest.cs` |
| `CreateClassificationLocationRequestDto` | `src/Divvy/Models/CreateClassificationLocationRequestDto.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Divvy/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkCreateClassificationLocationError` | `src/Divvy/Errors/BulkCreateClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationAccountingClass

- **Signature**: `BulkRestoreClassificationAccountingClass(BulkRestoreClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkRestoreClassificationAccountingClassError` | `src/Divvy/Errors/BulkRestoreClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationChartOfAccounts

- **Signature**: `BulkRestoreClassificationChartOfAccounts(BulkRestoreClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkRestoreClassificationChartOfAccountsError` | `src/Divvy/Errors/BulkRestoreClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationDepartment

- **Signature**: `BulkRestoreClassificationDepartment(BulkRestoreClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkRestoreClassificationDepartmentError` | `src/Divvy/Errors/BulkRestoreClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationEmployee

- **Signature**: `BulkRestoreClassificationEmployee(BulkRestoreClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkRestoreClassificationEmployeeError` | `src/Divvy/Errors/BulkRestoreClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationItem

- **Signature**: `BulkRestoreClassificationItem(BulkRestoreClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationItemRequest.cs` |
| `ClassificationItemBulkResponseDto` | `src/Divvy/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkRestoreClassificationItemError` | `src/Divvy/Errors/BulkRestoreClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationJob

- **Signature**: `BulkRestoreClassificationJob(BulkRestoreClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationJobRequest.cs` |
| `ClassificationJobBulkResponseDto` | `src/Divvy/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkRestoreClassificationJobError` | `src/Divvy/Errors/BulkRestoreClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkRestoreClassificationLocation

- **Signature**: `BulkRestoreClassificationLocation(BulkRestoreClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/BulkRestoreClassificationLocationRequest.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Divvy/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkRestoreClassificationLocationError` | `src/Divvy/Errors/BulkRestoreClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationAccountingClass

- **Signature**: `BulkUpdateClassificationAccountingClass(BulkUpdateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationAccountingClassRequest.cs` |
| `UpdateClassificationAccountingClassWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationAccountingClassWithIdRequestDto.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Divvy/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkUpdateClassificationAccountingClassError` | `src/Divvy/Errors/BulkUpdateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationChartOfAccounts

- **Signature**: `BulkUpdateClassificationChartOfAccounts(BulkUpdateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationChartOfAccountsRequest.cs` |
| `UpdateClassificationChartOfAccountsWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationChartOfAccountsWithIdRequestDto.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkUpdateClassificationChartOfAccountsError` | `src/Divvy/Errors/BulkUpdateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationDepartment

- **Signature**: `BulkUpdateClassificationDepartment(BulkUpdateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationDepartmentRequest.cs` |
| `UpdateClassificationDepartmentWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationDepartmentWithIdRequestDto.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Divvy/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkUpdateClassificationDepartmentError` | `src/Divvy/Errors/BulkUpdateClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationEmployee

- **Signature**: `BulkUpdateClassificationEmployee(BulkUpdateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationEmployeeRequest.cs` |
| `UpdateClassificationEmployeeWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationEmployeeWithIdRequestDto.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Divvy/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkUpdateClassificationEmployeeError` | `src/Divvy/Errors/BulkUpdateClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationItem

- **Signature**: `BulkUpdateClassificationItem(BulkUpdateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationItemRequest.cs` |
| `UpdateClassificationItemWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationItemWithIdRequestDto.cs` |
| `ClassificationItemBulkResponseDto` | `src/Divvy/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkUpdateClassificationItemError` | `src/Divvy/Errors/BulkUpdateClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationJob

- **Signature**: `BulkUpdateClassificationJob(BulkUpdateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationJobRequest.cs` |
| `UpdateClassificationJobWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationJobWithIdRequestDto.cs` |
| `ClassificationJobBulkResponseDto` | `src/Divvy/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkUpdateClassificationJobError` | `src/Divvy/Errors/BulkUpdateClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### BulkUpdateClassificationLocation

- **Signature**: `BulkUpdateClassificationLocation(BulkUpdateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/BulkUpdateClassificationLocationRequest.cs` |
| `UpdateClassificationLocationWithIdRequestDto` | `src/Divvy/Models/UpdateClassificationLocationWithIdRequestDto.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Divvy/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkUpdateClassificationLocationError` | `src/Divvy/Errors/BulkUpdateClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationAccountingClass

- **Signature**: `CreateClassificationAccountingClass(CreateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<CreateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationAccountingClassRequest.cs` |
| `CreateClassificationAccountingClassRequestDto` | `src/Divvy/Models/CreateClassificationAccountingClassRequestDto.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Divvy/Models/ClassificationAccountingClassResponseDto.cs` |
| `CreateClassificationAccountingClassError` | `src/Divvy/Errors/CreateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationChartOfAccounts

- **Signature**: `CreateClassificationChartOfAccounts(CreateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<CreateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationChartOfAccountsRequest.cs` |
| `CreateClassificationChartOfAccountsRequestDto` | `src/Divvy/Models/CreateClassificationChartOfAccountsRequestDto.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `CreateClassificationChartOfAccountsError` | `src/Divvy/Errors/CreateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationDepartment

- **Signature**: `CreateClassificationDepartment(CreateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<CreateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationDepartmentRequest.cs` |
| `CreateClassificationDepartmentRequestDto` | `src/Divvy/Models/CreateClassificationDepartmentRequestDto.cs` |
| `ClassificationDepartmentResponseDto` | `src/Divvy/Models/ClassificationDepartmentResponseDto.cs` |
| `CreateClassificationDepartmentError` | `src/Divvy/Errors/CreateClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationEmployee

- **Signature**: `CreateClassificationEmployee(CreateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<CreateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationEmployeeRequest.cs` |
| `CreateClassificationEmployeeRequestDto` | `src/Divvy/Models/CreateClassificationEmployeeRequestDto.cs` |
| `ClassificationEmployeeResponseDto` | `src/Divvy/Models/ClassificationEmployeeResponseDto.cs` |
| `CreateClassificationEmployeeError` | `src/Divvy/Errors/CreateClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationItem

- **Signature**: `CreateClassificationItem(CreateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<CreateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationItemRequest.cs` |
| `CreateClassificationItemRequestDto` | `src/Divvy/Models/CreateClassificationItemRequestDto.cs` |
| `ClassificationItemResponseDto` | `src/Divvy/Models/ClassificationItemResponseDto.cs` |
| `CreateClassificationItemError` | `src/Divvy/Errors/CreateClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationJob

- **Signature**: `CreateClassificationJob(CreateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<CreateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationJobRequest.cs` |
| `CreateClassificationJobRequestDto` | `src/Divvy/Models/CreateClassificationJobRequestDto.cs` |
| `ClassificationJobResponseDto` | `src/Divvy/Models/ClassificationJobResponseDto.cs` |
| `CreateClassificationJobError` | `src/Divvy/Errors/CreateClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### CreateClassificationLocation

- **Signature**: `CreateClassificationLocation(CreateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<CreateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/CreateClassificationLocationRequest.cs` |
| `CreateClassificationLocationRequestDto` | `src/Divvy/Models/CreateClassificationLocationRequestDto.cs` |
| `ClassificationLocationResponseDto` | `src/Divvy/Models/ClassificationLocationResponseDto.cs` |
| `CreateClassificationLocationError` | `src/Divvy/Errors/CreateClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationAccountingClass

- **Signature**: `GetClassificationAccountingClass(GetClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<GetClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Divvy/Models/ClassificationAccountingClassResponseDto.cs` |
| `GetClassificationAccountingClassError` | `src/Divvy/Errors/GetClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationChartOfAccounts

- **Signature**: `GetClassificationChartOfAccounts(GetClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<GetClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `GetClassificationChartOfAccountsError` | `src/Divvy/Errors/GetClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationDepartment

- **Signature**: `GetClassificationDepartment(GetClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<GetClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentResponseDto` | `src/Divvy/Models/ClassificationDepartmentResponseDto.cs` |
| `GetClassificationDepartmentError` | `src/Divvy/Errors/GetClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationEmployee

- **Signature**: `GetClassificationEmployee(GetClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<GetClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeResponseDto` | `src/Divvy/Models/ClassificationEmployeeResponseDto.cs` |
| `GetClassificationEmployeeError` | `src/Divvy/Errors/GetClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationItem

- **Signature**: `GetClassificationItem(GetClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<GetClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationItemRequest.cs` |
| `ClassificationItemResponseDto` | `src/Divvy/Models/ClassificationItemResponseDto.cs` |
| `GetClassificationItemError` | `src/Divvy/Errors/GetClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationJob

- **Signature**: `GetClassificationJob(GetClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<GetClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationJobRequest.cs` |
| `ClassificationJobResponseDto` | `src/Divvy/Models/ClassificationJobResponseDto.cs` |
| `GetClassificationJobError` | `src/Divvy/Errors/GetClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetClassificationLocation

- **Signature**: `GetClassificationLocation(GetClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<GetClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/GetClassificationLocationRequest.cs` |
| `ClassificationLocationResponseDto` | `src/Divvy/Models/ClassificationLocationResponseDto.cs` |
| `GetClassificationLocationError` | `src/Divvy/Errors/GetClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationAccountingClasses

- **Signature**: `ListClassificationAccountingClasses(ListClassificationAccountingClassesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationAccountingClassResponseDto`
- **Error**: `ApiException<ListClassificationAccountingClassesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationAccountingClassesRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationAccountingClassesRequest.cs` |
| `ListResponseDtoClassificationAccountingClassResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationAccountingClassResponseDto.cs` |
| `ListClassificationAccountingClassesError` | `src/Divvy/Errors/ListClassificationAccountingClassesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationChartOfAccounts

- **Signature**: `ListClassificationChartOfAccounts(ListClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<ListClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationChartOfAccountsRequest.cs` |
| `ListResponseDtoClassificationChartOfAccountsResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationChartOfAccountsResponseDto.cs` |
| `ListClassificationChartOfAccountsError` | `src/Divvy/Errors/ListClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationDepartments

- **Signature**: `ListClassificationDepartments(ListClassificationDepartmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationDepartmentResponseDto`
- **Error**: `ApiException<ListClassificationDepartmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationDepartmentsRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationDepartmentsRequest.cs` |
| `ListResponseDtoClassificationDepartmentResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationDepartmentResponseDto.cs` |
| `ListClassificationDepartmentsError` | `src/Divvy/Errors/ListClassificationDepartmentsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationEmployees

- **Signature**: `ListClassificationEmployees(ListClassificationEmployeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationEmployeeResponseDto`
- **Error**: `ApiException<ListClassificationEmployeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationEmployeesRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationEmployeesRequest.cs` |
| `ListResponseDtoClassificationEmployeeResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationEmployeeResponseDto.cs` |
| `ListClassificationEmployeesError` | `src/Divvy/Errors/ListClassificationEmployeesError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationItems

- **Signature**: `ListClassificationItems(ListClassificationItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationItemResponseDto`
- **Error**: `ApiException<ListClassificationItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationItemsRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationItemsRequest.cs` |
| `ListResponseDtoClassificationItemResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationItemResponseDto.cs` |
| `ListClassificationItemsError` | `src/Divvy/Errors/ListClassificationItemsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationJobs

- **Signature**: `ListClassificationJobs(ListClassificationJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationJobResponseDto`
- **Error**: `ApiException<ListClassificationJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationJobsRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationJobsRequest.cs` |
| `ListResponseDtoClassificationJobResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationJobResponseDto.cs` |
| `ListClassificationJobsError` | `src/Divvy/Errors/ListClassificationJobsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListClassificationLocations

- **Signature**: `ListClassificationLocations(ListClassificationLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationLocationResponseDto`
- **Error**: `ApiException<ListClassificationLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationLocationsRequest` | `src/Divvy/Requests/ClassificationsApi/ListClassificationLocationsRequest.cs` |
| `ListResponseDtoClassificationLocationResponseDto` | `src/Divvy/Models/ListResponseDtoClassificationLocationResponseDto.cs` |
| `ListClassificationLocationsError` | `src/Divvy/Errors/ListClassificationLocationsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationAccountingClass

- **Signature**: `RestoreClassificationAccountingClass(RestoreClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<RestoreClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Divvy/Models/ClassificationAccountingClassResponseDto.cs` |
| `RestoreClassificationAccountingClassError` | `src/Divvy/Errors/RestoreClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationChartOfAccounts

- **Signature**: `RestoreClassificationChartOfAccounts(RestoreClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<RestoreClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `RestoreClassificationChartOfAccountsError` | `src/Divvy/Errors/RestoreClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationDepartment

- **Signature**: `RestoreClassificationDepartment(RestoreClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<RestoreClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentResponseDto` | `src/Divvy/Models/ClassificationDepartmentResponseDto.cs` |
| `RestoreClassificationDepartmentError` | `src/Divvy/Errors/RestoreClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationEmployee

- **Signature**: `RestoreClassificationEmployee(RestoreClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<RestoreClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeResponseDto` | `src/Divvy/Models/ClassificationEmployeeResponseDto.cs` |
| `RestoreClassificationEmployeeError` | `src/Divvy/Errors/RestoreClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationItem

- **Signature**: `RestoreClassificationItem(RestoreClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<RestoreClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationItemRequest.cs` |
| `ClassificationItemResponseDto` | `src/Divvy/Models/ClassificationItemResponseDto.cs` |
| `RestoreClassificationItemError` | `src/Divvy/Errors/RestoreClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationJob

- **Signature**: `RestoreClassificationJob(RestoreClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<RestoreClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationJobRequest.cs` |
| `ClassificationJobResponseDto` | `src/Divvy/Models/ClassificationJobResponseDto.cs` |
| `RestoreClassificationJobError` | `src/Divvy/Errors/RestoreClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### RestoreClassificationLocation

- **Signature**: `RestoreClassificationLocation(RestoreClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<RestoreClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/RestoreClassificationLocationRequest.cs` |
| `ClassificationLocationResponseDto` | `src/Divvy/Models/ClassificationLocationResponseDto.cs` |
| `RestoreClassificationLocationError` | `src/Divvy/Errors/RestoreClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationAccountingClass

- **Signature**: `UpdateClassificationAccountingClass(UpdateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<UpdateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationAccountingClassRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationAccountingClassRequest.cs` |
| `UpdateClassificationAccountingClassRequestDto` | `src/Divvy/Models/UpdateClassificationAccountingClassRequestDto.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Divvy/Models/ClassificationAccountingClassResponseDto.cs` |
| `UpdateClassificationAccountingClassError` | `src/Divvy/Errors/UpdateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationChartOfAccounts

- **Signature**: `UpdateClassificationChartOfAccounts(UpdateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<UpdateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationChartOfAccountsRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationChartOfAccountsRequest.cs` |
| `UpdateClassificationChartOfAccountsRequestDto` | `src/Divvy/Models/UpdateClassificationChartOfAccountsRequestDto.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Divvy/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `UpdateClassificationChartOfAccountsError` | `src/Divvy/Errors/UpdateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationDepartment

- **Signature**: `UpdateClassificationDepartment(UpdateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<UpdateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationDepartmentRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationDepartmentRequest.cs` |
| `UpdateClassificationDepartmentRequestDto` | `src/Divvy/Models/UpdateClassificationDepartmentRequestDto.cs` |
| `ClassificationDepartmentResponseDto` | `src/Divvy/Models/ClassificationDepartmentResponseDto.cs` |
| `UpdateClassificationDepartmentError` | `src/Divvy/Errors/UpdateClassificationDepartmentError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationEmployee

- **Signature**: `UpdateClassificationEmployee(UpdateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<UpdateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationEmployeeRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationEmployeeRequest.cs` |
| `UpdateClassificationEmployeeRequestDto` | `src/Divvy/Models/UpdateClassificationEmployeeRequestDto.cs` |
| `ClassificationEmployeeResponseDto` | `src/Divvy/Models/ClassificationEmployeeResponseDto.cs` |
| `UpdateClassificationEmployeeError` | `src/Divvy/Errors/UpdateClassificationEmployeeError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationItem

- **Signature**: `UpdateClassificationItem(UpdateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<UpdateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationItemRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationItemRequest.cs` |
| `UpdateClassificationItemRequestDto` | `src/Divvy/Models/UpdateClassificationItemRequestDto.cs` |
| `ClassificationItemResponseDto` | `src/Divvy/Models/ClassificationItemResponseDto.cs` |
| `UpdateClassificationItemError` | `src/Divvy/Errors/UpdateClassificationItemError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationJob

- **Signature**: `UpdateClassificationJob(UpdateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<UpdateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationJobRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationJobRequest.cs` |
| `UpdateClassificationJobRequestDto` | `src/Divvy/Models/UpdateClassificationJobRequestDto.cs` |
| `ClassificationJobResponseDto` | `src/Divvy/Models/ClassificationJobResponseDto.cs` |
| `UpdateClassificationJobError` | `src/Divvy/Errors/UpdateClassificationJobError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateClassificationLocation

- **Signature**: `UpdateClassificationLocation(UpdateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<UpdateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationLocationRequest` | `src/Divvy/Requests/ClassificationsApi/UpdateClassificationLocationRequest.cs` |
| `UpdateClassificationLocationRequestDto` | `src/Divvy/Models/UpdateClassificationLocationRequestDto.cs` |
| `ClassificationLocationResponseDto` | `src/Divvy/Models/ClassificationLocationResponseDto.cs` |
| `UpdateClassificationLocationError` | `src/Divvy/Errors/UpdateClassificationLocationError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

