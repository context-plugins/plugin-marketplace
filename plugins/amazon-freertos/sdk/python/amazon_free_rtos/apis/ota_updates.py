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
from ..errors.create_ota_update_error import CreateOtaUpdateErrorBody, create_ota_update_error_mapper
from ..errors.delete_ota_update_error import DeleteOtaUpdateErrorBody, delete_ota_update_error_mapper
from ..errors.get_ota_update_error import GetOtaUpdateErrorBody, get_ota_update_error_mapper
from ..errors.list_ota_updates_error import ListOtaUpdatesErrorBody, list_ota_updates_error_mapper
from ..models.create_ota_update_request import CreateOtaUpdateRequest, CreateOtaUpdateRequestDict
from ..models.ota_update import OtaUpdate
from ..models.ota_update_info import OtaUpdateInfo
from ..models.ota_updates_response import OtaUpdatesResponse
from ..server.server import Server


class OtaUpdates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OtaUpdatesWithRawResponse(client, server, auth)

    def create_ota_update(
        self,
        body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OtaUpdate:
        """Creates an AWS IoT OTA update on a target group of devices.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_ota_update(body, request_options=request_options))

    def delete_ota_update(
        self,
        ota_update_id: str,
        *,
        delete_stream: bool | None = None,
        force_delete_aws_job: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an OTA update.

        Args:
            ota_update_id: The OTA update ID to delete.
            delete_stream: Whether to delete the stream associated with the update.
            force_delete_aws_job: Whether to force delete the associated AWS IoT job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_ota_update(
                ota_update_id,
                delete_stream=delete_stream,
                force_delete_aws_job=force_delete_aws_job,
                request_options=request_options,
            ),
        )

    def get_ota_update(
        self, ota_update_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OtaUpdateInfo:
        """Gets an OTA update.

        Args:
            ota_update_id: The OTA update ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_ota_update(ota_update_id, request_options=request_options))

    def list_ota_updates(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        ota_update_status: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OtaUpdatesResponse:
        """Lists OTA updates.

        Args:
            max_results: Maximum results.
            next_token: Pagination token.
            ota_update_status: Filter by OTA update status.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_ota_updates(
                max_results=max_results,
                next_token=next_token,
                ota_update_status=ota_update_status,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> OtaUpdatesWithRawResponse:
        return self._with_raw_response


class AsyncOtaUpdates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOtaUpdatesWithRawResponse(client, server, auth)

    async def create_ota_update(
        self,
        body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OtaUpdate:
        """Creates an AWS IoT OTA update on a target group of devices.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_ota_update(body, request_options=request_options))

    async def delete_ota_update(
        self,
        ota_update_id: str,
        *,
        delete_stream: bool | None = None,
        force_delete_aws_job: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes an OTA update.

        Args:
            ota_update_id: The OTA update ID to delete.
            delete_stream: Whether to delete the stream associated with the update.
            force_delete_aws_job: Whether to force delete the associated AWS IoT job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_ota_update(
                ota_update_id,
                delete_stream=delete_stream,
                force_delete_aws_job=force_delete_aws_job,
                request_options=request_options,
            ),
        )

    async def get_ota_update(
        self, ota_update_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OtaUpdateInfo:
        """Gets an OTA update.

        Args:
            ota_update_id: The OTA update ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Not Found Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_ota_update(ota_update_id, request_options=request_options))

    async def list_ota_updates(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        ota_update_status: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OtaUpdatesResponse:
        """Lists OTA updates.

        Args:
            max_results: Maximum results.
            next_token: Pagination token.
            ota_update_status: Filter by OTA update status.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_ota_updates(
                max_results=max_results,
                next_token=next_token,
                ota_update_status=ota_update_status,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOtaUpdatesWithRawResponse:
        return self._with_raw_response


class OtaUpdatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_ota_update(
        self,
        body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OtaUpdate, CreateOtaUpdateErrorBody]:
        """Creates an AWS IoT OTA update on a target group of devices.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/otaUpdates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOtaUpdateRequest | CreateOtaUpdateRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[OtaUpdate],
            error_mapper=create_ota_update_error_mapper,
            request_options=request_options,
        )

    def delete_ota_update(
        self,
        ota_update_id: str,
        *,
        delete_stream: bool | None = None,
        force_delete_aws_job: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteOtaUpdateErrorBody]:
        """Deletes an OTA update.

        Args:
            ota_update_id: The OTA update ID to delete.
            delete_stream: Whether to delete the stream associated with the update.
            force_delete_aws_job: Whether to force delete the associated AWS IoT job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/otaUpdates/{otaUpdateId}"),
            path_params=[param[str]("otaUpdateId", ota_update_id)],
            query_params=[
                param[bool | None]("deleteStream", delete_stream),
                param[bool | None]("forceDeleteAWSJob", force_delete_aws_job),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=empty_response,
            error_mapper=delete_ota_update_error_mapper,
            request_options=request_options,
        )

    def get_ota_update(
        self, ota_update_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OtaUpdateInfo, GetOtaUpdateErrorBody]:
        """Gets an OTA update.

        Args:
            ota_update_id: The OTA update ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/otaUpdates/{otaUpdateId}"),
            path_params=[param[str]("otaUpdateId", ota_update_id)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[OtaUpdateInfo],
            error_mapper=get_ota_update_error_mapper,
            request_options=request_options,
        )

    def list_ota_updates(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        ota_update_status: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OtaUpdatesResponse, ListOtaUpdatesErrorBody]:
        """Lists OTA updates.

        Args:
            max_results: Maximum results.
            next_token: Pagination token.
            ota_update_status: Filter by OTA update status.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/otaUpdates"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("nextToken", next_token),
                param[str | None]("otaUpdateStatus", ota_update_status),
            ],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=json_decoder[OtaUpdatesResponse],
            error_mapper=list_ota_updates_error_mapper,
            request_options=request_options,
        )


class AsyncOtaUpdatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_ota_update(
        self,
        body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OtaUpdate, CreateOtaUpdateErrorBody]:
        """Creates an AWS IoT OTA update on a target group of devices.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/otaUpdates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOtaUpdateRequest | CreateOtaUpdateRequestDict](body),
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[OtaUpdate],
            error_mapper=create_ota_update_error_mapper,
            request_options=request_options,
        )

    async def delete_ota_update(
        self,
        ota_update_id: str,
        *,
        delete_stream: bool | None = None,
        force_delete_aws_job: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteOtaUpdateErrorBody]:
        """Deletes an OTA update.

        Args:
            ota_update_id: The OTA update ID to delete.
            delete_stream: Whether to delete the stream associated with the update.
            force_delete_aws_job: Whether to force delete the associated AWS IoT job.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/otaUpdates/{otaUpdateId}"),
            path_params=[param[str]("otaUpdateId", ota_update_id)],
            query_params=[
                param[bool | None]("deleteStream", delete_stream),
                param[bool | None]("forceDeleteAWSJob", force_delete_aws_job),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_empty_response,
            error_mapper=delete_ota_update_error_mapper,
            request_options=request_options,
        )

    async def get_ota_update(
        self, ota_update_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OtaUpdateInfo, GetOtaUpdateErrorBody]:
        """Gets an OTA update.

        Args:
            ota_update_id: The OTA update ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/otaUpdates/{otaUpdateId}"),
            path_params=[param[str]("otaUpdateId", ota_update_id)],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[OtaUpdateInfo],
            error_mapper=get_ota_update_error_mapper,
            request_options=request_options,
        )

    async def list_ota_updates(
        self,
        *,
        max_results: int | None = None,
        next_token: str | None = None,
        ota_update_status: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OtaUpdatesResponse, ListOtaUpdatesErrorBody]:
        """Lists OTA updates.

        Args:
            max_results: Maximum results.
            next_token: Pagination token.
            ota_update_status: Filter by OTA update status.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/otaUpdates"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("nextToken", next_token),
                param[str | None]("otaUpdateStatus", ota_update_status),
            ],
            auth_scheme=self._auth.aws_sig_v4,
            decoder=async_json_decoder[OtaUpdatesResponse],
            error_mapper=list_ota_updates_error_mapper,
            request_options=request_options,
        )
