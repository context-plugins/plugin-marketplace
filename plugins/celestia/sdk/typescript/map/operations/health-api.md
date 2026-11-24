<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.healthApi` · Source: `src/resources/health-api.ts` · 2 operations · Request and error types: namespace `HealthApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `celestia`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWebsiteHealth

- **Server**: `defaultCelestiaWebsiteContactApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getWebsiteHealth(options?: RequestOptions): ApiPromise<Health, HealthApi.GetWebsiteHealthError>`
- **Wire**: `GET /api/health/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Health`
- **Error**: `CelestiaError` with `kind: "api"`, an instance of `HealthApi.GetWebsiteHealthError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorCelestiaWebsiteContactApi"` [405] `ErrorCelestiaWebsiteContactApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Health` | `healthSchema` | `src/models/health.ts` |
| `ErrorCelestiaWebsiteContactApi` | `errorCelestiaWebsiteContactApiSchema` | `src/models/error-celestia-website-contact-api.ts` |

### headWebsiteHealth

- **Server**: `defaultCelestiaWebsiteContactApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `headWebsiteHealth(options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `HEAD /api/health/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `CelestiaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

