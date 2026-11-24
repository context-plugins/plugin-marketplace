<!-- Generated file — do not edit; regenerated with the SDK. -->

# AcmeAccountApi — operations

Accessor: `client.acme_account_api` · Source: `aws_certificate_manager/apis/acme_account_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.acme_account_api.describe_acme_account

- **Route**: `POST /#DescribeAcmeAccount`
- **Auth**: `sigv4`
- **Signature**: `def describe_acme_account(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeAcmeAccountErrorBody]`
- **Error**: `DescribeAcmeAccountErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `aws_certificate_manager/models/enums/x_amz_target.py` |
| `DescribeAcmeAccountErrorBody` | `aws_certificate_manager/errors/describe_acme_account_error.py` |

### client.acme_account_api.list_acme_accounts

- **Route**: `POST /#ListAcmeAccounts`
- **Auth**: `sigv4`
- **Signature**: `def list_acme_accounts(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListAcmeAccountsErrorBody]`
- **Error**: `ListAcmeAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `aws_certificate_manager/models/enums/x_amz_target1.py` |
| `ListAcmeAccountsErrorBody` | `aws_certificate_manager/errors/list_acme_accounts_error.py` |

### client.acme_account_api.revoke_acme_account

- **Route**: `POST /#RevokeAcmeAccount`
- **Auth**: `sigv4`
- **Signature**: `def revoke_acme_account(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RevokeAcmeAccountErrorBody]`
- **Error**: `RevokeAcmeAccountErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `aws_certificate_manager/models/enums/x_amz_target2.py` |
| `RevokeAcmeAccountErrorBody` | `aws_certificate_manager/errors/revoke_acme_account_error.py` |

