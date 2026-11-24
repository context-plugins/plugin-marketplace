from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_runners_runner_id_error import (
    DeleteApiV1RunnersRunnerIdErrorBody,
    delete_api_v1_runners_runner_id_error_mapper,
)
from ..errors.get_api_v1_runners_error import GetApiV1RunnersErrorBody, get_api_v1_runners_error_mapper
from ..errors.get_api_v1_runners_runner_id_error import (
    GetApiV1RunnersRunnerIdErrorBody,
    get_api_v1_runners_runner_id_error_mapper,
)
from ..errors.post_api_v1_runners_error import PostApiV1RunnersErrorBody, post_api_v1_runners_error_mapper
from ..models.public_api_create_runner_response import PublicApiCreateRunnerResponse
from ..models.public_api_get_runner_response import PublicApiGetRunnerResponse
from ..models.public_api_list_runners_response import PublicApiListRunnersResponse
from ..server.server import Server


class Runners:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RunnersWithRawResponse(client, server, auth)

    def delete_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """This endpoint allows you to delete a specific self-hosted runner by its ID. If the runner is still in use,
        the request will fail with a ``400 Bad Request`` response.

        Soda-hosted and virtual runners cannot be deleted through this endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_runners_runner_id(runner_id, request_options=request_options)
        )

    def get_api_v1_runners(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiListRunnersResponse:
        """This endpoint allows you to list runners in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_runners(page=page, size=size, request_options=request_options))

    def get_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiGetRunnerResponse:
        """This endpoint allows you to retrieve a specific runner by its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_runners_runner_id(runner_id, request_options=request_options))

    def post_api_v1_runners(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiCreateRunnerResponse:
        """Creates an API key for a new self-hosted runner deployment.

        Returns the API key credentials (id and secret) to configure the runner. The credentials are only returned at
        creation time and cannot be retrieved later, so make sure to store them securely.

        After creation the runner does not immediately become visible in Soda Cloud. The runner needs to registers
        itself using the API key credentials before it becomes available.

        See deployment instructions for setting up the runner.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_runners(request_options=request_options))

    @property
    def with_raw_response(self) -> RunnersWithRawResponse:
        return self._with_raw_response


class AsyncRunners:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRunnersWithRawResponse(client, server, auth)

    async def delete_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """This endpoint allows you to delete a specific self-hosted runner by its ID. If the runner is still in use,
        the request will fail with a ``400 Bad Request`` response.

        Soda-hosted and virtual runners cannot be deleted through this endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_runners_runner_id(runner_id, request_options=request_options)
        )

    async def get_api_v1_runners(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListRunnersResponse:
        """This endpoint allows you to list runners in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_runners(page=page, size=size, request_options=request_options)
        )

    async def get_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiGetRunnerResponse:
        """This endpoint allows you to retrieve a specific runner by its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_runners_runner_id(runner_id, request_options=request_options)
        )

    async def post_api_v1_runners(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiCreateRunnerResponse:
        """Creates an API key for a new self-hosted runner deployment.

        Returns the API key credentials (id and secret) to configure the runner. The credentials are only returned at
        creation time and cannot be retrieved later, so make sure to store them securely.

        After creation the runner does not immediately become visible in Soda Cloud. The runner needs to registers
        itself using the API key credentials before it becomes available.

        See deployment instructions for setting up the runner.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_runners(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRunnersWithRawResponse:
        return self._with_raw_response


class RunnersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiV1RunnersRunnerIdErrorBody]:
        """This endpoint allows you to delete a specific self-hosted runner by its ID. If the runner is still in use,
        the request will fail with a ``400 Bad Request`` response.

        Soda-hosted and virtual runners cannot be deleted through this endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/runners/{runnerId}"),
            path_params=[param[str]("runnerId", runner_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[Any],
            error_mapper=delete_api_v1_runners_runner_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_runners(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiListRunnersResponse, GetApiV1RunnersErrorBody]:
        """This endpoint allows you to list runners in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/runners"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListRunnersResponse],
            error_mapper=get_api_v1_runners_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetRunnerResponse, GetApiV1RunnersRunnerIdErrorBody]:
        """This endpoint allows you to retrieve a specific runner by its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/runners/{runnerId}"),
            path_params=[param[str]("runnerId", runner_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetRunnerResponse],
            error_mapper=get_api_v1_runners_runner_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_runners(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiCreateRunnerResponse, PostApiV1RunnersErrorBody]:
        """Creates an API key for a new self-hosted runner deployment.

        Returns the API key credentials (id and secret) to configure the runner. The credentials are only returned at
        creation time and cannot be retrieved later, so make sure to store them securely.

        After creation the runner does not immediately become visible in Soda Cloud. The runner needs to registers
        itself using the API key credentials before it becomes available.

        See deployment instructions for setting up the runner.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/runners"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateRunnerResponse],
            error_mapper=post_api_v1_runners_error_mapper,
            request_options=request_options,
        )


class AsyncRunnersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteApiV1RunnersRunnerIdErrorBody]:
        """This endpoint allows you to delete a specific self-hosted runner by its ID. If the runner is still in use,
        the request will fail with a ``400 Bad Request`` response.

        Soda-hosted and virtual runners cannot be deleted through this endpoint.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/runners/{runnerId}"),
            path_params=[param[str]("runnerId", runner_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[Any],
            error_mapper=delete_api_v1_runners_runner_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_runners(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListRunnersResponse, GetApiV1RunnersErrorBody]:
        """This endpoint allows you to list runners in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/runners"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListRunnersResponse],
            error_mapper=get_api_v1_runners_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_runners_runner_id(
        self, runner_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetRunnerResponse, GetApiV1RunnersRunnerIdErrorBody]:
        """This endpoint allows you to retrieve a specific runner by its ID.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Runners``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            runner_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/runners/{runnerId}"),
            path_params=[param[str]("runnerId", runner_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetRunnerResponse],
            error_mapper=get_api_v1_runners_runner_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_runners(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiCreateRunnerResponse, PostApiV1RunnersErrorBody]:
        """Creates an API key for a new self-hosted runner deployment.

        Returns the API key credentials (id and secret) to configure the runner. The credentials are only returned at
        creation time and cannot be retrieved later, so make sure to store them securely.

        After creation the runner does not immediately become visible in Soda Cloud. The runner needs to registers
        itself using the API key credentials before it becomes available.

        See deployment instructions for setting up the runner.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Runners``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/runners"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateRunnerResponse],
            error_mapper=post_api_v1_runners_error_mapper,
            request_options=request_options,
        )
