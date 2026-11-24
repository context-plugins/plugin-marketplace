<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 1 operation · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `appstore-spy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEventsPlayLiveopsGet

- **Signature**: `getEventsPlayLiveopsGet(request: Events.GetEventsPlayLiveopsGetRequest, options?: RequestOptions): ApiPromise<Event[], Events.GetEventsPlayLiveopsGetError>`
- **Wire**: `GET /play/liveops`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Event[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `Events.GetEventsPlayLiveopsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playLiveops401Error1"` [401] `PlayLiveops401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetEventsPlayLiveopsGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `app` | `query` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | `AppCountries.Us` |
| `freshness` | `query` | `CacheTime` | no | `CacheTime._7D` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `CacheTime` | `cacheTimeSchema` | `src/models/cache-time.ts` |
| `Event` | `eventSchema` | `src/models/event.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayLiveops401Error1` | `playLiveops401Error1Schema` | `src/models/play-liveops401-error1.ts` |

