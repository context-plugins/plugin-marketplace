# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [PostscriptClient](postscript/client.py)

## Compliance

> Source: [Compliance](postscript/apis/compliance.py)

<details>
<summary><code>def redact(*, x_postscript_shop_token: str | None = None, body: ApiV2ComplianceRedactRequest | ApiV2ComplianceRedactRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2ComplianceRedactResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID, this endpoint will also unsubscribe the subscriber if they have an active subscription

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.compliance.redact()
    # TODO: Handle 'response' of type ApiV2ComplianceRedactResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RedactErrorBody
```

**Async**

```python
try:
    response = await async_client.compliance.redact()
    # TODO: Handle 'response' of type ApiV2ComplianceRedactResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RedactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2ComplianceRedactRequest](postscript/models/api_v2_compliance_redact_request.py) \| [ApiV2ComplianceRedactRequestDict](postscript/models/api_v2_compliance_redact_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2ComplianceRedactResponse](postscript/models/api_v2_compliance_redact_response.py)</code> -- 202

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[RedactErrorBody](postscript/errors/redact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV2ComplianceRedact403Error1](postscript/models/api_v2_compliance_redact403_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unsubscribe(*, x_postscript_shop_token: str | None = None, body: ApiV2ComplianceUnsubscribeRequest | ApiV2ComplianceUnsubscribeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2ComplianceUnsubscribeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Opt outs subscribers from Postscript messaging.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.compliance.unsubscribe()
    # TODO: Handle 'response' of type ApiV2ComplianceUnsubscribeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnsubscribeErrorBody
```

**Async**

```python
try:
    response = await async_client.compliance.unsubscribe()
    # TODO: Handle 'response' of type ApiV2ComplianceUnsubscribeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnsubscribeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2ComplianceUnsubscribeRequest](postscript/models/api_v2_compliance_unsubscribe_request.py) \| [ApiV2ComplianceUnsubscribeRequestDict](postscript/models/api_v2_compliance_unsubscribe_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2ComplianceUnsubscribeResponse](postscript/models/api_v2_compliance_unsubscribe_response.py)</code> -- 202

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[UnsubscribeErrorBody](postscript/errors/unsubscribe_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV2ComplianceUnsubscribe403Error1](postscript/models/api_v2_compliance_unsubscribe403_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](postscript/apis/events.py)

<details>
<summary><code>def create_custom_event(*, x_postscript_shop_token: str | None = None, body: ApiV2EventsRequest | ApiV2EventsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2EventsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a Custom Event to use in Flows

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.create_custom_event()
    # TODO: Handle 'response' of type ApiV2EventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomEventErrorBody
```

**Async**

```python
try:
    response = await async_client.events.create_custom_event()
    # TODO: Handle 'response' of type ApiV2EventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomEventErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2EventsRequest](postscript/models/api_v2_events_request.py) \| [ApiV2EventsRequestDict](postscript/models/api_v2_events_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2EventsResponse](postscript/models/api_v2_events_response.py)</code> -- 202

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[CreateCustomEventErrorBody](postscript/errors/create_custom_event_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Identity

> Source: [Identity](postscript/apis/identity.py)

<details>
<summary><code>def verify_identity(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2MeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.identity.verify_identity()
    # TODO: Handle 'response' of type ApiV2MeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyIdentityErrorBody
```

**Async**

```python
try:
    response = await async_client.identity.verify_identity()
    # TODO: Handle 'response' of type ApiV2MeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyIdentityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2MeResponse](postscript/models/api_v2_me_response.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[VerifyIdentityErrorBody](postscript/errors/verify_identity_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV2Me400Error1](postscript/models/api_v2_me400_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Keywords

> Source: [Keywords](postscript/apis/keywords.py)

<details>
<summary><code>def get_keyword(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2KeywordsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Keyword by its ID

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.keywords.get_keyword("some example string")
    # TODO: Handle 'response' of type ApiV2KeywordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeywordErrorBody
```

**Async**

```python
try:
    response = await async_client.keywords.get_keyword("some example string")
    # TODO: Handle 'response' of type ApiV2KeywordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeywordErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | ID of the keyword you'd like to receive. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2KeywordsResponse](postscript/models/api_v2_keywords_response.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetKeywordErrorBody](postscript/errors/get_keyword_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ApiV2Keywords404Error1](postscript/models/api_v2_keywords404_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_keywords(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2KeywordsResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all active keywords for a shop.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.keywords.get_keywords()
    # TODO: Handle 'response' of type ApiV2KeywordsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeywordsErrorBody
```

**Async**

```python
try:
    response = await async_client.keywords.get_keywords()
    # TODO: Handle 'response' of type ApiV2KeywordsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetKeywordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2KeywordsResponse1](postscript/models/api_v2_keywords_response1.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetKeywordsErrorBody](postscript/errors/get_keywords_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ApiV2Keywords403Error1](postscript/models/api_v2_keywords403_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](postscript/apis/messages.py)

<details>
<summary><code>def create_message(*, x_postscript_shop_token: str | None = None, body: ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2MessageRequestsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to a subscriber.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.messages.create_message(
        body=ApiV2MessageRequestsRequest(
            phone="15555555555",
            body="Hello, world",
            category=Category.PROMOTIONAL,
            media_url="https://example.com/great_pic.png",
        ),
    )
    # TODO: Handle 'response' of type ApiV2MessageRequestsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.messages.create_message(
        body=ApiV2MessageRequestsRequest(
            phone="15555555555",
            body="Hello, world",
            category=Category.PROMOTIONAL,
            media_url="https://example.com/great_pic.png",
        ),
    )
    # TODO: Handle 'response' of type ApiV2MessageRequestsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2MessageRequestsRequest](postscript/models/api_v2_message_requests_request.py) \| [ApiV2MessageRequestsRequestDict](postscript/models/api_v2_message_requests_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2MessageRequestsResponse](postscript/models/api_v2_message_requests_response.py)</code> -- 202

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[CreateMessageErrorBody](postscript/errors/create_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_message_request(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2MessageRequestsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.messages.get_message_request("some example string")
    # TODO: Handle 'response' of type ApiV2MessageRequestsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMessageRequestErrorBody
```

**Async**

```python
try:
    response = await async_client.messages.get_message_request("some example string")
    # TODO: Handle 'response' of type ApiV2MessageRequestsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMessageRequestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | ID of the message request to look up. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2MessageRequestsResponse](postscript/models/api_v2_message_requests_response.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetMessageRequestErrorBody](postscript/errors/get_message_request_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_sent_message(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2SentMessagesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.messages.get_sent_message("some example string")
    # TODO: Handle 'response' of type ApiV2SentMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSentMessageErrorBody
```

**Async**

```python
try:
    response = await async_client.messages.get_sent_message("some example string")
    # TODO: Handle 'response' of type ApiV2SentMessagesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSentMessageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | ID of sent message to fetch. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2SentMessagesResponse](postscript/models/api_v2_sent_messages_response.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetSentMessageErrorBody](postscript/errors/get_sent_message_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV2SentMessages400Error1](postscript/models/api_v2_sent_messages400_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Subscribers

> Source: [Subscribers](postscript/apis/subscribers.py)

<details>
<summary><code>def get_subscriber(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an individual subscriber for a shop.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscribers.get_subscriber("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSubscriberErrorBody
```

**Async**

```python
try:
    response = await async_client.subscribers.get_subscriber("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSubscriberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID for the subscriber you'd like to get. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetSubscriberErrorBody](postscript/errors/get_subscriber_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_subscribers(*, created_at_eq: RFC3339DateTime | None = None, created_at_gt: RFC3339DateTime | None = None, created_at_gte: RFC3339DateTime | None = None, created_at_lt: RFC3339DateTime | None = None, created_at_lte: RFC3339DateTime | None = None, email_contains: str | None = None, email_eq: str | None = None, email_in: list[str] | None = None, page: int | None = None, phone_number_contains: str | None = None, phone_number_eq: str | None = None, phone_number_in: list[str] | None = None, shopify_customer_id_contains: str | None = None, shopify_customer_id_eq: str | None = None, shopify_customer_id_in: list[str] | None = None, sort: str | None = None, updated_at_eq: RFC3339DateTime | None = None, updated_at_gt: Date | None = None, updated_at_gte: RFC3339DateTime | None = None, updated_at_lt: RFC3339DateTime | None = None, updated_at_lte: RFC3339DateTime | None = None, ps_id_eq: int | None = None, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of subscribers for a shop.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscribers.get_subscribers()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSubscribersErrorBody
```

**Async**

```python
try:
    response = await async_client.subscribers.get_subscribers()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSubscribersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>created_at_eq</code> | <code>RFC3339DateTime \| None</code> | Created at is equal to<br>**Default**: <code>None</code> |
| <code>created_at_gt</code> | <code>RFC3339DateTime \| None</code> | Created at is greater than<br>**Default**: <code>None</code> |
| <code>created_at_gte</code> | <code>RFC3339DateTime \| None</code> | Created at is greater than or equal to<br>**Default**: <code>None</code> |
| <code>created_at_lt</code> | <code>RFC3339DateTime \| None</code> | Created at is less than<br>**Default**: <code>None</code> |
| <code>created_at_lte</code> | <code>RFC3339DateTime \| None</code> | Created at is less than or equal to<br>**Default**: <code>None</code> |
| <code>email_contains</code> | <code>str \| None</code> | Email contains<br>**Default**: <code>None</code> |
| <code>email_eq</code> | <code>str \| None</code> | Email is equal to<br>**Default**: <code>None</code> |
| <code>email_in</code> | <code>list&#91;str&#93; \| None</code> | Email is in<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Page number of results to start from<br>**Default**: <code>None</code> |
| <code>phone_number_contains</code> | <code>str \| None</code> | Phone number contains<br>**Default**: <code>None</code> |
| <code>phone_number_eq</code> | <code>str \| None</code> | Phone number is equal to<br>**Default**: <code>None</code> |
| <code>phone_number_in</code> | <code>list&#91;str&#93; \| None</code> | Phone number is in<br>**Default**: <code>None</code> |
| <code>shopify_customer_id_contains</code> | <code>str \| None</code> | Shopify customer id contains<br>**Default**: <code>None</code> |
| <code>shopify_customer_id_eq</code> | <code>str \| None</code> | Shopify customer id is equal to<br>**Default**: <code>None</code> |
| <code>shopify_customer_id_in</code> | <code>list&#91;str&#93; \| None</code> | Shopify customer id is in<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sorting Order. In `{field}__asc` or `{field}__desc` format. Valid fields:  `created_at`, `updated_at`, `phone_number`, `shopify_customer_id`<br>**Default**: <code>None</code> |
| <code>updated_at_eq</code> | <code>RFC3339DateTime \| None</code> | Updated at is equal to<br>**Default**: <code>None</code> |
| <code>updated_at_gt</code> | <code>Date \| None</code> | Updated at is greater than<br>**Default**: <code>None</code> |
| <code>updated_at_gte</code> | <code>RFC3339DateTime \| None</code> | Updated at is greater than or equal to<br>**Default**: <code>None</code> |
| <code>updated_at_lt</code> | <code>RFC3339DateTime \| None</code> | Updated at is less than<br>**Default**: <code>None</code> |
| <code>updated_at_lte</code> | <code>RFC3339DateTime \| None</code> | Updated at is less than or equal to<br>**Default**: <code>None</code> |
| <code>ps_id_eq</code> | <code>int \| None</code> | Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for subscribers on the front end and is used to uniquely identify a subscriber across sessions.<br>**Default**: <code>None</code> |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetSubscribersErrorBody](postscript/errors/get_subscribers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_subscriber_by_id(id_: str, *, x_postscript_shop_token: str | None = None, body: ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates data for a given subscriber.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscribers.update_subscriber_by_id("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSubscriberByIdErrorBody
```

**Async**

```python
try:
    response = await async_client.subscribers.update_subscriber_by_id("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSubscriberByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | ID of the subscriber you'd like to update. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2SubscribersRequest](postscript/models/api_v2_subscribers_request.py) \| [ApiV2SubscribersRequestDict](postscript/models/api_v2_subscribers_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[UpdateSubscriberByIdErrorBody](postscript/errors/update_subscriber_by_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](postscript/apis/webhooks_api.py)

<details>
<summary><code>def create_webhook_subscription(*, x_postscript_shop_token: str | None = None, body: ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.create_webhook_subscription()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.create_webhook_subscription()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2WebhooksRequest](postscript/models/api_v2_webhooks_request.py) \| [ApiV2WebhooksRequestDict](postscript/models/api_v2_webhooks_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[CreateWebhookSubscriptionErrorBody](postscript/errors/create_webhook_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook_subscription(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `DELETE` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.delete_webhook_subscription("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.delete_webhook_subscription("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the webhook subscription to delete. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[DeleteWebhookSubscriptionErrorBody](postscript/errors/delete_webhook_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def example_event(*, event: Event1OrStr = Event1.SHOP_TEST, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2WebhooksExampleResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.example_event(event=Event1.SHOP_TEST)
    # TODO: Handle 'response' of type ApiV2WebhooksExampleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExampleEventErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.example_event(event=Event1.SHOP_TEST)
    # TODO: Handle 'response' of type ApiV2WebhooksExampleResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExampleEventErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>event</code> | <code>[Event1OrStr](postscript/models/enums/event1.py)</code> | Webhook subscription `event` type.<br>**Default**: <code>Event1.SHOP_TEST</code> |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2WebhooksExampleResponse](postscript/models/api_v2_webhooks_example_response.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[ExampleEventErrorBody](postscript/errors/example_event_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook_signing_token(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2WebhooksTokenResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_webhook_signing_token()
    # TODO: Handle 'response' of type ApiV2WebhooksTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookSigningTokenErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook_signing_token()
    # TODO: Handle 'response' of type ApiV2WebhooksTokenResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookSigningTokenErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2WebhooksTokenResponse](postscript/models/api_v2_webhooks_token_response.py)</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetWebhookSigningTokenErrorBody](postscript/errors/get_webhook_signing_token_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook_subscription(id_: str, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.get_webhook_subscription("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.get_webhook_subscription("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | ID of the webhook subscription to fetch. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[GetWebhookSubscriptionErrorBody](postscript/errors/get_webhook_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhook_subscriptions(*, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.list_webhook_subscriptions()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhookSubscriptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.list_webhook_subscriptions()
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhookSubscriptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[ListWebhookSubscriptionsErrorBody](postscript/errors/list_webhook_subscriptions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_shop_webhook(*, x_postscript_shop_token: str | None = None, body: ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiV2WebhooksTestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.test_shop_webhook()
    # TODO: Handle 'response' of type ApiV2WebhooksTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestShopWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.test_shop_webhook()
    # TODO: Handle 'response' of type ApiV2WebhooksTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestShopWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used *only* by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2WebhooksTestRequest](postscript/models/api_v2_webhooks_test_request.py) \| [ApiV2WebhooksTestRequestDict](postscript/models/api_v2_webhooks_test_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV2WebhooksTestResponse](postscript/models/api_v2_webhooks_test_response.py)</code> -- 202

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[TestShopWebhookErrorBody](postscript/errors/test_shop_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ApiV2WebhooksTest400Error1](postscript/models/api_v2_webhooks_test400_error1.py)</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook_subscription(id_: str, *, x_postscript_shop_token: str | None = None, body: ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `PATCH` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhooks_api.update_webhook_subscription("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookSubscriptionErrorBody
```

**Async**

```python
try:
    response = await async_client.webhooks_api.update_webhook_subscription("some example string")
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookSubscriptionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | ID of the webhook subscription to update. |
| <code>x_postscript_shop_token</code> | <code>str \| None</code> | Shop API Token. **Required for partners**. This header should be used only by partners. Shops should include their API token in the *Authorization* header.<br>**Default**: <code>None</code> |
| <code>body</code> | <code>[ApiV2WebhooksRequest1](postscript/models/api_v2_webhooks_request1.py) \| [ApiV2WebhooksRequest1Dict](postscript/models/api_v2_webhooks_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](postscript/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Any</code> -- 200

**OnError**: <code>[ApiError](postscript/core/exceptions.py)&#91;[UpdateWebhookSubscriptionErrorBody](postscript/errors/update_webhook_subscription_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>Any</code> |
| anything unmapped | <code>[RawError](postscript/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

