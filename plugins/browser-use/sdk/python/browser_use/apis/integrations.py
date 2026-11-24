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
    json_decoder,
    param,
    unwrap,
)
from ..errors.authorize_integration_integrations_provider_authorize_post_error import (
    AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody,
    authorize_integration_integrations_provider_authorize_post_error_mapper,
)
from ..errors.disconnect_integration_integrations_provider_delete_error import (
    DisconnectIntegrationIntegrationsProviderDeleteErrorBody,
    disconnect_integration_integrations_provider_delete_error_mapper,
)
from ..errors.get_connection_status_integrations_provider_status_get_error import (
    GetConnectionStatusIntegrationsProviderStatusGetErrorBody,
    get_connection_status_integrations_provider_status_get_error_mapper,
)
from ..errors.list_categories_integrations_categories_get_error import (
    ListCategoriesIntegrationsCategoriesGetErrorBody,
    list_categories_integrations_categories_get_error_mapper,
)
from ..errors.list_integrations_integrations_get_error import (
    ListIntegrationsIntegrationsGetErrorBody,
    list_integrations_integrations_get_error_mapper,
)
from ..models.authorize_response import AuthorizeResponse
from ..models.connection_status_response import ConnectionStatusResponse
from ..models.disconnect_response import DisconnectResponse
from ..models.integration_category_response import IntegrationCategoryResponse
from ..models.integration_list_response import IntegrationListResponse
from ..server.server import Server


