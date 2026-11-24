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
from ..errors.create_deployed_package_error import CreateDeployedPackageErrorBody, create_deployed_package_error_mapper
from ..errors.delete_deployed_package_error import DeleteDeployedPackageErrorBody, delete_deployed_package_error_mapper
from ..errors.get_deployed_package_error import GetDeployedPackageErrorBody, get_deployed_package_error_mapper
from ..errors.query_deployed_packages_error import QueryDeployedPackagesErrorBody, query_deployed_packages_error_mapper
from ..models.deployed_package import DeployedPackage
from ..models.deployed_package_input import DeployedPackageInput, DeployedPackageInputDict
from ..models.deployed_package_query_result import DeployedPackageQueryResult
from ..models.query_request import QueryRequest, QueryRequestDict
from ..server.server import Server


class Deployments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeploymentsWithRawResponse(client, server, auth)

    def create_deployed_package(
        self,
        body: DeployedPackageInput | DeployedPackageInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeployedPackage:
        """Deploys a packaged component to an environment. Creates a new deployed package record associating the package
        with the target environment.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployed package record.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_deployed_package(body, request_options=request_options))

    def delete_deployed_package(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Removes a deployed package from its environment, undeploying the component.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Undeployment successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_deployed_package(id_, request_options=request_options))

    def get_deployed_package(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DeployedPackage:
        """Retrieves the details of a specific deployed package by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployed package object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_deployed_package(id_, request_options=request_options))

    def query_deployed_packages(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DeployedPackageQueryResult:
        """Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current
        deployments across environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching deployed package objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.query_deployed_packages(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DeploymentsWithRawResponse:
        return self._with_raw_response


class AsyncDeployments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeploymentsWithRawResponse(client, server, auth)

    async def create_deployed_package(
        self,
        body: DeployedPackageInput | DeployedPackageInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeployedPackage:
        """Deploys a packaged component to an environment. Creates a new deployed package record associating the package
        with the target environment.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployed package record.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_deployed_package(body, request_options=request_options))

    async def delete_deployed_package(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Removes a deployed package from its environment, undeploying the component.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Undeployment successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_deployed_package(id_, request_options=request_options))

    async def get_deployed_package(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeployedPackage:
        """Retrieves the details of a specific deployed package by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deployed package object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_deployed_package(id_, request_options=request_options))

    async def query_deployed_packages(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeployedPackageQueryResult:
        """Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current
        deployments across environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching deployed package objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.query_deployed_packages(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDeploymentsWithRawResponse:
        return self._with_raw_response


class DeploymentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_deployed_package(
        self,
        body: DeployedPackageInput | DeployedPackageInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeployedPackage, CreateDeployedPackageErrorBody]:
        """Deploys a packaged component to an environment. Creates a new deployed package record associating the package
        with the target environment.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeployedPackage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeployedPackageInput | DeployedPackageInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[DeployedPackage],
            error_mapper=create_deployed_package_error_mapper,
            request_options=request_options,
        )

    def delete_deployed_package(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDeployedPackageErrorBody]:
        """Removes a deployed package from its environment, undeploying the component.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/DeployedPackage/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=delete_deployed_package_error_mapper,
            request_options=request_options,
        )

    def get_deployed_package(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeployedPackage, GetDeployedPackageErrorBody]:
        """Retrieves the details of a specific deployed package by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DeployedPackage/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[DeployedPackage],
            error_mapper=get_deployed_package_error_mapper,
            request_options=request_options,
        )

    def query_deployed_packages(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeployedPackageQueryResult, QueryDeployedPackagesErrorBody]:
        """Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current
        deployments across environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeployedPackage/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[DeployedPackageQueryResult],
            error_mapper=query_deployed_packages_error_mapper,
            request_options=request_options,
        )


class AsyncDeploymentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_deployed_package(
        self,
        body: DeployedPackageInput | DeployedPackageInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeployedPackage, CreateDeployedPackageErrorBody]:
        """Deploys a packaged component to an environment. Creates a new deployed package record associating the package
        with the target environment.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeployedPackage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeployedPackageInput | DeployedPackageInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[DeployedPackage],
            error_mapper=create_deployed_package_error_mapper,
            request_options=request_options,
        )

    async def delete_deployed_package(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDeployedPackageErrorBody]:
        """Removes a deployed package from its environment, undeploying the component.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/DeployedPackage/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=delete_deployed_package_error_mapper,
            request_options=request_options,
        )

    async def get_deployed_package(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeployedPackage, GetDeployedPackageErrorBody]:
        """Retrieves the details of a specific deployed package by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/DeployedPackage/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[DeployedPackage],
            error_mapper=get_deployed_package_error_mapper,
            request_options=request_options,
        )

    async def query_deployed_packages(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeployedPackageQueryResult, QueryDeployedPackagesErrorBody]:
        """Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current
        deployments across environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeployedPackage/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[DeployedPackageQueryResult],
            error_mapper=query_deployed_packages_error_mapper,
            request_options=request_options,
        )
