<!-- Generated file — do not edit; regenerated with the SDK. -->

# BillApprovals — operations

Accessor: `client.bill_approvals` · Source: `divvy/apis/bill_approvals.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bill_approvals.bill_approve_deny_actions

- **Route**: `POST /v3/bill-approvals/actions`
- **Server**: `default`
- **Signature**: `def bill_approve_deny_actions(body: list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `StatusDto`
- **Returns (raw)**: `ApiResult[StatusDto, BillApproveDenyActionsErrorBody]`
- **Error**: `BillApproveDenyActionsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillApproveDenyActionRequestDto` | `divvy/models/bill_approve_deny_action_request_dto.py` |
| `BillApproveDenyActionRequestDtoDict` | `divvy/models/bill_approve_deny_action_request_dto.py` |
| `StatusDto` | `divvy/models/status_dto.py` |
| `BillApproveDenyActionsErrorBody` | `divvy/errors/bill_approve_deny_actions_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bill_approvals.create_bill_approval_policy

- **Route**: `POST /v3/bill-approvals/policies`
- **Server**: `default`
- **Signature**: `def create_bill_approval_policy(body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BillApprovalPolicyResponseDto`
- **Returns (raw)**: `ApiResult[BillApprovalPolicyResponseDto, CreateBillApprovalPolicyErrorBody]`
- **Error**: `CreateBillApprovalPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillApprovalPolicyRequestDto` | `divvy/models/bill_approval_policy_request_dto.py` |
| `BillApprovalPolicyRequestDtoDict` | `divvy/models/bill_approval_policy_request_dto.py` |
| `BillApprovalPolicyResponseDto` | `divvy/models/bill_approval_policy_response_dto.py` |
| `CreateBillApprovalPolicyErrorBody` | `divvy/errors/create_bill_approval_policy_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bill_approvals.delete_policy

- **Route**: `DELETE /v3/bill-approvals/policies/{policyId}`
- **Server**: `default`
- **Signature**: `def delete_policy(policy_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_id`
- **Params**: `policy_id` — path `policyId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `StatusDto`
- **Returns (raw)**: `ApiResult[StatusDto, DeletePolicyErrorBody]`
- **Error**: `DeletePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusDto` | `divvy/models/status_dto.py` |
| `DeletePolicyErrorBody` | `divvy/errors/delete_policy_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bill_approvals.list_bill_approval_policies

- **Route**: `GET /v3/bill-approvals/policies`
- **Server**: `default`
- **Signature**: `def list_bill_approval_policies(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `list[BillApprovalPolicyResponseDto]`
- **Returns (raw)**: `ApiResult[list[BillApprovalPolicyResponseDto], ListBillApprovalPoliciesErrorBody]`
- **Error**: `ListBillApprovalPoliciesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillApprovalPolicyResponseDto` | `divvy/models/bill_approval_policy_response_dto.py` |
| `ListBillApprovalPoliciesErrorBody` | `divvy/errors/list_bill_approval_policies_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bill_approvals.list_bill_user_approvals

- **Route**: `GET /v3/bill-approvals/pending-user-approvals`
- **Server**: `default`
- **Signature**: `def list_bill_user_approvals(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListBillUserApprovalsResponseDto`
- **Returns (raw)**: `ApiResult[ListBillUserApprovalsResponseDto, ListBillUserApprovalsErrorBody]`
- **Error**: `ListBillUserApprovalsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListBillUserApprovalsResponseDto` | `divvy/models/list_bill_user_approvals_response_dto.py` |
| `ListBillUserApprovalsErrorBody` | `divvy/errors/list_bill_user_approvals_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.bill_approvals.update_bill_approval_policy

- **Route**: `PUT /v3/bill-approvals/policies/{policyId}`
- **Server**: `default`
- **Signature**: `def update_bill_approval_policy(policy_id: str, body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `policy_id`, `body`
- **Params**: `policy_id` — path `policyId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BillApprovalPolicyResponseDto`
- **Returns (raw)**: `ApiResult[BillApprovalPolicyResponseDto, UpdateBillApprovalPolicyErrorBody]`
- **Error**: `UpdateBillApprovalPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BillApprovalPolicyRequestDto` | `divvy/models/bill_approval_policy_request_dto.py` |
| `BillApprovalPolicyRequestDtoDict` | `divvy/models/bill_approval_policy_request_dto.py` |
| `BillApprovalPolicyResponseDto` | `divvy/models/bill_approval_policy_response_dto.py` |
| `UpdateBillApprovalPolicyErrorBody` | `divvy/errors/update_bill_approval_policy_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

