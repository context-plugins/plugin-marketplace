<!-- Generated file — do not edit; regenerated with the SDK. -->

# DomainNames — operations

Accessor: `client.domain_names` · Source: `amazon_app_sync/apis/domain_names.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.domain_names.associate_api

- **Route**: `POST /v1/domainnames/{domainName}/apiassociation`
- **Auth**: `sigv4`
- **Signature**: `def associate_api(domain_name: str, *, body: V1DomainnamesApiassociationRequest | V1DomainnamesApiassociationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — path `domainName` · `body` — JSON body
- **Returns (parsed)**: `AssociateApiResponse`
- **Returns (raw)**: `ApiResult[AssociateApiResponse, AssociateApiErrorBody]`
- **Error**: `AssociateApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DomainnamesApiassociationRequest` | `amazon_app_sync/models/v1_domainnames_apiassociation_request.py` |
| `V1DomainnamesApiassociationRequestDict` | `amazon_app_sync/models/v1_domainnames_apiassociation_request.py` |
| `AssociateApiResponse` | `amazon_app_sync/models/associate_api_response.py` |
| `AssociateApiErrorBody` | `amazon_app_sync/errors/associate_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.create_domain_name

- **Route**: `POST /v1/domainnames`
- **Auth**: `sigv4`
- **Signature**: `def create_domain_name(*, body: V1DomainnamesRequest | V1DomainnamesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateDomainNameResponse`
- **Returns (raw)**: `ApiResult[CreateDomainNameResponse, CreateDomainNameErrorBody]`
- **Error**: `CreateDomainNameErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DomainnamesRequest` | `amazon_app_sync/models/v1_domainnames_request.py` |
| `V1DomainnamesRequestDict` | `amazon_app_sync/models/v1_domainnames_request.py` |
| `CreateDomainNameResponse` | `amazon_app_sync/models/create_domain_name_response.py` |
| `CreateDomainNameErrorBody` | `amazon_app_sync/errors/create_domain_name_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.delete_domain_name

- **Route**: `DELETE /v1/domainnames/{domainName}`
- **Auth**: `sigv4`
- **Signature**: `def delete_domain_name(domain_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — path `domainName`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteDomainNameErrorBody]`
- **Error**: `DeleteDomainNameErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDomainNameErrorBody` | `amazon_app_sync/errors/delete_domain_name_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.disassociate_api

- **Route**: `DELETE /v1/domainnames/{domainName}/apiassociation`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_api(domain_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — path `domainName`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DisassociateApiErrorBody]`
- **Error**: `DisassociateApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisassociateApiErrorBody` | `amazon_app_sync/errors/disassociate_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.get_api_association

- **Route**: `GET /v1/domainnames/{domainName}/apiassociation`
- **Auth**: `sigv4`
- **Signature**: `def get_api_association(domain_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — path `domainName`
- **Returns (parsed)**: `GetApiAssociationResponse`
- **Returns (raw)**: `ApiResult[GetApiAssociationResponse, GetApiAssociationErrorBody]`
- **Error**: `GetApiAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiAssociationResponse` | `amazon_app_sync/models/get_api_association_response.py` |
| `GetApiAssociationErrorBody` | `amazon_app_sync/errors/get_api_association_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.get_domain_name

- **Route**: `GET /v1/domainnames/{domainName}`
- **Auth**: `sigv4`
- **Signature**: `def get_domain_name(domain_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — path `domainName`
- **Returns (parsed)**: `GetDomainNameResponse`
- **Returns (raw)**: `ApiResult[GetDomainNameResponse, GetDomainNameErrorBody]`
- **Error**: `GetDomainNameErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetDomainNameResponse` | `amazon_app_sync/models/get_domain_name_response.py` |
| `GetDomainNameErrorBody` | `amazon_app_sync/errors/get_domain_name_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.list_domain_names

- **Route**: `GET /v1/domainnames`
- **Auth**: `sigv4`
- **Signature**: `def list_domain_names(*, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListDomainNamesResponse`
- **Returns (raw)**: `ApiResult[ListDomainNamesResponse, ListDomainNamesErrorBody]`
- **Error**: `ListDomainNamesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListDomainNamesResponse` | `amazon_app_sync/models/list_domain_names_response.py` |
| `ListDomainNamesErrorBody` | `amazon_app_sync/errors/list_domain_names_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.domain_names.update_domain_name

- **Route**: `POST /v1/domainnames/{domainName}`
- **Auth**: `sigv4`
- **Signature**: `def update_domain_name(domain_name: str, *, body: V1DomainnamesRequest1 | V1DomainnamesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_name`
- **Params**: `domain_name` — path `domainName` · `body` — JSON body
- **Returns (parsed)**: `UpdateDomainNameResponse`
- **Returns (raw)**: `ApiResult[UpdateDomainNameResponse, UpdateDomainNameErrorBody]`
- **Error**: `UpdateDomainNameErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DomainnamesRequest1` | `amazon_app_sync/models/v1_domainnames_request1.py` |
| `V1DomainnamesRequest1Dict` | `amazon_app_sync/models/v1_domainnames_request1.py` |
| `UpdateDomainNameResponse` | `amazon_app_sync/models/update_domain_name_response.py` |
| `UpdateDomainNameErrorBody` | `amazon_app_sync/errors/update_domain_name_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

