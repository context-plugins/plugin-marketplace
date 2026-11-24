# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [DivvyClient](divvy/client.py)

## Attachments

> Source: [Attachments](divvy/apis/attachments.py)

<details>
<summary><code>def create_customer_attachment(customer_id: str, name: str, body: list[str], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing customer. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.create_customer_attachment(
        "{{customer_id}}",
        "business_details.pdf",
        ["some example string"],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerAttachmentErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.create_customer_attachment(
        "{{customer_id}}",
        "business_details.pdf",
        ["some example string"],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>list&#91;str&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](divvy/models/attachment_response_dto.py)</code> -- Upload customer attachment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomerAttachmentErrorBody](divvy/errors/create_customer_attachment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_invoice_attachment(invoice_id: str, name: str, body: list[str], *, replace_invoice_pdf: bool | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing invoice. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.create_invoice_attachment(
        "{{invoice_id}}",
        "business_details.pdf",
        ["some example string"],
        replace_invoice_pdf=False,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInvoiceAttachmentErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.create_invoice_attachment(
        "{{invoice_id}}",
        "business_details.pdf",
        ["some example string"],
        replace_invoice_pdf=False,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInvoiceAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>list&#91;str&#93;</code> | The request body. |
| <code>replace_invoice_pdf</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](divvy/models/attachment_response_dto.py)</code> -- Upload invoice attachment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateInvoiceAttachmentErrorBody](divvy/errors/create_invoice_attachment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_vendor_attachment(vendor_id: str, name: str, body: list[str], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload an attachment for an existing vendor. The file size limit is 6 MB.

**Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.create_vendor_attachment(
        "{{vendor_id}}",
        "business_details.pdf",
        ["some example string"],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorAttachmentErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.create_vendor_attachment(
        "{{vendor_id}}",
        "business_details.pdf",
        ["some example string"],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>list&#91;str&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](divvy/models/attachment_response_dto.py)</code> -- Upload vendor attachment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateVendorAttachmentErrorBody](divvy/errors/create_vendor_attachment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_attachment(attachment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not available in the list of attachments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.delete_attachment(
        "{{attachment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAttachmentErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.delete_attachment(
        "{{attachment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachment_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](divvy/models/status_dto.py)</code> -- Delete an attachment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteAttachmentErrorBody](divvy/errors/delete_attachment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_attachment(attachment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> AttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an attachment.

From the response, use `downloadLink` in a GET request to download the attachment.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.get_attachment(
        "{{attachment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAttachmentErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.get_attachment(
        "{{attachment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type AttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAttachmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>attachment_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AttachmentResponseDto](divvy/models/attachment_response_dto.py)</code> -- Get attachment details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetAttachmentErrorBody](divvy/errors/get_attachment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_attachments(customer_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoAttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a customer.

From the response, use `downloadLink` in a GET request to download the attachment.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.list_customer_attachments(
        "{{customer_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerAttachmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.list_customer_attachments(
        "{{customer_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerAttachmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](divvy/models/list_response_dto_attachment_response_dto.py)</code> -- Get list of customer attachments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCustomerAttachmentsErrorBody](divvy/errors/list_customer_attachments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_invoice_attachments(invoice_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoAttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with an invoice.

From the response, use `downloadLink` in a GET request to download the attachment.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.list_invoice_attachments(
        "{{invoice_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoiceAttachmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.list_invoice_attachments(
        "{{invoice_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoiceAttachmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](divvy/models/list_response_dto_attachment_response_dto.py)</code> -- Get list of invoice attachments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListInvoiceAttachmentsErrorBody](divvy/errors/list_invoice_attachments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vendor_attachments(vendor_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoAttachmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of attachments associated with a vendor.

From the response, use `downloadLink` in a GET request to download the attachment.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.attachments.list_vendor_attachments(
        "{{vendor_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorAttachmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.attachments.list_vendor_attachments(
        "{{vendor_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoAttachmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorAttachmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoAttachmentResponseDto](divvy/models/list_response_dto_attachment_response_dto.py)</code> -- Get list of vendor attachments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListVendorAttachmentsErrorBody](divvy/errors/list_vendor_attachments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Authentication

> Source: [Authentication](divvy/apis/authentication.py)

<details>
<summary><code>def get_session_info(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SessionInfoResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about your current API session. This includes information about the current organization ID, user ID, and MFA status of the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authentication.get_session_info(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type SessionInfoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionInfoErrorBody
```

**Async**

```python
try:
    response = await async_client.authentication.get_session_info(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type SessionInfoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionInfoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionInfoResponseDto](divvy/models/session_info_response_dto.py)</code> -- Get API session details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetSessionInfoErrorBody](divvy/errors/get_session_info_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_all_organizations(*, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListAllResponseDtoAllOrganizationsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of organizations you can access with your current API session. You get 100 results on one page of results.

In the response, you get a list of organizations and console organizations. When a console organization is available in the response, this indicates that the console organization is a parent of the listed organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authentication.list_all_organizations(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ListAllResponseDtoAllOrganizationsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllOrganizationsErrorBody
```

**Async**

```python
try:
    response = await async_client.authentication.list_all_organizations(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListAllResponseDtoAllOrganizationsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAllOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListAllResponseDtoAllOrganizationsResponseDto](divvy/models/list_all_response_dto_all_organizations_response_dto.py)</code> -- Get list of login organizations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListAllOrganizationsErrorBody](divvy/errors/list_all_organizations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def login(body: LoginRequestDto | LoginRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> LoginResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to confirm that you are in a signed-in session.

To create an MFA-trusted API session, set `rememberMeId` and `device` in addition to the required fields. See MFA setup for information about the BILL MFA process.

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

See API partner login for information about the additional permissions you get with the API partner login.

**Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend & Expense API token for information about authentication for the Spend & Expense API endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.authentication.login(
        LoginRequestDto(
            dev_key="some example string", username="some example string", organization_id="some example string"
        ),
    )
    # TODO: Handle 'response' of type LoginResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoginErrorBody
```

**Async**

```python
try:
    response = await async_client.authentication.login(
        LoginRequestDto(
            dev_key="some example string", username="some example string", organization_id="some example string"
        ),
    )
    # TODO: Handle 'response' of type LoginResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoginErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LoginRequestDto](divvy/models/login_request_dto.py) \| [LoginRequestDtoDict](divvy/models/login_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LoginResponseDto](divvy/models/login_response_dto.py)</code> -- API login response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[LoginErrorBody](divvy/errors/login_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def logout(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign out of your BILL developer account. In response, the current `sessionId` expires and your API session is terminated.

You will be required to sign in again with `/v3/login` before you can make another API call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.authentication.logout(session_id="{{session_id}}", dev_key="{{developer_key}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LogoutErrorBody
```

**Async**

```python
try:
    await async_client.authentication.logout(session_id="{{session_id}}", dev_key="{{developer_key}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LogoutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[LogoutErrorBody](divvy/errors/logout_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Bills

> Source: [Bills](divvy/apis/bills.py)

<details>
<summary><code>def archive_bill(bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillWithoutApproversResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bill. In the response, the `archived` field is set as `true`.

You can restore an archived bill with `POST /v3/bills/{billId}/restore`. There is no change when you archive an archived bill.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.archive_bill("{{bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type BillWithoutApproversResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.archive_bill(
        "{{bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type BillWithoutApproversResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillWithoutApproversResponseDto](divvy/models/bill_without_approvers_response_dto.py)</code> -- Archive a bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveBillErrorBody](divvy/errors/archive_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bill(body: BillCreateRequestDto | BillCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bill.

See Bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.create_bill(
        BillCreateRequestDto(
            vendor_id="some example string",
            due_date=date(2024, 1, 15),
            bill_line_items=[BillCreateLineItemDto()],
            invoice=Invoice1(invoice_number="some example string", invoice_date=date(2024, 1, 15)),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.create_bill(
        BillCreateRequestDto(
            vendor_id="some example string",
            due_date=date(2024, 1, 15),
            bill_line_items=[BillCreateLineItemDto()],
            invoice=Invoice1(invoice_number="some example string", invoice_date=date(2024, 1, 15)),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BillCreateRequestDto](divvy/models/bill_create_request_dto.py) \| [BillCreateRequestDtoDict](divvy/models/bill_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillResponseDto](divvy/models/bill_response_dto.py)</code> -- Create a bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBillErrorBody](divvy/errors/create_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bulk_bills(body: list[BillCreateRequestDto | BillCreateRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[BillWithoutApproversResponseDto]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple bills with one API request. You can create up to 100 bills with one `POST /v3/bills/bulk` request.

Bulk bill creation at BILL follow a set of rules.
* **Successful response**: In your bulk bill creation request, all your bills must be successfully created for a successful response. If any bill creation is not successful, the entire request fails and none of the bills in the request are created.
* **You can create bills for multiple vendors**: You can create bills for one vendor or for multiple vendors with one `POST /v3/bills/bulk` request.

See Bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.create_bulk_bills(
        [
            BillCreateRequestDto(
                vendor_id="some example string",
                due_date=date(2024, 1, 15),
                bill_line_items=[BillCreateLineItemDto()],
                invoice=Invoice1(invoice_number="some example string", invoice_date=date(2024, 1, 15)),
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type list[BillWithoutApproversResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBulkBillsErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.create_bulk_bills(
        [
            BillCreateRequestDto(
                vendor_id="some example string",
                due_date=date(2024, 1, 15),
                bill_line_items=[BillCreateLineItemDto()],
                invoice=Invoice1(invoice_number="some example string", invoice_date=date(2024, 1, 15)),
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type list[BillWithoutApproversResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBulkBillsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[BillCreateRequestDto](divvy/models/bill_create_request_dto.py) \| [BillCreateRequestDtoDict](divvy/models/bill_create_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[BillWithoutApproversResponseDto](divvy/models/bill_without_approvers_response_dto.py)&#93;</code> -- Create multiple bills response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBulkBillsErrorBody](divvy/errors/create_bulk_bills_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bill(bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillReadResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing bill.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.get_bill("some example string", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type BillReadResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.get_bill(
        "some example string", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type BillReadResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillReadResponseDto](divvy/models/bill_read_response_dto.py)</code> -- Get bill details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetBillErrorBody](divvy/errors/get_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bills(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bill objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.list_bills(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{bill_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillsErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.list_bills(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{bill_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBillResponseDto](divvy/models/list_bill_response_dto.py)</code> -- Get list of bills response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBillsErrorBody](divvy/errors/list_bills_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def record_payment(body: RecordPaymentRequestDto | RecordPaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecordPaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an offline AP payment made to a vendor.

An offline payment is a payment made outside the BILL system. BILL simply applies the recorded payment amount to one or more bills for the vendor. BILL does not process the payment or transfer funds to the vendor when you record an AP payment with this endpoint.

Use `POST /v3/payments` to create a payment with the BILL system. When you pay with `POST /v3/payments`, BILL processes the payment and transfers funds from your BILL organization funding account to the vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.record_payment(
        RecordPaymentRequestDto(
            vendor_id="some example string",
            process_date=date(2024, 1, 15),
            to_print_check=True,
            payments=[RecordBillPayRequestDto(bill_id="some example string", amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecordPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.record_payment(
        RecordPaymentRequestDto(
            vendor_id="some example string",
            process_date=date(2024, 1, 15),
            to_print_check=True,
            payments=[RecordBillPayRequestDto(bill_id="some example string", amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecordPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecordPaymentRequestDto](divvy/models/record_payment_request_dto.py) \| [RecordPaymentRequestDtoDict](divvy/models/record_payment_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordPaymentResponseDto](divvy/models/record_payment_response_dto.py)</code> -- Record AP payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RecordPaymentErrorBody](divvy/errors/record_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_bill(bill_id: str, body: BillReplaceRequestDto | BillReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a bill. You can also update other bill details.

You can use the PUT operation to add, remove, or replace the number of line items in a bill. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the bill.
* When you omit an existing line item `id`, the line item is removed from the bill.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.replace_bill(
        "{{bill_id}}",
        BillReplaceRequestDto(
            vendor_id="some example string",
            due_date=date(2024, 1, 15),
            bill_line_items=[BillReplaceLineItemDto()],
            invoice=Invoice1(invoice_number="some example string", invoice_date=date(2024, 1, 15)),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.replace_bill(
        "{{bill_id}}",
        BillReplaceRequestDto(
            vendor_id="some example string",
            due_date=date(2024, 1, 15),
            bill_line_items=[BillReplaceLineItemDto()],
            invoice=Invoice1(invoice_number="some example string", invoice_date=date(2024, 1, 15)),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BillReplaceRequestDto](divvy/models/bill_replace_request_dto.py) \| [BillReplaceRequestDtoDict](divvy/models/bill_replace_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillResponseDto](divvy/models/bill_response_dto.py)</code> -- Replace a bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ReplaceBillErrorBody](divvy/errors/replace_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_bill(bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillWithoutApproversResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived bill. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored bills. There is no change when you restore a restored bill.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.restore_bill("{{bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type BillWithoutApproversResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.restore_bill(
        "{{bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type BillWithoutApproversResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillWithoutApproversResponseDto](divvy/models/bill_without_approvers_response_dto.py)</code> -- Restore an archived bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreBillErrorBody](divvy/errors/restore_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bill(bill_id: str, body: BillUpdateRequestDto | BillUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a bill line item. You can also update other bill details.

You can use the PATCH operation to modify line item details, such as `amount` and `description`. The bill line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bills.update_bill(
        "{{bill_id}}",
        BillUpdateRequestDto(payment_term_id="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBillErrorBody
```

**Async**

```python
try:
    response = await async_client.bills.update_bill(
        "{{bill_id}}",
        BillUpdateRequestDto(payment_term_id="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BillUpdateRequestDto](divvy/models/bill_update_request_dto.py) \| [BillUpdateRequestDtoDict](divvy/models/bill_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillResponseDto](divvy/models/bill_response_dto.py)</code> -- Update a bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateBillErrorBody](divvy/errors/update_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Budgets

> Source: [Budgets](divvy/apis/budgets.py)

<details>
<summary><code>def create_budget(body: BudgetCreateDto | BudgetCreateDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new budget for a company.

See Budgets and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.create_budget(
        BudgetCreateDto(
            name="some example string", owners=["some example string"], recurring_interval=PeriodIntervalType.NONE
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type BudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.create_budget(
        BudgetCreateDto(
            name="some example string", owners=["some example string"], recurring_interval=PeriodIntervalType.NONE
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type BudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BudgetCreateDto](divvy/models/budget_create_dto.py) \| [BudgetCreateDtoDict](divvy/models/budget_create_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetResponseDto](divvy/models/budget_response_dto.py)</code> -- Create a budget response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBudgetErrorBody](divvy/errors/create_budget_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_budget(budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing budget. A deleted budget cannot be restored. The deleted budget is not available in the list of budgets.

**Note**:
* While you cannot restore a deleted budget with the API, you can unretire budgets in the BILL web app and mobile app. An unretired budget is active and is available for use.
* A one-time budget can be unretired at any time. A `recurringInterval` budget can be unretired within one interval. For example, if a `MONTHLY` budget is retired in January, you can unretire it in February. You cannot unretire this budget in March or any later month.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.budgets.delete_budget("{{se_budget_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBudgetErrorBody
```

**Async**

```python
try:
    await async_client.budgets.delete_budget("{{se_budget_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteBudgetErrorBody](divvy/errors/delete_budget_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_budget_member(budget_id: str, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a user member from an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.budgets.delete_budget_member("{{se_budget_uuid}}", "{{se_user_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBudgetMemberErrorBody
```

**Async**

```python
try:
    await async_client.budgets.delete_budget_member("{{se_budget_uuid}}", "{{se_user_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBudgetMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteBudgetMemberErrorBody](divvy/errors/delete_budget_member_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_budget(budget_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.get_budget("{{se_budget_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type BudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.get_budget("{{se_budget_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type BudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetResponseDto](divvy/models/budget_response_dto.py)</code> -- Get budget details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetBudgetErrorBody](divvy/errors/get_budget_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_budget_member(budget_id: str, user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetMemberResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a user member assigned to an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.get_budget_member("{{se_budget_uuid}}", "{{se_user_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type BudgetMemberResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBudgetMemberErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.get_budget_member(
        "{{se_budget_uuid}}", "{{se_user_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type BudgetMemberResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBudgetMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetMemberResponseDto](divvy/models/budget_member_response_dto.py)</code> -- Get budget member details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetBudgetMemberErrorBody](divvy/errors/get_budget_member_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_budget_members(budget_id: str, *, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoBudgetMemberResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user members assigned to an existing budget. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.list_budget_members(
        "{{se_budget_uuid}}", max_=10, sort="spent:desc", filters="retired:eq:false", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoBudgetMemberResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetMembersErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.list_budget_members(
        "{{se_budget_uuid}}", max_=10, sort="spent:desc", filters="retired:eq:false", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoBudgetMemberResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetMembersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoBudgetMemberResponseDto](divvy/models/pagination_response_dto_budget_member_response_dto.py)</code> -- Get list of budget members response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBudgetMembersErrorBody](divvy/errors/list_budget_members_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_budgets(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoBudgetResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of budget objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.list_budgets(
        max_=10, sort="spent:desc", filters="budgetIds:eq:{{se_budget_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoBudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetsErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.list_budgets(
        max_=10, sort="spent:desc", filters="budgetIds:eq:{{se_budget_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoBudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBudgetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoBudgetResponseDto](divvy/models/pagination_response_dto_budget_response_dto.py)</code> -- Get list of budgets response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBudgetsErrorBody](divvy/errors/list_budgets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_budget(budget_id: str, body: BudgetUpdateDto | BudgetUpdateDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.update_budget("{{se_budget_uuid}}", BudgetUpdateDto(), api_token="{{api_token}}")
    # TODO: Handle 'response' of type BudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBudgetErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.update_budget(
        "{{se_budget_uuid}}", BudgetUpdateDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type BudgetResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBudgetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BudgetUpdateDto](divvy/models/budget_update_dto.py) \| [BudgetUpdateDtoDict](divvy/models/budget_update_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetResponseDto](divvy/models/budget_response_dto.py)</code> -- Update a budget response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateBudgetErrorBody](divvy/errors/update_budget_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_budget_member(budget_id: str, user_id: str, body: BudgetMemberUpsertRequestDto | BudgetMemberUpsertRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BudgetMemberResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a new user member to an existing budget. You can also update details about an existing user member assigned to the budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.upsert_budget_member(
        "{{se_budget_uuid}}", "{{se_user_uuid}}", BudgetMemberUpsertRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type BudgetMemberResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpsertBudgetMemberErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.upsert_budget_member(
        "{{se_budget_uuid}}", "{{se_user_uuid}}", BudgetMemberUpsertRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type BudgetMemberResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpsertBudgetMemberErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BudgetMemberUpsertRequestDto](divvy/models/budget_member_upsert_request_dto.py) \| [BudgetMemberUpsertRequestDtoDict](divvy/models/budget_member_upsert_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BudgetMemberResponseDto](divvy/models/budget_member_response_dto.py)</code> -- Add or update a budget member response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpsertBudgetMemberErrorBody](divvy/errors/upsert_budget_member_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upsert_bulk_budget_users(budget_id: str, body: BudgetMemberBulkUpsertRequestDto | BudgetMemberBulkUpsertRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SpendStatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple user members assigned to an existing budget.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.budgets.upsert_bulk_budget_users(
        "{{se_budget_uuid}}",
        BudgetMemberBulkUpsertRequestDto(members=[BudgetMemberBulkUpsertDto(user_id="some example string")]),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SpendStatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpsertBulkBudgetUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.budgets.upsert_bulk_budget_users(
        "{{se_budget_uuid}}",
        BudgetMemberBulkUpsertRequestDto(members=[BudgetMemberBulkUpsertDto(user_id="some example string")]),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SpendStatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpsertBulkBudgetUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>budget_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BudgetMemberBulkUpsertRequestDto](divvy/models/budget_member_bulk_upsert_request_dto.py) \| [BudgetMemberBulkUpsertRequestDtoDict](divvy/models/budget_member_bulk_upsert_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendStatusDto](divvy/models/spend_status_dto.py)</code> -- Update multiple budget members response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpsertBulkBudgetUsersErrorBody](divvy/errors/upsert_bulk_budget_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](divvy/apis/cards.py)

<details>
<summary><code>def create_budget_card(body: CreateCardRequestDto | CreateCardRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new vendor card.

See Vendor cards in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cards.create_budget_card(
        CreateCardRequestDto(
            name="some example string", user_id="some example string", budget_id="some example string"
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBudgetCardErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.create_budget_card(
        CreateCardRequestDto(
            name="some example string", user_id="some example string", budget_id="some example string"
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBudgetCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCardRequestDto](divvy/models/create_card_request_dto.py) \| [CreateCardRequestDtoDict](divvy/models/create_card_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](divvy/models/card_response_dto.py)</code> -- Create a vendor card response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBudgetCardErrorBody](divvy/errors/create_budget_card_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_card(card_id: str, *, reason: UserDeletedReasonTypeOrStr | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not available in the list of cards.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.cards.delete_card("{{se_card_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCardErrorBody
```

**Async**

```python
try:
    await async_client.cards.delete_card("{{se_card_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_id</code> | <code>str</code> | Value sent with the request. |
| <code>reason</code> | <code>[UserDeletedReasonTypeOrStr](divvy/models/enums/user_deleted_reason_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteCardErrorBody](divvy/errors/delete_card_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def freeze_card(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Freeze an existing vendor card.

You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cards.freeze_card("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FreezeCardErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.freeze_card("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FreezeCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](divvy/models/card_response_dto.py)</code> -- Freeze a vendor card response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[FreezeCardErrorBody](divvy/errors/freeze_card_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_card(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor card.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cards.get_card("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCardErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.get_card("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](divvy/models/card_response_dto.py)</code> -- Get vendor card details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCardErrorBody](divvy/errors/get_card_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pan_jwt(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardPanTokenResponseDto</code></summary>

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
    response = client.cards.get_pan_jwt("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardPanTokenResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPanJwtErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.get_pan_jwt("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardPanTokenResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPanJwtErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardPanTokenResponseDto](divvy/models/card_pan_token_response_dto.py)</code> -- Get a PAN JWT token response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPanJwtErrorBody](divvy/errors/get_pan_jwt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_cards(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoCardResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cards.list_cards(
        max_=10, sort="status", filters="cardIds:eq:{{se_card_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCardsErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.list_cards(
        max_=10, sort="status", filters="cardIds:eq:{{se_card_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCardResponseDto](divvy/models/pagination_response_dto_card_response_dto.py)</code> -- Get list of cards response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCardsErrorBody](divvy/errors/list_cards_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unfreeze_card(card_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cards.unfreeze_card("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnfreezeCardErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.unfreeze_card("{{se_card_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnfreezeCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](divvy/models/card_response_dto.py)</code> -- Unfreeze a vendor card response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UnfreezeCardErrorBody](divvy/errors/unfreeze_card_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_card(card_id: str, body: UpdateCardRequestDto | UpdateCardRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing vendor card.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.cards.update_card("{{se_card_uuid}}", UpdateCardRequestDto(), api_token="{{api_token}}")
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCardErrorBody
```

**Async**

```python
try:
    response = await async_client.cards.update_card(
        "{{se_card_uuid}}", UpdateCardRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type CardResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCardErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateCardRequestDto](divvy/models/update_card_request_dto.py) \| [UpdateCardRequestDtoDict](divvy/models/update_card_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardResponseDto](divvy/models/card_response_dto.py)</code> -- Update a vendor card response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateCardErrorBody](divvy/errors/update_card_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ClassificationsApi

> Source: [ClassificationsApi](divvy/apis/classifications_api.py)

<details>
<summary><code>def archive_classification_accounting_class(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing accounting class. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](divvy/models/classification_accounting_class_response_dto.py)</code> -- Archive an accounting class response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationAccountingClassErrorBody](divvy/errors/archive_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_classification_chart_of_accounts(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing chart of accounts. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](divvy/models/classification_chart_of_accounts_response_dto.py)</code> -- Archive a chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationChartOfAccountsErrorBody](divvy/errors/archive_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_classification_department(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing department. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](divvy/models/classification_department_response_dto.py)</code> -- Archive a department response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationDepartmentErrorBody](divvy/errors/archive_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_classification_employee(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing employee. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](divvy/models/classification_employee_response_dto.py)</code> -- Archive an employee response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationEmployeeErrorBody](divvy/errors/archive_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_classification_item(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing item. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](divvy/models/classification_item_response_dto.py)</code> -- Archive an item response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationItemErrorBody](divvy/errors/archive_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_classification_job(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing job. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](divvy/models/classification_job_response_dto.py)</code> -- Archive a job response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationJobErrorBody](divvy/errors/archive_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_classification_location(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing location. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.archive_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.archive_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](divvy/models/classification_location_response_dto.py)</code> -- Archive a location response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveClassificationLocationErrorBody](divvy/errors/archive_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_accounting_class(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple accounting classes with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](divvy/models/classification_accounting_class_bulk_response_dto.py)</code> -- Archive multiple accounting classes response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationAccountingClassErrorBody](divvy/errors/bulk_archive_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_chart_of_accounts(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple chart of accounts with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](divvy/models/classification_chart_of_accounts_bulk_response_dto.py)</code> -- Archive multiple chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationChartOfAccountsErrorBody](divvy/errors/bulk_archive_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_department(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple departments with one API request. In the response, the `archived` field is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](divvy/models/classification_department_bulk_response_dto.py)</code> -- Archive multiple departments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationDepartmentErrorBody](divvy/errors/bulk_archive_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_employee(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple employees with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](divvy/models/classification_employee_bulk_response_dto.py)</code> -- Archive multiple employees response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationEmployeeErrorBody](divvy/errors/bulk_archive_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_item(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple items with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](divvy/models/classification_item_bulk_response_dto.py)</code> -- Archive multiple items response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationItemErrorBody](divvy/errors/bulk_archive_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_job(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple jobs with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](divvy/models/classification_job_bulk_response_dto.py)</code> -- Archive multiple jobs response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationJobErrorBody](divvy/errors/bulk_archive_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_classification_location(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple locations with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_archive_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_archive_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](divvy/models/classification_location_bulk_response_dto.py)</code> -- Archive multiple locations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveClassificationLocationErrorBody](divvy/errors/bulk_archive_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_accounting_class(body: list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one `POST /v3/classifications/accounting-classes/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_accounting_class(
        [CreateClassificationAccountingClassRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_accounting_class(
        [CreateClassificationAccountingClassRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationAccountingClassRequestDto](divvy/models/create_classification_accounting_class_request_dto.py) \| [CreateClassificationAccountingClassRequestDtoDict](divvy/models/create_classification_accounting_class_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](divvy/models/classification_accounting_class_bulk_response_dto.py)</code> -- Create multiple accounting classes response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationAccountingClassErrorBody](divvy/errors/bulk_create_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_chart_of_accounts(body: list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one `POST /v3/classifications/chart-of-accounts/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_chart_of_accounts(
        [CreateClassificationChartOfAccountsRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_chart_of_accounts(
        [CreateClassificationChartOfAccountsRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationChartOfAccountsRequestDto](divvy/models/create_classification_chart_of_accounts_request_dto.py) \| [CreateClassificationChartOfAccountsRequestDtoDict](divvy/models/create_classification_chart_of_accounts_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](divvy/models/classification_chart_of_accounts_bulk_response_dto.py)</code> -- Create multiple chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationChartOfAccountsErrorBody](divvy/errors/bulk_create_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_department(body: list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple departments with one API request. You can create up to 50 departments with one `POST /v3/classifications/departments/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_department(
        [CreateClassificationDepartmentRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_department(
        [CreateClassificationDepartmentRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationDepartmentRequestDto](divvy/models/create_classification_department_request_dto.py) \| [CreateClassificationDepartmentRequestDtoDict](divvy/models/create_classification_department_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](divvy/models/classification_department_bulk_response_dto.py)</code> -- Create multiple departments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationDepartmentErrorBody](divvy/errors/bulk_create_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_employee(body: list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple employees with one API request. You can create up to 50 employees with one `POST /v3/classifications/employees/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_employee(
        [CreateClassificationEmployeeRequestDto(first_name="some example string", last_name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_employee(
        [CreateClassificationEmployeeRequestDto(first_name="some example string", last_name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationEmployeeRequestDto](divvy/models/create_classification_employee_request_dto.py) \| [CreateClassificationEmployeeRequestDtoDict](divvy/models/create_classification_employee_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](divvy/models/classification_employee_bulk_response_dto.py)</code> -- Create multiple employees response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationEmployeeErrorBody](divvy/errors/bulk_create_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_item(body: list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple items with one API request. You can create up to 50 items with one `POST /v3/classifications/items/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_item(
        [CreateClassificationItemRequestDto(type_=ItemTypeRequest.UNKNOWN, name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_item(
        [CreateClassificationItemRequestDto(type_=ItemTypeRequest.UNKNOWN, name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationItemRequestDto](divvy/models/create_classification_item_request_dto.py) \| [CreateClassificationItemRequestDtoDict](divvy/models/create_classification_item_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](divvy/models/classification_item_bulk_response_dto.py)</code> -- Create multiple items response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationItemErrorBody](divvy/errors/bulk_create_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_job(body: list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple jobs with one API request. You can create up to 50 jobs with one `POST /v3/classifications/jobs/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_job(
        [CreateClassificationJobRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_job(
        [CreateClassificationJobRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationJobRequestDto](divvy/models/create_classification_job_request_dto.py) \| [CreateClassificationJobRequestDtoDict](divvy/models/create_classification_job_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](divvy/models/classification_job_bulk_response_dto.py)</code> -- Create multiple jobs response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationJobErrorBody](divvy/errors/bulk_create_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_classification_location(body: list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple locations with one API request. You can create up to 50 locations with one `POST /v3/classifications/locations/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_create_classification_location(
        [CreateClassificationLocationRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_create_classification_location(
        [CreateClassificationLocationRequestDto(name="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateClassificationLocationRequestDto](divvy/models/create_classification_location_request_dto.py) \| [CreateClassificationLocationRequestDtoDict](divvy/models/create_classification_location_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](divvy/models/classification_location_bulk_response_dto.py)</code> -- Create multiple locations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateClassificationLocationErrorBody](divvy/errors/bulk_create_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_accounting_class(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple accounting classes with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](divvy/models/classification_accounting_class_bulk_response_dto.py)</code> -- Restore multiple accounting classes response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationAccountingClassErrorBody](divvy/errors/bulk_restore_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_chart_of_accounts(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple chart of accounts with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](divvy/models/classification_chart_of_accounts_bulk_response_dto.py)</code> -- Restore multiple chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationChartOfAccountsErrorBody](divvy/errors/bulk_restore_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_department(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple departments with one API request. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](divvy/models/classification_department_bulk_response_dto.py)</code> -- Restore multiple departments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationDepartmentErrorBody](divvy/errors/bulk_restore_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_employee(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple employees with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](divvy/models/classification_employee_bulk_response_dto.py)</code> -- Restore multiple employees response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationEmployeeErrorBody](divvy/errors/bulk_restore_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_item(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple items with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](divvy/models/classification_item_bulk_response_dto.py)</code> -- Restore multiple items response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationItemErrorBody](divvy/errors/bulk_restore_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_job(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple jobs with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](divvy/models/classification_job_bulk_response_dto.py)</code> -- Restore multiple jobs response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationJobErrorBody](divvy/errors/bulk_restore_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_classification_location(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple locations with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_restore_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_restore_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](divvy/models/classification_location_bulk_response_dto.py)</code> -- Restore multiple locations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreClassificationLocationErrorBody](divvy/errors/bulk_restore_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_accounting_class(body: list[UpdateClassificationAccountingClassWithIdRequestDto | UpdateClassificationAccountingClassWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple accounting classes with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_accounting_class(
        [UpdateClassificationAccountingClassWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_accounting_class(
        [UpdateClassificationAccountingClassWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationAccountingClassWithIdRequestDto](divvy/models/update_classification_accounting_class_with_id_request_dto.py) \| [UpdateClassificationAccountingClassWithIdRequestDtoDict](divvy/models/update_classification_accounting_class_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassBulkResponseDto](divvy/models/classification_accounting_class_bulk_response_dto.py)</code> -- Update multiple accounting classes response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationAccountingClassErrorBody](divvy/errors/bulk_update_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_chart_of_accounts(body: list[UpdateClassificationChartOfAccountsWithIdRequestDto | UpdateClassificationChartOfAccountsWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple chart of accounts with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_chart_of_accounts(
        [UpdateClassificationChartOfAccountsWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_chart_of_accounts(
        [UpdateClassificationChartOfAccountsWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationChartOfAccountsWithIdRequestDto](divvy/models/update_classification_chart_of_accounts_with_id_request_dto.py) \| [UpdateClassificationChartOfAccountsWithIdRequestDtoDict](divvy/models/update_classification_chart_of_accounts_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsBulkResponseDto](divvy/models/classification_chart_of_accounts_bulk_response_dto.py)</code> -- Update multiple chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationChartOfAccountsErrorBody](divvy/errors/bulk_update_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_department(body: list[UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update multiple departments with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_department(
        [UpdateClassificationDepartmentWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_department(
        [UpdateClassificationDepartmentWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationDepartmentWithIdRequestDto](divvy/models/update_classification_department_with_id_request_dto.py) \| [UpdateClassificationDepartmentWithIdRequestDtoDict](divvy/models/update_classification_department_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentBulkResponseDto](divvy/models/classification_department_bulk_response_dto.py)</code> -- Update multiple departments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationDepartmentErrorBody](divvy/errors/bulk_update_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_employee(body: list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple employees with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_employee(
        [UpdateClassificationEmployeeWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_employee(
        [UpdateClassificationEmployeeWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationEmployeeWithIdRequestDto](divvy/models/update_classification_employee_with_id_request_dto.py) \| [UpdateClassificationEmployeeWithIdRequestDtoDict](divvy/models/update_classification_employee_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeBulkResponseDto](divvy/models/classification_employee_bulk_response_dto.py)</code> -- Update multiple employees response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationEmployeeErrorBody](divvy/errors/bulk_update_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_item(body: list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple items with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_item(
        [UpdateClassificationItemWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_item(
        [UpdateClassificationItemWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationItemBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationItemWithIdRequestDto](divvy/models/update_classification_item_with_id_request_dto.py) \| [UpdateClassificationItemWithIdRequestDtoDict](divvy/models/update_classification_item_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemBulkResponseDto](divvy/models/classification_item_bulk_response_dto.py)</code> -- Update multiple items response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationItemErrorBody](divvy/errors/bulk_update_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_job(body: list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple jobs with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_job(
        [UpdateClassificationJobWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_job(
        [UpdateClassificationJobWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationJobBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationJobWithIdRequestDto](divvy/models/update_classification_job_with_id_request_dto.py) \| [UpdateClassificationJobWithIdRequestDtoDict](divvy/models/update_classification_job_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobBulkResponseDto](divvy/models/classification_job_bulk_response_dto.py)</code> -- Update multiple jobs response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationJobErrorBody](divvy/errors/bulk_update_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_classification_location(body: list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about multiple locations with one API request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.bulk_update_classification_location(
        [UpdateClassificationLocationWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.bulk_update_classification_location(
        [UpdateClassificationLocationWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateClassificationLocationWithIdRequestDto](divvy/models/update_classification_location_with_id_request_dto.py) \| [UpdateClassificationLocationWithIdRequestDtoDict](divvy/models/update_classification_location_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationBulkResponseDto](divvy/models/classification_location_bulk_response_dto.py)</code> -- Update multiple locations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateClassificationLocationErrorBody](divvy/errors/bulk_update_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_accounting_class(body: CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new accounting class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_accounting_class(
        CreateClassificationAccountingClassRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_accounting_class(
        CreateClassificationAccountingClassRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationAccountingClassRequestDto](divvy/models/create_classification_accounting_class_request_dto.py) \| [CreateClassificationAccountingClassRequestDtoDict](divvy/models/create_classification_accounting_class_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](divvy/models/classification_accounting_class_response_dto.py)</code> -- Create an accounting class response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationAccountingClassErrorBody](divvy/errors/create_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_chart_of_accounts(body: CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new chart of accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_chart_of_accounts(
        CreateClassificationChartOfAccountsRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_chart_of_accounts(
        CreateClassificationChartOfAccountsRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationChartOfAccountsRequestDto](divvy/models/create_classification_chart_of_accounts_request_dto.py) \| [CreateClassificationChartOfAccountsRequestDtoDict](divvy/models/create_classification_chart_of_accounts_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](divvy/models/classification_chart_of_accounts_response_dto.py)</code> -- Create a chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationChartOfAccountsErrorBody](divvy/errors/create_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_department(body: CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new department.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_department(
        CreateClassificationDepartmentRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_department(
        CreateClassificationDepartmentRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationDepartmentRequestDto](divvy/models/create_classification_department_request_dto.py) \| [CreateClassificationDepartmentRequestDtoDict](divvy/models/create_classification_department_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](divvy/models/classification_department_response_dto.py)</code> -- Create a department response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationDepartmentErrorBody](divvy/errors/create_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_employee(body: CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new employee.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_employee(
        CreateClassificationEmployeeRequestDto(first_name="some example string", last_name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_employee(
        CreateClassificationEmployeeRequestDto(first_name="some example string", last_name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationEmployeeRequestDto](divvy/models/create_classification_employee_request_dto.py) \| [CreateClassificationEmployeeRequestDtoDict](divvy/models/create_classification_employee_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](divvy/models/classification_employee_response_dto.py)</code> -- Create an employee response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationEmployeeErrorBody](divvy/errors/create_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_item(body: CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new item.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_item(
        CreateClassificationItemRequestDto(type_=ItemTypeRequest.UNKNOWN, name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_item(
        CreateClassificationItemRequestDto(type_=ItemTypeRequest.UNKNOWN, name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationItemRequestDto](divvy/models/create_classification_item_request_dto.py) \| [CreateClassificationItemRequestDtoDict](divvy/models/create_classification_item_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](divvy/models/classification_item_response_dto.py)</code> -- Create an item response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationItemErrorBody](divvy/errors/create_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_job(body: CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_job(
        CreateClassificationJobRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_job(
        CreateClassificationJobRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationJobRequestDto](divvy/models/create_classification_job_request_dto.py) \| [CreateClassificationJobRequestDtoDict](divvy/models/create_classification_job_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](divvy/models/classification_job_response_dto.py)</code> -- Create a job response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationJobErrorBody](divvy/errors/create_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_classification_location(body: CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.create_classification_location(
        CreateClassificationLocationRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.create_classification_location(
        CreateClassificationLocationRequestDto(name="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateClassificationLocationRequestDto](divvy/models/create_classification_location_request_dto.py) \| [CreateClassificationLocationRequestDtoDict](divvy/models/create_classification_location_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](divvy/models/classification_location_response_dto.py)</code> -- Create a location response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateClassificationLocationErrorBody](divvy/errors/create_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_accounting_class(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing accounting class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](divvy/models/classification_accounting_class_response_dto.py)</code> -- Get accounting class details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationAccountingClassErrorBody](divvy/errors/get_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_chart_of_accounts(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing chart of accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](divvy/models/classification_chart_of_accounts_response_dto.py)</code> -- Get chart of accounts details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationChartOfAccountsErrorBody](divvy/errors/get_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_department(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing department.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](divvy/models/classification_department_response_dto.py)</code> -- Get department details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationDepartmentErrorBody](divvy/errors/get_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_employee(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing employee.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](divvy/models/classification_employee_response_dto.py)</code> -- Get employee details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationEmployeeErrorBody](divvy/errors/get_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_item(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing item.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](divvy/models/classification_item_response_dto.py)</code> -- Get item details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationItemErrorBody](divvy/errors/get_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_job(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](divvy/models/classification_job_response_dto.py)</code> -- Get job details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationJobErrorBody](divvy/errors/get_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_classification_location(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.get_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.get_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](divvy/models/classification_location_response_dto.py)</code> -- Get location details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetClassificationLocationErrorBody](divvy/errors/get_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_accounting_classes(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationAccountingClassResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of accounting class objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_accounting_classes(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{accounting_class_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationAccountingClassesErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_accounting_classes(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{accounting_class_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationAccountingClassesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationAccountingClassResponseDto](divvy/models/list_response_dto_classification_accounting_class_response_dto.py)</code> -- Get list of accounting classes response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationAccountingClassesErrorBody](divvy/errors/list_classification_accounting_classes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_chart_of_accounts(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationChartOfAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_chart_of_accounts(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{chart_of_accounts_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_chart_of_accounts(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{chart_of_accounts_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationChartOfAccountsResponseDto](divvy/models/list_response_dto_classification_chart_of_accounts_response_dto.py)</code> -- Get list of chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationChartOfAccountsErrorBody](divvy/errors/list_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_departments(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationDepartmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of department objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_departments(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{department_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationDepartmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_departments(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{department_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationDepartmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationDepartmentResponseDto](divvy/models/list_response_dto_classification_department_response_dto.py)</code> -- Get list of classification departments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationDepartmentsErrorBody](divvy/errors/list_classification_departments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_employees(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationEmployeeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of employee objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_employees(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{employee_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationEmployeesErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_employees(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{employee_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationEmployeesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationEmployeeResponseDto](divvy/models/list_response_dto_classification_employee_response_dto.py)</code> -- Get list of employees response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationEmployeesErrorBody](divvy/errors/list_classification_employees_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_items(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationItemResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of item objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_items(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{item_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationItemsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_items(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{item_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationItemsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationItemResponseDto](divvy/models/list_response_dto_classification_item_response_dto.py)</code> -- Get list of items response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationItemsErrorBody](divvy/errors/list_classification_items_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_jobs(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationJobResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of job objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_jobs(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{job_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_jobs(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{job_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationJobResponseDto](divvy/models/list_response_dto_classification_job_response_dto.py)</code> -- Get list of jobs response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationJobsErrorBody](divvy/errors/list_classification_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_classification_locations(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoClassificationLocationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of location objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.list_classification_locations(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{location_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationLocationsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.list_classification_locations(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{location_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListClassificationLocationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoClassificationLocationResponseDto](divvy/models/list_response_dto_classification_location_response_dto.py)</code> -- Get list of locations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListClassificationLocationsErrorBody](divvy/errors/list_classification_locations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_accounting_class(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived accounting class. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_accounting_class(
        "{{accounting_class_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](divvy/models/classification_accounting_class_response_dto.py)</code> -- Restore an accounting class response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationAccountingClassErrorBody](divvy/errors/restore_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_chart_of_accounts(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived chart of accounts. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](divvy/models/classification_chart_of_accounts_response_dto.py)</code> -- Restore a chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationChartOfAccountsErrorBody](divvy/errors/restore_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_department(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived department. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_department(
        "{{department_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](divvy/models/classification_department_response_dto.py)</code> -- Restore a department response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationDepartmentErrorBody](divvy/errors/restore_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_employee(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived employee. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_employee(
        "{{employee_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](divvy/models/classification_employee_response_dto.py)</code> -- Restore an archived employee response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationEmployeeErrorBody](divvy/errors/restore_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_item(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived item. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_item(
        "{{item_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](divvy/models/classification_item_response_dto.py)</code> -- Restore classification item response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationItemErrorBody](divvy/errors/restore_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_job(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived job. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_job(
        "{{job_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](divvy/models/classification_job_response_dto.py)</code> -- Restore an archived job response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationJobErrorBody](divvy/errors/restore_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_classification_location(id_: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived location. In the response, the `archived` field is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.restore_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.restore_classification_location(
        "{{location_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](divvy/models/classification_location_response_dto.py)</code> -- Restore an archived location response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreClassificationLocationErrorBody](divvy/errors/restore_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_accounting_class(id_: str, body: UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationAccountingClassResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing accounting class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_accounting_class(
        "{{accounting_class_id}}",
        UpdateClassificationAccountingClassRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationAccountingClassErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_accounting_class(
        "{{accounting_class_id}}",
        UpdateClassificationAccountingClassRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationAccountingClassResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationAccountingClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationAccountingClassRequestDto](divvy/models/update_classification_accounting_class_request_dto.py) \| [UpdateClassificationAccountingClassRequestDtoDict](divvy/models/update_classification_accounting_class_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationAccountingClassResponseDto](divvy/models/classification_accounting_class_response_dto.py)</code> -- Update an accounting class response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationAccountingClassErrorBody](divvy/errors/update_classification_accounting_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_chart_of_accounts(id_: str, body: UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationChartOfAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing chart of accounts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}",
        UpdateClassificationChartOfAccountsRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationChartOfAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_chart_of_accounts(
        "{{chart_of_accounts_id}}",
        UpdateClassificationChartOfAccountsRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationChartOfAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationChartOfAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationChartOfAccountsRequestDto](divvy/models/update_classification_chart_of_accounts_request_dto.py) \| [UpdateClassificationChartOfAccountsRequestDtoDict](divvy/models/update_classification_chart_of_accounts_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationChartOfAccountsResponseDto](divvy/models/classification_chart_of_accounts_response_dto.py)</code> -- Update a chart of accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationChartOfAccountsErrorBody](divvy/errors/update_classification_chart_of_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_department(id_: str, body: UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationDepartmentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing department.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_department(
        "{{department_id}}",
        UpdateClassificationDepartmentRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationDepartmentErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_department(
        "{{department_id}}",
        UpdateClassificationDepartmentRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationDepartmentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationDepartmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationDepartmentRequestDto](divvy/models/update_classification_department_request_dto.py) \| [UpdateClassificationDepartmentRequestDtoDict](divvy/models/update_classification_department_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationDepartmentResponseDto](divvy/models/classification_department_response_dto.py)</code> -- Update a department response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationDepartmentErrorBody](divvy/errors/update_classification_department_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_employee(id_: str, body: UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationEmployeeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing employee.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_employee(
        "{{employee_id}}",
        UpdateClassificationEmployeeRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationEmployeeErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_employee(
        "{{employee_id}}",
        UpdateClassificationEmployeeRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationEmployeeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationEmployeeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationEmployeeRequestDto](divvy/models/update_classification_employee_request_dto.py) \| [UpdateClassificationEmployeeRequestDtoDict](divvy/models/update_classification_employee_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationEmployeeResponseDto](divvy/models/classification_employee_response_dto.py)</code> -- Update an employee response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationEmployeeErrorBody](divvy/errors/update_classification_employee_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_item(id_: str, body: UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationItemResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing item.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_item(
        "{{item_id}}", UpdateClassificationItemRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationItemErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_item(
        "{{item_id}}", UpdateClassificationItemRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationItemResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationItemErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationItemRequestDto](divvy/models/update_classification_item_request_dto.py) \| [UpdateClassificationItemRequestDtoDict](divvy/models/update_classification_item_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationItemResponseDto](divvy/models/classification_item_response_dto.py)</code> -- Update an item response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationItemErrorBody](divvy/errors/update_classification_item_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_job(id_: str, body: UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationJobResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_job(
        "{{job_id}}", UpdateClassificationJobRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationJobErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_job(
        "{{job_id}}", UpdateClassificationJobRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ClassificationJobResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationJobRequestDto](divvy/models/update_classification_job_request_dto.py) \| [UpdateClassificationJobRequestDtoDict](divvy/models/update_classification_job_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationJobResponseDto](divvy/models/classification_job_response_dto.py)</code> -- Update a job response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationJobErrorBody](divvy/errors/update_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_classification_location(id_: str, body: UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ClassificationLocationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.classifications_api.update_classification_location(
        "{{location_id}}",
        UpdateClassificationLocationRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationLocationErrorBody
```

**Async**

```python
try:
    response = await async_client.classifications_api.update_classification_location(
        "{{location_id}}",
        UpdateClassificationLocationRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ClassificationLocationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateClassificationLocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateClassificationLocationRequestDto](divvy/models/update_classification_location_request_dto.py) \| [UpdateClassificationLocationRequestDtoDict](divvy/models/update_classification_location_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClassificationLocationResponseDto](divvy/models/classification_location_response_dto.py)</code> -- Update a location response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateClassificationLocationErrorBody](divvy/errors/update_classification_location_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CustomFields

> Source: [CustomFields](divvy/apis/custom_fields.py)

<details>
<summary><code>def create_custom_field(body: CreateCustomFieldRequestDto | CreateCustomFieldRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new custom field.

See Transactions in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.create_custom_field(
        CreateCustomFieldRequestDto(name="some example string", allow_custom_values=True, required=True, global_=True),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type CustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomFieldErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.create_custom_field(
        CreateCustomFieldRequestDto(name="some example string", allow_custom_values=True, required=True, global_=True),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type CustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCustomFieldRequestDto](divvy/models/create_custom_field_request_dto.py) \| [CreateCustomFieldRequestDtoDict](divvy/models/create_custom_field_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponseDto](divvy/models/custom_field_response_dto.py)</code> -- Create a custom field response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomFieldErrorBody](divvy/errors/create_custom_field_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_custom_field_values(custom_field_id: str, body: CreateCustomFieldValueRequestDto | CreateCustomFieldValueRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[CustomFieldValueResponseDto]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new value for an existing custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.create_custom_field_values(
        "{{se_custom_field_uuid}}",
        CreateCustomFieldValueRequestDto(values=["some example string"]),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type list[CustomFieldValueResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomFieldValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.create_custom_field_values(
        "{{se_custom_field_uuid}}",
        CreateCustomFieldValueRequestDto(values=["some example string"]),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type list[CustomFieldValueResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomFieldValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateCustomFieldValueRequestDto](divvy/models/create_custom_field_value_request_dto.py) \| [CreateCustomFieldValueRequestDtoDict](divvy/models/create_custom_field_value_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[CustomFieldValueResponseDto](divvy/models/custom_field_value_response_dto.py)&#93;</code> -- Create a custom field value response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomFieldValuesErrorBody](divvy/errors/create_custom_field_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_field(custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing custom field. A deleted custom field cannot be restored. The deleted custom field is not available in the list of custom fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.custom_fields.delete_custom_field("{{se_custom_field_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomFieldErrorBody
```

**Async**

```python
try:
    await async_client.custom_fields.delete_custom_field("{{se_custom_field_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteCustomFieldErrorBody](divvy/errors/delete_custom_field_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_custom_field_value(custom_field_id: str, body: DeleteCustomFieldValuesRequestDto | DeleteCustomFieldValuesRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing custom field value.

A deleted value cannot be restored. The deleted value is not available in the list of custom field values. In addition, the deleted value cannot be assigned to current or future transactions. The deleted value will continue to be assigned to past transactions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.custom_fields.delete_custom_field_value(
        "{{se_custom_field_uuid}}",
        DeleteCustomFieldValuesRequestDto(custom_field_value_ids=["some example string"]),
        api_token="{{api_token}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomFieldValueErrorBody
```

**Async**

```python
try:
    await async_client.custom_fields.delete_custom_field_value(
        "{{se_custom_field_uuid}}",
        DeleteCustomFieldValuesRequestDto(custom_field_value_ids=["some example string"]),
        api_token="{{api_token}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomFieldValueErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[DeleteCustomFieldValuesRequestDto](divvy/models/delete_custom_field_values_request_dto.py) \| [DeleteCustomFieldValuesRequestDtoDict](divvy/models/delete_custom_field_values_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteCustomFieldValueErrorBody](divvy/errors/delete_custom_field_value_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_field(custom_field_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.get_custom_field("{{se_custom_field_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomFieldErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.get_custom_field("{{se_custom_field_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type CustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponseDto](divvy/models/custom_field_response_dto.py)</code> -- Get custom field details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCustomFieldErrorBody](divvy/errors/get_custom_field_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_custom_field_values(custom_field_id: str, custom_field_value_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldValueResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing custom field value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.get_custom_field_values(
        "{{se_custom_field_uuid}}", "{{se_custom_field_value_uuid01}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type CustomFieldValueResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomFieldValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.get_custom_field_values(
        "{{se_custom_field_uuid}}", "{{se_custom_field_value_uuid01}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type CustomFieldValueResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomFieldValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>custom_field_value_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldValueResponseDto](divvy/models/custom_field_value_response_dto.py)</code> -- Get custom field value details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCustomFieldValuesErrorBody](divvy/errors/get_custom_field_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_field_values(custom_field_id: str, *, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoCustomFieldValueResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field value objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.list_custom_field_values(
        "{{se_custom_field_uuid}}", max_=10, filters="retired:eq:false", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomFieldValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.list_custom_field_values(
        "{{se_custom_field_uuid}}", max_=10, filters="retired:eq:false", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomFieldValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCustomFieldValueResponseDto](divvy/models/pagination_response_dto_custom_field_value_response_dto.py)</code> -- Get list of custom field values response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCustomFieldValuesErrorBody](divvy/errors/list_custom_field_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_custom_fields(*, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoCustomFieldResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.list_custom_fields(
        max_=10, sort="createdTime:desc", filters="retired:eq:false", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomFieldsErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.list_custom_fields(
        max_=10, sort="createdTime:desc", filters="retired:eq:false", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomFieldsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCustomFieldResponseDto](divvy/models/pagination_response_dto_custom_field_response_dto.py)</code> -- Get list of custom fields response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCustomFieldsErrorBody](divvy/errors/list_custom_fields_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_custom_field(custom_field_id: str, body: UpdateCustomFieldRequestDto | UpdateCustomFieldRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomFieldResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing custom field.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.custom_fields.update_custom_field(
        "{{se_custom_field_uuid}}", UpdateCustomFieldRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type CustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomFieldErrorBody
```

**Async**

```python
try:
    response = await async_client.custom_fields.update_custom_field(
        "{{se_custom_field_uuid}}", UpdateCustomFieldRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type CustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomFieldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateCustomFieldRequestDto](divvy/models/update_custom_field_request_dto.py) \| [UpdateCustomFieldRequestDtoDict](divvy/models/update_custom_field_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomFieldResponseDto](divvy/models/custom_field_response_dto.py)</code> -- Update a custom field response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateCustomFieldErrorBody](divvy/errors/update_custom_field_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](divvy/apis/customers.py)

<details>
<summary><code>def archive_customer(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer. In the response, the `archived` field is set as `true`.

You can restore an archived customer with `POST /v3/customers/{customerId}/restore`. There is no change when you archive an archived customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.archive_customer(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.archive_customer(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](divvy/models/customer_response_dto.py)</code> -- Archive a customer response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveCustomerErrorBody](divvy/errors/archive_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_customer_bank_account(customer_id: str, bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer bank account. In the response, the `archived` field is set as `true`. An archived customer bank account cannot be restored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.archive_customer_bank_account(
        "{{customer_id}}", "{{customer_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCustomerBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.archive_customer_bank_account(
        "{{customer_id}}", "{{customer_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCustomerBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](divvy/models/customer_bank_account_response_dto.py)</code> -- Archive a customer bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveCustomerBankAccountErrorBody](divvy/errors/archive_customer_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_customer_contact(customer_id: str, contact_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerContactResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing customer contact. In the response, the `archived` field is set as `true`.

You can restore an archived customer with `POST /v3/customers/{customerId}/contacts/{contactId}/restore`. There is no change when you archive an archived customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.archive_customer_contact(
        "{{customer_id}}", "{{customer_contact_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCustomerContactErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.archive_customer_contact(
        "{{customer_id}}", "{{customer_contact_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCustomerContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](divvy/models/customer_contact_response_dto.py)</code> -- Archive a customer contact response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveCustomerContactErrorBody](divvy/errors/archive_customer_contact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def authorize_to_charge_customer(customer_id: str, body: ChargeAuthorizationRequestDto | ChargeAuthorizationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ChargeAuthorizationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authorize your organization to charge a customer for invoices.

By default, your organization is not authorized to charge a customer. The customer `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.authorize_to_charge_customer(
        "{{customer_id}}",
        ChargeAuthorizationRequestDto(authorized_to_charge=True),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ChargeAuthorizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeToChargeCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.authorize_to_charge_customer(
        "{{customer_id}}",
        ChargeAuthorizationRequestDto(authorized_to_charge=True),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ChargeAuthorizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeToChargeCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ChargeAuthorizationRequestDto](divvy/models/charge_authorization_request_dto.py) \| [ChargeAuthorizationRequestDtoDict](divvy/models/charge_authorization_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChargeAuthorizationResponseDto](divvy/models/charge_authorization_response_dto.py)</code> -- Set charge customer authorization response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[AuthorizeToChargeCustomerErrorBody](divvy/errors/authorize_to_charge_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer(body: CustomerCreateRequestDto | CustomerCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer.

See Customers in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.create_customer(
        CustomerCreateRequestDto(name="some example string", email="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer(
        CustomerCreateRequestDto(name="some example string", email="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CustomerCreateRequestDto](divvy/models/customer_create_request_dto.py) \| [CustomerCreateRequestDtoDict](divvy/models/customer_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](divvy/models/customer_response_dto.py)</code> -- Create a customer response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomerErrorBody](divvy/errors/create_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_bank_account(customer_id: str, body: CreateCustomerBankAccountRequestDto | CreateCustomerBankAccountRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer bank account. When you add customer bank account information, you can charge the customer for invoices.

Creating a customer bank account follows a set of rules.
* **Customer billing address**: The customer `billingAddress` information is required before you can create a customer bank account.
* **Customer bank account verification**: If the customer bank account requires verification, BILL requires up to 2 business days to complete a one-time verification of the bank account.

**Note**: When you add a customer bank account in the production environment, BILL validates the customer routing number before you can charge the customer. You will get an error message if the customer routing number is invalid in production.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.create_customer_bank_account(
        "{{customer_id}}",
        CreateCustomerBankAccountRequestDto(
            name_on_account="some example string",
            routing_number="some example string",
            account_number="some example string",
            type_=BankAccountType.CHECKING,
            owner_type=BankAccountOwnerType.BUSINESS,
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer_bank_account(
        "{{customer_id}}",
        CreateCustomerBankAccountRequestDto(
            name_on_account="some example string",
            routing_number="some example string",
            account_number="some example string",
            type_=BankAccountType.CHECKING,
            owner_type=BankAccountOwnerType.BUSINESS,
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateCustomerBankAccountRequestDto](divvy/models/create_customer_bank_account_request_dto.py) \| [CreateCustomerBankAccountRequestDtoDict](divvy/models/create_customer_bank_account_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](divvy/models/customer_bank_account_response_dto.py)</code> -- Create a customer bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomerBankAccountErrorBody](divvy/errors/create_customer_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_contact(customer_id: str, body: CreateCustomerContactRequestDto | CreateCustomerContactRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerContactResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new customer contact.

When you create a customer contact, BILL enables the customer to sign in to the BILL web app with the `email` value and a random password. The signed-in customer can view invoices, make payments, and manage their account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.create_customer_contact(
        "{{customer_id}}",
        CreateCustomerContactRequestDto(first_name="some example string", email="user@example.com"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerContactErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.create_customer_contact(
        "{{customer_id}}",
        CreateCustomerContactRequestDto(first_name="some example string", email="user@example.com"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateCustomerContactRequestDto](divvy/models/create_customer_contact_request_dto.py) \| [CreateCustomerContactRequestDtoDict](divvy/models/create_customer_contact_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](divvy/models/customer_contact_response_dto.py)</code> -- Create a customer contact response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomerContactErrorBody](divvy/errors/create_customer_contact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.get_customer(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](divvy/models/customer_response_dto.py)</code> -- Get customer details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCustomerErrorBody](divvy/errors/get_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_bank_account(customer_id: str, bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.get_customer_bank_account(
        "{{customer_id}}", "{{customer_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_bank_account(
        "{{customer_id}}", "{{customer_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](divvy/models/customer_bank_account_response_dto.py)</code> -- Get customer bank account details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCustomerBankAccountErrorBody](divvy/errors/get_customer_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_contact(customer_id: str, contact_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerContactResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.get_customer_contact(
        "{{customer_id}}", "{{customer_contact_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerContactErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.get_customer_contact(
        "{{customer_id}}", "{{customer_contact_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](divvy/models/customer_contact_response_dto.py)</code> -- Get customer contact details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCustomerContactErrorBody](divvy/errors/get_customer_contact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_bank_accounts(customer_id: str, *, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoCustomerBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer bank account objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.list_customer_bank_accounts(
        "{{customer_id}}",
        max_=10,
        sort="createdTime:desc",
        filters="status:eq:VERIFIED",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerBankAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customer_bank_accounts(
        "{{customer_id}}",
        max_=10,
        sort="createdTime:desc",
        filters="status:eq:VERIFIED",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerBankAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCustomerBankAccountResponseDto](divvy/models/list_response_dto_customer_bank_account_response_dto.py)</code> -- Get list of customer bank accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCustomerBankAccountsErrorBody](divvy/errors/list_customer_bank_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customer_contacts(customer_id: str, *, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoCustomerContactResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer contact objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.list_customer_contacts(
        "{{customer_id}}",
        max_=10,
        sort="firstName:asc",
        filters="archived:eq:false",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerContactsErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customer_contacts(
        "{{customer_id}}",
        max_=10,
        sort="firstName:asc",
        filters="archived:eq:false",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomerContactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCustomerContactResponseDto](divvy/models/list_response_dto_customer_contact_response_dto.py)</code> -- Get list of customer contacts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCustomerContactsErrorBody](divvy/errors/list_customer_contacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_customers(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoCustomerResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of customer objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.list_customers(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{customer_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomersErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.list_customers(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{customer_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCustomersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCustomerResponseDto](divvy/models/list_response_dto_customer_response_dto.py)</code> -- Get list of customers response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCustomersErrorBody](divvy/errors/list_customers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_customer(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived customer. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored customers. There is no change when you restore a restored customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.restore_customer(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.restore_customer(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](divvy/models/customer_response_dto.py)</code> -- Restore an archived customer response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreCustomerErrorBody](divvy/errors/restore_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_customer_contact(customer_id: str, contact_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerContactResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived customer contact. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored customer contacts. There is no change when you restore a restored customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.restore_customer_contact(
        "{{customer_id}}", "{{customer_contact_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreCustomerContactErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.restore_customer_contact(
        "{{customer_id}}", "{{customer_contact_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreCustomerContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](divvy/models/customer_contact_response_dto.py)</code> -- Restore a customer contact response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreCustomerContactErrorBody](divvy/errors/restore_customer_contact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer(customer_id: str, body: CustomerUpdateRequestDto | CustomerUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.update_customer(
        "{{customer_id}}", CustomerUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.update_customer(
        "{{customer_id}}", CustomerUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CustomerResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CustomerUpdateRequestDto](divvy/models/customer_update_request_dto.py) \| [CustomerUpdateRequestDtoDict](divvy/models/customer_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerResponseDto](divvy/models/customer_response_dto.py)</code> -- Update a customer response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateCustomerErrorBody](divvy/errors/update_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_bank_account(customer_id: str, bank_account_id: str, body: UpdateCustomerBankAccountRequestDto | UpdateCustomerBankAccountRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer bank account.

You can update only the `nickname` and `ownerType` fields for a customer bank account. If you want to update any of the other fields, create a new customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.update_customer_bank_account(
        "{{customer_id}}",
        "{{customer_bank_account_id}}",
        UpdateCustomerBankAccountRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.update_customer_bank_account(
        "{{customer_id}}",
        "{{customer_bank_account_id}}",
        UpdateCustomerBankAccountRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateCustomerBankAccountRequestDto](divvy/models/update_customer_bank_account_request_dto.py) \| [UpdateCustomerBankAccountRequestDtoDict](divvy/models/update_customer_bank_account_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerBankAccountResponseDto](divvy/models/customer_bank_account_response_dto.py)</code> -- Update a customer bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateCustomerBankAccountErrorBody](divvy/errors/update_customer_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_customer_contact(customer_id: str, contact_id: str, body: UpdateCustomerContactRequestDto | UpdateCustomerContactRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CustomerContactResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing customer contact.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.customers.update_customer_contact(
        "{{customer_id}}",
        "{{customer_contact_id}}",
        UpdateCustomerContactRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerContactErrorBody
```

**Async**

```python
try:
    response = await async_client.customers.update_customer_contact(
        "{{customer_id}}",
        "{{customer_contact_id}}",
        UpdateCustomerContactRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CustomerContactResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCustomerContactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>contact_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateCustomerContactRequestDto](divvy/models/update_customer_contact_request_dto.py) \| [UpdateCustomerContactRequestDtoDict](divvy/models/update_customer_contact_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomerContactResponseDto](divvy/models/customer_contact_response_dto.py)</code> -- Update a customer contact response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateCustomerContactErrorBody](divvy/errors/update_customer_contact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](divvy/apis/documents.py)

<details>
<summary><code>def create_bill_document(bill_id: str, name: str, body: list[str], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DocumentCreateResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the uploaded document is available on the bill details page in the BILL web app.

In the response, the `name`, `createdTime`, and `downloadLink` is available when the upload is complete.

When you upload a document, it takes a few minutes for BILL to complete the upload process.
* **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in progress. The value begins with `0du`. You can get the document upload status with `GET /v3/documents/upload-status`.
* **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value begins with `00h`. You can get details about the uploaded document with `GET /v3/documents/bills/{billId}`.

See Documents and attachments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.documents.create_bill_document(
        "{{bill_id}}",
        "business_details.pdf",
        ["some example string"],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type DocumentCreateResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillDocumentErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.create_bill_document(
        "{{bill_id}}",
        "business_details.pdf",
        ["some example string"],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type DocumentCreateResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>list&#91;str&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentCreateResponseDto](divvy/models/document_create_response_dto.py)</code> -- Upload bill document response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBillDocumentErrorBody](divvy/errors/create_bill_document_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_document(document_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> DocumentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a document associated with a bill.

From the response, use `downloadLink` in a GET request to download the document.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.documents.get_document(
        "{{document_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type DocumentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDocumentErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.get_document(
        "{{document_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type DocumentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>document_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentResponseDto](divvy/models/document_response_dto.py)</code> -- Get document details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetDocumentErrorBody](divvy/errors/get_document_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_documents(bill_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoDocumentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of documents associated with a bill.

From the response, use `downloadLink` in a GET request to download the document.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.documents.list_documents(
        "{{bill_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoDocumentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentsErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.list_documents(
        "{{bill_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoDocumentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoDocumentResponseDto](divvy/models/list_response_dto_document_response_dto.py)</code> -- Get list of documents response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListDocumentsErrorBody](divvy/errors/list_documents_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_status(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[DocumentUploadStatusResponseDto]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get status of a document upload. Use this endpoint to identify when a document upload is complete.
* BILL generates an `uploadId` for the document when the upload is in progress (`IN_PROGRESS`). The value begins with `0du`.
* BILL generates a `documentId` for the document when the upload is complete (`UPLOADED`). The value begins with `00h`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.documents.upload_status(
        "{{document_upload_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[DocumentUploadStatusResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.documents.upload_status(
        "{{document_upload_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[DocumentUploadStatusResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[DocumentUploadStatusResponseDto](divvy/models/document_upload_status_response_dto.py)&#93;</code> -- Get document upload status response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UploadStatusErrorBody](divvy/errors/upload_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](divvy/apis/events.py)

<details>
<summary><code>def get_event_catalog(*, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[EventCatalogDto]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the complete list of available events that you can subscribe to.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.get_event_catalog(
        session_id="{{session_id}}", dev_key="{{developer_key}}", app_key="{{app_key}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type list[EventCatalogDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.events.get_event_catalog(
        session_id="{{session_id}}", dev_key="{{developer_key}}", app_key="{{app_key}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type list[EventCatalogDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[EventCatalogDto](divvy/models/event_catalog_dto.py)&#93;</code> -- getEventCatalog 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_events_for_subscription(subscription_id: str, *, entity_id: str | None = None, max_: int | None = None, created_time_from: str | None = None, created_time_to: str | None = None, ascending: bool | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationDtoEventWithRetriesDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any issues with notification retries.

In the request, set `createdTimeFrom` and `createdTimeTo` to get event notifications for the specified time range. If you do not set `createdTimeTo`, the current date and time is used. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

**Note**: In this list operation, pagination is available only in one direction. The `nextPage` value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.get_events_for_subscription(
        "{{webhook_subscription_id}}",
        entity_id="{{webhook_bill_id}}",
        max_=10,
        created_time_from="2026-03-15T00:00:00Z",
        created_time_to="2026-03-20T00:00:00Z",
        ascending=True,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type PaginationDtoEventWithRetriesDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.events.get_events_for_subscription(
        "{{webhook_subscription_id}}",
        entity_id="{{webhook_bill_id}}",
        max_=10,
        created_time_from="2026-03-15T00:00:00Z",
        created_time_to="2026-03-20T00:00:00Z",
        ascending=True,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type PaginationDtoEventWithRetriesDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>entity_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_time_from</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>created_time_to</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ascending</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationDtoEventWithRetriesDto](divvy/models/pagination_dto_event_with_retries_dto.py)</code> -- getEventsForSubscription 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resend_event(subscription_id: str, event_id: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EventDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resend an existing event notification.

**Note**: When an event notification fails, BILL tries to send the notification again with exponential backoff.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.events.resend_event(
        "{{webhook_subscription_id}}",
        "{{webhook_event_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type EventDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.events.resend_event(
        "{{webhook_subscription_id}}",
        "{{webhook_event_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type EventDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>event_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDto](divvy/models/event_dto.py)</code> -- resendEvent 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Exports

> Source: [Exports](divvy/apis/exports.py)

<details>
<summary><code>def get_download_link(export_id: int, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ExportDownloadLinkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the download URL for an exported record file.

From the response, use `downloadLink` in a GET request to download the file.

``
curl '{downloadLink}' --output {file_name}
``
See Export BILL records in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.get_download_link(1, session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ExportDownloadLinkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDownloadLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.get_download_link(1, session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ExportDownloadLinkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDownloadLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>export_id</code> | <code>int</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExportDownloadLinkResponseDto](divvy/models/export_download_link_response_dto.py)</code> -- Get exported record download URL response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetDownloadLinkErrorBody](divvy/errors/get_download_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_exports(*, max_: int | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoExportResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of exported BILL records available for you to download. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

From the response, use `exportId` to get the download URL for an exported record file with `GET /v3/exports/{exportId}/download-link`.

You can export records, such as vendors, customers, bills, and invoices. In addition, you can export AP payments and AR payments. The **Import and export** section in the BILL web app (**Settings > Import & export > Custom File Integration**) provides the complete list of entities that you can export.

See Export BILL records in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.exports.list_exports(
        max_=10, filters="status:eq:SUCCESS", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoExportResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExportsErrorBody
```

**Async**

```python
try:
    response = await async_client.exports.list_exports(
        max_=10, filters="status:eq:SUCCESS", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoExportResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoExportResponseDto](divvy/models/list_response_dto_export_response_dto.py)</code> -- Get list of exported BILL records response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListExportsErrorBody](divvy/errors/list_exports_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](divvy/apis/health.py)

<details>
<summary><code>def get_health_check(*, request_options: RequestOptionsOrDict | None = None) -> HealthCheckDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns application health status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.health.get_health_check()
    # TODO: Handle 'response' of type HealthCheckDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.health.get_health_check()
    # TODO: Handle 'response' of type HealthCheckDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthCheckDto](divvy/models/health_check_dto.py)</code> -- getHealthCheck 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](divvy/apis/invoices.py)

<details>
<summary><code>def archive_invoice(invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing invoice. In the response, the `archived` field is set as `true`.

You can restore an archived invoice with `POST /v3/invoices/{invoiceId}/restore`. There is no change when you archive an archived invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.archive_invoice(
        "{{invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.archive_invoice(
        "{{invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](divvy/models/invoice_response_dto.py)</code> -- Archive an invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveInvoiceErrorBody](divvy/errors/archive_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_invoice(body: InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new invoice.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.create_invoice(
        InvoiceCreateRequestDto(customer=Customer(), invoice_line_items=[InvoiceCreateLineItem(quantity=1.5)]),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.create_invoice(
        InvoiceCreateRequestDto(customer=Customer(), invoice_line_items=[InvoiceCreateLineItem(quantity=1.5)]),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InvoiceCreateRequestDto](divvy/models/invoice_create_request_dto.py) \| [InvoiceCreateRequestDtoDict](divvy/models/invoice_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](divvy/models/invoice_response_dto.py)</code> -- Create an invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateInvoiceErrorBody](divvy/errors/create_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_invoice(invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.get_invoice("{{invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.get_invoice(
        "{{invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](divvy/models/invoice_response_dto.py)</code> -- Get invoice details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetInvoiceErrorBody](divvy/errors/get_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payment_link(invoice_id: str, body: InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoicePaymentLinkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and customer information.

You can send the invoice payment link to your customer for getting paid by the customer. With this link, the customer can complete the invoice payment without the need to set up a BILL account.

When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided email address.

**Note**: You get valid invoice payment links only for customers that are NOT connected with your organization in the BILL network.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.get_payment_link(
        "{{invoice_id}}",
        InvoicePaymentLinkRequestDto(customer_id="some example string", email="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type InvoicePaymentLinkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.get_payment_link(
        "{{invoice_id}}",
        InvoicePaymentLinkRequestDto(customer_id="some example string", email="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type InvoicePaymentLinkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InvoicePaymentLinkRequestDto](divvy/models/invoice_payment_link_request_dto.py) \| [InvoicePaymentLinkRequestDtoDict](divvy/models/invoice_payment_link_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoicePaymentLinkResponseDto](divvy/models/invoice_payment_link_response_dto.py)</code> -- Get an invoice payment link response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPaymentLinkErrorBody](divvy/errors/get_payment_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_invoices(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of invoice objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.list_invoices(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{invoice_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.list_invoices(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{invoice_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListInvoiceResponseDto](divvy/models/list_invoice_response_dto.py)</code> -- Get list of invoices response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListInvoicesErrorBody](divvy/errors/list_invoices_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def record_invoice(body: RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecordInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an offline AR payment received from a customer.

An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is available as a customer credit in the BILL system.

See Recording an AR payment in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.record_invoice(
        RecordInvoiceRequestDto(
            payment_date=date(2024, 1, 15),
            payment_type=InvoicePaymentTypeRequest.CASH,
            amount=1.5,
            invoices=[RecordInvoiceItemRequestDto(id="some example string", amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecordInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.record_invoice(
        RecordInvoiceRequestDto(
            payment_date=date(2024, 1, 15),
            payment_type=InvoicePaymentTypeRequest.CASH,
            amount=1.5,
            invoices=[RecordInvoiceItemRequestDto(id="some example string", amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecordInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RecordInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecordInvoiceRequestDto](divvy/models/record_invoice_request_dto.py) \| [RecordInvoiceRequestDtoDict](divvy/models/record_invoice_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecordInvoiceResponseDto](divvy/models/record_invoice_response_dto.py)</code> -- Record AR payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RecordInvoiceErrorBody](divvy/errors/record_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_invoice(invoice_id: str, body: InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in an invoice. You can also update other invoice details.

You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the invoice.
* When you omit an existing line item `id`, the line item is removed from the invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.replace_invoice(
        "{{invoice_id}}",
        InvoiceReplaceRequestDto(customer=Customer(), invoice_line_items=[InvoiceReplaceLineItem(quantity=1.5)]),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.replace_invoice(
        "{{invoice_id}}",
        InvoiceReplaceRequestDto(customer=Customer(), invoice_line_items=[InvoiceReplaceLineItem(quantity=1.5)]),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InvoiceReplaceRequestDto](divvy/models/invoice_replace_request_dto.py) \| [InvoiceReplaceRequestDtoDict](divvy/models/invoice_replace_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](divvy/models/invoice_response_dto.py)</code> -- Replace an invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ReplaceInvoiceErrorBody](divvy/errors/replace_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_invoice(invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived invoice. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.restore_invoice(
        "{{invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.restore_invoice(
        "{{invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](divvy/models/invoice_response_dto.py)</code> -- Restore an archived invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreInvoiceErrorBody](divvy/errors/restore_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_invoice(invoice_id: str, body: SendInvoiceRequestDto | SendInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

See Invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.invoices.send_invoice(
        "{{invoice_id}}",
        SendInvoiceRequestDto(
            reply_to=ReplyTo(user_id="some example string"), recipient=Recipient(to=["some example string"])
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendInvoiceErrorBody
```

**Async**

```python
try:
    await async_client.invoices.send_invoice(
        "{{invoice_id}}",
        SendInvoiceRequestDto(
            reply_to=ReplyTo(user_id="some example string"), recipient=Recipient(to=["some example string"])
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SendInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SendInvoiceRequestDto](divvy/models/send_invoice_request_dto.py) \| [SendInvoiceRequestDtoDict](divvy/models/send_invoice_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[SendInvoiceErrorBody](divvy/errors/send_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_invoice(invoice_id: str, body: InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an invoice line item. You can also update other invoice details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The invoice line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.invoices.update_invoice(
        "{{invoice_id}}", InvoiceUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.invoices.update_invoice(
        "{{invoice_id}}", InvoiceUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type InvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InvoiceUpdateRequestDto](divvy/models/invoice_update_request_dto.py) \| [InvoiceUpdateRequestDtoDict](divvy/models/invoice_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InvoiceResponseDto](divvy/models/invoice_response_dto.py)</code> -- Update an invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateInvoiceErrorBody](divvy/errors/update_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Mfa

> Source: [Mfa](divvy/apis/mfa.py)

<details>
<summary><code>def generate_challenge(body: MfaChallengeRequestDto | MfaChallengeRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MfaChallengeResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate an MFA challenge ID for creating an MFA-trusted API sign in session.

In the response, a `challengeId` is generated and a six-digit `token` is sent to the phone number that was registered with MFA setup.

After you generate a challenge ID (with `POST /v3/mfa/challenge`), complete your MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mfa.generate_challenge(
        MfaChallengeRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type MfaChallengeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenerateChallengeErrorBody
```

**Async**

```python
try:
    response = await async_client.mfa.generate_challenge(
        MfaChallengeRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type MfaChallengeResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GenerateChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MfaChallengeRequestDto](divvy/models/mfa_challenge_request_dto.py) \| [MfaChallengeRequestDtoDict](divvy/models/mfa_challenge_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaChallengeResponseDto](divvy/models/mfa_challenge_response_dto.py)</code> -- Generate MFA challenge response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GenerateChallengeErrorBody](divvy/errors/generate_challenge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_mfa_phones(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListMfaPhoneResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of phone numbers that have been added for setting up MFA in the current organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mfa.list_mfa_phones(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ListMfaPhoneResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.mfa.list_mfa_phones(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ListMfaPhoneResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListMfaPhoneResponseDto](divvy/models/list_mfa_phone_response_dto.py)</code> -- Get list of MFA phone numbers response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def setup(body: MfaSetupRequestDto | MfaSetupRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MfaSetupResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a valid phone number for setting up MFA in the current organization.

In the response, a `setupId` is generated and a six-digit `token` is sent to the phone number. After you add a phone number (with `POST /v3/mfa/setup`), complete the MFA setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mfa.setup(
        MfaSetupRequestDto(phone="some example string", type_=MfaSetupType.VOICE),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type MfaSetupResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetupErrorBody
```

**Async**

```python
try:
    response = await async_client.mfa.setup(
        MfaSetupRequestDto(phone="some example string", type_=MfaSetupType.VOICE),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type MfaSetupResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MfaSetupRequestDto](divvy/models/mfa_setup_request_dto.py) \| [MfaSetupRequestDtoDict](divvy/models/mfa_setup_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaSetupResponseDto](divvy/models/mfa_setup_response_dto.py)</code> -- Add phone for MFA setup response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[SetupErrorBody](divvy/errors/setup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def step_up_session(body: MfaStepUpRequestDto | MfaStepUpRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MfaStepUpResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set your current API session as MFA trusted.

Ideally, when you sign in with `POST /v3/login`, set `rememberMeId` and `device` in your request to generate an MFA-trusted API session.

In case you sign in without `rememberMeId` and `device` in your request, you can use this `POST /v3/mfa/step-up` endpoint to mark the current API session as MFA trusted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mfa.step_up_session(
        MfaStepUpRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type MfaStepUpResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.mfa.step_up_session(
        MfaStepUpRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type MfaStepUpResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MfaStepUpRequestDto](divvy/models/mfa_step_up_request_dto.py) \| [MfaStepUpRequestDtoDict](divvy/models/mfa_step_up_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaStepUpResponseDto](divvy/models/mfa_step_up_response_dto.py)</code> -- MFA step-up for API session response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validate(body: MfaSetupValidateRequestDto | MfaSetupValidateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the phone number for setting up MFA in the current organization. This validation requires the `setupId` and `token` from `POST /v3/mfa/setup`.

After the validation is complete, the phone number is registered for the MFA sign in operation.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account in a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mfa.validate(
        MfaSetupValidateRequestDto(
            setup_id="some example string", type_=MfaSetupType.VOICE, token="some example string"
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateErrorBody
```

**Async**

```python
try:
    response = await async_client.mfa.validate(
        MfaSetupValidateRequestDto(
            setup_id="some example string", type_=MfaSetupType.VOICE, token="some example string"
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MfaSetupValidateRequestDto](divvy/models/mfa_setup_validate_request_dto.py) \| [MfaSetupValidateRequestDtoDict](divvy/models/mfa_setup_validate_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](divvy/models/status_dto.py)</code> -- Validate phone for MFA setup response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ValidateErrorBody](divvy/errors/validate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def validate_challenge(body: MfaChallengeValidateRequestDto | MfaChallengeValidateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MfaChallengeValidateResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation requires the `challengeId` and `token` from `POST /v3/mfa/challenge`.

After the validation is complete, your API session is MFA trusted.

There are two stages in the BILL MFA process.
1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in operation.
2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then complete MFA sign in by validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.

**Note**: In the production environment, BILL requires an MFA-trusted API session for a set of API operations.
* Enable vendor `autoPay`
* Enable recurring bill `autoPayment`
* Create a payment or bulk payment
* Create a bank account for a BILL organization
* Reset MFA (Complete MFA setup and MFA sign-in again)

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.mfa.validate_challenge(
        MfaChallengeValidateRequestDto(challenge_id="some example string", token="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type MfaChallengeValidateResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateChallengeErrorBody
```

**Async**

```python
try:
    response = await async_client.mfa.validate_challenge(
        MfaChallengeValidateRequestDto(challenge_id="some example string", token="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type MfaChallengeValidateResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ValidateChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MfaChallengeValidateRequestDto](divvy/models/mfa_challenge_validate_request_dto.py) \| [MfaChallengeValidateRequestDtoDict](divvy/models/mfa_challenge_validate_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MfaChallengeValidateResponseDto](divvy/models/mfa_challenge_validate_response_dto.py)</code> -- Validate MFA challenge response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ValidateChallengeErrorBody](divvy/errors/validate_challenge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## NetworkApi

> Source: [NetworkApi](divvy/apis/network_api.py)

<details>
<summary><code>def accept_invitation(body: AcceptInvitationRequestDto | AcceptInvitationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept a connection request sent by a vendor or customer.

The organization receiving the connection request must have auto-connections disabled. If auto-connections are not disabled, BILL automatically connects the organizations in the BILL Network.

When the invitation is accepted, BILL connects the two organizations in the BILL Network.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.network_api.accept_invitation(
        AcceptInvitationRequestDto(network_id="some example string", type_=AcceptInviteType.VENDOR),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptInvitationErrorBody
```

**Async**

```python
try:
    await async_client.network_api.accept_invitation(
        AcceptInvitationRequestDto(network_id="some example string", type_=AcceptInviteType.VENDOR),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AcceptInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AcceptInvitationRequestDto](divvy/models/accept_invitation_request_dto.py) \| [AcceptInvitationRequestDtoDict](divvy/models/accept_invitation_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[AcceptInvitationErrorBody](divvy/errors/accept_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_customer_invitation(customer_id: str, body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a customer organization in the BILL Network. BILL automatically connects the customer organization with the customer record in your BILL organization.

If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email address. When the customer accepts the invitation, BILL connects the customer organization with the customer record in your BILL organization.

If the customer does not respond, you can delete the connection request (with `DELETE /v3/network/invitation/customer/{customerId}`) before sending a new connection request.

**Note**: If the customer does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.network_api.create_customer_invitation(
        "{{customer_id}}",
        CreateInvitationRequestDto(network_id="some example string", network_type=NetworkType.BILL),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerInvitationErrorBody
```

**Async**

```python
try:
    await async_client.network_api.create_customer_invitation(
        "{{customer_id}}",
        CreateInvitationRequestDto(network_id="some example string", network_type=NetworkType.BILL),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCustomerInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateInvitationRequestDto](divvy/models/create_invitation_request_dto.py) \| [CreateInvitationRequestDtoDict](divvy/models/create_invitation_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCustomerInvitationErrorBody](divvy/errors/create_customer_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_vendor_invitation(vendor_id: str, body: CreateInvitationRequestDto | CreateInvitationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the vendor organization with the vendor record in your BILL organization.

If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in your BILL organization.

If the vendor does not respond, you can delete the connection request (with `DELETE /v3/network/invitation/vendor/{vendorId}`) before sending a new connection request.

**Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.network_api.create_vendor_invitation(
        "{{vendor_id}}",
        CreateInvitationRequestDto(network_id="some example string", network_type=NetworkType.BILL),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorInvitationErrorBody
```

**Async**

```python
try:
    await async_client.network_api.create_vendor_invitation(
        "{{vendor_id}}",
        CreateInvitationRequestDto(network_id="some example string", network_type=NetworkType.BILL),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateInvitationRequestDto](divvy/models/create_invitation_request_dto.py) \| [CreateInvitationRequestDtoDict](divvy/models/create_invitation_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateVendorInvitationErrorBody](divvy/errors/create_vendor_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_customer_invitation(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing Network connection with a customer organization. Delete customer connection follows a set of rules.
* **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
* **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.

You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.

**Note**: If the customer does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.network_api.delete_customer_invitation(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerInvitationErrorBody
```

**Async**

```python
try:
    await async_client.network_api.delete_customer_invitation(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCustomerInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteCustomerInvitationErrorBody](divvy/errors/delete_customer_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vendor_invitation(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of rules.
* **No scheduled payments**: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
* **No in-process payments**: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.

You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.

**Note**: If the vendor does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.network_api.delete_vendor_invitation(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVendorInvitationErrorBody
```

**Async**

```python
try:
    await async_client.network_api.delete_vendor_invitation(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVendorInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteVendorInvitationErrorBody](divvy/errors/delete_vendor_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_customer_invitation(customer_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetInvitationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an existing connection request sent with `POST /v3/network/invitation/customer/{customerId}`.

When you send a connection request to a customer organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the customer accepts the request.

**Note**: If the customer does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.network_api.get_customer_invitation(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type GetInvitationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerInvitationErrorBody
```

**Async**

```python
try:
    response = await async_client.network_api.get_customer_invitation(
        "{{customer_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type GetInvitationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCustomerInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customer_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInvitationResponseDto](divvy/models/get_invitation_response_dto.py)</code> -- Get customer connection request status response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCustomerInvitationErrorBody](divvy/errors/get_customer_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vendor_invitation(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetInvitationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status of an existing connection request sent with `POST /v3/network/invitation/vendor/{vendorId}`.

When you send a connection request to a vendor organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the vendor accepts the request.

**Note**: If the vendor does not respond to the connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.network_api.get_vendor_invitation(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type GetInvitationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorInvitationErrorBody
```

**Async**

```python
try:
    response = await async_client.network_api.get_vendor_invitation(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type GetInvitationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorInvitationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetInvitationResponseDto](divvy/models/get_invitation_response_dto.py)</code> -- Get vendor connection request status response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetVendorInvitationErrorBody](divvy/errors/get_vendor_invitation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invite_vendor_not_in_bill_network(vendor_id: str, body: InviteVendorNotInBillNetworkRequestDto | InviteVendorNotInBillNetworkRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a connection request to a vendor not in the BILL Network.

BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.

**Note**:
* The vendor organization must exist before BILL can send an invitation email.
* If the vendor does not respond to a connection request for 60 days, the request expires.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.network_api.invite_vendor_not_in_bill_network(
        "{{vendor_id}}",
        InviteVendorNotInBillNetworkRequestDto(email="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InviteVendorNotInBillNetworkErrorBody
```

**Async**

```python
try:
    await async_client.network_api.invite_vendor_not_in_bill_network(
        "{{vendor_id}}",
        InviteVendorNotInBillNetworkRequestDto(email="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InviteVendorNotInBillNetworkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[InviteVendorNotInBillNetworkRequestDto](divvy/models/invite_vendor_not_in_bill_network_request_dto.py) \| [InviteVendorNotInBillNetworkRequestDtoDict](divvy/models/invite_vendor_not_in_bill_network_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[InviteVendorNotInBillNetworkErrorBody](divvy/errors/invite_vendor_not_in_bill_network_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search(name: str, *, scope: ScopeTypeOrStr | None = None, zip_or_postal_code: str | None = None, account_number: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> NetworkSearchResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network and verified national vendor (`RPPS`) network.

When you search in the BILL Network, there are two `name` requirements for getting search results.
* Your search term must have a minimum of three characters.
* Your search term must be a complete word. You will not get search results when your search term is a partial word.

When you search in the verified national vendor (`RPPS`) network, search results are based on both a complete and partial match on `name` and `zipOrPostalCode`. You can further filter your search by the billing statement `accountNumber` with the vendor. For example, your Verizon internet bill account number.

See BILL Network in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.network_api.search(
        "{{network_vendor_name}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type NetworkSearchResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchErrorBody
```

**Async**

```python
try:
    response = await async_client.network_api.search(
        "{{network_vendor_name}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type NetworkSearchResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>scope</code> | <code>[ScopeTypeOrStr](divvy/models/enums/scope_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>zip_or_postal_code</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>account_number</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NetworkSearchResponseDto](divvy/models/network_search_response_dto.py)</code> -- Search for an organization in the BILL Network response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[SearchErrorBody](divvy/errors/search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Organizations

> Source: [Organizations](divvy/apis/organizations.py)

<details>
<summary><code>def get_billing_statement_detail(organization_id: str, billing_statement_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillingStatementDetailResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a billing statement for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.

From the response, use `downloadLink` in a GET request to download a billing statement.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {statement_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_billing_statement_detail(
        "{{organization_id}}", "{{billing_statement_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type BillingStatementDetailResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillingStatementDetailErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_billing_statement_detail(
        "{{organization_id}}", "{{billing_statement_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type BillingStatementDetailResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBillingStatementDetailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>billing_statement_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillingStatementDetailResponseDto](divvy/models/billing_statement_detail_response_dto.py)</code> -- Get billing statement details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetBillingStatementDetailErrorBody](divvy/errors/get_billing_statement_detail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organization(organization_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_organization(
        "{{organization_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_organization(
        "{{organization_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationResponseDto](divvy/models/organization_response_dto.py)</code> -- Get organization details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetOrganizationErrorBody](divvy/errors/get_organization_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_price_plan(organization_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PricePlanResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the BILL price plan details for an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

A BILL price plan for an organization provides a range of information, including monthly subscription fees and the terms and conditions for additional charges in the price plan.

In the response, the `planTerms` object includes information about charges for price plan features based on a combination of charge `tier`, `quantity`, and `price`. We explain plan terms with an example.
* If `"tier": 1`, `"quantity": 5`, and `"price": 10`, the first 5 users will be charged $10 each.
* If `"tier": 2`, `"quantity": 10`, and `"price": 8`, the next 10 users will be charged $8 each. At this level, if there is no `tier` information, all users after tier 1 will be charged $8 each.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.get_price_plan(
        "{{organization_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PricePlanResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPricePlanErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.get_price_plan(
        "{{organization_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PricePlanResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPricePlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PricePlanResponseDto](divvy/models/price_plan_response_dto.py)</code> -- Get organization price plan details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPricePlanErrorBody](divvy/errors/get_price_plan_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_billing_statements(organization_id: str, *, max_: int | None = None, invoice_date_from: str | None = None, invoice_date_to: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoBillingStatementResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of billing statements for the organization. BILL generates a monthly billing invoice statement for all the billing activities in the organization.

In the request, set `invoiceDateFrom` and `invoiceDateTo` to get the billing invoice statements for the specified date range.

You can set `max` and `page` in the request only when both `invoiceDateFrom` and `invoiceDateTo` are not set. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.list_billing_statements(
        "{{organization_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoBillingStatementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingStatementsErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.list_billing_statements(
        "{{organization_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListResponseDtoBillingStatementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillingStatementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>invoice_date_from</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>invoice_date_to</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoBillingStatementResponseDto](divvy/models/list_response_dto_billing_statement_response_dto.py)</code> -- Get list of billing statements response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBillingStatementsErrorBody](divvy/errors/list_billing_statements_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_industries(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListIndustriesResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of available values for the `industry` field for an organization. Use this information to set the `industry` field in your `POST /v3/partner/organizations` or `PATCH /v3/organizations/{organizationId}` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.list_industries(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ListIndustriesResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIndustriesErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.list_industries(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListIndustriesResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIndustriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListIndustriesResponseDto](divvy/models/list_industries_response_dto.py)</code> -- Get list of organization industries response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListIndustriesErrorBody](divvy/errors/list_industries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_organization(organization_id: str, body: OrganizationUpdateRequestDto | OrganizationUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organizations.update_organization(
        "{{organization_id}}", OrganizationUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrganizationErrorBody
```

**Async**

```python
try:
    response = await async_client.organizations.update_organization(
        "{{organization_id}}", OrganizationUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[OrganizationUpdateRequestDto](divvy/models/organization_update_request_dto.py) \| [OrganizationUpdateRequestDtoDict](divvy/models/organization_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationResponseDto](divvy/models/organization_response_dto.py)</code> -- Update an organization response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateOrganizationErrorBody](divvy/errors/update_organization_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Partner

> Source: [Partner](divvy/apis/partner.py)

<details>
<summary><code>def archive_partner_user(user_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing user. In the response, the `archived` field is set as `true`.

You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change when you archive an archived user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.archive_partner_user(
        "{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchivePartnerUserErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.archive_partner_user(
        "{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchivePartnerUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Archive a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchivePartnerUserErrorBody](divvy/errors/archive_partner_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_organization(body: OrganizationCreateRequestDto | OrganizationCreateRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new organization.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

See Organizations for BILL partners in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.create_organization(
        OrganizationCreateRequestDto(
            name="some example string", address=Address1BillV3PartnerApi(country=CountryCode.AD)
        ),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type OrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrganizationErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.create_organization(
        OrganizationCreateRequestDto(
            name="some example string", address=Address1BillV3PartnerApi(country=CountryCode.AD)
        ),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type OrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrganizationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationCreateRequestDto](divvy/models/organization_create_request_dto.py) \| [OrganizationCreateRequestDtoDict](divvy/models/organization_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationResponseDto](divvy/models/organization_response_dto.py)</code> -- Create an organization response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateOrganizationErrorBody](divvy/errors/create_organization_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_partner_user(body: PartnerUserCreateRequestDto | PartnerUserCreateRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user. The new user is created for the organization (`organizationId`) in the request header.

In the request, set `username` as a unique alphanumeric value. The value must be 40 characters or fewer. This field is not case-sensitive. Do not set the value as an email address or any PII value. BILL uses this value to uniquely identify each user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

See Users for BILL partners in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.create_partner_user(
        PartnerUserCreateRequestDto(
            first_name="some example string",
            email="some example string",
            username="some example string",
            accept_terms_of_service=True,
        ),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePartnerUserErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.create_partner_user(
        PartnerUserCreateRequestDto(
            first_name="some example string",
            email="some example string",
            username="some example string",
            accept_terms_of_service=True,
        ),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePartnerUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerUserCreateRequestDto](divvy/models/partner_user_create_request_dto.py) \| [PartnerUserCreateRequestDtoDict](divvy/models/partner_user_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Create a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreatePartnerUserErrorBody](divvy/errors/create_partner_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_phone(user_id: str, body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a phone number for a created user. BILL requires organization users to have a linked phone number for initiating risk verification for the organization.

You can check whether a phone number has been added for the user with `GET /v3/risk-verifications/phone`.

After you add a phone number with this endpoint, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.partner.create_phone(
        "{{partner_user_id}}",
        PhoneVerificationRequestDto(phone_number="some example string", phone_type=PhoneType.MOBILE),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePhoneErrorBody
```

**Async**

```python
try:
    await async_client.partner.create_phone(
        "{{partner_user_id}}",
        PhoneVerificationRequestDto(phone_number="some example string", phone_type=PhoneType.MOBILE),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePhoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PhoneVerificationRequestDto](divvy/models/phone_verification_request_dto.py) \| [PhoneVerificationRequestDtoDict](divvy/models/phone_verification_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreatePhoneErrorBody](divvy/errors/create_phone_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_partner_user(user_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.get_partner_user(
        "{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPartnerUserErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.get_partner_user(
        "{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPartnerUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Get user details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPartnerUserErrorBody](divvy/errors/get_partner_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_partner_user_role(role_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RoleResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user role in a BILL organization.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.get_partner_user_role(
        "{{partner_user_role_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type RoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPartnerUserRoleErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.get_partner_user_role(
        "{{partner_user_role_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type RoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPartnerUserRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleResponseDto](divvy/models/role_response_dto.py)</code> -- Get user role details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPartnerUserRoleErrorBody](divvy/errors/get_partner_user_role_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_partner_organizations(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoOrganizationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of organization objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.list_partner_organizations(
        max_=10,
        sort="createdTime",
        filters="id:eq:{{partner_organization_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerOrganizationsErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.list_partner_organizations(
        max_=10,
        sort="createdTime",
        filters="id:eq:{{partner_organization_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerOrganizationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationResponseDto](divvy/models/list_response_dto_organization_response_dto.py)</code> -- Get list of organizations response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPartnerOrganizationsErrorBody](divvy/errors/list_partner_organizations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_partner_user_roles(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoRoleResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user role objects available in a BILL organization. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.list_partner_user_roles(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{partner_user_role_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerUserRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.list_partner_user_roles(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{partner_user_role_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerUserRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoRoleResponseDto](divvy/models/list_response_dto_role_response_dto.py)</code> -- Get list of user roles response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPartnerUserRolesErrorBody](divvy/errors/list_partner_user_roles_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_partner_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoOrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.list_partner_users(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.list_partner_users(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPartnerUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationUserResponseDto](divvy/models/list_response_dto_organization_user_response_dto.py)</code> -- Get list of users response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPartnerUsersErrorBody](divvy/errors/list_partner_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def login_as_user(body: LoginAsUserRequestDto | LoginAsUserRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> LoginAsUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to a created organization as a created user of that organization. In the response, your API session is created and a generated `sessionId` is available for organization-level BILL API operations.

This endpoint is required for a specific BILL partner-level workflow.
1. Sign in to your partner account with API partner login.
2. Create a child BILL organization with `POST /v3/partner/organizations`. In the response, a BILL-generated organization `id` is available.
3. Create a user for the child BILL organization with `POST /v3/partner/users`. In the response, a BILL-generated user `id` is available.
4. Sign in to the created organization as the created user of that organization with `POST /v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a `devKey` and `sessionId`.

**Note**: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate risk verification for an organization for more information.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

### MFA-trusted API session
Set both `rememberMeId` and `device` as additional fields in your `POST /v3/partner/login-as-user` request to create an MFA-trusted API session.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.login_as_user(
        LoginAsUserRequestDto(user_id="some example string", organization_id="some example string"),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type LoginAsUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoginAsUserErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.login_as_user(
        LoginAsUserRequestDto(user_id="some example string", organization_id="some example string"),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type LoginAsUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LoginAsUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LoginAsUserRequestDto](divvy/models/login_as_user_request_dto.py) \| [LoginAsUserRequestDtoDict](divvy/models/login_as_user_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LoginAsUserResponseDto](divvy/models/login_as_user_response_dto.py)</code> -- API login as user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[LoginAsUserErrorBody](divvy/errors/login_as_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def partner_login(body: PartnerLoginRequestDto | PartnerLoginRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None) -> PartnerLoginResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sign in to your BILL partner account. In the response, your partner API session is created and a BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to confirm that you are in a signed-in session.

You get additional permissions with a partner account `sessionId`.
* Create a child BILL organization with `POST /v3/partner/organizations`.
* Create a user for the child BILL organization with `POST /v3/partner/users`.
* Sign in to the created organization as the created user of that organization with `/v3/partner/login-as-user`. After signing in, you can perform organization-level BILL API operations, such as creating a bill or paying a vendor. All organization-level BILL API operations require a `devKey` and `sessionId`.

**Note**: When you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`. See Initiate risk verification for an organization for more information.

You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the session expires and you are automatically signed out.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.partner_login(
        PartnerLoginRequestDto(
            app_key="some example string", username="some example string", password="some example string"
        ),
    )
    # TODO: Handle 'response' of type PartnerLoginResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PartnerLoginErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.partner_login(
        PartnerLoginRequestDto(
            app_key="some example string", username="some example string", password="some example string"
        ),
    )
    # TODO: Handle 'response' of type PartnerLoginResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PartnerLoginErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerLoginRequestDto](divvy/models/partner_login_request_dto.py) \| [PartnerLoginRequestDtoDict](divvy/models/partner_login_request_dto.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PartnerLoginResponseDto](divvy/models/partner_login_response_dto.py)</code> -- API partner login response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[PartnerLoginErrorBody](divvy/errors/partner_login_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_partner_user(user_id: str, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived user. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.restore_partner_user(
        "{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestorePartnerUserErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.restore_partner_user(
        "{{partner_user_id}}",
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestorePartnerUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Restore an archived user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestorePartnerUserErrorBody](divvy/errors/restore_partner_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_org_partner_price_plan(organization_id: str, body: UpdateOrgPricePlanRequest | UpdateOrgPricePlanRequestDict, *, session_id: str | None = None, app_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the price plan for an existing organization.

When you onboard as a BILL partner, BILL works with you to set up price plans for the organizations you create. Your organizations can have up to 5 price plans. Each price plan is named in the `PricePlanN` format (`PricePlan1` up to `PricePlan5`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.update_org_partner_price_plan(
        "{{partner_organization_id}}",
        UpdateOrgPricePlanRequest(price_plan_type=PartnerPricePlanType.PRICE_PLAN1),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrgPartnerPricePlanErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.update_org_partner_price_plan(
        "{{partner_organization_id}}",
        UpdateOrgPricePlanRequest(price_plan_type=PartnerPricePlanType.PRICE_PLAN1),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrgPartnerPricePlanErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateOrgPricePlanRequest](divvy/models/update_org_price_plan_request.py) \| [UpdateOrgPricePlanRequestDict](divvy/models/update_org_price_plan_request.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](divvy/models/status_dto.py)</code> -- Update an organization price plan response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateOrgPartnerPricePlanErrorBody](divvy/errors/update_org_partner_price_plan_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_partner_user(user_id: str, body: PartnerUserUpdateRequestDto | PartnerUserUpdateRequestDtoDict, *, session_id: str | None = None, app_key: str | None = None, organization_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

This operation requires partner-level permissions.
* A `sessionId` header value generated with API partner login
* An `appKey` header value
* The `organizationId` of the organization

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.partner.update_partner_user(
        "{{partner_user_id}}",
        PartnerUserUpdateRequestDto(),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePartnerUserErrorBody
```

**Async**

```python
try:
    response = await async_client.partner.update_partner_user(
        "{{partner_user_id}}",
        PartnerUserUpdateRequestDto(),
        session_id="{{partner_session_id}}",
        app_key="{{app_key}}",
        organization_id="{{partner_organization_id}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePartnerUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[PartnerUserUpdateRequestDto](divvy/models/partner_user_update_request_dto.py) \| [PartnerUserUpdateRequestDtoDict](divvy/models/partner_user_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>organization_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Update a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdatePartnerUserErrorBody](divvy/errors/update_partner_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](divvy/apis/payments.py)

<details>
<summary><code>def cancel_payment(payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an existing payment.

You can cancel a payment only when the payment `singleStatus` is `SCHEDULED`. When BILL starts processing the payment, the payment `singleStatus` changes. At that point, you cannot cancel the payment. You can attempt to void the payment with `POST /v3/payments/{paymentId}/void`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.cancel_payment(
        "{{payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.cancel_payment(
        "{{payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](divvy/models/payment_response_dto.py)</code> -- Cancel a payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CancelPaymentErrorBody](divvy/errors/cancel_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bulk_payment(body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BulkPaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a request for paying multiple bills. You can pay up to 50 bills with one `POST /v3/payments/bulk` request.

Bulk payments at BILL follow a set of rules.
* **Successful response**: In your bulk payment request, all your bill payments must be successful for a successful response. If any bill payment is not successful, the entire request fails and none of the bills in the request are paid.
* **You can pay multiple vendors**: You can pay multiple vendors with one `POST /v3/payments/bulk` request. In this case, make sure that you do not set `vendorId` in your request.
* **You can only pay existing bills**: When you create a single payment with `POST /v3/payments`, you can set `createBill` as `true` in your request for creating a new bill for a vendor payment. In your bulk payment request, an existing `billId` is required for each bill to be paid.
* **Vendors with `"combinePayments": true`**: When you create a bulk payment for a vendor that has `"combinePayments": true`, BILL combines payments for up to 35 bills in one `payments` response object, and then combines payments for the remaining bills in a second `payments` response object.

See Get list of vendor payment options to get details about vendor payment options and payment process dates.

**Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Payments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.create_bulk_payment(
        BulkPaymentRequestDto(funding_account=FundingAccount(type_=FundingAccountTypeRequest.BANK_ACCOUNT)),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BulkPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBulkPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.create_bulk_payment(
        BulkPaymentRequestDto(funding_account=FundingAccount(type_=FundingAccountTypeRequest.BANK_ACCOUNT)),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BulkPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBulkPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkPaymentRequestDto](divvy/models/bulk_payment_request_dto.py) \| [BulkPaymentRequestDtoDict](divvy/models/bulk_payment_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkPaymentResponseDto](divvy/models/bulk_payment_response_dto.py)</code> -- Create a bulk payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBulkPaymentErrorBody](divvy/errors/create_bulk_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_mass_payment(body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MassPaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass payment request asynchronously.

In the response, a BILL-generated payment batch ID is available. You can track the current status of each payment in a mass payment batch with `GET /v3/payments/mass/{paymentBatchId}`.

**Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.create_mass_payment(
        BulkPaymentRequestDto(funding_account=FundingAccount(type_=FundingAccountTypeRequest.BANK_ACCOUNT)),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type MassPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMassPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.create_mass_payment(
        BulkPaymentRequestDto(funding_account=FundingAccount(type_=FundingAccountTypeRequest.BANK_ACCOUNT)),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type MassPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMassPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkPaymentRequestDto](divvy/models/bulk_payment_request_dto.py) \| [BulkPaymentRequestDtoDict](divvy/models/bulk_payment_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MassPaymentResponseDto](divvy/models/mass_payment_response_dto.py)</code> -- Create a mass payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateMassPaymentErrorBody](divvy/errors/create_mass_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_payment(body: PaymentRequestDto | PaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a payment.

See Get list of vendor payment options to get details about vendor payment options and payment process dates.

**Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Payments in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.create_payment(
        PaymentRequestDto(
            funding_account=FundingAccount(type_=FundingAccountTypeRequest.BANK_ACCOUNT),
            amount=1.5,
            processing_options=ProcessingOptionsBillV3PaymentsApi(),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.create_payment(
        PaymentRequestDto(
            funding_account=FundingAccount(type_=FundingAccountTypeRequest.BANK_ACCOUNT),
            amount=1.5,
            processing_options=ProcessingOptionsBillV3PaymentsApi(),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentRequestDto](divvy/models/payment_request_dto.py) \| [PaymentRequestDtoDict](divvy/models/payment_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](divvy/models/payment_response_dto.py)</code> -- Create a payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreatePaymentErrorBody](divvy/errors/create_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_check_image_data(payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CheckImageDataResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an image of an existing check sent to a vendor.

The check image is available when the vendor bank processes the check payment. BILL checks in with the bank every 30 minutes to get the check image. The image file format is determined by the vendor bank.

From the response, use `downloadLink` in a GET request to download the front and back images of the check.

``
curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_check_image_data(
        "{{payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CheckImageDataResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckImageDataErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_check_image_data(
        "{{payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CheckImageDataResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckImageDataErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckImageDataResponseDto](divvy/models/check_image_data_response_dto.py)</code> -- Get check image data response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCheckImageDataErrorBody](divvy/errors/get_check_image_data_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_exchange_rate(vendor_id: str, amount: float, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ExchangeRateResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current BILL exchange rate and exchange rate batch ID for paying an international vendor. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.

BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.

In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3 minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).

**Note**:
* International vendor payment information is required for you to get the BILL exchange rate with this endpoint.
* When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US business day.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_exchange_rate(
        "{{vendor_id}}", 1000, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ExchangeRateResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExchangeRateErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_exchange_rate(
        "{{vendor_id}}", 1000, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ExchangeRateResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExchangeRateErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>amount</code> | <code>float</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangeRateResponseDto](divvy/models/exchange_rate_response_dto.py)</code> -- Get BILL exchange rate response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetExchangeRateErrorBody](divvy/errors/get_exchange_rate_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_exchange_rates(body: list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ExchangeRatesResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the current BILL exchange rate and exchange rate batch ID for multiple international vendors with one API request. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.

BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get the current exchange rate and batch ID based on the payment amount and vendor bill currency.

In production, a BILL batch is valid for a maximum of 20 minutes. response provides the timestamp when the current batch will expire. For example, if a batch has been active for 17 minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3 minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).

**Note**:
* International vendor payment information is required for you to get BILL exchange rates with this endpoint.
* When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US business day.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_exchange_rates(
        [ExchangeRateRequestDto(vendor_id="some example string", amount=1.5)],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ExchangeRatesResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExchangeRatesErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_exchange_rates(
        [ExchangeRateRequestDto(vendor_id="some example string", amount=1.5)],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ExchangeRatesResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExchangeRatesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[ExchangeRateRequestDto](divvy/models/exchange_rate_request_dto.py) \| [ExchangeRateRequestDtoDict](divvy/models/exchange_rate_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExchangeRatesResponseDto](divvy/models/exchange_rates_response_dto.py)</code> -- Get BILL exchange rates for multiple vendors response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetExchangeRatesErrorBody](divvy/errors/get_exchange_rates_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_mass_payment(payment_batch_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> MassPaymentDetailsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing mass payment batch.

In the response, you get the status of each payment in the mass payment batch. Each payment is either `scheduled`, `completed`, or `failed`. In addition, you get the `count` for the total number of payments in the mass payments batch.

**Note**: From the list of `completed` payments in the response, BILL begins processing payments based on the payment `processDate`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_mass_payment(
        "{{mass_payment_batch_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type MassPaymentDetailsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMassPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_mass_payment(
        "{{mass_payment_batch_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type MassPaymentDetailsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetMassPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_batch_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MassPaymentDetailsResponseDto](divvy/models/mass_payment_details_response_dto.py)</code> -- Get mass payment status response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetMassPaymentErrorBody](divvy/errors/get_mass_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payment(payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing payment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.get_payment("{{payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.get_payment(
        "{{payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentResponseDto
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
| <code>payment_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](divvy/models/payment_response_dto.py)</code> -- Get payment details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPaymentErrorBody](divvy/errors/get_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payment_options(vendor_id: str, amount: float, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentOptionsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor payment options available based on the funding account options available in the signed-in user's BILL organization and on the payment methods accepted by a vendor.

See Vendor payment options in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.list_payment_options(
        "{{vendor_id}}", 100, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentOptionsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentOptionsErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.list_payment_options(
        "{{vendor_id}}", 100, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentOptionsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentOptionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>amount</code> | <code>float</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentOptionsResponseDto](divvy/models/payment_options_response_dto.py)</code> -- Get list of vendor payment options response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPaymentOptionsErrorBody](divvy/errors/list_payment_options_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payments(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListPaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of payment objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.list_payments(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{payment_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.list_payments(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{payment_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListPaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPaymentResponseDto](divvy/models/list_payment_response_dto.py)</code> -- Get list of payments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPaymentsErrorBody](divvy/errors/list_payments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def void_payment(payment_id: str, body: VoidRequestDto | VoidRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Void an existing payment.

Void a bill payment that has started processing and cannot be canceled (with `POST /v3/payments/{paymentId}/cancel`). You can attempt to void payments made both with BILL (online) and outside BILL (offline).

### Void a payment made with BILL (online)

In your /`POST /v3/payments/{paymentId}/void` request:
* Set `paymentId` as the BILL-generated ID of the payment. The value begins with `stp`.
* Set `type` as the void payment request type
* Set `reason` as the reason for voiding the payment

See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL void payment process and timing in the production environment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payments.void_payment(
        "{{payment_id}}",
        VoidRequestDto(type_=VoidTypeRequest.VOID_AND_CREDIT, reason="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VoidPaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.payments.void_payment(
        "{{payment_id}}",
        VoidRequestDto(type_=VoidTypeRequest.VOID_AND_CREDIT, reason="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VoidPaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payment_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[VoidRequestDto](divvy/models/void_request_dto.py) \| [VoidRequestDtoDict](divvy/models/void_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentResponseDto](divvy/models/payment_response_dto.py)</code> -- Void a payment response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[VoidPaymentErrorBody](divvy/errors/void_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](divvy/apis/reports.py)

<details>
<summary><code>def get_vendor_audit_trail(vendor_id: str, *, include_archived: bool | None = None, start: int | None = None, max_: int | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[AuditTrailEntry]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get audit trail details about changes made to a vendor object. The audit trail lists records for each create and edit operation.

See Get audit trail details in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reports.get_vendor_audit_trail(
        "{{vendor_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[AuditTrailEntry]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorAuditTrailErrorBody
```

**Async**

```python
try:
    response = await async_client.reports.get_vendor_audit_trail(
        "{{vendor_id}}", max_=10, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[AuditTrailEntry]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorAuditTrailErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>include_archived</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>start</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[AuditTrailEntry](divvy/models/audit_trail_entry.py)&#93;</code> -- Get audit trail details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetVendorAuditTrailErrorBody](divvy/errors/get_vendor_audit_trail_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Roles

> Source: [Roles](divvy/apis/roles.py)

<details>
<summary><code>def get_organization_user_role(role_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RoleResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user role.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.roles.get_organization_user_role(
        "{{org_user_role_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationUserRoleErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.get_organization_user_role(
        "{{org_user_role_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationUserRoleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>role_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RoleResponseDto](divvy/models/role_response_dto.py)</code> -- Get user role details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetOrganizationUserRoleErrorBody](divvy/errors/get_organization_user_role_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_organization_user_roles(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoRoleResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user role objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.roles.list_organization_user_roles(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{org_user_role_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationUserRolesErrorBody
```

**Async**

```python
try:
    response = await async_client.roles.list_organization_user_roles(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{org_user_role_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoRoleResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationUserRolesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoRoleResponseDto](divvy/models/list_response_dto_role_response_dto.py)</code> -- Get list of user roles response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListOrganizationUserRolesErrorBody](divvy/errors/list_organization_user_roles_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](divvy/apis/subscriptions.py)

<details>
<summary><code>def create_new_security_key(subscription_id: str, x_idempotent_key: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SecurityKeyDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new security key for your subscription.

When you create a new subscription, a one-time `securityKey` is one of the generated values in the response. All event notifications sent to your `notificationUrl` are signed with this key using the HMAC-SHA256 algorithm. The key is sent as the `x-bill-sha-signature` header value in the notification.

You can use the security key to verify all notifications sent to you. It is good practice to keep the security key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key based on your desired frequency.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.create_new_security_key(
        "{{webhook_subscription_id}}",
        "{{webhook_idempotency_key}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SecurityKeyDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.create_new_security_key(
        "{{webhook_subscription_id}}",
        "{{webhook_idempotency_key}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SecurityKeyDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>x_idempotent_key</code> | <code>str</code> | Idempotency key. The key must be in the UUID4 format. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SecurityKeyDto](divvy/models/security_key_dto.py)</code> -- createNewSecurityKey 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_subscription(x_idempotent_key: str, body: SubscriptionRequestDto | SubscriptionRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionWithSecurityKeyResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new event subscription. You can subscribe to multiple events with a single request. You can create up to 10 webhook subscriptions per organization.

BILL provides a full catalog of all the events that you can subscribe to with `GET /v3/events/catalog`. See Get events catalog in the API reference for more information.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.create_subscription(
        "{{webhook_idempotency_key}}",
        SubscriptionRequestDto(
            name="some example string",
            status=Status2(),
            events=[SubscriptionEventDto(type_="some example string", version="some example string")],
            notification_url="some example string",
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionWithSecurityKeyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.create_subscription(
        "{{webhook_idempotency_key}}",
        SubscriptionRequestDto(
            name="some example string",
            status=Status2(),
            events=[SubscriptionEventDto(type_="some example string", version="some example string")],
            notification_url="some example string",
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionWithSecurityKeyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_idempotent_key</code> | <code>str</code> | Idempotency key. The key must be in the UUID4 format. |
| <code>body</code> | <code>[SubscriptionRequestDto](divvy/models/subscription_request_dto.py) \| [SubscriptionRequestDtoDict](divvy/models/subscription_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionWithSecurityKeyResponseDto](divvy/models/subscription_with_security_key_response_dto.py)</code> -- createSubscription 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_subscription(subscription_id: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.subscriptions.delete_subscription(
        "{{webhook_subscription_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.subscriptions.delete_subscription(
        "{{webhook_subscription_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_all_subscriptions(*, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationDtoSubscriptionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of all your created subscriptions.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

**Note**: In this list operation, pagination is available only in one direction. The `nextPage` value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.get_all_subscriptions(
        max_=10,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type PaginationDtoSubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.get_all_subscriptions(
        max_=10,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type PaginationDtoSubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationDtoSubscriptionResponseDto](divvy/models/pagination_dto_subscription_response_dto.py)</code> -- getAllSubscriptions 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_subscription(subscription_id: str, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.get_subscription(
        "{{webhook_subscription_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.get_subscription(
        "{{webhook_subscription_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponseDto](divvy/models/subscription_response_dto.py)</code> -- getSubscription 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_subscription(subscription_id: str, body: SubscriptionRequestDto | SubscriptionRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the events that you are subscribed to.

You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace the `bill.created` event with `bill.updated` in your subscription.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.replace_subscription(
        "{{webhook_subscription_id}}",
        SubscriptionRequestDto(
            name="some example string",
            status=Status2(),
            events=[SubscriptionEventDto(type_="some example string", version="some example string")],
            notification_url="some example string",
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.replace_subscription(
        "{{webhook_subscription_id}}",
        SubscriptionRequestDto(
            name="some example string",
            status=Status2(),
            events=[SubscriptionEventDto(type_="some example string", version="some example string")],
            notification_url="some example string",
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SubscriptionRequestDto](divvy/models/subscription_request_dto.py) \| [SubscriptionRequestDtoDict](divvy/models/subscription_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponseDto](divvy/models/subscription_response_dto.py)</code> -- replaceSubscription 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def send_test_event(subscription_id: str, body: SendTestEventRequestDto | SendTestEventRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EventDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a test event notification to your specified notification URL.

In your request, all the fields are optional. To see specific information in the test event notification, you can set `eventType`, `version`, and any details. You can get the BILL events catalog with `GET /v3/events/catalog`.

**Note**: All the fields in the test event notification are test values. You cannot use any of the test values for any other operation.

See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.send_test_event(
        "{{webhook_subscription_id}}",
        SendTestEventRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type EventDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.send_test_event(
        "{{webhook_subscription_id}}",
        SendTestEventRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type EventDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SendTestEventRequestDto](divvy/models/send_test_event_request_dto.py) \| [SendTestEventRequestDtoDict](divvy/models/send_test_event_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventDto](divvy/models/event_dto.py)</code> -- sendTestEvent 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_subscription(subscription_id: str, body: SubscriptionUpdateRequestDto | SubscriptionUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, app_key: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SubscriptionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a subscription.

You can use the PATCH operation to modify existing subscription details, such as `name`, `status`, and `notificationUrl`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subscriptions.update_subscription(
        "{{webhook_subscription_id}}",
        SubscriptionUpdateRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.subscriptions.update_subscription(
        "{{webhook_subscription_id}}",
        SubscriptionUpdateRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
        app_key="{{app_key}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SubscriptionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscription_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[SubscriptionUpdateRequestDto](divvy/models/subscription_update_request_dto.py) \| [SubscriptionUpdateRequestDtoDict](divvy/models/subscription_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>app_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubscriptionResponseDto](divvy/models/subscription_response_dto.py)</code> -- updateSubscription 200 response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RawError](divvy/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](divvy/apis/transactions.py)

<details>
<summary><code>def add_transaction_receipt(transaction_id: str, body: TransactionReceiptRequestDto | TransactionReceiptRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ReceiptImage]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a receipt to an existing transaction.

In the request, use the same upload `url` that you used to upload the receipt image. See Create a transaction upload URL to learn about creating a transaction image upload URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.add_transaction_receipt(
        "{{se_transaction_uuid}}", TransactionReceiptRequestDto(url="some example string"), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type list[ReceiptImage]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddTransactionReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.add_transaction_receipt(
        "{{se_transaction_uuid}}", TransactionReceiptRequestDto(url="some example string"), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type list[ReceiptImage]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddTransactionReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[TransactionReceiptRequestDto](divvy/models/transaction_receipt_request_dto.py) \| [TransactionReceiptRequestDtoDict](divvy/models/transaction_receipt_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ReceiptImage](divvy/models/receipt_image.py)&#93;</code> -- Add a transaction receipt response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[AddTransactionReceiptErrorBody](divvy/errors/add_transaction_receipt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_receipt_upload_url(*, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReimbursementImageUploadUrlResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a transaction image upload URL.

From the response, use the upload `url` to upload a receipt image for the transaction. For example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set the content type as `image/png`.

``
curl '{upload_url}'
-H 'Content-Type: image/jpeg'
--upload-file {file_name_with_extension}
``

**Note**: BILL supports JPG and PNG file formats for transaction images.

See Transactions in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.create_receipt_upload_url(api_token="{{api_token}}")
    # TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReceiptUploadUrlErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.create_receipt_upload_url(api_token="{{api_token}}")
    # TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReceiptUploadUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementImageUploadUrlResponseDto](divvy/models/reimbursement_image_upload_url_response_dto.py)</code> -- Create a transaction upload URL response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateReceiptUploadUrlErrorBody](divvy/errors/create_receipt_upload_url_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_transaction_receipt(transaction_id: str, receipt_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The deleted receipt is not available in the transaction details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.transactions.delete_transaction_receipt(
        "{{se_transaction_uuid}}", "{{se_transaction_receipt_uuid}}", api_token="{{api_token}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTransactionReceiptErrorBody
```

**Async**

```python
try:
    await async_client.transactions.delete_transaction_receipt(
        "{{se_transaction_uuid}}", "{{se_transaction_receipt_uuid}}", api_token="{{api_token}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTransactionReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>receipt_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteTransactionReceiptErrorBody](divvy/errors/delete_transaction_receipt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_transaction(transaction_id: str, *, show_custom_field_ids: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TransactionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing transaction.

In the response, you get information about transactions, reversals, and refunds.
* **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION` or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding account. The `CLEAR` transactions receive a new ID and reference to the original `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
* **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType` remains `AUTHORIZATION`, but the `amount` is typically a negative value.
* **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is set to `CLEAR` and the `amount` is a negative value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.get_transaction(
        "{{se_transaction_uuid}}", show_custom_field_ids="{{se_custom_field_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type TransactionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTransactionErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.get_transaction(
        "{{se_transaction_uuid}}", show_custom_field_ids="{{se_custom_field_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type TransactionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTransactionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>show_custom_field_ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResponseDto](divvy/models/transaction_response_dto.py)</code> -- Get transaction details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetTransactionErrorBody](divvy/errors/get_transaction_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_transaction_custom_field_values(transaction_id: str, custom_field_id: str, *, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoCustomFieldValueDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field value objects applied to an existing transaction. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.list_transaction_custom_field_values(
        "{{se_transaction_uuid}}", "{{se_custom_field_uuid}}", max_=10, api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionCustomFieldValuesErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.list_transaction_custom_field_values(
        "{{se_transaction_uuid}}", "{{se_custom_field_uuid}}", max_=10, api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoCustomFieldValueDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionCustomFieldValuesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>custom_field_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoCustomFieldValueDto](divvy/models/pagination_response_dto_custom_field_value_dto.py)</code> -- Get list of transaction custom field value response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListTransactionCustomFieldValuesErrorBody](divvy/errors/list_transaction_custom_field_values_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_transaction_custom_fields(transaction_id: str, *, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListTransactionCustomFieldResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of custom field objects applied to an existing transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.list_transaction_custom_fields(
        "{{se_transaction_uuid}}", filters="customFieldIds:eq:{{se_custom_field_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ListTransactionCustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionCustomFieldsErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.list_transaction_custom_fields(
        "{{se_transaction_uuid}}", filters="customFieldIds:eq:{{se_custom_field_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ListTransactionCustomFieldResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionCustomFieldsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListTransactionCustomFieldResponseDto](divvy/models/list_transaction_custom_field_response_dto.py)</code> -- Get list of transaction custom fields response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListTransactionCustomFieldsErrorBody](divvy/errors/list_transaction_custom_fields_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_transactions(*, max_: int | None = None, next_page: str | None = None, prev_page: str | None = None, sort: str | None = None, filters: str | None = None, show_custom_field_ids: str | None = None, include_receipts: bool | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoTransactionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of transaction objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 50 results on one page.

In the response, you get information about transactions, reversals, and refunds.
* **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION` or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding account. The `CLEAR` transactions receive a new ID and reference to the original `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
* **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType` remains `AUTHORIZATION`, but the `amount` is typically a negative value.
* **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is set to `CLEAR` and the `amount` is a negative value.

**Note**: Only parent transactions are available in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.list_transactions(
        max_=10, sort="occurredTime:desc", filters="amount:gte:100.00", include_receipts=True, api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoTransactionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionsErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.list_transactions(
        max_=10, sort="occurredTime:desc", filters="amount:gte:100.00", include_receipts=True, api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type PaginationResponseDtoTransactionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTransactionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>show_custom_field_ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_receipts</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoTransactionResponseDto](divvy/models/pagination_response_dto_transaction_response_dto.py)</code> -- Get list of transactions response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListTransactionsErrorBody](divvy/errors/list_transactions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def three_ds_challenge(acs_transaction_id: str, body: ThreeDsRequestDto | ThreeDsRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ThreeDsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept or reject a transaction 3D Secure (3DS) challenge.

When a transaction is created, a 3DS challenge may trigger to verify the identity of the cardholder. Use this endpoint to approve or deny the transaction. The Spend & Expense user must have the `ADMIN` user role to perform this operation.

Subscribe to the `spend.three-ds-challenge.created` event to get a webhook notification when a 3DS challenge is triggered for a transaction. See Spend & Expense 3DS challenge notification payload for more information.

See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at BILL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.three_ds_challenge(
        "{{se_transaction_uuid}}", ThreeDsRequestDto(action=ThreeDsActionType.ACCEPT), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ThreeDsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ThreeDsChallengeErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.three_ds_challenge(
        "{{se_transaction_uuid}}", ThreeDsRequestDto(action=ThreeDsActionType.ACCEPT), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ThreeDsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ThreeDsChallengeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>acs_transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ThreeDsRequestDto](divvy/models/three_ds_request_dto.py) \| [ThreeDsRequestDtoDict](divvy/models/three_ds_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ThreeDsResponseDto](divvy/models/three_ds_response_dto.py)</code> -- Accept or reject a transaction response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ThreeDsChallengeErrorBody](divvy/errors/three_ds_challenge_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_transaction(transaction_id: str, body: UpdateTxRequestDto | UpdateTxRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TransactionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the budget for an existing transaction.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.update_transaction(
        "{{se_transaction_uuid}}", UpdateTxRequestDto(budget_id="some example string"), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type TransactionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTransactionErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.update_transaction(
        "{{se_transaction_uuid}}", UpdateTxRequestDto(budget_id="some example string"), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type TransactionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTransactionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateTxRequestDto](divvy/models/update_tx_request_dto.py) \| [UpdateTxRequestDtoDict](divvy/models/update_tx_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TransactionResponseDto](divvy/models/transaction_response_dto.py)</code> -- Update a transaction response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateTransactionErrorBody](divvy/errors/update_transaction_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_transaction_custom_fields(transaction_id: str, body: BulkUpdateTxCustomFieldRequestDto | BulkUpdateTxCustomFieldRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SpendStatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about custom fields and their values applied to an existing transaction.

You cannot update custom fields in a locked transaction. When a transaction is locked, `isLocked` is set as `true`. You can get information about your transactions with `GET /v3/spend/transactions` or `GET /v3/spend/transactions/{transactionId}.

See Lock or unlock custom fields for a transaction in the BILL Help Center for more information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.transactions.update_transaction_custom_fields(
        "{{se_transaction_uuid}}",
        BulkUpdateTxCustomFieldRequestDto(custom_fields=[UpdateCustomFieldDto(custom_field_id="some example string")]),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SpendStatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTransactionCustomFieldsErrorBody
```

**Async**

```python
try:
    response = await async_client.transactions.update_transaction_custom_fields(
        "{{se_transaction_uuid}}",
        BulkUpdateTxCustomFieldRequestDto(custom_fields=[UpdateCustomFieldDto(custom_field_id="some example string")]),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type SpendStatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTransactionCustomFieldsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transaction_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BulkUpdateTxCustomFieldRequestDto](divvy/models/bulk_update_tx_custom_field_request_dto.py) \| [BulkUpdateTxCustomFieldRequestDtoDict](divvy/models/bulk_update_tx_custom_field_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SpendStatusDto](divvy/models/spend_status_dto.py)</code> -- Update transaction custom fields response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateTransactionCustomFieldsErrorBody](divvy/errors/update_transaction_custom_fields_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](divvy/apis/users.py)

<details>
<summary><code>def create_user(body: CreateUserRequestDto | CreateUserRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> UserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user.

See Budgets and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.create_user(
        CreateUserRequestDto(
            first_name="some example string",
            last_name="some example string",
            email="some example string",
            role=InputRoleType.ADMIN,
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.create_user(
        CreateUserRequestDto(
            first_name="some example string",
            last_name="some example string",
            email="some example string",
            role=InputRoleType.ADMIN,
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateUserRequestDto](divvy/models/create_user_request_dto.py) \| [CreateUserRequestDtoDict](divvy/models/create_user_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](divvy/models/user_response_dto.py)</code> -- Create a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateUserErrorBody](divvy/errors/create_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_user(user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.users.delete_user("{{se_user_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

**Async**

```python
try:
    await async_client.users.delete_user("{{se_user_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteUserErrorBody](divvy/errors/delete_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_current_user(*, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> UserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about the current user. This is the user that generated the Spend & Expense API token.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.get_current_user(api_token="{{api_token}}")
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_current_user(api_token="{{api_token}}")
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](divvy/models/user_response_dto.py)</code> -- Get current user details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCurrentUserErrorBody](divvy/errors/get_current_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_user(user_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> UserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.get_user("{{se_user_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.get_user("{{se_user_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](divvy/models/user_response_dto.py)</code> -- Get user details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetUserErrorBody](divvy/errors/get_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_users(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects in the current user's company. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.list_users(max_=10, filters="retired:eq:false", api_token="{{api_token}}")
    # TODO: Handle 'response' of type PaginationResponseDtoUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.users.list_users(max_=10, filters="retired:eq:false", api_token="{{api_token}}")
    # TODO: Handle 'response' of type PaginationResponseDtoUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoUserResponseDto](divvy/models/pagination_response_dto_user_response_dto.py)</code> -- Get list of users response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListUsersErrorBody](divvy/errors/list_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_user(user_id: str, body: UpdateUserRequestDto | UpdateUserRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> UserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.users.update_user("{{se_user_uuid}}", UpdateUserRequestDto(), api_token="{{api_token}}")
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

**Async**

```python
try:
    response = await async_client.users.update_user(
        "{{se_user_uuid}}", UpdateUserRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type UserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateUserRequestDto](divvy/models/update_user_request_dto.py) \| [UpdateUserRequestDtoDict](divvy/models/update_user_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserResponseDto](divvy/models/user_response_dto.py)</code> -- Update a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateUserErrorBody](divvy/errors/update_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## VendorCredits

> Source: [VendorCredits](divvy/apis/vendor_credits.py)

<details>
<summary><code>def archive_vendor_credit(vendor_credit_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing vendor credit. In the response, the `archived` field is set as `true`. An archived vendor credit cannot be restored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.archive_vendor_credit(
        "{{vendor_credit_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.archive_vendor_credit(
        "{{vendor_credit_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_credit_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](divvy/models/vendor_credit_response_dto.py)</code> -- Archive a vendor credit response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveVendorCreditErrorBody](divvy/errors/archive_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_vendor_credit(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple vendor credits with one API request. In the response, the `archived` field for each object is set as `true`. An archived vendor credit cannot be restored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.bulk_archive_vendor_credit(
        "{{vendor_credit_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.bulk_archive_vendor_credit(
        "{{vendor_credit_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](divvy/models/vendor_credit_bulk_response_dto.py)</code> -- Archive multiple vendor credits response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveVendorCreditErrorBody](divvy/errors/bulk_archive_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_vendor_credit(body: list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one `POST /v3/vendor-credits/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.bulk_create_vendor_credit(
        [
            CreateVendorCreditRequestDto(
                vendor_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                vendor_credit_line_items=[CreateVendorCreditLineItemDto(amount=1.5)],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.bulk_create_vendor_credit(
        [
            CreateVendorCreditRequestDto(
                vendor_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                vendor_credit_line_items=[CreateVendorCreditLineItemDto(amount=1.5)],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateVendorCreditRequestDto](divvy/models/create_vendor_credit_request_dto.py) \| [CreateVendorCreditRequestDtoDict](divvy/models/create_vendor_credit_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](divvy/models/vendor_credit_bulk_response_dto.py)</code> -- Create multiple vendor credits response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateVendorCreditErrorBody](divvy/errors/bulk_create_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_replace_vendor_credit(body: list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in multiple vendor credits with one API request. You can also update other details for each vendor credit.

You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the vendor credit.
* When you omit an existing line item `id`, the line item is removed from the vendor credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.bulk_replace_vendor_credit(
        [
            ReplaceVendorCreditWithIdRequestDto(
                id="some example string",
                vendor_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                vendor_credit_line_items=[ReplaceVendorCreditLineItemDto(amount=1.5)],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkReplaceVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.bulk_replace_vendor_credit(
        [
            ReplaceVendorCreditWithIdRequestDto(
                id="some example string",
                vendor_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                vendor_credit_line_items=[ReplaceVendorCreditLineItemDto(amount=1.5)],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkReplaceVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[ReplaceVendorCreditWithIdRequestDto](divvy/models/replace_vendor_credit_with_id_request_dto.py) \| [ReplaceVendorCreditWithIdRequestDtoDict](divvy/models/replace_vendor_credit_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](divvy/models/vendor_credit_bulk_response_dto.py)</code> -- Replace multiple vendor credits response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkReplaceVendorCreditErrorBody](divvy/errors/bulk_replace_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_vendor_credit(body: list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about line items in multiple vendor credits with one API request. You can also update other vendor credit details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The vendor credit line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.bulk_update_vendor_credit(
        [UpdateVendorCreditWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.bulk_update_vendor_credit(
        [UpdateVendorCreditWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateVendorCreditWithIdRequestDto](divvy/models/update_vendor_credit_with_id_request_dto.py) \| [UpdateVendorCreditWithIdRequestDtoDict](divvy/models/update_vendor_credit_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditBulkResponseDto](divvy/models/vendor_credit_bulk_response_dto.py)</code> -- Update multiple vendor credits response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateVendorCreditErrorBody](divvy/errors/bulk_update_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_vendor_credit(body: CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a vendor credit.

With a vendor credit, you can adjust the amount that you owe a vendor.

See Vendor credits in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.create_vendor_credit(
        CreateVendorCreditRequestDto(
            vendor_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            vendor_credit_line_items=[CreateVendorCreditLineItemDto(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.create_vendor_credit(
        CreateVendorCreditRequestDto(
            vendor_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            vendor_credit_line_items=[CreateVendorCreditLineItemDto(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateVendorCreditRequestDto](divvy/models/create_vendor_credit_request_dto.py) \| [CreateVendorCreditRequestDtoDict](divvy/models/create_vendor_credit_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](divvy/models/vendor_credit_response_dto.py)</code> -- Create a vendor credit response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateVendorCreditErrorBody](divvy/errors/create_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vendor_credit(vendor_credit_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditWithUsageResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.get_vendor_credit(
        "{{vendor_credit_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.get_vendor_credit(
        "{{vendor_credit_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_credit_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditWithUsageResponseDto](divvy/models/vendor_credit_with_usage_response_dto.py)</code> -- Get vendor credit details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetVendorCreditErrorBody](divvy/errors/get_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vendor_credits(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoVendorCreditWithUsageResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.list_vendor_credits(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{vendor_credit_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoVendorCreditWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorCreditsErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.list_vendor_credits(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{vendor_credit_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoVendorCreditWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorCreditsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoVendorCreditWithUsageResponseDto](divvy/models/list_response_dto_vendor_credit_with_usage_response_dto.py)</code> -- Get list of vendor credits response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListVendorCreditsErrorBody](divvy/errors/list_vendor_credits_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_vendor_credit(vendor_credit_id: str, body: ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a vendor credit. You can also update other vendor credit details.

You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the vendor credit.
* When you omit an existing line item `id`, the line item is removed from the vendor credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.replace_vendor_credit(
        "{{vendor_credit_id}}",
        ReplaceVendorCreditRequestDto(
            vendor_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            vendor_credit_line_items=[ReplaceVendorCreditLineItemDto(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.replace_vendor_credit(
        "{{vendor_credit_id}}",
        ReplaceVendorCreditRequestDto(
            vendor_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            vendor_credit_line_items=[ReplaceVendorCreditLineItemDto(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_credit_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ReplaceVendorCreditRequestDto](divvy/models/replace_vendor_credit_request_dto.py) \| [ReplaceVendorCreditRequestDtoDict](divvy/models/replace_vendor_credit_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](divvy/models/vendor_credit_response_dto.py)</code> -- Replace a vendor credit response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ReplaceVendorCreditErrorBody](divvy/errors/replace_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vendor_credit(vendor_credit_id: str, body: UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorCreditResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a vendor credit line item. You can also update other vendor credit line item details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The vendor credit line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendor_credits.update_vendor_credit(
        "{{vendor_credit_id}}", UpdateVendorCreditRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVendorCreditErrorBody
```

**Async**

```python
try:
    response = await async_client.vendor_credits.update_vendor_credit(
        "{{vendor_credit_id}}", UpdateVendorCreditRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorCreditResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVendorCreditErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_credit_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateVendorCreditRequestDto](divvy/models/update_vendor_credit_request_dto.py) \| [UpdateVendorCreditRequestDtoDict](divvy/models/update_vendor_credit_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorCreditResponseDto](divvy/models/vendor_credit_response_dto.py)</code> -- Update a vendor credit response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateVendorCreditErrorBody](divvy/errors/update_vendor_credit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](divvy/apis/vendors.py)

<details>
<summary><code>def archive_vendor(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing vendor. In the response, the `archived` field is set as `true`.

You can restore an archived vendor with `POST /v3/vendors/{vendorId}/restore`. There is no change when you archive an archived vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.archive_vendor("{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.archive_vendor(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](divvy/models/vendor_response_dto.py)</code> -- Archive a vendor response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveVendorErrorBody](divvy/errors/archive_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bulk_vendor(body: list[VendorRequestDto | VendorRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BulkVendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple vendors with one API request. You can create up to 20 vendors with one `POST /v3/vendors/bulk` request.

In your bulk vendor creation request, all your vendors must be successfully created for a successful response. If any vendor creation is not successful, the entire request fails and none of the vendors in the request are created.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.

### Requirements for enabling electronic payments to vendors

Vendor bank account details are required for paying a vendor with electronic payment methods.

`paymentInformation` details about bank accounts are required for adding a vendor bank account.
* `payeeName`
* `bankCountry` (for international vendors)
* `paymentCurrency` (for international vendors)
* `nameOnAccount`
* `accountNumber`
* `routingNumber` (empty for an IBAN `accountNumber`)
* `type` (for international vendors)

`regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

See Vendors in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.create_bulk_vendor(
        [
            VendorRequestDto(
                name="some example string",
                address=Address4(
                    line1="some example string",
                    city="some example string",
                    zip_or_postal_code="some example string",
                    country=CountryCode.AD,
                ),
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BulkVendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBulkVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.create_bulk_vendor(
        [
            VendorRequestDto(
                name="some example string",
                address=Address4(
                    line1="some example string",
                    city="some example string",
                    zip_or_postal_code="some example string",
                    country=CountryCode.AD,
                ),
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BulkVendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBulkVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[VendorRequestDto](divvy/models/vendor_request_dto.py) \| [VendorRequestDtoDict](divvy/models/vendor_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkVendorResponseDto](divvy/models/bulk_vendor_response_dto.py)</code> -- Create multiple vendors response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBulkVendorErrorBody](divvy/errors/create_bulk_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_vendor(body: VendorRequestDto | VendorRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new vendor.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: A vendor can be enrolled to accept virtual card payments even without being connected in the BILL network. See Virtual card FAQ in the BILL Help Center for more information.

### Requirements for enabling electronic payments to vendors

Vendor bank account details are required for paying a vendor with electronic payment methods.

`paymentInformation` details about bank accounts are required for adding a vendor bank account.
* `payeeName`
* `bankCountry` (for international vendors)
* `paymentCurrency` (for international vendors)
* `nameOnAccount`
* `accountNumber`
* `routingNumber` (empty for an IBAN `accountNumber`)
* `type` (for international vendors)

`regulatoryFields` and `paymentPurpose` are additional required fields for enabling electronic payments to international vendors (not United States) in specific countries.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

See Vendors in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.create_vendor(
        VendorRequestDto(
            name="some example string",
            address=Address4(
                line1="some example string",
                city="some example string",
                zip_or_postal_code="some example string",
                country=CountryCode.AD,
            ),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.create_vendor(
        VendorRequestDto(
            name="some example string",
            address=Address4(
                line1="some example string",
                city="some example string",
                zip_or_postal_code="some example string",
                country=CountryCode.AD,
            ),
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[VendorRequestDto](divvy/models/vendor_request_dto.py) \| [VendorRequestDtoDict](divvy/models/vendor_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](divvy/models/vendor_response_dto.py)</code> -- Create a vendor response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateVendorErrorBody](divvy/errors/create_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_vendor_bank_account(vendor_id: str, body: VendorBankAccountRequestDto | VendorBankAccountRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a vendor bank account for an existing vendor.

To update vendor bank account information, you must first delete the existing vendor bank account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.

**Note**: When you add a vendor bank account in the production environment, BILL requires 2 business days to complete a one-time verification of the bank account. To pay such a vendor, you must set a `processDate` that is 2 business days from the current date.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.create_vendor_bank_account(
        "{{vendor_id}}",
        VendorBankAccountRequestDto(account_number="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.create_vendor_bank_account(
        "{{vendor_id}}",
        VendorBankAccountRequestDto(account_number="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type VendorBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateVendorBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[VendorBankAccountRequestDto](divvy/models/vendor_bank_account_request_dto.py) \| [VendorBankAccountRequestDtoDict](divvy/models/vendor_bank_account_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorBankAccountResponseDto](divvy/models/vendor_bank_account_response_dto.py)</code> -- Create a vendor bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateVendorBankAccountErrorBody](divvy/errors/create_vendor_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_vendor_bank_account(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the existing vendor bank account for a vendor.

To update vendor bank account information, you must first delete the existing vendor bank account (with `DELETE /v3/vendors/{vendorId}/bank-account`), and then create a new vendor bank account (with `POST /v3/vendors/{vendorId}/bank-account`) with the updated information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.vendors.delete_vendor_bank_account("{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVendorBankAccountErrorBody
```

**Async**

```python
try:
    await async_client.vendors.delete_vendor_bank_account(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteVendorBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteVendorBankAccountErrorBody](divvy/errors/delete_vendor_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_configuration_by_vendor_id(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorConfigurationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get international payments (not USD) configuration after vendor creation. This configuration is required for compliance with international payment rules of a vendor country and vendor bank account.

In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.

**Note**: If you are adding `paymentPurpose` and `regulatoryFields` information during international vendor creation, use `GET /v3/vendors/configuration/international-payments` to get the required configuration before vendor creation.

See Create an international vendor for more information on how to set `paymentPurpose` and `regulatoryFields`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.get_configuration_by_vendor_id(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorConfigurationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConfigurationByVendorIdErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.get_configuration_by_vendor_id(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorConfigurationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConfigurationByVendorIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorConfigurationResponseDto](divvy/models/vendor_configuration_response_dto.py)</code> -- Get vendor configuration response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetConfigurationByVendorIdErrorBody](divvy/errors/get_configuration_by_vendor_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_intl_config(country: CountryCodeOrStr, bill_currency: CurrencyCodeOrStr, account_type: AccountTypeRequestOrStr, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> IntlPmtsConfigurationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get international payments (not USD) configuration that is required for compliance with international payment rules of a vendor country and vendor bank account.

This information is based on vendor country, bill currency, and vendor account type. Use this endpoint for getting information before creating an international vendor. In the response, the required `paymentPurpose` and `regulatoryFields` information is retrieved for the vendor.

**Note**: If you are adding `paymentPurpose` and `regulatoryFields` information after creating an international vendor, use `GET /v3/vendors/{vendorId}/configuration` to get the required configuration for your created vendor.

See Create an international vendor for more information on how to set `paymentPurpose` and `regulatoryFields`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.get_intl_config(
        CountryCode.AD,
        CurrencyCode.AED,
        AccountTypeRequest.NONE,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type IntlPmtsConfigurationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntlConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.get_intl_config(
        CountryCode.AD,
        CurrencyCode.AED,
        AccountTypeRequest.NONE,
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type IntlPmtsConfigurationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetIntlConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>[CountryCodeOrStr](divvy/models/enums/country_code.py)</code> | Value sent with the request. |
| <code>bill_currency</code> | <code>[CurrencyCodeOrStr](divvy/models/enums/currency_code.py)</code> | Value sent with the request. |
| <code>account_type</code> | <code>[AccountTypeRequestOrStr](divvy/models/enums/account_type_request.py)</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntlPmtsConfigurationResponseDto](divvy/models/intl_pmts_configuration_response_dto.py)</code> -- Get international payments configuration response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetIntlConfigErrorBody](divvy/errors/get_intl_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vendor(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.get_vendor("{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.get_vendor(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](divvy/models/vendor_response_dto.py)</code> -- Get vendor details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetVendorErrorBody](divvy/errors/get_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_vendor_bank_account(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing vendor bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.get_vendor_bank_account(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.get_vendor_bank_account(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetVendorBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorBankAccountResponseDto](divvy/models/vendor_bank_account_response_dto.py)</code> -- Get vendor bank account details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetVendorBankAccountErrorBody](divvy/errors/get_vendor_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_vendors(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListVendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of vendor objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.list_vendors(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{vendor_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListVendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorsErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.list_vendors(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{vendor_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListVendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListVendorsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListVendorResponseDto](divvy/models/list_vendor_response_dto.py)</code> -- Get list of vendors response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListVendorsErrorBody](divvy/errors/list_vendors_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_vendor(vendor_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived vendor. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored vendors. There is no change when you restore a restored vendor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.restore_vendor("{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.restore_vendor(
        "{{vendor_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](divvy/models/vendor_response_dto.py)</code> -- Restore an archived vendor response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreVendorErrorBody](divvy/errors/restore_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_vendor(vendor_id: str, body: VendorUpdateRequestDto | VendorUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VendorResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing vendor.

### Requirements for enabling vendor payments

Vendor address details are required for paying a vendor by check or for inviting the vendor to join the BILL network.
* `line1`
* `city`
* `zipOrPostalCode`
* `country`
* `payeeName`

**Note**: You cannot add or update vendor bank account information with this endpoint. You can add and manage vendor bank account information with a dedicated set of endpoints.
* **Create a vendor bank account**: `POST /v3/vendors/{vendorId}/bank-account`
* **Get vendor bank account details**: `GET /v3/vendors/{vendorId}/bank-account`
* **Delete a vendor bank account**: `DELETE /v3/vendors/{vendorId}/bank-account`

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.vendors.update_vendor(
        "{{vendor_id}}", VendorUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVendorErrorBody
```

**Async**

```python
try:
    response = await async_client.vendors.update_vendor(
        "{{vendor_id}}", VendorUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VendorResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateVendorErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[VendorUpdateRequestDto](divvy/models/vendor_update_request_dto.py) \| [VendorUpdateRequestDtoDict](divvy/models/vendor_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VendorResponseDto](divvy/models/vendor_response_dto.py)</code> -- Update a vendor response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateVendorErrorBody](divvy/errors/update_vendor_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BillApprovals

> Source: [BillApprovals](divvy/apis/bill_approvals.py)

<details>
<summary><code>def bill_approve_deny_actions(body: list[BillApproveDenyActionRequestDto | BillApproveDenyActionRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects, where each object represents a single bill along with its approval or denial status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bill_approvals.bill_approve_deny_actions(
        [BillApproveDenyActionRequestDto(bill_id="some example string", action=BillApproveDenyAction.APPROVE)],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BillApproveDenyActionsErrorBody
```

**Async**

```python
try:
    response = await async_client.bill_approvals.bill_approve_deny_actions(
        [BillApproveDenyActionRequestDto(bill_id="some example string", action=BillApproveDenyAction.APPROVE)],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BillApproveDenyActionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[BillApproveDenyActionRequestDto](divvy/models/bill_approve_deny_action_request_dto.py) \| [BillApproveDenyActionRequestDtoDict](divvy/models/bill_approve_deny_action_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](divvy/models/status_dto.py)</code> -- Approve or deny a bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BillApproveDenyActionsErrorBody](divvy/errors/bill_approve_deny_actions_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bill_approval_policy(body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillApprovalPolicyResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bill approval policy.

In your request, set `rules` and `approvers` in the specified format. For example, to create a bill approval policy for all bills greater than or equal to `$1000`, set `rules` for `BILL_AMOUNT`.
``
{
"policyName": "Approval policy for bills >= $1000",
"rules": [
{
"key": "BILL_AMOUNT",
"op": "gte",
"values": [
"1000"
]
}
],
"approvers": [
"{approver_user_id}"
]
}
``

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bill_approvals.create_bill_approval_policy(
        BillApprovalPolicyRequestDto(
            policy_name="some example string",
            rules=[BillApprovalPolicyCreateRuleDto()],
            approvers=["some example string"],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillApprovalPolicyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillApprovalPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.bill_approvals.create_bill_approval_policy(
        BillApprovalPolicyRequestDto(
            policy_name="some example string",
            rules=[BillApprovalPolicyCreateRuleDto()],
            approvers=["some example string"],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillApprovalPolicyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBillApprovalPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BillApprovalPolicyRequestDto](divvy/models/bill_approval_policy_request_dto.py) \| [BillApprovalPolicyRequestDtoDict](divvy/models/bill_approval_policy_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillApprovalPolicyResponseDto](divvy/models/bill_approval_policy_response_dto.py)</code> -- Create a bill approval policy response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBillApprovalPolicyErrorBody](divvy/errors/create_bill_approval_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_policy(policy_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing bill approval policy. A deleted approval policy cannot be restored. The deleted policy is not available in the list of approval policies.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bill_approvals.delete_policy(
        "{{bill_approval_policy_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.bill_approvals.delete_policy(
        "{{bill_approval_policy_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeletePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](divvy/models/status_dto.py)</code> -- Delete a bill approval policy response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeletePolicyErrorBody](divvy/errors/delete_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bill_approval_policies(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[BillApprovalPolicyResponseDto]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bill approval policy objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bill_approvals.list_bill_approval_policies(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[BillApprovalPolicyResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillApprovalPoliciesErrorBody
```

**Async**

```python
try:
    response = await async_client.bill_approvals.list_bill_approval_policies(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[BillApprovalPolicyResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillApprovalPoliciesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[BillApprovalPolicyResponseDto](divvy/models/bill_approval_policy_response_dto.py)&#93;</code> -- Get list of bill approval policies response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBillApprovalPoliciesErrorBody](divvy/errors/list_bill_approval_policies_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bill_user_approvals(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListBillUserApprovalsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bills that are pending approval by a user. In the response, you get the list of bills that are pending approval for the currently signed-in user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bill_approvals.list_bill_user_approvals(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type ListBillUserApprovalsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillUserApprovalsErrorBody
```

**Async**

```python
try:
    response = await async_client.bill_approvals.list_bill_user_approvals(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListBillUserApprovalsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBillUserApprovalsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListBillUserApprovalsResponseDto](divvy/models/list_bill_user_approvals_response_dto.py)</code> -- Get list of bills pending approval response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBillUserApprovalsErrorBody](divvy/errors/list_bill_user_approvals_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bill_approval_policy(policy_id: str, body: BillApprovalPolicyRequestDto | BillApprovalPolicyRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BillApprovalPolicyResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing bill approval policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.bill_approvals.update_bill_approval_policy(
        "{{bill_approval_policy_id}}",
        BillApprovalPolicyRequestDto(
            policy_name="some example string",
            rules=[BillApprovalPolicyCreateRuleDto()],
            approvers=["some example string"],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillApprovalPolicyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBillApprovalPolicyErrorBody
```

**Async**

```python
try:
    response = await async_client.bill_approvals.update_bill_approval_policy(
        "{{bill_approval_policy_id}}",
        BillApprovalPolicyRequestDto(
            policy_name="some example string",
            rules=[BillApprovalPolicyCreateRuleDto()],
            approvers=["some example string"],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BillApprovalPolicyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBillApprovalPolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>policy_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BillApprovalPolicyRequestDto](divvy/models/bill_approval_policy_request_dto.py) \| [BillApprovalPolicyRequestDtoDict](divvy/models/bill_approval_policy_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BillApprovalPolicyResponseDto](divvy/models/bill_approval_policy_response_dto.py)</code> -- Update a bill approval policy response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateBillApprovalPolicyErrorBody](divvy/errors/update_bill_approval_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CreditMemos

> Source: [CreditMemos](divvy/apis/credit_memos.py)

<details>
<summary><code>def archive_credit_memo(credit_memo_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing credit memo. In the response, the `archived` field is set as `true`.

You can restore an archived credit memo with
`POST /v3/credit-memos/{creditMemoId}/restore`. There is no change when you archive an archived credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.archive_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.archive_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credit_memo_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](divvy/models/credit_memo_response_dto.py)</code> -- Archive a credit memo response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveCreditMemoErrorBody](divvy/errors/archive_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_archive_credit_memo(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive multiple credit memos with one API request. In the response, the `archived` field for each object is set as `true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.bulk_archive_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.bulk_archive_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkArchiveCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](divvy/models/credit_memo_bulk_response_dto.py)</code> -- Archive multiple credit memos response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkArchiveCreditMemoErrorBody](divvy/errors/bulk_archive_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_create_credit_memo(body: list[CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create multiple credit memos with one API request. You can create up to 50 credit memos with one `POST /v3/credit-memos/bulk` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.bulk_create_credit_memo(
        [
            CreateCreditMemoRequestDto(
                customer_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                credit_memo_line_items=[CreateCreditMemoLineItemDto()],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.bulk_create_credit_memo(
        [
            CreateCreditMemoRequestDto(
                customer_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                credit_memo_line_items=[CreateCreditMemoLineItemDto()],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkCreateCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[CreateCreditMemoRequestDto](divvy/models/create_credit_memo_request_dto.py) \| [CreateCreditMemoRequestDtoDict](divvy/models/create_credit_memo_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](divvy/models/credit_memo_bulk_response_dto.py)</code> -- Create multiple credit memos response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkCreateCreditMemoErrorBody](divvy/errors/bulk_create_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_replace_credit_memo(body: list[ReplaceCreditMemoWithIdRequestDto | ReplaceCreditMemoWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in multiple credit memos with one API request. You can also update other details for each credit memo.

You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the credit memo.
* When you omit an existing line item `id`, the line item is removed from the credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.bulk_replace_credit_memo(
        [
            ReplaceCreditMemoWithIdRequestDto(
                id="some example string",
                customer_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                credit_memo_line_items=[ReplaceCreditMemoLineItemDto()],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkReplaceCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.bulk_replace_credit_memo(
        [
            ReplaceCreditMemoWithIdRequestDto(
                id="some example string",
                customer_id="some example string",
                reference_number="some example string",
                credit_date=date(2024, 1, 15),
                credit_memo_line_items=[ReplaceCreditMemoLineItemDto()],
            ),
        ],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkReplaceCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[ReplaceCreditMemoWithIdRequestDto](divvy/models/replace_credit_memo_with_id_request_dto.py) \| [ReplaceCreditMemoWithIdRequestDtoDict](divvy/models/replace_credit_memo_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](divvy/models/credit_memo_bulk_response_dto.py)</code> -- Replace multiple credit memos response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkReplaceCreditMemoErrorBody](divvy/errors/bulk_replace_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_restore_credit_memo(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore multiple credit memos with one API request. In the response, the `archived` field for each object is set as `false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.bulk_restore_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.bulk_restore_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkRestoreCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ids</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](divvy/models/credit_memo_bulk_response_dto.py)</code> -- Restore multiple credit memos response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkRestoreCreditMemoErrorBody](divvy/errors/bulk_restore_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_credit_memo(body: list[UpdateCreditMemoWithIdRequestDto | UpdateCreditMemoWithIdRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoBulkResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about line items in multiple credit memos with one API request. You can also update other credit memo details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The credit memo line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.bulk_update_credit_memo(
        [UpdateCreditMemoWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.bulk_update_credit_memo(
        [UpdateCreditMemoWithIdRequestDto(id="some example string")],
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoBulkResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[UpdateCreditMemoWithIdRequestDto](divvy/models/update_credit_memo_with_id_request_dto.py) \| [UpdateCreditMemoWithIdRequestDtoDict](divvy/models/update_credit_memo_with_id_request_dto.py)&#93;</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoBulkResponseDto](divvy/models/credit_memo_bulk_response_dto.py)</code> -- Update multiple credit memos response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[BulkUpdateCreditMemoErrorBody](divvy/errors/bulk_update_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_credit_memo(body: CreateCreditMemoRequestDto | CreateCreditMemoRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new credit memo.

With a credit memo, you can adjust the invoice amount owed by a customer.

See Credit memos in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.create_credit_memo(
        CreateCreditMemoRequestDto(
            customer_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            credit_memo_line_items=[CreateCreditMemoLineItemDto()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.create_credit_memo(
        CreateCreditMemoRequestDto(
            customer_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            credit_memo_line_items=[CreateCreditMemoLineItemDto()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCreditMemoRequestDto](divvy/models/create_credit_memo_request_dto.py) \| [CreateCreditMemoRequestDtoDict](divvy/models/create_credit_memo_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](divvy/models/credit_memo_response_dto.py)</code> -- Create a credit memo response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateCreditMemoErrorBody](divvy/errors/create_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_credit_memo(credit_memo_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoWithUsageResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.get_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.get_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credit_memo_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoWithUsageResponseDto](divvy/models/credit_memo_with_usage_response_dto.py)</code> -- Get credit memo details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCreditMemoErrorBody](divvy/errors/get_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_credit_memos(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoCreditMemoWithUsageResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of credit memo objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.list_credit_memos(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{credit_memo_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCreditMemoWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCreditMemosErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.list_credit_memos(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{credit_memo_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoCreditMemoWithUsageResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCreditMemosErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoCreditMemoWithUsageResponseDto](divvy/models/list_response_dto_credit_memo_with_usage_response_dto.py)</code> -- Get list of credit memos response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCreditMemosErrorBody](divvy/errors/list_credit_memos_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_credit_memo(credit_memo_id: str, body: ReplaceCreditMemoRequestDto | ReplaceCreditMemoRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a credit memo. You can also update other credit memo details.

You can use the PUT operation to add, remove, or replace the number of line items in a credit memo. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the credit memo.
* When you omit an existing line item `id`, the line item is removed from the credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.replace_credit_memo(
        "{{credit_memo_id}}",
        ReplaceCreditMemoRequestDto(
            customer_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            credit_memo_line_items=[ReplaceCreditMemoLineItemDto()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.replace_credit_memo(
        "{{credit_memo_id}}",
        ReplaceCreditMemoRequestDto(
            customer_id="some example string",
            reference_number="some example string",
            credit_date=date(2024, 1, 15),
            credit_memo_line_items=[ReplaceCreditMemoLineItemDto()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credit_memo_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ReplaceCreditMemoRequestDto](divvy/models/replace_credit_memo_request_dto.py) \| [ReplaceCreditMemoRequestDtoDict](divvy/models/replace_credit_memo_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](divvy/models/credit_memo_response_dto.py)</code> -- Replace a credit memo response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ReplaceCreditMemoErrorBody](divvy/errors/replace_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_credit_memo(credit_memo_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived credit memo. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored credit memos. There is no change when you restore a restored credit memo.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.restore_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.restore_credit_memo(
        "{{credit_memo_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credit_memo_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](divvy/models/credit_memo_response_dto.py)</code> -- Restore a credit memo response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreCreditMemoErrorBody](divvy/errors/restore_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_credit_memo(credit_memo_id: str, body: UpdateCreditMemoRequestDto | UpdateCreditMemoRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CreditMemoResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a credit memo line item. You can also update other credit memo line item details.

You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and `description`. The credit memo line item `id` does not change with a PATCH operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.credit_memos.update_credit_memo(
        "{{credit_memo_id}}", UpdateCreditMemoRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCreditMemoErrorBody
```

**Async**

```python
try:
    response = await async_client.credit_memos.update_credit_memo(
        "{{credit_memo_id}}", UpdateCreditMemoRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CreditMemoResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateCreditMemoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credit_memo_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateCreditMemoRequestDto](divvy/models/update_credit_memo_request_dto.py) \| [UpdateCreditMemoRequestDtoDict](divvy/models/update_credit_memo_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditMemoResponseDto](divvy/models/credit_memo_response_dto.py)</code> -- Update a credit memo response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateCreditMemoErrorBody](divvy/errors/update_credit_memo_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FundingAccounts

> Source: [FundingAccounts](divvy/apis/funding_accounts.py)

<details>
<summary><code>def archive_bank_account(bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bank account. In the response, the `archived` field is set as `true`.

Archiving a bank account at BILL has a set of requirements.
* **Bank account status**: The bank account `status` must be set as `VERIFIED`. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* **Bank account user status**: The bank account user `verificationStatus` must be set as `VERIFIED`. To begin the verification process, nominate a bank account user with `POST /v3/funding-accounts/banks/users`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.archive_bank_account(
        "{{org_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.archive_bank_account(
        "{{org_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](divvy/models/organization_bank_account_response_dto.py)</code> -- Archive a bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveBankAccountErrorBody](divvy/errors/archive_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def archive_bank_account_user(bank_account_user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationBankAccountUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing bank account user. In the response, the `archived` field is set as `true` and the bank account user `verificationStatus` is set as `UNVERIFIED`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.archive_bank_account_user(
        "{{org_bank_account_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationBankAccountUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveBankAccountUserErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.archive_bank_account_user(
        "{{org_bank_account_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationBankAccountUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveBankAccountUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bank_account_user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountUserResponseDto](divvy/models/organization_bank_account_user_response_dto.py)</code> -- Archive a bank account user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveBankAccountUserErrorBody](divvy/errors/archive_bank_account_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_bank_account(body: OrganizationBankAccountCreateRequestDto | OrganizationBankAccountCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new bank account. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation. BILL sends an email notification for informing you about changes to your funding accounts.

When you create a bank account, BILL sends a test ACH payment to confirm whether the account details are accurate.

In the response, three fields are set to their default values.
* The bank account `status` is set as `PENDING`. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* The `payables` and `receivables` values are set as `false`. To update these values, update the bank account with `PATCH /v3/funding-accounts/banks/{bankAccountId}`.

**Note**: Creating a bank account requires an MFA-trusted API session. See MFA setup for information about the BILL MFA process.

See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.create_bank_account(
        OrganizationBankAccountCreateRequestDto(
            name_on_account="some example string",
            type_=BankAccountType.CHECKING,
            owner_type=BankAccountOwnerType.BUSINESS,
            bank_name="some example string",
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.create_bank_account(
        OrganizationBankAccountCreateRequestDto(
            name_on_account="some example string",
            type_=BankAccountType.CHECKING,
            owner_type=BankAccountOwnerType.BUSINESS,
            bank_name="some example string",
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationBankAccountCreateRequestDto](divvy/models/organization_bank_account_create_request_dto.py) \| [OrganizationBankAccountCreateRequestDtoDict](divvy/models/organization_bank_account_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](divvy/models/organization_bank_account_response_dto.py)</code> -- Create a bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateBankAccountErrorBody](divvy/errors/create_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_bank_account(bank_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing bank account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.get_bank_account(
        "{{org_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.get_bank_account(
        "{{org_bank_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](divvy/models/organization_bank_account_response_dto.py)</code> -- Get bank account details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetBankAccountErrorBody](divvy/errors/get_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_card_account(card_account_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> CardAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing card account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.get_card_account(
        "{{org_card_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CardAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCardAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.get_card_account(
        "{{org_card_account_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type CardAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCardAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CardAccountResponseDto](divvy/models/card_account_response_dto.py)</code> -- Get card account details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetCardAccountErrorBody](divvy/errors/get_card_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_funding_account_permission(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FundingAccountPermissionResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the funding account permissions available for the current organization and current organization user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.get_funding_account_permission(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type FundingAccountPermissionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFundingAccountPermissionErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.get_funding_account_permission(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type FundingAccountPermissionResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetFundingAccountPermissionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FundingAccountPermissionResponseDto](divvy/models/funding_account_permission_response_dto.py)</code> -- Get funding account permissions response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetFundingAccountPermissionErrorBody](divvy/errors/get_funding_account_permission_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bank_account_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, current_user: bool | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoOrganizationBankAccountUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bank account user objects. In the response, if the bank account user `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user can pay with the specified bank account.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.list_bank_account_users(
        max_=10,
        sort="archived",
        filters="id:eq:{{org_bank_account_user_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBankAccountUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.list_bank_account_users(
        max_=10,
        sort="archived",
        filters="id:eq:{{org_bank_account_user_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBankAccountUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_user</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationBankAccountUserResponseDto](divvy/models/list_response_dto_organization_bank_account_user_response_dto.py)</code> -- Get list of bank account users response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBankAccountUsersErrorBody](divvy/errors/list_bank_account_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_bank_accounts(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoOrganizationBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of bank account objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.list_bank_accounts(
        max_=10,
        sort="createdTime:desc",
        filters="bankAccountId:eq:{{org_bank_account_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBankAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.list_bank_accounts(
        max_=10,
        sort="createdTime:desc",
        filters="bankAccountId:eq:{{org_bank_account_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBankAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationBankAccountResponseDto](divvy/models/list_response_dto_organization_bank_account_response_dto.py)</code> -- Get list of bank accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListBankAccountsErrorBody](divvy/errors/list_bank_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_card_account_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, current_user: bool | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoOrganizationCardAccountUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card account user objects. In the response, if the card account user `verificationStatus` is set as `NOMINATED`, user verification must be completed before the user can pay with the specified card account.

By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.list_card_account_users(
        max_=10,
        sort="archived",
        filters="id:eq:{{org_card_account_user_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationCardAccountUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCardAccountUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.list_card_account_users(
        max_=10,
        sort="archived",
        filters="id:eq:{{org_card_account_user_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationCardAccountUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCardAccountUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>current_user</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationCardAccountUserResponseDto](divvy/models/list_response_dto_organization_card_account_user_response_dto.py)</code> -- Get list of card account users response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCardAccountUsersErrorBody](divvy/errors/list_card_account_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_card_funding_purposes(vendor_id: str, brand: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListCardFundingPurposesResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card funding purpose values based on the vendor and card brand.

When you create a payment (`POST /v3/payments` or `POST /v3/payments/bulk`) with a `CARD_ACCOUNT` funding account `type`, BILL requires a vendor industry value for compliance. When BILL cannot identify the vendor industry, the `cardFundingPurpose` field must be set in your payment request.

Use this endpoint to get the list of card funding purpose values you can set. If you get an empty 200 response, BILL has information about the vendor industry and setting the `cardFundingPurpose` field is not required in your payment request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.list_card_funding_purposes(
        "{{vendor_id}}", "visa", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListCardFundingPurposesResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCardFundingPurposesErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.list_card_funding_purposes(
        "{{vendor_id}}", "visa", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListCardFundingPurposesResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCardFundingPurposesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendor_id</code> | <code>str</code> | Value sent with the request. |
| <code>brand</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListCardFundingPurposesResponseDto](divvy/models/list_card_funding_purposes_response_dto.py)</code> -- Get card funding purpose response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListCardFundingPurposesErrorBody](divvy/errors/list_card_funding_purposes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payable_ap_cards(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ApCardResponseDto]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of AP Card objects.

With the AP Card, you can earn rewards simply by paying your bills. The AP Card is a payment method that enables you to send fast payments with no transaction fees or annual fees. You can use the AP Card with any vendor who accepts virtual card payments.

See AP Card Frequently Asked Questions (FAQs) in the BILL Help to learn more about AP Card.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.list_payable_ap_cards(session_id="{{session_id}}", dev_key="{{developer_key}}")
    # TODO: Handle 'response' of type list[ApCardResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayableApCardsErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.list_payable_ap_cards(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type list[ApCardResponseDto]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayableApCardsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ApCardResponseDto](divvy/models/ap_card_response_dto.py)&#93;</code> -- Get list of AP Cards response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPayableApCardsErrorBody](divvy/errors/list_payable_ap_cards_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payable_card_accounts(card_user_status: CardUserStatusOrStr, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListPayableCardAccountsResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of card account objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.list_payable_card_accounts(
        CardUserStatus.VERIFIED, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListPayableCardAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayableCardAccountsErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.list_payable_card_accounts(
        CardUserStatus.VERIFIED, session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ListPayableCardAccountsResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPayableCardAccountsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>card_user_status</code> | <code>[CardUserStatusOrStr](divvy/models/enums/card_user_status.py)</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListPayableCardAccountsResponseDto](divvy/models/list_payable_card_accounts_response_dto.py)</code> -- Get list of card accounts response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPayableCardAccountsErrorBody](divvy/errors/list_payable_card_accounts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def nominate_bank_account_user(body: NominateBankAccountUserRequestDto | NominateBankAccountUserRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> StatusDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Nominate a bank account user.

When you nominate a user, BILL performs a set of operations.
* The bank account user `verificationStatus` is set as `NOMINATED`.
* BILL sends the user an email asking them to sign in to the BILL web app and complete identity verification. See Verify your identity in the Guides section for test verification information you can enter in the sandbox environment.

After user identity verification is successful, the bank account user `verificationStatus` is set as `VERIFIED` and the user can pay with the specified bank account.

**Note**: The bank account `status` must be set as `VERIFIED` before you can nominate bank account users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.nominate_bank_account_user(
        NominateBankAccountUserRequestDto(user_id="some example string", bank_account_id="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NominateBankAccountUserErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.nominate_bank_account_user(
        NominateBankAccountUserRequestDto(user_id="some example string", bank_account_id="some example string"),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type StatusDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NominateBankAccountUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NominateBankAccountUserRequestDto](divvy/models/nominate_bank_account_user_request_dto.py) \| [NominateBankAccountUserRequestDtoDict](divvy/models/nominate_bank_account_user_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StatusDto](divvy/models/status_dto.py)</code> -- Nominate a bank account user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[NominateBankAccountUserErrorBody](divvy/errors/nominate_bank_account_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_bank_account(bank_account_id: str, body: OrganizationBankAccountUpdateRequestDto | OrganizationBankAccountUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationBankAccountResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing bank account.

This operation follows a set of rules.
* **Bank account `status` requirement**: The bank account `status` must be set as `VERIFIED` before you can update any details about the bank account. You can verify the bank account with `POST /v3/funding-accounts/banks/{bankAccountId}/verify`.
* **Update field restrictions**: You cannot update the `routingNumber`, `accountNumber`, and account `type` values for a bank account. If you want to update any of these values, create a new bank account with `POST /v3/funding-accounts/banks`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.update_bank_account(
        "{{org_bank_account_id}}",
        OrganizationBankAccountUpdateRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.update_bank_account(
        "{{org_bank_account_id}}",
        OrganizationBankAccountUpdateRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type OrganizationBankAccountResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[OrganizationBankAccountUpdateRequestDto](divvy/models/organization_bank_account_update_request_dto.py) \| [OrganizationBankAccountUpdateRequestDtoDict](divvy/models/organization_bank_account_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationBankAccountResponseDto](divvy/models/organization_bank_account_response_dto.py)</code> -- Update a bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateBankAccountErrorBody](divvy/errors/update_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def verify_bank_account(bank_account_id: str, body: BankAccountVerifyRequestDto | BankAccountVerifyRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BankAccountVerifyResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify an existing bank account.

When you create a bank account, BILL sends a test ACH payment to the bank account to confirm whether the account details are accurate. Enter the test amount as the `depositAmount` value in your `POST /v3/funding-accounts/banks/{bankAccountId}/verify` request.

**Note**: Bank account verification is required in the production environment before the account can be used for other BILL operations. In the sandbox environment, set `depositAmount` as `0.50` to complete bank account verification.

The bank account `status` is set as `VERIFIED` when BILL is able to verify the `depositAmount` value. BILL sends an email notification for confirming a test transaction. When BILL cannot verify the bank account after three attempts, you cannot use the bank account. At this point, use another bank account or create a bank account with `POST /v3/funding-accounts/banks`.

After your bank account verification is complete, ensure that the current bank account user `verificationStatus` is set as `VERIFIED` before you can use the bank account. To begin the verification process, nominate a bank account user with `POST /v3/funding-accounts/banks/users/nominate`.

See Bank account setup (v3 API) in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.funding_accounts.verify_bank_account(
        "{{org_bank_account_id}}",
        BankAccountVerifyRequestDto(deposit_amount=1.5),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BankAccountVerifyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyBankAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.funding_accounts.verify_bank_account(
        "{{org_bank_account_id}}",
        BankAccountVerifyRequestDto(deposit_amount=1.5),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type BankAccountVerifyResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type VerifyBankAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bank_account_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[BankAccountVerifyRequestDto](divvy/models/bank_account_verify_request_dto.py) \| [BankAccountVerifyRequestDtoDict](divvy/models/bank_account_verify_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BankAccountVerifyResponseDto](divvy/models/bank_account_verify_response_dto.py)</code> -- Verify a bank account response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[VerifyBankAccountErrorBody](divvy/errors/verify_bank_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationUsers

> Source: [OrganizationUsers](divvy/apis/organization_users.py)

<details>
<summary><code>def archive_organization_user(user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive an existing user. In the response, the `archived` field is set as `true`."

You can restore an archived user with `POST /v3/users/{userId}/restore`. There is no change when you archive an archived user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_users.archive_organization_user(
        "{{org_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveOrganizationUserErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_users.archive_organization_user(
        "{{org_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveOrganizationUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Archive a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveOrganizationUserErrorBody](divvy/errors/archive_organization_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_organization_user(body: OrganizationUserCreateRequestDto | OrganizationUserCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new user. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

When you create a user, BILL sends an email to the user for them to complete their sign-up. After user sign-up is complete, the user can access features in your BILL organization depending on the user role.

See Organizations and Users in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_users.create_organization_user(
        OrganizationUserCreateRequestDto(
            first_name="some example string",
            last_name="some example string",
            email="some example string",
            role_id="some example string",
            accept_terms_of_service=True,
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrganizationUserErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_users.create_organization_user(
        OrganizationUserCreateRequestDto(
            first_name="some example string",
            last_name="some example string",
            email="some example string",
            role_id="some example string",
            accept_terms_of_service=True,
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateOrganizationUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OrganizationUserCreateRequestDto](divvy/models/organization_user_create_request_dto.py) \| [OrganizationUserCreateRequestDtoDict](divvy/models/organization_user_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Create a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateOrganizationUserErrorBody](divvy/errors/create_organization_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_organization_user(user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_users.get_organization_user(
        "{{org_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationUserErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_users.get_organization_user(
        "{{org_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetOrganizationUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Get user details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetOrganizationUserErrorBody](divvy/errors/get_organization_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_organization_users(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoOrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of user objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_users.list_organization_users(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{org_user_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationUsersErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_users.list_organization_users(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{org_user_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoOrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListOrganizationUsersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoOrganizationUserResponseDto](divvy/models/list_response_dto_organization_user_response_dto.py)</code> -- Get list of users response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListOrganizationUsersErrorBody](divvy/errors/list_organization_users_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_organization_user(user_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived user. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored users. There is no change when you restore a restored user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_users.restore_organization_user(
        "{{org_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreOrganizationUserErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_users.restore_organization_user(
        "{{org_user_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreOrganizationUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Restore an archived user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreOrganizationUserErrorBody](divvy/errors/restore_organization_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_organization_user(user_id: str, body: OrganizationUserUpdateRequestDto | OrganizationUserUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> OrganizationUserResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.organization_users.update_organization_user(
        "{{org_user_id}}", OrganizationUserUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrganizationUserErrorBody
```

**Async**

```python
try:
    response = await async_client.organization_users.update_organization_user(
        "{{org_user_id}}", OrganizationUserUpdateRequestDto(), session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type OrganizationUserResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateOrganizationUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>user_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[OrganizationUserUpdateRequestDto](divvy/models/organization_user_update_request_dto.py) \| [OrganizationUserUpdateRequestDtoDict](divvy/models/organization_user_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrganizationUserResponseDto](divvy/models/organization_user_response_dto.py)</code> -- Update a user response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateOrganizationUserErrorBody](divvy/errors/update_organization_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentTerms

> Source: [PaymentTerms](divvy/apis/payment_terms.py)

<details>
<summary><code>def create_payment_term(organization_id: str, body: CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentTermResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new payment term for the organization. Use payment terms to set the number of days the customer has to pay a vendor. You can set `paymentTermId` in bills and invoices.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payment_terms.create_payment_term(
        "{{organization_id}}",
        CreatePaymentTermRequestDto(name="some example string", days_due=1),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentTermErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_terms.create_payment_term(
        "{{organization_id}}",
        CreatePaymentTermRequestDto(name="some example string", days_due=1),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePaymentTermErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CreatePaymentTermRequestDto](divvy/models/create_payment_term_request_dto.py) \| [CreatePaymentTermRequestDtoDict](divvy/models/create_payment_term_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentTermResponseDto](divvy/models/payment_term_response_dto.py)</code> -- Create a payment term response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreatePaymentTermErrorBody](divvy/errors/create_payment_term_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_payment_term(organization_id: str, payment_term_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentTermResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing payment term.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payment_terms.get_payment_term(
        "{{organization_id}}", "{{payment_term_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentTermErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_terms.get_payment_term(
        "{{organization_id}}", "{{payment_term_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type PaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPaymentTermErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>payment_term_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentTermResponseDto](divvy/models/payment_term_response_dto.py)</code> -- Get payment term details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetPaymentTermErrorBody](divvy/errors/get_payment_term_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_payment_terms(organization_id: str, *, max_: int | None = None, sort: str | None = None, filters: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoPaymentTermResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payment_terms.list_payment_terms(
        "{{organization_id}}",
        max_=10,
        sort="name:asc",
        filters="daysDue:eq:30",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoPaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentTermsErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_terms.list_payment_terms(
        "{{organization_id}}",
        max_=10,
        sort="name:asc",
        filters="daysDue:eq:30",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoPaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPaymentTermsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoPaymentTermResponseDto](divvy/models/list_response_dto_payment_term_response_dto.py)</code> -- Get list of payment terms response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListPaymentTermsErrorBody](divvy/errors/list_payment_terms_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_payment_term(organization_id: str, payment_term_id: str, body: UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaymentTermResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing payment term.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.payment_terms.update_payment_term(
        "{{organization_id}}",
        "{{payment_term_id}}",
        UpdatePaymentTermRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePaymentTermErrorBody
```

**Async**

```python
try:
    response = await async_client.payment_terms.update_payment_term(
        "{{organization_id}}",
        "{{payment_term_id}}",
        UpdatePaymentTermRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type PaymentTermResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdatePaymentTermErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>organization_id</code> | <code>str</code> | Value sent with the request. |
| <code>payment_term_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdatePaymentTermRequestDto](divvy/models/update_payment_term_request_dto.py) \| [UpdatePaymentTermRequestDtoDict](divvy/models/update_payment_term_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentTermResponseDto](divvy/models/payment_term_response_dto.py)</code> -- Update a payment term response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdatePaymentTermErrorBody](divvy/errors/update_payment_term_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ReceivablePayments

> Source: [ReceivablePayments](divvy/apis/receivable_payments.py)

<details>
<summary><code>def charge_customer(body: ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReceivablePaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Charge a customer for one or more invoices.

Charging a customer follows a set of rules.
* **Customer authorization**: The customer `authorizedToCharge` field must be set as `true` for you to charge the customer for invoices. Set charge customer authorization with `POST /v3/customers/{customerId}/charge-authorization`.
* **Customer bank account**: A customer bank account is required for you to charge a customer. Create a customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.receivable_payments.charge_customer(
        ChargeCustomerRequestDto(
            customer_id="some example string",
            funding_account=FundingAccount2(
                id="some example string", type_=ReceivableFundingAccountTypeRequestDto.BANK_ACCOUNT
            ),
            invoice_payments=[InvoicePayRequestDto(invoice_id="some example string", amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ReceivablePaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChargeCustomerErrorBody
```

**Async**

```python
try:
    response = await async_client.receivable_payments.charge_customer(
        ChargeCustomerRequestDto(
            customer_id="some example string",
            funding_account=FundingAccount2(
                id="some example string", type_=ReceivableFundingAccountTypeRequestDto.BANK_ACCOUNT
            ),
            invoice_payments=[InvoicePayRequestDto(invoice_id="some example string", amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ReceivablePaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ChargeCustomerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ChargeCustomerRequestDto](divvy/models/charge_customer_request_dto.py) \| [ChargeCustomerRequestDtoDict](divvy/models/charge_customer_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReceivablePaymentResponseDto](divvy/models/receivable_payment_response_dto.py)</code> -- Charge a customer response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ChargeCustomerErrorBody](divvy/errors/charge_customer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_receivable_payment(received_payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReceivablePaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing received payment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.receivable_payments.get_receivable_payment(
        "{{received_payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ReceivablePaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReceivablePaymentErrorBody
```

**Async**

```python
try:
    response = await async_client.receivable_payments.get_receivable_payment(
        "{{received_payment_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type ReceivablePaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReceivablePaymentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>received_payment_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReceivablePaymentResponseDto](divvy/models/receivable_payment_response_dto.py)</code> -- Get received payment details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetReceivablePaymentErrorBody](divvy/errors/get_receivable_payment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_receivable_payments(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoReceivablePaymentResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of received payment objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.receivable_payments.list_receivable_payments(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{received_payment_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoReceivablePaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReceivablePaymentsErrorBody
```

**Async**

```python
try:
    response = await async_client.receivable_payments.list_receivable_payments(
        max_=10,
        sort="createdTime:desc",
        filters="id:eq:{{received_payment_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoReceivablePaymentResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReceivablePaymentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoReceivablePaymentResponseDto](divvy/models/list_response_dto_receivable_payment_response_dto.py)</code> -- Get list of received payments response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListReceivablePaymentsErrorBody](divvy/errors/list_receivable_payments_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RecurringInvoices

> Source: [RecurringInvoices](divvy/apis/recurring_invoices.py)

<details>
<summary><code>def archive_recurring_invoice(recurring_invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a recurring invoice. In the response, the `archived` field is set as `true`.

You can restore an archived recurring invoice with `POST /v3/recurring-invoices/{recurringinvoiceId}/restore`. There is no change when you archive an archived recurring invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.archive_recurring_invoice(
        "{{recurring_invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveRecurringInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.archive_recurring_invoice(
        "{{recurring_invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveRecurringInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](divvy/models/recurring_invoice_response_dto.py)</code> -- Archive a recurring invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveRecurringInvoiceErrorBody](divvy/errors/archive_recurring_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_recurring_invoice(body: CreateRecurringInvoiceRequestDto | CreateRecurringInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring invoice.

See Recurring invoices in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.create_recurring_invoice(
        CreateRecurringInvoiceRequestDto(
            customer_id="some example string",
            schedule=Schedule(),
            recurring_invoice_line_items=[RecurringInvoiceLineItemDto()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRecurringInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.create_recurring_invoice(
        CreateRecurringInvoiceRequestDto(
            customer_id="some example string",
            schedule=Schedule(),
            recurring_invoice_line_items=[RecurringInvoiceLineItemDto()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRecurringInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateRecurringInvoiceRequestDto](divvy/models/create_recurring_invoice_request_dto.py) \| [CreateRecurringInvoiceRequestDtoDict](divvy/models/create_recurring_invoice_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](divvy/models/recurring_invoice_response_dto.py)</code> -- Create a recurring invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateRecurringInvoiceErrorBody](divvy/errors/create_recurring_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recurring_invoice(recurring_invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing recurring invoice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.get_recurring_invoice(
        "{{recurring_invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecurringInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.get_recurring_invoice(
        "{{recurring_invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecurringInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](divvy/models/recurring_invoice_response_dto.py)</code> -- Get recurring invoice details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetRecurringInvoiceErrorBody](divvy/errors/get_recurring_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_recurring_invoices(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListResponseDtoRecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of recurring invoice objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.list_recurring_invoices(
        max_=10,
        sort="archived",
        filters="id:eq:{{recurring_invoice_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoRecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecurringInvoicesErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.list_recurring_invoices(
        max_=10,
        sort="archived",
        filters="id:eq:{{recurring_invoice_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListResponseDtoRecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecurringInvoicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListResponseDtoRecurringInvoiceResponseDto](divvy/models/list_response_dto_recurring_invoice_response_dto.py)</code> -- Get list of recurring invoices response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListRecurringInvoicesErrorBody](divvy/errors/list_recurring_invoices_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_recurring_invoice(recurring_invoice_id: str, body: RecurringInvoiceReplaceRequestDto | RecurringInvoiceReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a recurring invoice. You can also update other recurring invoice details.

You can use the PUT operation to add, remove, or replace the number of line items in a recurring invoice. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the invoice.
* When you omit an existing line item `id`, the line item is removed from the invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.replace_recurring_invoice(
        "{{recurring_invoice_id}}",
        RecurringInvoiceReplaceRequestDto(
            customer_id="some example string",
            schedule=Schedule(),
            recurring_invoice_line_items=[RecurringInvoiceReplaceLineItem()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceRecurringInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.replace_recurring_invoice(
        "{{recurring_invoice_id}}",
        RecurringInvoiceReplaceRequestDto(
            customer_id="some example string",
            schedule=Schedule(),
            recurring_invoice_line_items=[RecurringInvoiceReplaceLineItem()],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceRecurringInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RecurringInvoiceReplaceRequestDto](divvy/models/recurring_invoice_replace_request_dto.py) \| [RecurringInvoiceReplaceRequestDtoDict](divvy/models/recurring_invoice_replace_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](divvy/models/recurring_invoice_response_dto.py)</code> -- Replace a recurring invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ReplaceRecurringInvoiceErrorBody](divvy/errors/replace_recurring_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_recurring_invoice(recurring_invoice_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived recurring invoice. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored recurring invoices. There is no change when you restore a restored recurring invoice.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.restore_recurring_invoice(
        "{{recurring_invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreRecurringInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.restore_recurring_invoice(
        "{{recurring_invoice_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreRecurringInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](divvy/models/recurring_invoice_response_dto.py)</code> -- Restore a recurring invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreRecurringInvoiceErrorBody](divvy/errors/restore_recurring_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_recurring_invoice(recurring_invoice_id: str, body: UpdateRecurringInvoiceRequestDto | UpdateRecurringInvoiceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringInvoiceResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a recurring invoice line item. You can also update other recurring invoice details.

You can use the PATCH operation to modify line item details, such as amount and description. The recurring invoice line item `id` does not change with a PATCH operation.

When a recurring invoice is modified, all future invoices are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurring_invoices.update_recurring_invoice(
        "{{recurring_invoice_id}}",
        UpdateRecurringInvoiceRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRecurringInvoiceErrorBody
```

**Async**

```python
try:
    response = await async_client.recurring_invoices.update_recurring_invoice(
        "{{recurring_invoice_id}}",
        UpdateRecurringInvoiceRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringInvoiceResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRecurringInvoiceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_invoice_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateRecurringInvoiceRequestDto](divvy/models/update_recurring_invoice_request_dto.py) \| [UpdateRecurringInvoiceRequestDtoDict](divvy/models/update_recurring_invoice_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringInvoiceResponseDto](divvy/models/recurring_invoice_response_dto.py)</code> -- Update a recurring invoice response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateRecurringInvoiceErrorBody](divvy/errors/update_recurring_invoice_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Recurringbills

> Source: [Recurringbills](divvy/apis/recurringbills.py)

<details>
<summary><code>def archive_recurring_bill(recurring_bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a recurring bill. In the response, the `archived` field is set as `true`.

You can restore an archived recurring bill with `POST /v3/recurringbills/{recurringbillId}/restore`. There is no change when you archive an archived recurring bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.archive_recurring_bill(
        "{{recurring_bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveRecurringBillErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.archive_recurring_bill(
        "{{recurring_bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ArchiveRecurringBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](divvy/models/recurring_bill_response_dto.py)</code> -- Archive a recurring bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ArchiveRecurringBillErrorBody](divvy/errors/archive_recurring_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_recurring_bill(body: RecurringBillCreateRequestDto | RecurringBillCreateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a recurring bill.

See Recurring bills in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.create_recurring_bill(
        RecurringBillCreateRequestDto(
            vendor_id="some example string",
            schedule=ScheduleBillV3RecurringbillsApi(),
            recurring_bill_line_items=[RecurringBillCreateLineItem(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRecurringBillErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.create_recurring_bill(
        RecurringBillCreateRequestDto(
            vendor_id="some example string",
            schedule=ScheduleBillV3RecurringbillsApi(),
            recurring_bill_line_items=[RecurringBillCreateLineItem(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRecurringBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RecurringBillCreateRequestDto](divvy/models/recurring_bill_create_request_dto.py) \| [RecurringBillCreateRequestDtoDict](divvy/models/recurring_bill_create_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](divvy/models/recurring_bill_response_dto.py)</code> -- Create a recurring bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateRecurringBillErrorBody](divvy/errors/create_recurring_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_recurring_bill(recurring_bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringBillReadResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing recurring bill.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.get_recurring_bill(
        "{{recurring_bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringBillReadResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecurringBillErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.get_recurring_bill(
        "{{recurring_bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringBillReadResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRecurringBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillReadResponseDto](divvy/models/recurring_bill_read_response_dto.py)</code> -- Get recurring bill details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetRecurringBillErrorBody](divvy/errors/get_recurring_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_recurring_bills(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ListRecurringBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of recurring bill objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.list_recurring_bills(
        max_=10,
        sort="archived",
        filters="id:eq:{{recurring_bill_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListRecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecurringBillsErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.list_recurring_bills(
        max_=10,
        sort="archived",
        filters="id:eq:{{recurring_bill_id}}",
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type ListRecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecurringBillsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ListRecurringBillResponseDto](divvy/models/list_recurring_bill_response_dto.py)</code> -- Get list of recurring bills response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListRecurringBillsErrorBody](divvy/errors/list_recurring_bills_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def replace_recurring_bill(recurring_bill_id: str, body: RecurringBillReplaceRequestDto | RecurringBillReplaceRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the number of line items in a recurring bill. You can also update other recurring bill details.

You can use the PUT operation to add, remove, or replace the number of line items in a recurring bill. A set of rules apply with the PUT operation.
* When you add a new line item, a new line item `id` is generated in the bill.
* When you omit an existing line item `id`, the line item is removed from the bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.replace_recurring_bill(
        "{{recurring_bill_id}}",
        RecurringBillReplaceRequestDto(
            vendor_id="some example string",
            schedule=ScheduleBillV3RecurringbillsApi(),
            recurring_bill_line_items=[RecurringBillReplaceLineItem(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceRecurringBillErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.replace_recurring_bill(
        "{{recurring_bill_id}}",
        RecurringBillReplaceRequestDto(
            vendor_id="some example string",
            schedule=ScheduleBillV3RecurringbillsApi(),
            recurring_bill_line_items=[RecurringBillReplaceLineItem(amount=1.5)],
        ),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReplaceRecurringBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RecurringBillReplaceRequestDto](divvy/models/recurring_bill_replace_request_dto.py) \| [RecurringBillReplaceRequestDtoDict](divvy/models/recurring_bill_replace_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](divvy/models/recurring_bill_response_dto.py)</code> -- Replace a recurring bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ReplaceRecurringBillErrorBody](divvy/errors/replace_recurring_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def restore_recurring_bill(recurring_bill_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restore an archived recurring bill. In the response, the `archived` field is set as `false`.

You can perform any valid BILL operation on restored recurring bills. There is no change when you restore a restored recurring bill.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.restore_recurring_bill(
        "{{recurring_bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreRecurringBillErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.restore_recurring_bill(
        "{{recurring_bill_id}}", session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RestoreRecurringBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](divvy/models/recurring_bill_response_dto.py)</code> -- Restore an archived recurring bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[RestoreRecurringBillErrorBody](divvy/errors/restore_recurring_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_recurring_bill(recurring_bill_id: str, body: RecurringBillUpdateRequestDto | RecurringBillUpdateRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RecurringBillResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about a recurring bill line item. You can also update other recurring bill details.

You can use the PATCH operation to modify line item details, such as amount and description. The recurring bill line item `id` does not change with a PATCH operation.

When a recurring bill is modified, all future bills are automatically changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.recurringbills.update_recurring_bill(
        "{{recurring_bill_id}}",
        RecurringBillUpdateRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRecurringBillErrorBody
```

**Async**

```python
try:
    response = await async_client.recurringbills.update_recurring_bill(
        "{{recurring_bill_id}}",
        RecurringBillUpdateRequestDto(),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
    # TODO: Handle 'response' of type RecurringBillResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateRecurringBillErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recurring_bill_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[RecurringBillUpdateRequestDto](divvy/models/recurring_bill_update_request_dto.py) \| [RecurringBillUpdateRequestDtoDict](divvy/models/recurring_bill_update_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecurringBillResponseDto](divvy/models/recurring_bill_response_dto.py)</code> -- Update a recurring bill response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateRecurringBillErrorBody](divvy/errors/update_recurring_bill_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Reimbursements

> Source: [Reimbursements](divvy/apis/reimbursements.py)

<details>
<summary><code>def add_reimbursement_receipt(reimbursement_id: str, body: ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ReceiptImage]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a receipt to an existing reimbursement.
In the request, use the same upload url that you used to upload the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.add_reimbursement_receipt(
        "{{se_reimbursement_uuid}}",
        ReimbursementReceiptRequestDto(url="some example string", filename="some example string"),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type list[ReceiptImage]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddReimbursementReceiptErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.add_reimbursement_receipt(
        "{{se_reimbursement_uuid}}",
        ReimbursementReceiptRequestDto(url="some example string", filename="some example string"),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type list[ReceiptImage]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddReimbursementReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursement_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ReimbursementReceiptRequestDto](divvy/models/reimbursement_receipt_request_dto.py) \| [ReimbursementReceiptRequestDtoDict](divvy/models/reimbursement_receipt_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ReceiptImage](divvy/models/receipt_image.py)&#93;</code> -- Add a reimbursement receipt response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[AddReimbursementReceiptErrorBody](divvy/errors/add_reimbursement_receipt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def approve_or_deny_reimbursement(reimbursement_id: str, body: ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReimbursementResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve or deny a reimbursement request.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.approve_or_deny_reimbursement(
        "{{se_reimbursement_uuid}}",
        ReimbursementActionRequestDto(action=ReimbursementActionType.APPROVE),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApproveOrDenyReimbursementErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.approve_or_deny_reimbursement(
        "{{se_reimbursement_uuid}}",
        ReimbursementActionRequestDto(action=ReimbursementActionType.APPROVE),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApproveOrDenyReimbursementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursement_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[ReimbursementActionRequestDto](divvy/models/reimbursement_action_request_dto.py) \| [ReimbursementActionRequestDtoDict](divvy/models/reimbursement_action_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](divvy/models/reimbursement_response_dto.py)</code> -- Approve or deny a reimbursement response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ApproveOrDenyReimbursementErrorBody](divvy/errors/approve_or_deny_reimbursement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_image_upload_url(*, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReimbursementImageUploadUrlResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a reimbursement image upload URL.

From the response, use the upload `url` to upload a receipt image for the reimbursement. For example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set the content type as `image/png`.

``
curl '{upload_url}'
-H 'Content-Type: image/jpeg'
--upload-file {file_name_with_extension}
``

**Note**: BILL supports JPG and PNG file formats for reimbursement images.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.create_image_upload_url(api_token="{{api_token}}")
    # TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateImageUploadUrlErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.create_image_upload_url(api_token="{{api_token}}")
    # TODO: Handle 'response' of type ReimbursementImageUploadUrlResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateImageUploadUrlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementImageUploadUrlResponseDto](divvy/models/reimbursement_image_upload_url_response_dto.py)</code> -- Create a reimbursement upload URL response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateImageUploadUrlErrorBody](divvy/errors/create_image_upload_url_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_reimbursement(body: CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReimbursementResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new reimbursement.

See Reimbursements in the Guides section for more information, sample requests, and responses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.create_reimbursement(
        CreateReimbursementRequestDto(
            user_id="some example string",
            budget_id="some example string",
            amount=1.5,
            note="some example string",
            merchant_name="some example string",
            occurred_date=date(2024, 1, 15),
            receipts=[ReimbursementReceiptRequestDto(url="some example string", filename="some example string")],
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReimbursementErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.create_reimbursement(
        CreateReimbursementRequestDto(
            user_id="some example string",
            budget_id="some example string",
            amount=1.5,
            note="some example string",
            merchant_name="some example string",
            occurred_date=date(2024, 1, 15),
            receipts=[ReimbursementReceiptRequestDto(url="some example string", filename="some example string")],
        ),
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReimbursementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateReimbursementRequestDto](divvy/models/create_reimbursement_request_dto.py) \| [CreateReimbursementRequestDtoDict](divvy/models/create_reimbursement_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](divvy/models/reimbursement_response_dto.py)</code> -- Create a reimbursement response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateReimbursementErrorBody](divvy/errors/create_reimbursement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_reimbursement(reimbursement_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is not available in the list of reimbursements.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.reimbursements.delete_reimbursement("{{se_reimbursement_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReimbursementErrorBody
```

**Async**

```python
try:
    await async_client.reimbursements.delete_reimbursement("{{se_reimbursement_uuid}}", api_token="{{api_token}}")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReimbursementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursement_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteReimbursementErrorBody](divvy/errors/delete_reimbursement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_reimbursement_receipt(reimbursement_id: str, receipt_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is not available in the reimbursement details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.reimbursements.delete_reimbursement_receipt(
        "{{se_reimbursement_uuid}}", "{{se_reimbursement_receipt_uuid}}", api_token="{{api_token}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReimbursementReceiptErrorBody
```

**Async**

```python
try:
    await async_client.reimbursements.delete_reimbursement_receipt(
        "{{se_reimbursement_uuid}}", "{{se_reimbursement_receipt_uuid}}", api_token="{{api_token}}"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReimbursementReceiptErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursement_id</code> | <code>str</code> | Value sent with the request. |
| <code>receipt_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[DeleteReimbursementReceiptErrorBody](divvy/errors/delete_reimbursement_receipt_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_reimbursement(reimbursement_id: str, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReimbursementResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about an existing reimbursement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.get_reimbursement("{{se_reimbursement_uuid}}", api_token="{{api_token}}")
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReimbursementErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.get_reimbursement(
        "{{se_reimbursement_uuid}}", api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReimbursementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursement_id</code> | <code>str</code> | Value sent with the request. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](divvy/models/reimbursement_response_dto.py)</code> -- Get reimbursement details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetReimbursementErrorBody](divvy/errors/get_reimbursement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_reimbursements(*, next_page: str | None = None, prev_page: str | None = None, max_: int | None = None, sort: str | None = None, filters: str | None = None, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginationResponseDtoReimbursementResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set `max` in your request to get up to 100 results on one page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.list_reimbursements(
        max_=10,
        sort="submittedTime:desc",
        filters="reimbursementIds:eq:{{se_reimbursement_uuid}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type PaginationResponseDtoReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReimbursementsErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.list_reimbursements(
        max_=10,
        sort="submittedTime:desc",
        filters="reimbursementIds:eq:{{se_reimbursement_uuid}}",
        api_token="{{api_token}}",
    )
    # TODO: Handle 'response' of type PaginationResponseDtoReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReimbursementsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>next_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>prev_page</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>max_</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>filters</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginationResponseDtoReimbursementResponseDto](divvy/models/pagination_response_dto_reimbursement_response_dto.py)</code> -- Get list of reimbursements response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[ListReimbursementsErrorBody](divvy/errors/list_reimbursements_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_reimbursement(reimbursement_id: str, body: UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ReimbursementResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update details about an existing reimbursement.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.reimbursements.update_reimbursement(
        "{{se_reimbursement_uuid}}", UpdateReimbursementRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateReimbursementErrorBody
```

**Async**

```python
try:
    response = await async_client.reimbursements.update_reimbursement(
        "{{se_reimbursement_uuid}}", UpdateReimbursementRequestDto(), api_token="{{api_token}}"
    )
    # TODO: Handle 'response' of type ReimbursementResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateReimbursementErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>reimbursement_id</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateReimbursementRequestDto](divvy/models/update_reimbursement_request_dto.py) \| [UpdateReimbursementRequestDtoDict](divvy/models/update_reimbursement_request_dto.py)</code> | The request body. |
| <code>api_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReimbursementResponseDto](divvy/models/reimbursement_response_dto.py)</code> -- Update a reimbursement response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[UpdateReimbursementErrorBody](divvy/errors/update_reimbursement_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RiskVerifications

> Source: [RiskVerifications](divvy/apis/risk_verifications.py)

<details>
<summary><code>def create_risk_verification_phone(body: PhoneVerificationRequestDto | PhoneVerificationRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.

You can check whether a phone number has been added for the user with `GET /v3/risk-verifications/phone`.

After you add a phone number with this endpoint, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.risk_verifications.create_risk_verification_phone(
        PhoneVerificationRequestDto(phone_number="some example string", phone_type=PhoneType.MOBILE),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRiskVerificationPhoneErrorBody
```

**Async**

```python
try:
    await async_client.risk_verifications.create_risk_verification_phone(
        PhoneVerificationRequestDto(phone_number="some example string", phone_type=PhoneType.MOBILE),
        session_id="{{session_id}}",
        dev_key="{{developer_key}}",
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRiskVerificationPhoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PhoneVerificationRequestDto](divvy/models/phone_verification_request_dto.py) \| [PhoneVerificationRequestDtoDict](divvy/models/phone_verification_request_dto.py)</code> | The request body. |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[CreateRiskVerificationPhoneErrorBody](divvy/errors/create_risk_verification_phone_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_risk_verification_phone(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> GetPhoneStatusResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether a phone number has been added for the currently signed-in user. BILL requires the signed-in user to have a linked phone number for initiating risk verification for the organization.

In the response, if `hasPhone` is `false`, you can add a phone number for the user with `POST /v3/risk-verifications/phone`.

After you add a phone number, you can initiate risk verification for the organization with `POST /v3/risk-verifications`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_verifications.get_risk_verification_phone(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type GetPhoneStatusResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRiskVerificationPhoneErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_verifications.get_risk_verification_phone(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type GetPhoneStatusResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRiskVerificationPhoneErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPhoneStatusResponseDto](divvy/models/get_phone_status_response_dto.py)</code> -- Get phone status for risk verification response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetRiskVerificationPhoneErrorBody](divvy/errors/get_risk_verification_phone_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_risk_verifications(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VerificationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get risk verification details for an existing organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_verifications.get_risk_verifications(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VerificationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRiskVerificationsErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_verifications.get_risk_verifications(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VerificationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRiskVerificationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerificationResponseDto](divvy/models/verification_response_dto.py)</code> -- Get risk verification details response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[GetRiskVerificationsErrorBody](divvy/errors/get_risk_verifications_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def initiate_risk_verifications(*, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> VerificationResponseDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiate risk verification for an organization. The currently signed-in user must have the `ADMINISTRATOR` user role in the BILL organization to perform this operation.

**Note**: You must add a phone number for the signed-in user (with `POST /v3/risk-verifications/phone`) before you can initiate risk verification. BILL partners must add a phone number for a created user with `POST /v3/partner/risk-verifications/{userId}/phone`.

As a BILL partner, when you create an organization and then create a user for that organization, it is important that you initiate risk verification with `POST /v3/risk-verifications`.

BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided organization information. BILL sends an email notification for risk verification. When the check is complete, BILL approves the organization for BILL AP and AR operations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.risk_verifications.initiate_risk_verifications(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VerificationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitiateRiskVerificationsErrorBody
```

**Async**

```python
try:
    response = await async_client.risk_verifications.initiate_risk_verifications(
        session_id="{{session_id}}", dev_key="{{developer_key}}"
    )
    # TODO: Handle 'response' of type VerificationResponseDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InitiateRiskVerificationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>dev_key</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](divvy/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[VerificationResponseDto](divvy/models/verification_response_dto.py)</code> -- Initiate risk verification for an organization response

**OnError**: <code>[ApiError](divvy/core/exceptions.py)&#91;[InitiateRiskVerificationsErrorBody](divvy/errors/initiate_risk_verifications_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| 500-599 | <code>list&#91;[BdcError](divvy/models/bdc_error.py)&#93;</code> |
| anything unmapped | <code>[RawError](divvy/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

