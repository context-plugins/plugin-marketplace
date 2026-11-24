<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetCatalog — operations

Accessor: `client.dataset_catalog` · Source: `common_elements/apis/dataset_catalog.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dataset_catalog.datasets_association_index

- **Route**: `GET /api/v1/associations/{id}/datasets`
- **Auth**: `bearer_auth`
- **Signature**: `def datasets_association_index(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1AssociationsDatasetsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AssociationsDatasetsResponse, DatasetsAssociationIndexErrorBody]`
- **Error**: `DatasetsAssociationIndexErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AssociationsDatasetsResponse` | `common_elements/models/api_v1_associations_datasets_response.py` |
| `DatasetsAssociationIndexErrorBody` | `common_elements/errors/datasets_association_index_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.dataset_catalog.datasets_catalog

- **Route**: `GET /api/v1/datasets`
- **Auth**: `bearer_auth`
- **Signature**: `def datasets_catalog(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1DatasetsResponse`
- **Returns (raw)**: `ApiResult[ApiV1DatasetsResponse, DatasetsCatalogErrorBody]`
- **Error**: `DatasetsCatalogErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DatasetsResponse` | `common_elements/models/api_v1_datasets_response.py` |
| `DatasetsCatalogErrorBody` | `common_elements/errors/datasets_catalog_error.py` |
| `Error` | `common_elements/models/error.py` |

