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
from ..errors.create_environment_error import CreateEnvironmentErrorBody, create_environment_error_mapper
from ..errors.delete_environment_error import DeleteEnvironmentErrorBody, delete_environment_error_mapper
from ..errors.get_environment_error import GetEnvironmentErrorBody, get_environment_error_mapper
from ..errors.query_environments_error import QueryEnvironmentsErrorBody, query_environments_error_mapper
from ..models.environment_input import EnvironmentInput, EnvironmentInputDict
from ..models.environment_model import EnvironmentModel
from ..models.environment_query_result import EnvironmentQueryResult
from ..models.query_request import QueryRequest, QueryRequestDict
from ..server.server import Server


class Environments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnvironmentsWithRawResponse(client, server, auth)

    def create_environment(
        self, body: EnvironmentInput | EnvironmentInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentModel:
        """Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created environment object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_environment(body, request_options=request_options))

    def delete_environment(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a runtime environment from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_environment(id_, request_options=request_options))

    def get_environment(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel:
        """Retrieves the details of a specific runtime environment by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_environment(id_, request_options=request_options))

    def query_environments(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentQueryResult:
        """Returns a list of runtime environments matching the specified query filter criteria.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching environment objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.query_environments(body, request_options=request_options))

    @property
    def with_raw_response(self) -> EnvironmentsWithRawResponse:
        return self._with_raw_response


class AsyncEnvironments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnvironmentsWithRawResponse(client, server, auth)

    async def create_environment(
        self, body: EnvironmentInput | EnvironmentInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentModel:
        """Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created environment object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_environment(body, request_options=request_options))

    async def delete_environment(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a runtime environment from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_environment(id_, request_options=request_options))

    async def get_environment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentModel:
        """Retrieves the details of a specific runtime environment by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The environment object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_environment(id_, request_options=request_options))

    async def query_environments(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentQueryResult:
        """Returns a list of runtime environments matching the specified query filter criteria.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching environment objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.query_environments(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEnvironmentsWithRawResponse:
        return self._with_raw_response


class EnvironmentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_environment(
        self, body: EnvironmentInput | EnvironmentInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]:
        """Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Environment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EnvironmentInput | EnvironmentInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[EnvironmentModel],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    def delete_environment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEnvironmentErrorBody]:
        """Permanently deletes a runtime environment from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/Environment/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=delete_environment_error_mapper,
            request_options=request_options,
        )

    def get_environment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentModel, GetEnvironmentErrorBody]:
        """Retrieves the details of a specific runtime environment by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Environment/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[EnvironmentModel],
            error_mapper=get_environment_error_mapper,
            request_options=request_options,
        )

    def query_environments(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentQueryResult, QueryEnvironmentsErrorBody]:
        """Returns a list of runtime environments matching the specified query filter criteria.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Environment/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[EnvironmentQueryResult],
            error_mapper=query_environments_error_mapper,
            request_options=request_options,
        )


class AsyncEnvironmentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_environment(
        self, body: EnvironmentInput | EnvironmentInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]:
        """Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Environment"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[EnvironmentInput | EnvironmentInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    async def delete_environment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEnvironmentErrorBody]:
        """Permanently deletes a runtime environment from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/Environment/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=delete_environment_error_mapper,
            request_options=request_options,
        )

    async def get_environment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentModel, GetEnvironmentErrorBody]:
        """Retrieves the details of a specific runtime environment by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Environment/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=get_environment_error_mapper,
            request_options=request_options,
        )

    async def query_environments(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentQueryResult, QueryEnvironmentsErrorBody]:
        """Returns a list of runtime environments matching the specified query filter criteria.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Environment/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[EnvironmentQueryResult],
            error_mapper=query_environments_error_mapper,
            request_options=request_options,
        )
