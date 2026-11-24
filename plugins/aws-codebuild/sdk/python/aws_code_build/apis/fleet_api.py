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
    empty_response,
    param,
    unwrap,
)
from ..errors.batch_get_fleets_error import BatchGetFleetsErrorBody, batch_get_fleets_error_mapper
from ..errors.create_fleet_error import CreateFleetErrorBody, create_fleet_error_mapper
from ..errors.delete_fleet_error import DeleteFleetErrorBody, delete_fleet_error_mapper
from ..errors.list_fleets_error import ListFleetsErrorBody, list_fleets_error_mapper
from ..errors.update_fleet_error import UpdateFleetErrorBody, update_fleet_error_mapper
from ..models.enums.x_amz_target1_aws_code_build_fleet_api import XAmzTarget1AwsCodeBuildFleetApiOrStr
from ..models.enums.x_amz_target2_aws_code_build_fleet_api import XAmzTarget2AwsCodeBuildFleetApiOrStr
from ..models.enums.x_amz_target3_aws_code_build_fleet_api import XAmzTarget3AwsCodeBuildFleetApiOrStr
from ..models.enums.x_amz_target4_aws_code_build_fleet_api import XAmzTarget4AwsCodeBuildFleetApiOrStr
from ..models.enums.x_amz_target_aws_code_build_fleet_api import XAmzTargetAwsCodeBuildFleetApiOrStr
from ..server.server import Server


class FleetApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FleetApiWithRawResponse(client, server, auth)

    def batch_get_fleets(
        self, x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets information about one or more compute fleets.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_fleets(x_amz_target, request_options=request_options))

    def create_fleet(
        self, x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_fleet(x_amz_target, request_options=request_options))

    def delete_fleet(
        self, x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_fleet(x_amz_target, request_options=request_options))

    def list_fleets(
        self, x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_fleets(x_amz_target, request_options=request_options))

    def update_fleet(
        self, x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Updates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.update_fleet(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> FleetApiWithRawResponse:
        return self._with_raw_response


class AsyncFleetApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFleetApiWithRawResponse(client, server, auth)

    async def batch_get_fleets(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about one or more compute fleets.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_get_fleets(x_amz_target, request_options=request_options))

    async def create_fleet(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_fleet(x_amz_target, request_options=request_options))

    async def delete_fleet(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_fleet(x_amz_target, request_options=request_options))

    async def list_fleets(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_fleets(x_amz_target, request_options=request_options))

    async def update_fleet(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceNotFoundException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.update_fleet(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFleetApiWithRawResponse:
        return self._with_raw_response


class FleetApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_get_fleets(
        self, x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BatchGetFleetsErrorBody]:
        """Gets information about one or more compute fleets.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetFleets"),
            headers=[
                param[XAmzTargetAwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_fleets_error_mapper,
            request_options=request_options,
        )

    def create_fleet(
        self, x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateFleetErrorBody]:
        """Creates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateFleet"),
            headers=[
                param[XAmzTarget1AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_fleet_error_mapper,
            request_options=request_options,
        )

    def delete_fleet(
        self, x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteFleetErrorBody]:
        """Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFleet"),
            headers=[
                param[XAmzTarget2AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_fleet_error_mapper,
            request_options=request_options,
        )

    def list_fleets(
        self, x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListFleetsErrorBody]:
        """Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFleets"),
            headers=[
                param[XAmzTarget3AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_fleets_error_mapper,
            request_options=request_options,
        )

    def update_fleet(
        self, x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateFleetErrorBody]:
        """Updates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateFleet"),
            headers=[
                param[XAmzTarget4AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_fleet_error_mapper,
            request_options=request_options,
        )


class AsyncFleetApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_get_fleets(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetFleetsErrorBody]:
        """Gets information about one or more compute fleets.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetFleets"),
            headers=[
                param[XAmzTargetAwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_fleets_error_mapper,
            request_options=request_options,
        )

    async def create_fleet(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateFleetErrorBody]:
        """Creates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateFleet"),
            headers=[
                param[XAmzTarget1AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_fleet_error_mapper,
            request_options=request_options,
        )

    async def delete_fleet(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteFleetErrorBody]:
        """Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteFleet"),
            headers=[
                param[XAmzTarget2AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_fleet_error_mapper,
            request_options=request_options,
        )

    async def list_fleets(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListFleetsErrorBody]:
        """Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListFleets"),
            headers=[
                param[XAmzTarget3AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_fleets_error_mapper,
            request_options=request_options,
        )

    async def update_fleet(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateFleetErrorBody]:
        """Updates a compute fleet.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateFleet"),
            headers=[
                param[XAmzTarget4AwsCodeBuildFleetApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_fleet_error_mapper,
            request_options=request_options,
        )
