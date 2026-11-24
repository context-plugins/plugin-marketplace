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
from ..errors.batch_get_projects2_error import BatchGetProjects2ErrorBody, batch_get_projects2_error_mapper
from ..errors.create_project2_error import CreateProject2ErrorBody, create_project2_error_mapper
from ..errors.delete_project2_error import DeleteProject2ErrorBody, delete_project2_error_mapper
from ..errors.list_projects2_error import ListProjects2ErrorBody, list_projects2_error_mapper
from ..errors.update_project2_error import UpdateProject2ErrorBody, update_project2_error_mapper
from ..models.enums.x_amz_target1_aws_code_build_projects_api import XAmzTarget1AwsCodeBuildProjectsApiOrStr
from ..models.enums.x_amz_target2_aws_code_build_projects_api import XAmzTarget2AwsCodeBuildProjectsApiOrStr
from ..models.enums.x_amz_target3_aws_code_build_projects_api import XAmzTarget3AwsCodeBuildProjectsApiOrStr
from ..models.enums.x_amz_target4_aws_code_build_projects_api import XAmzTarget4AwsCodeBuildProjectsApiOrStr
from ..models.enums.x_amz_target_aws_code_build_projects_api import XAmzTargetAwsCodeBuildProjectsApiOrStr
from ..server.server import Server


class Projects:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectsWithRawResponse(client, server, auth)

    def batch_get_projects2(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch_get_projects2(x_amz_target, request_options=request_options))

    def create_project2(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_project2(x_amz_target, request_options=request_options))

    def delete_project2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_project2(x_amz_target, request_options=request_options))

    def list_projects2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of build project names, with each build project name representing a single build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_projects2(x_amz_target, request_options=request_options))

    def update_project2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_project2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectsWithRawResponse:
        return self._with_raw_response


class AsyncProjects:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectsWithRawResponse(client, server, auth)

    async def batch_get_projects2(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch_get_projects2(x_amz_target, request_options=request_options))

    async def create_project2(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccountLimitExceededException; InvalidInputException; ResourceAlreadyExistsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.create_project2(x_amz_target, request_options=request_options))

    async def delete_project2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_project2(x_amz_target, request_options=request_options))

    async def list_projects2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets a list of build project names, with each build project name representing a single build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_projects2(x_amz_target, request_options=request_options))

    async def update_project2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidInputException; ResourceNotFoundException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_project2(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectsWithRawResponse:
        return self._with_raw_response


class ProjectsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_get_projects2(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetProjects2ErrorBody]:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetProjects"),
            headers=[
                param[XAmzTargetAwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=batch_get_projects2_error_mapper,
            request_options=request_options,
        )

    def create_project2(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateProject2ErrorBody]:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateProject"),
            headers=[
                param[XAmzTarget1AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_project2_error_mapper,
            request_options=request_options,
        )

    def delete_project2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProject2ErrorBody]:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProject"),
            headers=[
                param[XAmzTarget2AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_project2_error_mapper,
            request_options=request_options,
        )

    def list_projects2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListProjects2ErrorBody]:
        """Gets a list of build project names, with each build project name representing a single build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListProjects"),
            headers=[
                param[XAmzTarget3AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_projects2_error_mapper,
            request_options=request_options,
        )

    def update_project2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateProject2ErrorBody]:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateProject"),
            headers=[
                param[XAmzTarget4AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=update_project2_error_mapper,
            request_options=request_options,
        )


class AsyncProjectsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_get_projects2(
        self,
        x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, BatchGetProjects2ErrorBody]:
        """Gets information about one or more build projects.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#BatchGetProjects"),
            headers=[
                param[XAmzTargetAwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=batch_get_projects2_error_mapper,
            request_options=request_options,
        )

    async def create_project2(
        self,
        x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateProject2ErrorBody]:
        """Creates a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateProject"),
            headers=[
                param[XAmzTarget1AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_project2_error_mapper,
            request_options=request_options,
        )

    async def delete_project2(
        self,
        x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProject2ErrorBody]:
        """Deletes a build project. When you delete a project, its builds are not deleted.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteProject"),
            headers=[
                param[XAmzTarget2AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_project2_error_mapper,
            request_options=request_options,
        )

    async def list_projects2(
        self,
        x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ListProjects2ErrorBody]:
        """Gets a list of build project names, with each build project name representing a single build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListProjects"),
            headers=[
                param[XAmzTarget3AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_projects2_error_mapper,
            request_options=request_options,
        )

    async def update_project2(
        self,
        x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateProject2ErrorBody]:
        """Changes the settings of a build project.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#UpdateProject"),
            headers=[
                param[XAmzTarget4AwsCodeBuildProjectsApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=update_project2_error_mapper,
            request_options=request_options,
        )
