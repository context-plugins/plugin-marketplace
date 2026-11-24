<!-- Generated file — do not edit; regenerated with the SDK. -->

# EmployeeApi — operations

Accessor: `client.EmployeeApi` · Source: `src/FlowAccount/Api/EmployeeApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EmployeeCount

- **Auth**: `options.Bearer`
- **Signature**: `EmployeeCount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

### EmployeeCreate

- **Auth**: `options.Bearer`
- **Signature**: `EmployeeCreate(EmployeeCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EmployeeCreateRequest` | `src/FlowAccount/Requests/EmployeeApi/EmployeeCreateRequest.cs` |
| `EmployeeModel` | `src/FlowAccount/Models/EmployeeModel.cs` |

### EmployeeEdit

- **Auth**: `options.Bearer`
- **Signature**: `EmployeeEdit(EmployeeEditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EmployeeEditRequest` | `src/FlowAccount/Requests/EmployeeApi/EmployeeEditRequest.cs` |
| `EmployeeModel` | `src/FlowAccount/Models/EmployeeModel.cs` |

### EmployeeGetById

- **Auth**: `options.Bearer`
- **Signature**: `EmployeeGetById(EmployeeGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EmployeeGetByIdRequest` | `src/FlowAccount/Requests/EmployeeApi/EmployeeGetByIdRequest.cs` |

### EmployeeGetList

- **Auth**: `options.Bearer`
- **Signature**: `EmployeeGetList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

### EmployeeRemove

- **Auth**: `options.Bearer`
- **Signature**: `EmployeeRemove(EmployeeRemoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `BinaryContent`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `EmployeeRemoveRequest` | `src/FlowAccount/Requests/EmployeeApi/EmployeeRemoveRequest.cs` |

