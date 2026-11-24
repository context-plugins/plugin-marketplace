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
from ..errors.batch_get_sandboxes_error import BatchGetSandboxesErrorBody, batch_get_sandboxes_error_mapper
from ..errors.list_sandboxes_error import ListSandboxesErrorBody, list_sandboxes_error_mapper
from ..errors.list_sandboxes_for_project_error import (
    ListSandboxesForProjectErrorBody,
    list_sandboxes_for_project_error_mapper,
)
from ..models.enums.x_amz_target1_aws_code_build_sandboxe_api import XAmzTarget1AwsCodeBuildSandboxeApiOrStr
from ..models.enums.x_amz_target2_aws_code_build_sandboxe_api import XAmzTarget2AwsCodeBuildSandboxeApiOrStr
from ..models.enums.x_amz_target_aws_code_build_sandboxe_api import XAmzTargetAwsCodeBuildSandboxeApiOrStr
from ..server.server import Server


class Sandboxe:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SandboxeWithRawResponse(client, server, auth)

    def batch_get_sandboxes(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about the sandbox status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_sandboxes(x_amz_target, request_options=request_options))

    def list_sandboxes(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of sandboxes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_sandboxes(x_amz_target, request_options=request_options))

    def list_sandboxes_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of sandboxes for a given project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_sandboxes_for_project(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> SandboxeWithRawResponse:
        return self._with_raw_response


class AsyncSandboxe:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSandboxeWithRawResponse(client, server, auth)

    async def batch_get_sandboxes(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about the sandbox status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_get_sandboxes(x_amz_target, request_options=request_options))

    async def list_sandboxes(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of sandboxes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_sandboxes(x_amz_target, request_options=request_options))

    async def list_sandboxes_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of sandboxes for a given project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_sandboxes_for_project(x_amz_target, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSandboxeWithRawResponse:
        return self._with_raw_response


class SandboxeWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_get_sandboxes(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetSandboxesErrorBody]:
        """Gets information about the sandbox status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetSandboxes"),
            headers=[
                param[XAmzTargetAwsCodeBuildSandboxeApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_sandboxes_error_mapper,
            request_options=request_options,
        )

    def list_sandboxes(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListSandboxesErrorBody]:
        """Gets a list of sandboxes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSandboxes"),
            headers=[
                param[XAmzTarget1AwsCodeBuildSandboxeApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_sandboxes_error_mapper,
            request_options=request_options,
        )

    def list_sandboxes_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListSandboxesForProjectErrorBody]:
        """Gets a list of sandboxes for a given project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSandboxesForProject"),
            headers=[
                param[XAmzTarget2AwsCodeBuildSandboxeApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_sandboxes_for_project_error_mapper,
            request_options=request_options,
        )


class AsyncSandboxeWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_get_sandboxes(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetSandboxesErrorBody]:
        """Gets information about the sandbox status.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetSandboxes"),
            headers=[
                param[XAmzTargetAwsCodeBuildSandboxeApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_sandboxes_error_mapper,
            request_options=request_options,
        )

    async def list_sandboxes(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListSandboxesErrorBody]:
        """Gets a list of sandboxes.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSandboxes"),
            headers=[
                param[XAmzTarget1AwsCodeBuildSandboxeApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_sandboxes_error_mapper,
            request_options=request_options,
        )

    async def list_sandboxes_for_project(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListSandboxesForProjectErrorBody]:
        """Gets a list of sandboxes for a given project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListSandboxesForProject"),
            headers=[
                param[XAmzTarget2AwsCodeBuildSandboxeApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_sandboxes_for_project_error_mapper,
            request_options=request_options,
        )
