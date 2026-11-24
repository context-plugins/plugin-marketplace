<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `apigee/apis/organizations.py` · 372 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organizations.apigee_organizations_analytics_datastores_create

- **Route**: `POST /v1/organizations/{organizationsId}/analytics/datastores`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_analytics_datastores_create(organizations_id: str, body: GoogleCloudApigeeV1Datastore | GoogleCloudApigeeV1DatastoreDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Datastore`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Datastore, ApigeeOrganizationsAnalyticsDatastoresCreateErrorBody]`
- **Error**: `ApigeeOrganizationsAnalyticsDatastoresCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Datastore` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `GoogleCloudApigeeV1DatastoreDict` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `ApigeeOrganizationsAnalyticsDatastoresCreateErrorBody` | `apigee/errors/apigee_organizations_analytics_datastores_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_analytics_datastores_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_analytics_datastores_delete(organizations_id: str, datastores_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `datastores_id`
- **Params**: `organizations_id` — path `organizationsId` · `datastores_id` — path `datastoresId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsAnalyticsDatastoresDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsAnalyticsDatastoresDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresDeleteErrorBody` | `apigee/errors/apigee_organizations_analytics_datastores_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_analytics_datastores_get

- **Route**: `GET /v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_analytics_datastores_get(organizations_id: str, datastores_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `datastores_id`
- **Params**: `organizations_id` — path `organizationsId` · `datastores_id` — path `datastoresId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Datastore`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Datastore, ApigeeOrganizationsAnalyticsDatastoresGetErrorBody]`
- **Error**: `ApigeeOrganizationsAnalyticsDatastoresGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Datastore` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `ApigeeOrganizationsAnalyticsDatastoresGetErrorBody` | `apigee/errors/apigee_organizations_analytics_datastores_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_analytics_datastores_list

- **Route**: `GET /v1/organizations/{organizationsId}/analytics/datastores`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_analytics_datastores_list(organizations_id: str, *, target_type: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `target_type` — query `targetType`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDatastoresResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDatastoresResponse, ApigeeOrganizationsAnalyticsDatastoresListErrorBody]`
- **Error**: `ApigeeOrganizationsAnalyticsDatastoresListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDatastoresResponse` | `apigee/models/google_cloud_apigee_v1_list_datastores_response.py` |
| `ApigeeOrganizationsAnalyticsDatastoresListErrorBody` | `apigee/errors/apigee_organizations_analytics_datastores_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_analytics_datastores_test

- **Route**: `POST /v1/organizations/{organizationsId}/analytics/datastores:test`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_analytics_datastores_test(organizations_id: str, body: GoogleCloudApigeeV1Datastore | GoogleCloudApigeeV1DatastoreDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1TestDatastoreResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TestDatastoreResponse, ApigeeOrganizationsAnalyticsDatastoresTestErrorBody]`
- **Error**: `ApigeeOrganizationsAnalyticsDatastoresTestErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Datastore` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `GoogleCloudApigeeV1DatastoreDict` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `GoogleCloudApigeeV1TestDatastoreResponse` | `apigee/models/google_cloud_apigee_v1_test_datastore_response.py` |
| `ApigeeOrganizationsAnalyticsDatastoresTestErrorBody` | `apigee/errors/apigee_organizations_analytics_datastores_test_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_analytics_datastores_update

- **Route**: `PUT /v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_analytics_datastores_update(organizations_id: str, datastores_id: str, body: GoogleCloudApigeeV1Datastore | GoogleCloudApigeeV1DatastoreDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `datastores_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `datastores_id` — path `datastoresId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Datastore`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Datastore, ApigeeOrganizationsAnalyticsDatastoresUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsAnalyticsDatastoresUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Datastore` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `GoogleCloudApigeeV1DatastoreDict` | `apigee/models/google_cloud_apigee_v1_datastore.py` |
| `ApigeeOrganizationsAnalyticsDatastoresUpdateErrorBody` | `apigee/errors/apigee_organizations_analytics_datastores_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apim_service_extensions_create

- **Route**: `POST /v1/organizations/{organizationsId}/apimServiceExtensions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apim_service_extensions_create(organizations_id: str, body: GoogleCloudApigeeV1ApimServiceExtension | GoogleCloudApigeeV1ApimServiceExtensionDict, *, apim_service_extension_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apim_service_extension_id` — query `apimServiceExtensionId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsApimServiceExtensionsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsApimServiceExtensionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApimServiceExtension` | `apigee/models/google_cloud_apigee_v1_apim_service_extension.py` |
| `GoogleCloudApigeeV1ApimServiceExtensionDict` | `apigee/models/google_cloud_apigee_v1_apim_service_extension.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsApimServiceExtensionsCreateErrorBody` | `apigee/errors/apigee_organizations_apim_service_extensions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apim_service_extensions_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apim_service_extensions_delete(organizations_id: str, apim_service_extensions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apim_service_extensions_id`
- **Params**: `organizations_id` — path `organizationsId` · `apim_service_extensions_id` — path `apimServiceExtensionsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsApimServiceExtensionsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApimServiceExtensionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsApimServiceExtensionsDeleteErrorBody` | `apigee/errors/apigee_organizations_apim_service_extensions_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apim_service_extensions_get

- **Route**: `GET /v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apim_service_extensions_get(organizations_id: str, apim_service_extensions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apim_service_extensions_id`
- **Params**: `organizations_id` — path `organizationsId` · `apim_service_extensions_id` — path `apimServiceExtensionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApimServiceExtension`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApimServiceExtension, ApigeeOrganizationsApimServiceExtensionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsApimServiceExtensionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApimServiceExtension` | `apigee/models/google_cloud_apigee_v1_apim_service_extension.py` |
| `ApigeeOrganizationsApimServiceExtensionsGetErrorBody` | `apigee/errors/apigee_organizations_apim_service_extensions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apim_service_extensions_list

- **Route**: `GET /v1/organizations/{organizationsId}/apimServiceExtensions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apim_service_extensions_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListApimServiceExtensionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListApimServiceExtensionsResponse, ApigeeOrganizationsApimServiceExtensionsListErrorBody]`
- **Error**: `ApigeeOrganizationsApimServiceExtensionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListApimServiceExtensionsResponse` | `apigee/models/google_cloud_apigee_v1_list_apim_service_extensions_response.py` |
| `ApigeeOrganizationsApimServiceExtensionsListErrorBody` | `apigee/errors/apigee_organizations_apim_service_extensions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apim_service_extensions_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apim_service_extensions_patch(organizations_id: str, apim_service_extensions_id: str, body: GoogleCloudApigeeV1ApimServiceExtension | GoogleCloudApigeeV1ApimServiceExtensionDict, *, allow_missing: bool | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apim_service_extensions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apim_service_extensions_id` — path `apimServiceExtensionsId` · `allow_missing` — query `allowMissing` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsApimServiceExtensionsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsApimServiceExtensionsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApimServiceExtension` | `apigee/models/google_cloud_apigee_v1_apim_service_extension.py` |
| `GoogleCloudApigeeV1ApimServiceExtensionDict` | `apigee/models/google_cloud_apigee_v1_apim_service_extension.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsApimServiceExtensionsPatchErrorBody` | `apigee/errors/apigee_organizations_apim_service_extensions_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_attributes

- **Route**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_attributes(organizations_id: str, apiproducts_id: str, body: GoogleCloudApigeeV1Attributes | GoogleCloudApigeeV1AttributesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Attributes`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attributes, ApigeeOrganizationsApiproductsAttributesErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attributes` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `GoogleCloudApigeeV1AttributesDict` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `ApigeeOrganizationsApiproductsAttributesErrorBody` | `apigee/errors/apigee_organizations_apiproducts_attributes_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_attributes_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_attributes_delete(organizations_id: str, apiproducts_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `attributes_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsApiproductsAttributesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsAttributesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsApiproductsAttributesDeleteErrorBody` | `apigee/errors/apigee_organizations_apiproducts_attributes_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_attributes_get

- **Route**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_attributes_get(organizations_id: str, apiproducts_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `attributes_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsApiproductsAttributesGetErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsAttributesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsApiproductsAttributesGetErrorBody` | `apigee/errors/apigee_organizations_apiproducts_attributes_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_attributes_list

- **Route**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_attributes_list(organizations_id: str, apiproducts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attributes`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attributes, ApigeeOrganizationsApiproductsAttributesListErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsAttributesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attributes` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `ApigeeOrganizationsApiproductsAttributesListErrorBody` | `apigee/errors/apigee_organizations_apiproducts_attributes_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_attributes_update_api_product_attribute

- **Route**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_attributes_update_api_product_attribute(organizations_id: str, apiproducts_id: str, attributes_id: str, body: GoogleCloudApigeeV1Attribute | GoogleCloudApigeeV1AttributeDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `attributes_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `attributes_id` — path `attributesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `GoogleCloudApigeeV1AttributeDict` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeErrorBody` | `apigee/errors/apigee_organizations_apiproducts_attributes_update_api_product_attribute_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_create

- **Route**: `POST /v1/organizations/{organizationsId}/apiproducts`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_create(organizations_id: str, body: GoogleCloudApigeeV1ApiProduct | GoogleCloudApigeeV1ApiProductDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProduct`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProduct, ApigeeOrganizationsApiproductsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `GoogleCloudApigeeV1ApiProductDict` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `ApigeeOrganizationsApiproductsCreateErrorBody` | `apigee/errors/apigee_organizations_apiproducts_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_delete(organizations_id: str, apiproducts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProduct`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProduct, ApigeeOrganizationsApiproductsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `ApigeeOrganizationsApiproductsDeleteErrorBody` | `apigee/errors/apigee_organizations_apiproducts_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_get

- **Route**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_get(organizations_id: str, apiproducts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProduct`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProduct, ApigeeOrganizationsApiproductsGetErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `ApigeeOrganizationsApiproductsGetErrorBody` | `apigee/errors/apigee_organizations_apiproducts_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_list

- **Route**: `GET /v1/organizations/{organizationsId}/apiproducts`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_list(organizations_id: str, *, attributename: str | None = None, attributevalue: str | None = None, count: str | None = None, expand: bool | None = None, space: str | None = None, start_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `attributename` — query · `attributevalue` — query · `count` — query · `expand` — query · `space` — query · `start_key` — query `startKey`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListApiProductsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListApiProductsResponse, ApigeeOrganizationsApiproductsListErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListApiProductsResponse` | `apigee/models/google_cloud_apigee_v1_list_api_products_response.py` |
| `ApigeeOrganizationsApiproductsListErrorBody` | `apigee/errors/apigee_organizations_apiproducts_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_move

- **Route**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}:move`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_move(organizations_id: str, apiproducts_id: str, body: GoogleCloudApigeeV1MoveApiProductRequest | GoogleCloudApigeeV1MoveApiProductRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProduct`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProduct, ApigeeOrganizationsApiproductsMoveErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsMoveErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1MoveApiProductRequest` | `apigee/models/google_cloud_apigee_v1_move_api_product_request.py` |
| `GoogleCloudApigeeV1MoveApiProductRequestDict` | `apigee/models/google_cloud_apigee_v1_move_api_product_request.py` |
| `GoogleCloudApigeeV1ApiProduct` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `ApigeeOrganizationsApiproductsMoveErrorBody` | `apigee/errors/apigee_organizations_apiproducts_move_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_rateplans_create

- **Route**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_rateplans_create(organizations_id: str, apiproducts_id: str, body: GoogleCloudApigeeV1RatePlan | GoogleCloudApigeeV1RatePlanDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1RatePlan`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1RatePlan, ApigeeOrganizationsApiproductsRateplansCreateErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsRateplansCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `apigee/models/google_cloud_apigee_v1_rate_plan.py` |
| `GoogleCloudApigeeV1RatePlanDict` | `apigee/models/google_cloud_apigee_v1_rate_plan.py` |
| `ApigeeOrganizationsApiproductsRateplansCreateErrorBody` | `apigee/errors/apigee_organizations_apiproducts_rateplans_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_rateplans_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_rateplans_delete(organizations_id: str, apiproducts_id: str, rateplans_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `rateplans_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `rateplans_id` — path `rateplansId`
- **Returns (parsed)**: `GoogleCloudApigeeV1RatePlan`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1RatePlan, ApigeeOrganizationsApiproductsRateplansDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsRateplansDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `apigee/models/google_cloud_apigee_v1_rate_plan.py` |
| `ApigeeOrganizationsApiproductsRateplansDeleteErrorBody` | `apigee/errors/apigee_organizations_apiproducts_rateplans_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_rateplans_get

- **Route**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_rateplans_get(organizations_id: str, apiproducts_id: str, rateplans_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `rateplans_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `rateplans_id` — path `rateplansId`
- **Returns (parsed)**: `GoogleCloudApigeeV1RatePlan`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1RatePlan, ApigeeOrganizationsApiproductsRateplansGetErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsRateplansGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `apigee/models/google_cloud_apigee_v1_rate_plan.py` |
| `ApigeeOrganizationsApiproductsRateplansGetErrorBody` | `apigee/errors/apigee_organizations_apiproducts_rateplans_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_rateplans_list

- **Route**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_rateplans_list(organizations_id: str, apiproducts_id: str, *, count: int | None = None, expand: bool | None = None, order_by: str | None = None, start_key: str | None = None, state: State13OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `count` — query · `expand` — query · `order_by` — query `orderBy` · `start_key` — query `startKey` · `state` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListRatePlansResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListRatePlansResponse, ApigeeOrganizationsApiproductsRateplansListErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsRateplansListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `State13OrStr` | `apigee/models/enums/state13.py` |
| `GoogleCloudApigeeV1ListRatePlansResponse` | `apigee/models/google_cloud_apigee_v1_list_rate_plans_response.py` |
| `ApigeeOrganizationsApiproductsRateplansListErrorBody` | `apigee/errors/apigee_organizations_apiproducts_rateplans_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_rateplans_update

- **Route**: `PUT /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_rateplans_update(organizations_id: str, apiproducts_id: str, rateplans_id: str, body: GoogleCloudApigeeV1RatePlan | GoogleCloudApigeeV1RatePlanDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `rateplans_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `rateplans_id` — path `rateplansId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1RatePlan`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1RatePlan, ApigeeOrganizationsApiproductsRateplansUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsRateplansUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `apigee/models/google_cloud_apigee_v1_rate_plan.py` |
| `GoogleCloudApigeeV1RatePlanDict` | `apigee/models/google_cloud_apigee_v1_rate_plan.py` |
| `ApigeeOrganizationsApiproductsRateplansUpdateErrorBody` | `apigee/errors/apigee_organizations_apiproducts_rateplans_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apiproducts_update

- **Route**: `PUT /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apiproducts_update(organizations_id: str, apiproducts_id: str, body: GoogleCloudApigeeV1ApiProduct | GoogleCloudApigeeV1ApiProductDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apiproducts_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apiproducts_id` — path `apiproductsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProduct`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProduct, ApigeeOrganizationsApiproductsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsApiproductsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `GoogleCloudApigeeV1ApiProductDict` | `apigee/models/google_cloud_apigee_v1_api_product.py` |
| `ApigeeOrganizationsApiproductsUpdateErrorBody` | `apigee/errors/apigee_organizations_apiproducts_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_create

- **Route**: `POST /v1/organizations/{organizationsId}/apis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_create(organizations_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, action: str | None = None, name: str | None = None, space: str | None = None, validate: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `action` — query · `name` — query · `space` — query · `validate` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxyRevision, ApigeeOrganizationsApisCreateErrorBody]`
- **Error**: `ApigeeOrganizationsApisCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `apigee/models/google_cloud_apigee_v1_api_proxy_revision.py` |
| `ApigeeOrganizationsApisCreateErrorBody` | `apigee/errors/apigee_organizations_apis_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_debugsessions_list

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/debugsessions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_debugsessions_list(organizations_id: str, apis_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListApiDebugSessionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListApiDebugSessionsResponse, ApigeeOrganizationsApisDebugsessionsListErrorBody]`
- **Error**: `ApigeeOrganizationsApisDebugsessionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListApiDebugSessionsResponse` | `apigee/models/google_cloud_apigee_v1_list_api_debug_sessions_response.py` |
| `ApigeeOrganizationsApisDebugsessionsListErrorBody` | `apigee/errors/apigee_organizations_apis_debugsessions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_delete(organizations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxy`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxy, ApigeeOrganizationsApisDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApisDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProxy` | `apigee/models/google_cloud_apigee_v1_api_proxy.py` |
| `ApigeeOrganizationsApisDeleteErrorBody` | `apigee/errors/apigee_organizations_apis_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_deployments_list(organizations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsApisDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsApisDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsApisDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_apis_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_get

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_get(organizations_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxy`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxy, ApigeeOrganizationsApisGetErrorBody]`
- **Error**: `ApigeeOrganizationsApisGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProxy` | `apigee/models/google_cloud_apigee_v1_api_proxy.py` |
| `ApigeeOrganizationsApisGetErrorBody` | `apigee/errors/apigee_organizations_apis_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_create

- **Route**: `POST /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_create(organizations_id: str, apis_id: str, body: GoogleCloudApigeeV1KeyValueMap | GoogleCloudApigeeV1KeyValueMapDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsApisKeyvaluemapsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `GoogleCloudApigeeV1KeyValueMapDict` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsApisKeyvaluemapsCreateErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_delete(organizations_id: str, apis_id: str, keyvaluemaps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsApisKeyvaluemapsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsApisKeyvaluemapsDeleteErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_entries_create

- **Route**: `POST /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_entries_create(organizations_id: str, apis_id: str, keyvaluemaps_id: str, body: GoogleCloudApigeeV1KeyValueEntry | GoogleCloudApigeeV1KeyValueEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsApisKeyvaluemapsEntriesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsEntriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `GoogleCloudApigeeV1KeyValueEntryDict` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesCreateErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_entries_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_entries_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_entries_delete(organizations_id: str, apis_id: str, keyvaluemaps_id: str, entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`, `entries_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_entries_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_entries_get

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_entries_get(organizations_id: str, apis_id: str, keyvaluemaps_id: str, entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`, `entries_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsApisKeyvaluemapsEntriesGetErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsEntriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesGetErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_entries_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_entries_list

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_entries_list(organizations_id: str, apis_id: str, keyvaluemaps_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListKeyValueEntriesResponse, ApigeeOrganizationsApisKeyvaluemapsEntriesListErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsEntriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `apigee/models/google_cloud_apigee_v1_list_key_value_entries_response.py` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesListErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_entries_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_entries_update

- **Route**: `PUT /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_entries_update(organizations_id: str, apis_id: str, keyvaluemaps_id: str, entries_id: str, body: GoogleCloudApigeeV1KeyValueEntry | GoogleCloudApigeeV1KeyValueEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`, `entries_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `GoogleCloudApigeeV1KeyValueEntryDict` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_entries_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_get

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_get(organizations_id: str, apis_id: str, keyvaluemaps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsApisKeyvaluemapsGetErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsApisKeyvaluemapsGetErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_keyvaluemaps_update

- **Route**: `PUT /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_keyvaluemaps_update(organizations_id: str, apis_id: str, keyvaluemaps_id: str, body: GoogleCloudApigeeV1KeyValueMap | GoogleCloudApigeeV1KeyValueMapDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `keyvaluemaps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsApisKeyvaluemapsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsApisKeyvaluemapsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `GoogleCloudApigeeV1KeyValueMapDict` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsApisKeyvaluemapsUpdateErrorBody` | `apigee/errors/apigee_organizations_apis_keyvaluemaps_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_list

- **Route**: `GET /v1/organizations/{organizationsId}/apis`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_list(organizations_id: str, *, include_meta_data: bool | None = None, include_revisions: bool | None = None, space: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `include_meta_data` — query `includeMetaData` · `include_revisions` — query `includeRevisions` · `space` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListApiProxiesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListApiProxiesResponse, ApigeeOrganizationsApisListErrorBody]`
- **Error**: `ApigeeOrganizationsApisListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListApiProxiesResponse` | `apigee/models/google_cloud_apigee_v1_list_api_proxies_response.py` |
| `ApigeeOrganizationsApisListErrorBody` | `apigee/errors/apigee_organizations_apis_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_move

- **Route**: `POST /v1/organizations/{organizationsId}/apis/{apisId}:move`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_move(organizations_id: str, apis_id: str, body: GoogleCloudApigeeV1MoveApiProxyRequest | GoogleCloudApigeeV1MoveApiProxyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxy`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxy, ApigeeOrganizationsApisMoveErrorBody]`
- **Error**: `ApigeeOrganizationsApisMoveErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1MoveApiProxyRequest` | `apigee/models/google_cloud_apigee_v1_move_api_proxy_request.py` |
| `GoogleCloudApigeeV1MoveApiProxyRequestDict` | `apigee/models/google_cloud_apigee_v1_move_api_proxy_request.py` |
| `GoogleCloudApigeeV1ApiProxy` | `apigee/models/google_cloud_apigee_v1_api_proxy.py` |
| `ApigeeOrganizationsApisMoveErrorBody` | `apigee/errors/apigee_organizations_apis_move_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/apis/{apisId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_patch(organizations_id: str, apis_id: str, body: GoogleCloudApigeeV1ApiProxy | GoogleCloudApigeeV1ApiProxyDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxy`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxy, ApigeeOrganizationsApisPatchErrorBody]`
- **Error**: `ApigeeOrganizationsApisPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProxy` | `apigee/models/google_cloud_apigee_v1_api_proxy.py` |
| `GoogleCloudApigeeV1ApiProxyDict` | `apigee/models/google_cloud_apigee_v1_api_proxy.py` |
| `ApigeeOrganizationsApisPatchErrorBody` | `apigee/errors/apigee_organizations_apis_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_revisions_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_revisions_delete(organizations_id: str, apis_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxyRevision, ApigeeOrganizationsApisRevisionsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsApisRevisionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiProxyRevision` | `apigee/models/google_cloud_apigee_v1_api_proxy_revision.py` |
| `ApigeeOrganizationsApisRevisionsDeleteErrorBody` | `apigee/errors/apigee_organizations_apis_revisions_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_revisions_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_revisions_deployments_list(organizations_id: str, apis_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsApisRevisionsDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsApisRevisionsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsApisRevisionsDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_apis_revisions_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_revisions_get

- **Route**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_revisions_get(organizations_id: str, apis_id: str, revisions_id: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `format_` — query `format`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsApisRevisionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsApisRevisionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsApisRevisionsGetErrorBody` | `apigee/errors/apigee_organizations_apis_revisions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apis_revisions_update_api_proxy_revision

- **Route**: `POST /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apis_revisions_update_api_proxy_revision(organizations_id: str, apis_id: str, revisions_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, validate: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apis_id`, `revisions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `validate` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiProxyRevision, ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionErrorBody]`
- **Error**: `ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `apigee/models/google_cloud_apigee_v1_api_proxy_revision.py` |
| `ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionErrorBody` | `apigee/errors/apigee_organizations_apis_revisions_update_api_proxy_revision_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_create

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_create(organizations_id: str, appgroups_id: str, body: GoogleCloudApigeeV1AppGroupApp | GoogleCloudApigeeV1AppGroupAppDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupApp, ApigeeOrganizationsAppgroupsAppsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `apigee/models/google_cloud_apigee_v1_app_group_app.py` |
| `GoogleCloudApigeeV1AppGroupAppDict` | `apigee/models/google_cloud_apigee_v1_app_group_app.py` |
| `ApigeeOrganizationsAppgroupsAppsCreateErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_delete(organizations_id: str, appgroups_id: str, apps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupApp, ApigeeOrganizationsAppgroupsAppsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `apigee/models/google_cloud_apigee_v1_app_group_app.py` |
| `ApigeeOrganizationsAppgroupsAppsDeleteErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_get

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_get(organizations_id: str, appgroups_id: str, apps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupApp, ApigeeOrganizationsAppgroupsAppsGetErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `apigee/models/google_cloud_apigee_v1_app_group_app.py` |
| `ApigeeOrganizationsAppgroupsAppsGetErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_keys_apiproducts_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_keys_apiproducts_delete(organizations_id: str, appgroups_id: str, apps_id: str, keys_id: str, apiproducts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `keys_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `apiproducts_id` — path `apiproductsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupAppKey, ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `apigee/models/google_cloud_apigee_v1_app_group_app_key.py` |
| `ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_keys_apiproducts_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product(organizations_id: str, appgroups_id: str, apps_id: str, keys_id: str, apiproducts_id: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `keys_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `apiproducts_id` — path `apiproductsId` · `action` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_keys_apiproducts_update_app_group_app_key_api_product_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_keys_create

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_keys_create(organizations_id: str, appgroups_id: str, apps_id: str, body: GoogleCloudApigeeV1AppGroupAppKey | GoogleCloudApigeeV1AppGroupAppKeyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupAppKey, ApigeeOrganizationsAppgroupsAppsKeysCreateErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsKeysCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `apigee/models/google_cloud_apigee_v1_app_group_app_key.py` |
| `GoogleCloudApigeeV1AppGroupAppKeyDict` | `apigee/models/google_cloud_apigee_v1_app_group_app_key.py` |
| `ApigeeOrganizationsAppgroupsAppsKeysCreateErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_keys_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_keys_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_keys_delete(organizations_id: str, appgroups_id: str, apps_id: str, keys_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `keys_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `keys_id` — path `keysId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupAppKey, ApigeeOrganizationsAppgroupsAppsKeysDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsKeysDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `apigee/models/google_cloud_apigee_v1_app_group_app_key.py` |
| `ApigeeOrganizationsAppgroupsAppsKeysDeleteErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_keys_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_keys_get

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_keys_get(organizations_id: str, appgroups_id: str, apps_id: str, keys_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `keys_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `keys_id` — path `keysId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupAppKey, ApigeeOrganizationsAppgroupsAppsKeysGetErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsKeysGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `apigee/models/google_cloud_apigee_v1_app_group_app_key.py` |
| `ApigeeOrganizationsAppgroupsAppsKeysGetErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_keys_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_keys_update_app_group_app_key

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_keys_update_app_group_app_key(organizations_id: str, appgroups_id: str, apps_id: str, keys_id: str, body: GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest | GoogleCloudApigeeV1UpdateAppGroupAppKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `keys_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupAppKey, ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest` | `apigee/models/google_cloud_apigee_v1_update_app_group_app_key_request.py` |
| `GoogleCloudApigeeV1UpdateAppGroupAppKeyRequestDict` | `apigee/models/google_cloud_apigee_v1_update_app_group_app_key_request.py` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `apigee/models/google_cloud_apigee_v1_app_group_app_key.py` |
| `ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_keys_update_app_group_app_key_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_list

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_list(organizations_id: str, appgroups_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListAppGroupAppsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListAppGroupAppsResponse, ApigeeOrganizationsAppgroupsAppsListErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListAppGroupAppsResponse` | `apigee/models/google_cloud_apigee_v1_list_app_group_apps_response.py` |
| `ApigeeOrganizationsAppgroupsAppsListErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_apps_update

- **Route**: `PUT /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_apps_update(organizations_id: str, appgroups_id: str, apps_id: str, body: GoogleCloudApigeeV1AppGroupApp | GoogleCloudApigeeV1AppGroupAppDict, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `apps_id` — path `appsId` · `action` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupApp, ApigeeOrganizationsAppgroupsAppsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsAppsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `apigee/models/google_cloud_apigee_v1_app_group_app.py` |
| `GoogleCloudApigeeV1AppGroupAppDict` | `apigee/models/google_cloud_apigee_v1_app_group_app.py` |
| `ApigeeOrganizationsAppgroupsAppsUpdateErrorBody` | `apigee/errors/apigee_organizations_appgroups_apps_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_balance_adjust

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance:adjust`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_balance_adjust(organizations_id: str, appgroups_id: str, body: GoogleCloudApigeeV1AdjustAppGroupBalanceRequest | GoogleCloudApigeeV1AdjustAppGroupBalanceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupBalance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupBalance, ApigeeOrganizationsAppgroupsBalanceAdjustErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsBalanceAdjustErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AdjustAppGroupBalanceRequest` | `apigee/models/google_cloud_apigee_v1_adjust_app_group_balance_request.py` |
| `GoogleCloudApigeeV1AdjustAppGroupBalanceRequestDict` | `apigee/models/google_cloud_apigee_v1_adjust_app_group_balance_request.py` |
| `GoogleCloudApigeeV1AppGroupBalance` | `apigee/models/google_cloud_apigee_v1_app_group_balance.py` |
| `ApigeeOrganizationsAppgroupsBalanceAdjustErrorBody` | `apigee/errors/apigee_organizations_appgroups_balance_adjust_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_balance_credit

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance:credit`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_balance_credit(organizations_id: str, appgroups_id: str, body: GoogleCloudApigeeV1CreditAppGroupBalanceRequest | GoogleCloudApigeeV1CreditAppGroupBalanceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupBalance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupBalance, ApigeeOrganizationsAppgroupsBalanceCreditErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsBalanceCreditErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CreditAppGroupBalanceRequest` | `apigee/models/google_cloud_apigee_v1_credit_app_group_balance_request.py` |
| `GoogleCloudApigeeV1CreditAppGroupBalanceRequestDict` | `apigee/models/google_cloud_apigee_v1_credit_app_group_balance_request.py` |
| `GoogleCloudApigeeV1AppGroupBalance` | `apigee/models/google_cloud_apigee_v1_app_group_balance.py` |
| `ApigeeOrganizationsAppgroupsBalanceCreditErrorBody` | `apigee/errors/apigee_organizations_appgroups_balance_credit_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_create

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_create(organizations_id: str, body: GoogleCloudApigeeV1AppGroup | GoogleCloudApigeeV1AppGroupDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroup`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroup, ApigeeOrganizationsAppgroupsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `apigee/models/google_cloud_apigee_v1_app_group.py` |
| `GoogleCloudApigeeV1AppGroupDict` | `apigee/models/google_cloud_apigee_v1_app_group.py` |
| `ApigeeOrganizationsAppgroupsCreateErrorBody` | `apigee/errors/apigee_organizations_appgroups_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_delete(organizations_id: str, appgroups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroup`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroup, ApigeeOrganizationsAppgroupsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `apigee/models/google_cloud_apigee_v1_app_group.py` |
| `ApigeeOrganizationsAppgroupsDeleteErrorBody` | `apigee/errors/apigee_organizations_appgroups_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_get

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_get(organizations_id: str, appgroups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroup`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroup, ApigeeOrganizationsAppgroupsGetErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `apigee/models/google_cloud_apigee_v1_app_group.py` |
| `ApigeeOrganizationsAppgroupsGetErrorBody` | `apigee/errors/apigee_organizations_appgroups_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_get_balance

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_get_balance(organizations_id: str, appgroups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupBalance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupBalance, ApigeeOrganizationsAppgroupsGetBalanceErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsGetBalanceErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupBalance` | `apigee/models/google_cloud_apigee_v1_app_group_balance.py` |
| `ApigeeOrganizationsAppgroupsGetBalanceErrorBody` | `apigee/errors/apigee_organizations_appgroups_get_balance_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_get_monetization_config

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/monetizationConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_get_monetization_config(organizations_id: str, appgroups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupMonetizationConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupMonetizationConfig, ApigeeOrganizationsAppgroupsGetMonetizationConfigErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsGetMonetizationConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupMonetizationConfig` | `apigee/models/google_cloud_apigee_v1_app_group_monetization_config.py` |
| `ApigeeOrganizationsAppgroupsGetMonetizationConfigErrorBody` | `apigee/errors/apigee_organizations_appgroups_get_monetization_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_list

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_list(organizations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListAppGroupsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListAppGroupsResponse, ApigeeOrganizationsAppgroupsListErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListAppGroupsResponse` | `apigee/models/google_cloud_apigee_v1_list_app_groups_response.py` |
| `ApigeeOrganizationsAppgroupsListErrorBody` | `apigee/errors/apigee_organizations_appgroups_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_subscriptions_create

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_subscriptions_create(organizations_id: str, appgroups_id: str, body: GoogleCloudApigeeV1AppGroupSubscription | GoogleCloudApigeeV1AppGroupSubscriptionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupSubscription, ApigeeOrganizationsAppgroupsSubscriptionsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsSubscriptionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupSubscription` | `apigee/models/google_cloud_apigee_v1_app_group_subscription.py` |
| `GoogleCloudApigeeV1AppGroupSubscriptionDict` | `apigee/models/google_cloud_apigee_v1_app_group_subscription.py` |
| `ApigeeOrganizationsAppgroupsSubscriptionsCreateErrorBody` | `apigee/errors/apigee_organizations_appgroups_subscriptions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_subscriptions_expire

- **Route**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions/{subscriptionsId}:expire`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_subscriptions_expire(organizations_id: str, appgroups_id: str, subscriptions_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `subscriptions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `subscriptions_id` — path `subscriptionsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupSubscription, ApigeeOrganizationsAppgroupsSubscriptionsExpireErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsSubscriptionsExpireErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupSubscription` | `apigee/models/google_cloud_apigee_v1_app_group_subscription.py` |
| `ApigeeOrganizationsAppgroupsSubscriptionsExpireErrorBody` | `apigee/errors/apigee_organizations_appgroups_subscriptions_expire_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_subscriptions_get

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions/{subscriptionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_subscriptions_get(organizations_id: str, appgroups_id: str, subscriptions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `subscriptions_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `subscriptions_id` — path `subscriptionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupSubscription, ApigeeOrganizationsAppgroupsSubscriptionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsSubscriptionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupSubscription` | `apigee/models/google_cloud_apigee_v1_app_group_subscription.py` |
| `ApigeeOrganizationsAppgroupsSubscriptionsGetErrorBody` | `apigee/errors/apigee_organizations_appgroups_subscriptions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_subscriptions_list

- **Route**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_subscriptions_list(organizations_id: str, appgroups_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse, ApigeeOrganizationsAppgroupsSubscriptionsListErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsSubscriptionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse` | `apigee/models/google_cloud_apigee_v1_list_app_group_subscriptions_response.py` |
| `ApigeeOrganizationsAppgroupsSubscriptionsListErrorBody` | `apigee/errors/apigee_organizations_appgroups_subscriptions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_update

- **Route**: `PUT /v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_update(organizations_id: str, appgroups_id: str, body: GoogleCloudApigeeV1AppGroup | GoogleCloudApigeeV1AppGroupDict, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `action` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroup`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroup, ApigeeOrganizationsAppgroupsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `apigee/models/google_cloud_apigee_v1_app_group.py` |
| `GoogleCloudApigeeV1AppGroupDict` | `apigee/models/google_cloud_apigee_v1_app_group.py` |
| `ApigeeOrganizationsAppgroupsUpdateErrorBody` | `apigee/errors/apigee_organizations_appgroups_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_appgroups_update_monetization_config

- **Route**: `PUT /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/monetizationConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_appgroups_update_monetization_config(organizations_id: str, appgroups_id: str, body: GoogleCloudApigeeV1AppGroupMonetizationConfig | GoogleCloudApigeeV1AppGroupMonetizationConfigDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `appgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `appgroups_id` — path `appgroupsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AppGroupMonetizationConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AppGroupMonetizationConfig, ApigeeOrganizationsAppgroupsUpdateMonetizationConfigErrorBody]`
- **Error**: `ApigeeOrganizationsAppgroupsUpdateMonetizationConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AppGroupMonetizationConfig` | `apigee/models/google_cloud_apigee_v1_app_group_monetization_config.py` |
| `GoogleCloudApigeeV1AppGroupMonetizationConfigDict` | `apigee/models/google_cloud_apigee_v1_app_group_monetization_config.py` |
| `ApigeeOrganizationsAppgroupsUpdateMonetizationConfigErrorBody` | `apigee/errors/apigee_organizations_appgroups_update_monetization_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apps_get

- **Route**: `GET /v1/organizations/{organizationsId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apps_get(organizations_id: str, apps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `apps_id`
- **Params**: `organizations_id` — path `organizationsId` · `apps_id` — path `appsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1App`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1App, ApigeeOrganizationsAppsGetErrorBody]`
- **Error**: `ApigeeOrganizationsAppsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1App` | `apigee/models/google_cloud_apigee_v1_app.py` |
| `ApigeeOrganizationsAppsGetErrorBody` | `apigee/errors/apigee_organizations_apps_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_apps_list

- **Route**: `GET /v1/organizations/{organizationsId}/apps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_apps_list(organizations_id: str, *, api_product: str | None = None, apptype: str | None = None, expand: bool | None = None, filter_: str | None = None, ids: str | None = None, include_cred: bool | None = None, key_status: str | None = None, page_size: int | None = None, page_token: str | None = None, rows: str | None = None, start_key: str | None = None, status: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `api_product` — query `apiProduct` · `apptype` — query · `expand` — query · `filter_` — query `filter` · `ids` — query · `include_cred` — query `includeCred` · `key_status` — query `keyStatus` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `rows` — query · `start_key` — query `startKey` · `status` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListAppsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListAppsResponse, ApigeeOrganizationsAppsListErrorBody]`
- **Error**: `ApigeeOrganizationsAppsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListAppsResponse` | `apigee/models/google_cloud_apigee_v1_list_apps_response.py` |
| `ApigeeOrganizationsAppsListErrorBody` | `apigee/errors/apigee_organizations_apps_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_create

- **Route**: `POST /v1/organizations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_create(body: GoogleCloudApigeeV1Organization | GoogleCloudApigeeV1OrganizationDict, *, parent: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `parent` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Organization` | `apigee/models/google_cloud_apigee_v1_organization.py` |
| `GoogleCloudApigeeV1OrganizationDict` | `apigee/models/google_cloud_apigee_v1_organization.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsCreateErrorBody` | `apigee/errors/apigee_organizations_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_datacollectors_create

- **Route**: `POST /v1/organizations/{organizationsId}/datacollectors`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_datacollectors_create(organizations_id: str, body: GoogleCloudApigeeV1DataCollector | GoogleCloudApigeeV1DataCollectorDict, *, data_collector_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `data_collector_id` — query `dataCollectorId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DataCollector`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DataCollector, ApigeeOrganizationsDatacollectorsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDatacollectorsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DataCollector` | `apigee/models/google_cloud_apigee_v1_data_collector.py` |
| `GoogleCloudApigeeV1DataCollectorDict` | `apigee/models/google_cloud_apigee_v1_data_collector.py` |
| `ApigeeOrganizationsDatacollectorsCreateErrorBody` | `apigee/errors/apigee_organizations_datacollectors_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_datacollectors_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_datacollectors_delete(organizations_id: str, datacollectors_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `datacollectors_id`
- **Params**: `organizations_id` — path `organizationsId` · `datacollectors_id` — path `datacollectorsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsDatacollectorsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDatacollectorsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDatacollectorsDeleteErrorBody` | `apigee/errors/apigee_organizations_datacollectors_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_datacollectors_get

- **Route**: `GET /v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_datacollectors_get(organizations_id: str, datacollectors_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `datacollectors_id`
- **Params**: `organizations_id` — path `organizationsId` · `datacollectors_id` — path `datacollectorsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DataCollector`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DataCollector, ApigeeOrganizationsDatacollectorsGetErrorBody]`
- **Error**: `ApigeeOrganizationsDatacollectorsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DataCollector` | `apigee/models/google_cloud_apigee_v1_data_collector.py` |
| `ApigeeOrganizationsDatacollectorsGetErrorBody` | `apigee/errors/apigee_organizations_datacollectors_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_datacollectors_list

- **Route**: `GET /v1/organizations/{organizationsId}/datacollectors`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_datacollectors_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDataCollectorsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDataCollectorsResponse, ApigeeOrganizationsDatacollectorsListErrorBody]`
- **Error**: `ApigeeOrganizationsDatacollectorsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDataCollectorsResponse` | `apigee/models/google_cloud_apigee_v1_list_data_collectors_response.py` |
| `ApigeeOrganizationsDatacollectorsListErrorBody` | `apigee/errors/apigee_organizations_datacollectors_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_datacollectors_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_datacollectors_patch(organizations_id: str, datacollectors_id: str, body: GoogleCloudApigeeV1DataCollector | GoogleCloudApigeeV1DataCollectorDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `datacollectors_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `datacollectors_id` — path `datacollectorsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DataCollector`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DataCollector, ApigeeOrganizationsDatacollectorsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsDatacollectorsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DataCollector` | `apigee/models/google_cloud_apigee_v1_data_collector.py` |
| `GoogleCloudApigeeV1DataCollectorDict` | `apigee/models/google_cloud_apigee_v1_data_collector.py` |
| `ApigeeOrganizationsDatacollectorsPatchErrorBody` | `apigee/errors/apigee_organizations_datacollectors_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_delete(organizations_id: str, *, retention: RetentionOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `retention` — query
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RetentionOrStr` | `apigee/models/enums/retention.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsDeleteErrorBody` | `apigee/errors/apigee_organizations_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_deployments_list(organizations_id: str, *, shared_flows: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `shared_flows` — query `sharedFlows`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_attributes

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_attributes(organizations_id: str, developers_id: str, apps_id: str, body: GoogleCloudApigeeV1Attributes | GoogleCloudApigeeV1AttributesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Attributes`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attributes, ApigeeOrganizationsDevelopersAppsAttributesErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attributes` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `GoogleCloudApigeeV1AttributesDict` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `ApigeeOrganizationsDevelopersAppsAttributesErrorBody` | `apigee/errors/apigee_organizations_developers_apps_attributes_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_attributes_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_attributes_delete(organizations_id: str, developers_id: str, apps_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `attributes_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsDevelopersAppsAttributesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsAttributesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsDevelopersAppsAttributesDeleteErrorBody` | `apigee/errors/apigee_organizations_developers_apps_attributes_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_attributes_get

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_attributes_get(organizations_id: str, developers_id: str, apps_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `attributes_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsDevelopersAppsAttributesGetErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsAttributesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsDevelopersAppsAttributesGetErrorBody` | `apigee/errors/apigee_organizations_developers_apps_attributes_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_attributes_list

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_attributes_list(organizations_id: str, developers_id: str, apps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attributes`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attributes, ApigeeOrganizationsDevelopersAppsAttributesListErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsAttributesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attributes` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `ApigeeOrganizationsDevelopersAppsAttributesListErrorBody` | `apigee/errors/apigee_organizations_developers_apps_attributes_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_attributes_update_developer_app_attribute

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_attributes_update_developer_app_attribute(organizations_id: str, developers_id: str, apps_id: str, attributes_id: str, body: GoogleCloudApigeeV1Attribute | GoogleCloudApigeeV1AttributeDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `attributes_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `attributes_id` — path `attributesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `GoogleCloudApigeeV1AttributeDict` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeErrorBody` | `apigee/errors/apigee_organizations_developers_apps_attributes_update_developer_app_attribute_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_create

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_create(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1DeveloperApp | GoogleCloudApigeeV1DeveloperAppDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperApp, ApigeeOrganizationsDevelopersAppsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `GoogleCloudApigeeV1DeveloperAppDict` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `ApigeeOrganizationsDevelopersAppsCreateErrorBody` | `apigee/errors/apigee_organizations_developers_apps_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_delete(organizations_id: str, developers_id: str, apps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperApp, ApigeeOrganizationsDevelopersAppsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `ApigeeOrganizationsDevelopersAppsDeleteErrorBody` | `apigee/errors/apigee_organizations_developers_apps_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_generate_key_pair_or_update_developer_app_status

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_generate_key_pair_or_update_developer_app_status(organizations_id: str, developers_id: str, apps_id: str, body: GoogleCloudApigeeV1DeveloperApp | GoogleCloudApigeeV1DeveloperAppDict, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `action` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperApp, ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `GoogleCloudApigeeV1DeveloperAppDict` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusErrorBody` | `apigee/errors/apigee_organizations_developers_apps_generate_key_pair_or_update_developer_app_status_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_get

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_get(organizations_id: str, developers_id: str, apps_id: str, *, entity: str | None = None, query: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `entity` — query · `query` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperApp, ApigeeOrganizationsDevelopersAppsGetErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `ApigeeOrganizationsDevelopersAppsGetErrorBody` | `apigee/errors/apigee_organizations_developers_apps_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_apiproducts_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_apiproducts_delete(organizations_id: str, developers_id: str, apps_id: str, keys_id: str, apiproducts_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `keys_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `apiproducts_id` — path `apiproductsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_apiproducts_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product(organizations_id: str, developers_id: str, apps_id: str, keys_id: str, apiproducts_id: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `keys_id`, `apiproducts_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `apiproducts_id` — path `apiproductsId` · `action` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_apiproducts_update_developer_app_key_api_product_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_create

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_create(organizations_id: str, developers_id: str, apps_id: str, body: GoogleCloudApigeeV1DeveloperAppKey | GoogleCloudApigeeV1DeveloperAppKeyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `GoogleCloudApigeeV1DeveloperAppKeyDict` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysCreateErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_create_create

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/create`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_create_create(organizations_id: str, developers_id: str, apps_id: str, body: GoogleCloudApigeeV1DeveloperAppKey | GoogleCloudApigeeV1DeveloperAppKeyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysCreateCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysCreateCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `GoogleCloudApigeeV1DeveloperAppKeyDict` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysCreateCreateErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_create_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_delete(organizations_id: str, developers_id: str, apps_id: str, keys_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `keys_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `keys_id` — path `keysId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysDeleteErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_get

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_get(organizations_id: str, developers_id: str, apps_id: str, keys_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `keys_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `keys_id` — path `keysId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysGetErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysGetErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_replace_developer_app_key

- **Route**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_replace_developer_app_key(organizations_id: str, developers_id: str, apps_id: str, keys_id: str, body: GoogleCloudApigeeV1DeveloperAppKey | GoogleCloudApigeeV1DeveloperAppKeyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `keys_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `GoogleCloudApigeeV1DeveloperAppKeyDict` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_replace_developer_app_key_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_keys_update_developer_app_key

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_keys_update_developer_app_key(organizations_id: str, developers_id: str, apps_id: str, keys_id: str, body: GoogleCloudApigeeV1DeveloperAppKey | GoogleCloudApigeeV1DeveloperAppKeyDict, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `keys_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `keys_id` — path `keysId` · `action` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperAppKey, ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `GoogleCloudApigeeV1DeveloperAppKeyDict` | `apigee/models/google_cloud_apigee_v1_developer_app_key.py` |
| `ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyErrorBody` | `apigee/errors/apigee_organizations_developers_apps_keys_update_developer_app_key_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_list

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_list(organizations_id: str, developers_id: str, *, count: str | None = None, expand: bool | None = None, shallow_expand: bool | None = None, start_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `count` — query · `expand` — query · `shallow_expand` — query `shallowExpand` · `start_key` — query `startKey`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeveloperAppsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeveloperAppsResponse, ApigeeOrganizationsDevelopersAppsListErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeveloperAppsResponse` | `apigee/models/google_cloud_apigee_v1_list_developer_apps_response.py` |
| `ApigeeOrganizationsDevelopersAppsListErrorBody` | `apigee/errors/apigee_organizations_developers_apps_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_apps_update

- **Route**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_apps_update(organizations_id: str, developers_id: str, apps_id: str, body: GoogleCloudApigeeV1DeveloperApp | GoogleCloudApigeeV1DeveloperAppDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `apps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `apps_id` — path `appsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperApp`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperApp, ApigeeOrganizationsDevelopersAppsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAppsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `GoogleCloudApigeeV1DeveloperAppDict` | `apigee/models/google_cloud_apigee_v1_developer_app.py` |
| `ApigeeOrganizationsDevelopersAppsUpdateErrorBody` | `apigee/errors/apigee_organizations_developers_apps_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_attributes

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_attributes(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1Attributes | GoogleCloudApigeeV1AttributesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Attributes`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attributes, ApigeeOrganizationsDevelopersAttributesErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAttributesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attributes` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `GoogleCloudApigeeV1AttributesDict` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `ApigeeOrganizationsDevelopersAttributesErrorBody` | `apigee/errors/apigee_organizations_developers_attributes_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_attributes_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_attributes_delete(organizations_id: str, developers_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `attributes_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsDevelopersAttributesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAttributesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsDevelopersAttributesDeleteErrorBody` | `apigee/errors/apigee_organizations_developers_attributes_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_attributes_get

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_attributes_get(organizations_id: str, developers_id: str, attributes_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `attributes_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `attributes_id` — path `attributesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsDevelopersAttributesGetErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAttributesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsDevelopersAttributesGetErrorBody` | `apigee/errors/apigee_organizations_developers_attributes_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_attributes_list

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/attributes`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_attributes_list(organizations_id: str, developers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Attributes`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attributes, ApigeeOrganizationsDevelopersAttributesListErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAttributesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attributes` | `apigee/models/google_cloud_apigee_v1_attributes.py` |
| `ApigeeOrganizationsDevelopersAttributesListErrorBody` | `apigee/errors/apigee_organizations_developers_attributes_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_attributes_update_developer_attribute

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_attributes_update_developer_attribute(organizations_id: str, developers_id: str, attributes_id: str, body: GoogleCloudApigeeV1Attribute | GoogleCloudApigeeV1AttributeDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `attributes_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `attributes_id` — path `attributesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Attribute`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Attribute, ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Attribute` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `GoogleCloudApigeeV1AttributeDict` | `apigee/models/google_cloud_apigee_v1_attribute.py` |
| `ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeErrorBody` | `apigee/errors/apigee_organizations_developers_attributes_update_developer_attribute_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_balance_adjust

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/balance:adjust`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_balance_adjust(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1AdjustDeveloperBalanceRequest | GoogleCloudApigeeV1AdjustDeveloperBalanceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperBalance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperBalance, ApigeeOrganizationsDevelopersBalanceAdjustErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersBalanceAdjustErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AdjustDeveloperBalanceRequest` | `apigee/models/google_cloud_apigee_v1_adjust_developer_balance_request.py` |
| `GoogleCloudApigeeV1AdjustDeveloperBalanceRequestDict` | `apigee/models/google_cloud_apigee_v1_adjust_developer_balance_request.py` |
| `GoogleCloudApigeeV1DeveloperBalance` | `apigee/models/google_cloud_apigee_v1_developer_balance.py` |
| `ApigeeOrganizationsDevelopersBalanceAdjustErrorBody` | `apigee/errors/apigee_organizations_developers_balance_adjust_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_balance_credit

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/balance:credit`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_balance_credit(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1CreditDeveloperBalanceRequest | GoogleCloudApigeeV1CreditDeveloperBalanceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperBalance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperBalance, ApigeeOrganizationsDevelopersBalanceCreditErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersBalanceCreditErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CreditDeveloperBalanceRequest` | `apigee/models/google_cloud_apigee_v1_credit_developer_balance_request.py` |
| `GoogleCloudApigeeV1CreditDeveloperBalanceRequestDict` | `apigee/models/google_cloud_apigee_v1_credit_developer_balance_request.py` |
| `GoogleCloudApigeeV1DeveloperBalance` | `apigee/models/google_cloud_apigee_v1_developer_balance.py` |
| `ApigeeOrganizationsDevelopersBalanceCreditErrorBody` | `apigee/errors/apigee_organizations_developers_balance_credit_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_create

- **Route**: `POST /v1/organizations/{organizationsId}/developers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_create(organizations_id: str, body: GoogleCloudApigeeV1Developer | GoogleCloudApigeeV1DeveloperDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Developer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Developer, ApigeeOrganizationsDevelopersCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Developer` | `apigee/models/google_cloud_apigee_v1_developer.py` |
| `GoogleCloudApigeeV1DeveloperDict` | `apigee/models/google_cloud_apigee_v1_developer.py` |
| `ApigeeOrganizationsDevelopersCreateErrorBody` | `apigee/errors/apigee_organizations_developers_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_delete(organizations_id: str, developers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Developer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Developer, ApigeeOrganizationsDevelopersDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Developer` | `apigee/models/google_cloud_apigee_v1_developer.py` |
| `ApigeeOrganizationsDevelopersDeleteErrorBody` | `apigee/errors/apigee_organizations_developers_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_get

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_get(organizations_id: str, developers_id: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `action` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1Developer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Developer, ApigeeOrganizationsDevelopersGetErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Developer` | `apigee/models/google_cloud_apigee_v1_developer.py` |
| `ApigeeOrganizationsDevelopersGetErrorBody` | `apigee/errors/apigee_organizations_developers_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_get_balance

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/balance`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_get_balance(organizations_id: str, developers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperBalance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperBalance, ApigeeOrganizationsDevelopersGetBalanceErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersGetBalanceErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperBalance` | `apigee/models/google_cloud_apigee_v1_developer_balance.py` |
| `ApigeeOrganizationsDevelopersGetBalanceErrorBody` | `apigee/errors/apigee_organizations_developers_get_balance_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_get_monetization_config

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_get_monetization_config(organizations_id: str, developers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperMonetizationConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperMonetizationConfig, ApigeeOrganizationsDevelopersGetMonetizationConfigErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersGetMonetizationConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperMonetizationConfig` | `apigee/models/google_cloud_apigee_v1_developer_monetization_config.py` |
| `ApigeeOrganizationsDevelopersGetMonetizationConfigErrorBody` | `apigee/errors/apigee_organizations_developers_get_monetization_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_list

- **Route**: `GET /v1/organizations/{organizationsId}/developers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_list(organizations_id: str, *, app: str | None = None, count: str | None = None, expand: bool | None = None, ids: str | None = None, include_company: bool | None = None, start_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `app` — query · `count` — query · `expand` — query · `ids` — query · `include_company` — query `includeCompany` · `start_key` — query `startKey`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListOfDevelopersResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListOfDevelopersResponse, ApigeeOrganizationsDevelopersListErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListOfDevelopersResponse` | `apigee/models/google_cloud_apigee_v1_list_of_developers_response.py` |
| `ApigeeOrganizationsDevelopersListErrorBody` | `apigee/errors/apigee_organizations_developers_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_set_developer_status

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_set_developer_status(organizations_id: str, developers_id: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `action` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsDevelopersSetDeveloperStatusErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersSetDeveloperStatusErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersSetDeveloperStatusErrorBody` | `apigee/errors/apigee_organizations_developers_set_developer_status_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_subscriptions_create

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_subscriptions_create(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1DeveloperSubscription | GoogleCloudApigeeV1DeveloperSubscriptionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperSubscription, ApigeeOrganizationsDevelopersSubscriptionsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersSubscriptionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperSubscription` | `apigee/models/google_cloud_apigee_v1_developer_subscription.py` |
| `GoogleCloudApigeeV1DeveloperSubscriptionDict` | `apigee/models/google_cloud_apigee_v1_developer_subscription.py` |
| `ApigeeOrganizationsDevelopersSubscriptionsCreateErrorBody` | `apigee/errors/apigee_organizations_developers_subscriptions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_subscriptions_expire

- **Route**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions/{subscriptionsId}:expire`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_subscriptions_expire(organizations_id: str, developers_id: str, subscriptions_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `subscriptions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `subscriptions_id` — path `subscriptionsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperSubscription, ApigeeOrganizationsDevelopersSubscriptionsExpireErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersSubscriptionsExpireErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperSubscription` | `apigee/models/google_cloud_apigee_v1_developer_subscription.py` |
| `ApigeeOrganizationsDevelopersSubscriptionsExpireErrorBody` | `apigee/errors/apigee_organizations_developers_subscriptions_expire_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_subscriptions_get

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions/{subscriptionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_subscriptions_get(organizations_id: str, developers_id: str, subscriptions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `subscriptions_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `subscriptions_id` — path `subscriptionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperSubscription, ApigeeOrganizationsDevelopersSubscriptionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersSubscriptionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperSubscription` | `apigee/models/google_cloud_apigee_v1_developer_subscription.py` |
| `ApigeeOrganizationsDevelopersSubscriptionsGetErrorBody` | `apigee/errors/apigee_organizations_developers_subscriptions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_subscriptions_list

- **Route**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_subscriptions_list(organizations_id: str, developers_id: str, *, count: int | None = None, start_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `count` — query · `start_key` — query `startKey`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse, ApigeeOrganizationsDevelopersSubscriptionsListErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersSubscriptionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse` | `apigee/models/google_cloud_apigee_v1_list_developer_subscriptions_response.py` |
| `ApigeeOrganizationsDevelopersSubscriptionsListErrorBody` | `apigee/errors/apigee_organizations_developers_subscriptions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_update

- **Route**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_update(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1Developer | GoogleCloudApigeeV1DeveloperDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Developer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Developer, ApigeeOrganizationsDevelopersUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Developer` | `apigee/models/google_cloud_apigee_v1_developer.py` |
| `GoogleCloudApigeeV1DeveloperDict` | `apigee/models/google_cloud_apigee_v1_developer.py` |
| `ApigeeOrganizationsDevelopersUpdateErrorBody` | `apigee/errors/apigee_organizations_developers_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_developers_update_monetization_config

- **Route**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_developers_update_monetization_config(organizations_id: str, developers_id: str, body: GoogleCloudApigeeV1DeveloperMonetizationConfig | GoogleCloudApigeeV1DeveloperMonetizationConfigDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `developers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `developers_id` — path `developersId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DeveloperMonetizationConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeveloperMonetizationConfig, ApigeeOrganizationsDevelopersUpdateMonetizationConfigErrorBody]`
- **Error**: `ApigeeOrganizationsDevelopersUpdateMonetizationConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeveloperMonetizationConfig` | `apigee/models/google_cloud_apigee_v1_developer_monetization_config.py` |
| `GoogleCloudApigeeV1DeveloperMonetizationConfigDict` | `apigee/models/google_cloud_apigee_v1_developer_monetization_config.py` |
| `ApigeeOrganizationsDevelopersUpdateMonetizationConfigErrorBody` | `apigee/errors/apigee_organizations_developers_update_monetization_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_dns_zones_create

- **Route**: `POST /v1/organizations/{organizationsId}/dnsZones`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_dns_zones_create(organizations_id: str, body: GoogleCloudApigeeV1DnsZone | GoogleCloudApigeeV1DnsZoneDict, *, dns_zone_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `dns_zone_id` — query `dnsZoneId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsDnsZonesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsDnsZonesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DnsZone` | `apigee/models/google_cloud_apigee_v1_dns_zone.py` |
| `GoogleCloudApigeeV1DnsZoneDict` | `apigee/models/google_cloud_apigee_v1_dns_zone.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsDnsZonesCreateErrorBody` | `apigee/errors/apigee_organizations_dns_zones_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_dns_zones_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/dnsZones/{dnsZonesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_dns_zones_delete(organizations_id: str, dns_zones_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `dns_zones_id`
- **Params**: `organizations_id` — path `organizationsId` · `dns_zones_id` — path `dnsZonesId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsDnsZonesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsDnsZonesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsDnsZonesDeleteErrorBody` | `apigee/errors/apigee_organizations_dns_zones_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_dns_zones_get

- **Route**: `GET /v1/organizations/{organizationsId}/dnsZones/{dnsZonesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_dns_zones_get(organizations_id: str, dns_zones_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `dns_zones_id`
- **Params**: `organizations_id` — path `organizationsId` · `dns_zones_id` — path `dnsZonesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DnsZone`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DnsZone, ApigeeOrganizationsDnsZonesGetErrorBody]`
- **Error**: `ApigeeOrganizationsDnsZonesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DnsZone` | `apigee/models/google_cloud_apigee_v1_dns_zone.py` |
| `ApigeeOrganizationsDnsZonesGetErrorBody` | `apigee/errors/apigee_organizations_dns_zones_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_dns_zones_list

- **Route**: `GET /v1/organizations/{organizationsId}/dnsZones`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_dns_zones_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDnsZonesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDnsZonesResponse, ApigeeOrganizationsDnsZonesListErrorBody]`
- **Error**: `ApigeeOrganizationsDnsZonesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDnsZonesResponse` | `apigee/models/google_cloud_apigee_v1_list_dns_zones_response.py` |
| `ApigeeOrganizationsDnsZonesListErrorBody` | `apigee/errors/apigee_organizations_dns_zones_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_endpoint_attachments_create

- **Route**: `POST /v1/organizations/{organizationsId}/endpointAttachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_endpoint_attachments_create(organizations_id: str, body: GoogleCloudApigeeV1EndpointAttachment | GoogleCloudApigeeV1EndpointAttachmentDict, *, endpoint_attachment_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `endpoint_attachment_id` — query `endpointAttachmentId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEndpointAttachmentsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEndpointAttachmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EndpointAttachment` | `apigee/models/google_cloud_apigee_v1_endpoint_attachment.py` |
| `GoogleCloudApigeeV1EndpointAttachmentDict` | `apigee/models/google_cloud_apigee_v1_endpoint_attachment.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEndpointAttachmentsCreateErrorBody` | `apigee/errors/apigee_organizations_endpoint_attachments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_endpoint_attachments_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/endpointAttachments/{endpointAttachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_endpoint_attachments_delete(organizations_id: str, endpoint_attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `endpoint_attachments_id`
- **Params**: `organizations_id` — path `organizationsId` · `endpoint_attachments_id` — path `endpointAttachmentsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEndpointAttachmentsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEndpointAttachmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEndpointAttachmentsDeleteErrorBody` | `apigee/errors/apigee_organizations_endpoint_attachments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_endpoint_attachments_get

- **Route**: `GET /v1/organizations/{organizationsId}/endpointAttachments/{endpointAttachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_endpoint_attachments_get(organizations_id: str, endpoint_attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `endpoint_attachments_id`
- **Params**: `organizations_id` — path `organizationsId` · `endpoint_attachments_id` — path `endpointAttachmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1EndpointAttachment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1EndpointAttachment, ApigeeOrganizationsEndpointAttachmentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEndpointAttachmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EndpointAttachment` | `apigee/models/google_cloud_apigee_v1_endpoint_attachment.py` |
| `ApigeeOrganizationsEndpointAttachmentsGetErrorBody` | `apigee/errors/apigee_organizations_endpoint_attachments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_endpoint_attachments_list

- **Route**: `GET /v1/organizations/{organizationsId}/endpointAttachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_endpoint_attachments_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListEndpointAttachmentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListEndpointAttachmentsResponse, ApigeeOrganizationsEndpointAttachmentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEndpointAttachmentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListEndpointAttachmentsResponse` | `apigee/models/google_cloud_apigee_v1_list_endpoint_attachments_response.py` |
| `ApigeeOrganizationsEndpointAttachmentsListErrorBody` | `apigee/errors/apigee_organizations_endpoint_attachments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_attachments_create

- **Route**: `POST /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_attachments_create(organizations_id: str, envgroups_id: str, body: GoogleCloudApigeeV1EnvironmentGroupAttachment | GoogleCloudApigeeV1EnvironmentGroupAttachmentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvgroupsAttachmentsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsAttachmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroupAttachment` | `apigee/models/google_cloud_apigee_v1_environment_group_attachment.py` |
| `GoogleCloudApigeeV1EnvironmentGroupAttachmentDict` | `apigee/models/google_cloud_apigee_v1_environment_group_attachment.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvgroupsAttachmentsCreateErrorBody` | `apigee/errors/apigee_organizations_envgroups_attachments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_attachments_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments/{attachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_attachments_delete(organizations_id: str, envgroups_id: str, attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`, `attachments_id`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId` · `attachments_id` — path `attachmentsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvgroupsAttachmentsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsAttachmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvgroupsAttachmentsDeleteErrorBody` | `apigee/errors/apigee_organizations_envgroups_attachments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_attachments_get

- **Route**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments/{attachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_attachments_get(organizations_id: str, envgroups_id: str, attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`, `attachments_id`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId` · `attachments_id` — path `attachmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1EnvironmentGroupAttachment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1EnvironmentGroupAttachment, ApigeeOrganizationsEnvgroupsAttachmentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsAttachmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroupAttachment` | `apigee/models/google_cloud_apigee_v1_environment_group_attachment.py` |
| `ApigeeOrganizationsEnvgroupsAttachmentsGetErrorBody` | `apigee/errors/apigee_organizations_envgroups_attachments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_attachments_list

- **Route**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_attachments_list(organizations_id: str, envgroups_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse, ApigeeOrganizationsEnvgroupsAttachmentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsAttachmentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse` | `apigee/models/google_cloud_apigee_v1_list_environment_group_attachments_response.py` |
| `ApigeeOrganizationsEnvgroupsAttachmentsListErrorBody` | `apigee/errors/apigee_organizations_envgroups_attachments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_create

- **Route**: `POST /v1/organizations/{organizationsId}/envgroups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_create(organizations_id: str, body: GoogleCloudApigeeV1EnvironmentGroup | GoogleCloudApigeeV1EnvironmentGroupDict, *, name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `name` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvgroupsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroup` | `apigee/models/google_cloud_apigee_v1_environment_group.py` |
| `GoogleCloudApigeeV1EnvironmentGroupDict` | `apigee/models/google_cloud_apigee_v1_environment_group.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvgroupsCreateErrorBody` | `apigee/errors/apigee_organizations_envgroups_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_delete(organizations_id: str, envgroups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvgroupsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvgroupsDeleteErrorBody` | `apigee/errors/apigee_organizations_envgroups_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_get

- **Route**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_get(organizations_id: str, envgroups_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1EnvironmentGroup`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1EnvironmentGroup, ApigeeOrganizationsEnvgroupsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroup` | `apigee/models/google_cloud_apigee_v1_environment_group.py` |
| `ApigeeOrganizationsEnvgroupsGetErrorBody` | `apigee/errors/apigee_organizations_envgroups_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_get_deployed_ingress_config

- **Route**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/deployedIngressConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_get_deployed_ingress_config(organizations_id: str, envgroups_id: str, *, view: ViewOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId` · `view` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1EnvironmentGroupConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1EnvironmentGroupConfig, ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ViewOrStr` | `apigee/models/enums/view.py` |
| `GoogleCloudApigeeV1EnvironmentGroupConfig` | `apigee/models/google_cloud_apigee_v1_environment_group_config.py` |
| `ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigErrorBody` | `apigee/errors/apigee_organizations_envgroups_get_deployed_ingress_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_list

- **Route**: `GET /v1/organizations/{organizationsId}/envgroups`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListEnvironmentGroupsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListEnvironmentGroupsResponse, ApigeeOrganizationsEnvgroupsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentGroupsResponse` | `apigee/models/google_cloud_apigee_v1_list_environment_groups_response.py` |
| `ApigeeOrganizationsEnvgroupsListErrorBody` | `apigee/errors/apigee_organizations_envgroups_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_envgroups_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_envgroups_patch(organizations_id: str, envgroups_id: str, body: GoogleCloudApigeeV1EnvironmentGroup | GoogleCloudApigeeV1EnvironmentGroupDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `envgroups_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `envgroups_id` — path `envgroupsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvgroupsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsEnvgroupsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroup` | `apigee/models/google_cloud_apigee_v1_environment_group.py` |
| `GoogleCloudApigeeV1EnvironmentGroupDict` | `apigee/models/google_cloud_apigee_v1_environment_group.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvgroupsPatchErrorBody` | `apigee/errors/apigee_organizations_envgroups_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_addons_config_set_addon_enablement

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig:setAddonEnablement`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_addons_config_set_addon_enablement(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1SetAddonEnablementRequest | GoogleCloudApigeeV1SetAddonEnablementRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SetAddonEnablementRequest` | `apigee/models/google_cloud_apigee_v1_set_addon_enablement_request.py` |
| `GoogleCloudApigeeV1SetAddonEnablementRequestDict` | `apigee/models/google_cloud_apigee_v1_set_addon_enablement_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementErrorBody` | `apigee/errors/apigee_organizations_environments_addons_config_set_addon_enablement_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_analytics_admin_get_schemav2

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/admin/schemav2`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_analytics_admin_get_schemav2(organizations_id: str, environments_id: str, *, disable_cache: bool | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `disable_cache` — query `disableCache` · `type_` — query `type`
- **Returns (parsed)**: `GoogleCloudApigeeV1Schema`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Schema, ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2ErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2ErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Schema` | `apigee/models/google_cloud_apigee_v1_schema.py` |
| `ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2ErrorBody` | `apigee/errors/apigee_organizations_environments_analytics_admin_get_schemav2_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_analytics_exports_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_analytics_exports_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1ExportRequest | GoogleCloudApigeeV1ExportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Export`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Export, ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ExportRequest` | `apigee/models/google_cloud_apigee_v1_export_request.py` |
| `GoogleCloudApigeeV1ExportRequestDict` | `apigee/models/google_cloud_apigee_v1_export_request.py` |
| `GoogleCloudApigeeV1Export` | `apigee/models/google_cloud_apigee_v1_export.py` |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_analytics_exports_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_analytics_exports_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports/{exportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_analytics_exports_get(organizations_id: str, environments_id: str, exports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `exports_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `exports_id` — path `exportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Export`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Export, ApigeeOrganizationsEnvironmentsAnalyticsExportsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsAnalyticsExportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Export` | `apigee/models/google_cloud_apigee_v1_export.py` |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsGetErrorBody` | `apigee/errors/apigee_organizations_environments_analytics_exports_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_analytics_exports_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_analytics_exports_list(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListExportsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListExportsResponse, ApigeeOrganizationsEnvironmentsAnalyticsExportsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsAnalyticsExportsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListExportsResponse` | `apigee/models/google_cloud_apigee_v1_list_exports_response.py` |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsListErrorBody` | `apigee/errors/apigee_organizations_environments_analytics_exports_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_deployments_list(organizations_id: str, environments_id: str, apis_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsEnvironmentsApisDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsEnvironmentsApisDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_environments_apis_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_debugsessions_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_debugsessions_create(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, body: GoogleCloudApigeeV1DebugSession | GoogleCloudApigeeV1DebugSessionDict, *, timeout: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `timeout` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DebugSession`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DebugSession, ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DebugSession` | `apigee/models/google_cloud_apigee_v1_debug_session.py` |
| `GoogleCloudApigeeV1DebugSessionDict` | `apigee/models/google_cloud_apigee_v1_debug_session.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_debugsessions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_debugsessions_data_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}/data/{dataId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_debugsessions_data_get(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, debugsessions_id: str, data_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`, `debugsessions_id`, `data_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `debugsessions_id` — path `debugsessionsId` · `data_id` — path `dataId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DebugSessionTransaction`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DebugSessionTransaction, ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DebugSessionTransaction` | `apigee/models/google_cloud_apigee_v1_debug_session_transaction.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_debugsessions_data_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_debugsessions_delete_data

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}/data`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_debugsessions_delete_data(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, debugsessions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`, `debugsessions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `debugsessions_id` — path `debugsessionsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_debugsessions_delete_data_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_debugsessions_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_debugsessions_get(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, debugsessions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`, `debugsessions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `debugsessions_id` — path `debugsessionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DebugSession`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DebugSession, ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DebugSession` | `apigee/models/google_cloud_apigee_v1_debug_session.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_debugsessions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_debugsessions_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_debugsessions_list(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDebugSessionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDebugSessionsResponse, ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDebugSessionsResponse` | `apigee/models/google_cloud_apigee_v1_list_debug_sessions_response.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_debugsessions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_deploy

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_deploy(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, *, override: bool | None = None, sequenced_rollout: bool | None = None, service_account: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `override` — query · `sequenced_rollout` — query `sequencedRollout` · `service_account` — query `serviceAccount`
- **Returns (parsed)**: `GoogleCloudApigeeV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Deployment, ApigeeOrganizationsEnvironmentsApisRevisionsDeployErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDeployErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Deployment` | `apigee/models/google_cloud_apigee_v1_deployment.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeployErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_deploy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_deployments_generate_deploy_change_report

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments:generateDeployChangeReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_deployments_generate_deploy_change_report(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, *, override: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `override` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1DeploymentChangeReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeploymentChangeReport, ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeploymentChangeReport` | `apigee/models/google_cloud_apigee_v1_deployment_change_report.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_deployments_generate_deploy_change_report_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_deployments_generate_undeploy_change_report

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments:generateUndeployChangeReport`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_deployments_generate_undeploy_change_report(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeploymentChangeReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeploymentChangeReport, ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeploymentChangeReport` | `apigee/models/google_cloud_apigee_v1_deployment_change_report.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_deployments_generate_undeploy_change_report_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_get_deployments

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_get_deployments(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Deployment, ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Deployment` | `apigee/models/google_cloud_apigee_v1_deployment.py` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_get_deployments_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_apis_revisions_undeploy

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_apis_revisions_undeploy(organizations_id: str, environments_id: str, apis_id: str, revisions_id: str, *, sequenced_rollout: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `apis_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `apis_id` — path `apisId` · `revisions_id` — path `revisionsId` · `sequenced_rollout` — query `sequencedRollout`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsApisRevisionsUndeployErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsApisRevisionsUndeployErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsUndeployErrorBody` | `apigee/errors/apigee_organizations_environments_apis_revisions_undeploy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1ArchiveDeployment | GoogleCloudApigeeV1ArchiveDeploymentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ArchiveDeployment` | `apigee/models/google_cloud_apigee_v1_archive_deployment.py` |
| `GoogleCloudApigeeV1ArchiveDeploymentDict` | `apigee/models/google_cloud_apigee_v1_archive_deployment.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_delete(organizations_id: str, environments_id: str, archive_deployments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `archive_deployments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `archive_deployments_id` — path `archiveDeploymentsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_generate_download_url

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}:generateDownloadUrl`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_generate_download_url(organizations_id: str, environments_id: str, archive_deployments_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `archive_deployments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `archive_deployments_id` — path `archiveDeploymentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1GenerateDownloadUrlResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1GenerateDownloadUrlResponse, ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1GenerateDownloadUrlResponse` | `apigee/models/google_cloud_apigee_v1_generate_download_url_response.py` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_generate_download_url_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_generate_upload_url

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments:generateUploadUrl`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_generate_upload_url(organizations_id: str, environments_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1GenerateUploadUrlResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1GenerateUploadUrlResponse, ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1GenerateUploadUrlResponse` | `apigee/models/google_cloud_apigee_v1_generate_upload_url_response.py` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_generate_upload_url_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_get(organizations_id: str, environments_id: str, archive_deployments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `archive_deployments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `archive_deployments_id` — path `archiveDeploymentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ArchiveDeployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ArchiveDeployment, ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ArchiveDeployment` | `apigee/models/google_cloud_apigee_v1_archive_deployment.py` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_list(organizations_id: str, environments_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListArchiveDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListArchiveDeploymentsResponse, ApigeeOrganizationsEnvironmentsArchiveDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListArchiveDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_archive_deployments_response.py` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_archive_deployments_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_archive_deployments_patch(organizations_id: str, environments_id: str, archive_deployments_id: str, body: GoogleCloudApigeeV1ArchiveDeployment | GoogleCloudApigeeV1ArchiveDeploymentDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `archive_deployments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `archive_deployments_id` — path `archiveDeploymentsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ArchiveDeployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ArchiveDeployment, ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ArchiveDeployment` | `apigee/models/google_cloud_apigee_v1_archive_deployment.py` |
| `GoogleCloudApigeeV1ArchiveDeploymentDict` | `apigee/models/google_cloud_apigee_v1_archive_deployment.py` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchErrorBody` | `apigee/errors/apigee_organizations_environments_archive_deployments_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_caches_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/caches/{cachesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_caches_delete(organizations_id: str, environments_id: str, caches_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `caches_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `caches_id` — path `cachesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsCachesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsCachesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsCachesDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_caches_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_create(organizations_id: str, body: GoogleCloudApigeeV1Environment | GoogleCloudApigeeV1EnvironmentDict, *, name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `name` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvironmentsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Environment` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `GoogleCloudApigeeV1EnvironmentDict` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvironmentsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_delete(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvironmentsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvironmentsDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_deployments_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_deployments_get(organizations_id: str, environments_id: str, deployments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `deployments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `deployments_id` — path `deploymentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Deployment, ApigeeOrganizationsEnvironmentsDeploymentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsDeploymentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Deployment` | `apigee/models/google_cloud_apigee_v1_deployment.py` |
| `ApigeeOrganizationsEnvironmentsDeploymentsGetErrorBody` | `apigee/errors/apigee_organizations_environments_deployments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_deployments_get_iam_policy

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_deployments_get_iam_policy(organizations_id: str, environments_id: str, deployments_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `deployments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `deployments_id` — path `deploymentsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `GoogleIamV1Policy`
- **Returns (raw)**: `ApiResult[GoogleIamV1Policy, ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1Policy` | `apigee/models/google_iam_v1_policy.py` |
| `ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyErrorBody` | `apigee/errors/apigee_organizations_environments_deployments_get_iam_policy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_deployments_list(organizations_id: str, environments_id: str, *, shared_flows: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `shared_flows` — query `sharedFlows`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsEnvironmentsDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsEnvironmentsDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_environments_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_deployments_set_iam_policy

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_deployments_set_iam_policy(organizations_id: str, environments_id: str, deployments_id: str, body: GoogleIamV1SetIamPolicyRequest | GoogleIamV1SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `deployments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `deployments_id` — path `deploymentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleIamV1Policy`
- **Returns (raw)**: `ApiResult[GoogleIamV1Policy, ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1SetIamPolicyRequest` | `apigee/models/google_iam_v1_set_iam_policy_request.py` |
| `GoogleIamV1SetIamPolicyRequestDict` | `apigee/models/google_iam_v1_set_iam_policy_request.py` |
| `GoogleIamV1Policy` | `apigee/models/google_iam_v1_policy.py` |
| `ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyErrorBody` | `apigee/errors/apigee_organizations_environments_deployments_set_iam_policy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_deployments_test_iam_permissions

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_deployments_test_iam_permissions(organizations_id: str, environments_id: str, deployments_id: str, body: GoogleIamV1TestIamPermissionsRequest | GoogleIamV1TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `deployments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `deployments_id` — path `deploymentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleIamV1TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[GoogleIamV1TestIamPermissionsResponse, ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1TestIamPermissionsRequest` | `apigee/models/google_iam_v1_test_iam_permissions_request.py` |
| `GoogleIamV1TestIamPermissionsRequestDict` | `apigee/models/google_iam_v1_test_iam_permissions_request.py` |
| `GoogleIamV1TestIamPermissionsResponse` | `apigee/models/google_iam_v1_test_iam_permissions_response.py` |
| `ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsErrorBody` | `apigee/errors/apigee_organizations_environments_deployments_test_iam_permissions_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_flowhooks_attach_shared_flow_to_flow_hook

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_flowhooks_attach_shared_flow_to_flow_hook(organizations_id: str, environments_id: str, flowhooks_id: str, body: GoogleCloudApigeeV1FlowHook | GoogleCloudApigeeV1FlowHookDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `flowhooks_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `flowhooks_id` — path `flowhooksId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1FlowHook`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1FlowHook, ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1FlowHook` | `apigee/models/google_cloud_apigee_v1_flow_hook.py` |
| `GoogleCloudApigeeV1FlowHookDict` | `apigee/models/google_cloud_apigee_v1_flow_hook.py` |
| `ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookErrorBody` | `apigee/errors/apigee_organizations_environments_flowhooks_attach_shared_flow_to_flow_hook_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_flowhooks_detach_shared_flow_from_flow_hook

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_flowhooks_detach_shared_flow_from_flow_hook(organizations_id: str, environments_id: str, flowhooks_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `flowhooks_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `flowhooks_id` — path `flowhooksId`
- **Returns (parsed)**: `GoogleCloudApigeeV1FlowHook`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1FlowHook, ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1FlowHook` | `apigee/models/google_cloud_apigee_v1_flow_hook.py` |
| `ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookErrorBody` | `apigee/errors/apigee_organizations_environments_flowhooks_detach_shared_flow_from_flow_hook_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_flowhooks_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_flowhooks_get(organizations_id: str, environments_id: str, flowhooks_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `flowhooks_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `flowhooks_id` — path `flowhooksId`
- **Returns (parsed)**: `GoogleCloudApigeeV1FlowHook`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1FlowHook, ApigeeOrganizationsEnvironmentsFlowhooksGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsFlowhooksGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1FlowHook` | `apigee/models/google_cloud_apigee_v1_flow_hook.py` |
| `ApigeeOrganizationsEnvironmentsFlowhooksGetErrorBody` | `apigee/errors/apigee_organizations_environments_flowhooks_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Environment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Environment, ApigeeOrganizationsEnvironmentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Environment` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `ApigeeOrganizationsEnvironmentsGetErrorBody` | `apigee/errors/apigee_organizations_environments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_addons_config

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_addons_config(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AddonsConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AddonsConfig, ApigeeOrganizationsEnvironmentsGetAddonsConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetAddonsConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AddonsConfig` | `apigee/models/google_cloud_apigee_v1_addons_config.py` |
| `ApigeeOrganizationsEnvironmentsGetAddonsConfigErrorBody` | `apigee/errors/apigee_organizations_environments_get_addons_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_api_security_runtime_config

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apiSecurityRuntimeConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_api_security_runtime_config(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiSecurityRuntimeConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiSecurityRuntimeConfig, ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiSecurityRuntimeConfig` | `apigee/models/google_cloud_apigee_v1_api_security_runtime_config.py` |
| `ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigErrorBody` | `apigee/errors/apigee_organizations_environments_get_api_security_runtime_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_debugmask

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_debugmask(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DebugMask`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DebugMask, ApigeeOrganizationsEnvironmentsGetDebugmaskErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetDebugmaskErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DebugMask` | `apigee/models/google_cloud_apigee_v1_debug_mask.py` |
| `ApigeeOrganizationsEnvironmentsGetDebugmaskErrorBody` | `apigee/errors/apigee_organizations_environments_get_debugmask_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_deployed_config

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployedConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_deployed_config(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1EnvironmentConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1EnvironmentConfig, ApigeeOrganizationsEnvironmentsGetDeployedConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetDeployedConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1EnvironmentConfig` | `apigee/models/google_cloud_apigee_v1_environment_config.py` |
| `ApigeeOrganizationsEnvironmentsGetDeployedConfigErrorBody` | `apigee/errors/apigee_organizations_environments_get_deployed_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_iam_policy

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_iam_policy(organizations_id: str, environments_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `GoogleIamV1Policy`
- **Returns (raw)**: `ApiResult[GoogleIamV1Policy, ApigeeOrganizationsEnvironmentsGetIamPolicyErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1Policy` | `apigee/models/google_iam_v1_policy.py` |
| `ApigeeOrganizationsEnvironmentsGetIamPolicyErrorBody` | `apigee/errors/apigee_organizations_environments_get_iam_policy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_security_actions_config

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActionsConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_security_actions_config(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityActionsConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityActionsConfig, ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityActionsConfig` | `apigee/models/google_cloud_apigee_v1_security_actions_config.py` |
| `ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigErrorBody` | `apigee/errors/apigee_organizations_environments_get_security_actions_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_get_trace_config

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_get_trace_config(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1TraceConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TraceConfig, ApigeeOrganizationsEnvironmentsGetTraceConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsGetTraceConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TraceConfig` | `apigee/models/google_cloud_apigee_v1_trace_config.py` |
| `ApigeeOrganizationsEnvironmentsGetTraceConfigErrorBody` | `apigee/errors/apigee_organizations_environments_get_trace_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_aliases_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_aliases_create(organizations_id: str, environments_id: str, keystores_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, password: str | None = None, alias: str | None = None, format_: str | None = None, ignore_expiry_validation: bool | None = None, ignore_newline_validation: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId` · `password` — query `_password` · `alias` — query · `format_` — query `format` · `ignore_expiry_validation` — query `ignoreExpiryValidation` · `ignore_newline_validation` — query `ignoreNewlineValidation` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Alias`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Alias, ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1Alias` | `apigee/models/google_cloud_apigee_v1_alias.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_aliases_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_aliases_csr

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/csr`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_aliases_csr(organizations_id: str, environments_id: str, keystores_id: str, aliases_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`, `aliases_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId` · `aliases_id` — path `aliasesId`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_aliases_csr_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_aliases_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_aliases_delete(organizations_id: str, environments_id: str, keystores_id: str, aliases_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`, `aliases_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId` · `aliases_id` — path `aliasesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Alias`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Alias, ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Alias` | `apigee/models/google_cloud_apigee_v1_alias.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_aliases_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_aliases_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_aliases_get(organizations_id: str, environments_id: str, keystores_id: str, aliases_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`, `aliases_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId` · `aliases_id` — path `aliasesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Alias`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Alias, ApigeeOrganizationsEnvironmentsKeystoresAliasesGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Alias` | `apigee/models/google_cloud_apigee_v1_alias.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_aliases_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_aliases_get_certificate

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/certificate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_aliases_get_certificate(organizations_id: str, environments_id: str, keystores_id: str, aliases_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`, `aliases_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId` · `aliases_id` — path `aliasesId`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_aliases_get_certificate_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_aliases_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_aliases_update(organizations_id: str, environments_id: str, keystores_id: str, aliases_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, ignore_expiry_validation: bool | None = None, ignore_newline_validation: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`, `aliases_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId` · `aliases_id` — path `aliasesId` · `ignore_expiry_validation` — query `ignoreExpiryValidation` · `ignore_newline_validation` — query `ignoreNewlineValidation` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Alias`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Alias, ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1Alias` | `apigee/models/google_cloud_apigee_v1_alias.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_aliases_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Keystore | GoogleCloudApigeeV1KeystoreDict, *, name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `name` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Keystore`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Keystore, ApigeeOrganizationsEnvironmentsKeystoresCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Keystore` | `apigee/models/google_cloud_apigee_v1_keystore.py` |
| `GoogleCloudApigeeV1KeystoreDict` | `apigee/models/google_cloud_apigee_v1_keystore.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresCreateErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_delete(organizations_id: str, environments_id: str, keystores_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Keystore`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Keystore, ApigeeOrganizationsEnvironmentsKeystoresDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Keystore` | `apigee/models/google_cloud_apigee_v1_keystore.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keystores_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keystores_get(organizations_id: str, environments_id: str, keystores_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keystores_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keystores_id` — path `keystoresId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Keystore`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Keystore, ApigeeOrganizationsEnvironmentsKeystoresGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeystoresGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Keystore` | `apigee/models/google_cloud_apigee_v1_keystore.py` |
| `ApigeeOrganizationsEnvironmentsKeystoresGetErrorBody` | `apigee/errors/apigee_organizations_environments_keystores_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1KeyValueMap | GoogleCloudApigeeV1KeyValueMapDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `GoogleCloudApigeeV1KeyValueMapDict` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_delete(organizations_id: str, environments_id: str, keyvaluemaps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_entries_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_entries_create(organizations_id: str, environments_id: str, keyvaluemaps_id: str, body: GoogleCloudApigeeV1KeyValueEntry | GoogleCloudApigeeV1KeyValueEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `GoogleCloudApigeeV1KeyValueEntryDict` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_entries_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_entries_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_entries_delete(organizations_id: str, environments_id: str, keyvaluemaps_id: str, entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`, `entries_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_entries_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_entries_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_entries_get(organizations_id: str, environments_id: str, keyvaluemaps_id: str, entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`, `entries_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_entries_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_entries_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_entries_list(organizations_id: str, environments_id: str, keyvaluemaps_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListKeyValueEntriesResponse, ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `apigee/models/google_cloud_apigee_v1_list_key_value_entries_response.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_entries_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_entries_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_entries_update(organizations_id: str, environments_id: str, keyvaluemaps_id: str, entries_id: str, body: GoogleCloudApigeeV1KeyValueEntry | GoogleCloudApigeeV1KeyValueEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`, `entries_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `GoogleCloudApigeeV1KeyValueEntryDict` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_entries_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_get(organizations_id: str, environments_id: str, keyvaluemaps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsEnvironmentsKeyvaluemapsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsGetErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_keyvaluemaps_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_keyvaluemaps_update(organizations_id: str, environments_id: str, keyvaluemaps_id: str, body: GoogleCloudApigeeV1KeyValueMap | GoogleCloudApigeeV1KeyValueMapDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `keyvaluemaps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `GoogleCloudApigeeV1KeyValueMapDict` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_keyvaluemaps_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_modify_environment

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_modify_environment(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Environment | GoogleCloudApigeeV1EnvironmentDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsEnvironmentsModifyEnvironmentErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsModifyEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Environment` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `GoogleCloudApigeeV1EnvironmentDict` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsEnvironmentsModifyEnvironmentErrorBody` | `apigee/errors/apigee_organizations_environments_modify_environment_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_optimized_stats_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/optimizedStats/{optimizedStatsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_optimized_stats_get(organizations_id: str, environments_id: str, optimized_stats_id: str, *, accuracy: str | None = None, agg_table: str | None = None, filter_: str | None = None, limit: str | None = None, offset: str | None = None, realtime: bool | None = None, select: str | None = None, sonar: bool | None = None, sort: str | None = None, sortby: str | None = None, time_range: str | None = None, time_unit: str | None = None, topk: str | None = None, ts_ascending: bool | None = None, tzo: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `optimized_stats_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `optimized_stats_id` — path `optimizedStatsId` · `accuracy` — query · `agg_table` — query `aggTable` · `filter_` — query `filter` · `limit` — query · `offset` — query · `realtime` — query · `select` — query · `sonar` — query · `sort` — query · `sortby` — query · `time_range` — query `timeRange` · `time_unit` — query `timeUnit` · `topk` — query · `ts_ascending` — query `tsAscending` · `tzo` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1OptimizedStats`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1OptimizedStats, ApigeeOrganizationsEnvironmentsOptimizedStatsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsOptimizedStatsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1OptimizedStats` | `apigee/models/google_cloud_apigee_v1_optimized_stats.py` |
| `ApigeeOrganizationsEnvironmentsOptimizedStatsGetErrorBody` | `apigee/errors/apigee_organizations_environments_optimized_stats_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_queries_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/queries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_queries_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Query | GoogleCloudApigeeV1QueryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AsyncQuery`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AsyncQuery, ApigeeOrganizationsEnvironmentsQueriesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsQueriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Query` | `apigee/models/google_cloud_apigee_v1_query.py` |
| `GoogleCloudApigeeV1QueryDict` | `apigee/models/google_cloud_apigee_v1_query.py` |
| `GoogleCloudApigeeV1AsyncQuery` | `apigee/models/google_cloud_apigee_v1_async_query.py` |
| `ApigeeOrganizationsEnvironmentsQueriesCreateErrorBody` | `apigee/errors/apigee_organizations_environments_queries_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_queries_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_queries_get(organizations_id: str, environments_id: str, queries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `queries_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `queries_id` — path `queriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AsyncQuery`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AsyncQuery, ApigeeOrganizationsEnvironmentsQueriesGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsQueriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AsyncQuery` | `apigee/models/google_cloud_apigee_v1_async_query.py` |
| `ApigeeOrganizationsEnvironmentsQueriesGetErrorBody` | `apigee/errors/apigee_organizations_environments_queries_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_queries_get_result

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}/result`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_queries_get_result(organizations_id: str, environments_id: str, queries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `queries_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `queries_id` — path `queriesId`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsEnvironmentsQueriesGetResultErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsQueriesGetResultErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsEnvironmentsQueriesGetResultErrorBody` | `apigee/errors/apigee_organizations_environments_queries_get_result_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_queries_get_resulturl

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}/resulturl`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_queries_get_resulturl(organizations_id: str, environments_id: str, queries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `queries_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `queries_id` — path `queriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse, ApigeeOrganizationsEnvironmentsQueriesGetResulturlErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsQueriesGetResulturlErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse` | `apigee/models/google_cloud_apigee_v1_get_async_query_result_url_response.py` |
| `ApigeeOrganizationsEnvironmentsQueriesGetResulturlErrorBody` | `apigee/errors/apigee_organizations_environments_queries_get_resulturl_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_queries_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_queries_list(organizations_id: str, environments_id: str, *, dataset: str | None = None, from_: str | None = None, incl_queries_without_report: str | None = None, status: str | None = None, submitted_by: str | None = None, to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `dataset` — query · `from_` — query `from` · `incl_queries_without_report` — query `inclQueriesWithoutReport` · `status` — query · `submitted_by` — query `submittedBy` · `to` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListAsyncQueriesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListAsyncQueriesResponse, ApigeeOrganizationsEnvironmentsQueriesListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsQueriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListAsyncQueriesResponse` | `apigee/models/google_cloud_apigee_v1_list_async_queries_response.py` |
| `ApigeeOrganizationsEnvironmentsQueriesListErrorBody` | `apigee/errors/apigee_organizations_environments_queries_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_references_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/references`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_references_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Reference | GoogleCloudApigeeV1ReferenceDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Reference`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Reference, ApigeeOrganizationsEnvironmentsReferencesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsReferencesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Reference` | `apigee/models/google_cloud_apigee_v1_reference.py` |
| `GoogleCloudApigeeV1ReferenceDict` | `apigee/models/google_cloud_apigee_v1_reference.py` |
| `ApigeeOrganizationsEnvironmentsReferencesCreateErrorBody` | `apigee/errors/apigee_organizations_environments_references_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_references_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_references_delete(organizations_id: str, environments_id: str, references_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `references_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `references_id` — path `referencesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Reference`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Reference, ApigeeOrganizationsEnvironmentsReferencesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsReferencesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Reference` | `apigee/models/google_cloud_apigee_v1_reference.py` |
| `ApigeeOrganizationsEnvironmentsReferencesDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_references_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_references_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_references_get(organizations_id: str, environments_id: str, references_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `references_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `references_id` — path `referencesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Reference`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Reference, ApigeeOrganizationsEnvironmentsReferencesGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsReferencesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Reference` | `apigee/models/google_cloud_apigee_v1_reference.py` |
| `ApigeeOrganizationsEnvironmentsReferencesGetErrorBody` | `apigee/errors/apigee_organizations_environments_references_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_references_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_references_update(organizations_id: str, environments_id: str, references_id: str, body: GoogleCloudApigeeV1Reference | GoogleCloudApigeeV1ReferenceDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `references_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `references_id` — path `referencesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Reference`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Reference, ApigeeOrganizationsEnvironmentsReferencesUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsReferencesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Reference` | `apigee/models/google_cloud_apigee_v1_reference.py` |
| `GoogleCloudApigeeV1ReferenceDict` | `apigee/models/google_cloud_apigee_v1_reference.py` |
| `ApigeeOrganizationsEnvironmentsReferencesUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_references_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_resourcefiles_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_resourcefiles_create(organizations_id: str, environments_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, name: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `name` — query · `type_` — query `type` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ResourceFile`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ResourceFile, ApigeeOrganizationsEnvironmentsResourcefilesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsResourcefilesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1ResourceFile` | `apigee/models/google_cloud_apigee_v1_resource_file.py` |
| `ApigeeOrganizationsEnvironmentsResourcefilesCreateErrorBody` | `apigee/errors/apigee_organizations_environments_resourcefiles_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_resourcefiles_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_resourcefiles_delete(organizations_id: str, environments_id: str, type_: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `type_`, `name`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `type_` — path `type` · `name` — path
- **Returns (parsed)**: `GoogleCloudApigeeV1ResourceFile`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ResourceFile, ApigeeOrganizationsEnvironmentsResourcefilesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsResourcefilesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ResourceFile` | `apigee/models/google_cloud_apigee_v1_resource_file.py` |
| `ApigeeOrganizationsEnvironmentsResourcefilesDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_resourcefiles_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_resourcefiles_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_resourcefiles_get(organizations_id: str, environments_id: str, type_: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `type_`, `name`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `type_` — path `type` · `name` — path
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsEnvironmentsResourcefilesGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsResourcefilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsEnvironmentsResourcefilesGetErrorBody` | `apigee/errors/apigee_organizations_environments_resourcefiles_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_resourcefiles_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_resourcefiles_list(organizations_id: str, environments_id: str, *, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `type_` — query `type`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListEnvironmentResourcesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListEnvironmentResourcesResponse, ApigeeOrganizationsEnvironmentsResourcefilesListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsResourcefilesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentResourcesResponse` | `apigee/models/google_cloud_apigee_v1_list_environment_resources_response.py` |
| `ApigeeOrganizationsEnvironmentsResourcefilesListErrorBody` | `apigee/errors/apigee_organizations_environments_resourcefiles_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_resourcefiles_list_environment_resources

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_resourcefiles_list_environment_resources(organizations_id: str, environments_id: str, type_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `type_`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `type_` — path `type`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListEnvironmentResourcesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListEnvironmentResourcesResponse, ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentResourcesResponse` | `apigee/models/google_cloud_apigee_v1_list_environment_resources_response.py` |
| `ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesErrorBody` | `apigee/errors/apigee_organizations_environments_resourcefiles_list_environment_resources_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_resourcefiles_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_resourcefiles_update(organizations_id: str, environments_id: str, type_: str, name: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `type_`, `name`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `type_` — path `type` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ResourceFile`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ResourceFile, ApigeeOrganizationsEnvironmentsResourcefilesUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsResourcefilesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1ResourceFile` | `apigee/models/google_cloud_apigee_v1_resource_file.py` |
| `ApigeeOrganizationsEnvironmentsResourcefilesUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_resourcefiles_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1SecurityAction | GoogleCloudApigeeV1SecurityActionDict, *, security_action_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_action_id` — query `securityActionId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityAction`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityAction, ApigeeOrganizationsEnvironmentsSecurityActionsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `GoogleCloudApigeeV1SecurityActionDict` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_delete(organizations_id: str, environments_id: str, security_actions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_actions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_actions_id` — path `securityActionsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsSecurityActionsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_disable

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}:disable`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_disable(organizations_id: str, environments_id: str, security_actions_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_actions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_actions_id` — path `securityActionsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityAction`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityAction, ApigeeOrganizationsEnvironmentsSecurityActionsDisableErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsDisableErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsDisableErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_disable_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_enable

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}:enable`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_enable(organizations_id: str, environments_id: str, security_actions_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_actions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_actions_id` — path `securityActionsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityAction`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityAction, ApigeeOrganizationsEnvironmentsSecurityActionsEnableErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsEnableErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsEnableErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_enable_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_get(organizations_id: str, environments_id: str, security_actions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_actions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_actions_id` — path `securityActionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityAction`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityAction, ApigeeOrganizationsEnvironmentsSecurityActionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsGetErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_list(organizations_id: str, environments_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityActionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityActionsResponse, ApigeeOrganizationsEnvironmentsSecurityActionsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityActionsResponse` | `apigee/models/google_cloud_apigee_v1_list_security_actions_response.py` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsListErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_actions_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_actions_patch(organizations_id: str, environments_id: str, security_actions_id: str, body: GoogleCloudApigeeV1SecurityAction | GoogleCloudApigeeV1SecurityActionDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_actions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_actions_id` — path `securityActionsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityAction`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityAction, ApigeeOrganizationsEnvironmentsSecurityActionsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityActionsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `GoogleCloudApigeeV1SecurityActionDict` | `apigee/models/google_cloud_apigee_v1_security_action.py` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsPatchErrorBody` | `apigee/errors/apigee_organizations_environments_security_actions_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_incidents_batch_update

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents:batchUpdate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_incidents_batch_update(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest | GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse, ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest` | `apigee/models/google_cloud_apigee_v1_batch_update_security_incidents_request.py` |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequestDict` | `apigee/models/google_cloud_apigee_v1_batch_update_security_incidents_request.py` |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse` | `apigee/models/google_cloud_apigee_v1_batch_update_security_incidents_response.py` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_security_incidents_batch_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_incidents_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_incidents_get(organizations_id: str, environments_id: str, security_incidents_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_incidents_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_incidents_id` — path `securityIncidentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityIncident`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityIncident, ApigeeOrganizationsEnvironmentsSecurityIncidentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityIncident` | `apigee/models/google_cloud_apigee_v1_security_incident.py` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsGetErrorBody` | `apigee/errors/apigee_organizations_environments_security_incidents_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_incidents_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_incidents_list(organizations_id: str, environments_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityIncidentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityIncidentsResponse, ApigeeOrganizationsEnvironmentsSecurityIncidentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityIncidentsResponse` | `apigee/models/google_cloud_apigee_v1_list_security_incidents_response.py` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsListErrorBody` | `apigee/errors/apigee_organizations_environments_security_incidents_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_incidents_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_incidents_patch(organizations_id: str, environments_id: str, security_incidents_id: str, body: GoogleCloudApigeeV1SecurityIncident | GoogleCloudApigeeV1SecurityIncidentDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_incidents_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_incidents_id` — path `securityIncidentsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityIncident`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityIncident, ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityIncident` | `apigee/models/google_cloud_apigee_v1_security_incident.py` |
| `GoogleCloudApigeeV1SecurityIncidentDict` | `apigee/models/google_cloud_apigee_v1_security_incident.py` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchErrorBody` | `apigee/errors/apigee_organizations_environments_security_incidents_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_reports_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_reports_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1SecurityReportQuery | GoogleCloudApigeeV1SecurityReportQueryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityReport, ApigeeOrganizationsEnvironmentsSecurityReportsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityReportsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityReportQuery` | `apigee/models/google_cloud_apigee_v1_security_report_query.py` |
| `GoogleCloudApigeeV1SecurityReportQueryDict` | `apigee/models/google_cloud_apigee_v1_security_report_query.py` |
| `GoogleCloudApigeeV1SecurityReport` | `apigee/models/google_cloud_apigee_v1_security_report.py` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsCreateErrorBody` | `apigee/errors/apigee_organizations_environments_security_reports_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_reports_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_reports_get(organizations_id: str, environments_id: str, security_reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_reports_id` — path `securityReportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityReport, ApigeeOrganizationsEnvironmentsSecurityReportsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityReportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityReport` | `apigee/models/google_cloud_apigee_v1_security_report.py` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetErrorBody` | `apigee/errors/apigee_organizations_environments_security_reports_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_reports_get_result

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}/result`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_reports_get_result(organizations_id: str, environments_id: str, security_reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_reports_id` — path `securityReportsId`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsEnvironmentsSecurityReportsGetResultErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultErrorBody` | `apigee/errors/apigee_organizations_environments_security_reports_get_result_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_reports_get_result_view

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}/resultView`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_reports_get_result_view(organizations_id: str, environments_id: str, security_reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `security_reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `security_reports_id` — path `securityReportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityReportResultView`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityReportResultView, ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityReportResultView` | `apigee/models/google_cloud_apigee_v1_security_report_result_view.py` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewErrorBody` | `apigee/errors/apigee_organizations_environments_security_reports_get_result_view_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_reports_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_reports_list(organizations_id: str, environments_id: str, *, dataset: str | None = None, from_: str | None = None, page_size: int | None = None, page_token: str | None = None, status: str | None = None, submitted_by: str | None = None, to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `dataset` — query · `from_` — query `from` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `status` — query · `submitted_by` — query `submittedBy` · `to` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityReportsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityReportsResponse, ApigeeOrganizationsEnvironmentsSecurityReportsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityReportsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityReportsResponse` | `apigee/models/google_cloud_apigee_v1_list_security_reports_response.py` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsListErrorBody` | `apigee/errors/apigee_organizations_environments_security_reports_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_stats_query_tabular_stats

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTabularStats`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_stats_query_tabular_stats(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1QueryTabularStatsRequest | GoogleCloudApigeeV1QueryTabularStatsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1QueryTabularStatsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1QueryTabularStatsResponse, ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1QueryTabularStatsRequest` | `apigee/models/google_cloud_apigee_v1_query_tabular_stats_request.py` |
| `GoogleCloudApigeeV1QueryTabularStatsRequestDict` | `apigee/models/google_cloud_apigee_v1_query_tabular_stats_request.py` |
| `GoogleCloudApigeeV1QueryTabularStatsResponse` | `apigee/models/google_cloud_apigee_v1_query_tabular_stats_response.py` |
| `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsErrorBody` | `apigee/errors/apigee_organizations_environments_security_stats_query_tabular_stats_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_security_stats_query_time_series_stats

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTimeSeriesStats`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_security_stats_query_time_series_stats(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1QueryTimeSeriesStatsRequest | GoogleCloudApigeeV1QueryTimeSeriesStatsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1QueryTimeSeriesStatsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1QueryTimeSeriesStatsResponse, ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsRequest` | `apigee/models/google_cloud_apigee_v1_query_time_series_stats_request.py` |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsRequestDict` | `apigee/models/google_cloud_apigee_v1_query_time_series_stats_request.py` |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsResponse` | `apigee/models/google_cloud_apigee_v1_query_time_series_stats_response.py` |
| `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsErrorBody` | `apigee/errors/apigee_organizations_environments_security_stats_query_time_series_stats_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_set_iam_policy

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_set_iam_policy(organizations_id: str, environments_id: str, body: GoogleIamV1SetIamPolicyRequest | GoogleIamV1SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleIamV1Policy`
- **Returns (raw)**: `ApiResult[GoogleIamV1Policy, ApigeeOrganizationsEnvironmentsSetIamPolicyErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1SetIamPolicyRequest` | `apigee/models/google_iam_v1_set_iam_policy_request.py` |
| `GoogleIamV1SetIamPolicyRequestDict` | `apigee/models/google_iam_v1_set_iam_policy_request.py` |
| `GoogleIamV1Policy` | `apigee/models/google_iam_v1_policy.py` |
| `ApigeeOrganizationsEnvironmentsSetIamPolicyErrorBody` | `apigee/errors/apigee_organizations_environments_set_iam_policy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_sharedflows_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_sharedflows_deployments_list(organizations_id: str, environments_id: str, sharedflows_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `sharedflows_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `sharedflows_id` — path `sharedflowsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_environments_sharedflows_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_sharedflows_revisions_deploy

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_sharedflows_revisions_deploy(organizations_id: str, environments_id: str, sharedflows_id: str, revisions_id: str, *, override: bool | None = None, service_account: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `sharedflows_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId` · `override` — query · `service_account` — query `serviceAccount`
- **Returns (parsed)**: `GoogleCloudApigeeV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Deployment, ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Deployment` | `apigee/models/google_cloud_apigee_v1_deployment.py` |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployErrorBody` | `apigee/errors/apigee_organizations_environments_sharedflows_revisions_deploy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_sharedflows_revisions_get_deployments

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_sharedflows_revisions_get_deployments(organizations_id: str, environments_id: str, sharedflows_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `sharedflows_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Deployment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Deployment, ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Deployment` | `apigee/models/google_cloud_apigee_v1_deployment.py` |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsErrorBody` | `apigee/errors/apigee_organizations_environments_sharedflows_revisions_get_deployments_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_sharedflows_revisions_undeploy

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_sharedflows_revisions_undeploy(organizations_id: str, environments_id: str, sharedflows_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `sharedflows_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployErrorBody` | `apigee/errors/apigee_organizations_environments_sharedflows_revisions_undeploy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_stats_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/stats/{statsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_stats_get(organizations_id: str, environments_id: str, stats_id: str, *, accuracy: str | None = None, agg_table: str | None = None, filter_: str | None = None, limit: str | None = None, offset: str | None = None, realtime: bool | None = None, select: str | None = None, sonar: bool | None = None, sort: str | None = None, sortby: str | None = None, time_range: str | None = None, time_unit: str | None = None, topk: str | None = None, ts_ascending: bool | None = None, tzo: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `stats_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `stats_id` — path `statsId` · `accuracy` — query · `agg_table` — query `aggTable` · `filter_` — query `filter` · `limit` — query · `offset` — query · `realtime` — query · `select` — query · `sonar` — query · `sort` — query · `sortby` — query · `time_range` — query `timeRange` · `time_unit` — query `timeUnit` · `topk` — query · `ts_ascending` — query `tsAscending` · `tzo` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1Stats`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Stats, ApigeeOrganizationsEnvironmentsStatsGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsStatsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Stats` | `apigee/models/google_cloud_apigee_v1_stats.py` |
| `ApigeeOrganizationsEnvironmentsStatsGetErrorBody` | `apigee/errors/apigee_organizations_environments_stats_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_subscribe

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:subscribe`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_subscribe(organizations_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Subscription`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Subscription, ApigeeOrganizationsEnvironmentsSubscribeErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsSubscribeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Subscription` | `apigee/models/google_cloud_apigee_v1_subscription.py` |
| `ApigeeOrganizationsEnvironmentsSubscribeErrorBody` | `apigee/errors/apigee_organizations_environments_subscribe_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_targetservers_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_targetservers_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1TargetServer | GoogleCloudApigeeV1TargetServerDict, *, name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `name` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1TargetServer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TargetServer, ApigeeOrganizationsEnvironmentsTargetserversCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTargetserversCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `apigee/models/google_cloud_apigee_v1_target_server.py` |
| `GoogleCloudApigeeV1TargetServerDict` | `apigee/models/google_cloud_apigee_v1_target_server.py` |
| `ApigeeOrganizationsEnvironmentsTargetserversCreateErrorBody` | `apigee/errors/apigee_organizations_environments_targetservers_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_targetservers_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_targetservers_delete(organizations_id: str, environments_id: str, targetservers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `targetservers_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `targetservers_id` — path `targetserversId`
- **Returns (parsed)**: `GoogleCloudApigeeV1TargetServer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TargetServer, ApigeeOrganizationsEnvironmentsTargetserversDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTargetserversDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `apigee/models/google_cloud_apigee_v1_target_server.py` |
| `ApigeeOrganizationsEnvironmentsTargetserversDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_targetservers_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_targetservers_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_targetservers_get(organizations_id: str, environments_id: str, targetservers_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `targetservers_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `targetservers_id` — path `targetserversId`
- **Returns (parsed)**: `GoogleCloudApigeeV1TargetServer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TargetServer, ApigeeOrganizationsEnvironmentsTargetserversGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTargetserversGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `apigee/models/google_cloud_apigee_v1_target_server.py` |
| `ApigeeOrganizationsEnvironmentsTargetserversGetErrorBody` | `apigee/errors/apigee_organizations_environments_targetservers_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_targetservers_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_targetservers_update(organizations_id: str, environments_id: str, targetservers_id: str, body: GoogleCloudApigeeV1TargetServer | GoogleCloudApigeeV1TargetServerDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `targetservers_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `targetservers_id` — path `targetserversId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1TargetServer`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TargetServer, ApigeeOrganizationsEnvironmentsTargetserversUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTargetserversUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `apigee/models/google_cloud_apigee_v1_target_server.py` |
| `GoogleCloudApigeeV1TargetServerDict` | `apigee/models/google_cloud_apigee_v1_target_server.py` |
| `ApigeeOrganizationsEnvironmentsTargetserversUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_targetservers_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_test_iam_permissions

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_test_iam_permissions(organizations_id: str, environments_id: str, body: GoogleIamV1TestIamPermissionsRequest | GoogleIamV1TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleIamV1TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[GoogleIamV1TestIamPermissionsResponse, ApigeeOrganizationsEnvironmentsTestIamPermissionsErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1TestIamPermissionsRequest` | `apigee/models/google_iam_v1_test_iam_permissions_request.py` |
| `GoogleIamV1TestIamPermissionsRequestDict` | `apigee/models/google_iam_v1_test_iam_permissions_request.py` |
| `GoogleIamV1TestIamPermissionsResponse` | `apigee/models/google_iam_v1_test_iam_permissions_response.py` |
| `ApigeeOrganizationsEnvironmentsTestIamPermissionsErrorBody` | `apigee/errors/apigee_organizations_environments_test_iam_permissions_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_trace_config_overrides_create

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_trace_config_overrides_create(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1TraceConfigOverride | GoogleCloudApigeeV1TraceConfigOverrideDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TraceConfigOverride, ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TraceConfigOverride` | `apigee/models/google_cloud_apigee_v1_trace_config_override.py` |
| `GoogleCloudApigeeV1TraceConfigOverrideDict` | `apigee/models/google_cloud_apigee_v1_trace_config_override.py` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateErrorBody` | `apigee/errors/apigee_organizations_environments_trace_config_overrides_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_trace_config_overrides_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_trace_config_overrides_delete(organizations_id: str, environments_id: str, overrides_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `overrides_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `overrides_id` — path `overridesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteErrorBody` | `apigee/errors/apigee_organizations_environments_trace_config_overrides_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_trace_config_overrides_get

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_trace_config_overrides_get(organizations_id: str, environments_id: str, overrides_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `overrides_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `overrides_id` — path `overridesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TraceConfigOverride, ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TraceConfigOverride` | `apigee/models/google_cloud_apigee_v1_trace_config_override.py` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetErrorBody` | `apigee/errors/apigee_organizations_environments_trace_config_overrides_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_trace_config_overrides_list

- **Route**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_trace_config_overrides_list(organizations_id: str, environments_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListTraceConfigOverridesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListTraceConfigOverridesResponse, ApigeeOrganizationsEnvironmentsTraceConfigOverridesListErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListTraceConfigOverridesResponse` | `apigee/models/google_cloud_apigee_v1_list_trace_config_overrides_response.py` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesListErrorBody` | `apigee/errors/apigee_organizations_environments_trace_config_overrides_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_trace_config_overrides_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_trace_config_overrides_patch(organizations_id: str, environments_id: str, overrides_id: str, body: GoogleCloudApigeeV1TraceConfigOverride | GoogleCloudApigeeV1TraceConfigOverrideDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `overrides_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `overrides_id` — path `overridesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TraceConfigOverride, ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TraceConfigOverride` | `apigee/models/google_cloud_apigee_v1_trace_config_override.py` |
| `GoogleCloudApigeeV1TraceConfigOverrideDict` | `apigee/models/google_cloud_apigee_v1_trace_config_override.py` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchErrorBody` | `apigee/errors/apigee_organizations_environments_trace_config_overrides_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_unsubscribe

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:unsubscribe`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_unsubscribe(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Subscription | GoogleCloudApigeeV1SubscriptionDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsEnvironmentsUnsubscribeErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsUnsubscribeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Subscription` | `apigee/models/google_cloud_apigee_v1_subscription.py` |
| `GoogleCloudApigeeV1SubscriptionDict` | `apigee/models/google_cloud_apigee_v1_subscription.py` |
| `ApigeeOrganizationsEnvironmentsUnsubscribeErrorBody` | `apigee/errors/apigee_organizations_environments_unsubscribe_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_update

- **Route**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_update(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Environment | GoogleCloudApigeeV1EnvironmentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Environment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Environment, ApigeeOrganizationsEnvironmentsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Environment` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `GoogleCloudApigeeV1EnvironmentDict` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `ApigeeOrganizationsEnvironmentsUpdateErrorBody` | `apigee/errors/apigee_organizations_environments_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_update_debugmask

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_update_debugmask(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1DebugMask | GoogleCloudApigeeV1DebugMaskDict, *, replace_repeated_fields: bool | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `replace_repeated_fields` — query `replaceRepeatedFields` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1DebugMask`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DebugMask, ApigeeOrganizationsEnvironmentsUpdateDebugmaskErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsUpdateDebugmaskErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DebugMask` | `apigee/models/google_cloud_apigee_v1_debug_mask.py` |
| `GoogleCloudApigeeV1DebugMaskDict` | `apigee/models/google_cloud_apigee_v1_debug_mask.py` |
| `ApigeeOrganizationsEnvironmentsUpdateDebugmaskErrorBody` | `apigee/errors/apigee_organizations_environments_update_debugmask_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_update_environment

- **Route**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_update_environment(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1Environment | GoogleCloudApigeeV1EnvironmentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Environment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Environment, ApigeeOrganizationsEnvironmentsUpdateEnvironmentErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsUpdateEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Environment` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `GoogleCloudApigeeV1EnvironmentDict` | `apigee/models/google_cloud_apigee_v1_environment.py` |
| `ApigeeOrganizationsEnvironmentsUpdateEnvironmentErrorBody` | `apigee/errors/apigee_organizations_environments_update_environment_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_update_security_actions_config

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActionsConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_update_security_actions_config(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1SecurityActionsConfig | GoogleCloudApigeeV1SecurityActionsConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityActionsConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityActionsConfig, ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityActionsConfig` | `apigee/models/google_cloud_apigee_v1_security_actions_config.py` |
| `GoogleCloudApigeeV1SecurityActionsConfigDict` | `apigee/models/google_cloud_apigee_v1_security_actions_config.py` |
| `ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigErrorBody` | `apigee/errors/apigee_organizations_environments_update_security_actions_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_environments_update_trace_config

- **Route**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_environments_update_trace_config(organizations_id: str, environments_id: str, body: GoogleCloudApigeeV1TraceConfig | GoogleCloudApigeeV1TraceConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `environments_id` — path `environmentsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1TraceConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1TraceConfig, ApigeeOrganizationsEnvironmentsUpdateTraceConfigErrorBody]`
- **Error**: `ApigeeOrganizationsEnvironmentsUpdateTraceConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1TraceConfig` | `apigee/models/google_cloud_apigee_v1_trace_config.py` |
| `GoogleCloudApigeeV1TraceConfigDict` | `apigee/models/google_cloud_apigee_v1_trace_config.py` |
| `ApigeeOrganizationsEnvironmentsUpdateTraceConfigErrorBody` | `apigee/errors/apigee_organizations_environments_update_trace_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get

- **Route**: `GET /v1/organizations/{organizationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get(organizations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Organization`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Organization, ApigeeOrganizationsGetErrorBody]`
- **Error**: `ApigeeOrganizationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Organization` | `apigee/models/google_cloud_apigee_v1_organization.py` |
| `ApigeeOrganizationsGetErrorBody` | `apigee/errors/apigee_organizations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_control_plane_access

- **Route**: `GET /v1/organizations/{organizationsId}/controlPlaneAccess`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_control_plane_access(organizations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ControlPlaneAccess`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ControlPlaneAccess, ApigeeOrganizationsGetControlPlaneAccessErrorBody]`
- **Error**: `ApigeeOrganizationsGetControlPlaneAccessErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ControlPlaneAccess` | `apigee/models/google_cloud_apigee_v1_control_plane_access.py` |
| `ApigeeOrganizationsGetControlPlaneAccessErrorBody` | `apigee/errors/apigee_organizations_get_control_plane_access_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_deployed_ingress_config

- **Route**: `GET /v1/organizations/{organizationsId}/deployedIngressConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_deployed_ingress_config(organizations_id: str, *, view: ViewOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `view` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1IngressConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1IngressConfig, ApigeeOrganizationsGetDeployedIngressConfigErrorBody]`
- **Error**: `ApigeeOrganizationsGetDeployedIngressConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ViewOrStr` | `apigee/models/enums/view.py` |
| `GoogleCloudApigeeV1IngressConfig` | `apigee/models/google_cloud_apigee_v1_ingress_config.py` |
| `ApigeeOrganizationsGetDeployedIngressConfigErrorBody` | `apigee/errors/apigee_organizations_get_deployed_ingress_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_mcp_server_config

- **Route**: `GET /v1/organizations/{organizationsId}/mcpServerConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_mcp_server_config(organizations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1McpServerConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1McpServerConfig, ApigeeOrganizationsGetMcpServerConfigErrorBody]`
- **Error**: `ApigeeOrganizationsGetMcpServerConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1McpServerConfig` | `apigee/models/google_cloud_apigee_v1_mcp_server_config.py` |
| `ApigeeOrganizationsGetMcpServerConfigErrorBody` | `apigee/errors/apigee_organizations_get_mcp_server_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_project_mapping

- **Route**: `GET /v1/organizations/{organizationsId}:getProjectMapping`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_project_mapping(organizations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1OrganizationProjectMapping`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1OrganizationProjectMapping, ApigeeOrganizationsGetProjectMappingErrorBody]`
- **Error**: `ApigeeOrganizationsGetProjectMappingErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1OrganizationProjectMapping` | `apigee/models/google_cloud_apigee_v1_organization_project_mapping.py` |
| `ApigeeOrganizationsGetProjectMappingErrorBody` | `apigee/errors/apigee_organizations_get_project_mapping_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_runtime_config

- **Route**: `GET /v1/organizations/{organizationsId}/runtimeConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_runtime_config(organizations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1RuntimeConfig`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1RuntimeConfig, ApigeeOrganizationsGetRuntimeConfigErrorBody]`
- **Error**: `ApigeeOrganizationsGetRuntimeConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1RuntimeConfig` | `apigee/models/google_cloud_apigee_v1_runtime_config.py` |
| `ApigeeOrganizationsGetRuntimeConfigErrorBody` | `apigee/errors/apigee_organizations_get_runtime_config_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_security_settings

- **Route**: `GET /v1/organizations/{organizationsId}/securitySettings`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_security_settings(organizations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecuritySettings`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecuritySettings, ApigeeOrganizationsGetSecuritySettingsErrorBody]`
- **Error**: `ApigeeOrganizationsGetSecuritySettingsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecuritySettings` | `apigee/models/google_cloud_apigee_v1_security_settings.py` |
| `ApigeeOrganizationsGetSecuritySettingsErrorBody` | `apigee/errors/apigee_organizations_get_security_settings_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_get_sync_authorization

- **Route**: `POST /v1/organizations/{organizationsId}:getSyncAuthorization`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_get_sync_authorization(organizations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SyncAuthorization`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SyncAuthorization, ApigeeOrganizationsGetSyncAuthorizationErrorBody]`
- **Error**: `ApigeeOrganizationsGetSyncAuthorizationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SyncAuthorization` | `apigee/models/google_cloud_apigee_v1_sync_authorization.py` |
| `ApigeeOrganizationsGetSyncAuthorizationErrorBody` | `apigee/errors/apigee_organizations_get_sync_authorization_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_queries_create

- **Route**: `POST /v1/organizations/{organizationsId}/hostQueries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_queries_create(organizations_id: str, body: GoogleCloudApigeeV1Query | GoogleCloudApigeeV1QueryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1AsyncQuery`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AsyncQuery, ApigeeOrganizationsHostQueriesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsHostQueriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Query` | `apigee/models/google_cloud_apigee_v1_query.py` |
| `GoogleCloudApigeeV1QueryDict` | `apigee/models/google_cloud_apigee_v1_query.py` |
| `GoogleCloudApigeeV1AsyncQuery` | `apigee/models/google_cloud_apigee_v1_async_query.py` |
| `ApigeeOrganizationsHostQueriesCreateErrorBody` | `apigee/errors/apigee_organizations_host_queries_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_queries_get

- **Route**: `GET /v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_queries_get(organizations_id: str, host_queries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_queries_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_queries_id` — path `hostQueriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AsyncQuery`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AsyncQuery, ApigeeOrganizationsHostQueriesGetErrorBody]`
- **Error**: `ApigeeOrganizationsHostQueriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AsyncQuery` | `apigee/models/google_cloud_apigee_v1_async_query.py` |
| `ApigeeOrganizationsHostQueriesGetErrorBody` | `apigee/errors/apigee_organizations_host_queries_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_queries_get_result

- **Route**: `GET /v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}/result`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_queries_get_result(organizations_id: str, host_queries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_queries_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_queries_id` — path `hostQueriesId`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsHostQueriesGetResultErrorBody]`
- **Error**: `ApigeeOrganizationsHostQueriesGetResultErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsHostQueriesGetResultErrorBody` | `apigee/errors/apigee_organizations_host_queries_get_result_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_queries_get_result_view

- **Route**: `GET /v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}/resultView`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_queries_get_result_view(organizations_id: str, host_queries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_queries_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_queries_id` — path `hostQueriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1AsyncQueryResultView`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1AsyncQueryResultView, ApigeeOrganizationsHostQueriesGetResultViewErrorBody]`
- **Error**: `ApigeeOrganizationsHostQueriesGetResultViewErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1AsyncQueryResultView` | `apigee/models/google_cloud_apigee_v1_async_query_result_view.py` |
| `ApigeeOrganizationsHostQueriesGetResultViewErrorBody` | `apigee/errors/apigee_organizations_host_queries_get_result_view_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_queries_list

- **Route**: `GET /v1/organizations/{organizationsId}/hostQueries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_queries_list(organizations_id: str, *, dataset: str | None = None, envgroup_hostname: str | None = None, from_: str | None = None, incl_queries_without_report: str | None = None, status: str | None = None, submitted_by: str | None = None, to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `dataset` — query · `envgroup_hostname` — query `envgroupHostname` · `from_` — query `from` · `incl_queries_without_report` — query `inclQueriesWithoutReport` · `status` — query · `submitted_by` — query `submittedBy` · `to` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListAsyncQueriesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListAsyncQueriesResponse, ApigeeOrganizationsHostQueriesListErrorBody]`
- **Error**: `ApigeeOrganizationsHostQueriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListAsyncQueriesResponse` | `apigee/models/google_cloud_apigee_v1_list_async_queries_response.py` |
| `ApigeeOrganizationsHostQueriesListErrorBody` | `apigee/errors/apigee_organizations_host_queries_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_security_reports_create

- **Route**: `POST /v1/organizations/{organizationsId}/hostSecurityReports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_security_reports_create(organizations_id: str, body: GoogleCloudApigeeV1SecurityReportQuery | GoogleCloudApigeeV1SecurityReportQueryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityReport, ApigeeOrganizationsHostSecurityReportsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsHostSecurityReportsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityReportQuery` | `apigee/models/google_cloud_apigee_v1_security_report_query.py` |
| `GoogleCloudApigeeV1SecurityReportQueryDict` | `apigee/models/google_cloud_apigee_v1_security_report_query.py` |
| `GoogleCloudApigeeV1SecurityReport` | `apigee/models/google_cloud_apigee_v1_security_report.py` |
| `ApigeeOrganizationsHostSecurityReportsCreateErrorBody` | `apigee/errors/apigee_organizations_host_security_reports_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_security_reports_get

- **Route**: `GET /v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_security_reports_get(organizations_id: str, host_security_reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_security_reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_security_reports_id` — path `hostSecurityReportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityReport, ApigeeOrganizationsHostSecurityReportsGetErrorBody]`
- **Error**: `ApigeeOrganizationsHostSecurityReportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityReport` | `apigee/models/google_cloud_apigee_v1_security_report.py` |
| `ApigeeOrganizationsHostSecurityReportsGetErrorBody` | `apigee/errors/apigee_organizations_host_security_reports_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_security_reports_get_result

- **Route**: `GET /v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}/result`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_security_reports_get_result(organizations_id: str, host_security_reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_security_reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_security_reports_id` — path `hostSecurityReportsId`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsHostSecurityReportsGetResultErrorBody]`
- **Error**: `ApigeeOrganizationsHostSecurityReportsGetResultErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsHostSecurityReportsGetResultErrorBody` | `apigee/errors/apigee_organizations_host_security_reports_get_result_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_security_reports_get_result_view

- **Route**: `GET /v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}/resultView`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_security_reports_get_result_view(organizations_id: str, host_security_reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_security_reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_security_reports_id` — path `hostSecurityReportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityReportResultView`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityReportResultView, ApigeeOrganizationsHostSecurityReportsGetResultViewErrorBody]`
- **Error**: `ApigeeOrganizationsHostSecurityReportsGetResultViewErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityReportResultView` | `apigee/models/google_cloud_apigee_v1_security_report_result_view.py` |
| `ApigeeOrganizationsHostSecurityReportsGetResultViewErrorBody` | `apigee/errors/apigee_organizations_host_security_reports_get_result_view_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_security_reports_list

- **Route**: `GET /v1/organizations/{organizationsId}/hostSecurityReports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_security_reports_list(organizations_id: str, *, dataset: str | None = None, envgroup_hostname: str | None = None, from_: str | None = None, page_size: int | None = None, page_token: str | None = None, status: str | None = None, submitted_by: str | None = None, to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `dataset` — query · `envgroup_hostname` — query `envgroupHostname` · `from_` — query `from` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `status` — query · `submitted_by` — query `submittedBy` · `to` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityReportsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityReportsResponse, ApigeeOrganizationsHostSecurityReportsListErrorBody]`
- **Error**: `ApigeeOrganizationsHostSecurityReportsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityReportsResponse` | `apigee/models/google_cloud_apigee_v1_list_security_reports_response.py` |
| `ApigeeOrganizationsHostSecurityReportsListErrorBody` | `apigee/errors/apigee_organizations_host_security_reports_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_host_stats_get

- **Route**: `GET /v1/organizations/{organizationsId}/hostStats/{hostStatsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_host_stats_get(organizations_id: str, host_stats_id: str, *, accuracy: str | None = None, envgroup_hostname: str | None = None, filter_: str | None = None, limit: str | None = None, offset: str | None = None, realtime: bool | None = None, select: str | None = None, sort: str | None = None, sortby: str | None = None, time_range: str | None = None, time_unit: str | None = None, topk: str | None = None, ts_ascending: bool | None = None, tzo: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `host_stats_id`
- **Params**: `organizations_id` — path `organizationsId` · `host_stats_id` — path `hostStatsId` · `accuracy` — query · `envgroup_hostname` — query `envgroupHostname` · `filter_` — query `filter` · `limit` — query · `offset` — query · `realtime` — query · `select` — query · `sort` — query · `sortby` — query · `time_range` — query `timeRange` · `time_unit` — query `timeUnit` · `topk` — query · `ts_ascending` — query `tsAscending` · `tzo` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1Stats`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Stats, ApigeeOrganizationsHostStatsGetErrorBody]`
- **Error**: `ApigeeOrganizationsHostStatsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Stats` | `apigee/models/google_cloud_apigee_v1_stats.py` |
| `ApigeeOrganizationsHostStatsGetErrorBody` | `apigee/errors/apigee_organizations_host_stats_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_attachments_create

- **Route**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/attachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_attachments_create(organizations_id: str, instances_id: str, body: GoogleCloudApigeeV1InstanceAttachment | GoogleCloudApigeeV1InstanceAttachmentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesAttachmentsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesAttachmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1InstanceAttachment` | `apigee/models/google_cloud_apigee_v1_instance_attachment.py` |
| `GoogleCloudApigeeV1InstanceAttachmentDict` | `apigee/models/google_cloud_apigee_v1_instance_attachment.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesAttachmentsCreateErrorBody` | `apigee/errors/apigee_organizations_instances_attachments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_attachments_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_attachments_delete(organizations_id: str, instances_id: str, attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `attachments_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `attachments_id` — path `attachmentsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesAttachmentsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesAttachmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesAttachmentsDeleteErrorBody` | `apigee/errors/apigee_organizations_instances_attachments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_attachments_get

- **Route**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_attachments_get(organizations_id: str, instances_id: str, attachments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `attachments_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `attachments_id` — path `attachmentsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1InstanceAttachment`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1InstanceAttachment, ApigeeOrganizationsInstancesAttachmentsGetErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesAttachmentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1InstanceAttachment` | `apigee/models/google_cloud_apigee_v1_instance_attachment.py` |
| `ApigeeOrganizationsInstancesAttachmentsGetErrorBody` | `apigee/errors/apigee_organizations_instances_attachments_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_attachments_list

- **Route**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/attachments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_attachments_list(organizations_id: str, instances_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListInstanceAttachmentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListInstanceAttachmentsResponse, ApigeeOrganizationsInstancesAttachmentsListErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesAttachmentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListInstanceAttachmentsResponse` | `apigee/models/google_cloud_apigee_v1_list_instance_attachments_response.py` |
| `ApigeeOrganizationsInstancesAttachmentsListErrorBody` | `apigee/errors/apigee_organizations_instances_attachments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_canaryevaluations_create

- **Route**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_canaryevaluations_create(organizations_id: str, instances_id: str, body: GoogleCloudApigeeV1CanaryEvaluation | GoogleCloudApigeeV1CanaryEvaluationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesCanaryevaluationsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesCanaryevaluationsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CanaryEvaluation` | `apigee/models/google_cloud_apigee_v1_canary_evaluation.py` |
| `GoogleCloudApigeeV1CanaryEvaluationDict` | `apigee/models/google_cloud_apigee_v1_canary_evaluation.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesCanaryevaluationsCreateErrorBody` | `apigee/errors/apigee_organizations_instances_canaryevaluations_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_canaryevaluations_get

- **Route**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations/{canaryevaluationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_canaryevaluations_get(organizations_id: str, instances_id: str, canaryevaluations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `canaryevaluations_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `canaryevaluations_id` — path `canaryevaluationsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1CanaryEvaluation`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1CanaryEvaluation, ApigeeOrganizationsInstancesCanaryevaluationsGetErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesCanaryevaluationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CanaryEvaluation` | `apigee/models/google_cloud_apigee_v1_canary_evaluation.py` |
| `ApigeeOrganizationsInstancesCanaryevaluationsGetErrorBody` | `apigee/errors/apigee_organizations_instances_canaryevaluations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_create

- **Route**: `POST /v1/organizations/{organizationsId}/instances`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_create(organizations_id: str, body: GoogleCloudApigeeV1Instance | GoogleCloudApigeeV1InstanceDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Instance` | `apigee/models/google_cloud_apigee_v1_instance.py` |
| `GoogleCloudApigeeV1InstanceDict` | `apigee/models/google_cloud_apigee_v1_instance.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesCreateErrorBody` | `apigee/errors/apigee_organizations_instances_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/instances/{instancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_delete(organizations_id: str, instances_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesDeleteErrorBody` | `apigee/errors/apigee_organizations_instances_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_get

- **Route**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_get(organizations_id: str, instances_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Instance`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Instance, ApigeeOrganizationsInstancesGetErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Instance` | `apigee/models/google_cloud_apigee_v1_instance.py` |
| `ApigeeOrganizationsInstancesGetErrorBody` | `apigee/errors/apigee_organizations_instances_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_list

- **Route**: `GET /v1/organizations/{organizationsId}/instances`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListInstancesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListInstancesResponse, ApigeeOrganizationsInstancesListErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListInstancesResponse` | `apigee/models/google_cloud_apigee_v1_list_instances_response.py` |
| `ApigeeOrganizationsInstancesListErrorBody` | `apigee/errors/apigee_organizations_instances_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_nat_addresses_activate

- **Route**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}:activate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_nat_addresses_activate(organizations_id: str, instances_id: str, nat_addresses_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `nat_addresses_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `nat_addresses_id` — path `natAddressesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesNatAddressesActivateErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesNatAddressesActivateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesNatAddressesActivateErrorBody` | `apigee/errors/apigee_organizations_instances_nat_addresses_activate_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_nat_addresses_create

- **Route**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_nat_addresses_create(organizations_id: str, instances_id: str, body: GoogleCloudApigeeV1NatAddress | GoogleCloudApigeeV1NatAddressDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesNatAddressesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesNatAddressesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1NatAddress` | `apigee/models/google_cloud_apigee_v1_nat_address.py` |
| `GoogleCloudApigeeV1NatAddressDict` | `apigee/models/google_cloud_apigee_v1_nat_address.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesNatAddressesCreateErrorBody` | `apigee/errors/apigee_organizations_instances_nat_addresses_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_nat_addresses_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_nat_addresses_delete(organizations_id: str, instances_id: str, nat_addresses_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `nat_addresses_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `nat_addresses_id` — path `natAddressesId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesNatAddressesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesNatAddressesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesNatAddressesDeleteErrorBody` | `apigee/errors/apigee_organizations_instances_nat_addresses_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_nat_addresses_get

- **Route**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_nat_addresses_get(organizations_id: str, instances_id: str, nat_addresses_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `nat_addresses_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `nat_addresses_id` — path `natAddressesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1NatAddress`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1NatAddress, ApigeeOrganizationsInstancesNatAddressesGetErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesNatAddressesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1NatAddress` | `apigee/models/google_cloud_apigee_v1_nat_address.py` |
| `ApigeeOrganizationsInstancesNatAddressesGetErrorBody` | `apigee/errors/apigee_organizations_instances_nat_addresses_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_nat_addresses_list

- **Route**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_nat_addresses_list(organizations_id: str, instances_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListNatAddressesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListNatAddressesResponse, ApigeeOrganizationsInstancesNatAddressesListErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesNatAddressesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListNatAddressesResponse` | `apigee/models/google_cloud_apigee_v1_list_nat_addresses_response.py` |
| `ApigeeOrganizationsInstancesNatAddressesListErrorBody` | `apigee/errors/apigee_organizations_instances_nat_addresses_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/instances/{instancesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_patch(organizations_id: str, instances_id: str, body: GoogleCloudApigeeV1Instance | GoogleCloudApigeeV1InstanceDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsInstancesPatchErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Instance` | `apigee/models/google_cloud_apigee_v1_instance.py` |
| `GoogleCloudApigeeV1InstanceDict` | `apigee/models/google_cloud_apigee_v1_instance.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsInstancesPatchErrorBody` | `apigee/errors/apigee_organizations_instances_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_instances_report_status

- **Route**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}:reportStatus`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_instances_report_status(organizations_id: str, instances_id: str, body: GoogleCloudApigeeV1ReportInstanceStatusRequest | GoogleCloudApigeeV1ReportInstanceStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `instances_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `instances_id` — path `instancesId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsInstancesReportStatusErrorBody]`
- **Error**: `ApigeeOrganizationsInstancesReportStatusErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ReportInstanceStatusRequest` | `apigee/models/google_cloud_apigee_v1_report_instance_status_request.py` |
| `GoogleCloudApigeeV1ReportInstanceStatusRequestDict` | `apigee/models/google_cloud_apigee_v1_report_instance_status_request.py` |
| `ApigeeOrganizationsInstancesReportStatusErrorBody` | `apigee/errors/apigee_organizations_instances_report_status_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_create

- **Route**: `POST /v1/organizations/{organizationsId}/keyvaluemaps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_create(organizations_id: str, body: GoogleCloudApigeeV1KeyValueMap | GoogleCloudApigeeV1KeyValueMapDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsKeyvaluemapsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `GoogleCloudApigeeV1KeyValueMapDict` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsKeyvaluemapsCreateErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_delete(organizations_id: str, keyvaluemaps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsKeyvaluemapsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsKeyvaluemapsDeleteErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_entries_create

- **Route**: `POST /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_entries_create(organizations_id: str, keyvaluemaps_id: str, body: GoogleCloudApigeeV1KeyValueEntry | GoogleCloudApigeeV1KeyValueEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsKeyvaluemapsEntriesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsEntriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `GoogleCloudApigeeV1KeyValueEntryDict` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsKeyvaluemapsEntriesCreateErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_entries_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_entries_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_entries_delete(organizations_id: str, keyvaluemaps_id: str, entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`, `entries_id`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsKeyvaluemapsEntriesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsEntriesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsKeyvaluemapsEntriesDeleteErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_entries_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_entries_get

- **Route**: `GET /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_entries_get(organizations_id: str, keyvaluemaps_id: str, entries_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`, `entries_id`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsKeyvaluemapsEntriesGetErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsEntriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsKeyvaluemapsEntriesGetErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_entries_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_entries_list

- **Route**: `GET /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_entries_list(organizations_id: str, keyvaluemaps_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListKeyValueEntriesResponse, ApigeeOrganizationsKeyvaluemapsEntriesListErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsEntriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `apigee/models/google_cloud_apigee_v1_list_key_value_entries_response.py` |
| `ApigeeOrganizationsKeyvaluemapsEntriesListErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_entries_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_entries_update

- **Route**: `PUT /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_entries_update(organizations_id: str, keyvaluemaps_id: str, entries_id: str, body: GoogleCloudApigeeV1KeyValueEntry | GoogleCloudApigeeV1KeyValueEntryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`, `entries_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `entries_id` — path `entriesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueEntry`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueEntry, ApigeeOrganizationsKeyvaluemapsEntriesUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsEntriesUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `GoogleCloudApigeeV1KeyValueEntryDict` | `apigee/models/google_cloud_apigee_v1_key_value_entry.py` |
| `ApigeeOrganizationsKeyvaluemapsEntriesUpdateErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_entries_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_get

- **Route**: `GET /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_get(organizations_id: str, keyvaluemaps_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsKeyvaluemapsGetErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsKeyvaluemapsGetErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_keyvaluemaps_update

- **Route**: `PUT /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_keyvaluemaps_update(organizations_id: str, keyvaluemaps_id: str, body: GoogleCloudApigeeV1KeyValueMap | GoogleCloudApigeeV1KeyValueMapDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `keyvaluemaps_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `keyvaluemaps_id` — path `keyvaluemapsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1KeyValueMap`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1KeyValueMap, ApigeeOrganizationsKeyvaluemapsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsKeyvaluemapsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `GoogleCloudApigeeV1KeyValueMapDict` | `apigee/models/google_cloud_apigee_v1_key_value_map.py` |
| `ApigeeOrganizationsKeyvaluemapsUpdateErrorBody` | `apigee/errors/apigee_organizations_keyvaluemaps_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_list

- **Route**: `GET /v1/organizations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_list(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListOrganizationsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListOrganizationsResponse, ApigeeOrganizationsListErrorBody]`
- **Error**: `ApigeeOrganizationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListOrganizationsResponse` | `apigee/models/google_cloud_apigee_v1_list_organizations_response.py` |
| `ApigeeOrganizationsListErrorBody` | `apigee/errors/apigee_organizations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_operations_get

- **Route**: `GET /v1/organizations/{organizationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_operations_get(organizations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `operations_id`
- **Params**: `organizations_id` — path `organizationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsOperationsGetErrorBody]`
- **Error**: `ApigeeOrganizationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsOperationsGetErrorBody` | `apigee/errors/apigee_organizations_operations_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_operations_list

- **Route**: `GET /v1/organizations/{organizationsId}/operations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_operations_list(organizations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `GoogleLongrunningListOperationsResponse`
- **Returns (raw)**: `ApiResult[GoogleLongrunningListOperationsResponse, ApigeeOrganizationsOperationsListErrorBody]`
- **Error**: `ApigeeOrganizationsOperationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleLongrunningListOperationsResponse` | `apigee/models/google_longrunning_list_operations_response.py` |
| `ApigeeOrganizationsOperationsListErrorBody` | `apigee/errors/apigee_organizations_operations_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_optimized_host_stats_get

- **Route**: `GET /v1/organizations/{organizationsId}/optimizedHostStats/{optimizedHostStatsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_optimized_host_stats_get(organizations_id: str, optimized_host_stats_id: str, *, accuracy: str | None = None, envgroup_hostname: str | None = None, filter_: str | None = None, limit: str | None = None, offset: str | None = None, realtime: bool | None = None, select: str | None = None, sort: str | None = None, sortby: str | None = None, time_range: str | None = None, time_unit: str | None = None, topk: str | None = None, ts_ascending: bool | None = None, tzo: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `optimized_host_stats_id`
- **Params**: `organizations_id` — path `organizationsId` · `optimized_host_stats_id` — path `optimizedHostStatsId` · `accuracy` — query · `envgroup_hostname` — query `envgroupHostname` · `filter_` — query `filter` · `limit` — query · `offset` — query · `realtime` — query · `select` — query · `sort` — query · `sortby` — query · `time_range` — query `timeRange` · `time_unit` — query `timeUnit` · `topk` — query · `ts_ascending` — query `tsAscending` · `tzo` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1OptimizedStats`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1OptimizedStats, ApigeeOrganizationsOptimizedHostStatsGetErrorBody]`
- **Error**: `ApigeeOrganizationsOptimizedHostStatsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1OptimizedStats` | `apigee/models/google_cloud_apigee_v1_optimized_stats.py` |
| `ApigeeOrganizationsOptimizedHostStatsGetErrorBody` | `apigee/errors/apigee_organizations_optimized_host_stats_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_reports_create

- **Route**: `POST /v1/organizations/{organizationsId}/reports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_reports_create(organizations_id: str, body: GoogleCloudApigeeV1CustomReport | GoogleCloudApigeeV1CustomReportDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1CustomReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1CustomReport, ApigeeOrganizationsReportsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsReportsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CustomReport` | `apigee/models/google_cloud_apigee_v1_custom_report.py` |
| `GoogleCloudApigeeV1CustomReportDict` | `apigee/models/google_cloud_apigee_v1_custom_report.py` |
| `ApigeeOrganizationsReportsCreateErrorBody` | `apigee/errors/apigee_organizations_reports_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_reports_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/reports/{reportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_reports_delete(organizations_id: str, reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `reports_id` — path `reportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeleteCustomReportResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeleteCustomReportResponse, ApigeeOrganizationsReportsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsReportsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeleteCustomReportResponse` | `apigee/models/google_cloud_apigee_v1_delete_custom_report_response.py` |
| `ApigeeOrganizationsReportsDeleteErrorBody` | `apigee/errors/apigee_organizations_reports_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_reports_get

- **Route**: `GET /v1/organizations/{organizationsId}/reports/{reportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_reports_get(organizations_id: str, reports_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `reports_id`
- **Params**: `organizations_id` — path `organizationsId` · `reports_id` — path `reportsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1CustomReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1CustomReport, ApigeeOrganizationsReportsGetErrorBody]`
- **Error**: `ApigeeOrganizationsReportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CustomReport` | `apigee/models/google_cloud_apigee_v1_custom_report.py` |
| `ApigeeOrganizationsReportsGetErrorBody` | `apigee/errors/apigee_organizations_reports_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_reports_list

- **Route**: `GET /v1/organizations/{organizationsId}/reports`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_reports_list(organizations_id: str, *, expand: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `expand` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListCustomReportsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListCustomReportsResponse, ApigeeOrganizationsReportsListErrorBody]`
- **Error**: `ApigeeOrganizationsReportsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListCustomReportsResponse` | `apigee/models/google_cloud_apigee_v1_list_custom_reports_response.py` |
| `ApigeeOrganizationsReportsListErrorBody` | `apigee/errors/apigee_organizations_reports_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_reports_update

- **Route**: `PUT /v1/organizations/{organizationsId}/reports/{reportsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_reports_update(organizations_id: str, reports_id: str, body: GoogleCloudApigeeV1CustomReport | GoogleCloudApigeeV1CustomReportDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `reports_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `reports_id` — path `reportsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1CustomReport`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1CustomReport, ApigeeOrganizationsReportsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsReportsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1CustomReport` | `apigee/models/google_cloud_apigee_v1_custom_report.py` |
| `GoogleCloudApigeeV1CustomReportDict` | `apigee/models/google_cloud_apigee_v1_custom_report.py` |
| `ApigeeOrganizationsReportsUpdateErrorBody` | `apigee/errors/apigee_organizations_reports_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_assessment_results_batch_compute

- **Route**: `POST /v1/organizations/{organizationsId}/securityAssessmentResults:batchCompute`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_assessment_results_batch_compute(organizations_id: str, body: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest | GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse, ApigeeOrganizationsSecurityAssessmentResultsBatchComputeErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityAssessmentResultsBatchComputeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest` | `apigee/models/google_cloud_apigee_v1_batch_compute_security_assessment_results_request.py` |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestDict` | `apigee/models/google_cloud_apigee_v1_batch_compute_security_assessment_results_request.py` |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse` | `apigee/models/google_cloud_apigee_v1_batch_compute_security_assessment_results_response.py` |
| `ApigeeOrganizationsSecurityAssessmentResultsBatchComputeErrorBody` | `apigee/errors/apigee_organizations_security_assessment_results_batch_compute_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_feedback_create

- **Route**: `POST /v1/organizations/{organizationsId}/securityFeedback`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_feedback_create(organizations_id: str, body: GoogleCloudApigeeV1SecurityFeedback | GoogleCloudApigeeV1SecurityFeedbackDict, *, security_feedback_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_feedback_id` — query `securityFeedbackId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityFeedback`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityFeedback, ApigeeOrganizationsSecurityFeedbackCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityFeedbackCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityFeedback` | `apigee/models/google_cloud_apigee_v1_security_feedback.py` |
| `GoogleCloudApigeeV1SecurityFeedbackDict` | `apigee/models/google_cloud_apigee_v1_security_feedback.py` |
| `ApigeeOrganizationsSecurityFeedbackCreateErrorBody` | `apigee/errors/apigee_organizations_security_feedback_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_feedback_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_feedback_delete(organizations_id: str, security_feedback_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_feedback_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_feedback_id` — path `securityFeedbackId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsSecurityFeedbackDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityFeedbackDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityFeedbackDeleteErrorBody` | `apigee/errors/apigee_organizations_security_feedback_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_feedback_get

- **Route**: `GET /v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_feedback_get(organizations_id: str, security_feedback_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_feedback_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_feedback_id` — path `securityFeedbackId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityFeedback`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityFeedback, ApigeeOrganizationsSecurityFeedbackGetErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityFeedbackGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityFeedback` | `apigee/models/google_cloud_apigee_v1_security_feedback.py` |
| `ApigeeOrganizationsSecurityFeedbackGetErrorBody` | `apigee/errors/apigee_organizations_security_feedback_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_feedback_list

- **Route**: `GET /v1/organizations/{organizationsId}/securityFeedback`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_feedback_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityFeedbackResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityFeedbackResponse, ApigeeOrganizationsSecurityFeedbackListErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityFeedbackListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityFeedbackResponse` | `apigee/models/google_cloud_apigee_v1_list_security_feedback_response.py` |
| `ApigeeOrganizationsSecurityFeedbackListErrorBody` | `apigee/errors/apigee_organizations_security_feedback_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_feedback_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_feedback_patch(organizations_id: str, security_feedback_id: str, body: GoogleCloudApigeeV1SecurityFeedback | GoogleCloudApigeeV1SecurityFeedbackDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_feedback_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_feedback_id` — path `securityFeedbackId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityFeedback`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityFeedback, ApigeeOrganizationsSecurityFeedbackPatchErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityFeedbackPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityFeedback` | `apigee/models/google_cloud_apigee_v1_security_feedback.py` |
| `GoogleCloudApigeeV1SecurityFeedbackDict` | `apigee/models/google_cloud_apigee_v1_security_feedback.py` |
| `ApigeeOrganizationsSecurityFeedbackPatchErrorBody` | `apigee/errors/apigee_organizations_security_feedback_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_monitoring_conditions_create

- **Route**: `POST /v1/organizations/{organizationsId}/securityMonitoringConditions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_monitoring_conditions_create(organizations_id: str, body: GoogleCloudApigeeV1SecurityMonitoringCondition | GoogleCloudApigeeV1SecurityMonitoringConditionDict, *, security_monitoring_condition_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_monitoring_condition_id` — query `securityMonitoringConditionId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityMonitoringCondition, ApigeeOrganizationsSecurityMonitoringConditionsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityMonitoringConditionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `apigee/models/google_cloud_apigee_v1_security_monitoring_condition.py` |
| `GoogleCloudApigeeV1SecurityMonitoringConditionDict` | `apigee/models/google_cloud_apigee_v1_security_monitoring_condition.py` |
| `ApigeeOrganizationsSecurityMonitoringConditionsCreateErrorBody` | `apigee/errors/apigee_organizations_security_monitoring_conditions_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_monitoring_conditions_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_monitoring_conditions_delete(organizations_id: str, security_monitoring_conditions_id: str, *, risk_assessment_type: RiskAssessmentType2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_monitoring_conditions_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_monitoring_conditions_id` — path `securityMonitoringConditionsId` · `risk_assessment_type` — query `riskAssessmentType`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsSecurityMonitoringConditionsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityMonitoringConditionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RiskAssessmentType2OrStr` | `apigee/models/enums/risk_assessment_type2.py` |
| `ApigeeOrganizationsSecurityMonitoringConditionsDeleteErrorBody` | `apigee/errors/apigee_organizations_security_monitoring_conditions_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_monitoring_conditions_get

- **Route**: `GET /v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_monitoring_conditions_get(organizations_id: str, security_monitoring_conditions_id: str, *, risk_assessment_type: RiskAssessmentType2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_monitoring_conditions_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_monitoring_conditions_id` — path `securityMonitoringConditionsId` · `risk_assessment_type` — query `riskAssessmentType`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityMonitoringCondition, ApigeeOrganizationsSecurityMonitoringConditionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityMonitoringConditionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RiskAssessmentType2OrStr` | `apigee/models/enums/risk_assessment_type2.py` |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `apigee/models/google_cloud_apigee_v1_security_monitoring_condition.py` |
| `ApigeeOrganizationsSecurityMonitoringConditionsGetErrorBody` | `apigee/errors/apigee_organizations_security_monitoring_conditions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_monitoring_conditions_list

- **Route**: `GET /v1/organizations/{organizationsId}/securityMonitoringConditions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_monitoring_conditions_list(organizations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, risk_assessment_type: RiskAssessmentType2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `risk_assessment_type` — query `riskAssessmentType`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse, ApigeeOrganizationsSecurityMonitoringConditionsListErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityMonitoringConditionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RiskAssessmentType2OrStr` | `apigee/models/enums/risk_assessment_type2.py` |
| `GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse` | `apigee/models/google_cloud_apigee_v1_list_security_monitoring_conditions_response.py` |
| `ApigeeOrganizationsSecurityMonitoringConditionsListErrorBody` | `apigee/errors/apigee_organizations_security_monitoring_conditions_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_monitoring_conditions_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_monitoring_conditions_patch(organizations_id: str, security_monitoring_conditions_id: str, body: GoogleCloudApigeeV1SecurityMonitoringCondition | GoogleCloudApigeeV1SecurityMonitoringConditionDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_monitoring_conditions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_monitoring_conditions_id` — path `securityMonitoringConditionsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityMonitoringCondition, ApigeeOrganizationsSecurityMonitoringConditionsPatchErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityMonitoringConditionsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `apigee/models/google_cloud_apigee_v1_security_monitoring_condition.py` |
| `GoogleCloudApigeeV1SecurityMonitoringConditionDict` | `apigee/models/google_cloud_apigee_v1_security_monitoring_condition.py` |
| `ApigeeOrganizationsSecurityMonitoringConditionsPatchErrorBody` | `apigee/errors/apigee_organizations_security_monitoring_conditions_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_create

- **Route**: `POST /v1/organizations/{organizationsId}/securityProfiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_create(organizations_id: str, body: GoogleCloudApigeeV1SecurityProfile | GoogleCloudApigeeV1SecurityProfileDict, *, security_profile_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_profile_id` — query `securityProfileId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfile`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfile, ApigeeOrganizationsSecurityProfilesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityProfile` | `apigee/models/google_cloud_apigee_v1_security_profile.py` |
| `GoogleCloudApigeeV1SecurityProfileDict` | `apigee/models/google_cloud_apigee_v1_security_profile.py` |
| `ApigeeOrganizationsSecurityProfilesCreateErrorBody` | `apigee/errors/apigee_organizations_security_profiles_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_delete(organizations_id: str, security_profiles_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsSecurityProfilesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesDeleteErrorBody` | `apigee/errors/apigee_organizations_security_profiles_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_environments_compute_environment_scores

- **Route**: `POST /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}:computeEnvironmentScores`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_environments_compute_environment_scores(organizations_id: str, security_profiles_id: str, environments_id: str, body: GoogleCloudApigeeV1ComputeEnvironmentScoresRequest | GoogleCloudApigeeV1ComputeEnvironmentScoresRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`, `environments_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId` · `environments_id` — path `environmentsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ComputeEnvironmentScoresResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ComputeEnvironmentScoresResponse, ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresRequest` | `apigee/models/google_cloud_apigee_v1_compute_environment_scores_request.py` |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresRequestDict` | `apigee/models/google_cloud_apigee_v1_compute_environment_scores_request.py` |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresResponse` | `apigee/models/google_cloud_apigee_v1_compute_environment_scores_response.py` |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresErrorBody` | `apigee/errors/apigee_organizations_security_profiles_environments_compute_environment_scores_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_environments_create

- **Route**: `POST /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_environments_create(organizations_id: str, security_profiles_id: str, body: GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation | GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation, ApigeeOrganizationsSecurityProfilesEnvironmentsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesEnvironmentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation` | `apigee/models/google_cloud_apigee_v1_security_profile_environment_association.py` |
| `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationDict` | `apigee/models/google_cloud_apigee_v1_security_profile_environment_association.py` |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsCreateErrorBody` | `apigee/errors/apigee_organizations_security_profiles_environments_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_environments_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_environments_delete(organizations_id: str, security_profiles_id: str, environments_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`, `environments_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId` · `environments_id` — path `environmentsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteErrorBody` | `apigee/errors/apigee_organizations_security_profiles_environments_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_get

- **Route**: `GET /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_get(organizations_id: str, security_profiles_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfile`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfile, ApigeeOrganizationsSecurityProfilesGetErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityProfile` | `apigee/models/google_cloud_apigee_v1_security_profile.py` |
| `ApigeeOrganizationsSecurityProfilesGetErrorBody` | `apigee/errors/apigee_organizations_security_profiles_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_list

- **Route**: `GET /v1/organizations/{organizationsId}/securityProfiles`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityProfilesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityProfilesResponse, ApigeeOrganizationsSecurityProfilesListErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityProfilesResponse` | `apigee/models/google_cloud_apigee_v1_list_security_profiles_response.py` |
| `ApigeeOrganizationsSecurityProfilesListErrorBody` | `apigee/errors/apigee_organizations_security_profiles_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_list_revisions

- **Route**: `GET /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}:listRevisions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_list_revisions(organizations_id: str, security_profiles_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse, ApigeeOrganizationsSecurityProfilesListRevisionsErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesListRevisionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse` | `apigee/models/google_cloud_apigee_v1_list_security_profile_revisions_response.py` |
| `ApigeeOrganizationsSecurityProfilesListRevisionsErrorBody` | `apigee/errors/apigee_organizations_security_profiles_list_revisions_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_patch(organizations_id: str, security_profiles_id: str, body: GoogleCloudApigeeV1SecurityProfile | GoogleCloudApigeeV1SecurityProfileDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_id` — path `securityProfilesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfile`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfile, ApigeeOrganizationsSecurityProfilesPatchErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityProfile` | `apigee/models/google_cloud_apigee_v1_security_profile.py` |
| `GoogleCloudApigeeV1SecurityProfileDict` | `apigee/models/google_cloud_apigee_v1_security_profile.py` |
| `ApigeeOrganizationsSecurityProfilesPatchErrorBody` | `apigee/errors/apigee_organizations_security_profiles_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_v2_create

- **Route**: `POST /v1/organizations/{organizationsId}/securityProfilesV2`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_v2_create(organizations_id: str, body: GoogleCloudApigeeV1SecurityProfileV2 | GoogleCloudApigeeV1SecurityProfileV2Dict, *, security_profile_v2_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_profile_v2_id` — query `securityProfileV2Id` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfileV2, ApigeeOrganizationsSecurityProfilesV2CreateErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesV2CreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityProfileV2` | `apigee/models/google_cloud_apigee_v1_security_profile_v2.py` |
| `GoogleCloudApigeeV1SecurityProfileV2Dict` | `apigee/models/google_cloud_apigee_v1_security_profile_v2.py` |
| `ApigeeOrganizationsSecurityProfilesV2CreateErrorBody` | `apigee/errors/apigee_organizations_security_profiles_v2_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_v2_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_v2_delete(organizations_id: str, security_profiles_v2_id: str, *, risk_assessment_type: RiskAssessmentType2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_v2_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_v2_id` — path `securityProfilesV2Id` · `risk_assessment_type` — query `riskAssessmentType`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsSecurityProfilesV2DeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesV2DeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RiskAssessmentType2OrStr` | `apigee/models/enums/risk_assessment_type2.py` |
| `ApigeeOrganizationsSecurityProfilesV2DeleteErrorBody` | `apigee/errors/apigee_organizations_security_profiles_v2_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_v2_get

- **Route**: `GET /v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_v2_get(organizations_id: str, security_profiles_v2_id: str, *, risk_assessment_type: RiskAssessmentType2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_v2_id`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_v2_id` — path `securityProfilesV2Id` · `risk_assessment_type` — query `riskAssessmentType`
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfileV2, ApigeeOrganizationsSecurityProfilesV2GetErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesV2GetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RiskAssessmentType2OrStr` | `apigee/models/enums/risk_assessment_type2.py` |
| `GoogleCloudApigeeV1SecurityProfileV2` | `apigee/models/google_cloud_apigee_v1_security_profile_v2.py` |
| `ApigeeOrganizationsSecurityProfilesV2GetErrorBody` | `apigee/errors/apigee_organizations_security_profiles_v2_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_v2_list

- **Route**: `GET /v1/organizations/{organizationsId}/securityProfilesV2`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_v2_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, risk_assessment_type: RiskAssessmentType2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `risk_assessment_type` — query `riskAssessmentType`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSecurityProfilesV2Response`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSecurityProfilesV2Response, ApigeeOrganizationsSecurityProfilesV2ListErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesV2ListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RiskAssessmentType2OrStr` | `apigee/models/enums/risk_assessment_type2.py` |
| `GoogleCloudApigeeV1ListSecurityProfilesV2Response` | `apigee/models/google_cloud_apigee_v1_list_security_profiles_v2_response.py` |
| `ApigeeOrganizationsSecurityProfilesV2ListErrorBody` | `apigee/errors/apigee_organizations_security_profiles_v2_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_security_profiles_v2_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_security_profiles_v2_patch(organizations_id: str, security_profiles_v2_id: str, body: GoogleCloudApigeeV1SecurityProfileV2 | GoogleCloudApigeeV1SecurityProfileV2Dict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `security_profiles_v2_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `security_profiles_v2_id` — path `securityProfilesV2Id` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecurityProfileV2, ApigeeOrganizationsSecurityProfilesV2PatchErrorBody]`
- **Error**: `ApigeeOrganizationsSecurityProfilesV2PatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecurityProfileV2` | `apigee/models/google_cloud_apigee_v1_security_profile_v2.py` |
| `GoogleCloudApigeeV1SecurityProfileV2Dict` | `apigee/models/google_cloud_apigee_v1_security_profile_v2.py` |
| `ApigeeOrganizationsSecurityProfilesV2PatchErrorBody` | `apigee/errors/apigee_organizations_security_profiles_v2_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_set_addons

- **Route**: `POST /v1/organizations/{organizationsId}:setAddons`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_set_addons(organizations_id: str, body: GoogleCloudApigeeV1SetAddonsRequest | GoogleCloudApigeeV1SetAddonsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsSetAddonsErrorBody]`
- **Error**: `ApigeeOrganizationsSetAddonsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SetAddonsRequest` | `apigee/models/google_cloud_apigee_v1_set_addons_request.py` |
| `GoogleCloudApigeeV1SetAddonsRequestDict` | `apigee/models/google_cloud_apigee_v1_set_addons_request.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsSetAddonsErrorBody` | `apigee/errors/apigee_organizations_set_addons_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_set_sync_authorization

- **Route**: `POST /v1/organizations/{organizationsId}:setSyncAuthorization`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_set_sync_authorization(organizations_id: str, body: GoogleCloudApigeeV1SyncAuthorization | GoogleCloudApigeeV1SyncAuthorizationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SyncAuthorization`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SyncAuthorization, ApigeeOrganizationsSetSyncAuthorizationErrorBody]`
- **Error**: `ApigeeOrganizationsSetSyncAuthorizationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SyncAuthorization` | `apigee/models/google_cloud_apigee_v1_sync_authorization.py` |
| `GoogleCloudApigeeV1SyncAuthorizationDict` | `apigee/models/google_cloud_apigee_v1_sync_authorization.py` |
| `ApigeeOrganizationsSetSyncAuthorizationErrorBody` | `apigee/errors/apigee_organizations_set_sync_authorization_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_create

- **Route**: `POST /v1/organizations/{organizationsId}/sharedflows`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_create(organizations_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, action: str | None = None, name: str | None = None, space: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `action` — query · `name` — query · `space` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SharedFlowRevision, ApigeeOrganizationsSharedflowsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `apigee/models/google_cloud_apigee_v1_shared_flow_revision.py` |
| `ApigeeOrganizationsSharedflowsCreateErrorBody` | `apigee/errors/apigee_organizations_sharedflows_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_delete(organizations_id: str, sharedflows_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SharedFlow`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SharedFlow, ApigeeOrganizationsSharedflowsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SharedFlow` | `apigee/models/google_cloud_apigee_v1_shared_flow.py` |
| `ApigeeOrganizationsSharedflowsDeleteErrorBody` | `apigee/errors/apigee_organizations_sharedflows_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_deployments_list(organizations_id: str, sharedflows_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsSharedflowsDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsSharedflowsDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_sharedflows_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_get

- **Route**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_get(organizations_id: str, sharedflows_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SharedFlow`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SharedFlow, ApigeeOrganizationsSharedflowsGetErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SharedFlow` | `apigee/models/google_cloud_apigee_v1_shared_flow.py` |
| `ApigeeOrganizationsSharedflowsGetErrorBody` | `apigee/errors/apigee_organizations_sharedflows_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_list

- **Route**: `GET /v1/organizations/{organizationsId}/sharedflows`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_list(organizations_id: str, *, include_meta_data: bool | None = None, include_revisions: bool | None = None, space: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `include_meta_data` — query `includeMetaData` · `include_revisions` — query `includeRevisions` · `space` — query
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSharedFlowsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSharedFlowsResponse, ApigeeOrganizationsSharedflowsListErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSharedFlowsResponse` | `apigee/models/google_cloud_apigee_v1_list_shared_flows_response.py` |
| `ApigeeOrganizationsSharedflowsListErrorBody` | `apigee/errors/apigee_organizations_sharedflows_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_move

- **Route**: `POST /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}:move`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_move(organizations_id: str, sharedflows_id: str, body: GoogleCloudApigeeV1MoveSharedFlowRequest | GoogleCloudApigeeV1MoveSharedFlowRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SharedFlow`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SharedFlow, ApigeeOrganizationsSharedflowsMoveErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsMoveErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1MoveSharedFlowRequest` | `apigee/models/google_cloud_apigee_v1_move_shared_flow_request.py` |
| `GoogleCloudApigeeV1MoveSharedFlowRequestDict` | `apigee/models/google_cloud_apigee_v1_move_shared_flow_request.py` |
| `GoogleCloudApigeeV1SharedFlow` | `apigee/models/google_cloud_apigee_v1_shared_flow.py` |
| `ApigeeOrganizationsSharedflowsMoveErrorBody` | `apigee/errors/apigee_organizations_sharedflows_move_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_revisions_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_revisions_delete(organizations_id: str, sharedflows_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SharedFlowRevision, ApigeeOrganizationsSharedflowsRevisionsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsRevisionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SharedFlowRevision` | `apigee/models/google_cloud_apigee_v1_shared_flow_revision.py` |
| `ApigeeOrganizationsSharedflowsRevisionsDeleteErrorBody` | `apigee/errors/apigee_organizations_sharedflows_revisions_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_revisions_deployments_list

- **Route**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_revisions_deployments_list(organizations_id: str, sharedflows_id: str, revisions_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListDeploymentsResponse, ApigeeOrganizationsSharedflowsRevisionsDeploymentsListErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsRevisionsDeploymentsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `apigee/models/google_cloud_apigee_v1_list_deployments_response.py` |
| `ApigeeOrganizationsSharedflowsRevisionsDeploymentsListErrorBody` | `apigee/errors/apigee_organizations_sharedflows_revisions_deployments_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_revisions_get

- **Route**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_revisions_get(organizations_id: str, sharedflows_id: str, revisions_id: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`, `revisions_id`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId` · `format_` — query `format`
- **Returns (parsed)**: `GoogleApiHttpBody`
- **Returns (raw)**: `ApiResult[GoogleApiHttpBody, ApigeeOrganizationsSharedflowsRevisionsGetErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsRevisionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `ApigeeOrganizationsSharedflowsRevisionsGetErrorBody` | `apigee/errors/apigee_organizations_sharedflows_revisions_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sharedflows_revisions_update_shared_flow_revision

- **Route**: `POST /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sharedflows_revisions_update_shared_flow_revision(organizations_id: str, sharedflows_id: str, revisions_id: str, body: GoogleApiHttpBody | GoogleApiHttpBodyDict, *, validate: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sharedflows_id`, `revisions_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sharedflows_id` — path `sharedflowsId` · `revisions_id` — path `revisionsId` · `validate` — query · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SharedFlowRevision, ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionErrorBody]`
- **Error**: `ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleApiHttpBody` | `apigee/models/google_api_http_body.py` |
| `GoogleApiHttpBodyDict` | `apigee/models/google_api_http_body.py` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `apigee/models/google_cloud_apigee_v1_shared_flow_revision.py` |
| `ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionErrorBody` | `apigee/errors/apigee_organizations_sharedflows_revisions_update_shared_flow_revision_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apicategories_create

- **Route**: `POST /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apicategories_create(organizations_id: str, sites_id: str, body: GoogleCloudApigeeV1ApiCategory | GoogleCloudApigeeV1ApiCategoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiCategoryResponse, ApigeeOrganizationsSitesApicategoriesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApicategoriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiCategory` | `apigee/models/google_cloud_apigee_v1_api_category.py` |
| `GoogleCloudApigeeV1ApiCategoryDict` | `apigee/models/google_cloud_apigee_v1_api_category.py` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `apigee/models/google_cloud_apigee_v1_api_category_response.py` |
| `ApigeeOrganizationsSitesApicategoriesCreateErrorBody` | `apigee/errors/apigee_organizations_sites_apicategories_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apicategories_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apicategories_delete(organizations_id: str, sites_id: str, apicategories_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apicategories_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apicategories_id` — path `apicategoriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeleteResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeleteResponse, ApigeeOrganizationsSitesApicategoriesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApicategoriesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeleteResponse` | `apigee/models/google_cloud_apigee_v1_delete_response.py` |
| `ApigeeOrganizationsSitesApicategoriesDeleteErrorBody` | `apigee/errors/apigee_organizations_sites_apicategories_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apicategories_get

- **Route**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apicategories_get(organizations_id: str, sites_id: str, apicategories_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apicategories_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apicategories_id` — path `apicategoriesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiCategoryResponse, ApigeeOrganizationsSitesApicategoriesGetErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApicategoriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `apigee/models/google_cloud_apigee_v1_api_category_response.py` |
| `ApigeeOrganizationsSitesApicategoriesGetErrorBody` | `apigee/errors/apigee_organizations_sites_apicategories_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apicategories_list

- **Route**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apicategories_list(organizations_id: str, sites_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListApiCategoriesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListApiCategoriesResponse, ApigeeOrganizationsSitesApicategoriesListErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApicategoriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListApiCategoriesResponse` | `apigee/models/google_cloud_apigee_v1_list_api_categories_response.py` |
| `ApigeeOrganizationsSitesApicategoriesListErrorBody` | `apigee/errors/apigee_organizations_sites_apicategories_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apicategories_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apicategories_patch(organizations_id: str, sites_id: str, apicategories_id: str, body: GoogleCloudApigeeV1ApiCategory | GoogleCloudApigeeV1ApiCategoryDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apicategories_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apicategories_id` — path `apicategoriesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiCategoryResponse, ApigeeOrganizationsSitesApicategoriesPatchErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApicategoriesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiCategory` | `apigee/models/google_cloud_apigee_v1_api_category.py` |
| `GoogleCloudApigeeV1ApiCategoryDict` | `apigee/models/google_cloud_apigee_v1_api_category.py` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `apigee/models/google_cloud_apigee_v1_api_category_response.py` |
| `ApigeeOrganizationsSitesApicategoriesPatchErrorBody` | `apigee/errors/apigee_organizations_sites_apicategories_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_create

- **Route**: `POST /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_create(organizations_id: str, sites_id: str, body: GoogleCloudApigeeV1ApiDoc | GoogleCloudApigeeV1ApiDocDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiDocResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiDocResponse, ApigeeOrganizationsSitesApidocsCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiDoc` | `apigee/models/google_cloud_apigee_v1_api_doc.py` |
| `GoogleCloudApigeeV1ApiDocDict` | `apigee/models/google_cloud_apigee_v1_api_doc.py` |
| `GoogleCloudApigeeV1ApiDocResponse` | `apigee/models/google_cloud_apigee_v1_api_doc_response.py` |
| `ApigeeOrganizationsSitesApidocsCreateErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_delete(organizations_id: str, sites_id: str, apidocs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apidocs_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apidocs_id` — path `apidocsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1DeleteResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1DeleteResponse, ApigeeOrganizationsSitesApidocsDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1DeleteResponse` | `apigee/models/google_cloud_apigee_v1_delete_response.py` |
| `ApigeeOrganizationsSitesApidocsDeleteErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_get

- **Route**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_get(organizations_id: str, sites_id: str, apidocs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apidocs_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apidocs_id` — path `apidocsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiDocResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiDocResponse, ApigeeOrganizationsSitesApidocsGetErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiDocResponse` | `apigee/models/google_cloud_apigee_v1_api_doc_response.py` |
| `ApigeeOrganizationsSitesApidocsGetErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_get_documentation

- **Route**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_get_documentation(organizations_id: str, sites_id: str, apidocs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apidocs_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apidocs_id` — path `apidocsId`
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiDocDocumentationResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiDocDocumentationResponse, ApigeeOrganizationsSitesApidocsGetDocumentationErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsGetDocumentationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiDocDocumentationResponse` | `apigee/models/google_cloud_apigee_v1_api_doc_documentation_response.py` |
| `ApigeeOrganizationsSitesApidocsGetDocumentationErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_get_documentation_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_list

- **Route**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_list(organizations_id: str, sites_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListApiDocsResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListApiDocsResponse, ApigeeOrganizationsSitesApidocsListErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListApiDocsResponse` | `apigee/models/google_cloud_apigee_v1_list_api_docs_response.py` |
| `ApigeeOrganizationsSitesApidocsListErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_update

- **Route**: `PUT /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_update(organizations_id: str, sites_id: str, apidocs_id: str, body: GoogleCloudApigeeV1ApiDoc | GoogleCloudApigeeV1ApiDocDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apidocs_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apidocs_id` — path `apidocsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiDocResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiDocResponse, ApigeeOrganizationsSitesApidocsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiDoc` | `apigee/models/google_cloud_apigee_v1_api_doc.py` |
| `GoogleCloudApigeeV1ApiDocDict` | `apigee/models/google_cloud_apigee_v1_api_doc.py` |
| `GoogleCloudApigeeV1ApiDocResponse` | `apigee/models/google_cloud_apigee_v1_api_doc_response.py` |
| `ApigeeOrganizationsSitesApidocsUpdateErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_sites_apidocs_update_documentation

- **Route**: `PATCH /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_sites_apidocs_update_documentation(organizations_id: str, sites_id: str, apidocs_id: str, body: GoogleCloudApigeeV1ApiDocDocumentation | GoogleCloudApigeeV1ApiDocDocumentationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `sites_id`, `apidocs_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `sites_id` — path `sitesId` · `apidocs_id` — path `apidocsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1ApiDocDocumentationResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ApiDocDocumentationResponse, ApigeeOrganizationsSitesApidocsUpdateDocumentationErrorBody]`
- **Error**: `ApigeeOrganizationsSitesApidocsUpdateDocumentationErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ApiDocDocumentation` | `apigee/models/google_cloud_apigee_v1_api_doc_documentation.py` |
| `GoogleCloudApigeeV1ApiDocDocumentationDict` | `apigee/models/google_cloud_apigee_v1_api_doc_documentation.py` |
| `GoogleCloudApigeeV1ApiDocDocumentationResponse` | `apigee/models/google_cloud_apigee_v1_api_doc_documentation_response.py` |
| `ApigeeOrganizationsSitesApidocsUpdateDocumentationErrorBody` | `apigee/errors/apigee_organizations_sites_apidocs_update_documentation_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_create

- **Route**: `POST /v1/organizations/{organizationsId}/spaces`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_create(organizations_id: str, body: GoogleCloudApigeeV1Space | GoogleCloudApigeeV1SpaceDict, *, space_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `space_id` — query `spaceId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Space`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Space, ApigeeOrganizationsSpacesCreateErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Space` | `apigee/models/google_cloud_apigee_v1_space.py` |
| `GoogleCloudApigeeV1SpaceDict` | `apigee/models/google_cloud_apigee_v1_space.py` |
| `ApigeeOrganizationsSpacesCreateErrorBody` | `apigee/errors/apigee_organizations_spaces_create_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_delete

- **Route**: `DELETE /v1/organizations/{organizationsId}/spaces/{spacesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_delete(organizations_id: str, spaces_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `spaces_id`
- **Params**: `organizations_id` — path `organizationsId` · `spaces_id` — path `spacesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ApigeeOrganizationsSpacesDeleteErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesDeleteErrorBody` | `apigee/errors/apigee_organizations_spaces_delete_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_get

- **Route**: `GET /v1/organizations/{organizationsId}/spaces/{spacesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_get(organizations_id: str, spaces_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `spaces_id`
- **Params**: `organizations_id` — path `organizationsId` · `spaces_id` — path `spacesId`
- **Returns (parsed)**: `GoogleCloudApigeeV1Space`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Space, ApigeeOrganizationsSpacesGetErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Space` | `apigee/models/google_cloud_apigee_v1_space.py` |
| `ApigeeOrganizationsSpacesGetErrorBody` | `apigee/errors/apigee_organizations_spaces_get_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_get_iam_policy

- **Route**: `GET /v1/organizations/{organizationsId}/spaces/{spacesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_get_iam_policy(organizations_id: str, spaces_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `spaces_id`
- **Params**: `organizations_id` — path `organizationsId` · `spaces_id` — path `spacesId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `GoogleIamV1Policy`
- **Returns (raw)**: `ApiResult[GoogleIamV1Policy, ApigeeOrganizationsSpacesGetIamPolicyErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1Policy` | `apigee/models/google_iam_v1_policy.py` |
| `ApigeeOrganizationsSpacesGetIamPolicyErrorBody` | `apigee/errors/apigee_organizations_spaces_get_iam_policy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_list

- **Route**: `GET /v1/organizations/{organizationsId}/spaces`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_list(organizations_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`
- **Params**: `organizations_id` — path `organizationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `GoogleCloudApigeeV1ListSpacesResponse`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1ListSpacesResponse, ApigeeOrganizationsSpacesListErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListSpacesResponse` | `apigee/models/google_cloud_apigee_v1_list_spaces_response.py` |
| `ApigeeOrganizationsSpacesListErrorBody` | `apigee/errors/apigee_organizations_spaces_list_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_patch

- **Route**: `PATCH /v1/organizations/{organizationsId}/spaces/{spacesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_patch(organizations_id: str, spaces_id: str, body: GoogleCloudApigeeV1Space | GoogleCloudApigeeV1SpaceDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `spaces_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `spaces_id` — path `spacesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Space`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Space, ApigeeOrganizationsSpacesPatchErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Space` | `apigee/models/google_cloud_apigee_v1_space.py` |
| `GoogleCloudApigeeV1SpaceDict` | `apigee/models/google_cloud_apigee_v1_space.py` |
| `ApigeeOrganizationsSpacesPatchErrorBody` | `apigee/errors/apigee_organizations_spaces_patch_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_set_iam_policy

- **Route**: `POST /v1/organizations/{organizationsId}/spaces/{spacesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_set_iam_policy(organizations_id: str, spaces_id: str, body: GoogleIamV1SetIamPolicyRequest | GoogleIamV1SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `spaces_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `spaces_id` — path `spacesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleIamV1Policy`
- **Returns (raw)**: `ApiResult[GoogleIamV1Policy, ApigeeOrganizationsSpacesSetIamPolicyErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1SetIamPolicyRequest` | `apigee/models/google_iam_v1_set_iam_policy_request.py` |
| `GoogleIamV1SetIamPolicyRequestDict` | `apigee/models/google_iam_v1_set_iam_policy_request.py` |
| `GoogleIamV1Policy` | `apigee/models/google_iam_v1_policy.py` |
| `ApigeeOrganizationsSpacesSetIamPolicyErrorBody` | `apigee/errors/apigee_organizations_spaces_set_iam_policy_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_spaces_test_iam_permissions

- **Route**: `POST /v1/organizations/{organizationsId}/spaces/{spacesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_spaces_test_iam_permissions(organizations_id: str, spaces_id: str, body: GoogleIamV1TestIamPermissionsRequest | GoogleIamV1TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `spaces_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `spaces_id` — path `spacesId` · `body` — JSON body
- **Returns (parsed)**: `GoogleIamV1TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[GoogleIamV1TestIamPermissionsResponse, ApigeeOrganizationsSpacesTestIamPermissionsErrorBody]`
- **Error**: `ApigeeOrganizationsSpacesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleIamV1TestIamPermissionsRequest` | `apigee/models/google_iam_v1_test_iam_permissions_request.py` |
| `GoogleIamV1TestIamPermissionsRequestDict` | `apigee/models/google_iam_v1_test_iam_permissions_request.py` |
| `GoogleIamV1TestIamPermissionsResponse` | `apigee/models/google_iam_v1_test_iam_permissions_response.py` |
| `ApigeeOrganizationsSpacesTestIamPermissionsErrorBody` | `apigee/errors/apigee_organizations_spaces_test_iam_permissions_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_update

- **Route**: `PUT /v1/organizations/{organizationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_update(organizations_id: str, body: GoogleCloudApigeeV1Organization | GoogleCloudApigeeV1OrganizationDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1Organization`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1Organization, ApigeeOrganizationsUpdateErrorBody]`
- **Error**: `ApigeeOrganizationsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1Organization` | `apigee/models/google_cloud_apigee_v1_organization.py` |
| `GoogleCloudApigeeV1OrganizationDict` | `apigee/models/google_cloud_apigee_v1_organization.py` |
| `ApigeeOrganizationsUpdateErrorBody` | `apigee/errors/apigee_organizations_update_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_update_control_plane_access

- **Route**: `PATCH /v1/organizations/{organizationsId}/controlPlaneAccess`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_update_control_plane_access(organizations_id: str, body: GoogleCloudApigeeV1ControlPlaneAccess | GoogleCloudApigeeV1ControlPlaneAccessDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleLongrunningOperation`
- **Returns (raw)**: `ApiResult[GoogleLongrunningOperation, ApigeeOrganizationsUpdateControlPlaneAccessErrorBody]`
- **Error**: `ApigeeOrganizationsUpdateControlPlaneAccessErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ControlPlaneAccess` | `apigee/models/google_cloud_apigee_v1_control_plane_access.py` |
| `GoogleCloudApigeeV1ControlPlaneAccessDict` | `apigee/models/google_cloud_apigee_v1_control_plane_access.py` |
| `GoogleLongrunningOperation` | `apigee/models/google_longrunning_operation.py` |
| `ApigeeOrganizationsUpdateControlPlaneAccessErrorBody` | `apigee/errors/apigee_organizations_update_control_plane_access_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

### client.organizations.apigee_organizations_update_security_settings

- **Route**: `PATCH /v1/organizations/{organizationsId}/securitySettings`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def apigee_organizations_update_security_settings(organizations_id: str, body: GoogleCloudApigeeV1SecuritySettings | GoogleCloudApigeeV1SecuritySettingsDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organizations_id`, `body`
- **Params**: `organizations_id` — path `organizationsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `GoogleCloudApigeeV1SecuritySettings`
- **Returns (raw)**: `ApiResult[GoogleCloudApigeeV1SecuritySettings, ApigeeOrganizationsUpdateSecuritySettingsErrorBody]`
- **Error**: `ApigeeOrganizationsUpdateSecuritySettingsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1SecuritySettings` | `apigee/models/google_cloud_apigee_v1_security_settings.py` |
| `GoogleCloudApigeeV1SecuritySettingsDict` | `apigee/models/google_cloud_apigee_v1_security_settings.py` |
| `ApigeeOrganizationsUpdateSecuritySettingsErrorBody` | `apigee/errors/apigee_organizations_update_security_settings_error.py` |
| `GoogleRpcError` | `apigee/models/google_rpc_error.py` |

