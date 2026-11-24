from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_document_in_signature_request_error import (
    AddDocumentInSignatureRequestErrorBody,
    add_document_in_signature_request_error_mapper,
)
from ..errors.create_signature_request_error import (
    CreateSignatureRequestErrorBody,
    create_signature_request_error_mapper,
)
from ..errors.delete_document_in_signature_request_error import (
    DeleteDocumentInSignatureRequestErrorBody,
    delete_document_in_signature_request_error_mapper,
)
from ..errors.delete_signature_request_error import (
    DeleteSignatureRequestErrorBody,
    delete_signature_request_error_mapper,
)
from ..errors.get_signature_request_details_error import (
    GetSignatureRequestDetailsErrorBody,
    get_signature_request_details_error_mapper,
)
from ..errors.initiate_signature_request_error import (
    InitiateSignatureRequestErrorBody,
    initiate_signature_request_error_mapper,
)
from ..errors.withdraw_signature_request_error import (
    WithdrawSignatureRequestErrorBody,
    withdraw_signature_request_error_mapper,
)
from ..models.create_signature_request import CreateSignatureRequest, CreateSignatureRequestDict
from ..models.signature_document_upload import SignatureDocumentUpload, SignatureDocumentUploadDict
from ..models.signature_response import SignatureResponse
from ..models.signature_response_v3 import SignatureResponseV3
from ..models.withdraw_signature_request import WithdrawSignatureRequest, WithdrawSignatureRequestDict
from ..server.server import Server


