<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 1 operation · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `postscript`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomEvent

- **Signature**: `createCustomEvent(request?: Events.CreateCustomEventRequest, options?: RequestOptions): ApiPromise<ApiV2EventsResponse, Events.CreateCustomEventError>`
- **Wire**: `POST /api/v2/events`
- **Auth**: `sec0`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2EventsResponse`
- **Error**: `PostscriptError` with `kind: "api"`, an instance of `Events.CreateCustomEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] `Record<string, unknown>` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.CreateCustomEventRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPostscriptShopToken` | `header` | `X-Postscript-Shop-Token` | `string` | no |
| `body` | `body` | — | `ApiV2EventsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2EventsRequest` | `apiV2EventsRequestSchema` | `src/models/api-v2-events-request.ts` |
| `ApiV2EventsResponse` | `apiV2EventsResponseSchema` | `src/models/api-v2-events-response.ts` |

