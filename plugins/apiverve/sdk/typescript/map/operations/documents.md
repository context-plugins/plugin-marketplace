<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 3 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### htmltopdf

- **Signature**: `htmltopdf(request: Documents.HtmltopdfRequest, options?: RequestOptions): ApiPromise<V1HtmltopdfResponse, Documents.HtmltopdfError>`
- **Wire**: `POST /v1/htmltopdf`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HtmltopdfResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Documents.HtmltopdfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.HtmltopdfRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1HtmltopdfRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HtmltopdfRequest` | `v1HtmltopdfRequestSchema` | `src/models/v1-htmltopdf-request.ts` |
| `V1HtmltopdfResponse` | `v1HtmltopdfResponseSchema` | `src/models/v1-htmltopdf-response.ts` |

### invoicegenerator

- **Signature**: `invoicegenerator(request: Documents.InvoicegeneratorRequest, options?: RequestOptions): ApiPromise<V1InvoicegeneratorResponse, Documents.InvoicegeneratorError>`
- **Wire**: `POST /v1/invoicegenerator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1InvoicegeneratorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Documents.InvoicegeneratorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.InvoicegeneratorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1InvoicegeneratorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1InvoicegeneratorRequest` | `v1InvoicegeneratorRequestSchema` | `src/models/v1-invoicegenerator-request.ts` |
| `V1InvoicegeneratorResponse` | `v1InvoicegeneratorResponseSchema` | `src/models/v1-invoicegenerator-response.ts` |

### websitetopdf

- **Signature**: `websitetopdf(request: Documents.WebsitetopdfRequest, options?: RequestOptions): ApiPromise<V1WebsitetopdfResponse, Documents.WebsitetopdfError>`
- **Wire**: `POST /v1/websitetopdf`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebsitetopdfResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Documents.WebsitetopdfError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.WebsitetopdfRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebsitetopdfRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebsitetopdfRequest` | `v1WebsitetopdfRequestSchema` | `src/models/v1-websitetopdf-request.ts` |
| `V1WebsitetopdfResponse` | `v1WebsitetopdfResponseSchema` | `src/models/v1-websitetopdf-response.ts` |

