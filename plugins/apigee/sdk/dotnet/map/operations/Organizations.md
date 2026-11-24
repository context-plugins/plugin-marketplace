<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organizations — operations

Accessor: `client.Organizations` · Source: `src/Apigee/Api/Organizations.cs` · 372 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ApigeeOrganizationsAnalyticsDatastoresCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAnalyticsDatastoresCreate(ApigeeOrganizationsAnalyticsDatastoresCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Datastore`
- **Error**: `ApiException<ApigeeOrganizationsAnalyticsDatastoresCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresCreateRequest.cs` |
| `GoogleCloudApigeeV1Datastore` | `src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs` |
| `ApigeeOrganizationsAnalyticsDatastoresCreateError` | `src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAnalyticsDatastoresDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAnalyticsDatastoresDelete(ApigeeOrganizationsAnalyticsDatastoresDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DatastoresId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsAnalyticsDatastoresDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresDeleteRequest.cs` |
| `ApigeeOrganizationsAnalyticsDatastoresDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAnalyticsDatastoresGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAnalyticsDatastoresGet(ApigeeOrganizationsAnalyticsDatastoresGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DatastoresId`
- **Returns**: `GoogleCloudApigeeV1Datastore`
- **Error**: `ApiException<ApigeeOrganizationsAnalyticsDatastoresGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresGetRequest.cs` |
| `GoogleCloudApigeeV1Datastore` | `src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs` |
| `ApigeeOrganizationsAnalyticsDatastoresGetError` | `src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAnalyticsDatastoresList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAnalyticsDatastoresList(ApigeeOrganizationsAnalyticsDatastoresListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `targetType` ← `TargetType`
- **Returns**: `GoogleCloudApigeeV1ListDatastoresResponse`
- **Error**: `ApiException<ApigeeOrganizationsAnalyticsDatastoresListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresListRequest.cs` |
| `GoogleCloudApigeeV1ListDatastoresResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDatastoresResponse.cs` |
| `ApigeeOrganizationsAnalyticsDatastoresListError` | `src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAnalyticsDatastoresTest

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAnalyticsDatastoresTest(ApigeeOrganizationsAnalyticsDatastoresTestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1TestDatastoreResponse`
- **Error**: `ApiException<ApigeeOrganizationsAnalyticsDatastoresTestError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresTestRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresTestRequest.cs` |
| `GoogleCloudApigeeV1Datastore` | `src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs` |
| `GoogleCloudApigeeV1TestDatastoreResponse` | `src/Apigee/Models/GoogleCloudApigeeV1TestDatastoreResponse.cs` |
| `ApigeeOrganizationsAnalyticsDatastoresTestError` | `src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresTestError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAnalyticsDatastoresUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAnalyticsDatastoresUpdate(ApigeeOrganizationsAnalyticsDatastoresUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DatastoresId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Datastore`
- **Error**: `ApiException<ApigeeOrganizationsAnalyticsDatastoresUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAnalyticsDatastoresUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAnalyticsDatastoresUpdateRequest.cs` |
| `GoogleCloudApigeeV1Datastore` | `src/Apigee/Models/GoogleCloudApigeeV1Datastore.cs` |
| `ApigeeOrganizationsAnalyticsDatastoresUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsAnalyticsDatastoresUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApimServiceExtensionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApimServiceExtensionsCreate(ApigeeOrganizationsApimServiceExtensionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `apimServiceExtensionId` ← `ApimServiceExtensionId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsApimServiceExtensionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApimServiceExtensionsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsCreateRequest.cs` |
| `GoogleCloudApigeeV1ApimServiceExtension` | `src/Apigee/Models/GoogleCloudApigeeV1ApimServiceExtension.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsApimServiceExtensionsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApimServiceExtensionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApimServiceExtensionsDelete(ApigeeOrganizationsApimServiceExtensionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApimServiceExtensionsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsApimServiceExtensionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApimServiceExtensionsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsApimServiceExtensionsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApimServiceExtensionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApimServiceExtensionsGet(ApigeeOrganizationsApimServiceExtensionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApimServiceExtensionsId`
- **Returns**: `GoogleCloudApigeeV1ApimServiceExtension`
- **Error**: `ApiException<ApigeeOrganizationsApimServiceExtensionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApimServiceExtensionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsGetRequest.cs` |
| `GoogleCloudApigeeV1ApimServiceExtension` | `src/Apigee/Models/GoogleCloudApigeeV1ApimServiceExtension.cs` |
| `ApigeeOrganizationsApimServiceExtensionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApimServiceExtensionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApimServiceExtensionsList(ApigeeOrganizationsApimServiceExtensionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListApimServiceExtensionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsApimServiceExtensionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApimServiceExtensionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsListRequest.cs` |
| `GoogleCloudApigeeV1ListApimServiceExtensionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListApimServiceExtensionsResponse.cs` |
| `ApigeeOrganizationsApimServiceExtensionsListError` | `src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApimServiceExtensionsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApimServiceExtensionsPatch(ApigeeOrganizationsApimServiceExtensionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApimServiceExtensionsId`, `Body`
- **Query params (wire ← C#)**: `allowMissing` ← `AllowMissing`, `updateMask` ← `UpdateMask`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsApimServiceExtensionsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApimServiceExtensionsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApimServiceExtensionsPatchRequest.cs` |
| `GoogleCloudApigeeV1ApimServiceExtension` | `src/Apigee/Models/GoogleCloudApigeeV1ApimServiceExtension.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsApimServiceExtensionsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsApimServiceExtensionsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsAttributes

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsAttributes(ApigeeOrganizationsApiproductsAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsAttributesRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesRequest.cs` |
| `GoogleCloudApigeeV1Attributes` | `src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs` |
| `ApigeeOrganizationsApiproductsAttributesError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsAttributesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsAttributesDelete(ApigeeOrganizationsApiproductsAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `AttributesId`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsAttributesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsAttributesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesDeleteRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsApiproductsAttributesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsAttributesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsAttributesGet(ApigeeOrganizationsApiproductsAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `AttributesId`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsAttributesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsAttributesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesGetRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsApiproductsAttributesGetError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsAttributesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsAttributesList(ApigeeOrganizationsApiproductsAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsAttributesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsAttributesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesListRequest.cs` |
| `GoogleCloudApigeeV1Attributes` | `src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs` |
| `ApigeeOrganizationsApiproductsAttributesListError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttribute(ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `AttributesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsAttributesUpdateApiProductAttributeError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsCreate(ApigeeOrganizationsApiproductsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsCreateRequest.cs` |
| `GoogleCloudApigeeV1ApiProduct` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs` |
| `ApigeeOrganizationsApiproductsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsDelete(ApigeeOrganizationsApiproductsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsDeleteRequest.cs` |
| `GoogleCloudApigeeV1ApiProduct` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs` |
| `ApigeeOrganizationsApiproductsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsGet(ApigeeOrganizationsApiproductsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsGetRequest.cs` |
| `GoogleCloudApigeeV1ApiProduct` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs` |
| `ApigeeOrganizationsApiproductsGetError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsList(ApigeeOrganizationsApiproductsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `attributename` ← `Attributename`, `attributevalue` ← `Attributevalue`, `count` ← `Count`, `expand` ← `Expand`, `space` ← `Space`, `startKey` ← `StartKey`
- **Returns**: `GoogleCloudApigeeV1ListApiProductsResponse`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsListRequest.cs` |
| `GoogleCloudApigeeV1ListApiProductsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListApiProductsResponse.cs` |
| `ApigeeOrganizationsApiproductsListError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsMove

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsMove(ApigeeOrganizationsApiproductsMoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsMoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsMoveRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsMoveRequest.cs` |
| `GoogleCloudApigeeV1MoveApiProductRequest` | `src/Apigee/Models/GoogleCloudApigeeV1MoveApiProductRequest.cs` |
| `GoogleCloudApigeeV1ApiProduct` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs` |
| `ApigeeOrganizationsApiproductsMoveError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsMoveError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsRateplansCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsRateplansCreate(ApigeeOrganizationsApiproductsRateplansCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsRateplansCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsRateplansCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansCreateRequest.cs` |
| `GoogleCloudApigeeV1RatePlan` | `src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs` |
| `ApigeeOrganizationsApiproductsRateplansCreateError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsRateplansDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsRateplansDelete(ApigeeOrganizationsApiproductsRateplansDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `RateplansId`
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsRateplansDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsRateplansDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansDeleteRequest.cs` |
| `GoogleCloudApigeeV1RatePlan` | `src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs` |
| `ApigeeOrganizationsApiproductsRateplansDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsRateplansGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsRateplansGet(ApigeeOrganizationsApiproductsRateplansGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `RateplansId`
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsRateplansGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsRateplansGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansGetRequest.cs` |
| `GoogleCloudApigeeV1RatePlan` | `src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs` |
| `ApigeeOrganizationsApiproductsRateplansGetError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsRateplansList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsRateplansList(ApigeeOrganizationsApiproductsRateplansListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`
- **Query params (wire ← C#)**: `count` ← `Count`, `expand` ← `Expand`, `orderBy` ← `OrderBy`, `startKey` ← `StartKey`, `state` ← `State`
- **Returns**: `GoogleCloudApigeeV1ListRatePlansResponse`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsRateplansListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsRateplansListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansListRequest.cs` |
| `State13` | `src/Apigee/Models/Enums/State13.cs` |
| `GoogleCloudApigeeV1ListRatePlansResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListRatePlansResponse.cs` |
| `ApigeeOrganizationsApiproductsRateplansListError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsRateplansUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsRateplansUpdate(ApigeeOrganizationsApiproductsRateplansUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `RateplansId`, `Body`
- **Returns**: `GoogleCloudApigeeV1RatePlan`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsRateplansUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsRateplansUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsRateplansUpdateRequest.cs` |
| `GoogleCloudApigeeV1RatePlan` | `src/Apigee/Models/GoogleCloudApigeeV1RatePlan.cs` |
| `ApigeeOrganizationsApiproductsRateplansUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsRateplansUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApiproductsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApiproductsUpdate(ApigeeOrganizationsApiproductsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApiproductsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiProduct`
- **Error**: `ApiException<ApigeeOrganizationsApiproductsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApiproductsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApiproductsUpdateRequest.cs` |
| `GoogleCloudApigeeV1ApiProduct` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProduct.cs` |
| `ApigeeOrganizationsApiproductsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsApiproductsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisCreate(ApigeeOrganizationsApisCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `action` ← `Action`, `name` ← `Name`, `space` ← `Space`, `validate` ← `Validate`
- **Returns**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Error**: `ApiException<ApigeeOrganizationsApisCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisCreateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxyRevision.cs` |
| `ApigeeOrganizationsApisCreateError` | `src/Apigee/Errors/ApigeeOrganizationsApisCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisDebugsessionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisDebugsessionsList(ApigeeOrganizationsApisDebugsessionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListApiDebugSessionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsApisDebugsessionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisDebugsessionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisDebugsessionsListRequest.cs` |
| `GoogleCloudApigeeV1ListApiDebugSessionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListApiDebugSessionsResponse.cs` |
| `ApigeeOrganizationsApisDebugsessionsListError` | `src/Apigee/Errors/ApigeeOrganizationsApisDebugsessionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisDelete(ApigeeOrganizationsApisDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApiException<ApigeeOrganizationsApisDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisDeleteRequest.cs` |
| `GoogleCloudApigeeV1ApiProxy` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs` |
| `ApigeeOrganizationsApisDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApisDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisDeploymentsList(ApigeeOrganizationsApisDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsApisDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsApisDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsApisDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisGet(ApigeeOrganizationsApisGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApiException<ApigeeOrganizationsApisGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisGetRequest.cs` |
| `GoogleCloudApigeeV1ApiProxy` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs` |
| `ApigeeOrganizationsApisGetError` | `src/Apigee/Errors/ApigeeOrganizationsApisGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsCreate(ApigeeOrganizationsApisKeyvaluemapsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsCreateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsDelete(ApigeeOrganizationsApisKeyvaluemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsDeleteRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsEntriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsEntriesCreate(ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesCreateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsEntriesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsEntriesDelete(ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`, `EntriesId`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsEntriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsEntriesGet(ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`, `EntriesId`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesGetRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesGetError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsEntriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsEntriesList(ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesListRequest.cs` |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListKeyValueEntriesResponse.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesListError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsEntriesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsEntriesUpdate(ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`, `EntriesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsEntriesUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsGet(ApigeeOrganizationsApisKeyvaluemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsGetRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsGetError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisKeyvaluemapsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisKeyvaluemapsUpdate(ApigeeOrganizationsApisKeyvaluemapsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `KeyvaluemapsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsApisKeyvaluemapsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisKeyvaluemapsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisKeyvaluemapsUpdateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsApisKeyvaluemapsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsApisKeyvaluemapsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisList(ApigeeOrganizationsApisListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `includeMetaData` ← `IncludeMetaData`, `includeRevisions` ← `IncludeRevisions`, `space` ← `Space`
- **Returns**: `GoogleCloudApigeeV1ListApiProxiesResponse`
- **Error**: `ApiException<ApigeeOrganizationsApisListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisListRequest.cs` |
| `GoogleCloudApigeeV1ListApiProxiesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListApiProxiesResponse.cs` |
| `ApigeeOrganizationsApisListError` | `src/Apigee/Errors/ApigeeOrganizationsApisListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisMove

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisMove(ApigeeOrganizationsApisMoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApiException<ApigeeOrganizationsApisMoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisMoveRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisMoveRequest.cs` |
| `GoogleCloudApigeeV1MoveApiProxyRequest` | `src/Apigee/Models/GoogleCloudApigeeV1MoveApiProxyRequest.cs` |
| `GoogleCloudApigeeV1ApiProxy` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs` |
| `ApigeeOrganizationsApisMoveError` | `src/Apigee/Errors/ApigeeOrganizationsApisMoveError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisPatch(ApigeeOrganizationsApisPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1ApiProxy`
- **Error**: `ApiException<ApigeeOrganizationsApisPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisPatchRequest.cs` |
| `GoogleCloudApigeeV1ApiProxy` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxy.cs` |
| `ApigeeOrganizationsApisPatchError` | `src/Apigee/Errors/ApigeeOrganizationsApisPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisRevisionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisRevisionsDelete(ApigeeOrganizationsApisRevisionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Error**: `ApiException<ApigeeOrganizationsApisRevisionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisRevisionsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsDeleteRequest.cs` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxyRevision.cs` |
| `ApigeeOrganizationsApisRevisionsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsApisRevisionsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisRevisionsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisRevisionsDeploymentsList(ApigeeOrganizationsApisRevisionsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsApisRevisionsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisRevisionsDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsApisRevisionsDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsApisRevisionsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisRevisionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisRevisionsGet(ApigeeOrganizationsApisRevisionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `RevisionsId`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsApisRevisionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisRevisionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsGetRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsApisRevisionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsApisRevisionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsApisRevisionsUpdateApiProxyRevision

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsApisRevisionsUpdateApiProxyRevision(ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ApisId`, `RevisionsId`, `Body`
- **Query params (wire ← C#)**: `validate` ← `Validate`
- **Returns**: `GoogleCloudApigeeV1ApiProxyRevision`
- **Error**: `ApiException<ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1ApiProxyRevision` | `src/Apigee/Models/GoogleCloudApigeeV1ApiProxyRevision.cs` |
| `ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError` | `src/Apigee/Errors/ApigeeOrganizationsApisRevisionsUpdateApiProxyRevisionError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsCreate(ApigeeOrganizationsAppgroupsAppsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsCreateRequest.cs` |
| `GoogleCloudApigeeV1AppGroupApp` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs` |
| `ApigeeOrganizationsAppgroupsAppsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsDelete(ApigeeOrganizationsAppgroupsAppsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsDeleteRequest.cs` |
| `GoogleCloudApigeeV1AppGroupApp` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs` |
| `ApigeeOrganizationsAppgroupsAppsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsGet(ApigeeOrganizationsAppgroupsAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsGetRequest.cs` |
| `GoogleCloudApigeeV1AppGroupApp` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs` |
| `ApigeeOrganizationsAppgroupsAppsGetError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsKeysApiproductsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsKeysApiproductsDelete(ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `KeysId`, `ApiproductsId`
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest.cs` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs` |
| `ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProduct(ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `KeysId`, `ApiproductsId`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductRequest.cs` |
| `ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysApiproductsUpdateAppGroupAppKeyApiProductError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsKeysCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsKeysCreate(ApigeeOrganizationsAppgroupsAppsKeysCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsKeysCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysCreateRequest.cs` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs` |
| `ApigeeOrganizationsAppgroupsAppsKeysCreateError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsKeysDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsKeysDelete(ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `KeysId`
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsKeysDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysDeleteRequest.cs` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs` |
| `ApigeeOrganizationsAppgroupsAppsKeysDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsKeysGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsKeysGet(ApigeeOrganizationsAppgroupsAppsKeysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `KeysId`
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsKeysGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysGetRequest.cs` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs` |
| `ApigeeOrganizationsAppgroupsAppsKeysGetError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKey(ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `KeysId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupAppKey`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyRequest.cs` |
| `GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest` | `src/Apigee/Models/GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest.cs` |
| `GoogleCloudApigeeV1AppGroupAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupAppKey.cs` |
| `ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsKeysUpdateAppGroupAppKeyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsList(ApigeeOrganizationsAppgroupsAppsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListAppGroupAppsResponse`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsListRequest.cs` |
| `GoogleCloudApigeeV1ListAppGroupAppsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListAppGroupAppsResponse.cs` |
| `ApigeeOrganizationsAppgroupsAppsListError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsAppsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsAppsUpdate(ApigeeOrganizationsAppgroupsAppsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `AppsId`, `Body`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `GoogleCloudApigeeV1AppGroupApp`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsAppsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsAppsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsAppsUpdateRequest.cs` |
| `GoogleCloudApigeeV1AppGroupApp` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupApp.cs` |
| `ApigeeOrganizationsAppgroupsAppsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsAppsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsBalanceAdjust

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsBalanceAdjust(ApigeeOrganizationsAppgroupsBalanceAdjustRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupBalance`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsBalanceAdjustError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsBalanceAdjustRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsBalanceAdjustRequest.cs` |
| `GoogleCloudApigeeV1AdjustAppGroupBalanceRequest` | `src/Apigee/Models/GoogleCloudApigeeV1AdjustAppGroupBalanceRequest.cs` |
| `GoogleCloudApigeeV1AppGroupBalance` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupBalance.cs` |
| `ApigeeOrganizationsAppgroupsBalanceAdjustError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsBalanceAdjustError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsBalanceCredit

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsBalanceCredit(ApigeeOrganizationsAppgroupsBalanceCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupBalance`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsBalanceCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsBalanceCreditRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsBalanceCreditRequest.cs` |
| `GoogleCloudApigeeV1CreditAppGroupBalanceRequest` | `src/Apigee/Models/GoogleCloudApigeeV1CreditAppGroupBalanceRequest.cs` |
| `GoogleCloudApigeeV1AppGroupBalance` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupBalance.cs` |
| `ApigeeOrganizationsAppgroupsBalanceCreditError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsBalanceCreditError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsCreate(ApigeeOrganizationsAppgroupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsCreateRequest.cs` |
| `GoogleCloudApigeeV1AppGroup` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs` |
| `ApigeeOrganizationsAppgroupsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsDelete(ApigeeOrganizationsAppgroupsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsDeleteRequest.cs` |
| `GoogleCloudApigeeV1AppGroup` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs` |
| `ApigeeOrganizationsAppgroupsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsGet(ApigeeOrganizationsAppgroupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsGetRequest.cs` |
| `GoogleCloudApigeeV1AppGroup` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs` |
| `ApigeeOrganizationsAppgroupsGetError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsGetBalance

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsGetBalance(ApigeeOrganizationsAppgroupsGetBalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`
- **Returns**: `GoogleCloudApigeeV1AppGroupBalance`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsGetBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsGetBalanceRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsGetBalanceRequest.cs` |
| `GoogleCloudApigeeV1AppGroupBalance` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupBalance.cs` |
| `ApigeeOrganizationsAppgroupsGetBalanceError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsGetBalanceError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsGetMonetizationConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsGetMonetizationConfig(ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`
- **Returns**: `GoogleCloudApigeeV1AppGroupMonetizationConfig`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsGetMonetizationConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsGetMonetizationConfigRequest.cs` |
| `GoogleCloudApigeeV1AppGroupMonetizationConfig` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupMonetizationConfig.cs` |
| `ApigeeOrganizationsAppgroupsGetMonetizationConfigError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsGetMonetizationConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsList(ApigeeOrganizationsAppgroupsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListAppGroupsResponse`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsListRequest.cs` |
| `GoogleCloudApigeeV1ListAppGroupsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListAppGroupsResponse.cs` |
| `ApigeeOrganizationsAppgroupsListError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsSubscriptionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsSubscriptionsCreate(ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsSubscriptionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest.cs` |
| `GoogleCloudApigeeV1AppGroupSubscription` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupSubscription.cs` |
| `ApigeeOrganizationsAppgroupsSubscriptionsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsSubscriptionsExpire

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsSubscriptionsExpire(ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `SubscriptionsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsSubscriptionsExpireError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsExpireRequest.cs` |
| `GoogleCloudApigeeV1AppGroupSubscription` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupSubscription.cs` |
| `ApigeeOrganizationsAppgroupsSubscriptionsExpireError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsExpireError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsSubscriptionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsSubscriptionsGet(ApigeeOrganizationsAppgroupsSubscriptionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `SubscriptionsId`
- **Returns**: `GoogleCloudApigeeV1AppGroupSubscription`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsSubscriptionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsSubscriptionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsGetRequest.cs` |
| `GoogleCloudApigeeV1AppGroupSubscription` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupSubscription.cs` |
| `ApigeeOrganizationsAppgroupsSubscriptionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsSubscriptionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsSubscriptionsList(ApigeeOrganizationsAppgroupsSubscriptionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsSubscriptionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsSubscriptionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsSubscriptionsListRequest.cs` |
| `GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse.cs` |
| `ApigeeOrganizationsAppgroupsSubscriptionsListError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsSubscriptionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsUpdate(ApigeeOrganizationsAppgroupsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `Body`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `GoogleCloudApigeeV1AppGroup`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsUpdateRequest.cs` |
| `GoogleCloudApigeeV1AppGroup` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroup.cs` |
| `ApigeeOrganizationsAppgroupsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppgroupsUpdateMonetizationConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppgroupsUpdateMonetizationConfig(ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppgroupsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AppGroupMonetizationConfig`
- **Error**: `ApiException<ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppgroupsUpdateMonetizationConfigRequest.cs` |
| `GoogleCloudApigeeV1AppGroupMonetizationConfig` | `src/Apigee/Models/GoogleCloudApigeeV1AppGroupMonetizationConfig.cs` |
| `ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError` | `src/Apigee/Errors/ApigeeOrganizationsAppgroupsUpdateMonetizationConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppsGet(ApigeeOrganizationsAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `AppsId`
- **Returns**: `GoogleCloudApigeeV1App`
- **Error**: `ApiException<ApigeeOrganizationsAppsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppsGetRequest.cs` |
| `GoogleCloudApigeeV1App` | `src/Apigee/Models/GoogleCloudApigeeV1App.cs` |
| `ApigeeOrganizationsAppsGetError` | `src/Apigee/Errors/ApigeeOrganizationsAppsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsAppsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsAppsList(ApigeeOrganizationsAppsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `apiProduct` ← `ApiProduct`, `apptype` ← `Apptype`, `expand` ← `Expand`, `filter` ← `Filter`, `ids` ← `Ids`, `includeCred` ← `IncludeCred`, `keyStatus` ← `KeyStatus`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `rows` ← `Rows`, `startKey` ← `StartKey`, `status` ← `Status`
- **Returns**: `GoogleCloudApigeeV1ListAppsResponse`
- **Error**: `ApiException<ApigeeOrganizationsAppsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsAppsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsAppsListRequest.cs` |
| `GoogleCloudApigeeV1ListAppsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListAppsResponse.cs` |
| `ApigeeOrganizationsAppsListError` | `src/Apigee/Errors/ApigeeOrganizationsAppsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsCreate(ApigeeOrganizationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `parent` ← `Parent`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsCreateRequest.cs` |
| `GoogleCloudApigeeV1Organization` | `src/Apigee/Models/GoogleCloudApigeeV1Organization.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDatacollectorsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDatacollectorsCreate(ApigeeOrganizationsDatacollectorsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `dataCollectorId` ← `DataCollectorId`
- **Returns**: `GoogleCloudApigeeV1DataCollector`
- **Error**: `ApiException<ApigeeOrganizationsDatacollectorsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDatacollectorsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsCreateRequest.cs` |
| `GoogleCloudApigeeV1DataCollector` | `src/Apigee/Models/GoogleCloudApigeeV1DataCollector.cs` |
| `ApigeeOrganizationsDatacollectorsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDatacollectorsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDatacollectorsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDatacollectorsDelete(ApigeeOrganizationsDatacollectorsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DatacollectorsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsDatacollectorsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDatacollectorsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsDeleteRequest.cs` |
| `ApigeeOrganizationsDatacollectorsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDatacollectorsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDatacollectorsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDatacollectorsGet(ApigeeOrganizationsDatacollectorsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DatacollectorsId`
- **Returns**: `GoogleCloudApigeeV1DataCollector`
- **Error**: `ApiException<ApigeeOrganizationsDatacollectorsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDatacollectorsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsGetRequest.cs` |
| `GoogleCloudApigeeV1DataCollector` | `src/Apigee/Models/GoogleCloudApigeeV1DataCollector.cs` |
| `ApigeeOrganizationsDatacollectorsGetError` | `src/Apigee/Errors/ApigeeOrganizationsDatacollectorsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDatacollectorsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDatacollectorsList(ApigeeOrganizationsDatacollectorsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListDataCollectorsResponse`
- **Error**: `ApiException<ApigeeOrganizationsDatacollectorsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDatacollectorsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsListRequest.cs` |
| `GoogleCloudApigeeV1ListDataCollectorsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDataCollectorsResponse.cs` |
| `ApigeeOrganizationsDatacollectorsListError` | `src/Apigee/Errors/ApigeeOrganizationsDatacollectorsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDatacollectorsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDatacollectorsPatch(ApigeeOrganizationsDatacollectorsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DatacollectorsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1DataCollector`
- **Error**: `ApiException<ApigeeOrganizationsDatacollectorsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDatacollectorsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDatacollectorsPatchRequest.cs` |
| `GoogleCloudApigeeV1DataCollector` | `src/Apigee/Models/GoogleCloudApigeeV1DataCollector.cs` |
| `ApigeeOrganizationsDatacollectorsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsDatacollectorsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDelete(ApigeeOrganizationsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `retention` ← `Retention`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDeleteRequest.cs` |
| `Retention` | `src/Apigee/Models/Enums/Retention.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDeploymentsList(ApigeeOrganizationsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `sharedFlows` ← `SharedFlows`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsAttributes

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsAttributes(ApigeeOrganizationsDevelopersAppsAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsAttributesRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesRequest.cs` |
| `GoogleCloudApigeeV1Attributes` | `src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs` |
| `ApigeeOrganizationsDevelopersAppsAttributesError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsAttributesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsAttributesDelete(ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `AttributesId`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsAttributesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesDeleteRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsDevelopersAppsAttributesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsAttributesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsAttributesGet(ApigeeOrganizationsDevelopersAppsAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `AttributesId`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsAttributesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsAttributesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesGetRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsDevelopersAppsAttributesGetError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsAttributesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsAttributesList(ApigeeOrganizationsDevelopersAppsAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsAttributesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsAttributesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesListRequest.cs` |
| `GoogleCloudApigeeV1Attributes` | `src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs` |
| `ApigeeOrganizationsDevelopersAppsAttributesListError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttribute(ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `AttributesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsAttributesUpdateDeveloperAppAttributeError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsCreate(ApigeeOrganizationsDevelopersAppsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsCreateRequest.cs` |
| `GoogleCloudApigeeV1DeveloperApp` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs` |
| `ApigeeOrganizationsDevelopersAppsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsDelete(ApigeeOrganizationsDevelopersAppsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsDeleteRequest.cs` |
| `GoogleCloudApigeeV1DeveloperApp` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs` |
| `ApigeeOrganizationsDevelopersAppsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus(ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `Body`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest.cs` |
| `GoogleCloudApigeeV1DeveloperApp` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs` |
| `ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsGet(ApigeeOrganizationsDevelopersAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`
- **Query params (wire ← C#)**: `entity` ← `Entity`, `query` ← `Query`
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsGetRequest.cs` |
| `GoogleCloudApigeeV1DeveloperApp` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs` |
| `ApigeeOrganizationsDevelopersAppsGetError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysApiproductsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysApiproductsDelete(ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `KeysId`, `ApiproductsId`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysApiproductsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct(ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `KeysId`, `ApiproductsId`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysCreate(ApigeeOrganizationsDevelopersAppsKeysCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysCreateRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysCreateCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysCreateCreate(ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysCreateCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysCreateCreateRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysCreateCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysCreateCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysDelete(ApigeeOrganizationsDevelopersAppsKeysDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `KeysId`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysDeleteRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysGet(ApigeeOrganizationsDevelopersAppsKeysGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `KeysId`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysGetRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysGetError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKey(ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `KeysId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysReplaceDeveloperAppKeyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey(ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `KeysId`, `Body`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `GoogleCloudApigeeV1DeveloperAppKey`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest.cs` |
| `GoogleCloudApigeeV1DeveloperAppKey` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperAppKey.cs` |
| `ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsList(ApigeeOrganizationsDevelopersAppsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Query params (wire ← C#)**: `count` ← `Count`, `expand` ← `Expand`, `shallowExpand` ← `ShallowExpand`, `startKey` ← `StartKey`
- **Returns**: `GoogleCloudApigeeV1ListDeveloperAppsResponse`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeveloperAppsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeveloperAppsResponse.cs` |
| `ApigeeOrganizationsDevelopersAppsListError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAppsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAppsUpdate(ApigeeOrganizationsDevelopersAppsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AppsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperApp`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAppsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAppsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAppsUpdateRequest.cs` |
| `GoogleCloudApigeeV1DeveloperApp` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperApp.cs` |
| `ApigeeOrganizationsDevelopersAppsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAppsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAttributes

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAttributes(ApigeeOrganizationsDevelopersAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAttributesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAttributesRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesRequest.cs` |
| `GoogleCloudApigeeV1Attributes` | `src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs` |
| `ApigeeOrganizationsDevelopersAttributesError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAttributesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAttributesDelete(ApigeeOrganizationsDevelopersAttributesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AttributesId`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAttributesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAttributesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesDeleteRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsDevelopersAttributesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAttributesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAttributesGet(ApigeeOrganizationsDevelopersAttributesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AttributesId`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAttributesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAttributesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesGetRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsDevelopersAttributesGetError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAttributesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAttributesList(ApigeeOrganizationsDevelopersAttributesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Returns**: `GoogleCloudApigeeV1Attributes`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAttributesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAttributesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesListRequest.cs` |
| `GoogleCloudApigeeV1Attributes` | `src/Apigee/Models/GoogleCloudApigeeV1Attributes.cs` |
| `ApigeeOrganizationsDevelopersAttributesListError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttribute(ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `AttributesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Attribute`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeRequest.cs` |
| `GoogleCloudApigeeV1Attribute` | `src/Apigee/Models/GoogleCloudApigeeV1Attribute.cs` |
| `ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersAttributesUpdateDeveloperAttributeError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersBalanceAdjust

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersBalanceAdjust(ApigeeOrganizationsDevelopersBalanceAdjustRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperBalance`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersBalanceAdjustError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersBalanceAdjustRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersBalanceAdjustRequest.cs` |
| `GoogleCloudApigeeV1AdjustDeveloperBalanceRequest` | `src/Apigee/Models/GoogleCloudApigeeV1AdjustDeveloperBalanceRequest.cs` |
| `GoogleCloudApigeeV1DeveloperBalance` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperBalance.cs` |
| `ApigeeOrganizationsDevelopersBalanceAdjustError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersBalanceAdjustError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersBalanceCredit

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersBalanceCredit(ApigeeOrganizationsDevelopersBalanceCreditRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperBalance`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersBalanceCreditError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersBalanceCreditRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersBalanceCreditRequest.cs` |
| `GoogleCloudApigeeV1CreditDeveloperBalanceRequest` | `src/Apigee/Models/GoogleCloudApigeeV1CreditDeveloperBalanceRequest.cs` |
| `GoogleCloudApigeeV1DeveloperBalance` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperBalance.cs` |
| `ApigeeOrganizationsDevelopersBalanceCreditError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersBalanceCreditError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersCreate(ApigeeOrganizationsDevelopersCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersCreateRequest.cs` |
| `GoogleCloudApigeeV1Developer` | `src/Apigee/Models/GoogleCloudApigeeV1Developer.cs` |
| `ApigeeOrganizationsDevelopersCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersDelete(ApigeeOrganizationsDevelopersDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersDeleteRequest.cs` |
| `GoogleCloudApigeeV1Developer` | `src/Apigee/Models/GoogleCloudApigeeV1Developer.cs` |
| `ApigeeOrganizationsDevelopersDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersGet(ApigeeOrganizationsDevelopersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersGetRequest.cs` |
| `GoogleCloudApigeeV1Developer` | `src/Apigee/Models/GoogleCloudApigeeV1Developer.cs` |
| `ApigeeOrganizationsDevelopersGetError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersGetBalance

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersGetBalance(ApigeeOrganizationsDevelopersGetBalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Returns**: `GoogleCloudApigeeV1DeveloperBalance`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersGetBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersGetBalanceRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersGetBalanceRequest.cs` |
| `GoogleCloudApigeeV1DeveloperBalance` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperBalance.cs` |
| `ApigeeOrganizationsDevelopersGetBalanceError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersGetBalanceError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersGetMonetizationConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersGetMonetizationConfig(ApigeeOrganizationsDevelopersGetMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Returns**: `GoogleCloudApigeeV1DeveloperMonetizationConfig`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersGetMonetizationConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersGetMonetizationConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersGetMonetizationConfigRequest.cs` |
| `GoogleCloudApigeeV1DeveloperMonetizationConfig` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperMonetizationConfig.cs` |
| `ApigeeOrganizationsDevelopersGetMonetizationConfigError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersGetMonetizationConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersList(ApigeeOrganizationsDevelopersListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `app` ← `App`, `count` ← `Count`, `expand` ← `Expand`, `ids` ← `Ids`, `includeCompany` ← `IncludeCompany`, `startKey` ← `StartKey`
- **Returns**: `GoogleCloudApigeeV1ListOfDevelopersResponse`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersListRequest.cs` |
| `GoogleCloudApigeeV1ListOfDevelopersResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListOfDevelopersResponse.cs` |
| `ApigeeOrganizationsDevelopersListError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersSetDeveloperStatus

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersSetDeveloperStatus(ApigeeOrganizationsDevelopersSetDeveloperStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Query params (wire ← C#)**: `action` ← `Action`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersSetDeveloperStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersSetDeveloperStatusRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSetDeveloperStatusRequest.cs` |
| `ApigeeOrganizationsDevelopersSetDeveloperStatusError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersSetDeveloperStatusError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersSubscriptionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersSubscriptionsCreate(ApigeeOrganizationsDevelopersSubscriptionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersSubscriptionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersSubscriptionsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsCreateRequest.cs` |
| `GoogleCloudApigeeV1DeveloperSubscription` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperSubscription.cs` |
| `ApigeeOrganizationsDevelopersSubscriptionsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersSubscriptionsExpire

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersSubscriptionsExpire(ApigeeOrganizationsDevelopersSubscriptionsExpireRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `SubscriptionsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersSubscriptionsExpireError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersSubscriptionsExpireRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsExpireRequest.cs` |
| `GoogleCloudApigeeV1DeveloperSubscription` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperSubscription.cs` |
| `ApigeeOrganizationsDevelopersSubscriptionsExpireError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsExpireError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersSubscriptionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersSubscriptionsGet(ApigeeOrganizationsDevelopersSubscriptionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `SubscriptionsId`
- **Returns**: `GoogleCloudApigeeV1DeveloperSubscription`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersSubscriptionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersSubscriptionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsGetRequest.cs` |
| `GoogleCloudApigeeV1DeveloperSubscription` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperSubscription.cs` |
| `ApigeeOrganizationsDevelopersSubscriptionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersSubscriptionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersSubscriptionsList(ApigeeOrganizationsDevelopersSubscriptionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`
- **Query params (wire ← C#)**: `count` ← `Count`, `startKey` ← `StartKey`
- **Returns**: `GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersSubscriptionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersSubscriptionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersSubscriptionsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse.cs` |
| `ApigeeOrganizationsDevelopersSubscriptionsListError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersSubscriptionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersUpdate(ApigeeOrganizationsDevelopersUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Developer`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersUpdateRequest.cs` |
| `GoogleCloudApigeeV1Developer` | `src/Apigee/Models/GoogleCloudApigeeV1Developer.cs` |
| `ApigeeOrganizationsDevelopersUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDevelopersUpdateMonetizationConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDevelopersUpdateMonetizationConfig(ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DevelopersId`, `Body`
- **Returns**: `GoogleCloudApigeeV1DeveloperMonetizationConfig`
- **Error**: `ApiException<ApigeeOrganizationsDevelopersUpdateMonetizationConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDevelopersUpdateMonetizationConfigRequest.cs` |
| `GoogleCloudApigeeV1DeveloperMonetizationConfig` | `src/Apigee/Models/GoogleCloudApigeeV1DeveloperMonetizationConfig.cs` |
| `ApigeeOrganizationsDevelopersUpdateMonetizationConfigError` | `src/Apigee/Errors/ApigeeOrganizationsDevelopersUpdateMonetizationConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDnsZonesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDnsZonesCreate(ApigeeOrganizationsDnsZonesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `dnsZoneId` ← `DnsZoneId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsDnsZonesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDnsZonesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesCreateRequest.cs` |
| `GoogleCloudApigeeV1DnsZone` | `src/Apigee/Models/GoogleCloudApigeeV1DnsZone.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsDnsZonesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsDnsZonesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDnsZonesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDnsZonesDelete(ApigeeOrganizationsDnsZonesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DnsZonesId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsDnsZonesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDnsZonesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsDnsZonesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsDnsZonesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDnsZonesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDnsZonesGet(ApigeeOrganizationsDnsZonesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `DnsZonesId`
- **Returns**: `GoogleCloudApigeeV1DnsZone`
- **Error**: `ApiException<ApigeeOrganizationsDnsZonesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDnsZonesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesGetRequest.cs` |
| `GoogleCloudApigeeV1DnsZone` | `src/Apigee/Models/GoogleCloudApigeeV1DnsZone.cs` |
| `ApigeeOrganizationsDnsZonesGetError` | `src/Apigee/Errors/ApigeeOrganizationsDnsZonesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsDnsZonesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsDnsZonesList(ApigeeOrganizationsDnsZonesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListDnsZonesResponse`
- **Error**: `ApiException<ApigeeOrganizationsDnsZonesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsDnsZonesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsDnsZonesListRequest.cs` |
| `GoogleCloudApigeeV1ListDnsZonesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDnsZonesResponse.cs` |
| `ApigeeOrganizationsDnsZonesListError` | `src/Apigee/Errors/ApigeeOrganizationsDnsZonesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEndpointAttachmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEndpointAttachmentsCreate(ApigeeOrganizationsEndpointAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `endpointAttachmentId` ← `EndpointAttachmentId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEndpointAttachmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEndpointAttachmentsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsCreateRequest.cs` |
| `GoogleCloudApigeeV1EndpointAttachment` | `src/Apigee/Models/GoogleCloudApigeeV1EndpointAttachment.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEndpointAttachmentsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEndpointAttachmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEndpointAttachmentsDelete(ApigeeOrganizationsEndpointAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EndpointAttachmentsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEndpointAttachmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEndpointAttachmentsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEndpointAttachmentsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEndpointAttachmentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEndpointAttachmentsGet(ApigeeOrganizationsEndpointAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EndpointAttachmentsId`
- **Returns**: `GoogleCloudApigeeV1EndpointAttachment`
- **Error**: `ApiException<ApigeeOrganizationsEndpointAttachmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEndpointAttachmentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsGetRequest.cs` |
| `GoogleCloudApigeeV1EndpointAttachment` | `src/Apigee/Models/GoogleCloudApigeeV1EndpointAttachment.cs` |
| `ApigeeOrganizationsEndpointAttachmentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEndpointAttachmentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEndpointAttachmentsList(ApigeeOrganizationsEndpointAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListEndpointAttachmentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEndpointAttachmentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEndpointAttachmentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEndpointAttachmentsListRequest.cs` |
| `GoogleCloudApigeeV1ListEndpointAttachmentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListEndpointAttachmentsResponse.cs` |
| `ApigeeOrganizationsEndpointAttachmentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEndpointAttachmentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsAttachmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsAttachmentsCreate(ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsAttachmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest.cs` |
| `GoogleCloudApigeeV1EnvironmentGroupAttachment` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroupAttachment.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvgroupsAttachmentsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsAttachmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsAttachmentsDelete(ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`, `AttachmentsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsAttachmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvgroupsAttachmentsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsAttachmentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsAttachmentsGet(ApigeeOrganizationsEnvgroupsAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`, `AttachmentsId`
- **Returns**: `GoogleCloudApigeeV1EnvironmentGroupAttachment`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsAttachmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsAttachmentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsGetRequest.cs` |
| `GoogleCloudApigeeV1EnvironmentGroupAttachment` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroupAttachment.cs` |
| `ApigeeOrganizationsEnvgroupsAttachmentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsAttachmentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsAttachmentsList(ApigeeOrganizationsEnvgroupsAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsAttachmentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsAttachmentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsAttachmentsListRequest.cs` |
| `GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse.cs` |
| `ApigeeOrganizationsEnvgroupsAttachmentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsAttachmentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsCreate(ApigeeOrganizationsEnvgroupsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsCreateRequest.cs` |
| `GoogleCloudApigeeV1EnvironmentGroup` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroup.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvgroupsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsDelete(ApigeeOrganizationsEnvgroupsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvgroupsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsGet(ApigeeOrganizationsEnvgroupsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`
- **Returns**: `GoogleCloudApigeeV1EnvironmentGroup`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsGetRequest.cs` |
| `GoogleCloudApigeeV1EnvironmentGroup` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroup.cs` |
| `ApigeeOrganizationsEnvgroupsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsGetDeployedIngressConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsGetDeployedIngressConfig(ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`
- **Query params (wire ← C#)**: `view` ← `View`
- **Returns**: `GoogleCloudApigeeV1EnvironmentGroupConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigRequest.cs` |
| `View` | `src/Apigee/Models/Enums/View.cs` |
| `GoogleCloudApigeeV1EnvironmentGroupConfig` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroupConfig.cs` |
| `ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsGetDeployedIngressConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsList(ApigeeOrganizationsEnvgroupsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentGroupsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsListRequest.cs` |
| `GoogleCloudApigeeV1ListEnvironmentGroupsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentGroupsResponse.cs` |
| `ApigeeOrganizationsEnvgroupsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvgroupsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvgroupsPatch(ApigeeOrganizationsEnvgroupsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvgroupsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvgroupsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvgroupsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvgroupsPatchRequest.cs` |
| `GoogleCloudApigeeV1EnvironmentGroup` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentGroup.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvgroupsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsEnvgroupsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablement(ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementRequest.cs` |
| `GoogleCloudApigeeV1SetAddonEnablementRequest` | `src/Apigee/Models/GoogleCloudApigeeV1SetAddonEnablementRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAddonsConfigSetAddonEnablementError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2(ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `disableCache` ← `DisableCache`, `type` ← `Type`
- **Returns**: `GoogleCloudApigeeV1Schema`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Request.cs` |
| `GoogleCloudApigeeV1Schema` | `src/Apigee/Models/GoogleCloudApigeeV1Schema.cs` |
| `ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsAdminGetSchemav2Error.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsAnalyticsExportsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsAnalyticsExportsCreate(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Export`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest.cs` |
| `GoogleCloudApigeeV1ExportRequest` | `src/Apigee/Models/GoogleCloudApigeeV1ExportRequest.cs` |
| `GoogleCloudApigeeV1Export` | `src/Apigee/Models/GoogleCloudApigeeV1Export.cs` |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsAnalyticsExportsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsAnalyticsExportsGet(ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ExportsId`
- **Returns**: `GoogleCloudApigeeV1Export`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest.cs` |
| `GoogleCloudApigeeV1Export` | `src/Apigee/Models/GoogleCloudApigeeV1Export.cs` |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsExportsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsAnalyticsExportsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsAnalyticsExportsList(ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1ListExportsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsAnalyticsExportsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest.cs` |
| `GoogleCloudApigeeV1ListExportsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListExportsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsAnalyticsExportsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsAnalyticsExportsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisDeploymentsList(ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsApisDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreate(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`, `Body`
- **Query params (wire ← C#)**: `timeout` ← `Timeout`
- **Returns**: `GoogleCloudApigeeV1DebugSession`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest.cs` |
| `GoogleCloudApigeeV1DebugSession` | `src/Apigee/Models/GoogleCloudApigeeV1DebugSession.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGet(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`, `DebugsessionsId`, `DataId`
- **Returns**: `GoogleCloudApigeeV1DebugSessionTransaction`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetRequest.cs` |
| `GoogleCloudApigeeV1DebugSessionTransaction` | `src/Apigee/Models/GoogleCloudApigeeV1DebugSessionTransaction.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDataGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteData(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`, `DebugsessionsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataRequest.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsDeleteDataError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGet(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`, `DebugsessionsId`
- **Returns**: `GoogleCloudApigeeV1DebugSession`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetRequest.cs` |
| `GoogleCloudApigeeV1DebugSession` | `src/Apigee/Models/GoogleCloudApigeeV1DebugSession.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsList(ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListDebugSessionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListRequest.cs` |
| `GoogleCloudApigeeV1ListDebugSessionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDebugSessionsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDeploy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDeploy(ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`
- **Query params (wire ← C#)**: `override` ← `Override`, `sequencedRollout` ← `SequencedRollout`, `serviceAccount` ← `ServiceAccount`
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDeployError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDeployRequest.cs` |
| `GoogleCloudApigeeV1Deployment` | `src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeployError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDeployError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`
- **Query params (wire ← C#)**: `override` ← `Override`
- **Returns**: `GoogleCloudApigeeV1DeploymentChangeReport`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest.cs` |
| `GoogleCloudApigeeV1DeploymentChangeReport` | `src/Apigee/Models/GoogleCloudApigeeV1DeploymentChangeReport.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReport(ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1DeploymentChangeReport`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportRequest.cs` |
| `GoogleCloudApigeeV1DeploymentChangeReport` | `src/Apigee/Models/GoogleCloudApigeeV1DeploymentChangeReport.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateUndeployChangeReportError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsGetDeployments

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsGetDeployments(ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsRequest.cs` |
| `GoogleCloudApigeeV1Deployment` | `src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsGetDeploymentsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsApisRevisionsUndeploy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsApisRevisionsUndeploy(ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ApisId`, `RevisionsId`
- **Query params (wire ← C#)**: `sequencedRollout` ← `SequencedRollout`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsApisRevisionsUndeployRequest.cs` |
| `ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsApisRevisionsUndeployError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreate(ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateRequest.cs` |
| `GoogleCloudApigeeV1ArchiveDeployment` | `src/Apigee/Models/GoogleCloudApigeeV1ArchiveDeployment.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsDelete(ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ArchiveDeploymentsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteRequest.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrl(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ArchiveDeploymentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1GenerateDownloadUrlResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlRequest.cs` |
| `GoogleCloudApigeeV1GenerateDownloadUrlResponse` | `src/Apigee/Models/GoogleCloudApigeeV1GenerateDownloadUrlResponse.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateDownloadUrlError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrl(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1GenerateUploadUrlResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlRequest.cs` |
| `GoogleCloudApigeeV1GenerateUploadUrlResponse` | `src/Apigee/Models/GoogleCloudApigeeV1GenerateUploadUrlResponse.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGenerateUploadUrlError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGet(ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ArchiveDeploymentsId`
- **Returns**: `GoogleCloudApigeeV1ArchiveDeployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetRequest.cs` |
| `GoogleCloudApigeeV1ArchiveDeployment` | `src/Apigee/Models/GoogleCloudApigeeV1ArchiveDeployment.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsList(ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListArchiveDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListArchiveDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListArchiveDeploymentsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatch(ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ArchiveDeploymentsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1ArchiveDeployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest.cs` |
| `GoogleCloudApigeeV1ArchiveDeployment` | `src/Apigee/Models/GoogleCloudApigeeV1ArchiveDeployment.cs` |
| `ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsCachesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsCachesDelete(ApigeeOrganizationsEnvironmentsCachesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `CachesId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsCachesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsCachesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsCachesDeleteRequest.cs` |
| `ApigeeOrganizationsEnvironmentsCachesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsCachesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsCreate(ApigeeOrganizationsEnvironmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsCreateRequest.cs` |
| `GoogleCloudApigeeV1Environment` | `src/Apigee/Models/GoogleCloudApigeeV1Environment.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvironmentsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsDelete(ApigeeOrganizationsEnvironmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvironmentsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsDeploymentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsDeploymentsGet(ApigeeOrganizationsEnvironmentsDeploymentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `DeploymentsId`
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsDeploymentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsDeploymentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsGetRequest.cs` |
| `GoogleCloudApigeeV1Deployment` | `src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs` |
| `ApigeeOrganizationsEnvironmentsDeploymentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicy(ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `DeploymentsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyRequest.cs` |
| `GoogleIamV1Policy` | `src/Apigee/Models/GoogleIamV1Policy.cs` |
| `ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsDeploymentsList(ApigeeOrganizationsEnvironmentsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `sharedFlows` ← `SharedFlows`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicy(ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `DeploymentsId`, `Body`
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyRequest.cs` |
| `GoogleIamV1SetIamPolicyRequest` | `src/Apigee/Models/GoogleIamV1SetIamPolicyRequest.cs` |
| `GoogleIamV1Policy` | `src/Apigee/Models/GoogleIamV1Policy.cs` |
| `ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissions(ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `DeploymentsId`, `Body`
- **Returns**: `GoogleIamV1TestIamPermissionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsRequest.cs` |
| `GoogleIamV1TestIamPermissionsRequest` | `src/Apigee/Models/GoogleIamV1TestIamPermissionsRequest.cs` |
| `GoogleIamV1TestIamPermissionsResponse` | `src/Apigee/Models/GoogleIamV1TestIamPermissionsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsDeploymentsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHook(ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `FlowhooksId`, `Body`
- **Returns**: `GoogleCloudApigeeV1FlowHook`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookRequest.cs` |
| `GoogleCloudApigeeV1FlowHook` | `src/Apigee/Models/GoogleCloudApigeeV1FlowHook.cs` |
| `ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsFlowhooksAttachSharedFlowToFlowHookError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHook(ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `FlowhooksId`
- **Returns**: `GoogleCloudApigeeV1FlowHook`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookRequest.cs` |
| `GoogleCloudApigeeV1FlowHook` | `src/Apigee/Models/GoogleCloudApigeeV1FlowHook.cs` |
| `ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsFlowhooksDetachSharedFlowFromFlowHookError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsFlowhooksGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsFlowhooksGet(ApigeeOrganizationsEnvironmentsFlowhooksGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `FlowhooksId`
- **Returns**: `GoogleCloudApigeeV1FlowHook`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsFlowhooksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsFlowhooksGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsFlowhooksGetRequest.cs` |
| `GoogleCloudApigeeV1FlowHook` | `src/Apigee/Models/GoogleCloudApigeeV1FlowHook.cs` |
| `ApigeeOrganizationsEnvironmentsFlowhooksGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsFlowhooksGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGet(ApigeeOrganizationsEnvironmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1Environment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetRequest.cs` |
| `GoogleCloudApigeeV1Environment` | `src/Apigee/Models/GoogleCloudApigeeV1Environment.cs` |
| `ApigeeOrganizationsEnvironmentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetAddonsConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetAddonsConfig(ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1AddonsConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetAddonsConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetAddonsConfigRequest.cs` |
| `GoogleCloudApigeeV1AddonsConfig` | `src/Apigee/Models/GoogleCloudApigeeV1AddonsConfig.cs` |
| `ApigeeOrganizationsEnvironmentsGetAddonsConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetAddonsConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfig(ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1ApiSecurityRuntimeConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigRequest.cs` |
| `GoogleCloudApigeeV1ApiSecurityRuntimeConfig` | `src/Apigee/Models/GoogleCloudApigeeV1ApiSecurityRuntimeConfig.cs` |
| `ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetApiSecurityRuntimeConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetDebugmask

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetDebugmask(ApigeeOrganizationsEnvironmentsGetDebugmaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1DebugMask`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetDebugmaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetDebugmaskRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetDebugmaskRequest.cs` |
| `GoogleCloudApigeeV1DebugMask` | `src/Apigee/Models/GoogleCloudApigeeV1DebugMask.cs` |
| `ApigeeOrganizationsEnvironmentsGetDebugmaskError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetDebugmaskError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetDeployedConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetDeployedConfig(ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1EnvironmentConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetDeployedConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetDeployedConfigRequest.cs` |
| `GoogleCloudApigeeV1EnvironmentConfig` | `src/Apigee/Models/GoogleCloudApigeeV1EnvironmentConfig.cs` |
| `ApigeeOrganizationsEnvironmentsGetDeployedConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetDeployedConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetIamPolicy(ApigeeOrganizationsEnvironmentsGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetIamPolicyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetIamPolicyRequest.cs` |
| `GoogleIamV1Policy` | `src/Apigee/Models/GoogleIamV1Policy.cs` |
| `ApigeeOrganizationsEnvironmentsGetIamPolicyError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetSecurityActionsConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetSecurityActionsConfig(ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1SecurityActionsConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigRequest.cs` |
| `GoogleCloudApigeeV1SecurityActionsConfig` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityActionsConfig.cs` |
| `ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetSecurityActionsConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsGetTraceConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsGetTraceConfig(ApigeeOrganizationsEnvironmentsGetTraceConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1TraceConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsGetTraceConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsGetTraceConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsGetTraceConfigRequest.cs` |
| `GoogleCloudApigeeV1TraceConfig` | `src/Apigee/Models/GoogleCloudApigeeV1TraceConfig.cs` |
| `ApigeeOrganizationsEnvironmentsGetTraceConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsGetTraceConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresAliasesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesCreate(ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`, `Body`
- **Query params (wire ← C#)**: `_password` ← `Password`, `alias` ← `Alias`, `format` ← `Format`, `ignoreExpiryValidation` ← `IgnoreExpiryValidation`, `ignoreNewlineValidation` ← `IgnoreNewlineValidation`
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1Alias` | `src/Apigee/Models/GoogleCloudApigeeV1Alias.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresAliasesCsr

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesCsr(ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`, `AliasesId`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesCsrError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresAliasesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesDelete(ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`, `AliasesId`
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteRequest.cs` |
| `GoogleCloudApigeeV1Alias` | `src/Apigee/Models/GoogleCloudApigeeV1Alias.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresAliasesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesGet(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`, `AliasesId`
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetRequest.cs` |
| `GoogleCloudApigeeV1Alias` | `src/Apigee/Models/GoogleCloudApigeeV1Alias.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificate(ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`, `AliasesId`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesGetCertificateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdate(ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`, `AliasesId`, `Body`
- **Query params (wire ← C#)**: `ignoreExpiryValidation` ← `IgnoreExpiryValidation`, `ignoreNewlineValidation` ← `IgnoreNewlineValidation`
- **Returns**: `GoogleCloudApigeeV1Alias`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1Alias` | `src/Apigee/Models/GoogleCloudApigeeV1Alias.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresAliasesUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresCreate(ApigeeOrganizationsEnvironmentsKeystoresCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `GoogleCloudApigeeV1Keystore`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresCreateRequest.cs` |
| `GoogleCloudApigeeV1Keystore` | `src/Apigee/Models/GoogleCloudApigeeV1Keystore.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresDelete(ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`
- **Returns**: `GoogleCloudApigeeV1Keystore`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresDeleteRequest.cs` |
| `GoogleCloudApigeeV1Keystore` | `src/Apigee/Models/GoogleCloudApigeeV1Keystore.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeystoresGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeystoresGet(ApigeeOrganizationsEnvironmentsKeystoresGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeystoresId`
- **Returns**: `GoogleCloudApigeeV1Keystore`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeystoresGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeystoresGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeystoresGetRequest.cs` |
| `GoogleCloudApigeeV1Keystore` | `src/Apigee/Models/GoogleCloudApigeeV1Keystore.cs` |
| `ApigeeOrganizationsEnvironmentsKeystoresGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeystoresGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsCreate(ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsDelete(ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreate(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDelete(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`, `EntriesId`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGet(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`, `EntriesId`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesList(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListRequest.cs` |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListKeyValueEntriesResponse.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdate(ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`, `EntriesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsEntriesUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsGet(ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsGetRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdate(ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `KeyvaluemapsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsKeyvaluemapsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsModifyEnvironment

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsModifyEnvironment(ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsModifyEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest.cs` |
| `GoogleCloudApigeeV1Environment` | `src/Apigee/Models/GoogleCloudApigeeV1Environment.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsEnvironmentsModifyEnvironmentError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsModifyEnvironmentError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsOptimizedStatsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsOptimizedStatsGet(ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `OptimizedStatsId`
- **Query params (wire ← C#)**: `accuracy` ← `Accuracy`, `aggTable` ← `AggTable`, `filter` ← `Filter`, `limit` ← `Limit`, `offset` ← `Offset`, `realtime` ← `Realtime`, `select` ← `Select`, `sonar` ← `Sonar`, `sort` ← `Sort`, `sortby` ← `Sortby`, `timeRange` ← `TimeRange`, `timeUnit` ← `TimeUnit`, `topk` ← `Topk`, `tsAscending` ← `TsAscending`, `tzo` ← `Tzo`
- **Returns**: `GoogleCloudApigeeV1OptimizedStats`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsOptimizedStatsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsOptimizedStatsGetRequest.cs` |
| `GoogleCloudApigeeV1OptimizedStats` | `src/Apigee/Models/GoogleCloudApigeeV1OptimizedStats.cs` |
| `ApigeeOrganizationsEnvironmentsOptimizedStatsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsOptimizedStatsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsQueriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsQueriesCreate(ApigeeOrganizationsEnvironmentsQueriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsQueriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsQueriesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesCreateRequest.cs` |
| `GoogleCloudApigeeV1Query` | `src/Apigee/Models/GoogleCloudApigeeV1Query.cs` |
| `GoogleCloudApigeeV1AsyncQuery` | `src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs` |
| `ApigeeOrganizationsEnvironmentsQueriesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsQueriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsQueriesGet(ApigeeOrganizationsEnvironmentsQueriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `QueriesId`
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsQueriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsQueriesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesGetRequest.cs` |
| `GoogleCloudApigeeV1AsyncQuery` | `src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs` |
| `ApigeeOrganizationsEnvironmentsQueriesGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsQueriesGetResult

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsQueriesGetResult(ApigeeOrganizationsEnvironmentsQueriesGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `QueriesId`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsQueriesGetResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsQueriesGetResultRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesGetResultRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsEnvironmentsQueriesGetResultError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesGetResultError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsQueriesGetResulturl

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsQueriesGetResulturl(ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `QueriesId`
- **Returns**: `GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsQueriesGetResulturlError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesGetResulturlRequest.cs` |
| `GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse` | `src/Apigee/Models/GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse.cs` |
| `ApigeeOrganizationsEnvironmentsQueriesGetResulturlError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesGetResulturlError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsQueriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsQueriesList(ApigeeOrganizationsEnvironmentsQueriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `dataset` ← `Dataset`, `from` ← `From`, `inclQueriesWithoutReport` ← `InclQueriesWithoutReport`, `status` ← `Status`, `submittedBy` ← `SubmittedBy`, `to` ← `To`
- **Returns**: `GoogleCloudApigeeV1ListAsyncQueriesResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsQueriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsQueriesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsQueriesListRequest.cs` |
| `GoogleCloudApigeeV1ListAsyncQueriesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListAsyncQueriesResponse.cs` |
| `ApigeeOrganizationsEnvironmentsQueriesListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsQueriesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsReferencesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsReferencesCreate(ApigeeOrganizationsEnvironmentsReferencesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsReferencesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsReferencesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesCreateRequest.cs` |
| `GoogleCloudApigeeV1Reference` | `src/Apigee/Models/GoogleCloudApigeeV1Reference.cs` |
| `ApigeeOrganizationsEnvironmentsReferencesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsReferencesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsReferencesDelete(ApigeeOrganizationsEnvironmentsReferencesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ReferencesId`
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsReferencesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsReferencesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesDeleteRequest.cs` |
| `GoogleCloudApigeeV1Reference` | `src/Apigee/Models/GoogleCloudApigeeV1Reference.cs` |
| `ApigeeOrganizationsEnvironmentsReferencesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsReferencesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsReferencesGet(ApigeeOrganizationsEnvironmentsReferencesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ReferencesId`
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsReferencesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsReferencesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesGetRequest.cs` |
| `GoogleCloudApigeeV1Reference` | `src/Apigee/Models/GoogleCloudApigeeV1Reference.cs` |
| `ApigeeOrganizationsEnvironmentsReferencesGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsReferencesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsReferencesUpdate(ApigeeOrganizationsEnvironmentsReferencesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `ReferencesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Reference`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsReferencesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsReferencesUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsReferencesUpdateRequest.cs` |
| `GoogleCloudApigeeV1Reference` | `src/Apigee/Models/GoogleCloudApigeeV1Reference.cs` |
| `ApigeeOrganizationsEnvironmentsReferencesUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsReferencesUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsResourcefilesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsResourcefilesCreate(ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`, `type` ← `Type`
- **Returns**: `GoogleCloudApigeeV1ResourceFile`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsResourcefilesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesCreateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1ResourceFile` | `src/Apigee/Models/GoogleCloudApigeeV1ResourceFile.cs` |
| `ApigeeOrganizationsEnvironmentsResourcefilesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsResourcefilesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsResourcefilesDelete(ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Type`, `Name`
- **Returns**: `GoogleCloudApigeeV1ResourceFile`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsResourcefilesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesDeleteRequest.cs` |
| `GoogleCloudApigeeV1ResourceFile` | `src/Apigee/Models/GoogleCloudApigeeV1ResourceFile.cs` |
| `ApigeeOrganizationsEnvironmentsResourcefilesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsResourcefilesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsResourcefilesGet(ApigeeOrganizationsEnvironmentsResourcefilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Type`, `Name`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsResourcefilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsResourcefilesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesGetRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsEnvironmentsResourcefilesGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsResourcefilesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsResourcefilesList(ApigeeOrganizationsEnvironmentsResourcefilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `type` ← `Type`
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentResourcesResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsResourcefilesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsResourcefilesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesListRequest.cs` |
| `GoogleCloudApigeeV1ListEnvironmentResourcesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentResourcesResponse.cs` |
| `ApigeeOrganizationsEnvironmentsResourcefilesListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResources(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Type`
- **Returns**: `GoogleCloudApigeeV1ListEnvironmentResourcesResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest.cs` |
| `GoogleCloudApigeeV1ListEnvironmentResourcesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListEnvironmentResourcesResponse.cs` |
| `ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsResourcefilesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsResourcefilesUpdate(ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Type`, `Name`, `Body`
- **Returns**: `GoogleCloudApigeeV1ResourceFile`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsResourcefilesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsResourcefilesUpdateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1ResourceFile` | `src/Apigee/Models/GoogleCloudApigeeV1ResourceFile.cs` |
| `ApigeeOrganizationsEnvironmentsResourcefilesUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsResourcefilesUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsCreate(ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `securityActionId` ← `SecurityActionId`
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityAction` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsDelete(ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityActionsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsDisable

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsDisable(ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityActionsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsDisableError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsDisableRequest.cs` |
| `GoogleCloudApigeeV1SecurityAction` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsDisableError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsDisableError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsEnable

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsEnable(ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityActionsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsEnableError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsEnableRequest.cs` |
| `GoogleCloudApigeeV1SecurityAction` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsEnableError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsEnableError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsGet(ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityActionsId`
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsGetRequest.cs` |
| `GoogleCloudApigeeV1SecurityAction` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsList(ApigeeOrganizationsEnvironmentsSecurityActionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListSecurityActionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsListRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityActionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityActionsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityActionsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityActionsPatch(ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityActionsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityAction`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityActionsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityActionsPatchRequest.cs` |
| `GoogleCloudApigeeV1SecurityAction` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityAction.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityActionsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityActionsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdate(ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateRequest.cs` |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest` | `src/Apigee/Models/GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest.cs` |
| `GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsBatchUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityIncidentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsGet(ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityIncidentsId`
- **Returns**: `GoogleCloudApigeeV1SecurityIncident`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsGetRequest.cs` |
| `GoogleCloudApigeeV1SecurityIncident` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityIncident.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityIncidentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsList(ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListSecurityIncidentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityIncidentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityIncidentsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityIncidentsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityIncidentsPatch(ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityIncidentsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityIncident`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchRequest.cs` |
| `GoogleCloudApigeeV1SecurityIncident` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityIncident.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityIncidentsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityReportsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityReportsCreate(ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityReportQuery` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReportQuery.cs` |
| `GoogleCloudApigeeV1SecurityReport` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityReportsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityReportsGet(ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityReportsId`
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsGetRequest.cs` |
| `GoogleCloudApigeeV1SecurityReport` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityReportsGetResult

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityReportsGetResult(ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityReportsId`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityReportsGetResultView

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultView(ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SecurityReportsId`
- **Returns**: `GoogleCloudApigeeV1SecurityReportResultView`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest.cs` |
| `GoogleCloudApigeeV1SecurityReportResultView` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReportResultView.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityReportsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityReportsList(ApigeeOrganizationsEnvironmentsSecurityReportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `dataset` ← `Dataset`, `from` ← `From`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `status` ← `Status`, `submittedBy` ← `SubmittedBy`, `to` ← `To`
- **Returns**: `GoogleCloudApigeeV1ListSecurityReportsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityReportsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityReportsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityReportsListRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityReportsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityReportsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityReportsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityReportsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStats(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1QueryTabularStatsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsRequest.cs` |
| `GoogleCloudApigeeV1QueryTabularStatsRequest` | `src/Apigee/Models/GoogleCloudApigeeV1QueryTabularStatsRequest.cs` |
| `GoogleCloudApigeeV1QueryTabularStatsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1QueryTabularStatsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTabularStatsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStats(ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1QueryTimeSeriesStatsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsRequest.cs` |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsRequest` | `src/Apigee/Models/GoogleCloudApigeeV1QueryTimeSeriesStatsRequest.cs` |
| `GoogleCloudApigeeV1QueryTimeSeriesStatsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1QueryTimeSeriesStatsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSecurityStatsQueryTimeSeriesStatsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSetIamPolicy(ApigeeOrganizationsEnvironmentsSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSetIamPolicyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSetIamPolicyRequest.cs` |
| `GoogleIamV1SetIamPolicyRequest` | `src/Apigee/Models/GoogleIamV1SetIamPolicyRequest.cs` |
| `GoogleIamV1Policy` | `src/Apigee/Models/GoogleIamV1Policy.cs` |
| `ApigeeOrganizationsEnvironmentsSetIamPolicyError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsList(ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SharedflowsId`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploy(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SharedflowsId`, `RevisionsId`
- **Query params (wire ← C#)**: `override` ← `Override`, `serviceAccount` ← `ServiceAccount`
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest.cs` |
| `GoogleCloudApigeeV1Deployment` | `src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs` |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeployments(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SharedflowsId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1Deployment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsRequest.cs` |
| `GoogleCloudApigeeV1Deployment` | `src/Apigee/Models/GoogleCloudApigeeV1Deployment.cs` |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsGetDeploymentsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeploy(ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `SharedflowsId`, `RevisionsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployRequest.cs` |
| `ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSharedflowsRevisionsUndeployError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsStatsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsStatsGet(ApigeeOrganizationsEnvironmentsStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `StatsId`
- **Query params (wire ← C#)**: `accuracy` ← `Accuracy`, `aggTable` ← `AggTable`, `filter` ← `Filter`, `limit` ← `Limit`, `offset` ← `Offset`, `realtime` ← `Realtime`, `select` ← `Select`, `sonar` ← `Sonar`, `sort` ← `Sort`, `sortby` ← `Sortby`, `timeRange` ← `TimeRange`, `timeUnit` ← `TimeUnit`, `topk` ← `Topk`, `tsAscending` ← `TsAscending`, `tzo` ← `Tzo`
- **Returns**: `GoogleCloudApigeeV1Stats`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsStatsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsStatsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsStatsGetRequest.cs` |
| `GoogleCloudApigeeV1Stats` | `src/Apigee/Models/GoogleCloudApigeeV1Stats.cs` |
| `ApigeeOrganizationsEnvironmentsStatsGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsStatsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsSubscribe

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsSubscribe(ApigeeOrganizationsEnvironmentsSubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Returns**: `GoogleCloudApigeeV1Subscription`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsSubscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsSubscribeRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsSubscribeRequest.cs` |
| `GoogleCloudApigeeV1Subscription` | `src/Apigee/Models/GoogleCloudApigeeV1Subscription.cs` |
| `ApigeeOrganizationsEnvironmentsSubscribeError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsSubscribeError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTargetserversCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTargetserversCreate(ApigeeOrganizationsEnvironmentsTargetserversCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTargetserversCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTargetserversCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversCreateRequest.cs` |
| `GoogleCloudApigeeV1TargetServer` | `src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs` |
| `ApigeeOrganizationsEnvironmentsTargetserversCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTargetserversDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTargetserversDelete(ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `TargetserversId`
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTargetserversDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversDeleteRequest.cs` |
| `GoogleCloudApigeeV1TargetServer` | `src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs` |
| `ApigeeOrganizationsEnvironmentsTargetserversDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTargetserversGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTargetserversGet(ApigeeOrganizationsEnvironmentsTargetserversGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `TargetserversId`
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTargetserversGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTargetserversGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversGetRequest.cs` |
| `GoogleCloudApigeeV1TargetServer` | `src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs` |
| `ApigeeOrganizationsEnvironmentsTargetserversGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTargetserversUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTargetserversUpdate(ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `TargetserversId`, `Body`
- **Returns**: `GoogleCloudApigeeV1TargetServer`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTargetserversUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTargetserversUpdateRequest.cs` |
| `GoogleCloudApigeeV1TargetServer` | `src/Apigee/Models/GoogleCloudApigeeV1TargetServer.cs` |
| `ApigeeOrganizationsEnvironmentsTargetserversUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTargetserversUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTestIamPermissions(ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleIamV1TestIamPermissionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest.cs` |
| `GoogleIamV1TestIamPermissionsRequest` | `src/Apigee/Models/GoogleIamV1TestIamPermissionsRequest.cs` |
| `GoogleIamV1TestIamPermissionsResponse` | `src/Apigee/Models/GoogleIamV1TestIamPermissionsResponse.cs` |
| `ApigeeOrganizationsEnvironmentsTestIamPermissionsError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreate(ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateRequest.cs` |
| `GoogleCloudApigeeV1TraceConfigOverride` | `src/Apigee/Models/GoogleCloudApigeeV1TraceConfigOverride.cs` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTraceConfigOverridesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesDelete(ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `OverridesId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteRequest.cs` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTraceConfigOverridesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesGet(ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `OverridesId`
- **Returns**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetRequest.cs` |
| `GoogleCloudApigeeV1TraceConfigOverride` | `src/Apigee/Models/GoogleCloudApigeeV1TraceConfigOverride.cs` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTraceConfigOverridesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesList(ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListTraceConfigOverridesResponse`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest.cs` |
| `GoogleCloudApigeeV1ListTraceConfigOverridesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListTraceConfigOverridesResponse.cs` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatch(ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `OverridesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1TraceConfigOverride`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchRequest.cs` |
| `GoogleCloudApigeeV1TraceConfigOverride` | `src/Apigee/Models/GoogleCloudApigeeV1TraceConfigOverride.cs` |
| `ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsTraceConfigOverridesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsUnsubscribe

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsUnsubscribe(ApigeeOrganizationsEnvironmentsUnsubscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsUnsubscribeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsUnsubscribeRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUnsubscribeRequest.cs` |
| `GoogleCloudApigeeV1Subscription` | `src/Apigee/Models/GoogleCloudApigeeV1Subscription.cs` |
| `ApigeeOrganizationsEnvironmentsUnsubscribeError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUnsubscribeError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsUpdate(ApigeeOrganizationsEnvironmentsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Environment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateRequest.cs` |
| `GoogleCloudApigeeV1Environment` | `src/Apigee/Models/GoogleCloudApigeeV1Environment.cs` |
| `ApigeeOrganizationsEnvironmentsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsUpdateDebugmask

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsUpdateDebugmask(ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `replaceRepeatedFields` ← `ReplaceRepeatedFields`, `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1DebugMask`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsUpdateDebugmaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateDebugmaskRequest.cs` |
| `GoogleCloudApigeeV1DebugMask` | `src/Apigee/Models/GoogleCloudApigeeV1DebugMask.cs` |
| `ApigeeOrganizationsEnvironmentsUpdateDebugmaskError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateDebugmaskError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsUpdateEnvironment

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsUpdateEnvironment(ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Environment`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsUpdateEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateEnvironmentRequest.cs` |
| `GoogleCloudApigeeV1Environment` | `src/Apigee/Models/GoogleCloudApigeeV1Environment.cs` |
| `ApigeeOrganizationsEnvironmentsUpdateEnvironmentError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateEnvironmentError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfig(ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityActionsConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigRequest.cs` |
| `GoogleCloudApigeeV1SecurityActionsConfig` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityActionsConfig.cs` |
| `ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateSecurityActionsConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsEnvironmentsUpdateTraceConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsEnvironmentsUpdateTraceConfig(ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `EnvironmentsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1TraceConfig`
- **Error**: `ApiException<ApigeeOrganizationsEnvironmentsUpdateTraceConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsEnvironmentsUpdateTraceConfigRequest.cs` |
| `GoogleCloudApigeeV1TraceConfig` | `src/Apigee/Models/GoogleCloudApigeeV1TraceConfig.cs` |
| `ApigeeOrganizationsEnvironmentsUpdateTraceConfigError` | `src/Apigee/Errors/ApigeeOrganizationsEnvironmentsUpdateTraceConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGet(ApigeeOrganizationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Returns**: `GoogleCloudApigeeV1Organization`
- **Error**: `ApiException<ApigeeOrganizationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetRequest.cs` |
| `GoogleCloudApigeeV1Organization` | `src/Apigee/Models/GoogleCloudApigeeV1Organization.cs` |
| `ApigeeOrganizationsGetError` | `src/Apigee/Errors/ApigeeOrganizationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetControlPlaneAccess

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetControlPlaneAccess(ApigeeOrganizationsGetControlPlaneAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Returns**: `GoogleCloudApigeeV1ControlPlaneAccess`
- **Error**: `ApiException<ApigeeOrganizationsGetControlPlaneAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetControlPlaneAccessRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetControlPlaneAccessRequest.cs` |
| `GoogleCloudApigeeV1ControlPlaneAccess` | `src/Apigee/Models/GoogleCloudApigeeV1ControlPlaneAccess.cs` |
| `ApigeeOrganizationsGetControlPlaneAccessError` | `src/Apigee/Errors/ApigeeOrganizationsGetControlPlaneAccessError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetDeployedIngressConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetDeployedIngressConfig(ApigeeOrganizationsGetDeployedIngressConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `view` ← `View`
- **Returns**: `GoogleCloudApigeeV1IngressConfig`
- **Error**: `ApiException<ApigeeOrganizationsGetDeployedIngressConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetDeployedIngressConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetDeployedIngressConfigRequest.cs` |
| `View` | `src/Apigee/Models/Enums/View.cs` |
| `GoogleCloudApigeeV1IngressConfig` | `src/Apigee/Models/GoogleCloudApigeeV1IngressConfig.cs` |
| `ApigeeOrganizationsGetDeployedIngressConfigError` | `src/Apigee/Errors/ApigeeOrganizationsGetDeployedIngressConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetMcpServerConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetMcpServerConfig(ApigeeOrganizationsGetMcpServerConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Returns**: `GoogleCloudApigeeV1McpServerConfig`
- **Error**: `ApiException<ApigeeOrganizationsGetMcpServerConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetMcpServerConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetMcpServerConfigRequest.cs` |
| `GoogleCloudApigeeV1McpServerConfig` | `src/Apigee/Models/GoogleCloudApigeeV1McpServerConfig.cs` |
| `ApigeeOrganizationsGetMcpServerConfigError` | `src/Apigee/Errors/ApigeeOrganizationsGetMcpServerConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetProjectMapping

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetProjectMapping(ApigeeOrganizationsGetProjectMappingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Returns**: `GoogleCloudApigeeV1OrganizationProjectMapping`
- **Error**: `ApiException<ApigeeOrganizationsGetProjectMappingError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetProjectMappingRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetProjectMappingRequest.cs` |
| `GoogleCloudApigeeV1OrganizationProjectMapping` | `src/Apigee/Models/GoogleCloudApigeeV1OrganizationProjectMapping.cs` |
| `ApigeeOrganizationsGetProjectMappingError` | `src/Apigee/Errors/ApigeeOrganizationsGetProjectMappingError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetRuntimeConfig

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetRuntimeConfig(ApigeeOrganizationsGetRuntimeConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Returns**: `GoogleCloudApigeeV1RuntimeConfig`
- **Error**: `ApiException<ApigeeOrganizationsGetRuntimeConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetRuntimeConfigRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetRuntimeConfigRequest.cs` |
| `GoogleCloudApigeeV1RuntimeConfig` | `src/Apigee/Models/GoogleCloudApigeeV1RuntimeConfig.cs` |
| `ApigeeOrganizationsGetRuntimeConfigError` | `src/Apigee/Errors/ApigeeOrganizationsGetRuntimeConfigError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetSecuritySettings

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetSecuritySettings(ApigeeOrganizationsGetSecuritySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Returns**: `GoogleCloudApigeeV1SecuritySettings`
- **Error**: `ApiException<ApigeeOrganizationsGetSecuritySettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetSecuritySettingsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetSecuritySettingsRequest.cs` |
| `GoogleCloudApigeeV1SecuritySettings` | `src/Apigee/Models/GoogleCloudApigeeV1SecuritySettings.cs` |
| `ApigeeOrganizationsGetSecuritySettingsError` | `src/Apigee/Errors/ApigeeOrganizationsGetSecuritySettingsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsGetSyncAuthorization

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsGetSyncAuthorization(ApigeeOrganizationsGetSyncAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SyncAuthorization`
- **Error**: `ApiException<ApigeeOrganizationsGetSyncAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsGetSyncAuthorizationRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsGetSyncAuthorizationRequest.cs` |
| `GoogleCloudApigeeV1SyncAuthorization` | `src/Apigee/Models/GoogleCloudApigeeV1SyncAuthorization.cs` |
| `ApigeeOrganizationsGetSyncAuthorizationError` | `src/Apigee/Errors/ApigeeOrganizationsGetSyncAuthorizationError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostQueriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostQueriesCreate(ApigeeOrganizationsHostQueriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApiException<ApigeeOrganizationsHostQueriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostQueriesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesCreateRequest.cs` |
| `GoogleCloudApigeeV1Query` | `src/Apigee/Models/GoogleCloudApigeeV1Query.cs` |
| `GoogleCloudApigeeV1AsyncQuery` | `src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs` |
| `ApigeeOrganizationsHostQueriesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsHostQueriesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostQueriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostQueriesGet(ApigeeOrganizationsHostQueriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostQueriesId`
- **Returns**: `GoogleCloudApigeeV1AsyncQuery`
- **Error**: `ApiException<ApigeeOrganizationsHostQueriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostQueriesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesGetRequest.cs` |
| `GoogleCloudApigeeV1AsyncQuery` | `src/Apigee/Models/GoogleCloudApigeeV1AsyncQuery.cs` |
| `ApigeeOrganizationsHostQueriesGetError` | `src/Apigee/Errors/ApigeeOrganizationsHostQueriesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostQueriesGetResult

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostQueriesGetResult(ApigeeOrganizationsHostQueriesGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostQueriesId`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsHostQueriesGetResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostQueriesGetResultRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesGetResultRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsHostQueriesGetResultError` | `src/Apigee/Errors/ApigeeOrganizationsHostQueriesGetResultError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostQueriesGetResultView

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostQueriesGetResultView(ApigeeOrganizationsHostQueriesGetResultViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostQueriesId`
- **Returns**: `GoogleCloudApigeeV1AsyncQueryResultView`
- **Error**: `ApiException<ApigeeOrganizationsHostQueriesGetResultViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostQueriesGetResultViewRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesGetResultViewRequest.cs` |
| `GoogleCloudApigeeV1AsyncQueryResultView` | `src/Apigee/Models/GoogleCloudApigeeV1AsyncQueryResultView.cs` |
| `ApigeeOrganizationsHostQueriesGetResultViewError` | `src/Apigee/Errors/ApigeeOrganizationsHostQueriesGetResultViewError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostQueriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostQueriesList(ApigeeOrganizationsHostQueriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `dataset` ← `Dataset`, `envgroupHostname` ← `EnvgroupHostname`, `from` ← `From`, `inclQueriesWithoutReport` ← `InclQueriesWithoutReport`, `status` ← `Status`, `submittedBy` ← `SubmittedBy`, `to` ← `To`
- **Returns**: `GoogleCloudApigeeV1ListAsyncQueriesResponse`
- **Error**: `ApiException<ApigeeOrganizationsHostQueriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostQueriesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostQueriesListRequest.cs` |
| `GoogleCloudApigeeV1ListAsyncQueriesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListAsyncQueriesResponse.cs` |
| `ApigeeOrganizationsHostQueriesListError` | `src/Apigee/Errors/ApigeeOrganizationsHostQueriesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostSecurityReportsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostSecurityReportsCreate(ApigeeOrganizationsHostSecurityReportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApiException<ApigeeOrganizationsHostSecurityReportsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostSecurityReportsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityReportQuery` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReportQuery.cs` |
| `GoogleCloudApigeeV1SecurityReport` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs` |
| `ApigeeOrganizationsHostSecurityReportsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostSecurityReportsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostSecurityReportsGet(ApigeeOrganizationsHostSecurityReportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostSecurityReportsId`
- **Returns**: `GoogleCloudApigeeV1SecurityReport`
- **Error**: `ApiException<ApigeeOrganizationsHostSecurityReportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostSecurityReportsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsGetRequest.cs` |
| `GoogleCloudApigeeV1SecurityReport` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReport.cs` |
| `ApigeeOrganizationsHostSecurityReportsGetError` | `src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostSecurityReportsGetResult

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostSecurityReportsGetResult(ApigeeOrganizationsHostSecurityReportsGetResultRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostSecurityReportsId`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsHostSecurityReportsGetResultError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostSecurityReportsGetResultRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsGetResultRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsHostSecurityReportsGetResultError` | `src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsGetResultError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostSecurityReportsGetResultView

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostSecurityReportsGetResultView(ApigeeOrganizationsHostSecurityReportsGetResultViewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostSecurityReportsId`
- **Returns**: `GoogleCloudApigeeV1SecurityReportResultView`
- **Error**: `ApiException<ApigeeOrganizationsHostSecurityReportsGetResultViewError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostSecurityReportsGetResultViewRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsGetResultViewRequest.cs` |
| `GoogleCloudApigeeV1SecurityReportResultView` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityReportResultView.cs` |
| `ApigeeOrganizationsHostSecurityReportsGetResultViewError` | `src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsGetResultViewError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostSecurityReportsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostSecurityReportsList(ApigeeOrganizationsHostSecurityReportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `dataset` ← `Dataset`, `envgroupHostname` ← `EnvgroupHostname`, `from` ← `From`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `status` ← `Status`, `submittedBy` ← `SubmittedBy`, `to` ← `To`
- **Returns**: `GoogleCloudApigeeV1ListSecurityReportsResponse`
- **Error**: `ApiException<ApigeeOrganizationsHostSecurityReportsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostSecurityReportsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostSecurityReportsListRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityReportsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityReportsResponse.cs` |
| `ApigeeOrganizationsHostSecurityReportsListError` | `src/Apigee/Errors/ApigeeOrganizationsHostSecurityReportsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsHostStatsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsHostStatsGet(ApigeeOrganizationsHostStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `HostStatsId`
- **Query params (wire ← C#)**: `accuracy` ← `Accuracy`, `envgroupHostname` ← `EnvgroupHostname`, `filter` ← `Filter`, `limit` ← `Limit`, `offset` ← `Offset`, `realtime` ← `Realtime`, `select` ← `Select`, `sort` ← `Sort`, `sortby` ← `Sortby`, `timeRange` ← `TimeRange`, `timeUnit` ← `TimeUnit`, `topk` ← `Topk`, `tsAscending` ← `TsAscending`, `tzo` ← `Tzo`
- **Returns**: `GoogleCloudApigeeV1Stats`
- **Error**: `ApiException<ApigeeOrganizationsHostStatsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsHostStatsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsHostStatsGetRequest.cs` |
| `GoogleCloudApigeeV1Stats` | `src/Apigee/Models/GoogleCloudApigeeV1Stats.cs` |
| `ApigeeOrganizationsHostStatsGetError` | `src/Apigee/Errors/ApigeeOrganizationsHostStatsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesAttachmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesAttachmentsCreate(ApigeeOrganizationsInstancesAttachmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesAttachmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesAttachmentsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsCreateRequest.cs` |
| `GoogleCloudApigeeV1InstanceAttachment` | `src/Apigee/Models/GoogleCloudApigeeV1InstanceAttachment.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesAttachmentsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesAttachmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesAttachmentsDelete(ApigeeOrganizationsInstancesAttachmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `AttachmentsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesAttachmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesAttachmentsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesAttachmentsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesAttachmentsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesAttachmentsGet(ApigeeOrganizationsInstancesAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `AttachmentsId`
- **Returns**: `GoogleCloudApigeeV1InstanceAttachment`
- **Error**: `ApiException<ApigeeOrganizationsInstancesAttachmentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesAttachmentsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsGetRequest.cs` |
| `GoogleCloudApigeeV1InstanceAttachment` | `src/Apigee/Models/GoogleCloudApigeeV1InstanceAttachment.cs` |
| `ApigeeOrganizationsInstancesAttachmentsGetError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesAttachmentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesAttachmentsList(ApigeeOrganizationsInstancesAttachmentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListInstanceAttachmentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsInstancesAttachmentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesAttachmentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesAttachmentsListRequest.cs` |
| `GoogleCloudApigeeV1ListInstanceAttachmentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListInstanceAttachmentsResponse.cs` |
| `ApigeeOrganizationsInstancesAttachmentsListError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesAttachmentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesCanaryevaluationsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesCanaryevaluationsCreate(ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesCanaryevaluationsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest.cs` |
| `GoogleCloudApigeeV1CanaryEvaluation` | `src/Apigee/Models/GoogleCloudApigeeV1CanaryEvaluation.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesCanaryevaluationsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesCanaryevaluationsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesCanaryevaluationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesCanaryevaluationsGet(ApigeeOrganizationsInstancesCanaryevaluationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `CanaryevaluationsId`
- **Returns**: `GoogleCloudApigeeV1CanaryEvaluation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesCanaryevaluationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesCanaryevaluationsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesCanaryevaluationsGetRequest.cs` |
| `GoogleCloudApigeeV1CanaryEvaluation` | `src/Apigee/Models/GoogleCloudApigeeV1CanaryEvaluation.cs` |
| `ApigeeOrganizationsInstancesCanaryevaluationsGetError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesCanaryevaluationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesCreate(ApigeeOrganizationsInstancesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesCreateRequest.cs` |
| `GoogleCloudApigeeV1Instance` | `src/Apigee/Models/GoogleCloudApigeeV1Instance.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesDelete(ApigeeOrganizationsInstancesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesGet(ApigeeOrganizationsInstancesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`
- **Returns**: `GoogleCloudApigeeV1Instance`
- **Error**: `ApiException<ApigeeOrganizationsInstancesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesGetRequest.cs` |
| `GoogleCloudApigeeV1Instance` | `src/Apigee/Models/GoogleCloudApigeeV1Instance.cs` |
| `ApigeeOrganizationsInstancesGetError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesList(ApigeeOrganizationsInstancesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListInstancesResponse`
- **Error**: `ApiException<ApigeeOrganizationsInstancesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesListRequest.cs` |
| `GoogleCloudApigeeV1ListInstancesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListInstancesResponse.cs` |
| `ApigeeOrganizationsInstancesListError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesNatAddressesActivate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesNatAddressesActivate(ApigeeOrganizationsInstancesNatAddressesActivateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `NatAddressesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesNatAddressesActivateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesNatAddressesActivateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesActivateRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesNatAddressesActivateError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesActivateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesNatAddressesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesNatAddressesCreate(ApigeeOrganizationsInstancesNatAddressesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesNatAddressesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesNatAddressesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesCreateRequest.cs` |
| `GoogleCloudApigeeV1NatAddress` | `src/Apigee/Models/GoogleCloudApigeeV1NatAddress.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesNatAddressesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesNatAddressesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesNatAddressesDelete(ApigeeOrganizationsInstancesNatAddressesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `NatAddressesId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesNatAddressesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesNatAddressesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesDeleteRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesNatAddressesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesNatAddressesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesNatAddressesGet(ApigeeOrganizationsInstancesNatAddressesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `NatAddressesId`
- **Returns**: `GoogleCloudApigeeV1NatAddress`
- **Error**: `ApiException<ApigeeOrganizationsInstancesNatAddressesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesNatAddressesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesGetRequest.cs` |
| `GoogleCloudApigeeV1NatAddress` | `src/Apigee/Models/GoogleCloudApigeeV1NatAddress.cs` |
| `ApigeeOrganizationsInstancesNatAddressesGetError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesNatAddressesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesNatAddressesList(ApigeeOrganizationsInstancesNatAddressesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListNatAddressesResponse`
- **Error**: `ApiException<ApigeeOrganizationsInstancesNatAddressesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesNatAddressesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesNatAddressesListRequest.cs` |
| `GoogleCloudApigeeV1ListNatAddressesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListNatAddressesResponse.cs` |
| `ApigeeOrganizationsInstancesNatAddressesListError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesNatAddressesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesPatch(ApigeeOrganizationsInstancesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsInstancesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesPatchRequest.cs` |
| `GoogleCloudApigeeV1Instance` | `src/Apigee/Models/GoogleCloudApigeeV1Instance.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsInstancesPatchError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsInstancesReportStatus

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsInstancesReportStatus(ApigeeOrganizationsInstancesReportStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `InstancesId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsInstancesReportStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsInstancesReportStatusRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsInstancesReportStatusRequest.cs` |
| `GoogleCloudApigeeV1ReportInstanceStatusRequest` | `src/Apigee/Models/GoogleCloudApigeeV1ReportInstanceStatusRequest.cs` |
| `ApigeeOrganizationsInstancesReportStatusError` | `src/Apigee/Errors/ApigeeOrganizationsInstancesReportStatusError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsCreate(ApigeeOrganizationsKeyvaluemapsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsCreateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsKeyvaluemapsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsDelete(ApigeeOrganizationsKeyvaluemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsDeleteRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsKeyvaluemapsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsEntriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsEntriesCreate(ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsEntriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesCreateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsKeyvaluemapsEntriesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsEntriesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsEntriesDelete(ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`, `EntriesId`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsEntriesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesDeleteRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsKeyvaluemapsEntriesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsEntriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsEntriesGet(ApigeeOrganizationsKeyvaluemapsEntriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`, `EntriesId`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsEntriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsEntriesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesGetRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsKeyvaluemapsEntriesGetError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsEntriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsEntriesList(ApigeeOrganizationsKeyvaluemapsEntriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListKeyValueEntriesResponse`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsEntriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsEntriesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesListRequest.cs` |
| `GoogleCloudApigeeV1ListKeyValueEntriesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListKeyValueEntriesResponse.cs` |
| `ApigeeOrganizationsKeyvaluemapsEntriesListError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsEntriesUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsEntriesUpdate(ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`, `EntriesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueEntry`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsEntriesUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsEntriesUpdateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueEntry` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueEntry.cs` |
| `ApigeeOrganizationsKeyvaluemapsEntriesUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsEntriesUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsGet(ApigeeOrganizationsKeyvaluemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsGetRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsKeyvaluemapsGetError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsKeyvaluemapsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsKeyvaluemapsUpdate(ApigeeOrganizationsKeyvaluemapsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `KeyvaluemapsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1KeyValueMap`
- **Error**: `ApiException<ApigeeOrganizationsKeyvaluemapsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsKeyvaluemapsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsKeyvaluemapsUpdateRequest.cs` |
| `GoogleCloudApigeeV1KeyValueMap` | `src/Apigee/Models/GoogleCloudApigeeV1KeyValueMap.cs` |
| `ApigeeOrganizationsKeyvaluemapsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsKeyvaluemapsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GoogleCloudApigeeV1ListOrganizationsResponse`
- **Error**: `ApiException<ApigeeOrganizationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GoogleCloudApigeeV1ListOrganizationsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListOrganizationsResponse.cs` |
| `ApigeeOrganizationsListError` | `src/Apigee/Errors/ApigeeOrganizationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsOperationsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsOperationsGet(ApigeeOrganizationsOperationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `OperationsId`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsOperationsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsOperationsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsOperationsGetRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsOperationsGetError` | `src/Apigee/Errors/ApigeeOrganizationsOperationsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsOperationsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsOperationsList(ApigeeOrganizationsOperationsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `returnPartialSuccess` ← `ReturnPartialSuccess`
- **Returns**: `GoogleLongrunningListOperationsResponse`
- **Error**: `ApiException<ApigeeOrganizationsOperationsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsOperationsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsOperationsListRequest.cs` |
| `GoogleLongrunningListOperationsResponse` | `src/Apigee/Models/GoogleLongrunningListOperationsResponse.cs` |
| `ApigeeOrganizationsOperationsListError` | `src/Apigee/Errors/ApigeeOrganizationsOperationsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsOptimizedHostStatsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsOptimizedHostStatsGet(ApigeeOrganizationsOptimizedHostStatsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `OptimizedHostStatsId`
- **Query params (wire ← C#)**: `accuracy` ← `Accuracy`, `envgroupHostname` ← `EnvgroupHostname`, `filter` ← `Filter`, `limit` ← `Limit`, `offset` ← `Offset`, `realtime` ← `Realtime`, `select` ← `Select`, `sort` ← `Sort`, `sortby` ← `Sortby`, `timeRange` ← `TimeRange`, `timeUnit` ← `TimeUnit`, `topk` ← `Topk`, `tsAscending` ← `TsAscending`, `tzo` ← `Tzo`
- **Returns**: `GoogleCloudApigeeV1OptimizedStats`
- **Error**: `ApiException<ApigeeOrganizationsOptimizedHostStatsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsOptimizedHostStatsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsOptimizedHostStatsGetRequest.cs` |
| `GoogleCloudApigeeV1OptimizedStats` | `src/Apigee/Models/GoogleCloudApigeeV1OptimizedStats.cs` |
| `ApigeeOrganizationsOptimizedHostStatsGetError` | `src/Apigee/Errors/ApigeeOrganizationsOptimizedHostStatsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsReportsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsReportsCreate(ApigeeOrganizationsReportsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1CustomReport`
- **Error**: `ApiException<ApigeeOrganizationsReportsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsReportsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsCreateRequest.cs` |
| `GoogleCloudApigeeV1CustomReport` | `src/Apigee/Models/GoogleCloudApigeeV1CustomReport.cs` |
| `ApigeeOrganizationsReportsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsReportsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsReportsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsReportsDelete(ApigeeOrganizationsReportsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ReportsId`
- **Returns**: `GoogleCloudApigeeV1DeleteCustomReportResponse`
- **Error**: `ApiException<ApigeeOrganizationsReportsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsReportsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsDeleteRequest.cs` |
| `GoogleCloudApigeeV1DeleteCustomReportResponse` | `src/Apigee/Models/GoogleCloudApigeeV1DeleteCustomReportResponse.cs` |
| `ApigeeOrganizationsReportsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsReportsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsReportsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsReportsGet(ApigeeOrganizationsReportsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ReportsId`
- **Returns**: `GoogleCloudApigeeV1CustomReport`
- **Error**: `ApiException<ApigeeOrganizationsReportsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsReportsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsGetRequest.cs` |
| `GoogleCloudApigeeV1CustomReport` | `src/Apigee/Models/GoogleCloudApigeeV1CustomReport.cs` |
| `ApigeeOrganizationsReportsGetError` | `src/Apigee/Errors/ApigeeOrganizationsReportsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsReportsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsReportsList(ApigeeOrganizationsReportsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `expand` ← `Expand`
- **Returns**: `GoogleCloudApigeeV1ListCustomReportsResponse`
- **Error**: `ApiException<ApigeeOrganizationsReportsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsReportsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsListRequest.cs` |
| `GoogleCloudApigeeV1ListCustomReportsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListCustomReportsResponse.cs` |
| `ApigeeOrganizationsReportsListError` | `src/Apigee/Errors/ApigeeOrganizationsReportsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsReportsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsReportsUpdate(ApigeeOrganizationsReportsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `ReportsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1CustomReport`
- **Error**: `ApiException<ApigeeOrganizationsReportsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsReportsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsReportsUpdateRequest.cs` |
| `GoogleCloudApigeeV1CustomReport` | `src/Apigee/Models/GoogleCloudApigeeV1CustomReport.cs` |
| `ApigeeOrganizationsReportsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsReportsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityAssessmentResultsBatchCompute

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityAssessmentResultsBatchCompute(ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityAssessmentResultsBatchComputeRequest.cs` |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest` | `src/Apigee/Models/GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest.cs` |
| `GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse.cs` |
| `ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityAssessmentResultsBatchComputeError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityFeedbackCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityFeedbackCreate(ApigeeOrganizationsSecurityFeedbackCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `securityFeedbackId` ← `SecurityFeedbackId`
- **Returns**: `GoogleCloudApigeeV1SecurityFeedback`
- **Error**: `ApiException<ApigeeOrganizationsSecurityFeedbackCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityFeedbackCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityFeedback` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityFeedback.cs` |
| `ApigeeOrganizationsSecurityFeedbackCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityFeedbackDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityFeedbackDelete(ApigeeOrganizationsSecurityFeedbackDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityFeedbackId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsSecurityFeedbackDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityFeedbackDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackDeleteRequest.cs` |
| `ApigeeOrganizationsSecurityFeedbackDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityFeedbackGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityFeedbackGet(ApigeeOrganizationsSecurityFeedbackGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityFeedbackId`
- **Returns**: `GoogleCloudApigeeV1SecurityFeedback`
- **Error**: `ApiException<ApigeeOrganizationsSecurityFeedbackGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityFeedbackGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackGetRequest.cs` |
| `GoogleCloudApigeeV1SecurityFeedback` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityFeedback.cs` |
| `ApigeeOrganizationsSecurityFeedbackGetError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityFeedbackList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityFeedbackList(ApigeeOrganizationsSecurityFeedbackListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListSecurityFeedbackResponse`
- **Error**: `ApiException<ApigeeOrganizationsSecurityFeedbackListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityFeedbackListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackListRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityFeedbackResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityFeedbackResponse.cs` |
| `ApigeeOrganizationsSecurityFeedbackListError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityFeedbackPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityFeedbackPatch(ApigeeOrganizationsSecurityFeedbackPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityFeedbackId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityFeedback`
- **Error**: `ApiException<ApigeeOrganizationsSecurityFeedbackPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityFeedbackPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityFeedbackPatchRequest.cs` |
| `GoogleCloudApigeeV1SecurityFeedback` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityFeedback.cs` |
| `ApigeeOrganizationsSecurityFeedbackPatchError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityFeedbackPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityMonitoringConditionsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityMonitoringConditionsCreate(ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `securityMonitoringConditionId` ← `SecurityMonitoringConditionId`
- **Returns**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Error**: `ApiException<ApigeeOrganizationsSecurityMonitoringConditionsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityMonitoringCondition.cs` |
| `ApigeeOrganizationsSecurityMonitoringConditionsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityMonitoringConditionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityMonitoringConditionsDelete(ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityMonitoringConditionsId`
- **Query params (wire ← C#)**: `riskAssessmentType` ← `RiskAssessmentType`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsSecurityMonitoringConditionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsDeleteRequest.cs` |
| `RiskAssessmentType2` | `src/Apigee/Models/Enums/RiskAssessmentType2.cs` |
| `ApigeeOrganizationsSecurityMonitoringConditionsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityMonitoringConditionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityMonitoringConditionsGet(ApigeeOrganizationsSecurityMonitoringConditionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityMonitoringConditionsId`
- **Query params (wire ← C#)**: `riskAssessmentType` ← `RiskAssessmentType`
- **Returns**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Error**: `ApiException<ApigeeOrganizationsSecurityMonitoringConditionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityMonitoringConditionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsGetRequest.cs` |
| `RiskAssessmentType2` | `src/Apigee/Models/Enums/RiskAssessmentType2.cs` |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityMonitoringCondition.cs` |
| `ApigeeOrganizationsSecurityMonitoringConditionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityMonitoringConditionsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityMonitoringConditionsList(ApigeeOrganizationsSecurityMonitoringConditionsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `filter` ← `Filter`, `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `riskAssessmentType` ← `RiskAssessmentType`
- **Returns**: `GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSecurityMonitoringConditionsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityMonitoringConditionsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsListRequest.cs` |
| `RiskAssessmentType2` | `src/Apigee/Models/Enums/RiskAssessmentType2.cs` |
| `GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityMonitoringConditionsResponse.cs` |
| `ApigeeOrganizationsSecurityMonitoringConditionsListError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityMonitoringConditionsPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityMonitoringConditionsPatch(ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityMonitoringConditionsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityMonitoringCondition`
- **Error**: `ApiException<ApigeeOrganizationsSecurityMonitoringConditionsPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityMonitoringConditionsPatchRequest.cs` |
| `GoogleCloudApigeeV1SecurityMonitoringCondition` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityMonitoringCondition.cs` |
| `ApigeeOrganizationsSecurityMonitoringConditionsPatchError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityMonitoringConditionsPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesCreate(ApigeeOrganizationsSecurityProfilesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `securityProfileId` ← `SecurityProfileId`
- **Returns**: `GoogleCloudApigeeV1SecurityProfile`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityProfile` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfile.cs` |
| `ApigeeOrganizationsSecurityProfilesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesDelete(ApigeeOrganizationsSecurityProfilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesDeleteRequest.cs` |
| `ApigeeOrganizationsSecurityProfilesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScores(ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`, `EnvironmentsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ComputeEnvironmentScoresResponse`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresRequest.cs` |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresRequest` | `src/Apigee/Models/GoogleCloudApigeeV1ComputeEnvironmentScoresRequest.cs` |
| `GoogleCloudApigeeV1ComputeEnvironmentScoresResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ComputeEnvironmentScoresResponse.cs` |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesEnvironmentsComputeEnvironmentScoresError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesEnvironmentsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesEnvironmentsCreate(ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation.cs` |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesEnvironmentsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesEnvironmentsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesEnvironmentsDelete(ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`, `EnvironmentsId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest.cs` |
| `ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesGet(ApigeeOrganizationsSecurityProfilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`
- **Returns**: `GoogleCloudApigeeV1SecurityProfile`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesGetRequest.cs` |
| `GoogleCloudApigeeV1SecurityProfile` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfile.cs` |
| `ApigeeOrganizationsSecurityProfilesGetError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesList(ApigeeOrganizationsSecurityProfilesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListSecurityProfilesResponse`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesListRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityProfilesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityProfilesResponse.cs` |
| `ApigeeOrganizationsSecurityProfilesListError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesListRevisions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesListRevisions(ApigeeOrganizationsSecurityProfilesListRevisionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesListRevisionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesListRevisionsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesListRevisionsRequest.cs` |
| `GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse.cs` |
| `ApigeeOrganizationsSecurityProfilesListRevisionsError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesListRevisionsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesPatch(ApigeeOrganizationsSecurityProfilesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityProfile`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesPatchRequest.cs` |
| `GoogleCloudApigeeV1SecurityProfile` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfile.cs` |
| `ApigeeOrganizationsSecurityProfilesPatchError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesV2Create

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesV2Create(ApigeeOrganizationsSecurityProfilesV2CreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `securityProfileV2Id` ← `SecurityProfileV2Id`
- **Returns**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesV2CreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesV2CreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2CreateRequest.cs` |
| `GoogleCloudApigeeV1SecurityProfileV2` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileV2.cs` |
| `ApigeeOrganizationsSecurityProfilesV2CreateError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2CreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesV2Delete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesV2Delete(ApigeeOrganizationsSecurityProfilesV2DeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesV2Id`
- **Query params (wire ← C#)**: `riskAssessmentType` ← `RiskAssessmentType`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesV2DeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesV2DeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2DeleteRequest.cs` |
| `RiskAssessmentType2` | `src/Apigee/Models/Enums/RiskAssessmentType2.cs` |
| `ApigeeOrganizationsSecurityProfilesV2DeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2DeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesV2Get

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesV2Get(ApigeeOrganizationsSecurityProfilesV2GetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesV2Id`
- **Query params (wire ← C#)**: `riskAssessmentType` ← `RiskAssessmentType`
- **Returns**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesV2GetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesV2GetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2GetRequest.cs` |
| `RiskAssessmentType2` | `src/Apigee/Models/Enums/RiskAssessmentType2.cs` |
| `GoogleCloudApigeeV1SecurityProfileV2` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileV2.cs` |
| `ApigeeOrganizationsSecurityProfilesV2GetError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2GetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesV2List

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesV2List(ApigeeOrganizationsSecurityProfilesV2ListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`, `riskAssessmentType` ← `RiskAssessmentType`
- **Returns**: `GoogleCloudApigeeV1ListSecurityProfilesV2Response`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesV2ListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesV2ListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2ListRequest.cs` |
| `RiskAssessmentType2` | `src/Apigee/Models/Enums/RiskAssessmentType2.cs` |
| `GoogleCloudApigeeV1ListSecurityProfilesV2Response` | `src/Apigee/Models/GoogleCloudApigeeV1ListSecurityProfilesV2Response.cs` |
| `ApigeeOrganizationsSecurityProfilesV2ListError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2ListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSecurityProfilesV2Patch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSecurityProfilesV2Patch(ApigeeOrganizationsSecurityProfilesV2PatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SecurityProfilesV2Id`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecurityProfileV2`
- **Error**: `ApiException<ApigeeOrganizationsSecurityProfilesV2PatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSecurityProfilesV2PatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSecurityProfilesV2PatchRequest.cs` |
| `GoogleCloudApigeeV1SecurityProfileV2` | `src/Apigee/Models/GoogleCloudApigeeV1SecurityProfileV2.cs` |
| `ApigeeOrganizationsSecurityProfilesV2PatchError` | `src/Apigee/Errors/ApigeeOrganizationsSecurityProfilesV2PatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSetAddons

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSetAddons(ApigeeOrganizationsSetAddonsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsSetAddonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSetAddonsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSetAddonsRequest.cs` |
| `GoogleCloudApigeeV1SetAddonsRequest` | `src/Apigee/Models/GoogleCloudApigeeV1SetAddonsRequest.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsSetAddonsError` | `src/Apigee/Errors/ApigeeOrganizationsSetAddonsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSetSyncAuthorization

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSetSyncAuthorization(ApigeeOrganizationsSetSyncAuthorizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SyncAuthorization`
- **Error**: `ApiException<ApigeeOrganizationsSetSyncAuthorizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSetSyncAuthorizationRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSetSyncAuthorizationRequest.cs` |
| `GoogleCloudApigeeV1SyncAuthorization` | `src/Apigee/Models/GoogleCloudApigeeV1SyncAuthorization.cs` |
| `ApigeeOrganizationsSetSyncAuthorizationError` | `src/Apigee/Errors/ApigeeOrganizationsSetSyncAuthorizationError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsCreate(ApigeeOrganizationsSharedflowsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `action` ← `Action`, `name` ← `Name`, `space` ← `Space`
- **Returns**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsCreateRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `src/Apigee/Models/GoogleCloudApigeeV1SharedFlowRevision.cs` |
| `ApigeeOrganizationsSharedflowsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsDelete(ApigeeOrganizationsSharedflowsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`
- **Returns**: `GoogleCloudApigeeV1SharedFlow`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsDeleteRequest.cs` |
| `GoogleCloudApigeeV1SharedFlow` | `src/Apigee/Models/GoogleCloudApigeeV1SharedFlow.cs` |
| `ApigeeOrganizationsSharedflowsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsDeploymentsList(ApigeeOrganizationsSharedflowsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsSharedflowsDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsGet(ApigeeOrganizationsSharedflowsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`
- **Returns**: `GoogleCloudApigeeV1SharedFlow`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsGetRequest.cs` |
| `GoogleCloudApigeeV1SharedFlow` | `src/Apigee/Models/GoogleCloudApigeeV1SharedFlow.cs` |
| `ApigeeOrganizationsSharedflowsGetError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsList(ApigeeOrganizationsSharedflowsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `includeMetaData` ← `IncludeMetaData`, `includeRevisions` ← `IncludeRevisions`, `space` ← `Space`
- **Returns**: `GoogleCloudApigeeV1ListSharedFlowsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsListRequest.cs` |
| `GoogleCloudApigeeV1ListSharedFlowsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSharedFlowsResponse.cs` |
| `ApigeeOrganizationsSharedflowsListError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsMove

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsMove(ApigeeOrganizationsSharedflowsMoveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1SharedFlow`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsMoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsMoveRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsMoveRequest.cs` |
| `GoogleCloudApigeeV1MoveSharedFlowRequest` | `src/Apigee/Models/GoogleCloudApigeeV1MoveSharedFlowRequest.cs` |
| `GoogleCloudApigeeV1SharedFlow` | `src/Apigee/Models/GoogleCloudApigeeV1SharedFlow.cs` |
| `ApigeeOrganizationsSharedflowsMoveError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsMoveError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsRevisionsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsRevisionsDelete(ApigeeOrganizationsSharedflowsRevisionsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsRevisionsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsRevisionsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsDeleteRequest.cs` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `src/Apigee/Models/GoogleCloudApigeeV1SharedFlowRevision.cs` |
| `ApigeeOrganizationsSharedflowsRevisionsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsRevisionsDeploymentsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsRevisionsDeploymentsList(ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`, `RevisionsId`
- **Returns**: `GoogleCloudApigeeV1ListDeploymentsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest.cs` |
| `GoogleCloudApigeeV1ListDeploymentsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListDeploymentsResponse.cs` |
| `ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsDeploymentsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsRevisionsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsRevisionsGet(ApigeeOrganizationsSharedflowsRevisionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`, `RevisionsId`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `GoogleApiHttpBody`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsRevisionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsRevisionsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsGetRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `ApigeeOrganizationsSharedflowsRevisionsGetError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevision(ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SharedflowsId`, `RevisionsId`, `Body`
- **Query params (wire ← C#)**: `validate` ← `Validate`
- **Returns**: `GoogleCloudApigeeV1SharedFlowRevision`
- **Error**: `ApiException<ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionRequest.cs` |
| `GoogleApiHttpBody` | `src/Apigee/Models/GoogleApiHttpBody.cs` |
| `GoogleCloudApigeeV1SharedFlowRevision` | `src/Apigee/Models/GoogleCloudApigeeV1SharedFlowRevision.cs` |
| `ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError` | `src/Apigee/Errors/ApigeeOrganizationsSharedflowsRevisionsUpdateSharedFlowRevisionError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApicategoriesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApicategoriesCreate(ApigeeOrganizationsSitesApicategoriesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApicategoriesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApicategoriesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesCreateRequest.cs` |
| `GoogleCloudApigeeV1ApiCategory` | `src/Apigee/Models/GoogleCloudApigeeV1ApiCategory.cs` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiCategoryResponse.cs` |
| `ApigeeOrganizationsSitesApicategoriesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApicategoriesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApicategoriesDelete(ApigeeOrganizationsSitesApicategoriesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApicategoriesId`
- **Returns**: `GoogleCloudApigeeV1DeleteResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApicategoriesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApicategoriesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesDeleteRequest.cs` |
| `GoogleCloudApigeeV1DeleteResponse` | `src/Apigee/Models/GoogleCloudApigeeV1DeleteResponse.cs` |
| `ApigeeOrganizationsSitesApicategoriesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApicategoriesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApicategoriesGet(ApigeeOrganizationsSitesApicategoriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApicategoriesId`
- **Returns**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApicategoriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApicategoriesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesGetRequest.cs` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiCategoryResponse.cs` |
| `ApigeeOrganizationsSitesApicategoriesGetError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApicategoriesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApicategoriesList(ApigeeOrganizationsSitesApicategoriesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`
- **Returns**: `GoogleCloudApigeeV1ListApiCategoriesResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApicategoriesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApicategoriesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesListRequest.cs` |
| `GoogleCloudApigeeV1ListApiCategoriesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListApiCategoriesResponse.cs` |
| `ApigeeOrganizationsSitesApicategoriesListError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApicategoriesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApicategoriesPatch(ApigeeOrganizationsSitesApicategoriesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApicategoriesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiCategoryResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApicategoriesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApicategoriesPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApicategoriesPatchRequest.cs` |
| `GoogleCloudApigeeV1ApiCategory` | `src/Apigee/Models/GoogleCloudApigeeV1ApiCategory.cs` |
| `GoogleCloudApigeeV1ApiCategoryResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiCategoryResponse.cs` |
| `ApigeeOrganizationsSitesApicategoriesPatchError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApicategoriesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsCreate(ApigeeOrganizationsSitesApidocsCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiDocResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsCreateRequest.cs` |
| `GoogleCloudApigeeV1ApiDoc` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDoc.cs` |
| `GoogleCloudApigeeV1ApiDocResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDocResponse.cs` |
| `ApigeeOrganizationsSitesApidocsCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsDelete(ApigeeOrganizationsSitesApidocsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApidocsId`
- **Returns**: `GoogleCloudApigeeV1DeleteResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsDeleteRequest.cs` |
| `GoogleCloudApigeeV1DeleteResponse` | `src/Apigee/Models/GoogleCloudApigeeV1DeleteResponse.cs` |
| `ApigeeOrganizationsSitesApidocsDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsGet(ApigeeOrganizationsSitesApidocsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApidocsId`
- **Returns**: `GoogleCloudApigeeV1ApiDocResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsGetRequest.cs` |
| `GoogleCloudApigeeV1ApiDocResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDocResponse.cs` |
| `ApigeeOrganizationsSitesApidocsGetError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsGetDocumentation

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsGetDocumentation(ApigeeOrganizationsSitesApidocsGetDocumentationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApidocsId`
- **Returns**: `GoogleCloudApigeeV1ApiDocDocumentationResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsGetDocumentationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsGetDocumentationRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsGetDocumentationRequest.cs` |
| `GoogleCloudApigeeV1ApiDocDocumentationResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDocDocumentationResponse.cs` |
| `ApigeeOrganizationsSitesApidocsGetDocumentationError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsGetDocumentationError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsList(ApigeeOrganizationsSitesApidocsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListApiDocsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsListRequest.cs` |
| `GoogleCloudApigeeV1ListApiDocsResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListApiDocsResponse.cs` |
| `ApigeeOrganizationsSitesApidocsListError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsUpdate(ApigeeOrganizationsSitesApidocsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApidocsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiDocResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsUpdateRequest.cs` |
| `GoogleCloudApigeeV1ApiDoc` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDoc.cs` |
| `GoogleCloudApigeeV1ApiDocResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDocResponse.cs` |
| `ApigeeOrganizationsSitesApidocsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSitesApidocsUpdateDocumentation

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSitesApidocsUpdateDocumentation(ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SitesId`, `ApidocsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1ApiDocDocumentationResponse`
- **Error**: `ApiException<ApigeeOrganizationsSitesApidocsUpdateDocumentationError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest.cs` |
| `GoogleCloudApigeeV1ApiDocDocumentation` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDocDocumentation.cs` |
| `GoogleCloudApigeeV1ApiDocDocumentationResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ApiDocDocumentationResponse.cs` |
| `ApigeeOrganizationsSitesApidocsUpdateDocumentationError` | `src/Apigee/Errors/ApigeeOrganizationsSitesApidocsUpdateDocumentationError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesCreate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesCreate(ApigeeOrganizationsSpacesCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `spaceId` ← `SpaceId`
- **Returns**: `GoogleCloudApigeeV1Space`
- **Error**: `ApiException<ApigeeOrganizationsSpacesCreateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesCreateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesCreateRequest.cs` |
| `GoogleCloudApigeeV1Space` | `src/Apigee/Models/GoogleCloudApigeeV1Space.cs` |
| `ApigeeOrganizationsSpacesCreateError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesCreateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesDelete

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesDelete(ApigeeOrganizationsSpacesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SpacesId`
- **Returns**: `object`
- **Error**: `ApiException<ApigeeOrganizationsSpacesDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesDeleteRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesDeleteRequest.cs` |
| `ApigeeOrganizationsSpacesDeleteError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesDeleteError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesGet

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesGet(ApigeeOrganizationsSpacesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SpacesId`
- **Returns**: `GoogleCloudApigeeV1Space`
- **Error**: `ApiException<ApigeeOrganizationsSpacesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesGetRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesGetRequest.cs` |
| `GoogleCloudApigeeV1Space` | `src/Apigee/Models/GoogleCloudApigeeV1Space.cs` |
| `ApigeeOrganizationsSpacesGetError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesGetError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesGetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesGetIamPolicy(ApigeeOrganizationsSpacesGetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SpacesId`
- **Query params (wire ← C#)**: `options.requestedPolicyVersion` ← `OptionsRequestedPolicyVersion`
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApiException<ApigeeOrganizationsSpacesGetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesGetIamPolicyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesGetIamPolicyRequest.cs` |
| `GoogleIamV1Policy` | `src/Apigee/Models/GoogleIamV1Policy.cs` |
| `ApigeeOrganizationsSpacesGetIamPolicyError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesGetIamPolicyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesList

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesList(ApigeeOrganizationsSpacesListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`
- **Query params (wire ← C#)**: `pageSize` ← `PageSize`, `pageToken` ← `PageToken`
- **Returns**: `GoogleCloudApigeeV1ListSpacesResponse`
- **Error**: `ApiException<ApigeeOrganizationsSpacesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesListRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesListRequest.cs` |
| `GoogleCloudApigeeV1ListSpacesResponse` | `src/Apigee/Models/GoogleCloudApigeeV1ListSpacesResponse.cs` |
| `ApigeeOrganizationsSpacesListError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesListError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesPatch

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesPatch(ApigeeOrganizationsSpacesPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SpacesId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1Space`
- **Error**: `ApiException<ApigeeOrganizationsSpacesPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesPatchRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesPatchRequest.cs` |
| `GoogleCloudApigeeV1Space` | `src/Apigee/Models/GoogleCloudApigeeV1Space.cs` |
| `ApigeeOrganizationsSpacesPatchError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesPatchError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesSetIamPolicy

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesSetIamPolicy(ApigeeOrganizationsSpacesSetIamPolicyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SpacesId`, `Body`
- **Returns**: `GoogleIamV1Policy`
- **Error**: `ApiException<ApigeeOrganizationsSpacesSetIamPolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesSetIamPolicyRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesSetIamPolicyRequest.cs` |
| `GoogleIamV1SetIamPolicyRequest` | `src/Apigee/Models/GoogleIamV1SetIamPolicyRequest.cs` |
| `GoogleIamV1Policy` | `src/Apigee/Models/GoogleIamV1Policy.cs` |
| `ApigeeOrganizationsSpacesSetIamPolicyError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesSetIamPolicyError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsSpacesTestIamPermissions

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsSpacesTestIamPermissions(ApigeeOrganizationsSpacesTestIamPermissionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `SpacesId`, `Body`
- **Returns**: `GoogleIamV1TestIamPermissionsResponse`
- **Error**: `ApiException<ApigeeOrganizationsSpacesTestIamPermissionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsSpacesTestIamPermissionsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsSpacesTestIamPermissionsRequest.cs` |
| `GoogleIamV1TestIamPermissionsRequest` | `src/Apigee/Models/GoogleIamV1TestIamPermissionsRequest.cs` |
| `GoogleIamV1TestIamPermissionsResponse` | `src/Apigee/Models/GoogleIamV1TestIamPermissionsResponse.cs` |
| `ApigeeOrganizationsSpacesTestIamPermissionsError` | `src/Apigee/Errors/ApigeeOrganizationsSpacesTestIamPermissionsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsUpdate

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsUpdate(ApigeeOrganizationsUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Returns**: `GoogleCloudApigeeV1Organization`
- **Error**: `ApiException<ApigeeOrganizationsUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsUpdateRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsUpdateRequest.cs` |
| `GoogleCloudApigeeV1Organization` | `src/Apigee/Models/GoogleCloudApigeeV1Organization.cs` |
| `ApigeeOrganizationsUpdateError` | `src/Apigee/Errors/ApigeeOrganizationsUpdateError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsUpdateControlPlaneAccess

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsUpdateControlPlaneAccess(ApigeeOrganizationsUpdateControlPlaneAccessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleLongrunningOperation`
- **Error**: `ApiException<ApigeeOrganizationsUpdateControlPlaneAccessError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsUpdateControlPlaneAccessRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsUpdateControlPlaneAccessRequest.cs` |
| `GoogleCloudApigeeV1ControlPlaneAccess` | `src/Apigee/Models/GoogleCloudApigeeV1ControlPlaneAccess.cs` |
| `GoogleLongrunningOperation` | `src/Apigee/Models/GoogleLongrunningOperation.cs` |
| `ApigeeOrganizationsUpdateControlPlaneAccessError` | `src/Apigee/Errors/ApigeeOrganizationsUpdateControlPlaneAccessError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

### ApigeeOrganizationsUpdateSecuritySettings

- **Auth**: `options.Oauth2` OR `options.ApiKey`
- **Signature**: `ApigeeOrganizationsUpdateSecuritySettings(ApigeeOrganizationsUpdateSecuritySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationsId`, `Body`
- **Query params (wire ← C#)**: `updateMask` ← `UpdateMask`
- **Returns**: `GoogleCloudApigeeV1SecuritySettings`
- **Error**: `ApiException<ApigeeOrganizationsUpdateSecuritySettingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetGoogleRpcError([NotNullWhen(true)] out GoogleRpcError? value)` [4XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ApigeeOrganizationsUpdateSecuritySettingsRequest` | `src/Apigee/Requests/Organizations/ApigeeOrganizationsUpdateSecuritySettingsRequest.cs` |
| `GoogleCloudApigeeV1SecuritySettings` | `src/Apigee/Models/GoogleCloudApigeeV1SecuritySettings.cs` |
| `ApigeeOrganizationsUpdateSecuritySettingsError` | `src/Apigee/Errors/ApigeeOrganizationsUpdateSecuritySettingsError.cs` |
| `GoogleRpcError` | `src/Apigee/Models/GoogleRpcError.cs` |