class Signature:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignatureWithRawResponse(client, server, auth)

    def add_document_in_signature_request(
        self,
        sr_id: UUID,
        body: SignatureDocumentUpload | SignatureDocumentUploadDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Adds an additional document to the ``SignatureRequest`` while it is still in ``DRAFT`` status.

        **Content size limits**: Very large document content is rejected by the gateway in front of the API before the
        request reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the
        standard Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Document
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.add_document_in_signature_request(sr_id, body, request_options=request_options)
        )

    def create_signature_request(
        self,
        body: CreateSignatureRequest | CreateSignatureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureResponseV3:
        """Creates a new ``SignatureRequest``, which is the primary object of the Skribble API. A ``SignatureRequest``
        defines who signs what and under which conditions. It specifies the documents to be signed, the list of required
        signers, the desired signature quality and legislation, and optional settings such as signing sequences,
        callback URLs, and access control.

        Compared to API v2, this version supports attaching multiple documents to a single ``SignatureRequest``.
        Additionally, the request no longer triggers invitations immediately. Instead, the ``SignatureRequest`` is
        created with a ``status_overall`` of ``DRAFT``.

        If you specify an owner using the ``creator`` field, that user will find the request in the Drafts section of
        their account, where they can review and complete the setup.

        Once ready, call ``/initiate`` to start the ``SignatureRequest`` and send out invitations.

        Args:
            body: Request body to create a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized The requested operation depends on a feature that is not enabled for the
                business. The response carries the problem type
                ``https://api.skribble.com/problem/feature-not-enabled``. Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.create_signature_request(body, request_options=request_options))

    def delete_document_in_signature_request(
        self, sr_id: UUID, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the document identified by ``DOC_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.delete_document_in_signature_request(sr_id, doc_id, request_options=request_options)
        )

    def delete_signature_request(self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes a ``SignatureRequest`` by its ID.

        **Important:** A ``SignatureRequest`` can only be deleted via the API if:

        1. the ``SignatureRequest`` has ``status_overall=OPEN``, and

        2. the API user has sufficient rights on the ``SignatureRequest``, e.g. when
        it was created by the API user.

        Deleting a ``SignatureRequest`` does not necessarily remove it from the system immediately.

        **WITHDRAWN**

        When the API user is the **owner** of the ``SignatureRequest`` and it is still in ``status_overall=OPEN``, the
        ``SignatureRequest`` will be **WITHDRAWN**.

        This means the ``SignatureRequest`` will transition to ``status_overall=WITHDRAWN`` and all pending signatures
        will be marked with ``status_code=WITHDRAWN``. Sign and read rights for all signers will be revoked, so invited
        signers can no longer read or sign the ``SignatureRequest``.

        **REMOVE AS PARTICIPANT**

        When the API user is a participant but not the owner of the ``SignatureRequest``, the ``DELETE`` request will
        only remove the API user as a participant.

        In this case, the system will remove the ``SignatureRequest`` and its related documents once the last remaining
        user deletes it via the Skribble web application.

        **DELETING**

        When the API user is the last user with access rights to the ``SignatureRequest`` (e.g. after a **WITHDRAW**),
        the ``SignatureRequest`` and its related documents will be permanently removed from the system.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.delete_signature_request(sr_id, request_options=request_options))

    def get_signature_request_details(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignatureResponseV3:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_signature_request_details(sr_id, request_options=request_options))

    def initiate_signature_request(self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Starts the signing process for a ``SignatureRequest`` in ``DRAFT`` status.

        This action sends out invitation emails and transitions ``status_overall`` from ``DRAFT`` to ``OPEN``. Once
        initiated, the ``SignatureRequest`` is no longer visible in the Drafts section and will appear in the
        appropriate section (e.g. Pending) for each participant.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.initiate_signature_request(sr_id, request_options=request_options))

    def withdraw_signature_request(
        self,
        sr_id: UUID,
        *,
        body: WithdrawSignatureRequest | WithdrawSignatureRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignatureResponse:
        """Withdraws a ``SignatureRequest``, for example when signing becomes unnecessary or an error occurred during
        the invitation process. As the inviter, you can explicitly withdraw the ``SignatureRequest``. This removes all
        signers and observers as participants and notifies them with a specified ``message``.

        Similar to deletion, the ``withdraw`` action can only be executed if:

        - The ``SignatureRequest`` has ``status_overall=OPEN``

        - The API user has sufficient rights on the ``SignatureRequest``, such as
        when it was created by the API user.

        > **Note**
        > We recommend using the ``delete`` endpoint, which automatically determines
        > the appropriate action. For example, if the API user does not have
        > withdrawal rights, they may instead be removed as a participant, or the
        > document may be deleted directly.
        >
        > Use the ``withdraw`` endpoint specifically when you need to withdraw the
        > ``SignatureRequest`` while keeping it in Skribble.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to withdraw a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Not acceptable Too many requests Internal server
                error Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.withdraw_signature_request(sr_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SignatureWithRawResponse:
        return self._with_raw_response


class AsyncSignature:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignatureWithRawResponse(client, server, auth)

    async def add_document_in_signature_request(
        self,
        sr_id: UUID,
        body: SignatureDocumentUpload | SignatureDocumentUploadDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Adds an additional document to the ``SignatureRequest`` while it is still in ``DRAFT`` status.

        **Content size limits**: Very large document content is rejected by the gateway in front of the API before the
        request reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the
        standard Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Document
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.add_document_in_signature_request(
                sr_id, body, request_options=request_options
            ),
        )

    async def create_signature_request(
        self,
        body: CreateSignatureRequest | CreateSignatureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureResponseV3:
        """Creates a new ``SignatureRequest``, which is the primary object of the Skribble API. A ``SignatureRequest``
        defines who signs what and under which conditions. It specifies the documents to be signed, the list of required
        signers, the desired signature quality and legislation, and optional settings such as signing sequences,
        callback URLs, and access control.

        Compared to API v2, this version supports attaching multiple documents to a single ``SignatureRequest``.
        Additionally, the request no longer triggers invitations immediately. Instead, the ``SignatureRequest`` is
        created with a ``status_overall`` of ``DRAFT``.

        If you specify an owner using the ``creator`` field, that user will find the request in the Drafts section of
        their account, where they can review and complete the setup.

        Once ready, call ``/initiate`` to start the ``SignatureRequest`` and send out invitations.

        Args:
            body: Request body to create a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized The requested operation depends on a feature that is not enabled for the
                business. The response carries the problem type
                ``https://api.skribble.com/problem/feature-not-enabled``. Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.create_signature_request(body, request_options=request_options))

    async def delete_document_in_signature_request(
        self, sr_id: UUID, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes the document identified by ``DOC_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_document_in_signature_request(
                sr_id, doc_id, request_options=request_options
            ),
        )

    async def delete_signature_request(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a ``SignatureRequest`` by its ID.

        **Important:** A ``SignatureRequest`` can only be deleted via the API if:

        1. the ``SignatureRequest`` has ``status_overall=OPEN``, and

        2. the API user has sufficient rights on the ``SignatureRequest``, e.g. when
        it was created by the API user.

        Deleting a ``SignatureRequest`` does not necessarily remove it from the system immediately.

        **WITHDRAWN**

        When the API user is the **owner** of the ``SignatureRequest`` and it is still in ``status_overall=OPEN``, the
        ``SignatureRequest`` will be **WITHDRAWN**.

        This means the ``SignatureRequest`` will transition to ``status_overall=WITHDRAWN`` and all pending signatures
        will be marked with ``status_code=WITHDRAWN``. Sign and read rights for all signers will be revoked, so invited
        signers can no longer read or sign the ``SignatureRequest``.

        **REMOVE AS PARTICIPANT**

        When the API user is a participant but not the owner of the ``SignatureRequest``, the ``DELETE`` request will
        only remove the API user as a participant.

        In this case, the system will remove the ``SignatureRequest`` and its related documents once the last remaining
        user deletes it via the Skribble web application.

        **DELETING**

        When the API user is the last user with access rights to the ``SignatureRequest`` (e.g. after a **WITHDRAW**),
        the ``SignatureRequest`` and its related documents will be permanently removed from the system.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.delete_signature_request(sr_id, request_options=request_options))

    async def get_signature_request_details(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignatureResponseV3:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_signature_request_details(sr_id, request_options=request_options)
        )

    async def initiate_signature_request(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Starts the signing process for a ``SignatureRequest`` in ``DRAFT`` status.

        This action sends out invitation emails and transitions ``status_overall`` from ``DRAFT`` to ``OPEN``. Once
        initiated, the ``SignatureRequest`` is no longer visible in the Drafts section and will appear in the
        appropriate section (e.g. Pending) for each participant.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.initiate_signature_request(sr_id, request_options=request_options))

    async def withdraw_signature_request(
        self,
        sr_id: UUID,
        *,
        body: WithdrawSignatureRequest | WithdrawSignatureRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignatureResponse:
        """Withdraws a ``SignatureRequest``, for example when signing becomes unnecessary or an error occurred during
        the invitation process. As the inviter, you can explicitly withdraw the ``SignatureRequest``. This removes all
        signers and observers as participants and notifies them with a specified ``message``.

        Similar to deletion, the ``withdraw`` action can only be executed if:

        - The ``SignatureRequest`` has ``status_overall=OPEN``

        - The API user has sufficient rights on the ``SignatureRequest``, such as
        when it was created by the API user.

        > **Note**
        > We recommend using the ``delete`` endpoint, which automatically determines
        > the appropriate action. For example, if the API user does not have
        > withdrawal rights, they may instead be removed as a participant, or the
        > document may be deleted directly.
        >
        > Use the ``withdraw`` endpoint specifically when you need to withdraw the
        > ``SignatureRequest`` while keeping it in Skribble.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to withdraw a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Not acceptable Too many requests Internal server
                error Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.withdraw_signature_request(sr_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSignatureWithRawResponse:
        return self._with_raw_response


class SignatureWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_document_in_signature_request(
        self,
        sr_id: UUID,
        body: SignatureDocumentUpload | SignatureDocumentUploadDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddDocumentInSignatureRequestErrorBody]:
        """Adds an additional document to the ``SignatureRequest`` while it is still in ``DRAFT`` status.

        **Content size limits**: Very large document content is rejected by the gateway in front of the API before the
        request reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the
        standard Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Document
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/documents"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignatureDocumentUpload | SignatureDocumentUploadDict](body),
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=add_document_in_signature_request_error_mapper,
            request_options=request_options,
        )

    def create_signature_request(
        self,
        body: CreateSignatureRequest | CreateSignatureRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseV3, CreateSignatureRequestErrorBody]:
        """Creates a new ``SignatureRequest``, which is the primary object of the Skribble API. A ``SignatureRequest``
        defines who signs what and under which conditions. It specifies the documents to be signed, the list of required
        signers, the desired signature quality and legislation, and optional settings such as signing sequences,
        callback URLs, and access control.

        Compared to API v2, this version supports attaching multiple documents to a single ``SignatureRequest``.
        Additionally, the request no longer triggers invitations immediately. Instead, the ``SignatureRequest`` is
        created with a ``status_overall`` of ``DRAFT``.

        If you specify an owner using the ``creator`` field, that user will find the request in the Drafts section of
        their account, where they can review and complete the setup.

        Once ready, call ``/initiate`` to start the ``SignatureRequest`` and send out invitations.

        Args:
            body: Request body to create a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSignatureRequest | CreateSignatureRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponseV3],
            error_mapper=create_signature_request_error_mapper,
            request_options=request_options,
        )

    def delete_document_in_signature_request(
        self, sr_id: UUID, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocumentInSignatureRequestErrorBody]:
        """Deletes the document identified by ``DOC_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/documents/{DOC_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("DOC_ID", doc_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_document_in_signature_request_error_mapper,
            request_options=request_options,
        )

    def delete_signature_request(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureRequestErrorBody]:
        """Deletes a ``SignatureRequest`` by its ID.

        **Important:** A ``SignatureRequest`` can only be deleted via the API if:

        1. the ``SignatureRequest`` has ``status_overall=OPEN``, and

        2. the API user has sufficient rights on the ``SignatureRequest``, e.g. when
        it was created by the API user.

        Deleting a ``SignatureRequest`` does not necessarily remove it from the system immediately.

        **WITHDRAWN**

        When the API user is the **owner** of the ``SignatureRequest`` and it is still in ``status_overall=OPEN``, the
        ``SignatureRequest`` will be **WITHDRAWN**.

        This means the ``SignatureRequest`` will transition to ``status_overall=WITHDRAWN`` and all pending signatures
        will be marked with ``status_code=WITHDRAWN``. Sign and read rights for all signers will be revoked, so invited
        signers can no longer read or sign the ``SignatureRequest``.

        **REMOVE AS PARTICIPANT**

        When the API user is a participant but not the owner of the ``SignatureRequest``, the ``DELETE`` request will
        only remove the API user as a participant.

        In this case, the system will remove the ``SignatureRequest`` and its related documents once the last remaining
        user deletes it via the Skribble web application.

        **DELETING**

        When the API user is the last user with access rights to the ``SignatureRequest`` (e.g. after a **WITHDRAW**),
        the ``SignatureRequest`` and its related documents will be permanently removed from the system.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_signature_request_error_mapper,
            request_options=request_options,
        )

    def get_signature_request_details(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignatureResponseV3, GetSignatureRequestDetailsErrorBody]:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponseV3],
            error_mapper=get_signature_request_details_error_mapper,
            request_options=request_options,
        )

    def initiate_signature_request(
        self, sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, InitiateSignatureRequestErrorBody]:
        """Starts the signing process for a ``SignatureRequest`` in ``DRAFT`` status.

        This action sends out invitation emails and transitions ``status_overall`` from ``DRAFT`` to ``OPEN``. Once
        initiated, the ``SignatureRequest`` is no longer visible in the Drafts section and will appear in the
        appropriate section (e.g. Pending) for each participant.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/initiate"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=initiate_signature_request_error_mapper,
            request_options=request_options,
        )

    def withdraw_signature_request(
        self,
        sr_id: UUID,
        *,
        body: WithdrawSignatureRequest | WithdrawSignatureRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponse, WithdrawSignatureRequestErrorBody]:
        """Withdraws a ``SignatureRequest``, for example when signing becomes unnecessary or an error occurred during
        the invitation process. As the inviter, you can explicitly withdraw the ``SignatureRequest``. This removes all
        signers and observers as participants and notifies them with a specified ``message``.

        Similar to deletion, the ``withdraw`` action can only be executed if:

        - The ``SignatureRequest`` has ``status_overall=OPEN``

        - The API user has sufficient rights on the ``SignatureRequest``, such as
        when it was created by the API user.

        > **Note**
        > We recommend using the ``delete`` endpoint, which automatically determines
        > the appropriate action. For example, if the API user does not have
        > withdrawal rights, they may instead be removed as a participant, or the
        > document may be deleted directly.
        >
        > Use the ``withdraw`` endpoint specifically when you need to withdraw the
        > ``SignatureRequest`` while keeping it in Skribble.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to withdraw a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/withdraw"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WithdrawSignatureRequest | WithdrawSignatureRequestDict | None](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[SignatureResponse],
            error_mapper=withdraw_signature_request_error_mapper,
            request_options=request_options,
        )


class AsyncSignatureWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_document_in_signature_request(
        self,
        sr_id: UUID,
        body: SignatureDocumentUpload | SignatureDocumentUploadDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AddDocumentInSignatureRequestErrorBody]:
        """Adds an additional document to the ``SignatureRequest`` while it is still in ``DRAFT`` status.

        **Content size limits**: Very large document content is rejected by the gateway in front of the API before the
        request reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the
        standard Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to add a Document
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/documents"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SignatureDocumentUpload | SignatureDocumentUploadDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=add_document_in_signature_request_error_mapper,
            request_options=request_options,
        )

    async def create_signature_request(
        self,
        body: CreateSignatureRequest | CreateSignatureRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponseV3, CreateSignatureRequestErrorBody]:
        """Creates a new ``SignatureRequest``, which is the primary object of the Skribble API. A ``SignatureRequest``
        defines who signs what and under which conditions. It specifies the documents to be signed, the list of required
        signers, the desired signature quality and legislation, and optional settings such as signing sequences,
        callback URLs, and access control.

        Compared to API v2, this version supports attaching multiple documents to a single ``SignatureRequest``.
        Additionally, the request no longer triggers invitations immediately. Instead, the ``SignatureRequest`` is
        created with a ``status_overall`` of ``DRAFT``.

        If you specify an owner using the ``creator`` field, that user will find the request in the Drafts section of
        their account, where they can review and complete the setup.

        Once ready, call ``/initiate`` to start the ``SignatureRequest`` and send out invitations.

        Args:
            body: Request body to create a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSignatureRequest | CreateSignatureRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponseV3],
            error_mapper=create_signature_request_error_mapper,
            request_options=request_options,
        )

    async def delete_document_in_signature_request(
        self, sr_id: UUID, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocumentInSignatureRequestErrorBody]:
        """Deletes the document identified by ``DOC_ID`` from the ``SignatureRequest`` with the ID ``SR_ID``.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/documents/{DOC_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id), param[UUID]("DOC_ID", doc_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_document_in_signature_request_error_mapper,
            request_options=request_options,
        )

    async def delete_signature_request(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSignatureRequestErrorBody]:
        """Deletes a ``SignatureRequest`` by its ID.

        **Important:** A ``SignatureRequest`` can only be deleted via the API if:

        1. the ``SignatureRequest`` has ``status_overall=OPEN``, and

        2. the API user has sufficient rights on the ``SignatureRequest``, e.g. when
        it was created by the API user.

        Deleting a ``SignatureRequest`` does not necessarily remove it from the system immediately.

        **WITHDRAWN**

        When the API user is the **owner** of the ``SignatureRequest`` and it is still in ``status_overall=OPEN``, the
        ``SignatureRequest`` will be **WITHDRAWN**.

        This means the ``SignatureRequest`` will transition to ``status_overall=WITHDRAWN`` and all pending signatures
        will be marked with ``status_code=WITHDRAWN``. Sign and read rights for all signers will be revoked, so invited
        signers can no longer read or sign the ``SignatureRequest``.

        **REMOVE AS PARTICIPANT**

        When the API user is a participant but not the owner of the ``SignatureRequest``, the ``DELETE`` request will
        only remove the API user as a participant.

        In this case, the system will remove the ``SignatureRequest`` and its related documents once the last remaining
        user deletes it via the Skribble web application.

        **DELETING**

        When the API user is the last user with access rights to the ``SignatureRequest`` (e.g. after a **WITHDRAW**),
        the ``SignatureRequest`` and its related documents will be permanently removed from the system.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_signature_request_error_mapper,
            request_options=request_options,
        )

    async def get_signature_request_details(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignatureResponseV3, GetSignatureRequestDetailsErrorBody]:
        """Fetches a ``SignatureRequest`` by its ID.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponseV3],
            error_mapper=get_signature_request_details_error_mapper,
            request_options=request_options,
        )

    async def initiate_signature_request(
        self, sr_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, InitiateSignatureRequestErrorBody]:
        """Starts the signing process for a ``SignatureRequest`` in ``DRAFT`` status.

        This action sends out invitation emails and transitions ``status_overall`` from ``DRAFT`` to ``OPEN``. Once
        initiated, the ``SignatureRequest`` is no longer visible in the Drafts section and will appear in the
        appropriate section (e.g. Pending) for each participant.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/initiate"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=initiate_signature_request_error_mapper,
            request_options=request_options,
        )

    async def withdraw_signature_request(
        self,
        sr_id: UUID,
        *,
        body: WithdrawSignatureRequest | WithdrawSignatureRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignatureResponse, WithdrawSignatureRequestErrorBody]:
        """Withdraws a ``SignatureRequest``, for example when signing becomes unnecessary or an error occurred during
        the invitation process. As the inviter, you can explicitly withdraw the ``SignatureRequest``. This removes all
        signers and observers as participants and notifies them with a specified ``message``.

        Similar to deletion, the ``withdraw`` action can only be executed if:

        - The ``SignatureRequest`` has ``status_overall=OPEN``

        - The API user has sufficient rights on the ``SignatureRequest``, such as
        when it was created by the API user.

        > **Note**
        > We recommend using the ``delete`` endpoint, which automatically determines
        > the appropriate action. For example, if the API user does not have
        > withdrawal rights, they may instead be removed as a participant, or the
        > document may be deleted directly.
        >
        > Use the ``withdraw`` endpoint specifically when you need to withdraw the
        > ``SignatureRequest`` while keeping it in Skribble.

        Args:
            sr_id: Unique ID received when creating the Signature Request object
            body: Request body to withdraw a SignatureRequest object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_signature_api("/signature-requests/{SR_ID}/withdraw"),
            path_params=[param[UUID]("SR_ID", sr_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WithdrawSignatureRequest | WithdrawSignatureRequestDict | None](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[SignatureResponse],
            error_mapper=withdraw_signature_request_error_mapper,
            request_options=request_options,
        )
