from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.scim_list_response import ScimListResponse
from ..server.server import Server


class ScimSchemaDiscovery:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ScimSchemaDiscoveryWithRawResponse(client, server)

    def get_scim_resource_types(self, *, request_options: RequestOptionsOrDict | None = None) -> ScimListResponse:
        """Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling
        IdP clients to discover available endpoints and their schemas.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of SCIM resource types.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_scim_resource_types(request_options=request_options))

    def get_scim_schemas(self, *, request_options: RequestOptionsOrDict | None = None) -> ScimListResponse:
        """Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the
        available attributes for User and Group resources.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of SCIM schemas supported by the API.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_scim_schemas(request_options=request_options))

    @property
    def with_raw_response(self) -> ScimSchemaDiscoveryWithRawResponse:
        return self._with_raw_response


class AsyncScimSchemaDiscovery:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncScimSchemaDiscoveryWithRawResponse(client, server)

    async def get_scim_resource_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ScimListResponse:
        """Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling
        IdP clients to discover available endpoints and their schemas.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of SCIM resource types.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_scim_resource_types(request_options=request_options))

    async def get_scim_schemas(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ScimListResponse:
        """Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the
        available attributes for User and Group resources.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of SCIM schemas supported by the API.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_scim_schemas(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScimSchemaDiscoveryWithRawResponse:
        return self._with_raw_response


class ScimSchemaDiscoveryWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_scim_resource_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimListResponse, RawError]:
        """Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling
        IdP clients to discover available endpoints and their schemas.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api("/scim/v2.0/ResourceTypes"),
            decoder=json_decoder[ScimListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_scim_schemas(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScimListResponse, RawError]:
        """Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the
        available attributes for User and Group resources.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api("/scim/v2.0/Schemas"),
            decoder=json_decoder[ScimListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncScimSchemaDiscoveryWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_scim_resource_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScimListResponse, RawError]:
        """Returns the SCIM resource types supported by the Contentstack SCIM API including Users and Groups, enabling
        IdP clients to discover available endpoints and their schemas.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api("/scim/v2.0/ResourceTypes"),
            decoder=async_json_decoder[ScimListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_scim_schemas(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ScimListResponse, RawError]:
        """Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to understand the
        available attributes for User and Group resources.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_scim_scim_groups_api("/scim/v2.0/Schemas"),
            decoder=async_json_decoder[ScimListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
