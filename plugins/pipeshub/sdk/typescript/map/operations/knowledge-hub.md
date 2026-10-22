<!-- Generated file — do not edit; regenerated with the SDK. -->

# KnowledgeHub — operations

Accessor: `client.knowledgeHub` · Source: `src/resources/knowledge-hub.ts` · 2 operations · Request and error types: namespace `KnowledgeHub`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getKnowledgeHubChildNodes

- **Signature**: `getKnowledgeHubChildNodes(request: KnowledgeHub.GetKnowledgeHubChildNodesRequest, options?: RequestOptions): ApiPromise<KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubChildNodesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /knowledgeBase/knowledge-hub/nodes/{parentType}/{parentId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KnowledgeHubNodesResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeHub.GetKnowledgeHubChildNodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"knowledgeBaseKnowledgeHubNodes400Error1"` [400] `KnowledgeBaseKnowledgeHubNodes400Error1` · `"knowledgeBaseKnowledgeHubNodes401Error1"` [401] `KnowledgeBaseKnowledgeHubNodes401Error1` · `"knowledgeBaseKnowledgeHubNodes403Error1"` [403] `KnowledgeBaseKnowledgeHubNodes403Error1` · `"knowledgeBaseKnowledgeHubNodes404Error1"` [404] `KnowledgeBaseKnowledgeHubNodes404Error1` · `"knowledgeBaseKnowledgeHubNodes500Error1"` [500] `KnowledgeBaseKnowledgeHubNodes500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeHub.GetKnowledgeHubChildNodesRequest` (19):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `parentType` | `path` | `ParentType` | yes | — |
| `parentId` | `path` | `string` | yes | — |
| `onlyContainers` | `query` | `boolean` | no | `false` |
| `page` | `query` | `number` | no | `1` |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `sortBy` | `query` | `SortBy2` | no | `SortBy2.UpdatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `q` | `query` | `string` | no | — |
| `nodeTypes` | `query` | `string` | no | — |
| `recordTypes` | `query` | `string` | no | — |
| `origins` | `query` | `string` | no | — |
| `connectorIds` | `query` | `string` | no | — |
| `indexingStatus` | `query` | `string` | no | — |
| `createdAt` | `query` | `string` | no | — |
| `updatedAt` | `query` | `string` | no | — |
| `size` | `query` | `string` | no | — |
| `flattened` | `query` | `boolean` | no | — |
| `include` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ParentType` | `parentTypeSchema` | `src/models/parent-type.ts` |
| `SortBy2` | `sortBy2Schema` | `src/models/sort-by2.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `KnowledgeHubNodesResponse` | `knowledgeHubNodesResponseSchema` | `src/models/knowledge-hub-nodes-response.ts` |
| `KnowledgeBaseKnowledgeHubNodes400Error1` | `knowledgeBaseKnowledgeHubNodes400Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes400-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes401Error1` | `knowledgeBaseKnowledgeHubNodes401Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes401-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes403Error1` | `knowledgeBaseKnowledgeHubNodes403Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes403-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes404Error1` | `knowledgeBaseKnowledgeHubNodes404Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes404-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes500Error1` | `knowledgeBaseKnowledgeHubNodes500Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes500-error1.ts` |

### getKnowledgeHubRootNodes

- **Signature**: `getKnowledgeHubRootNodes(request: KnowledgeHub.GetKnowledgeHubRootNodesRequest, options?: RequestOptions): ApiPromise<KnowledgeHubNodesResponse, KnowledgeHub.GetKnowledgeHubRootNodesError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /knowledgeBase/knowledge-hub/nodes`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `KnowledgeHubNodesResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `KnowledgeHub.GetKnowledgeHubRootNodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"knowledgeBaseKnowledgeHubNodes400Error1"` [400] `KnowledgeBaseKnowledgeHubNodes400Error1` · `"knowledgeBaseKnowledgeHubNodes401Error1"` [401] `KnowledgeBaseKnowledgeHubNodes401Error1` · `"knowledgeBaseKnowledgeHubNodes403Error1"` [403] `KnowledgeBaseKnowledgeHubNodes403Error1` · `"knowledgeBaseKnowledgeHubNodes500Error1"` [500] `KnowledgeBaseKnowledgeHubNodes500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeHub.GetKnowledgeHubRootNodesRequest` (17):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `onlyContainers` | `query` | `boolean` | no | `false` |
| `page` | `query` | `number` | no | `1` |
| `cursor` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `50` |
| `sortBy` | `query` | `SortBy2` | no | `SortBy2.UpdatedAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `q` | `query` | `string` | no | — |
| `nodeTypes` | `query` | `string` | no | — |
| `recordTypes` | `query` | `string` | no | — |
| `origins` | `query` | `string` | no | — |
| `connectorIds` | `query` | `string` | no | — |
| `indexingStatus` | `query` | `string` | no | — |
| `createdAt` | `query` | `string` | no | — |
| `updatedAt` | `query` | `string` | no | — |
| `size` | `query` | `string` | no | — |
| `flattened` | `query` | `boolean` | no | — |
| `include` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy2` | `sortBy2Schema` | `src/models/sort-by2.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `KnowledgeHubNodesResponse` | `knowledgeHubNodesResponseSchema` | `src/models/knowledge-hub-nodes-response.ts` |
| `KnowledgeBaseKnowledgeHubNodes400Error1` | `knowledgeBaseKnowledgeHubNodes400Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes400-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes401Error1` | `knowledgeBaseKnowledgeHubNodes401Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes401-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes403Error1` | `knowledgeBaseKnowledgeHubNodes403Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes403-error1.ts` |
| `KnowledgeBaseKnowledgeHubNodes500Error1` | `knowledgeBaseKnowledgeHubNodes500Error1Schema` | `src/models/knowledge-base-knowledge-hub-nodes500-error1.ts` |

