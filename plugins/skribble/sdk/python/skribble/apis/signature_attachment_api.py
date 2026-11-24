from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_file_decoder,
    async_json_decoder,
    empty_response,
    file_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_signature_attachment_error import (
    CreateSignatureAttachmentErrorBody,
    create_signature_attachment_error_mapper,
)
from ..errors.delete_signature_attachment_error import (
    DeleteSignatureAttachmentErrorBody,
    delete_signature_attachment_error_mapper,
)
from ..errors.get_signature_attachment_content_error import (
    GetSignatureAttachmentContentErrorBody,
    get_signature_attachment_content_error_mapper,
)
from ..models.create_signature_attachment_request import (
    CreateSignatureAttachmentRequest,
    CreateSignatureAttachmentRequestDict,
)
from ..models.signature_response_skribble_signature_attachment_api import (
    SignatureResponseSkribbleSignatureAttachmentApi,
)
from ..server.server import Server


class SignatureAttachmentApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignatureAttachmentApiWithRawResponse(client, server, auth)

    def create_signature_attachment(
        self,
        sr_id: UUID,
        body: CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureResponseSkribbleSignatureAttachmentApi:
        """Use this endpoint to provide supplementary documents (for example, Terms & Conditions or appendices) to
        participants of a ``SignatureRequest``.

        Attachments are delivered to participants together with the ``SignatureRequest``.

        **Content type limits**: The Skribble API accepts PDF files, image files, Microsoft Office files, and plain text
        files.

        Allowed content types:
        - application/pdf
        - application/x-tika-msoffice
        - application/x-tika-ooxml
        - application/msword
        - application/vnd.openxmlformats-officedocument.wordprocessingml.document
        - application/vnd.ms-word.document.macroEnabled.12
        - application/vnd.ms-excel
        - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        - application/vnd.ms-excel.sheet.macroenabled.12
        - application/vnd.ms-powerpoint
        - application/vnd.openxmlformats-officedocument.presentationml.presentation
        - application/vnd.ms-powerpoint.presentation.macroEnabled.12
        - image/gif
        - image/jpeg
        - image/png
        - text/plain

        **Content size limits**: The maximum size of a single attachment is approximately 40 MB. The maximum request
        size is 60 MB. Exceeding it is rejected by the gateway in front of the API before the request reaches it,
        returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard Problem+JSON
        error envelope used elsewhere in this API; a fix to align it is planned.

        **Amount limits**: There is currently no limit on the number of attachments per SignatureRequest. Abuse of this
        service may result in enforced limits.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureAttachment object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Not acceptable Too many requests Internal server
                error Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.create_signature_attachment(sr_id, body, request_options=request_options))

    def delete_signature_attachment(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the attachment identified by ``ATTACHMENT_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.delete_signature_attachment(sr_id, attachment_id, request_options=request_options)
        )

    def get_signature_attachment_content(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Downloads the content of the attachment identified by ``ATTACHMENT_ID`` for the ``SignatureRequest`` with the
        ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Binary attachment content.

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_signature_attachment_content(
                sr_id, attachment_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SignatureAttachmentApiWithRawResponse:
        return self._with_raw_response


class AsyncSignatureAttachmentApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignatureAttachmentApiWithRawResponse(client, server, auth)

    async def create_signature_attachment(
        self,
        sr_id: UUID,
        body: CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureResponseSkribbleSignatureAttachmentApi:
        """Use this endpoint to provide supplementary documents (for example, Terms & Conditions or appendices) to
        participants of a ``SignatureRequest``.

        Attachments are delivered to participants together with the ``SignatureRequest``.

        **Content type limits**: The Skribble API accepts PDF files, image files, Microsoft Office files, and plain text
        files.

        Allowed content types:
        - application/pdf
        - application/x-tika-msoffice
        - application/x-tika-ooxml
        - application/msword
        - application/vnd.openxmlformats-officedocument.wordprocessingml.document
        - application/vnd.ms-word.document.macroEnabled.12
        - application/vnd.ms-excel
        - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        - application/vnd.ms-excel.sheet.macroenabled.12
        - application/vnd.ms-powerpoint
        - application/vnd.openxmlformats-officedocument.presentationml.presentation
        - application/vnd.ms-powerpoint.presentation.macroEnabled.12
        - image/gif
        - image/jpeg
        - image/png
        - text/plain

        **Content size limits**: The maximum size of a single attachment is approximately 40 MB. The maximum request
        size is 60 MB. Exceeding it is rejected by the gateway in front of the API before the request reaches it,
        returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard Problem+JSON
        error envelope used elsewhere in this API; a fix to align it is planned.

        **Amount limits**: There is currently no limit on the number of attachments per SignatureRequest. Abuse of this
        service may result in enforced limits.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureAttachment object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Not acceptable Too many requests Internal server
                error Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.create_signature_attachment(sr_id, body, request_options=request_options)
        )

    async def delete_signature_attachment(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the attachment identified by ``ATTACHMENT_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_signature_attachment(
                sr_id, attachment_id, request_options=request_options
            ),
        )

    async def get_signature_attachment_content(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Downloads the content of the attachment identified by ``ATTACHMENT_ID`` for the ``SignatureRequest`` with the
        ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Binary attachment content.

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_attachment_content(
                sr_id, attachment_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSignatureAttachmentApiWithRawResponse:
        return self._with_raw_response


class SignatureAttachmentApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_signature_attachment(
        self,
        sr_id: UUID,
        body: CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseSkribbleSignatureAttachmentApi, CreateSignatureAttachmentErrorBody]:
        """Use this endpoint to provide supplementary documents (for example, Terms & Conditions or appendices) to
        participants of a ``SignatureRequest``.

        Attachments are delivered to participants together with the ``SignatureRequest``.

        **Content type limits**: The Skribble API accepts PDF files, image files, Microsoft Office files, and plain text
        files.

        Allowed content types:
        - application/pdf
        - application/x-tika-msoffice
        - application/x-tika-ooxml
        - application/msword
        - application/vnd.openxmlformats-officedocument.wordprocessingml.document
        - application/vnd.ms-word.document.macroEnabled.12
        - application/vnd.ms-excel
        - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        - application/vnd.ms-excel.sheet.macroenabled.12
        - application/vnd.ms-powerpoint
        - application/vnd.openxmlformats-officedocument.presentationml.presentation
        - application/vnd.ms-powerpoint.presentation.macroEnabled.12
        - image/gif
        - image/jpeg
        - image/png
        - text/plain

        **Content size limits**: The maximum size of a single attachment is approximately 40 MB. The maximum request
        size is 60 MB. Exceeding it is rejected by the gateway in front of the API before the request reaches it,
        returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard Problem+JSON
        error envelope used elsewhere in this API; a fix to align it is planned.

        **Amount limits**: There is currently no limit on the number of attachments per SignatureRequest. Abuse of this
        service may result in enforced limits.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureAttachment object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_attachment_api(
                "/signature-requests/{SR_ID}/attachments"
            ),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponseSkribbleSignatureAttachmentApi],
            error_mapper=create_signature_attachment_error_mapper,
            request_options=request_options,
        )

    def delete_signature_attachment(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureAttachmentErrorBody]:
        """Deletes the attachment identified by ``ATTACHMENT_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_attachment_api(
                "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("ATTACHMENT_ID", attachment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_signature_attachment_error_mapper,
            request_options=request_options,
        )

    def get_signature_attachment_content(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, GetSignatureAttachmentContentErrorBody]:
        """Downloads the content of the attachment identified by ``ATTACHMENT_ID`` for the ``SignatureRequest`` with the
        ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_attachment_api(
                "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}/content"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("ATTACHMENT_ID", attachment_id)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=get_signature_attachment_content_error_mapper,
            request_options=request_options,
        )


class AsyncSignatureAttachmentApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_signature_attachment(
        self,
        sr_id: UUID,
        body: CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseSkribbleSignatureAttachmentApi, CreateSignatureAttachmentErrorBody]:
        """Use this endpoint to provide supplementary documents (for example, Terms & Conditions or appendices) to
        participants of a ``SignatureRequest``.

        Attachments are delivered to participants together with the ``SignatureRequest``.

        **Content type limits**: The Skribble API accepts PDF files, image files, Microsoft Office files, and plain text
        files.

        Allowed content types:
        - application/pdf
        - application/x-tika-msoffice
        - application/x-tika-ooxml
        - application/msword
        - application/vnd.openxmlformats-officedocument.wordprocessingml.document
        - application/vnd.ms-word.document.macroEnabled.12
        - application/vnd.ms-excel
        - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        - application/vnd.ms-excel.sheet.macroenabled.12
        - application/vnd.ms-powerpoint
        - application/vnd.openxmlformats-officedocument.presentationml.presentation
        - application/vnd.ms-powerpoint.presentation.macroEnabled.12
        - image/gif
        - image/jpeg
        - image/png
        - text/plain

        **Content size limits**: The maximum size of a single attachment is approximately 40 MB. The maximum request
        size is 60 MB. Exceeding it is rejected by the gateway in front of the API before the request reaches it,
        returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard Problem+JSON
        error envelope used elsewhere in this API; a fix to align it is planned.

        **Amount limits**: There is currently no limit on the number of attachments per SignatureRequest. Abuse of this
        service may result in enforced limits.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to create a SignatureAttachment object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_attachment_api(
                "/signature-requests/{SR_ID}/attachments"
            ),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSignatureAttachmentRequest | CreateSignatureAttachmentRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponseSkribbleSignatureAttachmentApi],
            error_mapper=create_signature_attachment_error_mapper,
            request_options=request_options,
        )

    async def delete_signature_attachment(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureAttachmentErrorBody]:
        """Deletes the attachment identified by ``ATTACHMENT_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_attachment_api(
                "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("ATTACHMENT_ID", attachment_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_signature_attachment_error_mapper,
            request_options=request_options,
        )

    async def get_signature_attachment_content(
        self, sr_id: UUID, attachment_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, GetSignatureAttachmentContentErrorBody]:
        """Downloads the content of the attachment identified by ``ATTACHMENT_ID`` for the ``SignatureRequest`` with the
        ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            attachment_id: Unique ID returned when the Signature Attachment is created.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_attachment_api(
                "/signature-requests/{SR_ID}/attachments/{ATTACHMENT_ID}/content"
            ),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("ATTACHMENT_ID", attachment_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=get_signature_attachment_content_error_mapper,
            request_options=request_options,
        )
