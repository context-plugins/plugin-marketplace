<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sourceapiassociations — operations

Accessor: `client.sourceapiassociations` · Source: `amazon_app_sync/apis/sourceapiassociations.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sourceapiassociations.associate_source_graphql_api

- **Route**: `POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations`
- **Auth**: `sigv4`
- **Signature**: `def associate_source_graphql_api(merged_api_identifier: str, *, body: V1MergedApisSourceApiAssociationsRequest | V1MergedApisSourceApiAssociationsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `merged_api_identifier`
- **Params**: `merged_api_identifier` — path `mergedApiIdentifier` · `body` — JSON body
- **Returns (parsed)**: `AssociateSourceGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[AssociateSourceGraphqlApiResponse, AssociateSourceGraphqlApiErrorBody]`
- **Error**: `AssociateSourceGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1MergedApisSourceApiAssociationsRequest` | `amazon_app_sync/models/v1_merged_apis_source_api_associations_request.py` |
| `V1MergedApisSourceApiAssociationsRequestDict` | `amazon_app_sync/models/v1_merged_apis_source_api_associations_request.py` |
| `AssociateSourceGraphqlApiResponse` | `amazon_app_sync/models/associate_source_graphql_api_response.py` |
| `AssociateSourceGraphqlApiErrorBody` | `amazon_app_sync/errors/associate_source_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.sourceapiassociations.disassociate_source_graphql_api

- **Route**: `DELETE /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_source_graphql_api(merged_api_identifier: str, association_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `merged_api_identifier`, `association_id`
- **Params**: `merged_api_identifier` — path `mergedApiIdentifier` · `association_id` — path `associationId`
- **Returns (parsed)**: `DisassociateSourceGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[DisassociateSourceGraphqlApiResponse, DisassociateSourceGraphqlApiErrorBody]`
- **Error**: `DisassociateSourceGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisassociateSourceGraphqlApiResponse` | `amazon_app_sync/models/disassociate_source_graphql_api_response.py` |
| `DisassociateSourceGraphqlApiErrorBody` | `amazon_app_sync/errors/disassociate_source_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.sourceapiassociations.get_source_api_association

- **Route**: `GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Signature**: `def get_source_api_association(merged_api_identifier: str, association_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `merged_api_identifier`, `association_id`
- **Params**: `merged_api_identifier` — path `mergedApiIdentifier` · `association_id` — path `associationId`
- **Returns (parsed)**: `GetSourceApiAssociationResponse`
- **Returns (raw)**: `ApiResult[GetSourceApiAssociationResponse, GetSourceApiAssociationErrorBody]`
- **Error**: `GetSourceApiAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetSourceApiAssociationResponse` | `amazon_app_sync/models/get_source_api_association_response.py` |
| `GetSourceApiAssociationErrorBody` | `amazon_app_sync/errors/get_source_api_association_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.sourceapiassociations.list_source_api_associations

- **Route**: `GET /v1/apis/{apiId}/sourceApiAssociations`
- **Auth**: `sigv4`
- **Signature**: `def list_source_api_associations(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListSourceApiAssociationsResponse`
- **Returns (raw)**: `ApiResult[ListSourceApiAssociationsResponse, ListSourceApiAssociationsErrorBody]`
- **Error**: `ListSourceApiAssociationsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListSourceApiAssociationsResponse` | `amazon_app_sync/models/list_source_api_associations_response.py` |
| `ListSourceApiAssociationsErrorBody` | `amazon_app_sync/errors/list_source_api_associations_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.sourceapiassociations.update_source_api_association

- **Route**: `POST /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}`
- **Auth**: `sigv4`
- **Signature**: `def update_source_api_association(association_id: str, merged_api_identifier: str, *, body: V1MergedApisSourceApiAssociationsRequest1 | V1MergedApisSourceApiAssociationsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `association_id`, `merged_api_identifier`
- **Params**: `association_id` — path `associationId` · `merged_api_identifier` — path `mergedApiIdentifier` · `body` — JSON body
- **Returns (parsed)**: `UpdateSourceApiAssociationResponse`
- **Returns (raw)**: `ApiResult[UpdateSourceApiAssociationResponse, UpdateSourceApiAssociationErrorBody]`
- **Error**: `UpdateSourceApiAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1MergedApisSourceApiAssociationsRequest1` | `amazon_app_sync/models/v1_merged_apis_source_api_associations_request1.py` |
| `V1MergedApisSourceApiAssociationsRequest1Dict` | `amazon_app_sync/models/v1_merged_apis_source_api_associations_request1.py` |
| `UpdateSourceApiAssociationResponse` | `amazon_app_sync/models/update_source_api_association_response.py` |
| `UpdateSourceApiAssociationErrorBody` | `amazon_app_sync/errors/update_source_api_association_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

