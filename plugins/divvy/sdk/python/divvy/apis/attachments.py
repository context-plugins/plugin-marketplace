from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_customer_attachment_error import (
    CreateCustomerAttachmentErrorBody,
    create_customer_attachment_error_mapper,
)
from ..errors.create_invoice_attachment_error import (
    CreateInvoiceAttachmentErrorBody,
    create_invoice_attachment_error_mapper,
)
from ..errors.create_vendor_attachment_error import (
    CreateVendorAttachmentErrorBody,
    create_vendor_attachment_error_mapper,
)
from ..errors.delete_attachment_error import DeleteAttachmentErrorBody, delete_attachment_error_mapper
from ..errors.get_attachment_error import GetAttachmentErrorBody, get_attachment_error_mapper
from ..errors.list_customer_attachments_error import (
    ListCustomerAttachmentsErrorBody,
    list_customer_attachments_error_mapper,
)
from ..errors.list_invoice_attachments_error import (
    ListInvoiceAttachmentsErrorBody,
    list_invoice_attachments_error_mapper,
)
from ..errors.list_vendor_attachments_error import ListVendorAttachmentsErrorBody, list_vendor_attachments_error_mapper
from ..models.attachment_response_dto import AttachmentResponseDto
from ..models.list_response_dto_attachment_response_dto import ListResponseDtoAttachmentResponseDto
from ..models.status_dto import StatusDto
from ..server.server import Server


