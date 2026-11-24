<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.organizations` · Source: `src/resources/organizations.ts` · 372 operations · Request and error types: namespace `Organizations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apigee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apigeeOrganizationsAnalyticsDatastoresCreate

- **Signature**: `apigeeOrganizationsAnalyticsDatastoresCreate(request: Organizations.ApigeeOrganizationsAnalyticsDatastoresCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Datastore, Organizations.ApigeeOrganizationsAnalyticsDatastoresCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/analytics/datastores`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Datastore`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAnalyticsDatastoresCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAnalyticsDatastoresCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Datastore` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Datastore` | `googleCloudApigeeV1DatastoreSchema` | `src/models/google-cloud-apigee-v1-datastore.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAnalyticsDatastoresDelete

- **Signature**: `apigeeOrganizationsAnalyticsDatastoresDelete(request: Organizations.ApigeeOrganizationsAnalyticsDatastoresDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsAnalyticsDatastoresDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAnalyticsDatastoresDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAnalyticsDatastoresDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `datastoresId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAnalyticsDatastoresGet

- **Signature**: `apigeeOrganizationsAnalyticsDatastoresGet(request: Organizations.ApigeeOrganizationsAnalyticsDatastoresGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Datastore, Organizations.ApigeeOrganizationsAnalyticsDatastoresGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Datastore`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAnalyticsDatastoresGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAnalyticsDatastoresGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `datastoresId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Datastore` | `googleCloudApigeeV1DatastoreSchema` | `src/models/google-cloud-apigee-v1-datastore.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAnalyticsDatastoresList

- **Signature**: `apigeeOrganizationsAnalyticsDatastoresList(request: Organizations.ApigeeOrganizationsAnalyticsDatastoresListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDatastoresResponse, Organizations.ApigeeOrganizationsAnalyticsDatastoresListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/analytics/datastores`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDatastoresResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAnalyticsDatastoresListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAnalyticsDatastoresListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `targetType` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDatastoresResponse` | `googleCloudApigeeV1ListDatastoresResponseSchema` | `src/models/google-cloud-apigee-v1-list-datastores-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAnalyticsDatastoresTest

- **Signature**: `apigeeOrganizationsAnalyticsDatastoresTest(request: Organizations.ApigeeOrganizationsAnalyticsDatastoresTestRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TestDatastoreResponse, Organizations.ApigeeOrganizationsAnalyticsDatastoresTestError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/analytics/datastores:test`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TestDatastoreResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAnalyticsDatastoresTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAnalyticsDatastoresTestRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Datastore` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Datastore` | `googleCloudApigeeV1DatastoreSchema` | `src/models/google-cloud-apigee-v1-datastore.ts` |
| `GoogleCloudApigeeV1TestDatastoreResponse` | `googleCloudApigeeV1TestDatastoreResponseSchema` | `src/models/google-cloud-apigee-v1-test-datastore-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAnalyticsDatastoresUpdate

- **Signature**: `apigeeOrganizationsAnalyticsDatastoresUpdate(request: Organizations.ApigeeOrganizationsAnalyticsDatastoresUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Datastore, Organizations.ApigeeOrganizationsAnalyticsDatastoresUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/analytics/datastores/{datastoresId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Datastore`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAnalyticsDatastoresUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAnalyticsDatastoresUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `datastoresId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Datastore` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Datastore` | `googleCloudApigeeV1DatastoreSchema` | `src/models/google-cloud-apigee-v1-datastore.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApimServiceExtensionsCreate

- **Signature**: `apigeeOrganizationsApimServiceExtensionsCreate(request: Organizations.ApigeeOrganizationsApimServiceExtensionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsApimServiceExtensionsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apimServiceExtensions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApimServiceExtensionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApimServiceExtensionsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apimServiceExtensionId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1ApimServiceExtension` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApimServiceExtension` | `googleCloudApigeeV1ApimServiceExtensionSchema` | `src/models/google-cloud-apigee-v1-apim-service-extension.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApimServiceExtensionsDelete

- **Signature**: `apigeeOrganizationsApimServiceExtensionsDelete(request: Organizations.ApigeeOrganizationsApimServiceExtensionsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsApimServiceExtensionsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApimServiceExtensionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApimServiceExtensionsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apimServiceExtensionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApimServiceExtensionsGet

- **Signature**: `apigeeOrganizationsApimServiceExtensionsGet(request: Organizations.ApigeeOrganizationsApimServiceExtensionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApimServiceExtension, Organizations.ApigeeOrganizationsApimServiceExtensionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApimServiceExtension`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApimServiceExtensionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApimServiceExtensionsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apimServiceExtensionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApimServiceExtension` | `googleCloudApigeeV1ApimServiceExtensionSchema` | `src/models/google-cloud-apigee-v1-apim-service-extension.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApimServiceExtensionsList

- **Signature**: `apigeeOrganizationsApimServiceExtensionsList(request: Organizations.ApigeeOrganizationsApimServiceExtensionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListApimServiceExtensionsResponse, Organizations.ApigeeOrganizationsApimServiceExtensionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apimServiceExtensions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListApimServiceExtensionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApimServiceExtensionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApimServiceExtensionsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListApimServiceExtensionsResponse` | `googleCloudApigeeV1ListApimServiceExtensionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-apim-service-extensions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApimServiceExtensionsPatch

- **Signature**: `apigeeOrganizationsApimServiceExtensionsPatch(request: Organizations.ApigeeOrganizationsApimServiceExtensionsPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsApimServiceExtensionsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/apimServiceExtensions/{apimServiceExtensionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApimServiceExtensionsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApimServiceExtensionsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apimServiceExtensionsId` | `path` | `string` | yes |
| `allowMissing` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1ApimServiceExtension` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApimServiceExtension` | `googleCloudApigeeV1ApimServiceExtensionSchema` | `src/models/google-cloud-apigee-v1-apim-service-extension.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsAttributes

- **Signature**: `apigeeOrganizationsApiproductsAttributes(request: Organizations.ApigeeOrganizationsApiproductsAttributesRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attributes, Organizations.ApigeeOrganizationsApiproductsAttributesError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsAttributesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Attributes` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attributes` | `googleCloudApigeeV1AttributesSchema` | `src/models/google-cloud-apigee-v1-attributes.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsAttributesDelete

- **Signature**: `apigeeOrganizationsApiproductsAttributesDelete(request: Organizations.ApigeeOrganizationsApiproductsAttributesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsApiproductsAttributesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsAttributesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsAttributesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsAttributesGet

- **Signature**: `apigeeOrganizationsApiproductsAttributesGet(request: Organizations.ApigeeOrganizationsApiproductsAttributesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsApiproductsAttributesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsAttributesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsAttributesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsAttributesList

- **Signature**: `apigeeOrganizationsApiproductsAttributesList(request: Organizations.ApigeeOrganizationsApiproductsAttributesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attributes, Organizations.ApigeeOrganizationsApiproductsAttributesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsAttributesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsAttributesListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attributes` | `googleCloudApigeeV1AttributesSchema` | `src/models/google-cloud-apigee-v1-attributes.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute

- **Signature**: `apigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute(request: Organizations.ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Attribute` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsCreate

- **Signature**: `apigeeOrganizationsApiproductsCreate(request: Organizations.ApigeeOrganizationsApiproductsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProduct, Organizations.ApigeeOrganizationsApiproductsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apiproducts`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiProduct` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `googleCloudApigeeV1ApiProductSchema` | `src/models/google-cloud-apigee-v1-api-product.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsDelete

- **Signature**: `apigeeOrganizationsApiproductsDelete(request: Organizations.ApigeeOrganizationsApiproductsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProduct, Organizations.ApigeeOrganizationsApiproductsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `googleCloudApigeeV1ApiProductSchema` | `src/models/google-cloud-apigee-v1-api-product.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsGet

- **Signature**: `apigeeOrganizationsApiproductsGet(request: Organizations.ApigeeOrganizationsApiproductsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProduct, Organizations.ApigeeOrganizationsApiproductsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `googleCloudApigeeV1ApiProductSchema` | `src/models/google-cloud-apigee-v1-api-product.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsList

- **Signature**: `apigeeOrganizationsApiproductsList(request: Organizations.ApigeeOrganizationsApiproductsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListApiProductsResponse, Organizations.ApigeeOrganizationsApiproductsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apiproducts`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListApiProductsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `attributename` | `query` | `string` | no |
| `attributevalue` | `query` | `string` | no |
| `count` | `query` | `string` | no |
| `expand` | `query` | `boolean` | no |
| `space` | `query` | `string` | no |
| `startKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListApiProductsResponse` | `googleCloudApigeeV1ListApiProductsResponseSchema` | `src/models/google-cloud-apigee-v1-list-api-products-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsMove

- **Signature**: `apigeeOrganizationsApiproductsMove(request: Organizations.ApigeeOrganizationsApiproductsMoveRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProduct, Organizations.ApigeeOrganizationsApiproductsMoveError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}:move`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsMoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsMoveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1MoveApiProductRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1MoveApiProductRequest` | `googleCloudApigeeV1MoveApiProductRequestSchema` | `src/models/google-cloud-apigee-v1-move-api-product-request.ts` |
| `GoogleCloudApigeeV1ApiProduct` | `googleCloudApigeeV1ApiProductSchema` | `src/models/google-cloud-apigee-v1-api-product.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsRateplansCreate

- **Signature**: `apigeeOrganizationsApiproductsRateplansCreate(request: Organizations.ApigeeOrganizationsApiproductsRateplansCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1RatePlan, Organizations.ApigeeOrganizationsApiproductsRateplansCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsRateplansCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsRateplansCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1RatePlan` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `googleCloudApigeeV1RatePlanSchema` | `src/models/google-cloud-apigee-v1-rate-plan.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsRateplansDelete

- **Signature**: `apigeeOrganizationsApiproductsRateplansDelete(request: Organizations.ApigeeOrganizationsApiproductsRateplansDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1RatePlan, Organizations.ApigeeOrganizationsApiproductsRateplansDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsRateplansDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsRateplansDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `rateplansId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `googleCloudApigeeV1RatePlanSchema` | `src/models/google-cloud-apigee-v1-rate-plan.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsRateplansGet

- **Signature**: `apigeeOrganizationsApiproductsRateplansGet(request: Organizations.ApigeeOrganizationsApiproductsRateplansGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1RatePlan, Organizations.ApigeeOrganizationsApiproductsRateplansGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsRateplansGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsRateplansGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `rateplansId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `googleCloudApigeeV1RatePlanSchema` | `src/models/google-cloud-apigee-v1-rate-plan.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsRateplansList

- **Signature**: `apigeeOrganizationsApiproductsRateplansList(request: Organizations.ApigeeOrganizationsApiproductsRateplansListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListRatePlansResponse, Organizations.ApigeeOrganizationsApiproductsRateplansListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListRatePlansResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsRateplansListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsRateplansListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `count` | `query` | `number` | no |
| `expand` | `query` | `boolean` | no |
| `orderBy` | `query` | `string` | no |
| `startKey` | `query` | `string` | no |
| `state` | `query` | `State13` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `State13` | `state13Schema` | `src/models/state13.ts` |
| `GoogleCloudApigeeV1ListRatePlansResponse` | `googleCloudApigeeV1ListRatePlansResponseSchema` | `src/models/google-cloud-apigee-v1-list-rate-plans-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsRateplansUpdate

- **Signature**: `apigeeOrganizationsApiproductsRateplansUpdate(request: Organizations.ApigeeOrganizationsApiproductsRateplansUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1RatePlan, Organizations.ApigeeOrganizationsApiproductsRateplansUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans/{rateplansId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsRateplansUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsRateplansUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `rateplansId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1RatePlan` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1RatePlan` | `googleCloudApigeeV1RatePlanSchema` | `src/models/google-cloud-apigee-v1-rate-plan.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApiproductsUpdate

- **Signature**: `apigeeOrganizationsApiproductsUpdate(request: Organizations.ApigeeOrganizationsApiproductsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProduct, Organizations.ApigeeOrganizationsApiproductsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApiproductsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApiproductsUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiProduct` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProduct` | `googleCloudApigeeV1ApiProductSchema` | `src/models/google-cloud-apigee-v1-api-product.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisCreate

- **Signature**: `apigeeOrganizationsApisCreate(request: Organizations.ApigeeOrganizationsApisCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxyRevision, Organizations.ApigeeOrganizationsApisCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `space` | `query` | `string` | no |
| `validate` | `query` | `boolean` | no |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `googleCloudApigeeV1ApiProxyRevisionSchema` | `src/models/google-cloud-apigee-v1-api-proxy-revision.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisDebugsessionsList

- **Signature**: `apigeeOrganizationsApisDebugsessionsList(request: Organizations.ApigeeOrganizationsApisDebugsessionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListApiDebugSessionsResponse, Organizations.ApigeeOrganizationsApisDebugsessionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/debugsessions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListApiDebugSessionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisDebugsessionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisDebugsessionsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListApiDebugSessionsResponse` | `googleCloudApigeeV1ListApiDebugSessionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-api-debug-sessions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisDelete

- **Signature**: `apigeeOrganizationsApisDelete(request: Organizations.ApigeeOrganizationsApisDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxy, Organizations.ApigeeOrganizationsApisDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProxy` | `googleCloudApigeeV1ApiProxySchema` | `src/models/google-cloud-apigee-v1-api-proxy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisDeploymentsList

- **Signature**: `apigeeOrganizationsApisDeploymentsList(request: Organizations.ApigeeOrganizationsApisDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsApisDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisDeploymentsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisGet

- **Signature**: `apigeeOrganizationsApisGet(request: Organizations.ApigeeOrganizationsApisGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxy, Organizations.ApigeeOrganizationsApisGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProxy` | `googleCloudApigeeV1ApiProxySchema` | `src/models/google-cloud-apigee-v1-api-proxy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsCreate

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsCreate(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsApisKeyvaluemapsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueMap` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsDelete

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsDelete(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsApisKeyvaluemapsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsEntriesCreate

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsEntriesCreate(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsEntriesDelete

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsEntriesDelete(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsEntriesGet

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsEntriesGet(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsEntriesList

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsEntriesList(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListKeyValueEntriesResponse, Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `googleCloudApigeeV1ListKeyValueEntriesResponseSchema` | `src/models/google-cloud-apigee-v1-list-key-value-entries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsEntriesUpdate

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsEntriesUpdate(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsGet

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsGet(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsApisKeyvaluemapsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisKeyvaluemapsUpdate

- **Signature**: `apigeeOrganizationsApisKeyvaluemapsUpdate(request: Organizations.ApigeeOrganizationsApisKeyvaluemapsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsApisKeyvaluemapsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisKeyvaluemapsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisKeyvaluemapsUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueMap` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisList

- **Signature**: `apigeeOrganizationsApisList(request: Organizations.ApigeeOrganizationsApisListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListApiProxiesResponse, Organizations.ApigeeOrganizationsApisListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListApiProxiesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `includeMetaData` | `query` | `boolean` | no |
| `includeRevisions` | `query` | `boolean` | no |
| `space` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListApiProxiesResponse` | `googleCloudApigeeV1ListApiProxiesResponseSchema` | `src/models/google-cloud-apigee-v1-list-api-proxies-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisMove

- **Signature**: `apigeeOrganizationsApisMove(request: Organizations.ApigeeOrganizationsApisMoveRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxy, Organizations.ApigeeOrganizationsApisMoveError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apis/{apisId}:move`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisMoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisMoveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1MoveApiProxyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1MoveApiProxyRequest` | `googleCloudApigeeV1MoveApiProxyRequestSchema` | `src/models/google-cloud-apigee-v1-move-api-proxy-request.ts` |
| `GoogleCloudApigeeV1ApiProxy` | `googleCloudApigeeV1ApiProxySchema` | `src/models/google-cloud-apigee-v1-api-proxy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisPatch

- **Signature**: `apigeeOrganizationsApisPatch(request: Organizations.ApigeeOrganizationsApisPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxy, Organizations.ApigeeOrganizationsApisPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/apis/{apisId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1ApiProxy` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProxy` | `googleCloudApigeeV1ApiProxySchema` | `src/models/google-cloud-apigee-v1-api-proxy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisRevisionsDelete

- **Signature**: `apigeeOrganizationsApisRevisionsDelete(request: Organizations.ApigeeOrganizationsApisRevisionsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxyRevision, Organizations.ApigeeOrganizationsApisRevisionsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisRevisionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisRevisionsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiProxyRevision` | `googleCloudApigeeV1ApiProxyRevisionSchema` | `src/models/google-cloud-apigee-v1-api-proxy-revision.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisRevisionsDeploymentsList

- **Signature**: `apigeeOrganizationsApisRevisionsDeploymentsList(request: Organizations.ApigeeOrganizationsApisRevisionsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsApisRevisionsDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisRevisionsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisRevisionsDeploymentsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisRevisionsGet

- **Signature**: `apigeeOrganizationsApisRevisionsGet(request: Organizations.ApigeeOrganizationsApisRevisionsGetRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsApisRevisionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisRevisionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisRevisionsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsApisRevisionsUpdateApiProxyRevision

- **Signature**: `apigeeOrganizationsApisRevisionsUpdateApiProxyRevision(request: Organizations.ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiProxyRevision, Organizations.ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/apis/{apisId}/revisions/{revisionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `validate` | `query` | `boolean` | no |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `googleCloudApigeeV1ApiProxyRevisionSchema` | `src/models/google-cloud-apigee-v1-api-proxy-revision.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsCreate

- **Signature**: `apigeeOrganizationsAppgroupsAppsCreate(request: Organizations.ApigeeOrganizationsAppgroupsAppsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupApp, Organizations.ApigeeOrganizationsAppgroupsAppsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AppGroupApp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `googleCloudApigeeV1AppGroupAppSchema` | `src/models/google-cloud-apigee-v1-app-group-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsDelete

- **Signature**: `apigeeOrganizationsAppgroupsAppsDelete(request: Organizations.ApigeeOrganizationsAppgroupsAppsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupApp, Organizations.ApigeeOrganizationsAppgroupsAppsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `googleCloudApigeeV1AppGroupAppSchema` | `src/models/google-cloud-apigee-v1-app-group-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsGet

- **Signature**: `apigeeOrganizationsAppgroupsAppsGet(request: Organizations.ApigeeOrganizationsAppgroupsAppsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupApp, Organizations.ApigeeOrganizationsAppgroupsAppsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `googleCloudApigeeV1AppGroupAppSchema` | `src/models/google-cloud-apigee-v1-app-group-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsKeysApiproductsDelete

- **Signature**: `apigeeOrganizationsAppgroupsAppsKeysApiproductsDelete(request: Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupAppKey, Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `googleCloudApigeeV1AppGroupAppKeySchema` | `src/models/google-cloud-apigee-v1-app-group-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct

- **Signature**: `apigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct(request: Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsKeysCreate

- **Signature**: `apigeeOrganizationsAppgroupsAppsKeysCreate(request: Organizations.ApigeeOrganizationsAppgroupsAppsKeysCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupAppKey, Organizations.ApigeeOrganizationsAppgroupsAppsKeysCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsKeysCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsKeysCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AppGroupAppKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `googleCloudApigeeV1AppGroupAppKeySchema` | `src/models/google-cloud-apigee-v1-app-group-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsKeysDelete

- **Signature**: `apigeeOrganizationsAppgroupsAppsKeysDelete(request: Organizations.ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupAppKey, Organizations.ApigeeOrganizationsAppgroupsAppsKeysDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsKeysDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `googleCloudApigeeV1AppGroupAppKeySchema` | `src/models/google-cloud-apigee-v1-app-group-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsKeysGet

- **Signature**: `apigeeOrganizationsAppgroupsAppsKeysGet(request: Organizations.ApigeeOrganizationsAppgroupsAppsKeysGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupAppKey, Organizations.ApigeeOrganizationsAppgroupsAppsKeysGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsKeysGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsKeysGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupAppKey` | `googleCloudApigeeV1AppGroupAppKeySchema` | `src/models/google-cloud-apigee-v1-app-group-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey

- **Signature**: `apigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey(request: Organizations.ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupAppKey, Organizations.ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest` | `googleCloudApigeeV1UpdateAppGroupAppKeyRequestSchema` | `src/models/google-cloud-apigee-v1-update-app-group-app-key-request.ts` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `googleCloudApigeeV1AppGroupAppKeySchema` | `src/models/google-cloud-apigee-v1-app-group-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsList

- **Signature**: `apigeeOrganizationsAppgroupsAppsList(request: Organizations.ApigeeOrganizationsAppgroupsAppsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListAppGroupAppsResponse, Organizations.ApigeeOrganizationsAppgroupsAppsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListAppGroupAppsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListAppGroupAppsResponse` | `googleCloudApigeeV1ListAppGroupAppsResponseSchema` | `src/models/google-cloud-apigee-v1-list-app-group-apps-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsAppsUpdate

- **Signature**: `apigeeOrganizationsAppgroupsAppsUpdate(request: Organizations.ApigeeOrganizationsAppgroupsAppsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupApp, Organizations.ApigeeOrganizationsAppgroupsAppsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsAppsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsAppsUpdateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1AppGroupApp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupApp` | `googleCloudApigeeV1AppGroupAppSchema` | `src/models/google-cloud-apigee-v1-app-group-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsBalanceAdjust

- **Signature**: `apigeeOrganizationsAppgroupsBalanceAdjust(request: Organizations.ApigeeOrganizationsAppgroupsBalanceAdjustRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupBalance, Organizations.ApigeeOrganizationsAppgroupsBalanceAdjustError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance:adjust`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupBalance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsBalanceAdjustError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsBalanceAdjustRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AdjustAppGroupBalanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AdjustAppGroupBalanceRequest` | `googleCloudApigeeV1AdjustAppGroupBalanceRequestSchema` | `src/models/google-cloud-apigee-v1-adjust-app-group-balance-request.ts` |
| `GoogleCloudApigeeV1AppGroupBalance` | `googleCloudApigeeV1AppGroupBalanceSchema` | `src/models/google-cloud-apigee-v1-app-group-balance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsBalanceCredit

- **Signature**: `apigeeOrganizationsAppgroupsBalanceCredit(request: Organizations.ApigeeOrganizationsAppgroupsBalanceCreditRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupBalance, Organizations.ApigeeOrganizationsAppgroupsBalanceCreditError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance:credit`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupBalance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsBalanceCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsBalanceCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1CreditAppGroupBalanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CreditAppGroupBalanceRequest` | `googleCloudApigeeV1CreditAppGroupBalanceRequestSchema` | `src/models/google-cloud-apigee-v1-credit-app-group-balance-request.ts` |
| `GoogleCloudApigeeV1AppGroupBalance` | `googleCloudApigeeV1AppGroupBalanceSchema` | `src/models/google-cloud-apigee-v1-app-group-balance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsCreate

- **Signature**: `apigeeOrganizationsAppgroupsCreate(request: Organizations.ApigeeOrganizationsAppgroupsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroup, Organizations.ApigeeOrganizationsAppgroupsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AppGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `googleCloudApigeeV1AppGroupSchema` | `src/models/google-cloud-apigee-v1-app-group.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsDelete

- **Signature**: `apigeeOrganizationsAppgroupsDelete(request: Organizations.ApigeeOrganizationsAppgroupsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroup, Organizations.ApigeeOrganizationsAppgroupsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `googleCloudApigeeV1AppGroupSchema` | `src/models/google-cloud-apigee-v1-app-group.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsGet

- **Signature**: `apigeeOrganizationsAppgroupsGet(request: Organizations.ApigeeOrganizationsAppgroupsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroup, Organizations.ApigeeOrganizationsAppgroupsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `googleCloudApigeeV1AppGroupSchema` | `src/models/google-cloud-apigee-v1-app-group.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsGetBalance

- **Signature**: `apigeeOrganizationsAppgroupsGetBalance(request: Organizations.ApigeeOrganizationsAppgroupsGetBalanceRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupBalance, Organizations.ApigeeOrganizationsAppgroupsGetBalanceError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/balance`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AppGroupBalance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsGetBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsGetBalanceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupBalance` | `googleCloudApigeeV1AppGroupBalanceSchema` | `src/models/google-cloud-apigee-v1-app-group-balance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsGetMonetizationConfig

- **Signature**: `apigeeOrganizationsAppgroupsGetMonetizationConfig(request: Organizations.ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupMonetizationConfig, Organizations.ApigeeOrganizationsAppgroupsGetMonetizationConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/monetizationConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AppGroupMonetizationConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsGetMonetizationConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupMonetizationConfig` | `googleCloudApigeeV1AppGroupMonetizationConfigSchema` | `src/models/google-cloud-apigee-v1-app-group-monetization-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsList

- **Signature**: `apigeeOrganizationsAppgroupsList(request: Organizations.ApigeeOrganizationsAppgroupsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListAppGroupsResponse, Organizations.ApigeeOrganizationsAppgroupsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListAppGroupsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListAppGroupsResponse` | `googleCloudApigeeV1ListAppGroupsResponseSchema` | `src/models/google-cloud-apigee-v1-list-app-groups-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsSubscriptionsCreate

- **Signature**: `apigeeOrganizationsAppgroupsSubscriptionsCreate(request: Organizations.ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupSubscription, Organizations.ApigeeOrganizationsAppgroupsSubscriptionsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AppGroupSubscription` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupSubscription` | `googleCloudApigeeV1AppGroupSubscriptionSchema` | `src/models/google-cloud-apigee-v1-app-group-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsSubscriptionsExpire

- **Signature**: `apigeeOrganizationsAppgroupsSubscriptionsExpire(request: Organizations.ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupSubscription, Organizations.ApigeeOrganizationsAppgroupsSubscriptionsExpireError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions/{subscriptionsId}:expire`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsExpireError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `subscriptionsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupSubscription` | `googleCloudApigeeV1AppGroupSubscriptionSchema` | `src/models/google-cloud-apigee-v1-app-group-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsSubscriptionsGet

- **Signature**: `apigeeOrganizationsAppgroupsSubscriptionsGet(request: Organizations.ApigeeOrganizationsAppgroupsSubscriptionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupSubscription, Organizations.ApigeeOrganizationsAppgroupsSubscriptionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions/{subscriptionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `subscriptionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupSubscription` | `googleCloudApigeeV1AppGroupSubscriptionSchema` | `src/models/google-cloud-apigee-v1-app-group-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsSubscriptionsList

- **Signature**: `apigeeOrganizationsAppgroupsSubscriptionsList(request: Organizations.ApigeeOrganizationsAppgroupsSubscriptionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse, Organizations.ApigeeOrganizationsAppgroupsSubscriptionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/subscriptions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsSubscriptionsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse` | `googleCloudApigeeV1ListAppGroupSubscriptionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-app-group-subscriptions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsUpdate

- **Signature**: `apigeeOrganizationsAppgroupsUpdate(request: Organizations.ApigeeOrganizationsAppgroupsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroup, Organizations.ApigeeOrganizationsAppgroupsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1AppGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroup` | `googleCloudApigeeV1AppGroupSchema` | `src/models/google-cloud-apigee-v1-app-group.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppgroupsUpdateMonetizationConfig

- **Signature**: `apigeeOrganizationsAppgroupsUpdateMonetizationConfig(request: Organizations.ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AppGroupMonetizationConfig, Organizations.ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/appgroups/{appgroupsId}/monetizationConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AppGroupMonetizationConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appgroupsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AppGroupMonetizationConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AppGroupMonetizationConfig` | `googleCloudApigeeV1AppGroupMonetizationConfigSchema` | `src/models/google-cloud-apigee-v1-app-group-monetization-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppsGet

- **Signature**: `apigeeOrganizationsAppsGet(request: Organizations.ApigeeOrganizationsAppsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1App, Organizations.ApigeeOrganizationsAppsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1App`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1App` | `googleCloudApigeeV1AppSchema` | `src/models/google-cloud-apigee-v1-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsAppsList

- **Signature**: `apigeeOrganizationsAppsList(request: Organizations.ApigeeOrganizationsAppsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListAppsResponse, Organizations.ApigeeOrganizationsAppsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/apps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListAppsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsAppsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsAppsListRequest` (13):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `apiProduct` | `query` | `string` | no |
| `apptype` | `query` | `string` | no |
| `expand` | `query` | `boolean` | no |
| `filter` | `query` | `string` | no |
| `ids` | `query` | `string` | no |
| `includeCred` | `query` | `boolean` | no |
| `keyStatus` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `rows` | `query` | `string` | no |
| `startKey` | `query` | `string` | no |
| `status` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListAppsResponse` | `googleCloudApigeeV1ListAppsResponseSchema` | `src/models/google-cloud-apigee-v1-list-apps-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsCreate

- **Signature**: `apigeeOrganizationsCreate(request: Organizations.ApigeeOrganizationsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsCreateError>`
- **Wire**: `POST /v1/organizations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `parent` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Organization` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Organization` | `googleCloudApigeeV1OrganizationSchema` | `src/models/google-cloud-apigee-v1-organization.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDatacollectorsCreate

- **Signature**: `apigeeOrganizationsDatacollectorsCreate(request: Organizations.ApigeeOrganizationsDatacollectorsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DataCollector, Organizations.ApigeeOrganizationsDatacollectorsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/datacollectors`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DataCollector`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDatacollectorsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDatacollectorsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `dataCollectorId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DataCollector` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DataCollector` | `googleCloudApigeeV1DataCollectorSchema` | `src/models/google-cloud-apigee-v1-data-collector.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDatacollectorsDelete

- **Signature**: `apigeeOrganizationsDatacollectorsDelete(request: Organizations.ApigeeOrganizationsDatacollectorsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsDatacollectorsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDatacollectorsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDatacollectorsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `datacollectorsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDatacollectorsGet

- **Signature**: `apigeeOrganizationsDatacollectorsGet(request: Organizations.ApigeeOrganizationsDatacollectorsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DataCollector, Organizations.ApigeeOrganizationsDatacollectorsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DataCollector`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDatacollectorsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDatacollectorsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `datacollectorsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DataCollector` | `googleCloudApigeeV1DataCollectorSchema` | `src/models/google-cloud-apigee-v1-data-collector.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDatacollectorsList

- **Signature**: `apigeeOrganizationsDatacollectorsList(request: Organizations.ApigeeOrganizationsDatacollectorsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDataCollectorsResponse, Organizations.ApigeeOrganizationsDatacollectorsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/datacollectors`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDataCollectorsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDatacollectorsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDatacollectorsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDataCollectorsResponse` | `googleCloudApigeeV1ListDataCollectorsResponseSchema` | `src/models/google-cloud-apigee-v1-list-data-collectors-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDatacollectorsPatch

- **Signature**: `apigeeOrganizationsDatacollectorsPatch(request: Organizations.ApigeeOrganizationsDatacollectorsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DataCollector, Organizations.ApigeeOrganizationsDatacollectorsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DataCollector`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDatacollectorsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDatacollectorsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `datacollectorsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DataCollector` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DataCollector` | `googleCloudApigeeV1DataCollectorSchema` | `src/models/google-cloud-apigee-v1-data-collector.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDelete

- **Signature**: `apigeeOrganizationsDelete(request: Organizations.ApigeeOrganizationsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `retention` | `query` | `Retention` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Retention` | `retentionSchema` | `src/models/retention.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDeploymentsList

- **Signature**: `apigeeOrganizationsDeploymentsList(request: Organizations.ApigeeOrganizationsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDeploymentsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedFlows` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsAttributes

- **Signature**: `apigeeOrganizationsDevelopersAppsAttributes(request: Organizations.ApigeeOrganizationsDevelopersAppsAttributesRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attributes, Organizations.ApigeeOrganizationsDevelopersAppsAttributesError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsAttributesRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Attributes` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attributes` | `googleCloudApigeeV1AttributesSchema` | `src/models/google-cloud-apigee-v1-attributes.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsAttributesDelete

- **Signature**: `apigeeOrganizationsDevelopersAppsAttributesDelete(request: Organizations.ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsDevelopersAppsAttributesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsAttributesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsAttributesGet

- **Signature**: `apigeeOrganizationsDevelopersAppsAttributesGet(request: Organizations.ApigeeOrganizationsDevelopersAppsAttributesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsDevelopersAppsAttributesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsAttributesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsAttributesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsAttributesList

- **Signature**: `apigeeOrganizationsDevelopersAppsAttributesList(request: Organizations.ApigeeOrganizationsDevelopersAppsAttributesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attributes, Organizations.ApigeeOrganizationsDevelopersAppsAttributesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsAttributesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsAttributesListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attributes` | `googleCloudApigeeV1AttributesSchema` | `src/models/google-cloud-apigee-v1-attributes.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute

- **Signature**: `apigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute(request: Organizations.ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Attribute` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsCreate

- **Signature**: `apigeeOrganizationsDevelopersAppsCreate(request: Organizations.ApigeeOrganizationsDevelopersAppsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperApp, Organizations.ApigeeOrganizationsDevelopersAppsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperApp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `googleCloudApigeeV1DeveloperAppSchema` | `src/models/google-cloud-apigee-v1-developer-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsDelete

- **Signature**: `apigeeOrganizationsDevelopersAppsDelete(request: Organizations.ApigeeOrganizationsDevelopersAppsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperApp, Organizations.ApigeeOrganizationsDevelopersAppsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `googleCloudApigeeV1DeveloperAppSchema` | `src/models/google-cloud-apigee-v1-developer-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus

- **Signature**: `apigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus(request: Organizations.ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperApp, Organizations.ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperApp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `googleCloudApigeeV1DeveloperAppSchema` | `src/models/google-cloud-apigee-v1-developer-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsGet

- **Signature**: `apigeeOrganizationsDevelopersAppsGet(request: Organizations.ApigeeOrganizationsDevelopersAppsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperApp, Organizations.ApigeeOrganizationsDevelopersAppsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `entity` | `query` | `string` | no |
| `query` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `googleCloudApigeeV1DeveloperAppSchema` | `src/models/google-cloud-apigee-v1-developer-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysApiproductsDelete

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysApiproductsDelete(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `apiproductsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysCreate

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysCreate(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperAppKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysCreateCreate

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysCreateCreate(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/create`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperAppKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysDelete

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysDelete(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysGet

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysGet(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperAppKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey

- **Signature**: `apigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey(request: Organizations.ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperAppKey, Organizations.ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `keysId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperAppKey` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperAppKey` | `googleCloudApigeeV1DeveloperAppKeySchema` | `src/models/google-cloud-apigee-v1-developer-app-key.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsList

- **Signature**: `apigeeOrganizationsDevelopersAppsList(request: Organizations.ApigeeOrganizationsDevelopersAppsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeveloperAppsResponse, Organizations.ApigeeOrganizationsDevelopersAppsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/apps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeveloperAppsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `count` | `query` | `string` | no |
| `expand` | `query` | `boolean` | no |
| `shallowExpand` | `query` | `boolean` | no |
| `startKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeveloperAppsResponse` | `googleCloudApigeeV1ListDeveloperAppsResponseSchema` | `src/models/google-cloud-apigee-v1-list-developer-apps-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAppsUpdate

- **Signature**: `apigeeOrganizationsDevelopersAppsUpdate(request: Organizations.ApigeeOrganizationsDevelopersAppsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperApp, Organizations.ApigeeOrganizationsDevelopersAppsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAppsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAppsUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `appsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperApp` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperApp` | `googleCloudApigeeV1DeveloperAppSchema` | `src/models/google-cloud-apigee-v1-developer-app.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAttributes

- **Signature**: `apigeeOrganizationsDevelopersAttributes(request: Organizations.ApigeeOrganizationsDevelopersAttributesRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attributes, Organizations.ApigeeOrganizationsDevelopersAttributesError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAttributesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAttributesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Attributes` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attributes` | `googleCloudApigeeV1AttributesSchema` | `src/models/google-cloud-apigee-v1-attributes.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAttributesDelete

- **Signature**: `apigeeOrganizationsDevelopersAttributesDelete(request: Organizations.ApigeeOrganizationsDevelopersAttributesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsDevelopersAttributesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAttributesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAttributesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAttributesGet

- **Signature**: `apigeeOrganizationsDevelopersAttributesGet(request: Organizations.ApigeeOrganizationsDevelopersAttributesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsDevelopersAttributesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAttributesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAttributesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAttributesList

- **Signature**: `apigeeOrganizationsDevelopersAttributesList(request: Organizations.ApigeeOrganizationsDevelopersAttributesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attributes, Organizations.ApigeeOrganizationsDevelopersAttributesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/attributes`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAttributesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAttributesListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attributes` | `googleCloudApigeeV1AttributesSchema` | `src/models/google-cloud-apigee-v1-attributes.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute

- **Signature**: `apigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute(request: Organizations.ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Attribute, Organizations.ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/attributes/{attributesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `attributesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Attribute` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Attribute` | `googleCloudApigeeV1AttributeSchema` | `src/models/google-cloud-apigee-v1-attribute.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersBalanceAdjust

- **Signature**: `apigeeOrganizationsDevelopersBalanceAdjust(request: Organizations.ApigeeOrganizationsDevelopersBalanceAdjustRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperBalance, Organizations.ApigeeOrganizationsDevelopersBalanceAdjustError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/balance:adjust`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperBalance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersBalanceAdjustError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersBalanceAdjustRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1AdjustDeveloperBalanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AdjustDeveloperBalanceRequest` | `googleCloudApigeeV1AdjustDeveloperBalanceRequestSchema` | `src/models/google-cloud-apigee-v1-adjust-developer-balance-request.ts` |
| `GoogleCloudApigeeV1DeveloperBalance` | `googleCloudApigeeV1DeveloperBalanceSchema` | `src/models/google-cloud-apigee-v1-developer-balance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersBalanceCredit

- **Signature**: `apigeeOrganizationsDevelopersBalanceCredit(request: Organizations.ApigeeOrganizationsDevelopersBalanceCreditRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperBalance, Organizations.ApigeeOrganizationsDevelopersBalanceCreditError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/balance:credit`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperBalance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersBalanceCreditError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersBalanceCreditRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1CreditDeveloperBalanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CreditDeveloperBalanceRequest` | `googleCloudApigeeV1CreditDeveloperBalanceRequestSchema` | `src/models/google-cloud-apigee-v1-credit-developer-balance-request.ts` |
| `GoogleCloudApigeeV1DeveloperBalance` | `googleCloudApigeeV1DeveloperBalanceSchema` | `src/models/google-cloud-apigee-v1-developer-balance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersCreate

- **Signature**: `apigeeOrganizationsDevelopersCreate(request: Organizations.ApigeeOrganizationsDevelopersCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Developer, Organizations.ApigeeOrganizationsDevelopersCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Developer` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Developer` | `googleCloudApigeeV1DeveloperSchema` | `src/models/google-cloud-apigee-v1-developer.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersDelete

- **Signature**: `apigeeOrganizationsDevelopersDelete(request: Organizations.ApigeeOrganizationsDevelopersDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Developer, Organizations.ApigeeOrganizationsDevelopersDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Developer` | `googleCloudApigeeV1DeveloperSchema` | `src/models/google-cloud-apigee-v1-developer.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersGet

- **Signature**: `apigeeOrganizationsDevelopersGet(request: Organizations.ApigeeOrganizationsDevelopersGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Developer, Organizations.ApigeeOrganizationsDevelopersGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Developer` | `googleCloudApigeeV1DeveloperSchema` | `src/models/google-cloud-apigee-v1-developer.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersGetBalance

- **Signature**: `apigeeOrganizationsDevelopersGetBalance(request: Organizations.ApigeeOrganizationsDevelopersGetBalanceRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperBalance, Organizations.ApigeeOrganizationsDevelopersGetBalanceError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/balance`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DeveloperBalance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersGetBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersGetBalanceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperBalance` | `googleCloudApigeeV1DeveloperBalanceSchema` | `src/models/google-cloud-apigee-v1-developer-balance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersGetMonetizationConfig

- **Signature**: `apigeeOrganizationsDevelopersGetMonetizationConfig(request: Organizations.ApigeeOrganizationsDevelopersGetMonetizationConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperMonetizationConfig, Organizations.ApigeeOrganizationsDevelopersGetMonetizationConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DeveloperMonetizationConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersGetMonetizationConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersGetMonetizationConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperMonetizationConfig` | `googleCloudApigeeV1DeveloperMonetizationConfigSchema` | `src/models/google-cloud-apigee-v1-developer-monetization-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersList

- **Signature**: `apigeeOrganizationsDevelopersList(request: Organizations.ApigeeOrganizationsDevelopersListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListOfDevelopersResponse, Organizations.ApigeeOrganizationsDevelopersListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListOfDevelopersResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersListRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `app` | `query` | `string` | no |
| `count` | `query` | `string` | no |
| `expand` | `query` | `boolean` | no |
| `ids` | `query` | `string` | no |
| `includeCompany` | `query` | `boolean` | no |
| `startKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListOfDevelopersResponse` | `googleCloudApigeeV1ListOfDevelopersResponseSchema` | `src/models/google-cloud-apigee-v1-list-of-developers-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersSetDeveloperStatus

- **Signature**: `apigeeOrganizationsDevelopersSetDeveloperStatus(request: Organizations.ApigeeOrganizationsDevelopersSetDeveloperStatusRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsDevelopersSetDeveloperStatusError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersSetDeveloperStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersSetDeveloperStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersSubscriptionsCreate

- **Signature**: `apigeeOrganizationsDevelopersSubscriptionsCreate(request: Organizations.ApigeeOrganizationsDevelopersSubscriptionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperSubscription, Organizations.ApigeeOrganizationsDevelopersSubscriptionsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersSubscriptionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersSubscriptionsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperSubscription` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperSubscription` | `googleCloudApigeeV1DeveloperSubscriptionSchema` | `src/models/google-cloud-apigee-v1-developer-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersSubscriptionsExpire

- **Signature**: `apigeeOrganizationsDevelopersSubscriptionsExpire(request: Organizations.ApigeeOrganizationsDevelopersSubscriptionsExpireRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperSubscription, Organizations.ApigeeOrganizationsDevelopersSubscriptionsExpireError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions/{subscriptionsId}:expire`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersSubscriptionsExpireError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersSubscriptionsExpireRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `subscriptionsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperSubscription` | `googleCloudApigeeV1DeveloperSubscriptionSchema` | `src/models/google-cloud-apigee-v1-developer-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersSubscriptionsGet

- **Signature**: `apigeeOrganizationsDevelopersSubscriptionsGet(request: Organizations.ApigeeOrganizationsDevelopersSubscriptionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperSubscription, Organizations.ApigeeOrganizationsDevelopersSubscriptionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions/{subscriptionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersSubscriptionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersSubscriptionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `subscriptionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperSubscription` | `googleCloudApigeeV1DeveloperSubscriptionSchema` | `src/models/google-cloud-apigee-v1-developer-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersSubscriptionsList

- **Signature**: `apigeeOrganizationsDevelopersSubscriptionsList(request: Organizations.ApigeeOrganizationsDevelopersSubscriptionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse, Organizations.ApigeeOrganizationsDevelopersSubscriptionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/developers/{developersId}/subscriptions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersSubscriptionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersSubscriptionsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `count` | `query` | `number` | no |
| `startKey` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse` | `googleCloudApigeeV1ListDeveloperSubscriptionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-developer-subscriptions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersUpdate

- **Signature**: `apigeeOrganizationsDevelopersUpdate(request: Organizations.ApigeeOrganizationsDevelopersUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Developer, Organizations.ApigeeOrganizationsDevelopersUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Developer` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Developer` | `googleCloudApigeeV1DeveloperSchema` | `src/models/google-cloud-apigee-v1-developer.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDevelopersUpdateMonetizationConfig

- **Signature**: `apigeeOrganizationsDevelopersUpdateMonetizationConfig(request: Organizations.ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeveloperMonetizationConfig, Organizations.ApigeeOrganizationsDevelopersUpdateMonetizationConfigError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeveloperMonetizationConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDevelopersUpdateMonetizationConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `developersId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1DeveloperMonetizationConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeveloperMonetizationConfig` | `googleCloudApigeeV1DeveloperMonetizationConfigSchema` | `src/models/google-cloud-apigee-v1-developer-monetization-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDnsZonesCreate

- **Signature**: `apigeeOrganizationsDnsZonesCreate(request: Organizations.ApigeeOrganizationsDnsZonesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsDnsZonesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/dnsZones`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDnsZonesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDnsZonesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `dnsZoneId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DnsZone` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DnsZone` | `googleCloudApigeeV1DnsZoneSchema` | `src/models/google-cloud-apigee-v1-dns-zone.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDnsZonesDelete

- **Signature**: `apigeeOrganizationsDnsZonesDelete(request: Organizations.ApigeeOrganizationsDnsZonesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsDnsZonesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/dnsZones/{dnsZonesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDnsZonesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDnsZonesDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `dnsZonesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDnsZonesGet

- **Signature**: `apigeeOrganizationsDnsZonesGet(request: Organizations.ApigeeOrganizationsDnsZonesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DnsZone, Organizations.ApigeeOrganizationsDnsZonesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/dnsZones/{dnsZonesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DnsZone`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDnsZonesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDnsZonesGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `dnsZonesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DnsZone` | `googleCloudApigeeV1DnsZoneSchema` | `src/models/google-cloud-apigee-v1-dns-zone.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsDnsZonesList

- **Signature**: `apigeeOrganizationsDnsZonesList(request: Organizations.ApigeeOrganizationsDnsZonesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDnsZonesResponse, Organizations.ApigeeOrganizationsDnsZonesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/dnsZones`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDnsZonesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsDnsZonesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsDnsZonesListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDnsZonesResponse` | `googleCloudApigeeV1ListDnsZonesResponseSchema` | `src/models/google-cloud-apigee-v1-list-dns-zones-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEndpointAttachmentsCreate

- **Signature**: `apigeeOrganizationsEndpointAttachmentsCreate(request: Organizations.ApigeeOrganizationsEndpointAttachmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEndpointAttachmentsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/endpointAttachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEndpointAttachmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEndpointAttachmentsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `endpointAttachmentId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1EndpointAttachment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EndpointAttachment` | `googleCloudApigeeV1EndpointAttachmentSchema` | `src/models/google-cloud-apigee-v1-endpoint-attachment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEndpointAttachmentsDelete

- **Signature**: `apigeeOrganizationsEndpointAttachmentsDelete(request: Organizations.ApigeeOrganizationsEndpointAttachmentsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEndpointAttachmentsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/endpointAttachments/{endpointAttachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEndpointAttachmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEndpointAttachmentsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `endpointAttachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEndpointAttachmentsGet

- **Signature**: `apigeeOrganizationsEndpointAttachmentsGet(request: Organizations.ApigeeOrganizationsEndpointAttachmentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1EndpointAttachment, Organizations.ApigeeOrganizationsEndpointAttachmentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/endpointAttachments/{endpointAttachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1EndpointAttachment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEndpointAttachmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEndpointAttachmentsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `endpointAttachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EndpointAttachment` | `googleCloudApigeeV1EndpointAttachmentSchema` | `src/models/google-cloud-apigee-v1-endpoint-attachment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEndpointAttachmentsList

- **Signature**: `apigeeOrganizationsEndpointAttachmentsList(request: Organizations.ApigeeOrganizationsEndpointAttachmentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListEndpointAttachmentsResponse, Organizations.ApigeeOrganizationsEndpointAttachmentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/endpointAttachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListEndpointAttachmentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEndpointAttachmentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEndpointAttachmentsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListEndpointAttachmentsResponse` | `googleCloudApigeeV1ListEndpointAttachmentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-endpoint-attachments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsAttachmentsCreate

- **Signature**: `apigeeOrganizationsEnvgroupsAttachmentsCreate(request: Organizations.ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvgroupsAttachmentsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1EnvironmentGroupAttachment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroupAttachment` | `googleCloudApigeeV1EnvironmentGroupAttachmentSchema` | `src/models/google-cloud-apigee-v1-environment-group-attachment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsAttachmentsDelete

- **Signature**: `apigeeOrganizationsEnvgroupsAttachmentsDelete(request: Organizations.ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvgroupsAttachmentsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments/{attachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |
| `attachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsAttachmentsGet

- **Signature**: `apigeeOrganizationsEnvgroupsAttachmentsGet(request: Organizations.ApigeeOrganizationsEnvgroupsAttachmentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1EnvironmentGroupAttachment, Organizations.ApigeeOrganizationsEnvgroupsAttachmentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments/{attachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1EnvironmentGroupAttachment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |
| `attachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroupAttachment` | `googleCloudApigeeV1EnvironmentGroupAttachmentSchema` | `src/models/google-cloud-apigee-v1-environment-group-attachment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsAttachmentsList

- **Signature**: `apigeeOrganizationsEnvgroupsAttachmentsList(request: Organizations.ApigeeOrganizationsEnvgroupsAttachmentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse, Organizations.ApigeeOrganizationsEnvgroupsAttachmentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsAttachmentsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse` | `googleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-environment-group-attachments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsCreate

- **Signature**: `apigeeOrganizationsEnvgroupsCreate(request: Organizations.ApigeeOrganizationsEnvgroupsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvgroupsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/envgroups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1EnvironmentGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroup` | `googleCloudApigeeV1EnvironmentGroupSchema` | `src/models/google-cloud-apigee-v1-environment-group.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsDelete

- **Signature**: `apigeeOrganizationsEnvgroupsDelete(request: Organizations.ApigeeOrganizationsEnvgroupsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvgroupsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsGet

- **Signature**: `apigeeOrganizationsEnvgroupsGet(request: Organizations.ApigeeOrganizationsEnvgroupsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1EnvironmentGroup, Organizations.ApigeeOrganizationsEnvgroupsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1EnvironmentGroup`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroup` | `googleCloudApigeeV1EnvironmentGroupSchema` | `src/models/google-cloud-apigee-v1-environment-group.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsGetDeployedIngressConfig

- **Signature**: `apigeeOrganizationsEnvgroupsGetDeployedIngressConfig(request: Organizations.ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1EnvironmentGroupConfig, Organizations.ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/envgroups/{envgroupsId}/deployedIngressConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1EnvironmentGroupConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |
| `view` | `query` | `View` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `View` | `viewSchema` | `src/models/view.ts` |
| `GoogleCloudApigeeV1EnvironmentGroupConfig` | `googleCloudApigeeV1EnvironmentGroupConfigSchema` | `src/models/google-cloud-apigee-v1-environment-group-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsList

- **Signature**: `apigeeOrganizationsEnvgroupsList(request: Organizations.ApigeeOrganizationsEnvgroupsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListEnvironmentGroupsResponse, Organizations.ApigeeOrganizationsEnvgroupsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/envgroups`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentGroupsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentGroupsResponse` | `googleCloudApigeeV1ListEnvironmentGroupsResponseSchema` | `src/models/google-cloud-apigee-v1-list-environment-groups-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvgroupsPatch

- **Signature**: `apigeeOrganizationsEnvgroupsPatch(request: Organizations.ApigeeOrganizationsEnvgroupsPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvgroupsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvgroupsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvgroupsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `envgroupsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1EnvironmentGroup` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EnvironmentGroup` | `googleCloudApigeeV1EnvironmentGroupSchema` | `src/models/google-cloud-apigee-v1-environment-group.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement

- **Signature**: `apigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement(request: Organizations.ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig:setAddonEnablement`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1SetAddonEnablementRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SetAddonEnablementRequest` | `googleCloudApigeeV1SetAddonEnablementRequestSchema` | `src/models/google-cloud-apigee-v1-set-addon-enablement-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2

- **Signature**: `apigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2(request: Organizations.ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Schema, Organizations.ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/admin/schemav2`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Schema`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `disableCache` | `query` | `boolean` | no |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Schema` | `googleCloudApigeeV1SchemaSchema` | `src/models/google-cloud-apigee-v1-schema.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsAnalyticsExportsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsAnalyticsExportsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Export, Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Export`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ExportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ExportRequest` | `googleCloudApigeeV1ExportRequestSchema` | `src/models/google-cloud-apigee-v1-export-request.ts` |
| `GoogleCloudApigeeV1Export` | `googleCloudApigeeV1ExportSchema` | `src/models/google-cloud-apigee-v1-export.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsAnalyticsExportsGet

- **Signature**: `apigeeOrganizationsEnvironmentsAnalyticsExportsGet(request: Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Export, Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports/{exportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Export`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `exportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Export` | `googleCloudApigeeV1ExportSchema` | `src/models/google-cloud-apigee-v1-export.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsAnalyticsExportsList

- **Signature**: `apigeeOrganizationsEnvironmentsAnalyticsExportsList(request: Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListExportsResponse, Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/analytics/exports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListExportsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListExportsResponse` | `googleCloudApigeeV1ListExportsResponseSchema` | `src/models/google-cloud-apigee-v1-list-exports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisDeploymentsList

- **Signature**: `apigeeOrganizationsEnvironmentsApisDeploymentsList(request: Organizations.ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsEnvironmentsApisDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DebugSession, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DebugSession`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `timeout` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DebugSession` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DebugSession` | `googleCloudApigeeV1DebugSessionSchema` | `src/models/google-cloud-apigee-v1-debug-session.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DebugSessionTransaction, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}/data/{dataId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DebugSessionTransaction`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `debugsessionsId` | `path` | `string` | yes |
| `dataId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DebugSessionTransaction` | `googleCloudApigeeV1DebugSessionTransactionSchema` | `src/models/google-cloud-apigee-v1-debug-session-transaction.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}/data`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `debugsessionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DebugSession, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions/{debugsessionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DebugSession`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `debugsessionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DebugSession` | `googleCloudApigeeV1DebugSessionSchema` | `src/models/google-cloud-apigee-v1-debug-session.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDebugSessionsResponse, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDebugSessionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDebugSessionsResponse` | `googleCloudApigeeV1ListDebugSessionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-debug-sessions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDeploy

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDeploy(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Deployment, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeployError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeployError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `override` | `query` | `boolean` | no |
| `sequencedRollout` | `query` | `boolean` | no |
| `serviceAccount` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Deployment` | `googleCloudApigeeV1DeploymentSchema` | `src/models/google-cloud-apigee-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeploymentChangeReport, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments:generateDeployChangeReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeploymentChangeReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `override` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeploymentChangeReport` | `googleCloudApigeeV1DeploymentChangeReportSchema` | `src/models/google-cloud-apigee-v1-deployment-change-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeploymentChangeReport, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments:generateUndeployChangeReport`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeploymentChangeReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeploymentChangeReport` | `googleCloudApigeeV1DeploymentChangeReportSchema` | `src/models/google-cloud-apigee-v1-deployment-change-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsGetDeployments

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsGetDeployments(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Deployment, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Deployment` | `googleCloudApigeeV1DeploymentSchema` | `src/models/google-cloud-apigee-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsApisRevisionsUndeploy

- **Signature**: `apigeeOrganizationsEnvironmentsApisRevisionsUndeploy(request: Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `apisId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `sequencedRollout` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ArchiveDeployment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ArchiveDeployment` | `googleCloudApigeeV1ArchiveDeploymentSchema` | `src/models/google-cloud-apigee-v1-archive-deployment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsDelete

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsDelete(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `archiveDeploymentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1GenerateDownloadUrlResponse, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}:generateDownloadUrl`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1GenerateDownloadUrlResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `archiveDeploymentsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1GenerateDownloadUrlResponse` | `googleCloudApigeeV1GenerateDownloadUrlResponseSchema` | `src/models/google-cloud-apigee-v1-generate-download-url-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1GenerateUploadUrlResponse, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments:generateUploadUrl`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1GenerateUploadUrlResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1GenerateUploadUrlResponse` | `googleCloudApigeeV1GenerateUploadUrlResponseSchema` | `src/models/google-cloud-apigee-v1-generate-upload-url-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsGet

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsGet(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ArchiveDeployment, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ArchiveDeployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `archiveDeploymentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ArchiveDeployment` | `googleCloudApigeeV1ArchiveDeploymentSchema` | `src/models/google-cloud-apigee-v1-archive-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsList

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsList(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListArchiveDeploymentsResponse, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListArchiveDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListArchiveDeploymentsResponse` | `googleCloudApigeeV1ListArchiveDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-archive-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsArchiveDeploymentsPatch

- **Signature**: `apigeeOrganizationsEnvironmentsArchiveDeploymentsPatch(request: Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ArchiveDeployment, Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ArchiveDeployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `archiveDeploymentsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1ArchiveDeployment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ArchiveDeployment` | `googleCloudApigeeV1ArchiveDeploymentSchema` | `src/models/google-cloud-apigee-v1-archive-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsCachesDelete

- **Signature**: `apigeeOrganizationsEnvironmentsCachesDelete(request: Organizations.ApigeeOrganizationsEnvironmentsCachesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsCachesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/caches/{cachesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsCachesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsCachesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `cachesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvironmentsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Environment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Environment` | `googleCloudApigeeV1EnvironmentSchema` | `src/models/google-cloud-apigee-v1-environment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsDelete

- **Signature**: `apigeeOrganizationsEnvironmentsDelete(request: Organizations.ApigeeOrganizationsEnvironmentsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvironmentsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsDeploymentsGet

- **Signature**: `apigeeOrganizationsEnvironmentsDeploymentsGet(request: Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Deployment, Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `deploymentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Deployment` | `googleCloudApigeeV1DeploymentSchema` | `src/models/google-cloud-apigee-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy

- **Signature**: `apigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy(request: Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<GoogleIamV1Policy, Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationsId` | `path` | — | `string` | yes |
| `environmentsId` | `path` | — | `string` | yes |
| `deploymentsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1Policy` | `googleIamV1PolicySchema` | `src/models/google-iam-v1-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsDeploymentsList

- **Signature**: `apigeeOrganizationsEnvironmentsDeploymentsList(request: Organizations.ApigeeOrganizationsEnvironmentsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsEnvironmentsDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `sharedFlows` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy

- **Signature**: `apigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy(request: Organizations.ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<GoogleIamV1Policy, Organizations.ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `deploymentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleIamV1SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1SetIamPolicyRequest` | `googleIamV1SetIamPolicyRequestSchema` | `src/models/google-iam-v1-set-iam-policy-request.ts` |
| `GoogleIamV1Policy` | `googleIamV1PolicySchema` | `src/models/google-iam-v1-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions

- **Signature**: `apigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions(request: Organizations.ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<GoogleIamV1TestIamPermissionsResponse, Organizations.ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/deployments/{deploymentsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleIamV1TestIamPermissionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `deploymentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleIamV1TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1TestIamPermissionsRequest` | `googleIamV1TestIamPermissionsRequestSchema` | `src/models/google-iam-v1-test-iam-permissions-request.ts` |
| `GoogleIamV1TestIamPermissionsResponse` | `googleIamV1TestIamPermissionsResponseSchema` | `src/models/google-iam-v1-test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook

- **Signature**: `apigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook(request: Organizations.ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1FlowHook, Organizations.ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1FlowHook`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `flowhooksId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1FlowHook` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1FlowHook` | `googleCloudApigeeV1FlowHookSchema` | `src/models/google-cloud-apigee-v1-flow-hook.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook

- **Signature**: `apigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook(request: Organizations.ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1FlowHook, Organizations.ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1FlowHook`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `flowhooksId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1FlowHook` | `googleCloudApigeeV1FlowHookSchema` | `src/models/google-cloud-apigee-v1-flow-hook.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsFlowhooksGet

- **Signature**: `apigeeOrganizationsEnvironmentsFlowhooksGet(request: Organizations.ApigeeOrganizationsEnvironmentsFlowhooksGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1FlowHook, Organizations.ApigeeOrganizationsEnvironmentsFlowhooksGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1FlowHook`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsFlowhooksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsFlowhooksGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `flowhooksId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1FlowHook` | `googleCloudApigeeV1FlowHookSchema` | `src/models/google-cloud-apigee-v1-flow-hook.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGet

- **Signature**: `apigeeOrganizationsEnvironmentsGet(request: Organizations.ApigeeOrganizationsEnvironmentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Environment, Organizations.ApigeeOrganizationsEnvironmentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Environment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Environment` | `googleCloudApigeeV1EnvironmentSchema` | `src/models/google-cloud-apigee-v1-environment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetAddonsConfig

- **Signature**: `apigeeOrganizationsEnvironmentsGetAddonsConfig(request: Organizations.ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AddonsConfig, Organizations.ApigeeOrganizationsEnvironmentsGetAddonsConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AddonsConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetAddonsConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AddonsConfig` | `googleCloudApigeeV1AddonsConfigSchema` | `src/models/google-cloud-apigee-v1-addons-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig

- **Signature**: `apigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig(request: Organizations.ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiSecurityRuntimeConfig, Organizations.ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/apiSecurityRuntimeConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApiSecurityRuntimeConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiSecurityRuntimeConfig` | `googleCloudApigeeV1ApiSecurityRuntimeConfigSchema` | `src/models/google-cloud-apigee-v1-api-security-runtime-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetDebugmask

- **Signature**: `apigeeOrganizationsEnvironmentsGetDebugmask(request: Organizations.ApigeeOrganizationsEnvironmentsGetDebugmaskRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DebugMask, Organizations.ApigeeOrganizationsEnvironmentsGetDebugmaskError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1DebugMask`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetDebugmaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetDebugmaskRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DebugMask` | `googleCloudApigeeV1DebugMaskSchema` | `src/models/google-cloud-apigee-v1-debug-mask.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetDeployedConfig

- **Signature**: `apigeeOrganizationsEnvironmentsGetDeployedConfig(request: Organizations.ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1EnvironmentConfig, Organizations.ApigeeOrganizationsEnvironmentsGetDeployedConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/deployedConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1EnvironmentConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetDeployedConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1EnvironmentConfig` | `googleCloudApigeeV1EnvironmentConfigSchema` | `src/models/google-cloud-apigee-v1-environment-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetIamPolicy

- **Signature**: `apigeeOrganizationsEnvironmentsGetIamPolicy(request: Organizations.ApigeeOrganizationsEnvironmentsGetIamPolicyRequest, options?: RequestOptions): ApiPromise<GoogleIamV1Policy, Organizations.ApigeeOrganizationsEnvironmentsGetIamPolicyError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetIamPolicyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationsId` | `path` | — | `string` | yes |
| `environmentsId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1Policy` | `googleIamV1PolicySchema` | `src/models/google-iam-v1-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetSecurityActionsConfig

- **Signature**: `apigeeOrganizationsEnvironmentsGetSecurityActionsConfig(request: Organizations.ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityActionsConfig, Organizations.ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActionsConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityActionsConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityActionsConfig` | `googleCloudApigeeV1SecurityActionsConfigSchema` | `src/models/google-cloud-apigee-v1-security-actions-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsGetTraceConfig

- **Signature**: `apigeeOrganizationsEnvironmentsGetTraceConfig(request: Organizations.ApigeeOrganizationsEnvironmentsGetTraceConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TraceConfig, Organizations.ApigeeOrganizationsEnvironmentsGetTraceConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1TraceConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsGetTraceConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsGetTraceConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TraceConfig` | `googleCloudApigeeV1TraceConfigSchema` | `src/models/google-cloud-apigee-v1-trace-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresAliasesCreate

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresAliasesCreate(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Alias, Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationsId` | `path` | — | `string` | yes |
| `environmentsId` | `path` | — | `string` | yes |
| `keystoresId` | `path` | — | `string` | yes |
| `password` | `query` | `_password` | `string` | no |
| `alias` | `query` | — | `string` | no |
| `format` | `query` | — | `string` | no |
| `ignoreExpiryValidation` | `query` | — | `boolean` | no |
| `ignoreNewlineValidation` | `query` | — | `boolean` | no |
| `body` | `body` | — | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1Alias` | `googleCloudApigeeV1AliasSchema` | `src/models/google-cloud-apigee-v1-alias.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresAliasesCsr

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresAliasesCsr(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/csr`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |
| `aliasesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresAliasesDelete

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresAliasesDelete(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Alias, Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |
| `aliasesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Alias` | `googleCloudApigeeV1AliasSchema` | `src/models/google-cloud-apigee-v1-alias.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresAliasesGet

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresAliasesGet(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Alias, Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |
| `aliasesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Alias` | `googleCloudApigeeV1AliasSchema` | `src/models/google-cloud-apigee-v1-alias.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}/certificate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |
| `aliasesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresAliasesUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresAliasesUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Alias, Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases/{aliasesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |
| `aliasesId` | `path` | `string` | yes |
| `ignoreExpiryValidation` | `query` | `boolean` | no |
| `ignoreNewlineValidation` | `query` | `boolean` | no |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1Alias` | `googleCloudApigeeV1AliasSchema` | `src/models/google-cloud-apigee-v1-alias.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresCreate

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresCreate(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Keystore, Organizations.ApigeeOrganizationsEnvironmentsKeystoresCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Keystore`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Keystore` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Keystore` | `googleCloudApigeeV1KeystoreSchema` | `src/models/google-cloud-apigee-v1-keystore.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresDelete

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresDelete(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Keystore, Organizations.ApigeeOrganizationsEnvironmentsKeystoresDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Keystore`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Keystore` | `googleCloudApigeeV1KeystoreSchema` | `src/models/google-cloud-apigee-v1-keystore.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeystoresGet

- **Signature**: `apigeeOrganizationsEnvironmentsKeystoresGet(request: Organizations.ApigeeOrganizationsEnvironmentsKeystoresGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Keystore, Organizations.ApigeeOrganizationsEnvironmentsKeystoresGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Keystore`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeystoresGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeystoresGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keystoresId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Keystore` | `googleCloudApigeeV1KeystoreSchema` | `src/models/google-cloud-apigee-v1-keystore.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueMap` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsDelete

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsDelete(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListKeyValueEntriesResponse, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `googleCloudApigeeV1ListKeyValueEntriesResponseSchema` | `src/models/google-cloud-apigee-v1-list-key-value-entries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsGet

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsGet(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsKeyvaluemapsUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsKeyvaluemapsUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueMap` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsModifyEnvironment

- **Signature**: `apigeeOrganizationsEnvironmentsModifyEnvironment(request: Organizations.ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsEnvironmentsModifyEnvironmentError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsModifyEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Environment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Environment` | `googleCloudApigeeV1EnvironmentSchema` | `src/models/google-cloud-apigee-v1-environment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsOptimizedStatsGet

- **Signature**: `apigeeOrganizationsEnvironmentsOptimizedStatsGet(request: Organizations.ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1OptimizedStats, Organizations.ApigeeOrganizationsEnvironmentsOptimizedStatsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/optimizedStats/{optimizedStatsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1OptimizedStats`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsOptimizedStatsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `optimizedStatsId` | `path` | `string` | yes |
| `accuracy` | `query` | `string` | no |
| `aggTable` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `string` | no |
| `offset` | `query` | `string` | no |
| `realtime` | `query` | `boolean` | no |
| `select` | `query` | `string` | no |
| `sonar` | `query` | `boolean` | no |
| `sort` | `query` | `string` | no |
| `sortby` | `query` | `string` | no |
| `timeRange` | `query` | `string` | no |
| `timeUnit` | `query` | `string` | no |
| `topk` | `query` | `string` | no |
| `tsAscending` | `query` | `boolean` | no |
| `tzo` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1OptimizedStats` | `googleCloudApigeeV1OptimizedStatsSchema` | `src/models/google-cloud-apigee-v1-optimized-stats.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsQueriesCreate

- **Signature**: `apigeeOrganizationsEnvironmentsQueriesCreate(request: Organizations.ApigeeOrganizationsEnvironmentsQueriesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AsyncQuery, Organizations.ApigeeOrganizationsEnvironmentsQueriesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/queries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsQueriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsQueriesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Query` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Query` | `googleCloudApigeeV1QuerySchema` | `src/models/google-cloud-apigee-v1-query.ts` |
| `GoogleCloudApigeeV1AsyncQuery` | `googleCloudApigeeV1AsyncQuerySchema` | `src/models/google-cloud-apigee-v1-async-query.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsQueriesGet

- **Signature**: `apigeeOrganizationsEnvironmentsQueriesGet(request: Organizations.ApigeeOrganizationsEnvironmentsQueriesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AsyncQuery, Organizations.ApigeeOrganizationsEnvironmentsQueriesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsQueriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsQueriesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `queriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AsyncQuery` | `googleCloudApigeeV1AsyncQuerySchema` | `src/models/google-cloud-apigee-v1-async-query.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsQueriesGetResult

- **Signature**: `apigeeOrganizationsEnvironmentsQueriesGetResult(request: Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResultRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResultError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}/result`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResultRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `queriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsQueriesGetResulturl

- **Signature**: `apigeeOrganizationsEnvironmentsQueriesGetResulturl(request: Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse, Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResulturlError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries/{queriesId}/resulturl`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResulturlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `queriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse` | `googleCloudApigeeV1GetAsyncQueryResultUrlResponseSchema` | `src/models/google-cloud-apigee-v1-get-async-query-result-url-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsQueriesList

- **Signature**: `apigeeOrganizationsEnvironmentsQueriesList(request: Organizations.ApigeeOrganizationsEnvironmentsQueriesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListAsyncQueriesResponse, Organizations.ApigeeOrganizationsEnvironmentsQueriesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/queries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListAsyncQueriesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsQueriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsQueriesListRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `dataset` | `query` | `string` | no |
| `from` | `query` | `string` | no |
| `inclQueriesWithoutReport` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `submittedBy` | `query` | `string` | no |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListAsyncQueriesResponse` | `googleCloudApigeeV1ListAsyncQueriesResponseSchema` | `src/models/google-cloud-apigee-v1-list-async-queries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsReferencesCreate

- **Signature**: `apigeeOrganizationsEnvironmentsReferencesCreate(request: Organizations.ApigeeOrganizationsEnvironmentsReferencesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Reference, Organizations.ApigeeOrganizationsEnvironmentsReferencesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/references`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsReferencesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsReferencesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Reference` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Reference` | `googleCloudApigeeV1ReferenceSchema` | `src/models/google-cloud-apigee-v1-reference.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsReferencesDelete

- **Signature**: `apigeeOrganizationsEnvironmentsReferencesDelete(request: Organizations.ApigeeOrganizationsEnvironmentsReferencesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Reference, Organizations.ApigeeOrganizationsEnvironmentsReferencesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsReferencesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsReferencesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `referencesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Reference` | `googleCloudApigeeV1ReferenceSchema` | `src/models/google-cloud-apigee-v1-reference.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsReferencesGet

- **Signature**: `apigeeOrganizationsEnvironmentsReferencesGet(request: Organizations.ApigeeOrganizationsEnvironmentsReferencesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Reference, Organizations.ApigeeOrganizationsEnvironmentsReferencesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsReferencesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsReferencesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `referencesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Reference` | `googleCloudApigeeV1ReferenceSchema` | `src/models/google-cloud-apigee-v1-reference.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsReferencesUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsReferencesUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsReferencesUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Reference, Organizations.ApigeeOrganizationsEnvironmentsReferencesUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsReferencesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsReferencesUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `referencesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Reference` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Reference` | `googleCloudApigeeV1ReferenceSchema` | `src/models/google-cloud-apigee-v1-reference.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsResourcefilesCreate

- **Signature**: `apigeeOrganizationsEnvironmentsResourcefilesCreate(request: Organizations.ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ResourceFile, Organizations.ApigeeOrganizationsEnvironmentsResourcefilesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ResourceFile`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `type` | `query` | `string` | no |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1ResourceFile` | `googleCloudApigeeV1ResourceFileSchema` | `src/models/google-cloud-apigee-v1-resource-file.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsResourcefilesDelete

- **Signature**: `apigeeOrganizationsEnvironmentsResourcefilesDelete(request: Organizations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ResourceFile, Organizations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ResourceFile`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `type` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ResourceFile` | `googleCloudApigeeV1ResourceFileSchema` | `src/models/google-cloud-apigee-v1-resource-file.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsResourcefilesGet

- **Signature**: `apigeeOrganizationsEnvironmentsResourcefilesGet(request: Organizations.ApigeeOrganizationsEnvironmentsResourcefilesGetRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsEnvironmentsResourcefilesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `type` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsResourcefilesList

- **Signature**: `apigeeOrganizationsEnvironmentsResourcefilesList(request: Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListEnvironmentResourcesResponse, Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentResourcesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentResourcesResponse` | `googleCloudApigeeV1ListEnvironmentResourcesResponseSchema` | `src/models/google-cloud-apigee-v1-list-environment-resources-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources

- **Signature**: `apigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources(request: Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListEnvironmentResourcesResponse, Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentResourcesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `type` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListEnvironmentResourcesResponse` | `googleCloudApigeeV1ListEnvironmentResourcesResponseSchema` | `src/models/google-cloud-apigee-v1-list-environment-resources-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsResourcefilesUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsResourcefilesUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ResourceFile, Organizations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}/{name}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ResourceFile`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `type` | `path` | `string` | yes |
| `name` | `path` | `string` | yes |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1ResourceFile` | `googleCloudApigeeV1ResourceFileSchema` | `src/models/google-cloud-apigee-v1-resource-file.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityAction, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityActionId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityAction` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `googleCloudApigeeV1SecurityActionSchema` | `src/models/google-cloud-apigee-v1-security-action.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsDelete

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsDelete(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityActionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsDisable

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsDisable(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityAction, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDisableError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}:disable`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDisableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityActionsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `googleCloudApigeeV1SecurityActionSchema` | `src/models/google-cloud-apigee-v1-security-action.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsEnable

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsEnable(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityAction, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsEnableError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}:enable`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsEnableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityActionsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `googleCloudApigeeV1SecurityActionSchema` | `src/models/google-cloud-apigee-v1-security-action.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsGet

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsGet(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityAction, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityActionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `googleCloudApigeeV1SecurityActionSchema` | `src/models/google-cloud-apigee-v1-security-action.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsList

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsList(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityActionsResponse, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityActionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityActionsResponse` | `googleCloudApigeeV1ListSecurityActionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-actions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityActionsPatch

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityActionsPatch(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityAction, Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions/{securityActionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityActionsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityAction` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityAction` | `googleCloudApigeeV1SecurityActionSchema` | `src/models/google-cloud-apigee-v1-security-action.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse, Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents:batchUpdate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest` | `googleCloudApigeeV1BatchUpdateSecurityIncidentsRequestSchema` | `src/models/google-cloud-apigee-v1-batch-update-security-incidents-request.ts` |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse` | `googleCloudApigeeV1BatchUpdateSecurityIncidentsResponseSchema` | `src/models/google-cloud-apigee-v1-batch-update-security-incidents-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityIncidentsGet

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityIncidentsGet(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityIncident, Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityIncident`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityIncidentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityIncident` | `googleCloudApigeeV1SecurityIncidentSchema` | `src/models/google-cloud-apigee-v1-security-incident.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityIncidentsList

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityIncidentsList(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityIncidentsResponse, Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityIncidentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityIncidentsResponse` | `googleCloudApigeeV1ListSecurityIncidentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-incidents-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityIncidentsPatch

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityIncidentsPatch(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityIncident, Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityIncident`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityIncidentsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityIncident` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityIncident` | `googleCloudApigeeV1SecurityIncidentSchema` | `src/models/google-cloud-apigee-v1-security-incident.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityReportsCreate

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityReportsCreate(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityReport, Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1SecurityReportQuery` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityReportQuery` | `googleCloudApigeeV1SecurityReportQuerySchema` | `src/models/google-cloud-apigee-v1-security-report-query.ts` |
| `GoogleCloudApigeeV1SecurityReport` | `googleCloudApigeeV1SecurityReportSchema` | `src/models/google-cloud-apigee-v1-security-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityReportsGet

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityReportsGet(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityReport, Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityReportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityReport` | `googleCloudApigeeV1SecurityReportSchema` | `src/models/google-cloud-apigee-v1-security-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityReportsGetResult

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityReportsGetResult(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}/result`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityReportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityReportsGetResultView

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityReportsGetResultView(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityReportResultView, Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}/resultView`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityReportResultView`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `securityReportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityReportResultView` | `googleCloudApigeeV1SecurityReportResultViewSchema` | `src/models/google-cloud-apigee-v1-security-report-result-view.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityReportsList

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityReportsList(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityReportsResponse, Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityReportsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityReportsListRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `dataset` | `query` | `string` | no |
| `from` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `submittedBy` | `query` | `string` | no |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityReportsResponse` | `googleCloudApigeeV1ListSecurityReportsResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-reports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1QueryTabularStatsResponse, Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTabularStats`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1QueryTabularStatsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1QueryTabularStatsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1QueryTabularStatsRequest` | `googleCloudApigeeV1QueryTabularStatsRequestSchema` | `src/models/google-cloud-apigee-v1-query-tabular-stats-request.ts` |
| `GoogleCloudApigeeV1QueryTabularStatsResponse` | `googleCloudApigeeV1QueryTabularStatsResponseSchema` | `src/models/google-cloud-apigee-v1-query-tabular-stats-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats

- **Signature**: `apigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats(request: Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1QueryTimeSeriesStatsResponse, Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTimeSeriesStats`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1QueryTimeSeriesStatsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1QueryTimeSeriesStatsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsRequest` | `googleCloudApigeeV1QueryTimeSeriesStatsRequestSchema` | `src/models/google-cloud-apigee-v1-query-time-series-stats-request.ts` |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsResponse` | `googleCloudApigeeV1QueryTimeSeriesStatsResponseSchema` | `src/models/google-cloud-apigee-v1-query-time-series-stats-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSetIamPolicy

- **Signature**: `apigeeOrganizationsEnvironmentsSetIamPolicy(request: Organizations.ApigeeOrganizationsEnvironmentsSetIamPolicyRequest, options?: RequestOptions): ApiPromise<GoogleIamV1Policy, Organizations.ApigeeOrganizationsEnvironmentsSetIamPolicyError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSetIamPolicyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleIamV1SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1SetIamPolicyRequest` | `googleIamV1SetIamPolicyRequestSchema` | `src/models/google-iam-v1-set-iam-policy-request.ts` |
| `GoogleIamV1Policy` | `googleIamV1PolicySchema` | `src/models/google-iam-v1-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSharedflowsDeploymentsList

- **Signature**: `apigeeOrganizationsEnvironmentsSharedflowsDeploymentsList(request: Organizations.ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy

- **Signature**: `apigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy(request: Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Deployment, Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `override` | `query` | `boolean` | no |
| `serviceAccount` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Deployment` | `googleCloudApigeeV1DeploymentSchema` | `src/models/google-cloud-apigee-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments

- **Signature**: `apigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments(request: Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Deployment, Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Deployment` | `googleCloudApigeeV1DeploymentSchema` | `src/models/google-cloud-apigee-v1-deployment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy

- **Signature**: `apigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy(request: Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsStatsGet

- **Signature**: `apigeeOrganizationsEnvironmentsStatsGet(request: Organizations.ApigeeOrganizationsEnvironmentsStatsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Stats, Organizations.ApigeeOrganizationsEnvironmentsStatsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/stats/{statsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Stats`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsStatsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsStatsGetRequest` (18):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `statsId` | `path` | `string` | yes |
| `accuracy` | `query` | `string` | no |
| `aggTable` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `string` | no |
| `offset` | `query` | `string` | no |
| `realtime` | `query` | `boolean` | no |
| `select` | `query` | `string` | no |
| `sonar` | `query` | `boolean` | no |
| `sort` | `query` | `string` | no |
| `sortby` | `query` | `string` | no |
| `timeRange` | `query` | `string` | no |
| `timeUnit` | `query` | `string` | no |
| `topk` | `query` | `string` | no |
| `tsAscending` | `query` | `boolean` | no |
| `tzo` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Stats` | `googleCloudApigeeV1StatsSchema` | `src/models/google-cloud-apigee-v1-stats.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsSubscribe

- **Signature**: `apigeeOrganizationsEnvironmentsSubscribe(request: Organizations.ApigeeOrganizationsEnvironmentsSubscribeRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Subscription, Organizations.ApigeeOrganizationsEnvironmentsSubscribeError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:subscribe`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Subscription`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsSubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsSubscribeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Subscription` | `googleCloudApigeeV1SubscriptionSchema` | `src/models/google-cloud-apigee-v1-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTargetserversCreate

- **Signature**: `apigeeOrganizationsEnvironmentsTargetserversCreate(request: Organizations.ApigeeOrganizationsEnvironmentsTargetserversCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TargetServer, Organizations.ApigeeOrganizationsEnvironmentsTargetserversCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTargetserversCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTargetserversCreateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `name` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1TargetServer` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `googleCloudApigeeV1TargetServerSchema` | `src/models/google-cloud-apigee-v1-target-server.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTargetserversDelete

- **Signature**: `apigeeOrganizationsEnvironmentsTargetserversDelete(request: Organizations.ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TargetServer, Organizations.ApigeeOrganizationsEnvironmentsTargetserversDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTargetserversDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `targetserversId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `googleCloudApigeeV1TargetServerSchema` | `src/models/google-cloud-apigee-v1-target-server.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTargetserversGet

- **Signature**: `apigeeOrganizationsEnvironmentsTargetserversGet(request: Organizations.ApigeeOrganizationsEnvironmentsTargetserversGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TargetServer, Organizations.ApigeeOrganizationsEnvironmentsTargetserversGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTargetserversGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTargetserversGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `targetserversId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `googleCloudApigeeV1TargetServerSchema` | `src/models/google-cloud-apigee-v1-target-server.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTargetserversUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsTargetserversUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TargetServer, Organizations.ApigeeOrganizationsEnvironmentsTargetserversUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}/targetservers/{targetserversId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTargetserversUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `targetserversId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1TargetServer` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TargetServer` | `googleCloudApigeeV1TargetServerSchema` | `src/models/google-cloud-apigee-v1-target-server.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTestIamPermissions

- **Signature**: `apigeeOrganizationsEnvironmentsTestIamPermissions(request: Organizations.ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<GoogleIamV1TestIamPermissionsResponse, Organizations.ApigeeOrganizationsEnvironmentsTestIamPermissionsError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleIamV1TestIamPermissionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleIamV1TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1TestIamPermissionsRequest` | `googleIamV1TestIamPermissionsRequestSchema` | `src/models/google-iam-v1-test-iam-permissions-request.ts` |
| `GoogleIamV1TestIamPermissionsResponse` | `googleIamV1TestIamPermissionsResponseSchema` | `src/models/google-iam-v1-test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTraceConfigOverridesCreate

- **Signature**: `apigeeOrganizationsEnvironmentsTraceConfigOverridesCreate(request: Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TraceConfigOverride, Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1TraceConfigOverride` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TraceConfigOverride` | `googleCloudApigeeV1TraceConfigOverrideSchema` | `src/models/google-cloud-apigee-v1-trace-config-override.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTraceConfigOverridesDelete

- **Signature**: `apigeeOrganizationsEnvironmentsTraceConfigOverridesDelete(request: Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `overridesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTraceConfigOverridesGet

- **Signature**: `apigeeOrganizationsEnvironmentsTraceConfigOverridesGet(request: Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TraceConfigOverride, Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `overridesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TraceConfigOverride` | `googleCloudApigeeV1TraceConfigOverrideSchema` | `src/models/google-cloud-apigee-v1-trace-config-override.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTraceConfigOverridesList

- **Signature**: `apigeeOrganizationsEnvironmentsTraceConfigOverridesList(request: Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListTraceConfigOverridesResponse, Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListTraceConfigOverridesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListTraceConfigOverridesResponse` | `googleCloudApigeeV1ListTraceConfigOverridesResponseSchema` | `src/models/google-cloud-apigee-v1-list-trace-config-overrides-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsTraceConfigOverridesPatch

- **Signature**: `apigeeOrganizationsEnvironmentsTraceConfigOverridesPatch(request: Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TraceConfigOverride, Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides/{overridesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `overridesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1TraceConfigOverride` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TraceConfigOverride` | `googleCloudApigeeV1TraceConfigOverrideSchema` | `src/models/google-cloud-apigee-v1-trace-config-override.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsUnsubscribe

- **Signature**: `apigeeOrganizationsEnvironmentsUnsubscribe(request: Organizations.ApigeeOrganizationsEnvironmentsUnsubscribeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsEnvironmentsUnsubscribeError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}:unsubscribe`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsUnsubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsUnsubscribeRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Subscription` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Subscription` | `googleCloudApigeeV1SubscriptionSchema` | `src/models/google-cloud-apigee-v1-subscription.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsUpdate

- **Signature**: `apigeeOrganizationsEnvironmentsUpdate(request: Organizations.ApigeeOrganizationsEnvironmentsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Environment, Organizations.ApigeeOrganizationsEnvironmentsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Environment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Environment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Environment` | `googleCloudApigeeV1EnvironmentSchema` | `src/models/google-cloud-apigee-v1-environment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsUpdateDebugmask

- **Signature**: `apigeeOrganizationsEnvironmentsUpdateDebugmask(request: Organizations.ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DebugMask, Organizations.ApigeeOrganizationsEnvironmentsUpdateDebugmaskError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DebugMask`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsUpdateDebugmaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `replaceRepeatedFields` | `query` | `boolean` | no |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1DebugMask` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DebugMask` | `googleCloudApigeeV1DebugMaskSchema` | `src/models/google-cloud-apigee-v1-debug-mask.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsUpdateEnvironment

- **Signature**: `apigeeOrganizationsEnvironmentsUpdateEnvironment(request: Organizations.ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Environment, Organizations.ApigeeOrganizationsEnvironmentsUpdateEnvironmentError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/environments/{environmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Environment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsUpdateEnvironmentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Environment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Environment` | `googleCloudApigeeV1EnvironmentSchema` | `src/models/google-cloud-apigee-v1-environment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig

- **Signature**: `apigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig(request: Organizations.ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityActionsConfig, Organizations.ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/securityActionsConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityActionsConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityActionsConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityActionsConfig` | `googleCloudApigeeV1SecurityActionsConfigSchema` | `src/models/google-cloud-apigee-v1-security-actions-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsEnvironmentsUpdateTraceConfig

- **Signature**: `apigeeOrganizationsEnvironmentsUpdateTraceConfig(request: Organizations.ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1TraceConfig, Organizations.ApigeeOrganizationsEnvironmentsUpdateTraceConfigError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1TraceConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsEnvironmentsUpdateTraceConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1TraceConfig` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1TraceConfig` | `googleCloudApigeeV1TraceConfigSchema` | `src/models/google-cloud-apigee-v1-trace-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGet

- **Signature**: `apigeeOrganizationsGet(request: Organizations.ApigeeOrganizationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Organization, Organizations.ApigeeOrganizationsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Organization`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Organization` | `googleCloudApigeeV1OrganizationSchema` | `src/models/google-cloud-apigee-v1-organization.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetControlPlaneAccess

- **Signature**: `apigeeOrganizationsGetControlPlaneAccess(request: Organizations.ApigeeOrganizationsGetControlPlaneAccessRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ControlPlaneAccess, Organizations.ApigeeOrganizationsGetControlPlaneAccessError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/controlPlaneAccess`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ControlPlaneAccess`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetControlPlaneAccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetControlPlaneAccessRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ControlPlaneAccess` | `googleCloudApigeeV1ControlPlaneAccessSchema` | `src/models/google-cloud-apigee-v1-control-plane-access.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetDeployedIngressConfig

- **Signature**: `apigeeOrganizationsGetDeployedIngressConfig(request: Organizations.ApigeeOrganizationsGetDeployedIngressConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1IngressConfig, Organizations.ApigeeOrganizationsGetDeployedIngressConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/deployedIngressConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1IngressConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetDeployedIngressConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetDeployedIngressConfigRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `view` | `query` | `View` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `View` | `viewSchema` | `src/models/view.ts` |
| `GoogleCloudApigeeV1IngressConfig` | `googleCloudApigeeV1IngressConfigSchema` | `src/models/google-cloud-apigee-v1-ingress-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetMcpServerConfig

- **Signature**: `apigeeOrganizationsGetMcpServerConfig(request: Organizations.ApigeeOrganizationsGetMcpServerConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1McpServerConfig, Organizations.ApigeeOrganizationsGetMcpServerConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/mcpServerConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1McpServerConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetMcpServerConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetMcpServerConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1McpServerConfig` | `googleCloudApigeeV1McpServerConfigSchema` | `src/models/google-cloud-apigee-v1-mcp-server-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetProjectMapping

- **Signature**: `apigeeOrganizationsGetProjectMapping(request: Organizations.ApigeeOrganizationsGetProjectMappingRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1OrganizationProjectMapping, Organizations.ApigeeOrganizationsGetProjectMappingError>`
- **Wire**: `GET /v1/organizations/{organizationsId}:getProjectMapping`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1OrganizationProjectMapping`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetProjectMappingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetProjectMappingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1OrganizationProjectMapping` | `googleCloudApigeeV1OrganizationProjectMappingSchema` | `src/models/google-cloud-apigee-v1-organization-project-mapping.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetRuntimeConfig

- **Signature**: `apigeeOrganizationsGetRuntimeConfig(request: Organizations.ApigeeOrganizationsGetRuntimeConfigRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1RuntimeConfig, Organizations.ApigeeOrganizationsGetRuntimeConfigError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/runtimeConfig`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1RuntimeConfig`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetRuntimeConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetRuntimeConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1RuntimeConfig` | `googleCloudApigeeV1RuntimeConfigSchema` | `src/models/google-cloud-apigee-v1-runtime-config.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetSecuritySettings

- **Signature**: `apigeeOrganizationsGetSecuritySettings(request: Organizations.ApigeeOrganizationsGetSecuritySettingsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecuritySettings, Organizations.ApigeeOrganizationsGetSecuritySettingsError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securitySettings`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecuritySettings`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetSecuritySettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetSecuritySettingsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecuritySettings` | `googleCloudApigeeV1SecuritySettingsSchema` | `src/models/google-cloud-apigee-v1-security-settings.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsGetSyncAuthorization

- **Signature**: `apigeeOrganizationsGetSyncAuthorization(request: Organizations.ApigeeOrganizationsGetSyncAuthorizationRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SyncAuthorization, Organizations.ApigeeOrganizationsGetSyncAuthorizationError>`
- **Wire**: `POST /v1/organizations/{organizationsId}:getSyncAuthorization`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SyncAuthorization`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsGetSyncAuthorizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsGetSyncAuthorizationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SyncAuthorization` | `googleCloudApigeeV1SyncAuthorizationSchema` | `src/models/google-cloud-apigee-v1-sync-authorization.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostQueriesCreate

- **Signature**: `apigeeOrganizationsHostQueriesCreate(request: Organizations.ApigeeOrganizationsHostQueriesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AsyncQuery, Organizations.ApigeeOrganizationsHostQueriesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/hostQueries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostQueriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostQueriesCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Query` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Query` | `googleCloudApigeeV1QuerySchema` | `src/models/google-cloud-apigee-v1-query.ts` |
| `GoogleCloudApigeeV1AsyncQuery` | `googleCloudApigeeV1AsyncQuerySchema` | `src/models/google-cloud-apigee-v1-async-query.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostQueriesGet

- **Signature**: `apigeeOrganizationsHostQueriesGet(request: Organizations.ApigeeOrganizationsHostQueriesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AsyncQuery, Organizations.ApigeeOrganizationsHostQueriesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostQueriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostQueriesGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostQueriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AsyncQuery` | `googleCloudApigeeV1AsyncQuerySchema` | `src/models/google-cloud-apigee-v1-async-query.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostQueriesGetResult

- **Signature**: `apigeeOrganizationsHostQueriesGetResult(request: Organizations.ApigeeOrganizationsHostQueriesGetResultRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsHostQueriesGetResultError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}/result`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostQueriesGetResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostQueriesGetResultRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostQueriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostQueriesGetResultView

- **Signature**: `apigeeOrganizationsHostQueriesGetResultView(request: Organizations.ApigeeOrganizationsHostQueriesGetResultViewRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1AsyncQueryResultView, Organizations.ApigeeOrganizationsHostQueriesGetResultViewError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostQueries/{hostQueriesId}/resultView`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1AsyncQueryResultView`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostQueriesGetResultViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostQueriesGetResultViewRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostQueriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1AsyncQueryResultView` | `googleCloudApigeeV1AsyncQueryResultViewSchema` | `src/models/google-cloud-apigee-v1-async-query-result-view.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostQueriesList

- **Signature**: `apigeeOrganizationsHostQueriesList(request: Organizations.ApigeeOrganizationsHostQueriesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListAsyncQueriesResponse, Organizations.ApigeeOrganizationsHostQueriesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostQueries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListAsyncQueriesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostQueriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostQueriesListRequest` (8):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `dataset` | `query` | `string` | no |
| `envgroupHostname` | `query` | `string` | no |
| `from` | `query` | `string` | no |
| `inclQueriesWithoutReport` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `submittedBy` | `query` | `string` | no |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListAsyncQueriesResponse` | `googleCloudApigeeV1ListAsyncQueriesResponseSchema` | `src/models/google-cloud-apigee-v1-list-async-queries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostSecurityReportsCreate

- **Signature**: `apigeeOrganizationsHostSecurityReportsCreate(request: Organizations.ApigeeOrganizationsHostSecurityReportsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityReport, Organizations.ApigeeOrganizationsHostSecurityReportsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/hostSecurityReports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostSecurityReportsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostSecurityReportsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1SecurityReportQuery` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityReportQuery` | `googleCloudApigeeV1SecurityReportQuerySchema` | `src/models/google-cloud-apigee-v1-security-report-query.ts` |
| `GoogleCloudApigeeV1SecurityReport` | `googleCloudApigeeV1SecurityReportSchema` | `src/models/google-cloud-apigee-v1-security-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostSecurityReportsGet

- **Signature**: `apigeeOrganizationsHostSecurityReportsGet(request: Organizations.ApigeeOrganizationsHostSecurityReportsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityReport, Organizations.ApigeeOrganizationsHostSecurityReportsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostSecurityReportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostSecurityReportsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostSecurityReportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityReport` | `googleCloudApigeeV1SecurityReportSchema` | `src/models/google-cloud-apigee-v1-security-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostSecurityReportsGetResult

- **Signature**: `apigeeOrganizationsHostSecurityReportsGetResult(request: Organizations.ApigeeOrganizationsHostSecurityReportsGetResultRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsHostSecurityReportsGetResultError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}/result`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostSecurityReportsGetResultError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostSecurityReportsGetResultRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostSecurityReportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostSecurityReportsGetResultView

- **Signature**: `apigeeOrganizationsHostSecurityReportsGetResultView(request: Organizations.ApigeeOrganizationsHostSecurityReportsGetResultViewRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityReportResultView, Organizations.ApigeeOrganizationsHostSecurityReportsGetResultViewError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostSecurityReports/{hostSecurityReportsId}/resultView`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityReportResultView`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostSecurityReportsGetResultViewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostSecurityReportsGetResultViewRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostSecurityReportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityReportResultView` | `googleCloudApigeeV1SecurityReportResultViewSchema` | `src/models/google-cloud-apigee-v1-security-report-result-view.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostSecurityReportsList

- **Signature**: `apigeeOrganizationsHostSecurityReportsList(request: Organizations.ApigeeOrganizationsHostSecurityReportsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityReportsResponse, Organizations.ApigeeOrganizationsHostSecurityReportsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostSecurityReports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityReportsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostSecurityReportsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostSecurityReportsListRequest` (9):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `dataset` | `query` | `string` | no |
| `envgroupHostname` | `query` | `string` | no |
| `from` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `status` | `query` | `string` | no |
| `submittedBy` | `query` | `string` | no |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityReportsResponse` | `googleCloudApigeeV1ListSecurityReportsResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-reports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsHostStatsGet

- **Signature**: `apigeeOrganizationsHostStatsGet(request: Organizations.ApigeeOrganizationsHostStatsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Stats, Organizations.ApigeeOrganizationsHostStatsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/hostStats/{hostStatsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Stats`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsHostStatsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsHostStatsGetRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `hostStatsId` | `path` | `string` | yes |
| `accuracy` | `query` | `string` | no |
| `envgroupHostname` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `string` | no |
| `offset` | `query` | `string` | no |
| `realtime` | `query` | `boolean` | no |
| `select` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `sortby` | `query` | `string` | no |
| `timeRange` | `query` | `string` | no |
| `timeUnit` | `query` | `string` | no |
| `topk` | `query` | `string` | no |
| `tsAscending` | `query` | `boolean` | no |
| `tzo` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Stats` | `googleCloudApigeeV1StatsSchema` | `src/models/google-cloud-apigee-v1-stats.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesAttachmentsCreate

- **Signature**: `apigeeOrganizationsInstancesAttachmentsCreate(request: Organizations.ApigeeOrganizationsInstancesAttachmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesAttachmentsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/attachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesAttachmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesAttachmentsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1InstanceAttachment` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1InstanceAttachment` | `googleCloudApigeeV1InstanceAttachmentSchema` | `src/models/google-cloud-apigee-v1-instance-attachment.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesAttachmentsDelete

- **Signature**: `apigeeOrganizationsInstancesAttachmentsDelete(request: Organizations.ApigeeOrganizationsInstancesAttachmentsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesAttachmentsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesAttachmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesAttachmentsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `attachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesAttachmentsGet

- **Signature**: `apigeeOrganizationsInstancesAttachmentsGet(request: Organizations.ApigeeOrganizationsInstancesAttachmentsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1InstanceAttachment, Organizations.ApigeeOrganizationsInstancesAttachmentsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1InstanceAttachment`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesAttachmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesAttachmentsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `attachmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1InstanceAttachment` | `googleCloudApigeeV1InstanceAttachmentSchema` | `src/models/google-cloud-apigee-v1-instance-attachment.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesAttachmentsList

- **Signature**: `apigeeOrganizationsInstancesAttachmentsList(request: Organizations.ApigeeOrganizationsInstancesAttachmentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListInstanceAttachmentsResponse, Organizations.ApigeeOrganizationsInstancesAttachmentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/attachments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListInstanceAttachmentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesAttachmentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesAttachmentsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListInstanceAttachmentsResponse` | `googleCloudApigeeV1ListInstanceAttachmentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-instance-attachments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesCanaryevaluationsCreate

- **Signature**: `apigeeOrganizationsInstancesCanaryevaluationsCreate(request: Organizations.ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesCanaryevaluationsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesCanaryevaluationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1CanaryEvaluation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CanaryEvaluation` | `googleCloudApigeeV1CanaryEvaluationSchema` | `src/models/google-cloud-apigee-v1-canary-evaluation.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesCanaryevaluationsGet

- **Signature**: `apigeeOrganizationsInstancesCanaryevaluationsGet(request: Organizations.ApigeeOrganizationsInstancesCanaryevaluationsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1CanaryEvaluation, Organizations.ApigeeOrganizationsInstancesCanaryevaluationsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations/{canaryevaluationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1CanaryEvaluation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesCanaryevaluationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesCanaryevaluationsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `canaryevaluationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CanaryEvaluation` | `googleCloudApigeeV1CanaryEvaluationSchema` | `src/models/google-cloud-apigee-v1-canary-evaluation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesCreate

- **Signature**: `apigeeOrganizationsInstancesCreate(request: Organizations.ApigeeOrganizationsInstancesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/instances`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Instance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Instance` | `googleCloudApigeeV1InstanceSchema` | `src/models/google-cloud-apigee-v1-instance.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesDelete

- **Signature**: `apigeeOrganizationsInstancesDelete(request: Organizations.ApigeeOrganizationsInstancesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/instances/{instancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesGet

- **Signature**: `apigeeOrganizationsInstancesGet(request: Organizations.ApigeeOrganizationsInstancesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Instance, Organizations.ApigeeOrganizationsInstancesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Instance`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Instance` | `googleCloudApigeeV1InstanceSchema` | `src/models/google-cloud-apigee-v1-instance.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesList

- **Signature**: `apigeeOrganizationsInstancesList(request: Organizations.ApigeeOrganizationsInstancesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListInstancesResponse, Organizations.ApigeeOrganizationsInstancesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListInstancesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListInstancesResponse` | `googleCloudApigeeV1ListInstancesResponseSchema` | `src/models/google-cloud-apigee-v1-list-instances-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesNatAddressesActivate

- **Signature**: `apigeeOrganizationsInstancesNatAddressesActivate(request: Organizations.ApigeeOrganizationsInstancesNatAddressesActivateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesNatAddressesActivateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}:activate`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesNatAddressesActivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesNatAddressesActivateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `natAddressesId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesNatAddressesCreate

- **Signature**: `apigeeOrganizationsInstancesNatAddressesCreate(request: Organizations.ApigeeOrganizationsInstancesNatAddressesCreateRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesNatAddressesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesNatAddressesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesNatAddressesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1NatAddress` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1NatAddress` | `googleCloudApigeeV1NatAddressSchema` | `src/models/google-cloud-apigee-v1-nat-address.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesNatAddressesDelete

- **Signature**: `apigeeOrganizationsInstancesNatAddressesDelete(request: Organizations.ApigeeOrganizationsInstancesNatAddressesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesNatAddressesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesNatAddressesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesNatAddressesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `natAddressesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesNatAddressesGet

- **Signature**: `apigeeOrganizationsInstancesNatAddressesGet(request: Organizations.ApigeeOrganizationsInstancesNatAddressesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1NatAddress, Organizations.ApigeeOrganizationsInstancesNatAddressesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses/{natAddressesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1NatAddress`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesNatAddressesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesNatAddressesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `natAddressesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1NatAddress` | `googleCloudApigeeV1NatAddressSchema` | `src/models/google-cloud-apigee-v1-nat-address.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesNatAddressesList

- **Signature**: `apigeeOrganizationsInstancesNatAddressesList(request: Organizations.ApigeeOrganizationsInstancesNatAddressesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListNatAddressesResponse, Organizations.ApigeeOrganizationsInstancesNatAddressesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListNatAddressesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesNatAddressesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesNatAddressesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListNatAddressesResponse` | `googleCloudApigeeV1ListNatAddressesResponseSchema` | `src/models/google-cloud-apigee-v1-list-nat-addresses-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesPatch

- **Signature**: `apigeeOrganizationsInstancesPatch(request: Organizations.ApigeeOrganizationsInstancesPatchRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsInstancesPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/instances/{instancesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Instance` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Instance` | `googleCloudApigeeV1InstanceSchema` | `src/models/google-cloud-apigee-v1-instance.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsInstancesReportStatus

- **Signature**: `apigeeOrganizationsInstancesReportStatus(request: Organizations.ApigeeOrganizationsInstancesReportStatusRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsInstancesReportStatusError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/instances/{instancesId}:reportStatus`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsInstancesReportStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsInstancesReportStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `instancesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ReportInstanceStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ReportInstanceStatusRequest` | `googleCloudApigeeV1ReportInstanceStatusRequestSchema` | `src/models/google-cloud-apigee-v1-report-instance-status-request.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsCreate

- **Signature**: `apigeeOrganizationsKeyvaluemapsCreate(request: Organizations.ApigeeOrganizationsKeyvaluemapsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsKeyvaluemapsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/keyvaluemaps`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueMap` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsDelete

- **Signature**: `apigeeOrganizationsKeyvaluemapsDelete(request: Organizations.ApigeeOrganizationsKeyvaluemapsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsKeyvaluemapsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsEntriesCreate

- **Signature**: `apigeeOrganizationsKeyvaluemapsEntriesCreate(request: Organizations.ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsKeyvaluemapsEntriesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsEntriesDelete

- **Signature**: `apigeeOrganizationsKeyvaluemapsEntriesDelete(request: Organizations.ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsKeyvaluemapsEntriesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsEntriesGet

- **Signature**: `apigeeOrganizationsKeyvaluemapsEntriesGet(request: Organizations.ApigeeOrganizationsKeyvaluemapsEntriesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsKeyvaluemapsEntriesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsEntriesList

- **Signature**: `apigeeOrganizationsKeyvaluemapsEntriesList(request: Organizations.ApigeeOrganizationsKeyvaluemapsEntriesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListKeyValueEntriesResponse, Organizations.ApigeeOrganizationsKeyvaluemapsEntriesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `googleCloudApigeeV1ListKeyValueEntriesResponseSchema` | `src/models/google-cloud-apigee-v1-list-key-value-entries-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsEntriesUpdate

- **Signature**: `apigeeOrganizationsKeyvaluemapsEntriesUpdate(request: Organizations.ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueEntry, Organizations.ApigeeOrganizationsKeyvaluemapsEntriesUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `entriesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueEntry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueEntry` | `googleCloudApigeeV1KeyValueEntrySchema` | `src/models/google-cloud-apigee-v1-key-value-entry.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsGet

- **Signature**: `apigeeOrganizationsKeyvaluemapsGet(request: Organizations.ApigeeOrganizationsKeyvaluemapsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsKeyvaluemapsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsKeyvaluemapsUpdate

- **Signature**: `apigeeOrganizationsKeyvaluemapsUpdate(request: Organizations.ApigeeOrganizationsKeyvaluemapsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1KeyValueMap, Organizations.ApigeeOrganizationsKeyvaluemapsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/keyvaluemaps/{keyvaluemapsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsKeyvaluemapsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsKeyvaluemapsUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `keyvaluemapsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1KeyValueMap` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1KeyValueMap` | `googleCloudApigeeV1KeyValueMapSchema` | `src/models/google-cloud-apigee-v1-key-value-map.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsList

- **Signature**: `apigeeOrganizationsList(options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListOrganizationsResponse, Organizations.ApigeeOrganizationsListError>`
- **Wire**: `GET /v1/organizations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListOrganizationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListOrganizationsResponse` | `googleCloudApigeeV1ListOrganizationsResponseSchema` | `src/models/google-cloud-apigee-v1-list-organizations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsOperationsGet

- **Signature**: `apigeeOrganizationsOperationsGet(request: Organizations.ApigeeOrganizationsOperationsGetRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsOperationsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/operations/{operationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsOperationsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `operationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsOperationsList

- **Signature**: `apigeeOrganizationsOperationsList(request: Organizations.ApigeeOrganizationsOperationsListRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningListOperationsResponse, Organizations.ApigeeOrganizationsOperationsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/operations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleLongrunningListOperationsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsOperationsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleLongrunningListOperationsResponse` | `googleLongrunningListOperationsResponseSchema` | `src/models/google-longrunning-list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsOptimizedHostStatsGet

- **Signature**: `apigeeOrganizationsOptimizedHostStatsGet(request: Organizations.ApigeeOrganizationsOptimizedHostStatsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1OptimizedStats, Organizations.ApigeeOrganizationsOptimizedHostStatsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/optimizedHostStats/{optimizedHostStatsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1OptimizedStats`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsOptimizedHostStatsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsOptimizedHostStatsGetRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `optimizedHostStatsId` | `path` | `string` | yes |
| `accuracy` | `query` | `string` | no |
| `envgroupHostname` | `query` | `string` | no |
| `filter` | `query` | `string` | no |
| `limit` | `query` | `string` | no |
| `offset` | `query` | `string` | no |
| `realtime` | `query` | `boolean` | no |
| `select` | `query` | `string` | no |
| `sort` | `query` | `string` | no |
| `sortby` | `query` | `string` | no |
| `timeRange` | `query` | `string` | no |
| `timeUnit` | `query` | `string` | no |
| `topk` | `query` | `string` | no |
| `tsAscending` | `query` | `boolean` | no |
| `tzo` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1OptimizedStats` | `googleCloudApigeeV1OptimizedStatsSchema` | `src/models/google-cloud-apigee-v1-optimized-stats.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsReportsCreate

- **Signature**: `apigeeOrganizationsReportsCreate(request: Organizations.ApigeeOrganizationsReportsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1CustomReport, Organizations.ApigeeOrganizationsReportsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/reports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1CustomReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsReportsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsReportsCreateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1CustomReport` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CustomReport` | `googleCloudApigeeV1CustomReportSchema` | `src/models/google-cloud-apigee-v1-custom-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsReportsDelete

- **Signature**: `apigeeOrganizationsReportsDelete(request: Organizations.ApigeeOrganizationsReportsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeleteCustomReportResponse, Organizations.ApigeeOrganizationsReportsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/reports/{reportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeleteCustomReportResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsReportsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsReportsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `reportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeleteCustomReportResponse` | `googleCloudApigeeV1DeleteCustomReportResponseSchema` | `src/models/google-cloud-apigee-v1-delete-custom-report-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsReportsGet

- **Signature**: `apigeeOrganizationsReportsGet(request: Organizations.ApigeeOrganizationsReportsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1CustomReport, Organizations.ApigeeOrganizationsReportsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/reports/{reportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1CustomReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsReportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsReportsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `reportsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CustomReport` | `googleCloudApigeeV1CustomReportSchema` | `src/models/google-cloud-apigee-v1-custom-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsReportsList

- **Signature**: `apigeeOrganizationsReportsList(request: Organizations.ApigeeOrganizationsReportsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListCustomReportsResponse, Organizations.ApigeeOrganizationsReportsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/reports`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListCustomReportsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsReportsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsReportsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `expand` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListCustomReportsResponse` | `googleCloudApigeeV1ListCustomReportsResponseSchema` | `src/models/google-cloud-apigee-v1-list-custom-reports-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsReportsUpdate

- **Signature**: `apigeeOrganizationsReportsUpdate(request: Organizations.ApigeeOrganizationsReportsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1CustomReport, Organizations.ApigeeOrganizationsReportsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/reports/{reportsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1CustomReport`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsReportsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsReportsUpdateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `reportsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1CustomReport` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1CustomReport` | `googleCloudApigeeV1CustomReportSchema` | `src/models/google-cloud-apigee-v1-custom-report.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityAssessmentResultsBatchCompute

- **Signature**: `apigeeOrganizationsSecurityAssessmentResultsBatchCompute(request: Organizations.ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse, Organizations.ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityAssessmentResults:batchCompute`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest` | `googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestSchema` | `src/models/google-cloud-apigee-v1-batch-compute-security-assessment-results-request.ts` |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse` | `googleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponseSchema` | `src/models/google-cloud-apigee-v1-batch-compute-security-assessment-results-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityFeedbackCreate

- **Signature**: `apigeeOrganizationsSecurityFeedbackCreate(request: Organizations.ApigeeOrganizationsSecurityFeedbackCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityFeedback, Organizations.ApigeeOrganizationsSecurityFeedbackCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityFeedback`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityFeedback`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityFeedbackCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityFeedbackCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityFeedbackId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityFeedback` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityFeedback` | `googleCloudApigeeV1SecurityFeedbackSchema` | `src/models/google-cloud-apigee-v1-security-feedback.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityFeedbackDelete

- **Signature**: `apigeeOrganizationsSecurityFeedbackDelete(request: Organizations.ApigeeOrganizationsSecurityFeedbackDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsSecurityFeedbackDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityFeedbackDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityFeedbackDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityFeedbackId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityFeedbackGet

- **Signature**: `apigeeOrganizationsSecurityFeedbackGet(request: Organizations.ApigeeOrganizationsSecurityFeedbackGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityFeedback, Organizations.ApigeeOrganizationsSecurityFeedbackGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityFeedback`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityFeedbackGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityFeedbackGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityFeedbackId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityFeedback` | `googleCloudApigeeV1SecurityFeedbackSchema` | `src/models/google-cloud-apigee-v1-security-feedback.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityFeedbackList

- **Signature**: `apigeeOrganizationsSecurityFeedbackList(request: Organizations.ApigeeOrganizationsSecurityFeedbackListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityFeedbackResponse, Organizations.ApigeeOrganizationsSecurityFeedbackListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityFeedback`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityFeedbackResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityFeedbackListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityFeedbackListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityFeedbackResponse` | `googleCloudApigeeV1ListSecurityFeedbackResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-feedback-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityFeedbackPatch

- **Signature**: `apigeeOrganizationsSecurityFeedbackPatch(request: Organizations.ApigeeOrganizationsSecurityFeedbackPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityFeedback, Organizations.ApigeeOrganizationsSecurityFeedbackPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/securityFeedback/{securityFeedbackId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityFeedback`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityFeedbackPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityFeedbackPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityFeedbackId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityFeedback` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityFeedback` | `googleCloudApigeeV1SecurityFeedbackSchema` | `src/models/google-cloud-apigee-v1-security-feedback.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityMonitoringConditionsCreate

- **Signature**: `apigeeOrganizationsSecurityMonitoringConditionsCreate(request: Organizations.ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityMonitoringCondition, Organizations.ApigeeOrganizationsSecurityMonitoringConditionsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityMonitoringConditions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityMonitoringConditionId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityMonitoringCondition` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `googleCloudApigeeV1SecurityMonitoringConditionSchema` | `src/models/google-cloud-apigee-v1-security-monitoring-condition.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityMonitoringConditionsDelete

- **Signature**: `apigeeOrganizationsSecurityMonitoringConditionsDelete(request: Organizations.ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsSecurityMonitoringConditionsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityMonitoringConditionsId` | `path` | `string` | yes |
| `riskAssessmentType` | `query` | `RiskAssessmentType2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RiskAssessmentType2` | `riskAssessmentType2Schema` | `src/models/risk-assessment-type2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityMonitoringConditionsGet

- **Signature**: `apigeeOrganizationsSecurityMonitoringConditionsGet(request: Organizations.ApigeeOrganizationsSecurityMonitoringConditionsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityMonitoringCondition, Organizations.ApigeeOrganizationsSecurityMonitoringConditionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityMonitoringConditionsId` | `path` | `string` | yes |
| `riskAssessmentType` | `query` | `RiskAssessmentType2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RiskAssessmentType2` | `riskAssessmentType2Schema` | `src/models/risk-assessment-type2.ts` |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `googleCloudApigeeV1SecurityMonitoringConditionSchema` | `src/models/google-cloud-apigee-v1-security-monitoring-condition.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityMonitoringConditionsList

- **Signature**: `apigeeOrganizationsSecurityMonitoringConditionsList(request: Organizations.ApigeeOrganizationsSecurityMonitoringConditionsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse, Organizations.ApigeeOrganizationsSecurityMonitoringConditionsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityMonitoringConditions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsListRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `riskAssessmentType` | `query` | `RiskAssessmentType2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RiskAssessmentType2` | `riskAssessmentType2Schema` | `src/models/risk-assessment-type2.ts` |
| `GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse` | `googleCloudApigeeV1ListSecurityMonitoringConditionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-monitoring-conditions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityMonitoringConditionsPatch

- **Signature**: `apigeeOrganizationsSecurityMonitoringConditionsPatch(request: Organizations.ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityMonitoringCondition, Organizations.ApigeeOrganizationsSecurityMonitoringConditionsPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/securityMonitoringConditions/{securityMonitoringConditionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityMonitoringConditionsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityMonitoringCondition` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `googleCloudApigeeV1SecurityMonitoringConditionSchema` | `src/models/google-cloud-apigee-v1-security-monitoring-condition.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesCreate

- **Signature**: `apigeeOrganizationsSecurityProfilesCreate(request: Organizations.ApigeeOrganizationsSecurityProfilesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfile, Organizations.ApigeeOrganizationsSecurityProfilesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityProfiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityProfile`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfileId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityProfile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityProfile` | `googleCloudApigeeV1SecurityProfileSchema` | `src/models/google-cloud-apigee-v1-security-profile.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesDelete

- **Signature**: `apigeeOrganizationsSecurityProfilesDelete(request: Organizations.ApigeeOrganizationsSecurityProfilesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsSecurityProfilesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores

- **Signature**: `apigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores(request: Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse, Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}:computeEnvironmentScores`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ComputeEnvironmentScoresResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ComputeEnvironmentScoresRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresRequest` | `googleCloudApigeeV1ComputeEnvironmentScoresRequestSchema` | `src/models/google-cloud-apigee-v1-compute-environment-scores-request.ts` |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresResponse` | `googleCloudApigeeV1ComputeEnvironmentScoresResponseSchema` | `src/models/google-cloud-apigee-v1-compute-environment-scores-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesEnvironmentsCreate

- **Signature**: `apigeeOrganizationsSecurityProfilesEnvironmentsCreate(request: Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation, Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation` | `googleCloudApigeeV1SecurityProfileEnvironmentAssociationSchema` | `src/models/google-cloud-apigee-v1-security-profile-environment-association.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesEnvironmentsDelete

- **Signature**: `apigeeOrganizationsSecurityProfilesEnvironmentsDelete(request: Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |
| `environmentsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesGet

- **Signature**: `apigeeOrganizationsSecurityProfilesGet(request: Organizations.ApigeeOrganizationsSecurityProfilesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfile, Organizations.ApigeeOrganizationsSecurityProfilesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityProfile`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityProfile` | `googleCloudApigeeV1SecurityProfileSchema` | `src/models/google-cloud-apigee-v1-security-profile.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesList

- **Signature**: `apigeeOrganizationsSecurityProfilesList(request: Organizations.ApigeeOrganizationsSecurityProfilesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityProfilesResponse, Organizations.ApigeeOrganizationsSecurityProfilesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityProfiles`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityProfilesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityProfilesResponse` | `googleCloudApigeeV1ListSecurityProfilesResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-profiles-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesListRevisions

- **Signature**: `apigeeOrganizationsSecurityProfilesListRevisions(request: Organizations.ApigeeOrganizationsSecurityProfilesListRevisionsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse, Organizations.ApigeeOrganizationsSecurityProfilesListRevisionsError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}:listRevisions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesListRevisionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesListRevisionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse` | `googleCloudApigeeV1ListSecurityProfileRevisionsResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-profile-revisions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesPatch

- **Signature**: `apigeeOrganizationsSecurityProfilesPatch(request: Organizations.ApigeeOrganizationsSecurityProfilesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfile, Organizations.ApigeeOrganizationsSecurityProfilesPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityProfile`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityProfile` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityProfile` | `googleCloudApigeeV1SecurityProfileSchema` | `src/models/google-cloud-apigee-v1-security-profile.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesV2Create

- **Signature**: `apigeeOrganizationsSecurityProfilesV2Create(request: Organizations.ApigeeOrganizationsSecurityProfilesV2CreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfileV2, Organizations.ApigeeOrganizationsSecurityProfilesV2CreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/securityProfilesV2`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesV2CreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesV2CreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfileV2Id` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityProfileV2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityProfileV2` | `googleCloudApigeeV1SecurityProfileV2Schema` | `src/models/google-cloud-apigee-v1-security-profile-v2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesV2Delete

- **Signature**: `apigeeOrganizationsSecurityProfilesV2Delete(request: Organizations.ApigeeOrganizationsSecurityProfilesV2DeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsSecurityProfilesV2DeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesV2DeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesV2DeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesV2Id` | `path` | `string` | yes |
| `riskAssessmentType` | `query` | `RiskAssessmentType2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RiskAssessmentType2` | `riskAssessmentType2Schema` | `src/models/risk-assessment-type2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesV2Get

- **Signature**: `apigeeOrganizationsSecurityProfilesV2Get(request: Organizations.ApigeeOrganizationsSecurityProfilesV2GetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfileV2, Organizations.ApigeeOrganizationsSecurityProfilesV2GetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesV2GetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesV2GetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesV2Id` | `path` | `string` | yes |
| `riskAssessmentType` | `query` | `RiskAssessmentType2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RiskAssessmentType2` | `riskAssessmentType2Schema` | `src/models/risk-assessment-type2.ts` |
| `GoogleCloudApigeeV1SecurityProfileV2` | `googleCloudApigeeV1SecurityProfileV2Schema` | `src/models/google-cloud-apigee-v1-security-profile-v2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesV2List

- **Signature**: `apigeeOrganizationsSecurityProfilesV2List(request: Organizations.ApigeeOrganizationsSecurityProfilesV2ListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSecurityProfilesV2Response, Organizations.ApigeeOrganizationsSecurityProfilesV2ListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/securityProfilesV2`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSecurityProfilesV2Response`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesV2ListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesV2ListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `riskAssessmentType` | `query` | `RiskAssessmentType2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RiskAssessmentType2` | `riskAssessmentType2Schema` | `src/models/risk-assessment-type2.ts` |
| `GoogleCloudApigeeV1ListSecurityProfilesV2Response` | `googleCloudApigeeV1ListSecurityProfilesV2ResponseSchema` | `src/models/google-cloud-apigee-v1-list-security-profiles-v2-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSecurityProfilesV2Patch

- **Signature**: `apigeeOrganizationsSecurityProfilesV2Patch(request: Organizations.ApigeeOrganizationsSecurityProfilesV2PatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecurityProfileV2, Organizations.ApigeeOrganizationsSecurityProfilesV2PatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSecurityProfilesV2PatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSecurityProfilesV2PatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `securityProfilesV2Id` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecurityProfileV2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecurityProfileV2` | `googleCloudApigeeV1SecurityProfileV2Schema` | `src/models/google-cloud-apigee-v1-security-profile-v2.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSetAddons

- **Signature**: `apigeeOrganizationsSetAddons(request: Organizations.ApigeeOrganizationsSetAddonsRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsSetAddonsError>`
- **Wire**: `POST /v1/organizations/{organizationsId}:setAddons`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSetAddonsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSetAddonsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1SetAddonsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SetAddonsRequest` | `googleCloudApigeeV1SetAddonsRequestSchema` | `src/models/google-cloud-apigee-v1-set-addons-request.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSetSyncAuthorization

- **Signature**: `apigeeOrganizationsSetSyncAuthorization(request: Organizations.ApigeeOrganizationsSetSyncAuthorizationRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SyncAuthorization, Organizations.ApigeeOrganizationsSetSyncAuthorizationError>`
- **Wire**: `POST /v1/organizations/{organizationsId}:setSyncAuthorization`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SyncAuthorization`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSetSyncAuthorizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSetSyncAuthorizationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1SyncAuthorization` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SyncAuthorization` | `googleCloudApigeeV1SyncAuthorizationSchema` | `src/models/google-cloud-apigee-v1-sync-authorization.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsCreate

- **Signature**: `apigeeOrganizationsSharedflowsCreate(request: Organizations.ApigeeOrganizationsSharedflowsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SharedFlowRevision, Organizations.ApigeeOrganizationsSharedflowsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/sharedflows`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsCreateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `action` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `space` | `query` | `string` | no |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `googleCloudApigeeV1SharedFlowRevisionSchema` | `src/models/google-cloud-apigee-v1-shared-flow-revision.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsDelete

- **Signature**: `apigeeOrganizationsSharedflowsDelete(request: Organizations.ApigeeOrganizationsSharedflowsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SharedFlow, Organizations.ApigeeOrganizationsSharedflowsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SharedFlow`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SharedFlow` | `googleCloudApigeeV1SharedFlowSchema` | `src/models/google-cloud-apigee-v1-shared-flow.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsDeploymentsList

- **Signature**: `apigeeOrganizationsSharedflowsDeploymentsList(request: Organizations.ApigeeOrganizationsSharedflowsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsSharedflowsDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsDeploymentsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsGet

- **Signature**: `apigeeOrganizationsSharedflowsGet(request: Organizations.ApigeeOrganizationsSharedflowsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SharedFlow, Organizations.ApigeeOrganizationsSharedflowsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1SharedFlow`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SharedFlow` | `googleCloudApigeeV1SharedFlowSchema` | `src/models/google-cloud-apigee-v1-shared-flow.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsList

- **Signature**: `apigeeOrganizationsSharedflowsList(request: Organizations.ApigeeOrganizationsSharedflowsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSharedFlowsResponse, Organizations.ApigeeOrganizationsSharedflowsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sharedflows`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSharedFlowsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `includeMetaData` | `query` | `boolean` | no |
| `includeRevisions` | `query` | `boolean` | no |
| `space` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSharedFlowsResponse` | `googleCloudApigeeV1ListSharedFlowsResponseSchema` | `src/models/google-cloud-apigee-v1-list-shared-flows-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsMove

- **Signature**: `apigeeOrganizationsSharedflowsMove(request: Organizations.ApigeeOrganizationsSharedflowsMoveRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SharedFlow, Organizations.ApigeeOrganizationsSharedflowsMoveError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}:move`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SharedFlow`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsMoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsMoveRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1MoveSharedFlowRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1MoveSharedFlowRequest` | `googleCloudApigeeV1MoveSharedFlowRequestSchema` | `src/models/google-cloud-apigee-v1-move-shared-flow-request.ts` |
| `GoogleCloudApigeeV1SharedFlow` | `googleCloudApigeeV1SharedFlowSchema` | `src/models/google-cloud-apigee-v1-shared-flow.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsRevisionsDelete

- **Signature**: `apigeeOrganizationsSharedflowsRevisionsDelete(request: Organizations.ApigeeOrganizationsSharedflowsRevisionsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SharedFlowRevision, Organizations.ApigeeOrganizationsSharedflowsRevisionsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsRevisionsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsRevisionsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SharedFlowRevision` | `googleCloudApigeeV1SharedFlowRevisionSchema` | `src/models/google-cloud-apigee-v1-shared-flow-revision.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsRevisionsDeploymentsList

- **Signature**: `apigeeOrganizationsSharedflowsRevisionsDeploymentsList(request: Organizations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListDeploymentsResponse, Organizations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}/deployments`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `googleCloudApigeeV1ListDeploymentsResponseSchema` | `src/models/google-cloud-apigee-v1-list-deployments-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsRevisionsGet

- **Signature**: `apigeeOrganizationsSharedflowsRevisionsGet(request: Organizations.ApigeeOrganizationsSharedflowsRevisionsGetRequest, options?: RequestOptions): ApiPromise<GoogleApiHttpBody, Organizations.ApigeeOrganizationsSharedflowsRevisionsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsRevisionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsRevisionsGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `format` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision

- **Signature**: `apigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision(request: Organizations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SharedFlowRevision, Organizations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sharedflowsId` | `path` | `string` | yes |
| `revisionsId` | `path` | `string` | yes |
| `validate` | `query` | `boolean` | no |
| `body` | `body` | `GoogleApiHttpBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleApiHttpBody` | `googleApiHttpBodySchema` | `src/models/google-api-http-body.ts` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `googleCloudApigeeV1SharedFlowRevisionSchema` | `src/models/google-cloud-apigee-v1-shared-flow-revision.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApicategoriesCreate

- **Signature**: `apigeeOrganizationsSitesApicategoriesCreate(request: Organizations.ApigeeOrganizationsSitesApicategoriesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiCategoryResponse, Organizations.ApigeeOrganizationsSitesApicategoriesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApicategoriesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApicategoriesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiCategory` | `googleCloudApigeeV1ApiCategorySchema` | `src/models/google-cloud-apigee-v1-api-category.ts` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `googleCloudApigeeV1ApiCategoryResponseSchema` | `src/models/google-cloud-apigee-v1-api-category-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApicategoriesDelete

- **Signature**: `apigeeOrganizationsSitesApicategoriesDelete(request: Organizations.ApigeeOrganizationsSitesApicategoriesDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeleteResponse, Organizations.ApigeeOrganizationsSitesApicategoriesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeleteResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApicategoriesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApicategoriesDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apicategoriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeleteResponse` | `googleCloudApigeeV1DeleteResponseSchema` | `src/models/google-cloud-apigee-v1-delete-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApicategoriesGet

- **Signature**: `apigeeOrganizationsSitesApicategoriesGet(request: Organizations.ApigeeOrganizationsSitesApicategoriesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiCategoryResponse, Organizations.ApigeeOrganizationsSitesApicategoriesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApicategoriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApicategoriesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apicategoriesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `googleCloudApigeeV1ApiCategoryResponseSchema` | `src/models/google-cloud-apigee-v1-api-category-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApicategoriesList

- **Signature**: `apigeeOrganizationsSitesApicategoriesList(request: Organizations.ApigeeOrganizationsSitesApicategoriesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListApiCategoriesResponse, Organizations.ApigeeOrganizationsSitesApicategoriesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListApiCategoriesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApicategoriesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApicategoriesListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListApiCategoriesResponse` | `googleCloudApigeeV1ListApiCategoriesResponseSchema` | `src/models/google-cloud-apigee-v1-list-api-categories-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApicategoriesPatch

- **Signature**: `apigeeOrganizationsSitesApicategoriesPatch(request: Organizations.ApigeeOrganizationsSitesApicategoriesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiCategoryResponse, Organizations.ApigeeOrganizationsSitesApicategoriesPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/sites/{sitesId}/apicategories/{apicategoriesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApicategoriesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApicategoriesPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apicategoriesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiCategory` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiCategory` | `googleCloudApigeeV1ApiCategorySchema` | `src/models/google-cloud-apigee-v1-api-category.ts` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `googleCloudApigeeV1ApiCategoryResponseSchema` | `src/models/google-cloud-apigee-v1-api-category-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsCreate

- **Signature**: `apigeeOrganizationsSitesApidocsCreate(request: Organizations.ApigeeOrganizationsSitesApidocsCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiDocResponse, Organizations.ApigeeOrganizationsSitesApidocsCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiDocResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiDoc` | `googleCloudApigeeV1ApiDocSchema` | `src/models/google-cloud-apigee-v1-api-doc.ts` |
| `GoogleCloudApigeeV1ApiDocResponse` | `googleCloudApigeeV1ApiDocResponseSchema` | `src/models/google-cloud-apigee-v1-api-doc-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsDelete

- **Signature**: `apigeeOrganizationsSitesApidocsDelete(request: Organizations.ApigeeOrganizationsSitesApidocsDeleteRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1DeleteResponse, Organizations.ApigeeOrganizationsSitesApidocsDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1DeleteResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsDeleteRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apidocsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1DeleteResponse` | `googleCloudApigeeV1DeleteResponseSchema` | `src/models/google-cloud-apigee-v1-delete-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsGet

- **Signature**: `apigeeOrganizationsSitesApidocsGet(request: Organizations.ApigeeOrganizationsSitesApidocsGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiDocResponse, Organizations.ApigeeOrganizationsSitesApidocsGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApiDocResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apidocsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiDocResponse` | `googleCloudApigeeV1ApiDocResponseSchema` | `src/models/google-cloud-apigee-v1-api-doc-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsGetDocumentation

- **Signature**: `apigeeOrganizationsSitesApidocsGetDocumentation(request: Organizations.ApigeeOrganizationsSitesApidocsGetDocumentationRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiDocDocumentationResponse, Organizations.ApigeeOrganizationsSitesApidocsGetDocumentationError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ApiDocDocumentationResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsGetDocumentationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsGetDocumentationRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apidocsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiDocDocumentationResponse` | `googleCloudApigeeV1ApiDocDocumentationResponseSchema` | `src/models/google-cloud-apigee-v1-api-doc-documentation-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsList

- **Signature**: `apigeeOrganizationsSitesApidocsList(request: Organizations.ApigeeOrganizationsSitesApidocsListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListApiDocsResponse, Organizations.ApigeeOrganizationsSitesApidocsListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListApiDocsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListApiDocsResponse` | `googleCloudApigeeV1ListApiDocsResponseSchema` | `src/models/google-cloud-apigee-v1-list-api-docs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsUpdate

- **Signature**: `apigeeOrganizationsSitesApidocsUpdate(request: Organizations.ApigeeOrganizationsSitesApidocsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiDocResponse, Organizations.ApigeeOrganizationsSitesApidocsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiDocResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsUpdateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apidocsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiDoc` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiDoc` | `googleCloudApigeeV1ApiDocSchema` | `src/models/google-cloud-apigee-v1-api-doc.ts` |
| `GoogleCloudApigeeV1ApiDocResponse` | `googleCloudApigeeV1ApiDocResponseSchema` | `src/models/google-cloud-apigee-v1-api-doc-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSitesApidocsUpdateDocumentation

- **Signature**: `apigeeOrganizationsSitesApidocsUpdateDocumentation(request: Organizations.ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ApiDocDocumentationResponse, Organizations.ApigeeOrganizationsSitesApidocsUpdateDocumentationError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/sites/{sitesId}/apidocs/{apidocsId}/documentation`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1ApiDocDocumentationResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSitesApidocsUpdateDocumentationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `sitesId` | `path` | `string` | yes |
| `apidocsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1ApiDocDocumentation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ApiDocDocumentation` | `googleCloudApigeeV1ApiDocDocumentationSchema` | `src/models/google-cloud-apigee-v1-api-doc-documentation.ts` |
| `GoogleCloudApigeeV1ApiDocDocumentationResponse` | `googleCloudApigeeV1ApiDocDocumentationResponseSchema` | `src/models/google-cloud-apigee-v1-api-doc-documentation-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesCreate

- **Signature**: `apigeeOrganizationsSpacesCreate(request: Organizations.ApigeeOrganizationsSpacesCreateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Space, Organizations.ApigeeOrganizationsSpacesCreateError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/spaces`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Space`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesCreateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `spaceId` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Space` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Space` | `googleCloudApigeeV1SpaceSchema` | `src/models/google-cloud-apigee-v1-space.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesDelete

- **Signature**: `apigeeOrganizationsSpacesDelete(request: Organizations.ApigeeOrganizationsSpacesDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Organizations.ApigeeOrganizationsSpacesDeleteError>`
- **Wire**: `DELETE /v1/organizations/{organizationsId}/spaces/{spacesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `spacesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesGet

- **Signature**: `apigeeOrganizationsSpacesGet(request: Organizations.ApigeeOrganizationsSpacesGetRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Space, Organizations.ApigeeOrganizationsSpacesGetError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/spaces/{spacesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1Space`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `spacesId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Space` | `googleCloudApigeeV1SpaceSchema` | `src/models/google-cloud-apigee-v1-space.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesGetIamPolicy

- **Signature**: `apigeeOrganizationsSpacesGetIamPolicy(request: Organizations.ApigeeOrganizationsSpacesGetIamPolicyRequest, options?: RequestOptions): ApiPromise<GoogleIamV1Policy, Organizations.ApigeeOrganizationsSpacesGetIamPolicyError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/spaces/{spacesId}:getIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesGetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesGetIamPolicyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationsId` | `path` | — | `string` | yes |
| `spacesId` | `path` | — | `string` | yes |
| `optionsRequestedPolicyVersion` | `query` | `options.requestedPolicyVersion` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1Policy` | `googleIamV1PolicySchema` | `src/models/google-iam-v1-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesList

- **Signature**: `apigeeOrganizationsSpacesList(request: Organizations.ApigeeOrganizationsSpacesListRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1ListSpacesResponse, Organizations.ApigeeOrganizationsSpacesListError>`
- **Wire**: `GET /v1/organizations/{organizationsId}/spaces`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GoogleCloudApigeeV1ListSpacesResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ListSpacesResponse` | `googleCloudApigeeV1ListSpacesResponseSchema` | `src/models/google-cloud-apigee-v1-list-spaces-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesPatch

- **Signature**: `apigeeOrganizationsSpacesPatch(request: Organizations.ApigeeOrganizationsSpacesPatchRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Space, Organizations.ApigeeOrganizationsSpacesPatchError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/spaces/{spacesId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Space`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesPatchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `spacesId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1Space` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Space` | `googleCloudApigeeV1SpaceSchema` | `src/models/google-cloud-apigee-v1-space.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesSetIamPolicy

- **Signature**: `apigeeOrganizationsSpacesSetIamPolicy(request: Organizations.ApigeeOrganizationsSpacesSetIamPolicyRequest, options?: RequestOptions): ApiPromise<GoogleIamV1Policy, Organizations.ApigeeOrganizationsSpacesSetIamPolicyError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/spaces/{spacesId}:setIamPolicy`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesSetIamPolicyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesSetIamPolicyRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `spacesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleIamV1SetIamPolicyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1SetIamPolicyRequest` | `googleIamV1SetIamPolicyRequestSchema` | `src/models/google-iam-v1-set-iam-policy-request.ts` |
| `GoogleIamV1Policy` | `googleIamV1PolicySchema` | `src/models/google-iam-v1-policy.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsSpacesTestIamPermissions

- **Signature**: `apigeeOrganizationsSpacesTestIamPermissions(request: Organizations.ApigeeOrganizationsSpacesTestIamPermissionsRequest, options?: RequestOptions): ApiPromise<GoogleIamV1TestIamPermissionsResponse, Organizations.ApigeeOrganizationsSpacesTestIamPermissionsError>`
- **Wire**: `POST /v1/organizations/{organizationsId}/spaces/{spacesId}:testIamPermissions`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleIamV1TestIamPermissionsResponse`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsSpacesTestIamPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsSpacesTestIamPermissionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `spacesId` | `path` | `string` | yes |
| `body` | `body` | `GoogleIamV1TestIamPermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleIamV1TestIamPermissionsRequest` | `googleIamV1TestIamPermissionsRequestSchema` | `src/models/google-iam-v1-test-iam-permissions-request.ts` |
| `GoogleIamV1TestIamPermissionsResponse` | `googleIamV1TestIamPermissionsResponseSchema` | `src/models/google-iam-v1-test-iam-permissions-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsUpdate

- **Signature**: `apigeeOrganizationsUpdate(request: Organizations.ApigeeOrganizationsUpdateRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1Organization, Organizations.ApigeeOrganizationsUpdateError>`
- **Wire**: `PUT /v1/organizations/{organizationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1Organization`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsUpdateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `body` | `body` | `GoogleCloudApigeeV1Organization` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1Organization` | `googleCloudApigeeV1OrganizationSchema` | `src/models/google-cloud-apigee-v1-organization.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsUpdateControlPlaneAccess

- **Signature**: `apigeeOrganizationsUpdateControlPlaneAccess(request: Organizations.ApigeeOrganizationsUpdateControlPlaneAccessRequest, options?: RequestOptions): ApiPromise<GoogleLongrunningOperation, Organizations.ApigeeOrganizationsUpdateControlPlaneAccessError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/controlPlaneAccess`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsUpdateControlPlaneAccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsUpdateControlPlaneAccessRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1ControlPlaneAccess` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1ControlPlaneAccess` | `googleCloudApigeeV1ControlPlaneAccessSchema` | `src/models/google-cloud-apigee-v1-control-plane-access.ts` |
| `GoogleLongrunningOperation` | `googleLongrunningOperationSchema` | `src/models/google-longrunning-operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### apigeeOrganizationsUpdateSecuritySettings

- **Signature**: `apigeeOrganizationsUpdateSecuritySettings(request: Organizations.ApigeeOrganizationsUpdateSecuritySettingsRequest, options?: RequestOptions): ApiPromise<GoogleCloudApigeeV1SecuritySettings, Organizations.ApigeeOrganizationsUpdateSecuritySettingsError>`
- **Wire**: `PATCH /v1/organizations/{organizationsId}/securitySettings`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GoogleCloudApigeeV1SecuritySettings`
- **Error**: `ApigeeError` with `kind: "api"`, an instance of `Organizations.ApigeeOrganizationsUpdateSecuritySettingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Organizations.ApigeeOrganizationsUpdateSecuritySettingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `organizationsId` | `path` | `string` | yes |
| `updateMask` | `query` | `string` | no |
| `body` | `body` | `GoogleCloudApigeeV1SecuritySettings` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleCloudApigeeV1SecuritySettings` | `googleCloudApigeeV1SecuritySettingsSchema` | `src/models/google-cloud-apigee-v1-security-settings.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

