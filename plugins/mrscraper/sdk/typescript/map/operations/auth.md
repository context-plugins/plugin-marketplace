<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.auth2` · Source: `src/resources/auth.ts` · 1 operation · Request types: namespace `Auth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mr-scraper`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSubscriptionAccounts

- **Server**: `defaultScraperServiceGatewayAuthApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getSubscriptionAccounts(request?: Auth.GetSubscriptionAccountsRequest, options?: RequestOptions): ApiPromise<SubscriptionAccountsResponse, ApiError>`
- **Wire**: `GET /subscription-accounts`
- **Auth**: any of `apiKey`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionAccountsResponse`
- **Error**: `MrScraperError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Auth.GetSubscriptionAccountsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xBackofficeToken` | `header` | `x-backoffice-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionAccountsResponse` | `subscriptionAccountsResponseSchema` | `src/models/subscription-accounts-response.ts` |

