<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookEventsApi — operations

Accessor: `client.webhookEventsApi` · Source: `src/resources/webhook-events-api.ts` · 1 operation · Request and error types: namespace `WebhookEventsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWebhookEvent

- **Signature**: `getWebhookEvent(request: WebhookEventsApi.GetWebhookEventRequest, options?: RequestOptions): ApiPromise<undefined, WebhookEventsApi.GetWebhookEventError>`
- **Wire**: `GET /v2/events/{webhookEventId}`
- **Auth**: any of `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `WebhookEventsApi.GetWebhookEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WebhookEventsApi.GetWebhookEventRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookEventId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

