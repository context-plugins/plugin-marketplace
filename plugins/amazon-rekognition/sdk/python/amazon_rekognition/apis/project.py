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
from ..errors.create_project_error import CreateProjectErrorBody, create_project_error_mapper
from ..errors.delete_project_error import DeleteProjectErrorBody, delete_project_error_mapper
from ..errors.describe_projects_error import DescribeProjectsErrorBody, describe_projects_error_mapper
from ..models.enums.x_amz_target1_amazon_rekognition_project_api import XAmzTarget1AmazonRekognitionProjectApiOrStr
from ..models.enums.x_amz_target2_amazon_rekognition_project_api import XAmzTarget2AmazonRekognitionProjectApiOrStr
from ..models.enums.x_amz_target_amazon_rekognition_project_api import XAmzTargetAmazonRekognitionProjectApiOrStr
from ..server.server import Server


class Project:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProjectWithRawResponse(client, server, auth)

    def create_project(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that
        you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a
        feature to create the project with, if no feature is specified then Custom Labels is used by default. For
        adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument.
        This operation requires permissions to perform the rekognition:CreateProject action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_project(x_amz_target, request_options=request_options))

    def delete_project(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters
        associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an
        asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when
        the project no longer appears in the response. Be aware that deleting a given project will also delete any
        ProjectPolicies associated with that project. This operation requires permissions to perform the
        rekognition:DeleteProject action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.delete_project(x_amz_target, request_options=request_options))

    def describe_projects(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about your Rekognition projects. This operation requires permissions to perform the
        rekognition:DescribeProjects action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.describe_projects(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> ProjectWithRawResponse:
        return self._with_raw_response


class AsyncProject:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProjectWithRawResponse(client, server, auth)

    async def create_project(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that
        you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a
        feature to create the project with, if no feature is specified then Custom Labels is used by default. For
        adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument.
        This operation requires permissions to perform the rekognition:CreateProject action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; LimitExceededException;
                ProvisionedThroughputExceededException; ResourceInUseException InternalServerError; ThrottlingException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_project(x_amz_target, request_options=request_options))

    async def delete_project(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters
        associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an
        asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when
        the project no longer appears in the response. Be aware that deleting a given project will also delete any
        ProjectPolicies associated with that project. This operation requires permissions to perform the
        rekognition:DeleteProject action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidParameterException; ProvisionedThroughputExceededException;
                ResourceInUseException; ResourceNotFoundException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.delete_project(x_amz_target, request_options=request_options))

    async def describe_projects(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Gets information about your Rekognition projects. This operation requires permissions to perform the
        rekognition:DescribeProjects action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException; InvalidPaginationTokenException; InvalidParameterException;
                ProvisionedThroughputExceededException InternalServerError; ThrottlingException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.describe_projects(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProjectWithRawResponse:
        return self._with_raw_response


class ProjectWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_project(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateProjectErrorBody]:
        """Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that
        you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a
        feature to create the project with, if no feature is specified then Custom Labels is used by default. For
        adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument.
        This operation requires permissions to perform the rekognition:CreateProject action.

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
                param[XAmzTargetAmazonRekognitionProjectApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    def delete_project(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters
        associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an
        asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when
        the project no longer appears in the response. Be aware that deleting a given project will also delete any
        ProjectPolicies associated with that project. This operation requires permissions to perform the
        rekognition:DeleteProject action.

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
                param[XAmzTarget1AmazonRekognitionProjectApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    def describe_projects(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeProjectsErrorBody]:
        """Gets information about your Rekognition projects. This operation requires permissions to perform the
        rekognition:DescribeProjects action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeProjects"),
            headers=[
                param[XAmzTarget2AmazonRekognitionProjectApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_projects_error_mapper,
            request_options=request_options,
        )


class AsyncProjectWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_project(
        self,
        x_amz_target: XAmzTargetAmazonRekognitionProjectApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, CreateProjectErrorBody]:
        """Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that
        you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a
        feature to create the project with, if no feature is specified then Custom Labels is used by default. For
        adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument.
        This operation requires permissions to perform the rekognition:CreateProject action.

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
                param[XAmzTargetAmazonRekognitionProjectApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_project_error_mapper,
            request_options=request_options,
        )

    async def delete_project(
        self,
        x_amz_target: XAmzTarget1AmazonRekognitionProjectApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteProjectErrorBody]:
        """Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters
        associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an
        asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when
        the project no longer appears in the response. Be aware that deleting a given project will also delete any
        ProjectPolicies associated with that project. This operation requires permissions to perform the
        rekognition:DeleteProject action.

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
                param[XAmzTarget1AmazonRekognitionProjectApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_project_error_mapper,
            request_options=request_options,
        )

    async def describe_projects(
        self,
        x_amz_target: XAmzTarget2AmazonRekognitionProjectApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeProjectsErrorBody]:
        """Gets information about your Rekognition projects. This operation requires permissions to perform the
        rekognition:DescribeProjects action.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeProjects"),
            headers=[
                param[XAmzTarget2AmazonRekognitionProjectApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_projects_error_mapper,
            request_options=request_options,
        )
