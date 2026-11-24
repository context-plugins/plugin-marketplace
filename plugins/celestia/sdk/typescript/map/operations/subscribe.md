<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscribe — operations

Accessor: `client.subscribe` · Source: `src/resources/subscribe.ts` · 1 operation · Request and error types: namespace `Subscribe`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `celestia`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### subscribeToWebsiteNewsletter

- **Server**: `defaultCelestiaWebsiteContactApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `subscribeToWebsiteNewsletter(request: Subscribe.SubscribeToWebsiteNewsletterRequest, options?: RequestOptions): ApiPromise<Success, Subscribe.SubscribeToWebsiteNewsletterError>`
- **Wire**: `POST /api/subscribe/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Success`
- **Error**: `CelestiaError` with `kind: "api"`, an instance of `Subscribe.SubscribeToWebsiteNewsletterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorCelestiaWebsiteContactApi"` [400] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi2"` [405] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi3"` [408] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi4"` [500] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi5"` [429] `ErrorCelestiaWebsiteContactApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscribe.SubscribeToWebsiteNewsletterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SubscriptionInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionInput` | `subscriptionInputSchema` | `src/models/subscription-input.ts` |
| `Success` | `successSchema` | `src/models/success.ts` |
| `ErrorCelestiaWebsiteContactApi` | `errorCelestiaWebsiteContactApiSchema` | `src/models/error-celestia-website-contact-api.ts` |

