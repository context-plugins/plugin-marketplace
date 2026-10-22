<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServerlessModel — operations

Accessor: `client.serverlessModel` · Source: `src/resources/serverless-model.ts` · 2 operations · Request types: namespace `ServerlessModel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `friendli-suite-api-reference`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### serverlessModels

- **Signature**: `serverlessModels(options?: RequestOptions): ApiPromise<ServerlessModelListSuccess, ApiError>`
- **Wire**: `GET /serverless/v1/models`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServerlessModelListSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ServerlessModelListSuccess` | `serverlessModelListSuccessSchema` | `src/models/serverless-model-list-success.ts` |

### serverlessOpenrouterModels

- **Signature**: `serverlessOpenrouterModels(options?: RequestOptions): ApiPromise<OpenRouterModelListSuccess, ApiError>`
- **Wire**: `GET /serverless/v1/openrouter/models`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OpenRouterModelListSuccess`
- **Error**: `FriendliSuiteApiReferenceError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `OpenRouterModelListSuccess` | `openRouterModelListSuccessSchema` | `src/models/open-router-model-list-success.ts` |

