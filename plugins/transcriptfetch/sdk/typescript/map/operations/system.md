<!-- Generated file — do not edit; regenerated with the SDK. -->

# System — operations

Accessor: `client.system` · Source: `src/resources/system.ts` · 4 operations · Request and error types: namespace `System`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `transcript-fetch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV2Health

- **Signature**: `getApiV2Health(options?: RequestOptions): ApiPromise<Health, ApiError>`
- **Wire**: `GET /api/v2/health`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `TranscriptFetchError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |

### getApiV2Me

- **Signature**: `getApiV2Me(options?: RequestOptions): ApiPromise<SuccessEnvelope, System.GetApiV2MeError>`
- **Wire**: `GET /api/v2/me`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `System.GetApiV2MeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [401] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

### healthCheck

- **Signature**: `healthCheck(options?: RequestOptions): ApiPromise<Health, ApiError>`
- **Wire**: `GET /api/v1/health`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `TranscriptFetchError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |

### me

- **Signature**: `me(options?: RequestOptions): ApiPromise<SuccessEnvelope, System.MeError>`
- **Wire**: `GET /api/v1/me`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SuccessEnvelope`
- **Error**: `TranscriptFetchError` with `kind: "api"`, an instance of `System.MeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorEnvelope"` [401] `ErrorEnvelope` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `SuccessEnvelope` | `successEnvelopeSchema` | `src/models/success-envelope.ts` |
| `ErrorEnvelope` | `errorEnvelopeSchema` | `src/models/error-envelope.ts` |

