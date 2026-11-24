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
from ..errors.create_resource_class_error import CreateResourceClassErrorBody, create_resource_class_error_mapper
from ..errors.delete_resource_class_error import DeleteResourceClassErrorBody, delete_resource_class_error_mapper
from ..errors.get_resource_class_error import GetResourceClassErrorBody, get_resource_class_error_mapper
from ..errors.list_resource_classes_error import ListResourceClassesErrorBody, list_resource_classes_error_mapper
from ..models.resource_class import ResourceClass
from ..models.resource_class_creation import ResourceClassCreation
from ..models.runner_resource_class_request import RunnerResourceClassRequest, RunnerResourceClassRequestDict
from ..models.runner_resource_class_response import RunnerResourceClassResponse
from ..server.server import Server


class ResourceClassApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResourceClassApiWithRawResponse(client, server, auth)

    def create_resource_class(
        self,
        body: RunnerResourceClassRequest | RunnerResourceClassRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResourceClassCreation:
        """Creates a new resource class for the specified namespace. Returns a resource class token that is only
        displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource class created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_resource_class(body, request_options=request_options))

    def delete_resource_class(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource class deleted successfully

        Raises:
            ApiError: Unauthorized Resource class not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_resource_class(resource_class, request_options=request_options))

    def get_resource_class(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ResourceClass:
        """Returns details about a specific resource class.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved resource class

        Raises:
            ApiError: Unauthorized Resource class not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_resource_class(resource_class, request_options=request_options))

    def list_resource_classes(
        self, namespace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> RunnerResourceClassResponse:
        """Returns a list of runner resource classes for the specified namespace. Resource classes define the compute
        resources available for self-hosted runner jobs.

        Args:
            namespace: The namespace to list resource classes for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved resource classes

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_resource_classes(namespace, request_options=request_options))

    @property
    def with_raw_response(self) -> ResourceClassApiWithRawResponse:
        return self._with_raw_response


class AsyncResourceClassApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResourceClassApiWithRawResponse(client, server, auth)

    async def create_resource_class(
        self,
        body: RunnerResourceClassRequest | RunnerResourceClassRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResourceClassCreation:
        """Creates a new resource class for the specified namespace. Returns a resource class token that is only
        displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource class created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_resource_class(body, request_options=request_options))

    async def delete_resource_class(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource class deleted successfully

        Raises:
            ApiError: Unauthorized Resource class not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resource_class(resource_class, request_options=request_options)
        )

    async def get_resource_class(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ResourceClass:
        """Returns details about a specific resource class.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved resource class

        Raises:
            ApiError: Unauthorized Resource class not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_resource_class(resource_class, request_options=request_options))

    async def list_resource_classes(
        self, namespace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RunnerResourceClassResponse:
        """Returns a list of runner resource classes for the specified namespace. Resource classes define the compute
        resources available for self-hosted runner jobs.

        Args:
            namespace: The namespace to list resource classes for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved resource classes

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_resource_classes(namespace, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncResourceClassApiWithRawResponse:
        return self._with_raw_response


class ResourceClassApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_resource_class(
        self,
        body: RunnerResourceClassRequest | RunnerResourceClassRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourceClassCreation, CreateResourceClassErrorBody]:
        """Creates a new resource class for the specified namespace. Returns a resource class token that is only
        displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/runner/resource-class"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunnerResourceClassRequest | RunnerResourceClassRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ResourceClassCreation],
            error_mapper=create_resource_class_error_mapper,
            request_options=request_options,
        )

    def delete_resource_class(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteResourceClassErrorBody]:
        """Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/runner/resource-class/{resource-class}"),
            path_params=[param[str]("resource-class", resource_class)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_resource_class_error_mapper,
            request_options=request_options,
        )

    def get_resource_class(
        self, resource_class: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ResourceClass, GetResourceClassErrorBody]:
        """Returns details about a specific resource class.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/resource-class/{resource-class}"),
            path_params=[param[str]("resource-class", resource_class)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[ResourceClass],
            error_mapper=get_resource_class_error_mapper,
            request_options=request_options,
        )

    def list_resource_classes(
        self, namespace: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RunnerResourceClassResponse, ListResourceClassesErrorBody]:
        """Returns a list of runner resource classes for the specified namespace. Resource classes define the compute
        resources available for self-hosted runner jobs.

        Args:
            namespace: The namespace to list resource classes for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/resource-class"),
            query_params=[param[str]("namespace", namespace)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[RunnerResourceClassResponse],
            error_mapper=list_resource_classes_error_mapper,
            request_options=request_options,
        )


class AsyncResourceClassApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_resource_class(
        self,
        body: RunnerResourceClassRequest | RunnerResourceClassRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResourceClassCreation, CreateResourceClassErrorBody]:
        """Creates a new resource class for the specified namespace. Returns a resource class token that is only
        displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/runner/resource-class"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunnerResourceClassRequest | RunnerResourceClassRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ResourceClassCreation],
            error_mapper=create_resource_class_error_mapper,
            request_options=request_options,
        )

    async def delete_resource_class(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteResourceClassErrorBody]:
        """Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/runner/resource-class/{resource-class}"),
            path_params=[param[str]("resource-class", resource_class)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_resource_class_error_mapper,
            request_options=request_options,
        )

    async def get_resource_class(
        self, resource_class: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ResourceClass, GetResourceClassErrorBody]:
        """Returns details about a specific resource class.

        Args:
            resource_class: The resource class in namespace/name format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/resource-class/{resource-class}"),
            path_params=[param[str]("resource-class", resource_class)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[ResourceClass],
            error_mapper=get_resource_class_error_mapper,
            request_options=request_options,
        )

    async def list_resource_classes(
        self, namespace: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RunnerResourceClassResponse, ListResourceClassesErrorBody]:
        """Returns a list of runner resource classes for the specified namespace. Resource classes define the compute
        resources available for self-hosted runner jobs.

        Args:
            namespace: The namespace to list resource classes for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner/resource-class"),
            query_params=[param[str]("namespace", namespace)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[RunnerResourceClassResponse],
            error_mapper=list_resource_classes_error_mapper,
            request_options=request_options,
        )
