<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contact — operations

Accessor: `client.contact` · Source: `src/resources/contact.ts` · 1 operation · Request and error types: namespace `Contact`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `celestia`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### submitWebsiteContact

- **Server**: `defaultCelestiaWebsiteContactApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `submitWebsiteContact(request: Contact.SubmitWebsiteContactRequest, options?: RequestOptions): ApiPromise<Success, Contact.SubmitWebsiteContactError>`
- **Wire**: `POST /api/contact/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Success`
- **Error**: `CelestiaError` with `kind: "api"`, an instance of `Contact.SubmitWebsiteContactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorCelestiaWebsiteContactApi"` [400] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi2"` [405] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi3"` [408] `ErrorCelestiaWebsiteContactApi` · `"errorCelestiaWebsiteContactApi4"` [500] `ErrorCelestiaWebsiteContactApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Contact.SubmitWebsiteContactRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ContactInput` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContactInput` | `contactInputSchema` | `src/models/contact-input.ts` |
| `Success` | `successSchema` | `src/models/success.ts` |
| `ErrorCelestiaWebsiteContactApi` | `errorCelestiaWebsiteContactApiSchema` | `src/models/error-celestia-website-contact-api.ts` |

