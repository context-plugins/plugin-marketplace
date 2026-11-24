<!-- Generated file — do not edit; regenerated with the SDK. -->

# TagApi — operations

Accessor: `client.tag_api` · Source: `aws_certificate_manager/apis/tag_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tag_api.add_tags_to_certificate

- **Route**: `POST /#AddTagsToCertificate`
- **Auth**: `sigv4`
- **Signature**: `def add_tags_to_certificate(x_amz_target: XAmzTargetAwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddTagsToCertificateErrorBody]`
- **Error**: `AddTagsToCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCertificateManagerTagApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target_aws_certificate_manager_tag_api.py` |
| `AddTagsToCertificateErrorBody` | `aws_certificate_manager/errors/add_tags_to_certificate_error.py` |

### client.tag_api.list_tags_for_certificate

- **Route**: `POST /#ListTagsForCertificate`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_certificate(x_amz_target: XAmzTarget1AwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForCertificateErrorBody]`
- **Error**: `ListTagsForCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCertificateManagerTagApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target1_aws_certificate_manager_tag_api.py` |
| `ListTagsForCertificateErrorBody` | `aws_certificate_manager/errors/list_tags_for_certificate_error.py` |

### client.tag_api.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTarget2AwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCertificateManagerTagApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target2_aws_certificate_manager_tag_api.py` |
| `ListTagsForResourceErrorBody` | `aws_certificate_manager/errors/list_tags_for_resource_error.py` |

### client.tag_api.remove_tags_from_certificate

- **Route**: `POST /#RemoveTagsFromCertificate`
- **Auth**: `sigv4`
- **Signature**: `def remove_tags_from_certificate(x_amz_target: XAmzTarget3AwsCertificateManagerTagApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RemoveTagsFromCertificateErrorBody]`
- **Error**: `RemoveTagsFromCertificateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCertificateManagerTagApiOrStr` | `aws_certificate_manager/models/enums/x_amz_target3_aws_certificate_manager_tag_api.py` |
| `RemoveTagsFromCertificateErrorBody` | `aws_certificate_manager/errors/remove_tags_from_certificate_error.py` |

