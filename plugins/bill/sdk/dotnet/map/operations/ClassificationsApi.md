<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClassificationsApi — operations

Accessor: `client.ClassificationsApi` · Source: `src/Bill/Api/ClassificationsApi.cs` · 70 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ArchiveClassificationAccountingClass

- **Signature**: `ArchiveClassificationAccountingClass(ArchiveClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<ArchiveClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Bill/Models/ClassificationAccountingClassResponseDto.cs` |
| `ArchiveClassificationAccountingClassError` | `src/Bill/Errors/ArchiveClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveClassificationChartOfAccounts

- **Signature**: `ArchiveClassificationChartOfAccounts(ArchiveClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<ArchiveClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `ArchiveClassificationChartOfAccountsError` | `src/Bill/Errors/ArchiveClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveClassificationDepartment

- **Signature**: `ArchiveClassificationDepartment(ArchiveClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<ArchiveClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentResponseDto` | `src/Bill/Models/ClassificationDepartmentResponseDto.cs` |
| `ArchiveClassificationDepartmentError` | `src/Bill/Errors/ArchiveClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveClassificationEmployee

- **Signature**: `ArchiveClassificationEmployee(ArchiveClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<ArchiveClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeResponseDto` | `src/Bill/Models/ClassificationEmployeeResponseDto.cs` |
| `ArchiveClassificationEmployeeError` | `src/Bill/Errors/ArchiveClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveClassificationItem

- **Signature**: `ArchiveClassificationItem(ArchiveClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<ArchiveClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationItemRequest.cs` |
| `ClassificationItemResponseDto` | `src/Bill/Models/ClassificationItemResponseDto.cs` |
| `ArchiveClassificationItemError` | `src/Bill/Errors/ArchiveClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveClassificationJob

- **Signature**: `ArchiveClassificationJob(ArchiveClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<ArchiveClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationJobRequest.cs` |
| `ClassificationJobResponseDto` | `src/Bill/Models/ClassificationJobResponseDto.cs` |
| `ArchiveClassificationJobError` | `src/Bill/Errors/ArchiveClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ArchiveClassificationLocation

- **Signature**: `ArchiveClassificationLocation(ArchiveClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<ArchiveClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ArchiveClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/ArchiveClassificationLocationRequest.cs` |
| `ClassificationLocationResponseDto` | `src/Bill/Models/ClassificationLocationResponseDto.cs` |
| `ArchiveClassificationLocationError` | `src/Bill/Errors/ArchiveClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationAccountingClass

- **Signature**: `BulkArchiveClassificationAccountingClass(BulkArchiveClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Bill/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkArchiveClassificationAccountingClassError` | `src/Bill/Errors/BulkArchiveClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationChartOfAccounts

- **Signature**: `BulkArchiveClassificationChartOfAccounts(BulkArchiveClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkArchiveClassificationChartOfAccountsError` | `src/Bill/Errors/BulkArchiveClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationDepartment

- **Signature**: `BulkArchiveClassificationDepartment(BulkArchiveClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Bill/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkArchiveClassificationDepartmentError` | `src/Bill/Errors/BulkArchiveClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationEmployee

- **Signature**: `BulkArchiveClassificationEmployee(BulkArchiveClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Bill/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkArchiveClassificationEmployeeError` | `src/Bill/Errors/BulkArchiveClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationItem

- **Signature**: `BulkArchiveClassificationItem(BulkArchiveClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationItemRequest.cs` |
| `ClassificationItemBulkResponseDto` | `src/Bill/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkArchiveClassificationItemError` | `src/Bill/Errors/BulkArchiveClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationJob

- **Signature**: `BulkArchiveClassificationJob(BulkArchiveClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationJobRequest.cs` |
| `ClassificationJobBulkResponseDto` | `src/Bill/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkArchiveClassificationJobError` | `src/Bill/Errors/BulkArchiveClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkArchiveClassificationLocation

- **Signature**: `BulkArchiveClassificationLocation(BulkArchiveClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkArchiveClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkArchiveClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/BulkArchiveClassificationLocationRequest.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Bill/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkArchiveClassificationLocationError` | `src/Bill/Errors/BulkArchiveClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationAccountingClass

- **Signature**: `BulkCreateClassificationAccountingClass(BulkCreateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationAccountingClassRequest.cs` |
| `CreateClassificationAccountingClassRequestDto` | `src/Bill/Models/CreateClassificationAccountingClassRequestDto.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Bill/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkCreateClassificationAccountingClassError` | `src/Bill/Errors/BulkCreateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationChartOfAccounts

- **Signature**: `BulkCreateClassificationChartOfAccounts(BulkCreateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationChartOfAccountsRequest.cs` |
| `CreateClassificationChartOfAccountsRequestDto` | `src/Bill/Models/CreateClassificationChartOfAccountsRequestDto.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkCreateClassificationChartOfAccountsError` | `src/Bill/Errors/BulkCreateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationDepartment

- **Signature**: `BulkCreateClassificationDepartment(BulkCreateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationDepartmentRequest.cs` |
| `CreateClassificationDepartmentRequestDto` | `src/Bill/Models/CreateClassificationDepartmentRequestDto.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Bill/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkCreateClassificationDepartmentError` | `src/Bill/Errors/BulkCreateClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationEmployee

- **Signature**: `BulkCreateClassificationEmployee(BulkCreateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationEmployeeRequest.cs` |
| `CreateClassificationEmployeeRequestDto` | `src/Bill/Models/CreateClassificationEmployeeRequestDto.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Bill/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkCreateClassificationEmployeeError` | `src/Bill/Errors/BulkCreateClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationItem

- **Signature**: `BulkCreateClassificationItem(BulkCreateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationItemRequest.cs` |
| `CreateClassificationItemRequestDto` | `src/Bill/Models/CreateClassificationItemRequestDto.cs` |
| `ClassificationItemBulkResponseDto` | `src/Bill/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkCreateClassificationItemError` | `src/Bill/Errors/BulkCreateClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationJob

- **Signature**: `BulkCreateClassificationJob(BulkCreateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationJobRequest.cs` |
| `CreateClassificationJobRequestDto` | `src/Bill/Models/CreateClassificationJobRequestDto.cs` |
| `ClassificationJobBulkResponseDto` | `src/Bill/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkCreateClassificationJobError` | `src/Bill/Errors/BulkCreateClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkCreateClassificationLocation

- **Signature**: `BulkCreateClassificationLocation(BulkCreateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkCreateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkCreateClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/BulkCreateClassificationLocationRequest.cs` |
| `CreateClassificationLocationRequestDto` | `src/Bill/Models/CreateClassificationLocationRequestDto.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Bill/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkCreateClassificationLocationError` | `src/Bill/Errors/BulkCreateClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationAccountingClass

- **Signature**: `BulkRestoreClassificationAccountingClass(BulkRestoreClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Bill/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkRestoreClassificationAccountingClassError` | `src/Bill/Errors/BulkRestoreClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationChartOfAccounts

- **Signature**: `BulkRestoreClassificationChartOfAccounts(BulkRestoreClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkRestoreClassificationChartOfAccountsError` | `src/Bill/Errors/BulkRestoreClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationDepartment

- **Signature**: `BulkRestoreClassificationDepartment(BulkRestoreClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Bill/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkRestoreClassificationDepartmentError` | `src/Bill/Errors/BulkRestoreClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationEmployee

- **Signature**: `BulkRestoreClassificationEmployee(BulkRestoreClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Bill/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkRestoreClassificationEmployeeError` | `src/Bill/Errors/BulkRestoreClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationItem

- **Signature**: `BulkRestoreClassificationItem(BulkRestoreClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationItemRequest.cs` |
| `ClassificationItemBulkResponseDto` | `src/Bill/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkRestoreClassificationItemError` | `src/Bill/Errors/BulkRestoreClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationJob

- **Signature**: `BulkRestoreClassificationJob(BulkRestoreClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationJobRequest.cs` |
| `ClassificationJobBulkResponseDto` | `src/Bill/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkRestoreClassificationJobError` | `src/Bill/Errors/BulkRestoreClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkRestoreClassificationLocation

- **Signature**: `BulkRestoreClassificationLocation(BulkRestoreClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ids`
- **Query params (wire ← C#)**: `ids` ← `Ids`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkRestoreClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkRestoreClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/BulkRestoreClassificationLocationRequest.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Bill/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkRestoreClassificationLocationError` | `src/Bill/Errors/BulkRestoreClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationAccountingClass

- **Signature**: `BulkUpdateClassificationAccountingClass(BulkUpdateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationAccountingClassBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationAccountingClassRequest.cs` |
| `UpdateClassificationAccountingClassWithIdRequestDto` | `src/Bill/Models/UpdateClassificationAccountingClassWithIdRequestDto.cs` |
| `ClassificationAccountingClassBulkResponseDto` | `src/Bill/Models/ClassificationAccountingClassBulkResponseDto.cs` |
| `BulkUpdateClassificationAccountingClassError` | `src/Bill/Errors/BulkUpdateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationChartOfAccounts

- **Signature**: `BulkUpdateClassificationChartOfAccounts(BulkUpdateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationChartOfAccountsBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationChartOfAccountsRequest.cs` |
| `UpdateClassificationChartOfAccountsWithIdRequestDto` | `src/Bill/Models/UpdateClassificationChartOfAccountsWithIdRequestDto.cs` |
| `ClassificationChartOfAccountsBulkResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsBulkResponseDto.cs` |
| `BulkUpdateClassificationChartOfAccountsError` | `src/Bill/Errors/BulkUpdateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationDepartment

- **Signature**: `BulkUpdateClassificationDepartment(BulkUpdateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationDepartmentBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationDepartmentRequest.cs` |
| `UpdateClassificationDepartmentWithIdRequestDto` | `src/Bill/Models/UpdateClassificationDepartmentWithIdRequestDto.cs` |
| `ClassificationDepartmentBulkResponseDto` | `src/Bill/Models/ClassificationDepartmentBulkResponseDto.cs` |
| `BulkUpdateClassificationDepartmentError` | `src/Bill/Errors/BulkUpdateClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationEmployee

- **Signature**: `BulkUpdateClassificationEmployee(BulkUpdateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationEmployeeBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationEmployeeRequest.cs` |
| `UpdateClassificationEmployeeWithIdRequestDto` | `src/Bill/Models/UpdateClassificationEmployeeWithIdRequestDto.cs` |
| `ClassificationEmployeeBulkResponseDto` | `src/Bill/Models/ClassificationEmployeeBulkResponseDto.cs` |
| `BulkUpdateClassificationEmployeeError` | `src/Bill/Errors/BulkUpdateClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationItem

- **Signature**: `BulkUpdateClassificationItem(BulkUpdateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationItemBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationItemRequest.cs` |
| `UpdateClassificationItemWithIdRequestDto` | `src/Bill/Models/UpdateClassificationItemWithIdRequestDto.cs` |
| `ClassificationItemBulkResponseDto` | `src/Bill/Models/ClassificationItemBulkResponseDto.cs` |
| `BulkUpdateClassificationItemError` | `src/Bill/Errors/BulkUpdateClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationJob

- **Signature**: `BulkUpdateClassificationJob(BulkUpdateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationJobBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationJobRequest.cs` |
| `UpdateClassificationJobWithIdRequestDto` | `src/Bill/Models/UpdateClassificationJobWithIdRequestDto.cs` |
| `ClassificationJobBulkResponseDto` | `src/Bill/Models/ClassificationJobBulkResponseDto.cs` |
| `BulkUpdateClassificationJobError` | `src/Bill/Errors/BulkUpdateClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### BulkUpdateClassificationLocation

- **Signature**: `BulkUpdateClassificationLocation(BulkUpdateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationLocationBulkResponseDto`
- **Error**: `ApiException<BulkUpdateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/BulkUpdateClassificationLocationRequest.cs` |
| `UpdateClassificationLocationWithIdRequestDto` | `src/Bill/Models/UpdateClassificationLocationWithIdRequestDto.cs` |
| `ClassificationLocationBulkResponseDto` | `src/Bill/Models/ClassificationLocationBulkResponseDto.cs` |
| `BulkUpdateClassificationLocationError` | `src/Bill/Errors/BulkUpdateClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationAccountingClass

- **Signature**: `CreateClassificationAccountingClass(CreateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<CreateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationAccountingClassRequest.cs` |
| `CreateClassificationAccountingClassRequestDto` | `src/Bill/Models/CreateClassificationAccountingClassRequestDto.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Bill/Models/ClassificationAccountingClassResponseDto.cs` |
| `CreateClassificationAccountingClassError` | `src/Bill/Errors/CreateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationChartOfAccounts

- **Signature**: `CreateClassificationChartOfAccounts(CreateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<CreateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationChartOfAccountsRequest.cs` |
| `CreateClassificationChartOfAccountsRequestDto` | `src/Bill/Models/CreateClassificationChartOfAccountsRequestDto.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `CreateClassificationChartOfAccountsError` | `src/Bill/Errors/CreateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationDepartment

- **Signature**: `CreateClassificationDepartment(CreateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<CreateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationDepartmentRequest.cs` |
| `CreateClassificationDepartmentRequestDto` | `src/Bill/Models/CreateClassificationDepartmentRequestDto.cs` |
| `ClassificationDepartmentResponseDto` | `src/Bill/Models/ClassificationDepartmentResponseDto.cs` |
| `CreateClassificationDepartmentError` | `src/Bill/Errors/CreateClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationEmployee

- **Signature**: `CreateClassificationEmployee(CreateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<CreateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationEmployeeRequest.cs` |
| `CreateClassificationEmployeeRequestDto` | `src/Bill/Models/CreateClassificationEmployeeRequestDto.cs` |
| `ClassificationEmployeeResponseDto` | `src/Bill/Models/ClassificationEmployeeResponseDto.cs` |
| `CreateClassificationEmployeeError` | `src/Bill/Errors/CreateClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationItem

- **Signature**: `CreateClassificationItem(CreateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<CreateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationItemRequest.cs` |
| `CreateClassificationItemRequestDto` | `src/Bill/Models/CreateClassificationItemRequestDto.cs` |
| `ClassificationItemResponseDto` | `src/Bill/Models/ClassificationItemResponseDto.cs` |
| `CreateClassificationItemError` | `src/Bill/Errors/CreateClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationJob

- **Signature**: `CreateClassificationJob(CreateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<CreateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationJobRequest.cs` |
| `CreateClassificationJobRequestDto` | `src/Bill/Models/CreateClassificationJobRequestDto.cs` |
| `ClassificationJobResponseDto` | `src/Bill/Models/ClassificationJobResponseDto.cs` |
| `CreateClassificationJobError` | `src/Bill/Errors/CreateClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### CreateClassificationLocation

- **Signature**: `CreateClassificationLocation(CreateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<CreateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/CreateClassificationLocationRequest.cs` |
| `CreateClassificationLocationRequestDto` | `src/Bill/Models/CreateClassificationLocationRequestDto.cs` |
| `ClassificationLocationResponseDto` | `src/Bill/Models/ClassificationLocationResponseDto.cs` |
| `CreateClassificationLocationError` | `src/Bill/Errors/CreateClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationAccountingClass

- **Signature**: `GetClassificationAccountingClass(GetClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<GetClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Bill/Models/ClassificationAccountingClassResponseDto.cs` |
| `GetClassificationAccountingClassError` | `src/Bill/Errors/GetClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationChartOfAccounts

- **Signature**: `GetClassificationChartOfAccounts(GetClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<GetClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `GetClassificationChartOfAccountsError` | `src/Bill/Errors/GetClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationDepartment

- **Signature**: `GetClassificationDepartment(GetClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<GetClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentResponseDto` | `src/Bill/Models/ClassificationDepartmentResponseDto.cs` |
| `GetClassificationDepartmentError` | `src/Bill/Errors/GetClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationEmployee

- **Signature**: `GetClassificationEmployee(GetClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<GetClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeResponseDto` | `src/Bill/Models/ClassificationEmployeeResponseDto.cs` |
| `GetClassificationEmployeeError` | `src/Bill/Errors/GetClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationItem

- **Signature**: `GetClassificationItem(GetClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<GetClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationItemRequest.cs` |
| `ClassificationItemResponseDto` | `src/Bill/Models/ClassificationItemResponseDto.cs` |
| `GetClassificationItemError` | `src/Bill/Errors/GetClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationJob

- **Signature**: `GetClassificationJob(GetClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<GetClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationJobRequest.cs` |
| `ClassificationJobResponseDto` | `src/Bill/Models/ClassificationJobResponseDto.cs` |
| `GetClassificationJobError` | `src/Bill/Errors/GetClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetClassificationLocation

- **Signature**: `GetClassificationLocation(GetClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<GetClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/GetClassificationLocationRequest.cs` |
| `ClassificationLocationResponseDto` | `src/Bill/Models/ClassificationLocationResponseDto.cs` |
| `GetClassificationLocationError` | `src/Bill/Errors/GetClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationAccountingClasses

- **Signature**: `ListClassificationAccountingClasses(ListClassificationAccountingClassesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationAccountingClassResponseDto`
- **Error**: `ApiException<ListClassificationAccountingClassesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationAccountingClassesRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationAccountingClassesRequest.cs` |
| `ListResponseDtoClassificationAccountingClassResponseDto` | `src/Bill/Models/ListResponseDtoClassificationAccountingClassResponseDto.cs` |
| `ListClassificationAccountingClassesError` | `src/Bill/Errors/ListClassificationAccountingClassesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationChartOfAccounts

- **Signature**: `ListClassificationChartOfAccounts(ListClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<ListClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationChartOfAccountsRequest.cs` |
| `ListResponseDtoClassificationChartOfAccountsResponseDto` | `src/Bill/Models/ListResponseDtoClassificationChartOfAccountsResponseDto.cs` |
| `ListClassificationChartOfAccountsError` | `src/Bill/Errors/ListClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationDepartments

- **Signature**: `ListClassificationDepartments(ListClassificationDepartmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationDepartmentResponseDto`
- **Error**: `ApiException<ListClassificationDepartmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationDepartmentsRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationDepartmentsRequest.cs` |
| `ListResponseDtoClassificationDepartmentResponseDto` | `src/Bill/Models/ListResponseDtoClassificationDepartmentResponseDto.cs` |
| `ListClassificationDepartmentsError` | `src/Bill/Errors/ListClassificationDepartmentsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationEmployees

- **Signature**: `ListClassificationEmployees(ListClassificationEmployeesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationEmployeeResponseDto`
- **Error**: `ApiException<ListClassificationEmployeesError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationEmployeesRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationEmployeesRequest.cs` |
| `ListResponseDtoClassificationEmployeeResponseDto` | `src/Bill/Models/ListResponseDtoClassificationEmployeeResponseDto.cs` |
| `ListClassificationEmployeesError` | `src/Bill/Errors/ListClassificationEmployeesError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationItems

- **Signature**: `ListClassificationItems(ListClassificationItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationItemResponseDto`
- **Error**: `ApiException<ListClassificationItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationItemsRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationItemsRequest.cs` |
| `ListResponseDtoClassificationItemResponseDto` | `src/Bill/Models/ListResponseDtoClassificationItemResponseDto.cs` |
| `ListClassificationItemsError` | `src/Bill/Errors/ListClassificationItemsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationJobs

- **Signature**: `ListClassificationJobs(ListClassificationJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationJobResponseDto`
- **Error**: `ApiException<ListClassificationJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationJobsRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationJobsRequest.cs` |
| `ListResponseDtoClassificationJobResponseDto` | `src/Bill/Models/ListResponseDtoClassificationJobResponseDto.cs` |
| `ListClassificationJobsError` | `src/Bill/Errors/ListClassificationJobsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListClassificationLocations

- **Signature**: `ListClassificationLocations(ListClassificationLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `max` ← `Max`, `sort` ← `Sort`, `filters` ← `Filters`, `page` ← `Page`
- **Returns**: `ListResponseDtoClassificationLocationResponseDto`
- **Error**: `ApiException<ListClassificationLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListClassificationLocationsRequest` | `src/Bill/Requests/ClassificationsApi/ListClassificationLocationsRequest.cs` |
| `ListResponseDtoClassificationLocationResponseDto` | `src/Bill/Models/ListResponseDtoClassificationLocationResponseDto.cs` |
| `ListClassificationLocationsError` | `src/Bill/Errors/ListClassificationLocationsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationAccountingClass

- **Signature**: `RestoreClassificationAccountingClass(RestoreClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<RestoreClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationAccountingClassRequest.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Bill/Models/ClassificationAccountingClassResponseDto.cs` |
| `RestoreClassificationAccountingClassError` | `src/Bill/Errors/RestoreClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationChartOfAccounts

- **Signature**: `RestoreClassificationChartOfAccounts(RestoreClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<RestoreClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationChartOfAccountsRequest.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `RestoreClassificationChartOfAccountsError` | `src/Bill/Errors/RestoreClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationDepartment

- **Signature**: `RestoreClassificationDepartment(RestoreClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<RestoreClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationDepartmentRequest.cs` |
| `ClassificationDepartmentResponseDto` | `src/Bill/Models/ClassificationDepartmentResponseDto.cs` |
| `RestoreClassificationDepartmentError` | `src/Bill/Errors/RestoreClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationEmployee

- **Signature**: `RestoreClassificationEmployee(RestoreClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<RestoreClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationEmployeeRequest.cs` |
| `ClassificationEmployeeResponseDto` | `src/Bill/Models/ClassificationEmployeeResponseDto.cs` |
| `RestoreClassificationEmployeeError` | `src/Bill/Errors/RestoreClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationItem

- **Signature**: `RestoreClassificationItem(RestoreClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<RestoreClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationItemRequest.cs` |
| `ClassificationItemResponseDto` | `src/Bill/Models/ClassificationItemResponseDto.cs` |
| `RestoreClassificationItemError` | `src/Bill/Errors/RestoreClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationJob

- **Signature**: `RestoreClassificationJob(RestoreClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<RestoreClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationJobRequest.cs` |
| `ClassificationJobResponseDto` | `src/Bill/Models/ClassificationJobResponseDto.cs` |
| `RestoreClassificationJobError` | `src/Bill/Errors/RestoreClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### RestoreClassificationLocation

- **Signature**: `RestoreClassificationLocation(RestoreClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<RestoreClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RestoreClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/RestoreClassificationLocationRequest.cs` |
| `ClassificationLocationResponseDto` | `src/Bill/Models/ClassificationLocationResponseDto.cs` |
| `RestoreClassificationLocationError` | `src/Bill/Errors/RestoreClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationAccountingClass

- **Signature**: `UpdateClassificationAccountingClass(UpdateClassificationAccountingClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationAccountingClassResponseDto`
- **Error**: `ApiException<UpdateClassificationAccountingClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationAccountingClassRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationAccountingClassRequest.cs` |
| `UpdateClassificationAccountingClassRequestDto` | `src/Bill/Models/UpdateClassificationAccountingClassRequestDto.cs` |
| `ClassificationAccountingClassResponseDto` | `src/Bill/Models/ClassificationAccountingClassResponseDto.cs` |
| `UpdateClassificationAccountingClassError` | `src/Bill/Errors/UpdateClassificationAccountingClassError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationChartOfAccounts

- **Signature**: `UpdateClassificationChartOfAccounts(UpdateClassificationChartOfAccountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationChartOfAccountsResponseDto`
- **Error**: `ApiException<UpdateClassificationChartOfAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationChartOfAccountsRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationChartOfAccountsRequest.cs` |
| `UpdateClassificationChartOfAccountsRequestDto` | `src/Bill/Models/UpdateClassificationChartOfAccountsRequestDto.cs` |
| `ClassificationChartOfAccountsResponseDto` | `src/Bill/Models/ClassificationChartOfAccountsResponseDto.cs` |
| `UpdateClassificationChartOfAccountsError` | `src/Bill/Errors/UpdateClassificationChartOfAccountsError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationDepartment

- **Signature**: `UpdateClassificationDepartment(UpdateClassificationDepartmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationDepartmentResponseDto`
- **Error**: `ApiException<UpdateClassificationDepartmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationDepartmentRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationDepartmentRequest.cs` |
| `UpdateClassificationDepartmentRequestDto` | `src/Bill/Models/UpdateClassificationDepartmentRequestDto.cs` |
| `ClassificationDepartmentResponseDto` | `src/Bill/Models/ClassificationDepartmentResponseDto.cs` |
| `UpdateClassificationDepartmentError` | `src/Bill/Errors/UpdateClassificationDepartmentError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationEmployee

- **Signature**: `UpdateClassificationEmployee(UpdateClassificationEmployeeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationEmployeeResponseDto`
- **Error**: `ApiException<UpdateClassificationEmployeeError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationEmployeeRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationEmployeeRequest.cs` |
| `UpdateClassificationEmployeeRequestDto` | `src/Bill/Models/UpdateClassificationEmployeeRequestDto.cs` |
| `ClassificationEmployeeResponseDto` | `src/Bill/Models/ClassificationEmployeeResponseDto.cs` |
| `UpdateClassificationEmployeeError` | `src/Bill/Errors/UpdateClassificationEmployeeError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationItem

- **Signature**: `UpdateClassificationItem(UpdateClassificationItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationItemResponseDto`
- **Error**: `ApiException<UpdateClassificationItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationItemRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationItemRequest.cs` |
| `UpdateClassificationItemRequestDto` | `src/Bill/Models/UpdateClassificationItemRequestDto.cs` |
| `ClassificationItemResponseDto` | `src/Bill/Models/ClassificationItemResponseDto.cs` |
| `UpdateClassificationItemError` | `src/Bill/Errors/UpdateClassificationItemError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationJob

- **Signature**: `UpdateClassificationJob(UpdateClassificationJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationJobResponseDto`
- **Error**: `ApiException<UpdateClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationJobRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationJobRequest.cs` |
| `UpdateClassificationJobRequestDto` | `src/Bill/Models/UpdateClassificationJobRequestDto.cs` |
| `ClassificationJobResponseDto` | `src/Bill/Models/ClassificationJobResponseDto.cs` |
| `UpdateClassificationJobError` | `src/Bill/Errors/UpdateClassificationJobError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateClassificationLocation

- **Signature**: `UpdateClassificationLocation(UpdateClassificationLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ClassificationLocationResponseDto`
- **Error**: `ApiException<UpdateClassificationLocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateClassificationLocationRequest` | `src/Bill/Requests/ClassificationsApi/UpdateClassificationLocationRequest.cs` |
| `UpdateClassificationLocationRequestDto` | `src/Bill/Models/UpdateClassificationLocationRequestDto.cs` |
| `ClassificationLocationResponseDto` | `src/Bill/Models/ClassificationLocationResponseDto.cs` |
| `UpdateClassificationLocationError` | `src/Bill/Errors/UpdateClassificationLocationError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

