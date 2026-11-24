<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.deployments` · Source: `src/resources/deployments.ts` · 4 operations · Request and error types: namespace `Deployments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `boomi`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDeployedPackage

- **Signature**: `createDeployedPackage(request: Deployments.CreateDeployedPackageRequest, options?: RequestOptions): ApiPromise<DeployedPackage, Deployments.CreateDeployedPackageError>`
- **Wire**: `POST /DeployedPackage`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeployedPackage`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Deployments.CreateDeployedPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.CreateDeployedPackageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeployedPackageInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeployedPackageInput` | `deployedPackageInputSchema` | `src/models/deployed-package-input.ts` |
| `DeployedPackage` | `deployedPackageSchema` | `src/models/deployed-package.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteDeployedPackage

- **Signature**: `deleteDeployedPackage(request: Deployments.DeleteDeployedPackageRequest, options?: RequestOptions): ApiPromise<undefined, Deployments.DeleteDeployedPackageError>`
- **Wire**: `DELETE /DeployedPackage/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Deployments.DeleteDeployedPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.DeleteDeployedPackageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getDeployedPackage

- **Signature**: `getDeployedPackage(request: Deployments.GetDeployedPackageRequest, options?: RequestOptions): ApiPromise<DeployedPackage, Deployments.GetDeployedPackageError>`
- **Wire**: `GET /DeployedPackage/{id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeployedPackage`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Deployments.GetDeployedPackageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.GetDeployedPackageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeployedPackage` | `deployedPackageSchema` | `src/models/deployed-package.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### queryDeployedPackages

- **Signature**: `queryDeployedPackages(request: Deployments.QueryDeployedPackagesRequest, options?: RequestOptions): ApiPromise<DeployedPackageQueryResult, Deployments.QueryDeployedPackagesError>`
- **Wire**: `POST /DeployedPackage/query`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeployedPackageQueryResult`
- **Error**: `BoomiError` with `kind: "api"`, an instance of `Deployments.QueryDeployedPackagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Deployments.QueryDeployedPackagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueryRequest` | `queryRequestSchema` | `src/models/query-request.ts` |
| `DeployedPackageQueryResult` | `deployedPackageQueryResultSchema` | `src/models/deployed-package-query-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

