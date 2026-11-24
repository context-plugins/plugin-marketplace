from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.get_recordings_request import GetRecordingsRequest, GetRecordingsRequestDict
from ..models.get_uploads_request import GetUploadsRequest, GetUploadsRequestDict
from ..models.message_response import MessageResponse
from ..models.recording_response import RecordingResponse
from ..models.recording_upload_request import RecordingUploadRequest, RecordingUploadRequestDict
from ..models.recording_upload_response import RecordingUploadResponse
from ..models.recording_upload_submit_response import RecordingUploadSubmitResponse
from ..models.recording_uploads_list_response import RecordingUploadsListResponse
from ..models.recordings_list_response import RecordingsListResponse
from ..server.server import Server


class Recordings:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecordingsWithRawResponse(client, server, auth)

    def apps_developer_api_api_delete_recording(
        self, recording_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a recording by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete recordings through the API.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_delete_recording(
                recording_id, request_options=request_options
            ),
        )

    def apps_developer_api_api_get_recording_by_id(
        self, recording_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RecordingResponse:
        """Retrieve a recording by its ID.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_recording_by_id(
                recording_id, request_options=request_options
            ),
        )

    def apps_developer_api_api_get_recordings(
        self,
        body: GetRecordingsRequest | GetRecordingsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordingsListResponse:
        """List recordings with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_recordings(body, request_options=request_options)
        )

    def apps_developer_api_api_get_upload_by_id(
        self, recording_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RecordingUploadResponse:
        """Retrieve a single API-uploaded recording with its import status.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_upload_by_id(
                recording_id, request_options=request_options
            ),
        )

    def apps_developer_api_api_list_uploads(
        self, body: GetUploadsRequest | GetUploadsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> RecordingUploadsListResponse:
        """List API-uploaded recordings with their import status, with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_list_uploads(body, request_options=request_options)
        )

    def apps_developer_api_api_upload_recording(
        self,
        body: RecordingUploadRequest | RecordingUploadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordingUploadSubmitResponse:
        """Upload a recording from a URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_upload_recording(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> RecordingsWithRawResponse:
        return self._with_raw_response


class AsyncRecordings:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecordingsWithRawResponse(client, server, auth)

    async def apps_developer_api_api_delete_recording(
        self, recording_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a recording by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete recordings through the API.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_delete_recording(
                recording_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_recording_by_id(
        self, recording_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RecordingResponse:
        """Retrieve a recording by its ID.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_recording_by_id(
                recording_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_recordings(
        self,
        body: GetRecordingsRequest | GetRecordingsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordingsListResponse:
        """List recordings with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_recordings(body, request_options=request_options)
        )

    async def apps_developer_api_api_get_upload_by_id(
        self, recording_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RecordingUploadResponse:
        """Retrieve a single API-uploaded recording with its import status.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_upload_by_id(
                recording_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_list_uploads(
        self,
        body: GetUploadsRequest | GetUploadsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordingUploadsListResponse:
        """List API-uploaded recordings with their import status, with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_list_uploads(body, request_options=request_options)
        )

    async def apps_developer_api_api_upload_recording(
        self,
        body: RecordingUploadRequest | RecordingUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordingUploadSubmitResponse:
        """Upload a recording from a URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_upload_recording(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncRecordingsWithRawResponse:
        return self._with_raw_response


class RecordingsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apps_developer_api_api_delete_recording(
        self, recording_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, RawError]:
        """Delete a recording by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete recordings through the API.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/recording/{recording_id}"),
            path_params=[param[str]("recording_id", recording_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_recording_by_id(
        self, recording_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RecordingResponse, RawError]:
        """Retrieve a recording by its ID.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/recording/{recording_id}"),
            path_params=[param[str]("recording_id", recording_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[RecordingResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_recordings(
        self,
        body: GetRecordingsRequest | GetRecordingsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordingsListResponse, RawError]:
        """List recordings with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/recordings"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetRecordingsRequest | GetRecordingsRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[RecordingsListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_upload_by_id(
        self, recording_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RecordingUploadResponse, RawError]:
        """Retrieve a single API-uploaded recording with its import status.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/recordings/upload/{recording_id}"),
            path_params=[param[str]("recording_id", recording_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[RecordingUploadResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_list_uploads(
        self, body: GetUploadsRequest | GetUploadsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RecordingUploadsListResponse, RawError]:
        """List API-uploaded recordings with their import status, with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/recordings/upload/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetUploadsRequest | GetUploadsRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[RecordingUploadsListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_upload_recording(
        self,
        body: RecordingUploadRequest | RecordingUploadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordingUploadSubmitResponse, RawError]:
        """Upload a recording from a URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/recordings/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordingUploadRequest | RecordingUploadRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[RecordingUploadSubmitResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncRecordingsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apps_developer_api_api_delete_recording(
        self, recording_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, RawError]:
        """Delete a recording by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete recordings through the API.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/recording/{recording_id}"),
            path_params=[param[str]("recording_id", recording_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_recording_by_id(
        self, recording_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RecordingResponse, RawError]:
        """Retrieve a recording by its ID.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/recording/{recording_id}"),
            path_params=[param[str]("recording_id", recording_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[RecordingResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_recordings(
        self,
        body: GetRecordingsRequest | GetRecordingsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordingsListResponse, RawError]:
        """List recordings with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/recordings"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetRecordingsRequest | GetRecordingsRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[RecordingsListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_upload_by_id(
        self, recording_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RecordingUploadResponse, RawError]:
        """Retrieve a single API-uploaded recording with its import status.

        Args:
            recording_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/recordings/upload/{recording_id}"),
            path_params=[param[str]("recording_id", recording_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[RecordingUploadResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_list_uploads(
        self,
        body: GetUploadsRequest | GetUploadsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordingUploadsListResponse, RawError]:
        """List API-uploaded recordings with their import status, with optional filters and pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/recordings/upload/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetUploadsRequest | GetUploadsRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[RecordingUploadsListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_upload_recording(
        self,
        body: RecordingUploadRequest | RecordingUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordingUploadSubmitResponse, RawError]:
        """Upload a recording from a URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/recordings/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecordingUploadRequest | RecordingUploadRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[RecordingUploadSubmitResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
