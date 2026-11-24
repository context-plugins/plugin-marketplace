<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connectors — operations

Accessor: `client.connectors` · Source: `src/resources/connectors.ts` · 2 operations · Request and error types: namespace `Connectors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getConnector

- **Signature**: `getConnector(request: Connectors.GetConnectorRequest, options?: RequestOptions): ApiPromise<ConnectorsResponse1, Connectors.GetConnectorError>`
- **Wire**: `GET /connectors/{connectorId}/{method}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsResponse1`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connectors.GetConnectorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectors400Error1"` [400] `Connectors400Error1` · `"connectors401Error1"` [401] `Connectors401Error1` · `"connectors404Error1"` [404] `Connectors404Error1` · `"connectors500Error1"` [500] `Connectors500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connectors.GetConnectorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `connectorId` | `path` | `string` | yes |
| `method` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsResponse1` | `connectorsResponse1Schema` | `src/models/connectors-response1.ts` |
| `Connectors400Error1` | `connectors400Error1Schema` | `src/models/connectors400-error1.ts` |
| `Connectors401Error1` | `connectors401Error1Schema` | `src/models/connectors401-error1.ts` |
| `Connectors404Error1` | `connectors404Error1Schema` | `src/models/connectors404-error1.ts` |
| `Connectors500Error1` | `connectors500Error1Schema` | `src/models/connectors500-error1.ts` |

### getConnectors

- **Signature**: `getConnectors(request?: Connectors.GetConnectorsRequest, options?: RequestOptions): ApiPromise<ConnectorsResponse, Connectors.GetConnectorsError>`
- **Wire**: `GET /connectors`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConnectorsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Connectors.GetConnectorsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"connectors400Error1"` [400] `Connectors400Error1` · `"connectors401Error1"` [401] `Connectors401Error1` · `"connectors404Error1"` [404] `Connectors404Error1` · `"connectors500Error1"` [500] `Connectors500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connectors.GetConnectorsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorsResponse` | `connectorsResponseSchema` | `src/models/connectors-response.ts` |
| `Connectors400Error1` | `connectors400Error1Schema` | `src/models/connectors400-error1.ts` |
| `Connectors401Error1` | `connectors401Error1Schema` | `src/models/connectors401-error1.ts` |
| `Connectors404Error1` | `connectors404Error1Schema` | `src/models/connectors404-error1.ts` |
| `Connectors500Error1` | `connectors500Error1Schema` | `src/models/connectors500-error1.ts` |

