<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChangeStream — operations

Accessor: `client.changeStream` · Source: `src/resources/change-stream.ts` · 1 operation · Request and error types: namespace `ChangeStream`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apibara`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listVehicleChanges

- **Signature**: `listVehicleChanges(request?: ChangeStream.ListVehicleChangesRequest, options?: RequestOptions): ApiPromise<VehicleChangesResponse, ChangeStream.ListVehicleChangesError>`
- **Wire**: `GET /changes`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VehicleChangesResponse`
- **Error**: `ApibaraError` with `kind: "api"`, an instance of `ChangeStream.ListVehicleChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"changeCursorExpiredResponse"` [410] `ChangeCursorExpiredResponse` · `"apiErrorModel"` [401] `ApiErrorModel` · `"apiErrorModel2"` [422] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChangeStream.ListVehicleChangesRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `after` | `query` | — | `number` | no | `0` |
| `limit` | `query` | — | `number` | no | `100` |
| `platform` | `query` | — | `Platform` | no | — |
| `eventType` | `query` | `event_type` | `EventType` | no | — |
| `terminal` | `query` | — | `boolean` | no | — |
| `lotNumber` | `query` | `lot_number` | `string` | no | — |
| `vin` | `query` | — | `string` | no | — |
| `includeRecord` | `query` | `include_record` | `IncludeRecord1` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Platform` | `platformSchema` | `src/models/platform.ts` |
| `EventType` | `eventTypeSchema` | `src/models/event-type.ts` |
| `IncludeRecord1` | `includeRecord1Schema` | `src/models/unions/include-record1.ts` |
| `VehicleChangesResponse` | `vehicleChangesResponseSchema` | `src/models/vehicle-changes-response.ts` |
| `ChangeCursorExpiredResponse` | `changeCursorExpiredResponseSchema` | `src/models/change-cursor-expired-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

