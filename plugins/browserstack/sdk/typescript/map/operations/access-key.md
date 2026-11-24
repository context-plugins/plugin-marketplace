<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessKey — operations

Accessor: `client.accessKey` · Source: `src/resources/access-key.ts` · 1 operation · Request types: namespace `AccessKey`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### recycleAccessKey

- **Signature**: `recycleAccessKey(options?: RequestOptions): ApiPromise<AutomateRecycleKeyJsonResponse, ApiError>`
- **Wire**: `PUT /automate/recycle_key.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AutomateRecycleKeyJsonResponse`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomateRecycleKeyJsonResponse` | `automateRecycleKeyJsonResponseSchema` | `src/models/automate-recycle-key-json-response.ts` |

