from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.delete_fax_error import DeleteFaxErrorBody, delete_fax_error_mapper
from ..errors.download_fax_error import DownloadFaxErrorBody, download_fax_error_mapper
from ..errors.get_fax_error import GetFaxErrorBody, get_fax_error_mapper
from ..errors.list_faxes_error import ListFaxesErrorBody, list_faxes_error_mapper
from ..errors.send_fax_error import SendFaxErrorBody, send_fax_error_mapper
from ..models.api_v1_faxes_response import ApiV1FaxesResponse
from ..models.enums.direction import DirectionOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.status_callnode_io_faxes_api import StatusCallnodeIoFaxesApiOrStr
from ..models.fax import Fax
from ..models.send_fax_request import SendFaxRequest, SendFaxRequestDict
from ..server.server import Server


class Faxes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FaxesWithRawResponse(client, server, auth)

    def delete_fax(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409
        ``job_in_progress``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``job_in_progress``, or ``delete_unavailable`` when document deletion is
                temporarily disabled. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_fax(id_, request_options=request_options))

    def download_fax(
        self, id_: str, *, format_: FormatOrStr | None = Format.PDF, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The document bytes.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                fax, or it has no document (``no_document``). ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.download_fax(id_, format_=format_, request_options=request_options))

    def get_fax(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Fax:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The fax with its result fields.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_fax(id_, request_options=request_options))

    def list_faxes(
        self,
        *,
        direction: DirectionOrStr | None = None,
        status: StatusCallnodeIoFaxesApiOrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1FaxesResponse:
        """Newest first, keyset-paginated. Test keys list test faxes only.

        Args:
            direction: Value sent with the request.
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of faxes.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_faxes(
                direction=direction, status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def send_fax(
        self,
        body: SendFaxRequest | SendFaxRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Fax:
        """Converts the document to a fax TIFF and queues it from one of your numbers. Gates run in order: number
        ownership, business verification, destination class, suppression (do-not-contact), wholesale contract posture,
        document limits (20 MB, 50 pages), a per-page rate on your plan, and a balance of at least ``pages × rate``.
        Only the pages actually transmitted are charged, when the fax finishes. A ``cn_test_`` key runs every gate and
        then simulates the transmission. The 8am–9pm called-party window is not applied to faxes.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queued. ``estimatedCost`` is the ceiling (every page at the rate); ``costUsd`` is filled in when the fax
            finishes.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. ``insufficient_balance``: balance below pages × rate; ``balance`` and
                ``required`` carry the amounts. ``account_not_verified``, ``from_number_not_owned``,
                ``destination_not_enabled``, ``fax_rate_unresolved`` (no per-page rate on your plan), or for wholesale
                tenants ``termination_disabled`` / ``no_contract_rate``. ``document_too_large`` (over 20 MB) or
                ``too_many_pages`` (over 50). ``unsupported_document``: not a PDF or TIFF, or it could not be rendered.
                ``dnc_blocked``: the destination asked not to be contacted. Rate limit exceeded. See the rate-limit
                response headers. ``fax_not_placed``: the call could not be placed; nothing was charged and the job is
                recorded as failed with the cause. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.send_fax(body, x_idempotency_key=x_idempotency_key, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FaxesWithRawResponse:
        return self._with_raw_response


class AsyncFaxes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFaxesWithRawResponse(client, server, auth)

    async def delete_fax(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409
        ``job_in_progress``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``job_in_progress``, or ``delete_unavailable`` when document deletion is
                temporarily disabled. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_fax(id_, request_options=request_options))

    async def download_fax(
        self,
        id_: str,
        *,
        format_: FormatOrStr | None = Format.PDF,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The document bytes.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                fax, or it has no document (``no_document``). ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.download_fax(id_, format_=format_, request_options=request_options))

    async def get_fax(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Fax:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The fax with its result fields.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_fax(id_, request_options=request_options))

    async def list_faxes(
        self,
        *,
        direction: DirectionOrStr | None = None,
        status: StatusCallnodeIoFaxesApiOrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1FaxesResponse:
        """Newest first, keyset-paginated. Test keys list test faxes only.

        Args:
            direction: Value sent with the request.
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of faxes.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_faxes(
                direction=direction, status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def send_fax(
        self,
        body: SendFaxRequest | SendFaxRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Fax:
        """Converts the document to a fax TIFF and queues it from one of your numbers. Gates run in order: number
        ownership, business verification, destination class, suppression (do-not-contact), wholesale contract posture,
        document limits (20 MB, 50 pages), a per-page rate on your plan, and a balance of at least ``pages × rate``.
        Only the pages actually transmitted are charged, when the fax finishes. A ``cn_test_`` key runs every gate and
        then simulates the transmission. The 8am–9pm called-party window is not applied to faxes.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queued. ``estimatedCost`` is the ceiling (every page at the rate); ``costUsd`` is filled in when the fax
            finishes.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. ``insufficient_balance``: balance below pages × rate; ``balance`` and
                ``required`` carry the amounts. ``account_not_verified``, ``from_number_not_owned``,
                ``destination_not_enabled``, ``fax_rate_unresolved`` (no per-page rate on your plan), or for wholesale
                tenants ``termination_disabled`` / ``no_contract_rate``. ``document_too_large`` (over 20 MB) or
                ``too_many_pages`` (over 50). ``unsupported_document``: not a PDF or TIFF, or it could not be rendered.
                ``dnc_blocked``: the destination asked not to be contacted. Rate limit exceeded. See the rate-limit
                response headers. ``fax_not_placed``: the call could not be placed; nothing was charged and the job is
                recorded as failed with the cause. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.send_fax(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFaxesWithRawResponse:
        return self._with_raw_response


class FaxesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_fax(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFaxErrorBody]:
        """Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409
        ``job_in_progress``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/faxes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=empty_response,
            error_mapper=delete_fax_error_mapper,
            request_options=request_options,
        )

    def download_fax(
        self, id_: str, *, format_: FormatOrStr | None = Format.PDF, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DownloadFaxErrorBody]:
        """Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/faxes/{id}/download"),
            path_params=[param[str]("id", id_)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=file_decoder,
            error_mapper=download_fax_error_mapper,
            request_options=request_options,
        )

    def get_fax(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Fax, GetFaxErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/faxes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[Fax],
            error_mapper=get_fax_error_mapper,
            request_options=request_options,
        )

    def list_faxes(
        self,
        *,
        direction: DirectionOrStr | None = None,
        status: StatusCallnodeIoFaxesApiOrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FaxesResponse, ListFaxesErrorBody]:
        """Newest first, keyset-paginated. Test keys list test faxes only.

        Args:
            direction: Value sent with the request.
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/faxes"),
            query_params=[
                param[DirectionOrStr | None]("direction", direction),
                param[StatusCallnodeIoFaxesApiOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1FaxesResponse],
            error_mapper=list_faxes_error_mapper,
            request_options=request_options,
        )

    def send_fax(
        self,
        body: SendFaxRequest | SendFaxRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Fax, SendFaxErrorBody]:
        """Converts the document to a fax TIFF and queues it from one of your numbers. Gates run in order: number
        ownership, business verification, destination class, suppression (do-not-contact), wholesale contract posture,
        document limits (20 MB, 50 pages), a per-page rate on your plan, and a balance of at least ``pages × rate``.
        Only the pages actually transmitted are charged, when the fax finishes. A ``cn_test_`` key runs every gate and
        then simulates the transmission. The 8am–9pm called-party window is not applied to faxes.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/faxes"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[SendFaxRequest | SendFaxRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[Fax],
            error_mapper=send_fax_error_mapper,
            request_options=request_options,
        )


class AsyncFaxesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_fax(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFaxErrorBody]:
        """Removes the PDF and TIFF and the fax record. The billing entry stays. A fax still in progress answers 409
        ``job_in_progress``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/faxes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_empty_response,
            error_mapper=delete_fax_error_mapper,
            request_options=request_options,
        )

    async def download_fax(
        self,
        id_: str,
        *,
        format_: FormatOrStr | None = Format.PDF,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, DownloadFaxErrorBody]:
        """Received faxes have both formats; sent faxes keep the original PDF and the transmitted TIFF.

        Args:
            id_: Value sent with the request.
            format_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/faxes/{id}/download"),
            path_params=[param[str]("id", id_)],
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_file_decoder,
            error_mapper=download_fax_error_mapper,
            request_options=request_options,
        )

    async def get_fax(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Fax, GetFaxErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/faxes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[Fax],
            error_mapper=get_fax_error_mapper,
            request_options=request_options,
        )

    async def list_faxes(
        self,
        *,
        direction: DirectionOrStr | None = None,
        status: StatusCallnodeIoFaxesApiOrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1FaxesResponse, ListFaxesErrorBody]:
        """Newest first, keyset-paginated. Test keys list test faxes only.

        Args:
            direction: Value sent with the request.
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/faxes"),
            query_params=[
                param[DirectionOrStr | None]("direction", direction),
                param[StatusCallnodeIoFaxesApiOrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1FaxesResponse],
            error_mapper=list_faxes_error_mapper,
            request_options=request_options,
        )

    async def send_fax(
        self,
        body: SendFaxRequest | SendFaxRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Fax, SendFaxErrorBody]:
        """Converts the document to a fax TIFF and queues it from one of your numbers. Gates run in order: number
        ownership, business verification, destination class, suppression (do-not-contact), wholesale contract posture,
        document limits (20 MB, 50 pages), a per-page rate on your plan, and a balance of at least ``pages × rate``.
        Only the pages actually transmitted are charged, when the fax finishes. A ``cn_test_`` key runs every gate and
        then simulates the transmission. The 8am–9pm called-party window is not applied to faxes.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/faxes"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[SendFaxRequest | SendFaxRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[Fax],
            error_mapper=send_fax_error_mapper,
            request_options=request_options,
        )
