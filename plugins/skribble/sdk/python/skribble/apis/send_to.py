from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    FileInput,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_file_decoder,
    async_json_decoder,
    empty_response,
    file_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.create_send_to_error import CreateSendToErrorBody, create_send_to_error_mapper
from ..errors.delete_send_to_error import DeleteSendToErrorBody, delete_send_to_error_mapper
from ..errors.download_send_to_error import DownloadSendToErrorBody, download_send_to_error_mapper
from ..errors.track_send_to_error import TrackSendToErrorBody, track_send_to_error_mapper
from ..models.create_send_to_response import CreateSendToResponse
from ..models.track_send_to_response import TrackSendToResponse
from ..server.server import Server


class SendTo:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SendToWithRawResponse(client, server)

    def create_send_to(
        self, title: str, content: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreateSendToResponse:
        """Starts the signing process by uploading the PDF document ``content`` and assigning it a ``title``.

        ### Limited lifetime

        > Send-To objects and their related Documents and SignatureRequests are only
        > guaranteed for a **limited lifetime**.
        >
        > - A Send-To request that is not claimed by a user — i.e. where a user
        > does not add the document to their list of documents to sign — is
        > deleted automatically after one day.
        >
        > - All Send-To objects and their related Documents and SignatureRequest
        > objects, regardless of status, are deleted automatically after 90 days.

        Args:
            title: Title of the document.
            content: PDF file to upload.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not acceptable Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.create_send_to(title, content, request_options=request_options))

    def delete_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """To call the ``delete`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        This call deletes the involved ``Send-To``, ``Document``, and ``SignatureRequest`` objects regardless of the
        current ``Send-To`` state.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.delete_send_to(send_to_id, x_accesscode, request_options=request_options))

    def download_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """To call the ``download`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        The response contains the originally provided PDF document in its current state, which may be signed, declined,
        withdrawn, or still open for signing. The current status can be retrieved using the ``track`` endpoint.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.download_send_to(send_to_id, x_accesscode, request_options=request_options)
        )

    def track_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TrackSendToResponse:
        """To call the ``track`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.track_send_to(send_to_id, x_accesscode, request_options=request_options))

    @property
    def with_raw_response(self) -> SendToWithRawResponse:
        return self._with_raw_response


class AsyncSendTo:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSendToWithRawResponse(client, server)

    async def create_send_to(
        self, title: str, content: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CreateSendToResponse:
        """Starts the signing process by uploading the PDF document ``content`` and assigning it a ``title``.

        ### Limited lifetime

        > Send-To objects and their related Documents and SignatureRequests are only
        > guaranteed for a **limited lifetime**.
        >
        > - A Send-To request that is not claimed by a user — i.e. where a user
        > does not add the document to their list of documents to sign — is
        > deleted automatically after one day.
        >
        > - All Send-To objects and their related Documents and SignatureRequest
        > objects, regardless of status, are deleted automatically after 90 days.

        Args:
            title: Title of the document.
            content: PDF file to upload.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not acceptable Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.create_send_to(title, content, request_options=request_options))

    async def delete_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """To call the ``delete`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        This call deletes the involved ``Send-To``, ``Document``, and ``SignatureRequest`` objects regardless of the
        current ``Send-To`` state.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_send_to(send_to_id, x_accesscode, request_options=request_options)
        )

    async def download_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """To call the ``download`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        The response contains the originally provided PDF document in its current state, which may be signed, declined,
        withdrawn, or still open for signing. The current status can be retrieved using the ``track`` endpoint.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.download_send_to(send_to_id, x_accesscode, request_options=request_options)
        )

    async def track_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TrackSendToResponse:
        """To call the ``track`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.track_send_to(send_to_id, x_accesscode, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSendToWithRawResponse:
        return self._with_raw_response


class SendToWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_send_to(
        self, title: str, content: FileInput, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreateSendToResponse, CreateSendToErrorBody]:
        """Starts the signing process by uploading the PDF document ``content`` and assigning it a ``title``.

        ### Limited lifetime

        > Send-To objects and their related Documents and SignatureRequests are only
        > guaranteed for a **limited lifetime**.
        >
        > - A Send-To request that is not claimed by a user — i.e. where a user
        > does not add the document to their list of documents to sign — is
        > deleted automatically after one day.
        >
        > - All Send-To objects and their related Documents and SignatureRequest
        > objects, regardless of status, are deleted automatically after 90 days.

        Args:
            title: Title of the document.
            content: PDF file to upload.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_send_to_api("/sendto"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(param[str]("title", title), file_part("content", content)),
            decoder=json_decoder[CreateSendToResponse],
            error_mapper=create_send_to_error_mapper,
            request_options=request_options,
        )

    def delete_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSendToErrorBody]:
        """To call the ``delete`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        This call deletes the involved ``Send-To``, ``Document``, and ``SignatureRequest`` objects regardless of the
        current ``Send-To`` state.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_send_to_api("/sendto/{SEND_TO_ID}"),
            path_params=[param[UUID]("SEND_TO_ID", send_to_id)],
            headers=[param[UUID]("X-Accesscode", x_accesscode), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_send_to_error_mapper,
            request_options=request_options,
        )

    def download_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DownloadSendToErrorBody]:
        """To call the ``download`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        The response contains the originally provided PDF document in its current state, which may be signed, declined,
        withdrawn, or still open for signing. The current status can be retrieved using the ``track`` endpoint.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_send_to_api("/sendto/{SEND_TO_ID}/download"),
            path_params=[param[UUID]("SEND_TO_ID", send_to_id)],
            headers=[param[UUID]("X-Accesscode", x_accesscode)],
            decoder=file_decoder,
            error_mapper=download_send_to_error_mapper,
            request_options=request_options,
        )

    def track_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TrackSendToResponse, TrackSendToErrorBody]:
        """To call the ``track`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_send_to_api("/sendto/{SEND_TO_ID}/track"),
            path_params=[param[UUID]("SEND_TO_ID", send_to_id)],
            headers=[param[UUID]("X-Accesscode", x_accesscode)],
            decoder=json_decoder[TrackSendToResponse],
            error_mapper=track_send_to_error_mapper,
            request_options=request_options,
        )


class AsyncSendToWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_send_to(
        self, title: str, content: AsyncFileInput, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreateSendToResponse, CreateSendToErrorBody]:
        """Starts the signing process by uploading the PDF document ``content`` and assigning it a ``title``.

        ### Limited lifetime

        > Send-To objects and their related Documents and SignatureRequests are only
        > guaranteed for a **limited lifetime**.
        >
        > - A Send-To request that is not claimed by a user — i.e. where a user
        > does not add the document to their list of documents to sign — is
        > deleted automatically after one day.
        >
        > - All Send-To objects and their related Documents and SignatureRequest
        > objects, regardless of status, are deleted automatically after 90 days.

        Args:
            title: Title of the document.
            content: PDF file to upload.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_send_to_api("/sendto"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(param[str]("title", title), file_part("content", content)),
            decoder=async_json_decoder[CreateSendToResponse],
            error_mapper=create_send_to_error_mapper,
            request_options=request_options,
        )

    async def delete_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSendToErrorBody]:
        """To call the ``delete`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        This call deletes the involved ``Send-To``, ``Document``, and ``SignatureRequest`` objects regardless of the
        current ``Send-To`` state.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_send_to_api("/sendto/{SEND_TO_ID}"),
            path_params=[param[UUID]("SEND_TO_ID", send_to_id)],
            headers=[param[UUID]("X-Accesscode", x_accesscode), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_send_to_error_mapper,
            request_options=request_options,
        )

    async def download_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DownloadSendToErrorBody]:
        """To call the ``download`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        The response contains the originally provided PDF document in its current state, which may be signed, declined,
        withdrawn, or still open for signing. The current status can be retrieved using the ``track`` endpoint.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_send_to_api("/sendto/{SEND_TO_ID}/download"),
            path_params=[param[UUID]("SEND_TO_ID", send_to_id)],
            headers=[param[UUID]("X-Accesscode", x_accesscode)],
            decoder=async_file_decoder,
            error_mapper=download_send_to_error_mapper,
            request_options=request_options,
        )

    async def track_send_to(
        self, send_to_id: UUID, x_accesscode: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TrackSendToResponse, TrackSendToErrorBody]:
        """To call the ``track`` endpoint, you must include the value of the ``access_code`` field—received when
        creating the ``Send-To`` object—in the request header ``X-Accesscode``.

        Args:
            send_to_id: Unique ID received when creating the Send-To object
            x_accesscode: Access code received when creating the Send-To object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_send_to_api("/sendto/{SEND_TO_ID}/track"),
            path_params=[param[UUID]("SEND_TO_ID", send_to_id)],
            headers=[param[UUID]("X-Accesscode", x_accesscode)],
            decoder=async_json_decoder[TrackSendToResponse],
            error_mapper=track_send_to_error_mapper,
            request_options=request_options,
        )
