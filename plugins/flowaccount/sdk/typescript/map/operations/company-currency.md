<!-- Generated file — do not edit; regenerated with the SDK. -->

# CompanyCurrency — operations

Accessor: `client.companyCurrency` · Source: `src/resources/company-currency.ts` · 2 operations · Request types: namespace `CompanyCurrency`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### companyCurrencyGetCompanyCurrencies

- **Signature**: `companyCurrencyGetCompanyCurrencies(request: CompanyCurrency.CompanyCurrencyGetCompanyCurrenciesRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/company-currency/currency`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CompanyCurrency.CompanyCurrencyGetCompanyCurrenciesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

### companyCurrencyGetList

- **Signature**: `companyCurrencyGetList(request: CompanyCurrency.CompanyCurrencyGetListRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/company-currency`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CompanyCurrency.CompanyCurrencyGetListRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

