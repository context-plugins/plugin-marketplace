<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `src/resources/discovery.ts` · 1 operation · Request and error types: namespace `Discovery`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `leadspace`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### discoverCompanyContacts

- **Signature**: `discoverCompanyContacts(request: Discovery.DiscoverCompanyContactsRequest, options?: RequestOptions): ApiPromise<DiscoveryAccepted, Discovery.DiscoverCompanyContactsError>`
- **Wire**: `POST /v2/expansion/company`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DiscoveryAccepted`
- **Error**: `LeadspaceError` with `kind: "api"`, an instance of `Discovery.DiscoverCompanyContactsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error401"` [401] no body · `"error403"` [403] no body · `"error2"` [427] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Discovery.DiscoverCompanyContactsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DiscoveryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiscoveryRequest` | `discoveryRequestSchema` | `src/models/discovery-request.ts` |
| `DiscoveryAccepted` | `discoveryAcceptedSchema` | `src/models/discovery-accepted.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

