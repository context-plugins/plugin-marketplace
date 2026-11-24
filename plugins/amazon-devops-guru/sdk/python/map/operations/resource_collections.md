<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResourceCollections — operations

Accessor: `client.resource_collections` · Source: `amazon_dev_ops_guru/apis/resource_collections.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.resource_collections.get_resource_collection

- **Route**: `GET /resource-collections/{ResourceCollectionType}`
- **Auth**: `sigv4`
- **Signature**: `def get_resource_collection(resource_collection_type: ResourceCollectionTypeOrStr, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_collection_type`
- **Params**: `resource_collection_type` — path `ResourceCollectionType` · `next_token` — query `NextToken`
- **Returns (parsed)**: `GetResourceCollectionResponse`
- **Returns (raw)**: `ApiResult[GetResourceCollectionResponse, GetResourceCollectionErrorBody]`
- **Error**: `GetResourceCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceCollectionTypeOrStr` | `amazon_dev_ops_guru/models/enums/resource_collection_type.py` |
| `GetResourceCollectionResponse` | `amazon_dev_ops_guru/models/get_resource_collection_response.py` |
| `GetResourceCollectionErrorBody` | `amazon_dev_ops_guru/errors/get_resource_collection_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.resource_collections.update_resource_collection

- **Route**: `PUT /resource-collections`
- **Auth**: `sigv4`
- **Signature**: `def update_resource_collection(*, body: ResourceCollectionsRequest | ResourceCollectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UpdateResourceCollectionErrorBody]`
- **Error**: `UpdateResourceCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceCollectionsRequest` | `amazon_dev_ops_guru/models/resource_collections_request.py` |
| `ResourceCollectionsRequestDict` | `amazon_dev_ops_guru/models/resource_collections_request.py` |
| `UpdateResourceCollectionErrorBody` | `amazon_dev_ops_guru/errors/update_resource_collection_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

