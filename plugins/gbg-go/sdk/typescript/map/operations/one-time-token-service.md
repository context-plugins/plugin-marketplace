<!-- Generated file — do not edit; regenerated with the SDK. -->

# OneTimeTokenService — operations

Accessor: `client.oneTimeTokenService` · Source: `src/resources/one-time-token-service.ts` · 2 operations · Request and error types: namespace `OneTimeTokenService`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `gbg-go-next-gen-flow-captain-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addDevice

- **Signature**: `addDevice(request: OneTimeTokenService.AddDeviceRequest, options?: RequestOptions): ApiPromise<JourneyDeviceStartResponse, OneTimeTokenService.AddDeviceError>`
- **Wire**: `POST /journey/device/start`
- **Auth**: `customerAccess`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyDeviceStartResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `OneTimeTokenService.AddDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OneTimeTokenService.AddDeviceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyDeviceStartRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyDeviceStartRequest` | `journeyDeviceStartRequestSchema` | `src/models/journey-device-start-request.ts` |
| `JourneyDeviceStartResponse` | `journeyDeviceStartResponseSchema` | `src/models/journey-device-start-response.ts` |

### deviceConnect

- **Signature**: `deviceConnect(request: OneTimeTokenService.DeviceConnectRequest, options?: RequestOptions): ApiPromise<JourneyDeviceConnectResponse, OneTimeTokenService.DeviceConnectError>`
- **Wire**: `POST /journey/device/connect`
- **Auth**: `deviceConnect`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `JourneyDeviceConnectResponse`
- **Error**: `GbgGoNextGenFlowCaptainApiError` with `kind: "api"`, an instance of `OneTimeTokenService.DeviceConnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error405"` [405] no body · `"error500"` [500] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OneTimeTokenService.DeviceConnectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `JourneyDeviceConnectRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JourneyDeviceConnectRequest` | `journeyDeviceConnectRequestSchema` | `src/models/journey-device-connect-request.ts` |
| `JourneyDeviceConnectResponse` | `journeyDeviceConnectResponseSchema` | `src/models/journey-device-connect-response.ts` |