class Attachments:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AttachmentsWithRawResponse(client, server)

    def create_customer_attachment(
        self,
        customer_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Upload an attachment for an existing customer. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload customer attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_attachment(
                customer_id, name, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_invoice_attachment(
        self,
        invoice_id: str,
        name: str,
        body: list[str],
        *,
        replace_invoice_pdf: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Upload an attachment for an existing invoice. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            replace_invoice_pdf: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload invoice attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_invoice_attachment(
                invoice_id,
                name,
                body,
                replace_invoice_pdf=replace_invoice_pdf,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def create_vendor_attachment(
        self,
        vendor_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Upload an attachment for an existing vendor. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload vendor attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_vendor_attachment(
                vendor_id, name, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def delete_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not
        available in the list of attachments.

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete an attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_attachment(
                attachment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Get details about an attachment.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get attachment details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_attachment(
                attachment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_customer_attachments(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoAttachmentResponseDto:
        """Get a list of attachments associated with a customer.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of customer attachments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_customer_attachments(
                customer_id,
                max_=max_,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_invoice_attachments(
        self,
        invoice_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoAttachmentResponseDto:
        """Get a list of attachments associated with an invoice.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            invoice_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of invoice attachments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_invoice_attachments(
                invoice_id,
                max_=max_,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_vendor_attachments(
        self,
        vendor_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoAttachmentResponseDto:
        """Get a list of attachments associated with a vendor.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            vendor_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of vendor attachments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_vendor_attachments(
                vendor_id, max_=max_, page=page, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AttachmentsWithRawResponse:
        return self._with_raw_response


class AsyncAttachments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAttachmentsWithRawResponse(client, server)

    async def create_customer_attachment(
        self,
        customer_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Upload an attachment for an existing customer. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload customer attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_attachment(
                customer_id, name, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_invoice_attachment(
        self,
        invoice_id: str,
        name: str,
        body: list[str],
        *,
        replace_invoice_pdf: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Upload an attachment for an existing invoice. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            replace_invoice_pdf: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload invoice attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_invoice_attachment(
                invoice_id,
                name,
                body,
                replace_invoice_pdf=replace_invoice_pdf,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def create_vendor_attachment(
        self,
        vendor_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Upload an attachment for an existing vendor. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload vendor attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_vendor_attachment(
                vendor_id, name, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def delete_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StatusDto:
        """Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not
        available in the list of attachments.

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete an attachment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_attachment(
                attachment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AttachmentResponseDto:
        """Get details about an attachment.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get attachment details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_attachment(
                attachment_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_customer_attachments(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoAttachmentResponseDto:
        """Get a list of attachments associated with a customer.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of customer attachments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_customer_attachments(
                customer_id,
                max_=max_,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_invoice_attachments(
        self,
        invoice_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoAttachmentResponseDto:
        """Get a list of attachments associated with an invoice.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            invoice_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of invoice attachments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_invoice_attachments(
                invoice_id,
                max_=max_,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_vendor_attachments(
        self,
        vendor_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoAttachmentResponseDto:
        """Get a list of attachments associated with a vendor.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            vendor_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of vendor attachments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_vendor_attachments(
                vendor_id, max_=max_, page=page, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAttachmentsWithRawResponse:
        return self._with_raw_response


class AttachmentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_customer_attachment(
        self,
        customer_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, CreateCustomerAttachmentErrorBody]:
        """Upload an attachment for an existing customer. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/attachments/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[param[str]("name", name)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=json_decoder[AttachmentResponseDto],
            error_mapper=create_customer_attachment_error_mapper,
            request_options=request_options,
        )

    def create_invoice_attachment(
        self,
        invoice_id: str,
        name: str,
        body: list[str],
        *,
        replace_invoice_pdf: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, CreateInvoiceAttachmentErrorBody]:
        """Upload an attachment for an existing invoice. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            replace_invoice_pdf: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/attachments/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            query_params=[param[str]("name", name), param[bool | None]("replaceInvoicePdf", replace_invoice_pdf)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=json_decoder[AttachmentResponseDto],
            error_mapper=create_invoice_attachment_error_mapper,
            request_options=request_options,
        )

    def create_vendor_attachment(
        self,
        vendor_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, CreateVendorAttachmentErrorBody]:
        """Upload an attachment for an existing vendor. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/attachments/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            query_params=[param[str]("name", name)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=json_decoder[AttachmentResponseDto],
            error_mapper=create_vendor_attachment_error_mapper,
            request_options=request_options,
        )

    def delete_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, DeleteAttachmentErrorBody]:
        """Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not
        available in the list of attachments.

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/attachments/{attachmentId}"),
            path_params=[param[str]("attachmentId", attachment_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[StatusDto],
            error_mapper=delete_attachment_error_mapper,
            request_options=request_options,
        )

    def get_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, GetAttachmentErrorBody]:
        """Get details about an attachment.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/{attachmentId}"),
            path_params=[param[str]("attachmentId", attachment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[AttachmentResponseDto],
            error_mapper=get_attachment_error_mapper,
            request_options=request_options,
        )

    def list_customer_attachments(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoAttachmentResponseDto, ListCustomerAttachmentsErrorBody]:
        """Get a list of attachments associated with a customer.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoAttachmentResponseDto],
            error_mapper=list_customer_attachments_error_mapper,
            request_options=request_options,
        )

    def list_invoice_attachments(
        self,
        invoice_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoAttachmentResponseDto, ListInvoiceAttachmentsErrorBody]:
        """Get a list of attachments associated with an invoice.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            invoice_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoAttachmentResponseDto],
            error_mapper=list_invoice_attachments_error_mapper,
            request_options=request_options,
        )

    def list_vendor_attachments(
        self,
        vendor_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoAttachmentResponseDto, ListVendorAttachmentsErrorBody]:
        """Get a list of attachments associated with a vendor.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            vendor_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoAttachmentResponseDto],
            error_mapper=list_vendor_attachments_error_mapper,
            request_options=request_options,
        )


class AsyncAttachmentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_customer_attachment(
        self,
        customer_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, CreateCustomerAttachmentErrorBody]:
        """Upload an attachment for an existing customer. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            customer_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/attachments/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[param[str]("name", name)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=async_json_decoder[AttachmentResponseDto],
            error_mapper=create_customer_attachment_error_mapper,
            request_options=request_options,
        )

    async def create_invoice_attachment(
        self,
        invoice_id: str,
        name: str,
        body: list[str],
        *,
        replace_invoice_pdf: bool | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, CreateInvoiceAttachmentErrorBody]:
        """Upload an attachment for an existing invoice. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            replace_invoice_pdf: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/attachments/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            query_params=[param[str]("name", name), param[bool | None]("replaceInvoicePdf", replace_invoice_pdf)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=async_json_decoder[AttachmentResponseDto],
            error_mapper=create_invoice_attachment_error_mapper,
            request_options=request_options,
        )

    async def create_vendor_attachment(
        self,
        vendor_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, CreateVendorAttachmentErrorBody]:
        """Upload an attachment for an existing vendor. The file size limit is 6 MB.

        **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload process.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            vendor_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/attachments/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            query_params=[param[str]("name", name)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=async_json_decoder[AttachmentResponseDto],
            error_mapper=create_vendor_attachment_error_mapper,
            request_options=request_options,
        )

    async def delete_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StatusDto, DeleteAttachmentErrorBody]:
        """Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment is not
        available in the list of attachments.

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/attachments/{attachmentId}"),
            path_params=[param[str]("attachmentId", attachment_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[StatusDto],
            error_mapper=delete_attachment_error_mapper,
            request_options=request_options,
        )

    async def get_attachment(
        self,
        attachment_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AttachmentResponseDto, GetAttachmentErrorBody]:
        """Get details about an attachment.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            attachment_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/{attachmentId}"),
            path_params=[param[str]("attachmentId", attachment_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[AttachmentResponseDto],
            error_mapper=get_attachment_error_mapper,
            request_options=request_options,
        )

    async def list_customer_attachments(
        self,
        customer_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoAttachmentResponseDto, ListCustomerAttachmentsErrorBody]:
        """Get a list of attachments associated with a customer.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            customer_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/customers/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoAttachmentResponseDto],
            error_mapper=list_customer_attachments_error_mapper,
            request_options=request_options,
        )

    async def list_invoice_attachments(
        self,
        invoice_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoAttachmentResponseDto, ListInvoiceAttachmentsErrorBody]:
        """Get a list of attachments associated with an invoice.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            invoice_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoAttachmentResponseDto],
            error_mapper=list_invoice_attachments_error_mapper,
            request_options=request_options,
        )

    async def list_vendor_attachments(
        self,
        vendor_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoAttachmentResponseDto, ListVendorAttachmentsErrorBody]:
        """Get a list of attachments associated with a vendor.

        From the response, use ``downloadLink`` in a GET request to download the attachment.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
        ```

        Args:
            vendor_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/attachments/vendors/{vendorId}"),
            path_params=[param[str]("vendorId", vendor_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoAttachmentResponseDto],
            error_mapper=list_vendor_attachments_error_mapper,
            request_options=request_options,
        )
