<!-- Generated file — do not edit; regenerated with the SDK. -->

# CapabilitiesApi — operations

Accessor: `client.capabilitiesApi` · Source: `src/resources/capabilities-api.ts` · 1 operation · Request and error types: namespace `CapabilitiesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listCapabilities

- **Signature**: `listCapabilities(request: CapabilitiesApi.ListCapabilitiesRequest, options?: RequestOptions): ApiPromise<undefined, CapabilitiesApi.ListCapabilitiesError>`
- **Wire**: `GET /v2/capabilities`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CapabilitiesApi.ListCapabilitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CapabilitiesApi.ListCapabilitiesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

