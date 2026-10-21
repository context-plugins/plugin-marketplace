<!-- Generated file — do not edit; regenerated with the SDK. -->

# Connector — operations

Accessor: `client.connector` · Source: `src/resources/connector.ts` · 3 operations · Request and error types: namespace `Connector`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRecordContent

- **Signature**: `getRecordContent(request: Connector.GetRecordContentRequest, options?: RequestOptions): ApiPromise<GetRecordContentResponseSchema, Connector.GetRecordContentError>`
- **Wire**: `GET /connectors/record/{recordId}/content`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetRecordContentResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Connector.GetRecordContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"errorResponse5"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connector.GetRecordContentRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `recordId` | `path` | `string` | yes |
| `maxChars` | `query` | `number` | no |
| `startBlock` | `query` | `number` | no |
| `query` | `query` | `string` | no |
| `mode` | `query` | `Mode1` | no |
| `startRecord` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Mode1` | `mode1Schema` | `src/models/mode1.ts` |
| `GetRecordContentResponseSchema` | `getRecordContentResponseSchemaSchema` | `src/models/get-record-content-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### lookupRecordByIdentifier

- **Signature**: `lookupRecordByIdentifier(request: Connector.LookupRecordByIdentifierRequest, options?: RequestOptions): ApiPromise<LookupRecordResponseSchema, Connector.LookupRecordByIdentifierError>`
- **Wire**: `GET /connectors/record/lookup`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LookupRecordResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Connector.LookupRecordByIdentifierError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connector.LookupRecordByIdentifierRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `identifiers` | `query` | `string[]` | yes |
| `connectorName` | `query` | `ConnectorNameEnum` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConnectorNameEnum` | `connectorNameEnumSchema` | `src/models/connector-name-enum.ts` |
| `LookupRecordResponseSchema` | `lookupRecordResponseSchemaSchema` | `src/models/lookup-record-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### navigateKnowledgeGraph

- **Signature**: `navigateKnowledgeGraph(request: Connector.NavigateKnowledgeGraphRequest, options?: RequestOptions): ApiPromise<NavigateKnowledgeGraphResponseSchema, Connector.NavigateKnowledgeGraphError>`
- **Wire**: `GET /connectors/navigate`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NavigateKnowledgeGraphResponseSchema`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `Connector.NavigateKnowledgeGraphError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"errorResponse6"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Connector.NavigateKnowledgeGraphRequest` (9):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `nodeId` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `50` |
| `depth` | `query` | `number` | no | `1` |
| `nodeTypes` | `query` | `string[]` | no | — |
| `createdAfter` | `query` | `string` | no | — |
| `createdBefore` | `query` | `string` | no | — |
| `modifiedAfter` | `query` | `string` | no | — |
| `modifiedBefore` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NavigateKnowledgeGraphResponseSchema` | `navigateKnowledgeGraphResponseSchemaSchema` | `src/models/navigate-knowledge-graph-response-schema.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

