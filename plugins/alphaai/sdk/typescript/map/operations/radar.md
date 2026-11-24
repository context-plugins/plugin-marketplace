<!-- Generated file — do not edit; regenerated with the SDK. -->

# Radar — operations

Accessor: `client.radar` · Source: `src/resources/radar.ts` · 1 operation · Request and error types: namespace `Radar`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `alpha-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getRadarSnapshot

- **Signature**: `getRadarSnapshot(request?: Radar.GetRadarSnapshotRequest, options?: RequestOptions): ApiPromise<SnapshotPreviewDto, Radar.GetRadarSnapshotError>`
- **Wire**: `GET /api/signals/snapshot/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SnapshotPreviewDto`
- **Error**: `AlphaAiError` with `kind: "api"`, an instance of `Radar.GetRadarSnapshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"error503"` [503] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Radar.GetRadarSnapshotRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `window` | `query` | — | `Window` | no | `Window._24H` |
| `scope` | `query` | — | `Scope` | no | `Scope.Market` |
| `market` | `query` | — | `Market` | no | `Market.All` |
| `ticker` | `query` | — | `string` | no | — |
| `tickers` | `query` | — | `string` | no | — |
| `search` | `query` | — | `string` | no | — |
| `sort` | `query` | — | `SortAlphAiRestRadarApi` | no | `SortAlphAiRestRadarApi.Score` |
| `order` | `query` | — | `Order` | no | `Order.Desc` |
| `sentiment` | `query` | — | `SentimentAlphAiRestRadarApi` | no | `SentimentAlphAiRestRadarApi.All` |
| `minZ` | `query` | `min_z` | `MinZ` | no | — |
| `limit` | `query` | — | `number` | no | `50` |
| `offset` | `query` | — | `number` | no | `0` |
| `cursor` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Window` | `windowSchema` | `src/models/window.ts` |
| `Scope` | `scopeSchema` | `src/models/scope.ts` |
| `Market` | `marketSchema` | `src/models/market.ts` |
| `SortAlphAiRestRadarApi` | `sortAlphAiRestRadarApiSchema` | `src/models/sort-alph-ai-rest-radar-api.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `SentimentAlphAiRestRadarApi` | `sentimentAlphAiRestRadarApiSchema` | `src/models/sentiment-alph-ai-rest-radar-api.ts` |
| `MinZ` | `minZSchema` | `src/models/unions/min-z.ts` |
| `SnapshotPreviewDto` | `snapshotPreviewDtoSchema` | `src/models/snapshot-preview-dto.ts` |

