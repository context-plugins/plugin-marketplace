<!-- Generated file — do not edit; regenerated with the SDK. -->

# Contact — operations

Accessor: `client.contact` · Source: `celestia/apis/contact.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contact.submit_website_contact

- **Route**: `POST /api/contact/`
- **Server**: `default_celestia_website_contact_api`
- **Signature**: `def submit_website_contact(body: ContactInput | ContactInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SuccessModel`
- **Returns (raw)**: `ApiResult[SuccessModel, SubmitWebsiteContactErrorBody]`
- **Error**: `SubmitWebsiteContactErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorCelestiaWebsiteContactApi` [400, 405, 408, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactInput` | `celestia/models/contact_input.py` |
| `ContactInputDict` | `celestia/models/contact_input.py` |
| `SuccessModel` | `celestia/models/success_model.py` |
| `SubmitWebsiteContactErrorBody` | `celestia/errors/submit_website_contact_error.py` |
| `ErrorCelestiaWebsiteContactApi` | `celestia/models/error_celestia_website_contact_api.py` |

