<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.bills` · Source: `curlec/apis/bills.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bills.create_bill

- **Route**: `POST /bills`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def create_bill(body: BillsRequest | BillsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Bill`
- **Returns (raw)**: `ApiResult[Bill, CreateBillErrorBody]`
- **Error**: `CreateBillErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillsRequest` | `curlec/models/bills_request.py` |
| `BillsRequestDict` | `curlec/models/bills_request.py` |
| `Bill` | `curlec/models/bill.py` |
| `CreateBillErrorBody` | `curlec/errors/create_bill_error.py` |
| `Error` | `curlec/models/error.py` |

### client.bills.delete_bill

- **Route**: `DELETE /bills/{bill_id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_bill(bill_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`
- **Params**: `bill_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteBillErrorBody]`
- **Error**: `DeleteBillErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteBillErrorBody` | `curlec/errors/delete_bill_error.py` |
| `Error` | `curlec/models/error.py` |

### client.bills.update_bill

- **Route**: `PATCH /bills/{bill_id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def update_bill(bill_id: str, body: Bill | BillDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`, `body`
- **Params**: `bill_id` — path · `body` — JSON body
- **Returns (parsed)**: `Bill`
- **Returns (raw)**: `ApiResult[Bill, UpdateBillErrorBody]`
- **Error**: `UpdateBillErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Bill` | `curlec/models/bill.py` |
| `BillDict` | `curlec/models/bill.py` |
| `UpdateBillErrorBody` | `curlec/errors/update_bill_error.py` |
| `Error` | `curlec/models/error.py` |

