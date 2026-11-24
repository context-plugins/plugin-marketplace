<!-- Generated file — do not edit; regenerated with the SDK. -->

# Proxies — operations

Accessor: `client.proxies` · Source: `src/resources/proxies.ts` · 1 operation · Request types: namespace `Proxies`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1ProxiesUserRequestsBandwidth

- **Signature**: `getApiV1ProxiesUserRequestsBandwidth(request?: Proxies.GetApiV1ProxiesUserRequestsBandwidthRequest, options?: RequestOptions): ApiPromise<GetApiV1ProxiesUserRequestsBandwidthResponse, ApiError>`
- **Wire**: `GET /api/v1/proxies/user/requests-bandwidth`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetApiV1ProxiesUserRequestsBandwidthResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Proxies.GetApiV1ProxiesUserRequestsBandwidthRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `endDate` | `query` | `string` | no |
| `startDate` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetApiV1ProxiesUserRequestsBandwidthResponse` | `getApiV1ProxiesUserRequestsBandwidthResponseSchema` | `src/models/get-api-v1-proxies-user-requests-bandwidth-response.ts` |

