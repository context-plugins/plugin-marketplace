# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [TabbyClient](tabby/client.py)

## Checkout

> Source: [Checkout](tabby/apis/checkout.py)

<details>
<summary><code>def get_checkout_session(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutSession</code></summary>

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
try:
    response = client.checkout.get_checkout_session(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CheckoutSession
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.checkout.get_checkout_session(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type CheckoutSession
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutSessionErrorBody
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

**OnSuccess**: <code>[CheckoutSession](tabby/models/checkout_session.py)</code> -- Success. Checkout session object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetCheckoutSessionErrorBody](tabby/errors/get_checkout_session_error.py)&#93;</code>

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
<summary><code>def post_checkout_session(body: ApiV2CheckoutRequest | ApiV2CheckoutRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutSession</code></summary>

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
try:
    response = client.checkout.post_checkout_session(
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
    # TODO: Handle 'response' of type CheckoutSession
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCheckoutSessionErrorBody
```

**Async**

```python
try:
    response = await async_client.checkout.post_checkout_session(
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
    # TODO: Handle 'response' of type CheckoutSession
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCheckoutSessionErrorBody
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

**OnSuccess**: <code>[CheckoutSession](tabby/models/checkout_session.py)</code> -- Success. Checkout session object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostCheckoutSessionErrorBody](tabby/errors/post_checkout_session_error.py)&#93;</code>

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
<summary><code>def get_dispute(dispute_id: UUID, dispute_id_template: str, *, request_options: RequestOptionsOrDict | None = None) -> Dispute1</code></summary>

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
try:
    response = client.disputes_api.get_dispute(UUID("00000000-0000-0000-0000-000000000000"), "some example string")
    # TODO: Handle 'response' of type Dispute1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDisputeErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes_api.get_dispute(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type Dispute1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDisputeErrorBody
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

**OnSuccess**: <code>[Dispute1](tabby/models/dispute1.py)</code> -- Success. Returns dispute info.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetDisputeErrorBody](tabby/errors/get_dispute_error.py)&#93;</code>

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
<summary><code>def get_disputes(*, statuses: StatusesOrStr | None = None, created_at_gte: str | None = None, created_at_lte: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Disputes</code></summary>

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
try:
    response = client.disputes_api.get_disputes(
        created_at_gte="created_at_gte=2022-12-01T00:00:00Z", created_at_lte="created_at_lte=2022-12-01T00:00:00Z"
    )
    # TODO: Handle 'response' of type Disputes
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDisputesErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes_api.get_disputes(
        created_at_gte="created_at_gte=2022-12-01T00:00:00Z", created_at_lte="created_at_lte=2022-12-01T00:00:00Z"
    )
    # TODO: Handle 'response' of type Disputes
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDisputesErrorBody
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

**OnSuccess**: <code>[Disputes](tabby/models/disputes.py)</code> -- Success. Returns a list of disputes.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetDisputesErrorBody](tabby/errors/get_disputes_error.py)&#93;</code>

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
<summary><code>def post_dispute_provide_evidence(dispute_id: UUID, dispute_id_template: str, body: ApiV1DisputesProvideEvidenceRequest | ApiV1DisputesProvideEvidenceRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Evidence</code></summary>

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
try:
    response = client.disputes_api.post_dispute_provide_evidence(
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        ApiV1DisputesProvideEvidenceRequest(content="some example string"),
    )
    # TODO: Handle 'response' of type Evidence
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDisputeProvideEvidenceErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes_api.post_dispute_provide_evidence(
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        ApiV1DisputesProvideEvidenceRequest(content="some example string"),
    )
    # TODO: Handle 'response' of type Evidence
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDisputeProvideEvidenceErrorBody
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

**OnSuccess**: <code>[Evidence](tabby/models/evidence.py)</code> -- Success. Evidence was submitted for the dispute.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostDisputeProvideEvidenceErrorBody](tabby/errors/post_dispute_provide_evidence_error.py)&#93;</code>

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
<summary><code>def post_disputes_approve(body: ApiV1DisputesApproveRequest | ApiV1DisputesApproveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DisputesApprove</code></summary>

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
try:
    response = client.disputes_api.post_disputes_approve(
        ApiV1DisputesApproveRequest(dispute_ids=[UUID("00000000-0000-0000-0000-000000000000")])
    )
    # TODO: Handle 'response' of type DisputesApprove
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDisputesApproveErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes_api.post_disputes_approve(
        ApiV1DisputesApproveRequest(dispute_ids=[UUID("00000000-0000-0000-0000-000000000000")])
    )
    # TODO: Handle 'response' of type DisputesApprove
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDisputesApproveErrorBody
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

**OnSuccess**: <code>[DisputesApprove](tabby/models/disputes_approve.py)</code> -- Success. Disputes were approved.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostDisputesApproveErrorBody](tabby/errors/post_disputes_approve_error.py)&#93;</code>

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
<summary><code>def post_disputes_challenge(body: ApiV1DisputesChallengeRequest | ApiV1DisputesChallengeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DisputesChallenge</code></summary>

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
try:
    response = client.disputes_api.post_disputes_challenge(
        ApiV1DisputesChallengeRequest(
            dispute_id="some example string", description="some example string", reason=Reason.MERCHANT_REASON_OTHER
        ),
    )
    # TODO: Handle 'response' of type DisputesChallenge
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDisputesChallengeErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes_api.post_disputes_challenge(
        ApiV1DisputesChallengeRequest(
            dispute_id="some example string", description="some example string", reason=Reason.MERCHANT_REASON_OTHER
        ),
    )
    # TODO: Handle 'response' of type DisputesChallenge
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostDisputesChallengeErrorBody
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

**OnSuccess**: <code>[DisputesChallenge](tabby/models/disputes_challenge.py)</code> -- Success. Disputes were challenged.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostDisputesChallengeErrorBody](tabby/errors/post_disputes_challenge_error.py)&#93;</code>

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
<summary><code>def post_upload_attachment(attachment: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> DisputeAttachmentUpload</code></summary>

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
try:
    response = client.disputes_api.post_upload_attachment(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type DisputeAttachmentUpload
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUploadAttachmentErrorBody
```

**Async**

```python
try:
    response = await async_client.disputes_api.post_upload_attachment(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type DisputeAttachmentUpload
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostUploadAttachmentErrorBody
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

**OnSuccess**: <code>[DisputeAttachmentUpload](tabby/models/dispute_attachment_upload.py)</code> -- Success. Attachment was uploaded.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostUploadAttachmentErrorBody](tabby/errors/post_upload_attachment_error.py)&#93;</code>

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
<summary><code>def close_payment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PaymentClose</code></summary>

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
try:
    response = client.payments_api.close_payment(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PaymentClose
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClosePaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments_api.close_payment(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PaymentClose
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClosePaymentErrorBody
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

**OnSuccess**: <code>[PaymentClose](tabby/models/payment_close.py)</code> -- Success. Payment object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[ClosePaymentErrorBody](tabby/errors/close_payment_error.py)&#93;</code>

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
<summary><code>def get_payment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PaymentResponse</code></summary>

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
try:
    response = client.payments_api.get_payment(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PaymentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments_api.get_payment(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PaymentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentErrorBody
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

**OnSuccess**: <code>[PaymentResponse](tabby/models/payment_response.py)</code> -- Success. Payment object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetPaymentErrorBody](tabby/errors/get_payment_error.py)&#93;</code>

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
<summary><code>def get_payments(*, created_at_gte: Date | None = None, created_at_lte: RFC3339DateTime | None = None, limit: int | None = None, status: Status1TabbyApiReferencePaymentsApiOrStr | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> Payments</code></summary>

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
try:
    response = client.payments_api.get_payments(status=Status1TabbyApiReferencePaymentsApi.AUTHORIZED)
    # TODO: Handle 'response' of type Payments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.payments_api.get_payments(status=Status1TabbyApiReferencePaymentsApi.AUTHORIZED)
    # TODO: Handle 'response' of type Payments
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentsErrorBody
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

**OnSuccess**: <code>[Payments](tabby/models/payments.py)</code> -- Success. Returns a list of payments.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetPaymentsErrorBody](tabby/errors/get_payments_error.py)&#93;</code>

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
<summary><code>def post_payment_capture(id_: UUID, body: CaptureRequest | CaptureRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentCaptureResponse</code></summary>

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
try:
    response = client.payments_api.post_payment_capture(
        UUID("00000000-0000-0000-0000-000000000000"),
        CaptureRequest(amount="some example string", reference_id="some example string"),
    )
    # TODO: Handle 'response' of type PaymentCaptureResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostPaymentCaptureErrorBody
```

**Async**

```python
try:
    response = await async_client.payments_api.post_payment_capture(
        UUID("00000000-0000-0000-0000-000000000000"),
        CaptureRequest(amount="some example string", reference_id="some example string"),
    )
    # TODO: Handle 'response' of type PaymentCaptureResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostPaymentCaptureErrorBody
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

**OnSuccess**: <code>[PaymentCaptureResponse](tabby/models/payment_capture_response.py)</code> -- Success. Payment object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostPaymentCaptureErrorBody](tabby/errors/post_payment_capture_error.py)&#93;</code>

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
<summary><code>def post_payment_refund(id_: UUID, body: RefundRequest | RefundRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentRefundResponse</code></summary>

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
try:
    response = client.payments_api.post_payment_refund(
        UUID("00000000-0000-0000-0000-000000000000"),
        RefundRequest(amount="some example string", reference_id="some example string"),
    )
    # TODO: Handle 'response' of type PaymentRefundResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostPaymentRefundErrorBody
```

**Async**

```python
try:
    response = await async_client.payments_api.post_payment_refund(
        UUID("00000000-0000-0000-0000-000000000000"),
        RefundRequest(amount="some example string", reference_id="some example string"),
    )
    # TODO: Handle 'response' of type PaymentRefundResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostPaymentRefundErrorBody
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

**OnSuccess**: <code>[PaymentRefundResponse](tabby/models/payment_refund_response.py)</code> -- Success. Payment object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostPaymentRefundErrorBody](tabby/errors/post_payment_refund_error.py)&#93;</code>

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
<summary><code>def put_payment(id_: UUID, body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PaymentUpdate</code></summary>

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
try:
    response = client.payments_api.put_payment(UUID("00000000-0000-0000-0000-000000000000"), ApiV2PaymentsRequest())
    # TODO: Handle 'response' of type PaymentUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments_api.put_payment(
        UUID("00000000-0000-0000-0000-000000000000"), ApiV2PaymentsRequest()
    )
    # TODO: Handle 'response' of type PaymentUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutPaymentErrorBody
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

**OnSuccess**: <code>[PaymentUpdate](tabby/models/payment_update.py)</code> -- Success. Payment object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PutPaymentErrorBody](tabby/errors/put_payment_error.py)&#93;</code>

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
<summary><code>def delete_webhook(id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookDelete</code></summary>

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
try:
    response = client.webhooks_api.delete_webhook(
        UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
    )
    # TODO: Handle 'response' of type WebhookDelete
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.delete_webhook(
        UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
    )
    # TODO: Handle 'response' of type WebhookDelete
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
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

**OnSuccess**: <code>[WebhookDelete](tabby/models/webhook_delete.py)</code> -- Webhook was deleted successfully.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[DeleteWebhookErrorBody](tabby/errors/delete_webhook_error.py)&#93;</code>

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
<summary><code>def get_webhook(id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.get_webhook(
        UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook(
        UUID("00000000-0000-0000-0000-000000000000"), "code provided to you from Tabby side"
    )
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
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

**OnSuccess**: <code>[Webhook](tabby/models/webhook.py)</code> -- Success. Webhook object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetWebhookErrorBody](tabby/errors/get_webhook_error.py)&#93;</code>

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
<summary><code>def get_webhooks(x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook</code></summary>

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
try:
    response = client.webhooks_api.get_webhooks("code provided to you from Tabby side")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhooks("code provided to you from Tabby side")
    # TODO: Handle 'response' of type Webhook
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhooksErrorBody
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

**OnSuccess**: <code>[Webhook](tabby/models/webhook.py)</code> -- Success. Webhook object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[GetWebhooksErrorBody](tabby/errors/get_webhooks_error.py)&#93;</code>

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
<summary><code>def post_webhook(x_merchant_code: str, body: WebhookRegistration | WebhookRegistrationDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookRegistrationResponse</code></summary>

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
try:
    response = client.webhooks_api.post_webhook(
        "code provided to you from Tabby side", WebhookRegistration(url="https://example.com")
    )
    # TODO: Handle 'response' of type WebhookRegistrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.post_webhook(
        "code provided to you from Tabby side", WebhookRegistration(url="https://example.com")
    )
    # TODO: Handle 'response' of type WebhookRegistrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostWebhookErrorBody
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

**OnSuccess**: <code>[WebhookRegistrationResponse](tabby/models/webhook_registration_response.py)</code> -- Success. Webhook object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PostWebhookErrorBody](tabby/errors/post_webhook_error.py)&#93;</code>

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
<summary><code>def put_webhook(id_: UUID, x_merchant_code: str, body: WebhookUpdate | WebhookUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookUpdate</code></summary>

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
try:
    response = client.webhooks_api.put_webhook(
        UUID("00000000-0000-0000-0000-000000000000"),
        "code provided to you from Tabby side",
        WebhookUpdate(id="some example string", url="https://example.com"),
    )
    # TODO: Handle 'response' of type WebhookUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.put_webhook(
        UUID("00000000-0000-0000-0000-000000000000"),
        "code provided to you from Tabby side",
        WebhookUpdate(id="some example string", url="https://example.com"),
    )
    # TODO: Handle 'response' of type WebhookUpdate
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutWebhookErrorBody
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

**OnSuccess**: <code>[WebhookUpdate](tabby/models/webhook_update.py)</code> -- Success. Webhook object is returned.

**OnError**: <code>[ApiError](tabby/core/exceptions.py)&#91;[PutWebhookErrorBody](tabby/errors/put_webhook_error.py)&#93;</code>

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