class Integrations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IntegrationsWithRawResponse(client, server, auth)

    def authorize_integration_integrations_provider_authorize_post(
        self, provider: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AuthorizeResponse:
        """Get the OAuth redirect URL for connecting an integration.

        The client opens the returned URL in a web auth session and polls ``/integrations/{provider}/status`` once the
        flow lands back on the callback path. The URL is Composio-hosted; no redirect URI is registered per client.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.authorize_integration_integrations_provider_authorize_post(
                provider, request_options=request_options
            ),
        )

    def disconnect_integration_integrations_provider_delete(
        self, provider: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DisconnectResponse:
        """Disconnect an integration for this project.

        Deliberately NOT gated like ``authorize`` above: a restricted project must still be able to tear down a
        connection it already has.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.disconnect_integration_integrations_provider_delete(
                provider, request_options=request_options
            ),
        )

    def get_connection_status_integrations_provider_status_get(
        self, provider: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ConnectionStatusResponse:
        """Check whether this project has connected a specific provider.

        Poll this after opening the authorize URL to learn when OAuth completed.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_connection_status_integrations_provider_status_get(
                provider, request_options=request_options
            ),
        )

    def list_categories_integrations_categories_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> IntegrationCategoryResponse:
        """Get all integration categories, for filtering the list above.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_categories_integrations_categories_get(request_options=request_options)
        )

    def list_integrations_integrations_get(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        popular_only: bool | None = False,
        connected_only: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IntegrationListResponse:
        """List available integrations with this project's connection status.

        ``is_connected`` is resolved per integration, so a client can render the whole catalogue and the connected
        subset from this one call. ``connected_only`` is what a "my integrations" view reads — including on a restricted
        project, which cannot connect anything but can still remove what it already has.

        Args:
            limit: Maximum number of results
            offset: Number of results to skip
            search: Filter by name, description or provider
            popular_only: Only return popular integrations
            connected_only: Only return integrations this project has connected
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_integrations_integrations_get(
                limit=limit,
                offset=offset,
                search=search,
                popular_only=popular_only,
                connected_only=connected_only,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> IntegrationsWithRawResponse:
        return self._with_raw_response


class AsyncIntegrations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIntegrationsWithRawResponse(client, server, auth)

    async def authorize_integration_integrations_provider_authorize_post(
        self, provider: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuthorizeResponse:
        """Get the OAuth redirect URL for connecting an integration.

        The client opens the returned URL in a web auth session and polls ``/integrations/{provider}/status`` once the
        flow lands back on the callback path. The URL is Composio-hosted; no redirect URI is registered per client.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.authorize_integration_integrations_provider_authorize_post(
                provider, request_options=request_options
            ),
        )

    async def disconnect_integration_integrations_provider_delete(
        self, provider: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DisconnectResponse:
        """Disconnect an integration for this project.

        Deliberately NOT gated like ``authorize`` above: a restricted project must still be able to tear down a
        connection it already has.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.disconnect_integration_integrations_provider_delete(
                provider, request_options=request_options
            ),
        )

    async def get_connection_status_integrations_provider_status_get(
        self, provider: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ConnectionStatusResponse:
        """Check whether this project has connected a specific provider.

        Poll this after opening the authorize URL to learn when OAuth completed.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_connection_status_integrations_provider_status_get(
                provider, request_options=request_options
            ),
        )

    async def list_categories_integrations_categories_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IntegrationCategoryResponse:
        """Get all integration categories, for filtering the list above.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_categories_integrations_categories_get(request_options=request_options)
        )

    async def list_integrations_integrations_get(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        popular_only: bool | None = False,
        connected_only: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IntegrationListResponse:
        """List available integrations with this project's connection status.

        ``is_connected`` is resolved per integration, so a client can render the whole catalogue and the connected
        subset from this one call. ``connected_only`` is what a "my integrations" view reads — including on a restricted
        project, which cannot connect anything but can still remove what it already has.

        Args:
            limit: Maximum number of results
            offset: Number of results to skip
            search: Filter by name, description or provider
            popular_only: Only return popular integrations
            connected_only: Only return integrations this project has connected
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_integrations_integrations_get(
                limit=limit,
                offset=offset,
                search=search,
                popular_only=popular_only,
                connected_only=connected_only,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIntegrationsWithRawResponse:
        return self._with_raw_response


class IntegrationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def authorize_integration_integrations_provider_authorize_post(
        self, provider: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuthorizeResponse, AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody]:
        """Get the OAuth redirect URL for connecting an integration.

        The client opens the returned URL in a web auth session and polls ``/integrations/{provider}/status`` once the
        flow lands back on the callback path. The URL is Composio-hosted; no redirect URI is registered per client.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/integrations/{provider}/authorize"),
            path_params=[param[str]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[AuthorizeResponse],
            error_mapper=authorize_integration_integrations_provider_authorize_post_error_mapper,
            request_options=request_options,
        )

    def disconnect_integration_integrations_provider_delete(
        self, provider: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DisconnectResponse, DisconnectIntegrationIntegrationsProviderDeleteErrorBody]:
        """Disconnect an integration for this project.

        Deliberately NOT gated like ``authorize`` above: a restricted project must still be able to tear down a
        connection it already has.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/integrations/{provider}"),
            path_params=[param[str]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[DisconnectResponse],
            error_mapper=disconnect_integration_integrations_provider_delete_error_mapper,
            request_options=request_options,
        )

    def get_connection_status_integrations_provider_status_get(
        self, provider: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionStatusResponse, GetConnectionStatusIntegrationsProviderStatusGetErrorBody]:
        """Check whether this project has connected a specific provider.

        Poll this after opening the authorize URL to learn when OAuth completed.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/integrations/{provider}/status"),
            path_params=[param[str]("provider", provider)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[ConnectionStatusResponse],
            error_mapper=get_connection_status_integrations_provider_status_get_error_mapper,
            request_options=request_options,
        )

    def list_categories_integrations_categories_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IntegrationCategoryResponse, ListCategoriesIntegrationsCategoriesGetErrorBody]:
        """Get all integration categories, for filtering the list above.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/integrations/categories"),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IntegrationCategoryResponse],
            error_mapper=list_categories_integrations_categories_get_error_mapper,
            request_options=request_options,
        )

    def list_integrations_integrations_get(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        popular_only: bool | None = False,
        connected_only: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IntegrationListResponse, ListIntegrationsIntegrationsGetErrorBody]:
        """List available integrations with this project's connection status.

        ``is_connected`` is resolved per integration, so a client can render the whole catalogue and the connected
        subset from this one call. ``connected_only`` is what a "my integrations" view reads — including on a restricted
        project, which cannot connect anything but can still remove what it already has.

        Args:
            limit: Maximum number of results
            offset: Number of results to skip
            search: Filter by name, description or provider
            popular_only: Only return popular integrations
            connected_only: Only return integrations this project has connected
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/integrations"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
                param[bool | None]("popular_only", popular_only),
                param[bool | None]("connected_only", connected_only),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[IntegrationListResponse],
            error_mapper=list_integrations_integrations_get_error_mapper,
            request_options=request_options,
        )


class AsyncIntegrationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def authorize_integration_integrations_provider_authorize_post(
        self, provider: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuthorizeResponse, AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody]:
        """Get the OAuth redirect URL for connecting an integration.

        The client opens the returned URL in a web auth session and polls ``/integrations/{provider}/status`` once the
        flow lands back on the callback path. The URL is Composio-hosted; no redirect URI is registered per client.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/integrations/{provider}/authorize"),
            path_params=[param[str]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[AuthorizeResponse],
            error_mapper=authorize_integration_integrations_provider_authorize_post_error_mapper,
            request_options=request_options,
        )

    async def disconnect_integration_integrations_provider_delete(
        self, provider: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DisconnectResponse, DisconnectIntegrationIntegrationsProviderDeleteErrorBody]:
        """Disconnect an integration for this project.

        Deliberately NOT gated like ``authorize`` above: a restricted project must still be able to tear down a
        connection it already has.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/integrations/{provider}"),
            path_params=[param[str]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[DisconnectResponse],
            error_mapper=disconnect_integration_integrations_provider_delete_error_mapper,
            request_options=request_options,
        )

    async def get_connection_status_integrations_provider_status_get(
        self, provider: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ConnectionStatusResponse, GetConnectionStatusIntegrationsProviderStatusGetErrorBody]:
        """Check whether this project has connected a specific provider.

        Poll this after opening the authorize URL to learn when OAuth completed.

        Args:
            provider: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/integrations/{provider}/status"),
            path_params=[param[str]("provider", provider)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[ConnectionStatusResponse],
            error_mapper=get_connection_status_integrations_provider_status_get_error_mapper,
            request_options=request_options,
        )

    async def list_categories_integrations_categories_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IntegrationCategoryResponse, ListCategoriesIntegrationsCategoriesGetErrorBody]:
        """Get all integration categories, for filtering the list above.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/integrations/categories"),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IntegrationCategoryResponse],
            error_mapper=list_categories_integrations_categories_get_error_mapper,
            request_options=request_options,
        )

    async def list_integrations_integrations_get(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        popular_only: bool | None = False,
        connected_only: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IntegrationListResponse, ListIntegrationsIntegrationsGetErrorBody]:
        """List available integrations with this project's connection status.

        ``is_connected`` is resolved per integration, so a client can render the whole catalogue and the connected
        subset from this one call. ``connected_only`` is what a "my integrations" view reads — including on a restricted
        project, which cannot connect anything but can still remove what it already has.

        Args:
            limit: Maximum number of results
            offset: Number of results to skip
            search: Filter by name, description or provider
            popular_only: Only return popular integrations
            connected_only: Only return integrations this project has connected
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/integrations"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
                param[bool | None]("popular_only", popular_only),
                param[bool | None]("connected_only", connected_only),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[IntegrationListResponse],
            error_mapper=list_integrations_integrations_get_error_mapper,
            request_options=request_options,
        )
