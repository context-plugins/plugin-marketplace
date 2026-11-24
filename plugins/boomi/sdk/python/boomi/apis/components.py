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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_packaged_component_error import (
    CreatePackagedComponentErrorBody,
    create_packaged_component_error_mapper,
)
from ..errors.get_packaged_component_error import GetPackagedComponentErrorBody, get_packaged_component_error_mapper
from ..models.packaged_component import PackagedComponent
from ..models.packaged_component_input import PackagedComponentInput, PackagedComponentInputDict
from ..server.server import Server


class Components:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ComponentsWithRawResponse(client, server, auth)

    def create_packaged_component(
        self,
        body: PackagedComponentInput | PackagedComponentInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PackagedComponent:
        """Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to
        environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created packaged component.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_packaged_component(body, request_options=request_options))

    def get_packaged_component(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PackagedComponent:
        """Retrieves the details of a specific packaged component by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The packaged component object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_packaged_component(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> ComponentsWithRawResponse:
        return self._with_raw_response


class AsyncComponents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncComponentsWithRawResponse(client, server, auth)

    async def create_packaged_component(
        self,
        body: PackagedComponentInput | PackagedComponentInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PackagedComponent:
        """Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to
        environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created packaged component.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_packaged_component(body, request_options=request_options))

    async def get_packaged_component(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PackagedComponent:
        """Retrieves the details of a specific packaged component by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The packaged component object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_packaged_component(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncComponentsWithRawResponse:
        return self._with_raw_response


class ComponentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_packaged_component(
        self,
        body: PackagedComponentInput | PackagedComponentInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PackagedComponent, CreatePackagedComponentErrorBody]:
        """Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to
        environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/PackagedComponent"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PackagedComponentInput | PackagedComponentInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[PackagedComponent],
            error_mapper=create_packaged_component_error_mapper,
            request_options=request_options,
        )

    def get_packaged_component(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PackagedComponent, GetPackagedComponentErrorBody]:
        """Retrieves the details of a specific packaged component by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/PackagedComponent/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[PackagedComponent],
            error_mapper=get_packaged_component_error_mapper,
            request_options=request_options,
        )


class AsyncComponentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_packaged_component(
        self,
        body: PackagedComponentInput | PackagedComponentInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PackagedComponent, CreatePackagedComponentErrorBody]:
        """Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to
        environments.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/PackagedComponent"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PackagedComponentInput | PackagedComponentInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[PackagedComponent],
            error_mapper=create_packaged_component_error_mapper,
            request_options=request_options,
        )

    async def get_packaged_component(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PackagedComponent, GetPackagedComponentErrorBody]:
        """Retrieves the details of a specific packaged component by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/PackagedComponent/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[PackagedComponent],
            error_mapper=get_packaged_component_error_mapper,
            request_options=request_options,
        )
