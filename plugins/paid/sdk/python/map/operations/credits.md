<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credits — operations

Accessor: `client.credits` · Source: `paid/apis/credits.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.credits.create_credit_currency

- **Route**: `POST /credits/currencies`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_credit_currency(authorization: str, *, body: CreateCreditCurrencyRequest | CreateCreditCurrencyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CreditCurrency`
- **Returns (raw)**: `ApiResult[CreditCurrency, CreateCreditCurrencyErrorBody]`
- **Error**: `CreateCreditCurrencyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCreditCurrencyRequest` | `paid/models/create_credit_currency_request.py` |
| `CreateCreditCurrencyRequestDict` | `paid/models/create_credit_currency_request.py` |
| `CreditCurrency` | `paid/models/credit_currency.py` |
| `CreateCreditCurrencyErrorBody` | `paid/errors/create_credit_currency_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.credits.list_credit_currencies

- **Route**: `GET /credits/currencies`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_credit_currencies(authorization: str, *, status: CreditsCurrenciesGetParametersStatusOrStr | None = CreditsCurrenciesGetParametersStatus.ALL, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `status` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `CreditCurrencyListResponse`
- **Returns (raw)**: `ApiResult[CreditCurrencyListResponse, ListCreditCurrenciesErrorBody]`
- **Error**: `ListCreditCurrenciesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreditsCurrenciesGetParametersStatusOrStr` | `paid/models/enums/credits_currencies_get_parameters_status.py` |
| `CreditCurrencyListResponse` | `paid/models/credit_currency_list_response.py` |
| `ListCreditCurrenciesErrorBody` | `paid/errors/list_credit_currencies_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.credits.update_credit_currency_by_id

- **Route**: `PUT /credits/currencies/{id}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_credit_currency_by_id(id_: str, authorization: str, *, body: UpdateCreditCurrencyRequest | UpdateCreditCurrencyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `authorization`
- **Params**: `id_` — path `id` · `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `CreditCurrency`
- **Returns (raw)**: `ApiResult[CreditCurrency, UpdateCreditCurrencyByIdErrorBody]`
- **Error**: `UpdateCreditCurrencyByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCreditCurrencyRequest` | `paid/models/update_credit_currency_request.py` |
| `UpdateCreditCurrencyRequestDict` | `paid/models/update_credit_currency_request.py` |
| `CreditCurrency` | `paid/models/credit_currency.py` |
| `UpdateCreditCurrencyByIdErrorBody` | `paid/errors/update_credit_currency_by_id_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

