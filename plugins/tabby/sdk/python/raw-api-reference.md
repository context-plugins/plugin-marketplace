# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [TabbyClient](tabby/client.py)

## Checkout

> Source: [Checkout](tabby/apis/checkout.py)

<details>
<summary><code>def get_checkout_session(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutSession, GetCheckoutSessionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this API to retrieve the token (only if tokens used in your integration )

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checkout.with_raw_response.get_checkout_session(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutSession
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutSessionErrorBody
```

**Async**

```python
result = await async_client.checkout.with_raw_response.get_checkout_session(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutSession
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the session. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[CheckoutSession](tabby/models/checkout_session.py), [GetCheckoutSessionErrorBody](tabby/errors/get_checkout_session_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutSession](tabby/models/checkout_session.py)</code> -- Success. Checkout session object is returned.

**On `Failure`**: `error` is <code>[GetCheckoutSessionErrorBody](tabby/errors/get_checkout_session_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400](tabby/models/error400.py)</code> |
| 401 | <code>[Error401KeyDoesntExist](tabby/models/error401_key_doesnt_exist.py)</code> |
| 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_checkout_session(body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutSession, PostCheckoutSessionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status), ids of Payment and Session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checkout.with_raw_response.post_checkout_session(
    ApiV2CheckoutRequest(
        payment=CheckoutCreation(
            amount="some example string",
            currency=Currency.AED,
            buyer=Buyer(name="some example string", email="user@example.com", phone="some example string"),
            shipping_address=ShippingAddress(
                city="some example string", address="some example string", zip="some example string"
            ),
            order=Order(reference_id="some example string", items=[OrderItem()]),
            buyer_history=BuyerHistory(
                registered_since=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc), loyalty_level=1.5
            ),
            order_history=[
                CheckoutCreationOrderHistory(
                    purchased_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
                    amount="some example string",
                    status=Status1.NEW,
                    buyer=Buyer(),
                    shipping_address=ShippingAddress(),
                ),
            ],
        ),
        lang=LanguageCode.AR,
        merchant_code="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutSession
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostCheckoutSessionErrorBody
```

**Async**

```python
result = await async_client.checkout.with_raw_response.post_checkout_session(
    ApiV2CheckoutRequest(
        payment=CheckoutCreation(
            amount="some example string",
            currency=Currency.AED,
            buyer=Buyer(name="some example string", email="user@example.com", phone="some example string"),
            shipping_address=ShippingAddress(
                city="some example string", address="some example string", zip="some example string"
            ),
            order=Order(reference_id="some example string", items=[OrderItem()]),
            buyer_history=BuyerHistory(
                registered_since=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc), loyalty_level=1.5
            ),
            order_history=[
                CheckoutCreationOrderHistory(
                    purchased_at=datetime(2024, 1, 15, 9, 30, 0, tzinfo=timezone.utc),
                    amount="some example string",
                    status=Status1.NEW,
                    buyer=Buyer(),
                    shipping_address=ShippingAddress(),
                ),
            ],
        ),
        lang=LanguageCode.AR,
        merchant_code="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutSession
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostCheckoutSessionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV2CheckoutRequest](tabby/models/api_v2_checkout_request.py) \| [ApiV2CheckoutRequestDict](tabby/models/api_v2_checkout_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[CheckoutSession](tabby/models/checkout_session.py), [PostCheckoutSessionErrorBody](tabby/errors/post_checkout_session_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutSession](tabby/models/checkout_session.py)</code> -- Success. Checkout session object is returned.

**On `Failure`**: `error` is <code>[PostCheckoutSessionErrorBody](tabby/errors/post_checkout_session_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400CheckoutPost](tabby/models/error400_checkout_post.py)</code> |
| 401 | <code>[Error401MerchantNull](tabby/models/error401_merchant_null.py)</code> |
| 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DisputesApi

> Source: [DisputesApi](tabby/apis/disputes_api.py)

<details>
<summary><code>def get_dispute(dispute_id: UUID, dispute_id_template: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Dispute1, GetDisputeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about dispute.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes_api.with_raw_response.get_dispute(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDisputeErrorBody
```

**Async**

```python
result = await async_client.disputes_api.with_raw_response.get_dispute(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Dispute1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDisputeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dispute_id</code> | <code>UUID</code> | ID of the dispute. |
| <code>dispute_id_template</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[Dispute1](tabby/models/dispute1.py), [GetDisputeErrorBody](tabby/errors/get_dispute_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Dispute1](tabby/models/dispute1.py)</code> -- Success. Returns dispute info.

**On `Failure`**: `error` is <code>[GetDisputeErrorBody](tabby/errors/get_dispute_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error404DisputeNotFound](tabby/models/error404_dispute_not_found.py)</code> |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_disputes(*, statuses: StatusesOrStr | None = None, created_at_gte: str | None = None, created_at_lte: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Disputes, GetDisputesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of 100 recently created disputes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes_api.with_raw_response.get_disputes(
    created_at_gte="created_at_gte=2022-12-01T00:00:00Z", created_at_lte="created_at_lte=2022-12-01T00:00:00Z"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Disputes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDisputesErrorBody
```

**Async**

```python
result = await async_client.disputes_api.with_raw_response.get_disputes(
    created_at_gte="created_at_gte=2022-12-01T00:00:00Z", created_at_lte="created_at_lte=2022-12-01T00:00:00Z"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Disputes
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDisputesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>statuses</code> | <code>[StatusesOrStr](tabby/models/enums/statuses.py) \| None</code> | Dispute status. If not set, then all statuses will be in result.<br>**Default**: <code>None</code> |
| <code>created_at_gte</code> | <code>str \| None</code> | Filter disputes created after or at the specified date and time.<br>**Default**: <code>None</code> |
| <code>created_at_lte</code> | <code>str \| None</code> | Filter disputes created before or at the specified date and time.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | To load the next page of disputed items provide page token. This code can be obtained from the `next_page_token` variable in the response of dispute list. If `next_page_token` is empty in response, it means last page of disputes has been reached.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[Disputes](tabby/models/disputes.py), [GetDisputesErrorBody](tabby/errors/get_disputes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Disputes](tabby/models/disputes.py)</code> -- Success. Returns a list of disputes.

**On `Failure`**: `error` is <code>[GetDisputesErrorBody](tabby/errors/get_disputes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error404DisputeNotFound](tabby/models/error404_dispute_not_found.py)</code> |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_dispute_provide_evidence(dispute_id: UUID, dispute_id_template: str, body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Evidence, PostDisputeProvideEvidenceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof in response to an evidence request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes_api.with_raw_response.post_dispute_provide_evidence(
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    ApiV1DisputesProvideEvidenceRequest(content="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Evidence
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostDisputeProvideEvidenceErrorBody
```

**Async**

```python
result = await async_client.disputes_api.with_raw_response.post_dispute_provide_evidence(
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    ApiV1DisputesProvideEvidenceRequest(content="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Evidence
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostDisputeProvideEvidenceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dispute_id</code> | <code>UUID</code> | ID of the dispute. |
| <code>dispute_id_template</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ApiV1DisputesProvideEvidenceRequest](tabby/models/api_v1_disputes_provide_evidence_request.py) \| [ApiV1DisputesProvideEvidenceRequestDict](tabby/models/api_v1_disputes_provide_evidence_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[Evidence](tabby/models/evidence.py), [PostDisputeProvideEvidenceErrorBody](tabby/errors/post_dispute_provide_evidence_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Evidence](tabby/models/evidence.py)</code> -- Success. Evidence was submitted for the dispute.

**On `Failure`**: `error` is <code>[PostDisputeProvideEvidenceErrorBody](tabby/errors/post_dispute_provide_evidence_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[Error404DisputeNotFound](tabby/models/error404_dispute_not_found.py)</code> |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 409 | <code>[Error400](tabby/models/error400.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_disputes_approve(body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DisputesApprove, PostDisputesApproveErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve disputes (refund money to the customer). Only 20 disputes can be approved within a single request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes_api.with_raw_response.post_disputes_approve(
    ApiV1DisputesApproveRequest(dispute_ids=[UUID("00000000-0000-0000-0000-000000000000")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputesApprove
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostDisputesApproveErrorBody
```

**Async**

```python
result = await async_client.disputes_api.with_raw_response.post_disputes_approve(
    ApiV1DisputesApproveRequest(dispute_ids=[UUID("00000000-0000-0000-0000-000000000000")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputesApprove
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostDisputesApproveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DisputesApproveRequest](tabby/models/api_v1_disputes_approve_request.py) \| [ApiV1DisputesApproveRequestDict](tabby/models/api_v1_disputes_approve_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[DisputesApprove](tabby/models/disputes_approve.py), [PostDisputesApproveErrorBody](tabby/errors/post_disputes_approve_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DisputesApprove](tabby/models/disputes_approve.py)</code> -- Success. Disputes were approved.

**On `Failure`**: `error` is <code>[PostDisputesApproveErrorBody](tabby/errors/post_disputes_approve_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error404DisputeNotFound](tabby/models/error404_dispute_not_found.py)</code> |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_disputes_challenge(body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DisputesChallenge, PostDisputesChallengeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be challenged within a single request. Only disputes with status 'new' might be challenged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes_api.with_raw_response.post_disputes_challenge(
    ApiV1DisputesChallengeRequest(
        dispute_id="some example string", description="some example string", reason=Reason.MERCHANT_REASON_OTHER
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputesChallenge
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostDisputesChallengeErrorBody
```

**Async**

```python
result = await async_client.disputes_api.with_raw_response.post_disputes_challenge(
    ApiV1DisputesChallengeRequest(
        dispute_id="some example string", description="some example string", reason=Reason.MERCHANT_REASON_OTHER
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputesChallenge
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostDisputesChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApiV1DisputesChallengeRequest](tabby/models/api_v1_disputes_challenge_request.py) \| [ApiV1DisputesChallengeRequestDict](tabby/models/api_v1_disputes_challenge_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[DisputesChallenge](tabby/models/disputes_challenge.py), [PostDisputesChallengeErrorBody](tabby/errors/post_disputes_challenge_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DisputesChallenge](tabby/models/disputes_challenge.py)</code> -- Success. Disputes were challenged.

**On `Failure`**: `error` is <code>[PostDisputesChallengeErrorBody](tabby/errors/post_disputes_challenge_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error404DisputeNotFound](tabby/models/error404_dispute_not_found.py)</code> |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_upload_attachment(attachment: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DisputeAttachmentUpload, PostUploadAttachmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.disputes_api.with_raw_response.post_upload_attachment(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputeAttachmentUpload
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostUploadAttachmentErrorBody
```

**Async**

```python
result = await async_client.disputes_api.with_raw_response.post_upload_attachment(Path("path/to/file.bin"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DisputeAttachmentUpload
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostUploadAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachment</code> | <code>FileInput</code> | Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files larger than 5 MB are rejected. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[DisputeAttachmentUpload](tabby/models/dispute_attachment_upload.py), [PostUploadAttachmentErrorBody](tabby/errors/post_upload_attachment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DisputeAttachmentUpload](tabby/models/dispute_attachment_upload.py)</code> -- Success. Attachment was uploaded.

**On `Failure`**: `error` is <code>[PostUploadAttachmentErrorBody](tabby/errors/post_upload_attachment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error404DisputeNotFound](tabby/models/error404_dispute_not_found.py)</code> |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentsApi

> Source: [PaymentsApi](tabby/apis/payments_api.py)

<details>
<summary><code>def close_payment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentClose, ClosePaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closed is the final status of the payment. Your payment is going to be closed automatically if you capture the full amount of the payment. If an order is fully cancelled, please close the payment without capturing it - the customer will be refunded for all paid amount. If only a part of the order is delivered, please capture this part and close the payment – it will mean that another part of the order is not going to be delivered to the customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments_api.with_raw_response.close_payment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentClose
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClosePaymentErrorBody
```

**Async**

```python
result = await async_client.payments_api.with_raw_response.close_payment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentClose
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ClosePaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the payment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[PaymentClose](tabby/models/payment_close.py), [ClosePaymentErrorBody](tabby/errors/close_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentClose](tabby/models/payment_close.py)</code> -- Success. Payment object is returned.

**On `Failure`**: `error` is <code>[ClosePaymentErrorBody](tabby/errors/close_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400PaymentsClose](tabby/models/error400_payments_close.py)</code> |
| 401, 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404 | <code>[Error404NoSuchPayment](tabby/models/error404_no_such_payment.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentResponse, GetPaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified payment. Returns the entire payment object, including the payment Status, Captures and Refunds objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments_api.with_raw_response.get_payment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPaymentErrorBody
```

**Async**

```python
result = await async_client.payments_api.with_raw_response.get_payment(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the payment. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[PaymentResponse](tabby/models/payment_response.py), [GetPaymentErrorBody](tabby/errors/get_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentResponse](tabby/models/payment_response.py)</code> -- Success. Payment object is returned.

**On `Failure`**: `error` is <code>[GetPaymentErrorBody](tabby/errors/get_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400PaymentsGet](tabby/models/error400_payments_get.py)</code> |
| 401 | <code>[Error401MissingBearer](tabby/models/error401_missing_bearer.py)</code> |
| 404 | <code>[Error404NoSuchPayment](tabby/models/error404_no_such_payment.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payments(*, created_at_gte: Date | None = None, created_at_lte: RFC3339DateTime | None = None, limit: int | None = None, status: Status1TabbyApiReferencePaymentsApiOrStr | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Payments, GetPaymentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of success payments (`AUTHORIZED` or `CLOSED`) you’ve previously created. The payments are returned in sorted order, with the most recent payments appearing first. Each entry in the array is a separate payments object, including the status, any captures and any refunds. If no more payments are available, the resulting array will be empty. Payments might be filtered by creation date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments_api.with_raw_response.get_payments(status=Status1TabbyApiReferencePaymentsApi.AUTHORIZED)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payments
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPaymentsErrorBody
```

**Async**

```python
result = await async_client.payments_api.with_raw_response.get_payments(
    status=Status1TabbyApiReferencePaymentsApi.AUTHORIZED
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Payments
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>created_at_gte</code> | <code>Date \| None</code> | This is a filter for the payment creation date, use it to get the list of payments where creation date >= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.<br>**Default**: <code>None</code> |
| <code>created_at_lte</code> | <code>RFC3339DateTime \| None</code> | This is a filter for the payment creation date, use it to get the list of payments where creation date <= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 -> 2020-01-23T00:00:00Z.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Limits the number of returned results.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1TabbyApiReferencePaymentsApiOrStr](tabby/models/enums/status1_tabby_api_reference_payments_api.py) \| None</code> | Filter the orders by specific statuses:<br>  - `authorized`, `closed` and `rejected` belong to the API payment statuses;<br>  - `new`, `captured`, `refunded` and `cancelled`` refer to the statuses on Tabby Merchant Dashboard;<br>  - If absent, all `AUTHORIZED` and `CLOSED` payments are returned.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | The number of records into a dataset that you want to start, indexed at 0.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[Payments](tabby/models/payments.py), [GetPaymentsErrorBody](tabby/errors/get_payments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Payments](tabby/models/payments.py)</code> -- Success. Returns a list of payments.

**On `Failure`**: `error` is <code>[GetPaymentsErrorBody](tabby/errors/get_payments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400Failed](tabby/models/error400_failed.py)</code> |
| 401 | <code>[Error403](tabby/models/error403.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_payment_capture(id_: UUID, body: CaptureRequest | CaptureRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentCaptureResponse, PostPaymentCaptureErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a Capture requests for Authorized payments only. If you capture the full payment amount, the payment will be automatically closed with full capture. If you capture partial amount, the payment will remain Authorized until the rest of the amount is captured or Close request sent.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments_api.with_raw_response.post_payment_capture(
    UUID("00000000-0000-0000-0000-000000000000"),
    CaptureRequest(amount="some example string", reference_id="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentCaptureResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostPaymentCaptureErrorBody
```

**Async**

```python
result = await async_client.payments_api.with_raw_response.post_payment_capture(
    UUID("00000000-0000-0000-0000-000000000000"),
    CaptureRequest(amount="some example string", reference_id="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentCaptureResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostPaymentCaptureErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the payment. |
| <code>body</code> | <code>[CaptureRequest](tabby/models/capture_request.py) \| [CaptureRequestDict](tabby/models/capture_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[PaymentCaptureResponse](tabby/models/payment_capture_response.py), [PostPaymentCaptureErrorBody](tabby/errors/post_payment_capture_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentCaptureResponse](tabby/models/payment_capture_response.py)</code> -- Success. Payment object is returned.

**On `Failure`**: `error` is <code>[PostPaymentCaptureErrorBody](tabby/errors/post_payment_capture_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400PaymentsCapture](tabby/models/error400_payments_capture.py)</code> |
| 401, 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404 | <code>[Error404NoSuchPayment](tabby/models/error404_no_such_payment.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_payment_refund(id_: UUID, body: RefundRequest | RefundRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentRefundResponse, PostPaymentRefundErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a full or partial refund amount request. You can only refund the payment that has Closed status. By default refunds reflect instantly, which means Tabby initiates a refund through payment gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments_api.with_raw_response.post_payment_refund(
    UUID("00000000-0000-0000-0000-000000000000"),
    RefundRequest(amount="some example string", reference_id="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRefundResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostPaymentRefundErrorBody
```

**Async**

```python
result = await async_client.payments_api.with_raw_response.post_payment_refund(
    UUID("00000000-0000-0000-0000-000000000000"),
    RefundRequest(amount="some example string", reference_id="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentRefundResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostPaymentRefundErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the payment. |
| <code>body</code> | <code>[RefundRequest](tabby/models/refund_request.py) \| [RefundRequestDict](tabby/models/refund_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[PaymentRefundResponse](tabby/models/payment_refund_response.py), [PostPaymentRefundErrorBody](tabby/errors/post_payment_refund_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentRefundResponse](tabby/models/payment_refund_response.py)</code> -- Success. Payment object is returned.

**On `Failure`**: `error` is <code>[PostPaymentRefundErrorBody](tabby/errors/post_payment_refund_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400PaymentsRefund](tabby/models/error400_payments_refund.py)</code> |
| 401, 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404 | <code>[Error404NoSuchPayment](tabby/models/error404_no_such_payment.py)</code> |
| 409 | <code>[Error400](tabby/models/error400.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_payment(id_: UUID, body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaymentUpdate, PutPaymentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the reference_id. You can only use this endpoint to update this 1 field. If you send other fields in the request, they will simply be ignored by tabby. The payment to be updated can have a status of AUTHORIZED or CLOSED.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.payments_api.with_raw_response.put_payment(
    UUID("00000000-0000-0000-0000-000000000000"), ApiV2PaymentsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutPaymentErrorBody
```

**Async**

```python
result = await async_client.payments_api.with_raw_response.put_payment(
    UUID("00000000-0000-0000-0000-000000000000"), ApiV2PaymentsRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaymentUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the payment. |
| <code>body</code> | <code>[ApiV2PaymentsRequest](tabby/models/api_v2_payments_request.py) \| [ApiV2PaymentsRequestDict](tabby/models/api_v2_payments_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[PaymentUpdate](tabby/models/payment_update.py), [PutPaymentErrorBody](tabby/errors/put_payment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaymentUpdate](tabby/models/payment_update.py)</code> -- Success. Payment object is returned.

**On `Failure`**: `error` is <code>[PutPaymentErrorBody](tabby/errors/put_payment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error400PaymentsGet](tabby/models/error400_payments_get.py)</code> |
| 401, 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404 | <code>[Error404NoSuchPayment](tabby/models/error404_no_such_payment.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](tabby/apis/webhooks_api.py)

<details>
<summary><code>def delete_webhook(id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookDelete, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.delete_webhook(
    UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookDelete
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.delete_webhook(
    UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookDelete
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the webhook. |
| <code>x_merchant_code</code> | <code>str</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[WebhookDelete](tabby/models/webhook_delete.py), [DeleteWebhookErrorBody](tabby/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookDelete](tabby/models/webhook_delete.py)</code> -- Webhook was deleted successfully.

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](tabby/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 404 | <code>[Error404NoSuchWebhook](tabby/models/error404_no_such_webhook.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, GetWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.get_webhook(
    UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhook(
    UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the webhook. |
| <code>x_merchant_code</code> | <code>str</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[Webhook](tabby/models/webhook.py), [GetWebhookErrorBody](tabby/errors/get_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](tabby/models/webhook.py)</code> -- Success. Webhook object is returned.

**On `Failure`**: `error` is <code>[GetWebhookErrorBody](tabby/errors/get_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 404 | <code>[Error404NoSuchWebhook](tabby/models/error404_no_such_webhook.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhooks(x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Webhook, GetWebhooksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all registred webhooks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.get_webhooks("code provided to you from Tabby side")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.get_webhooks("code provided to you from Tabby side")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Webhook
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_merchant_code</code> | <code>str</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[Webhook](tabby/models/webhook.py), [GetWebhooksErrorBody](tabby/errors/get_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Webhook](tabby/models/webhook.py)</code> -- Success. Webhook object is returned.

**On `Failure`**: `error` is <code>[GetWebhooksErrorBody](tabby/errors/get_webhooks_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[Error401Authorization](tabby/models/error401_authorization.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_webhook(x_merchant_code: str, body: WebhookRegistration | WebhookRegistrationDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookRegistrationResponse, PostWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new webhook

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.post_webhook(
    "code provided to you from Tabby side", WebhookRegistration(url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookRegistrationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.post_webhook(
    "code provided to you from Tabby side", WebhookRegistration(url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookRegistrationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_merchant_code</code> | <code>str</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>body</code> | <code>[WebhookRegistration](tabby/models/webhook_registration.py) \| [WebhookRegistrationDict](tabby/models/webhook_registration.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[WebhookRegistrationResponse](tabby/models/webhook_registration_response.py), [PostWebhookErrorBody](tabby/errors/post_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookRegistrationResponse](tabby/models/webhook_registration_response.py)</code> -- Success. Webhook object is returned.

**On `Failure`**: `error` is <code>[PostWebhookErrorBody](tabby/errors/post_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 401 | <code>[Error401Authorization](tabby/models/error401_authorization.py)</code> |
| 404, 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_webhook(id_: UUID, x_merchant_code: str, body: WebhookUpdate | WebhookUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookUpdate, PutWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.webhooks_api.with_raw_response.put_webhook(
    UUID("00000000-0000-0000-0000-000000000000"),
    "code provided to you from Tabby side",
    WebhookUpdate(id="some example string", url="https://example.com"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutWebhookErrorBody
```

**Async**

```python
result = await async_client.webhooks_api.with_raw_response.put_webhook(
    UUID("00000000-0000-0000-0000-000000000000"),
    "code provided to you from Tabby side",
    WebhookUpdate(id="some example string", url="https://example.com"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookUpdate
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | ID of the webhook. |
| <code>x_merchant_code</code> | <code>str</code> | Used for multi store/countries setup, please contact your Account manager to recognize that |
| <code>body</code> | <code>[WebhookUpdate](tabby/models/webhook_update.py) \| [WebhookUpdateDict](tabby/models/webhook_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](tabby/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](tabby/core/results.py)&#91;[WebhookUpdate](tabby/models/webhook_update.py), [PutWebhookErrorBody](tabby/errors/put_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookUpdate](tabby/models/webhook_update.py)</code> -- Success. Webhook object is returned.

**On `Failure`**: `error` is <code>[PutWebhookErrorBody](tabby/errors/put_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[Error401InvalidSecretKey](tabby/models/error401_invalid_secret_key.py)</code> |
| 401 | <code>[Error401Authorization](tabby/models/error401_authorization.py)</code> |
| 403 | <code>[Error403](tabby/models/error403.py)</code> |
| 404 | <code>[Error404NoSuchWebhook](tabby/models/error404_no_such_webhook.py)</code> |
| 500 | <code>str</code> |
| anything unmapped | <code>[RawError](tabby/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

