<!-- Generated file — do not edit; regenerated with the SDK. -->

# Destinations — operations

Accessor: `client.destinations` · Source: `src/resources/destinations.ts` · 4 operations · Request and error types: namespace `Destinations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDestination

- **Signature**: `createDestination(request: Destinations.CreateDestinationRequest, options?: RequestOptions): ApiPromise<DestinationsResponse1, Destinations.CreateDestinationError>`
- **Wire**: `POST /destinations`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DestinationsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Destinations.CreateDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"validateErrorJson"` [409] `ValidateErrorJson` · `"validateErrorJson2"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.CreateDestinationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DestinationCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestinationCreate` | `destinationCreateSchema` | `src/models/destination-create.ts` |
| `DestinationsResponse1` | `destinationsResponse1Schema` | `src/models/unions/destinations-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getDestination

- **Signature**: `getDestination(request: Destinations.GetDestinationRequest, options?: RequestOptions): ApiPromise<Destination, Destinations.GetDestinationError>`
- **Wire**: `GET /destinations/{destinationId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Destination`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Destinations.GetDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.GetDestinationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `destinationId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Destination` | `destinationSchema` | `src/models/destination.ts` |

### listDestination

- **Signature**: `listDestination(request?: Destinations.ListDestinationRequest, options?: RequestOptions): ApiPromise<DestinationsResponse, Destinations.ListDestinationError>`
- **Wire**: `GET /destinations`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DestinationsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Destinations.ListDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.ListDestinationRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `slug` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchDestinationsApi` | no | `OrderByHightouchDestinationsApi.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchDestinationsApi` | `orderByHightouchDestinationsApiSchema` | `src/models/order-by-hightouch-destinations-api.ts` |
| `DestinationsResponse` | `destinationsResponseSchema` | `src/models/destinations-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### updateDestination

- **Signature**: `updateDestination(request: Destinations.UpdateDestinationRequest, options?: RequestOptions): ApiPromise<DestinationsResponse1, Destinations.UpdateDestinationError>`
- **Wire**: `PATCH /destinations/{destinationId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DestinationsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Destinations.UpdateDestinationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Destinations.UpdateDestinationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `destinationId` | `path` | `number` | yes |
| `body` | `body` | `DestinationUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DestinationUpdate` | `destinationUpdateSchema` | `src/models/destination-update.ts` |
| `DestinationsResponse1` | `destinationsResponse1Schema` | `src/models/unions/destinations-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

