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
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_sign_request_error import CancelSignRequestErrorBody, cancel_sign_request_error_mapper
from ..errors.create_sign_request_error import CreateSignRequestErrorBody, create_sign_request_error_mapper
from ..errors.download_proof_error import DownloadProofErrorBody, download_proof_error_mapper
from ..errors.download_signed_pdf_error import DownloadSignedPdfErrorBody, download_signed_pdf_error_mapper
from ..errors.get_sign_request_error import GetSignRequestErrorBody, get_sign_request_error_mapper
from ..errors.list_sign_requests_error import ListSignRequestsErrorBody, list_sign_requests_error_mapper
from ..errors.send_sign_request_error import SendSignRequestErrorBody, send_sign_request_error_mapper
from ..models.create_sign_request_input import CreateSignRequestInput, CreateSignRequestInputDict
from ..models.enums.status_juri_sign_sign_requests_api import StatusJuriSignSignRequestsApiOrStr
from ..models.sign_requests_cancel_response import SignRequestsCancelResponse
from ..models.sign_requests_response import SignRequestsResponse
from ..models.sign_requests_response1 import SignRequestsResponse1
from ..models.sign_requests_response2 import SignRequestsResponse2
from ..models.sign_requests_send_response import SignRequestsSendResponse
from ..server.server import Server


