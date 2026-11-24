<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `src/resources/discovery.ts` · 4 operations · Request and error types: namespace `Discovery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `odds-relay`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listBookmakers

- **Signature**: `listBookmakers(request?: Discovery.ListBookmakersRequest, options?: RequestOptions): ApiPromise<V2BookmakersResponse1, Discovery.ListBookmakersError>`
- **Wire**: `GET /v2/bookmakers`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2BookmakersResponse1`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Discovery.ListBookmakersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.ListBookmakersRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `query` | `Format` | no | `Format.Envelope` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `V2BookmakersResponse1` | `v2BookmakersResponse1Schema` | `src/models/unions/v2-bookmakers-response1.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

### listEvents

- **Signature**: `listEvents(request: Discovery.ListEventsRequest, options?: RequestOptions): ApiPromise<V2EventsResponse1, Discovery.ListEventsError>`
- **Wire**: `GET /v2/events`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2EventsResponse1`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Discovery.ListEventsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error404"` [404] `Error404` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.ListEventsRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `sport` | `query` | `string` | yes | — |
| `region` | `query` | `string` | no | — |
| `format` | `query` | `Format` | no | `Format.Envelope` |
| `dateFormat` | `query` | `DateFormat` | no | `DateFormat.Iso` |
| `cursor` | `query` | `string` | no | — |
| `eventIds` | `query` | `string` | no | — |
| `commenceTimeFrom` | `query` | `string` | no | — |
| `commenceTimeTo` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DateFormat` | `dateFormatSchema` | `src/models/date-format.ts` |
| `V2EventsResponse1` | `v2EventsResponse1Schema` | `src/models/unions/v2-events-response1.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

### listRegions

- **Signature**: `listRegions(options?: RequestOptions): ApiPromise<Regions, Discovery.ListRegionsError>`
- **Wire**: `GET /v2/regions`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Regions`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Discovery.ListRegionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Regions` | `regionsSchema` | `src/models/regions.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

### listSports

- **Signature**: `listSports(request?: Discovery.ListSportsRequest, options?: RequestOptions): ApiPromise<V2SportsResponse1, Discovery.ListSportsError>`
- **Wire**: `GET /v2/sports`
- **Auth**: any of `bearerAuth`, `apiKeyHeader` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2SportsResponse1`
- **Error**: `OddsRelayError` with `kind: "api"`, an instance of `Discovery.ListSportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"error400OddsRelayDiscoveryApi"` [400] `Error400OddsRelayDiscoveryApi` · `"error401OddsRelayDiscoveryApi"` [401] `Error401OddsRelayDiscoveryApi` · `"error403OddsRelayDiscoveryApi"` [403] `Error403OddsRelayDiscoveryApi` · `"error404"` [404] `Error404` · `"error429OddsRelayDiscoveryApi"` [429] `Error429OddsRelayDiscoveryApi` · `"error500OddsRelayDiscoveryApi"` [500] `Error500OddsRelayDiscoveryApi` · `"error503OddsRelayDiscoveryApi"` [503] `Error503OddsRelayDiscoveryApi` · `"error502"` [502] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.ListSportsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `region` | `query` | `string` | no | — |
| `format` | `query` | `Format` | no | `Format.Envelope` |
| `dateFormat` | `query` | `DateFormat` | no | `DateFormat.Iso` |
| `cursor` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DateFormat` | `dateFormatSchema` | `src/models/date-format.ts` |
| `V2SportsResponse1` | `v2SportsResponse1Schema` | `src/models/unions/v2-sports-response1.ts` |
| `Error400OddsRelayDiscoveryApi` | `error400OddsRelayDiscoveryApiSchema` | `src/models/error400-odds-relay-discovery-api.ts` |
| `Error401OddsRelayDiscoveryApi` | `error401OddsRelayDiscoveryApiSchema` | `src/models/error401-odds-relay-discovery-api.ts` |
| `Error403OddsRelayDiscoveryApi` | `error403OddsRelayDiscoveryApiSchema` | `src/models/error403-odds-relay-discovery-api.ts` |
| `Error404` | `error404Schema` | `src/models/error404.ts` |
| `Error429OddsRelayDiscoveryApi` | `error429OddsRelayDiscoveryApiSchema` | `src/models/error429-odds-relay-discovery-api.ts` |
| `Error500OddsRelayDiscoveryApi` | `error500OddsRelayDiscoveryApiSchema` | `src/models/error500-odds-relay-discovery-api.ts` |
| `Error503OddsRelayDiscoveryApi` | `error503OddsRelayDiscoveryApiSchema` | `src/models/error503-odds-relay-discovery-api.ts` |

