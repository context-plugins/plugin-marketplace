from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.list_runners_error import ListRunnersErrorBody, list_runners_error_mapper
from ..models.runner_response import RunnerResponse
from ..server.server import Server


class RunnerApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RunnerApiWithRawResponse(client, server, auth)

    def list_runners(
        self,
        *,
        namespace: str | None = None,
        resource_class: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunnerResponse:
        """Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter
        parameter must be provided to return results. Returns details including hostname, name, connection timestamps,
        version, and resource class.

        Args:
            namespace: The namespace to filter runners by. Cannot be used together with resource-class.
            resource_class: The resource class to filter runners by. Cannot be used together with namespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved runners

        Raises:
            ApiError: Bad request - at least one filter parameter must be provided Unauthorized ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_runners(
                namespace=namespace, resource_class=resource_class, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RunnerApiWithRawResponse:
        return self._with_raw_response


class AsyncRunnerApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRunnerApiWithRawResponse(client, server, auth)

    async def list_runners(
        self,
        *,
        namespace: str | None = None,
        resource_class: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunnerResponse:
        """Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter
        parameter must be provided to return results. Returns details including hostname, name, connection timestamps,
        version, and resource class.

        Args:
            namespace: The namespace to filter runners by. Cannot be used together with resource-class.
            resource_class: The resource class to filter runners by. Cannot be used together with namespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved runners

        Raises:
            ApiError: Bad request - at least one filter parameter must be provided Unauthorized ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_runners(
                namespace=namespace, resource_class=resource_class, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRunnerApiWithRawResponse:
        return self._with_raw_response


class RunnerApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_runners(
        self,
        *,
        namespace: str | None = None,
        resource_class: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunnerResponse, ListRunnersErrorBody]:
        """Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter
        parameter must be provided to return results. Returns details including hostname, name, connection timestamps,
        version, and resource class.

        Args:
            namespace: The namespace to filter runners by. Cannot be used together with resource-class.
            resource_class: The resource class to filter runners by. Cannot be used together with namespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner"),
            query_params=[
                param[str | None]("namespace", namespace), param[str | None]("resource-class", resource_class)
            ],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[RunnerResponse],
            error_mapper=list_runners_error_mapper,
            request_options=request_options,
        )


class AsyncRunnerApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_runners(
        self,
        *,
        namespace: str | None = None,
        resource_class: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunnerResponse, ListRunnersErrorBody]:
        """Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter
        parameter must be provided to return results. Returns details including hostname, name, connection timestamps,
        version, and resource class.

        Args:
            namespace: The namespace to filter runners by. Cannot be used together with resource-class.
            resource_class: The resource class to filter runners by. Cannot be used together with namespace.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/runner"),
            query_params=[
                param[str | None]("namespace", namespace), param[str | None]("resource-class", resource_class)
            ],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[RunnerResponse],
            error_mapper=list_runners_error_mapper,
            request_options=request_options,
        )