class SignRequests:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SignRequestsWithRawResponse(client, server, auth)

    def cancel_sign_request(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignRequestsCancelResponse:
        """Cancel a pending signature request. Only requests in ``pending`` status can be cancelled.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request cancelled

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``Unauthenticated1
                | NotFound1 | Error1 | RawError``."""
        return unwrap(self._with_raw_response.cancel_sign_request(id_, request_options=request_options))

    def create_sign_request(
        self,
        body: CreateSignRequestInput | CreateSignRequestInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignRequestsResponse1:
        """Create a new signature request with one or more signers. The request is created in ``draft`` status and must
        be sent explicitly via the send endpoint.

        Args:
            body: The request body.
            idempotency_key: Optional. Send a unique key (for example your own order reference) to make this call safely
                repeatable. If the network drops after your request reaches us but before you get the response, replay
                the exact same call with the same key: you receive the original response — same body, same status, with
                an ``Idempotent-Replayed: true`` header — and no second signature request is created, so no second SMS
                is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry.
                Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign request created

        Raises:
            ApiError: Missing or invalid Bearer token Validation error The Idempotency-Key was already used with a
                different request body. Use a new key, or replay the original body unchanged. ``error`` is
                ``Unauthenticated1 | ValidationError1 | RawError``."""
        return unwrap(
            self._with_raw_response.create_sign_request(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def download_proof(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP
        addresses.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audit proof PDF

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``Unauthenticated1 | NotFound1 |
                RawError``."""
        return unwrap(self._with_raw_response.download_proof(id_, request_options=request_options))

    def download_signed_pdf(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Download the signed PDF document. Only available after all signers have completed signing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Signed PDF file

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``Unauthenticated1 | NotFound1 |
                RawError``."""
        return unwrap(self._with_raw_response.download_signed_pdf(id_, request_options=request_options))

    def get_sign_request(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignRequestsResponse2:
        """Retrieve full details of a signature request, including signers, signature zones, and download links.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign request details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``Unauthenticated1 | NotFound1 |
                RawError``."""
        return unwrap(self._with_raw_response.get_sign_request(id_, request_options=request_options))

    def list_sign_requests(
        self,
        *,
        status: StatusJuriSignSignRequestsApiOrStr | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SignRequestsResponse:
        """Retrieve a paginated list of signature requests.

        Args:
            status: Filter by status
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign requests list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``Unauthenticated1 | RawError``."""
        return unwrap(
            self._with_raw_response.list_sign_requests(
                status=status, per_page=per_page, page=page, request_options=request_options
            ),
        )

    def send_sign_request(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> SignRequestsSendResponse:
        """Send the signature request to all signers. This changes the status from ``draft`` to ``pending`` and sends
        invitation emails.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request sent to signers

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``Unauthenticated1
                | NotFound1 | Error1 | RawError``."""
        return unwrap(self._with_raw_response.send_sign_request(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> SignRequestsWithRawResponse:
        return self._with_raw_response


class AsyncSignRequests:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSignRequestsWithRawResponse(client, server, auth)

    async def cancel_sign_request(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignRequestsCancelResponse:
        """Cancel a pending signature request. Only requests in ``pending`` status can be cancelled.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request cancelled

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``Unauthenticated1
                | NotFound1 | Error1 | RawError``."""
        return unwrap(await self._with_raw_response.cancel_sign_request(id_, request_options=request_options))

    async def create_sign_request(
        self,
        body: CreateSignRequestInput | CreateSignRequestInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignRequestsResponse1:
        """Create a new signature request with one or more signers. The request is created in ``draft`` status and must
        be sent explicitly via the send endpoint.

        Args:
            body: The request body.
            idempotency_key: Optional. Send a unique key (for example your own order reference) to make this call safely
                repeatable. If the network drops after your request reaches us but before you get the response, replay
                the exact same call with the same key: you receive the original response — same body, same status, with
                an ``Idempotent-Replayed: true`` header — and no second signature request is created, so no second SMS
                is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry.
                Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign request created

        Raises:
            ApiError: Missing or invalid Bearer token Validation error The Idempotency-Key was already used with a
                different request body. Use a new key, or replay the original body unchanged. ``error`` is
                ``Unauthenticated1 | ValidationError1 | RawError``."""
        return unwrap(
            await self._with_raw_response.create_sign_request(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def download_proof(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP
        addresses.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Audit proof PDF

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``Unauthenticated1 | NotFound1 |
                RawError``."""
        return unwrap(await self._with_raw_response.download_proof(id_, request_options=request_options))

    async def download_signed_pdf(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Download the signed PDF document. Only available after all signers have completed signing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Signed PDF file

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``Unauthenticated1 | NotFound1 |
                RawError``."""
        return unwrap(await self._with_raw_response.download_signed_pdf(id_, request_options=request_options))

    async def get_sign_request(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignRequestsResponse2:
        """Retrieve full details of a signature request, including signers, signature zones, and download links.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign request details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``Unauthenticated1 | NotFound1 |
                RawError``."""
        return unwrap(await self._with_raw_response.get_sign_request(id_, request_options=request_options))

    async def list_sign_requests(
        self,
        *,
        status: StatusJuriSignSignRequestsApiOrStr | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SignRequestsResponse:
        """Retrieve a paginated list of signature requests.

        Args:
            status: Filter by status
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sign requests list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``Unauthenticated1 | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sign_requests(
                status=status, per_page=per_page, page=page, request_options=request_options
            ),
        )

    async def send_sign_request(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignRequestsSendResponse:
        """Send the signature request to all signers. This changes the status from ``draft`` to ``pending`` and sends
        invitation emails.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request sent to signers

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``Unauthenticated1
                | NotFound1 | Error1 | RawError``."""
        return unwrap(await self._with_raw_response.send_sign_request(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSignRequestsWithRawResponse:
        return self._with_raw_response


class SignRequestsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_sign_request(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignRequestsCancelResponse, CancelSignRequestErrorBody]:
        """Cancel a pending signature request. Only requests in ``pending`` status can be cancelled.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sign-requests/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SignRequestsCancelResponse],
            error_mapper=cancel_sign_request_error_mapper,
            request_options=request_options,
        )

    def create_sign_request(
        self,
        body: CreateSignRequestInput | CreateSignRequestInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignRequestsResponse1, CreateSignRequestErrorBody]:
        """Create a new signature request with one or more signers. The request is created in ``draft`` status and must
        be sent explicitly via the send endpoint.

        Args:
            body: The request body.
            idempotency_key: Optional. Send a unique key (for example your own order reference) to make this call safely
                repeatable. If the network drops after your request reaches us but before you get the response, replay
                the exact same call with the same key: you receive the original response — same body, same status, with
                an ``Idempotent-Replayed: true`` header — and no second signature request is created, so no second SMS
                is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry.
                Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sign-requests"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateSignRequestInput | CreateSignRequestInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SignRequestsResponse1],
            error_mapper=create_sign_request_error_mapper,
            request_options=request_options,
        )

    def download_proof(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DownloadProofErrorBody]:
        """Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP
        addresses.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests/{id}/proof"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=file_decoder,
            error_mapper=download_proof_error_mapper,
            request_options=request_options,
        )

    def download_signed_pdf(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DownloadSignedPdfErrorBody]:
        """Download the signed PDF document. Only available after all signers have completed signing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests/{id}/download"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=file_decoder,
            error_mapper=download_signed_pdf_error_mapper,
            request_options=request_options,
        )

    def get_sign_request(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignRequestsResponse2, GetSignRequestErrorBody]:
        """Retrieve full details of a signature request, including signers, signature zones, and download links.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SignRequestsResponse2],
            error_mapper=get_sign_request_error_mapper,
            request_options=request_options,
        )

    def list_sign_requests(
        self,
        *,
        status: StatusJuriSignSignRequestsApiOrStr | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SignRequestsResponse, ListSignRequestsErrorBody]:
        """Retrieve a paginated list of signature requests.

        Args:
            status: Filter by status
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests"),
            query_params=[
                param[StatusJuriSignSignRequestsApiOrStr | None]("status", status),
                param[int | None]("per_page", per_page),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SignRequestsResponse],
            error_mapper=list_sign_requests_error_mapper,
            request_options=request_options,
        )

    def send_sign_request(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SignRequestsSendResponse, SendSignRequestErrorBody]:
        """Send the signature request to all signers. This changes the status from ``draft`` to ``pending`` and sends
        invitation emails.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sign-requests/{id}/send"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SignRequestsSendResponse],
            error_mapper=send_sign_request_error_mapper,
            request_options=request_options,
        )


class AsyncSignRequestsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_sign_request(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignRequestsCancelResponse, CancelSignRequestErrorBody]:
        """Cancel a pending signature request. Only requests in ``pending`` status can be cancelled.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sign-requests/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SignRequestsCancelResponse],
            error_mapper=cancel_sign_request_error_mapper,
            request_options=request_options,
        )

    async def create_sign_request(
        self,
        body: CreateSignRequestInput | CreateSignRequestInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignRequestsResponse1, CreateSignRequestErrorBody]:
        """Create a new signature request with one or more signers. The request is created in ``draft`` status and must
        be sent explicitly via the send endpoint.

        Args:
            body: The request body.
            idempotency_key: Optional. Send a unique key (for example your own order reference) to make this call safely
                repeatable. If the network drops after your request reaches us but before you get the response, replay
                the exact same call with the same key: you receive the original response — same body, same status, with
                an ``Idempotent-Replayed: true`` header — and no second signature request is created, so no second SMS
                is billed. Reusing a key with a DIFFERENT body returns 409: that is an integration bug, not a retry.
                Keys are scoped to your organization and honoured for 24 hours. Failed responses never consume a key.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sign-requests"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[CreateSignRequestInput | CreateSignRequestInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SignRequestsResponse1],
            error_mapper=create_sign_request_error_mapper,
            request_options=request_options,
        )

    async def download_proof(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DownloadProofErrorBody]:
        """Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP
        addresses.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests/{id}/proof"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_file_decoder,
            error_mapper=download_proof_error_mapper,
            request_options=request_options,
        )

    async def download_signed_pdf(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DownloadSignedPdfErrorBody]:
        """Download the signed PDF document. Only available after all signers have completed signing.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests/{id}/download"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_file_decoder,
            error_mapper=download_signed_pdf_error_mapper,
            request_options=request_options,
        )

    async def get_sign_request(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignRequestsResponse2, GetSignRequestErrorBody]:
        """Retrieve full details of a signature request, including signers, signature zones, and download links.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SignRequestsResponse2],
            error_mapper=get_sign_request_error_mapper,
            request_options=request_options,
        )

    async def list_sign_requests(
        self,
        *,
        status: StatusJuriSignSignRequestsApiOrStr | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SignRequestsResponse, ListSignRequestsErrorBody]:
        """Retrieve a paginated list of signature requests.

        Args:
            status: Filter by status
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sign-requests"),
            query_params=[
                param[StatusJuriSignSignRequestsApiOrStr | None]("status", status),
                param[int | None]("per_page", per_page),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SignRequestsResponse],
            error_mapper=list_sign_requests_error_mapper,
            request_options=request_options,
        )

    async def send_sign_request(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignRequestsSendResponse, SendSignRequestErrorBody]:
        """Send the signature request to all signers. This changes the status from ``draft`` to ``pending`` and sends
        invitation emails.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sign-requests/{id}/send"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SignRequestsSendResponse],
            error_mapper=send_sign_request_error_mapper,
            request_options=request_options,
        )
