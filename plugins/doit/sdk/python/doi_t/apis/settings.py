from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.create_custom_theme_error import CreateCustomThemeErrorBody, create_custom_theme_error_mapper
from ..errors.delete_custom_theme_error import DeleteCustomThemeErrorBody, delete_custom_theme_error_mapper
from ..errors.get_active_theme_error import GetActiveThemeErrorBody, get_active_theme_error_mapper
from ..errors.get_custom_theme_error import GetCustomThemeErrorBody, get_custom_theme_error_mapper
from ..errors.list_custom_themes_error import ListCustomThemesErrorBody, list_custom_themes_error_mapper
from ..errors.set_active_theme_error import SetActiveThemeErrorBody, set_active_theme_error_mapper
from ..errors.update_custom_theme_error import UpdateCustomThemeErrorBody, update_custom_theme_error_mapper
from ..models.active_theme import ActiveTheme
from ..models.analytics_v1_settings_themes_response import AnalyticsV1SettingsThemesResponse
from ..models.create_custom_theme_request import CreateCustomThemeRequest, CreateCustomThemeRequestDict
from ..models.custom_theme import CustomTheme
from ..models.set_active_theme_request import SetActiveThemeRequest, SetActiveThemeRequestDict
from ..models.update_custom_theme_request import UpdateCustomThemeRequest, UpdateCustomThemeRequestDict
from ..server.server import Server


class Settings:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SettingsWithRawResponse(client, server, auth)

    def create_custom_theme(
        self,
        body: CreateCustomThemeRequest | CreateCustomThemeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomTheme:
        """Creates a new custom color theme. Requires Cloud Analytics Admin permission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Custom theme created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_custom_theme(body, request_options=request_options))

    def delete_custom_theme(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Custom theme deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_custom_theme(id_, request_options=request_options))

    def get_active_theme(self, *, request_options: RequestOptionsOrDict | None = None) -> ActiveTheme:
        """Returns the theme currently active for the authenticated user. ``themeId`` is the reserved sentinel
        ``"default"`` when no custom or preset theme is selected and the user is on the built-in default.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_active_theme(request_options=request_options))

    def get_custom_theme(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CustomTheme:
        """Returns a custom theme by the specified Id.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Custom theme returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_custom_theme(id_, request_options=request_options))

    def list_custom_themes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AnalyticsV1SettingsThemesResponse:
        """Returns the list of custom color themes defined for your account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_custom_themes(request_options=request_options))

    def set_active_theme(
        self,
        body: SetActiveThemeRequest | SetActiveThemeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActiveTheme:
        """Sets the theme active for the authenticated user. Send the reserved sentinel ``themeId: "default"`` to clear
        the active theme and fall back to the built-in default. Returns the updated active theme.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Active theme updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.set_active_theme(body, request_options=request_options))

    def update_custom_theme(
        self,
        id_: str,
        body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomTheme:
        """Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Custom theme updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_custom_theme(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SettingsWithRawResponse:
        return self._with_raw_response


class AsyncSettings:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSettingsWithRawResponse(client, server, auth)

    async def create_custom_theme(
        self,
        body: CreateCustomThemeRequest | CreateCustomThemeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomTheme:
        """Creates a new custom color theme. Requires Cloud Analytics Admin permission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Custom theme created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_custom_theme(body, request_options=request_options))

    async def delete_custom_theme(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Custom theme deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_custom_theme(id_, request_options=request_options))

    async def get_active_theme(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ActiveTheme:
        """Returns the theme currently active for the authenticated user. ``themeId`` is the reserved sentinel
        ``"default"`` when no custom or preset theme is selected and the user is on the built-in default.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_active_theme(request_options=request_options))

    async def get_custom_theme(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomTheme:
        """Returns a custom theme by the specified Id.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Custom theme returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_custom_theme(id_, request_options=request_options))

    async def list_custom_themes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnalyticsV1SettingsThemesResponse:
        """Returns the list of custom color themes defined for your account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Not Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_custom_themes(request_options=request_options))

    async def set_active_theme(
        self,
        body: SetActiveThemeRequest | SetActiveThemeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActiveTheme:
        """Sets the theme active for the authenticated user. Send the reserved sentinel ``themeId: "default"`` to clear
        the active theme and fall back to the built-in default. Returns the updated active theme.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Active theme updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.set_active_theme(body, request_options=request_options))

    async def update_custom_theme(
        self,
        id_: str,
        body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomTheme:
        """Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Custom theme updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_custom_theme(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSettingsWithRawResponse:
        return self._with_raw_response


class SettingsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_custom_theme(
        self,
        body: CreateCustomThemeRequest | CreateCustomThemeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomTheme, CreateCustomThemeErrorBody]:
        """Creates a new custom color theme. Requires Cloud Analytics Admin permission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/settings/themes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomThemeRequest | CreateCustomThemeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomTheme],
            error_mapper=create_custom_theme_error_mapper,
            request_options=request_options,
        )

    def delete_custom_theme(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomThemeErrorBody]:
        """Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/settings/themes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Any],
            error_mapper=delete_custom_theme_error_mapper,
            request_options=request_options,
        )

    def get_active_theme(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ActiveTheme, GetActiveThemeErrorBody]:
        """Returns the theme currently active for the authenticated user. ``themeId`` is the reserved sentinel
        ``"default"`` when no custom or preset theme is selected and the user is on the built-in default.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/settings/active-theme"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ActiveTheme],
            error_mapper=get_active_theme_error_mapper,
            request_options=request_options,
        )

    def get_custom_theme(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomTheme, GetCustomThemeErrorBody]:
        """Returns a custom theme by the specified Id.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/settings/themes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomTheme],
            error_mapper=get_custom_theme_error_mapper,
            request_options=request_options,
        )

    def list_custom_themes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsV1SettingsThemesResponse, ListCustomThemesErrorBody]:
        """Returns the list of custom color themes defined for your account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/settings/themes"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1SettingsThemesResponse],
            error_mapper=list_custom_themes_error_mapper,
            request_options=request_options,
        )

    def set_active_theme(
        self,
        body: SetActiveThemeRequest | SetActiveThemeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActiveTheme, SetActiveThemeErrorBody]:
        """Sets the theme active for the authenticated user. Send the reserved sentinel ``themeId: "default"`` to clear
        the active theme and fall back to the built-in default. Returns the updated active theme.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/analytics/v1/settings/active-theme"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetActiveThemeRequest | SetActiveThemeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ActiveTheme],
            error_mapper=set_active_theme_error_mapper,
            request_options=request_options,
        )

    def update_custom_theme(
        self,
        id_: str,
        body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomTheme, UpdateCustomThemeErrorBody]:
        """Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/settings/themes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomThemeRequest | UpdateCustomThemeRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CustomTheme],
            error_mapper=update_custom_theme_error_mapper,
            request_options=request_options,
        )


class AsyncSettingsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_custom_theme(
        self,
        body: CreateCustomThemeRequest | CreateCustomThemeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomTheme, CreateCustomThemeErrorBody]:
        """Creates a new custom color theme. Requires Cloud Analytics Admin permission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/settings/themes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomThemeRequest | CreateCustomThemeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomTheme],
            error_mapper=create_custom_theme_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_theme(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteCustomThemeErrorBody]:
        """Deletes the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/settings/themes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Any],
            error_mapper=delete_custom_theme_error_mapper,
            request_options=request_options,
        )

    async def get_active_theme(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ActiveTheme, GetActiveThemeErrorBody]:
        """Returns the theme currently active for the authenticated user. ``themeId`` is the reserved sentinel
        ``"default"`` when no custom or preset theme is selected and the user is on the built-in default.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/settings/active-theme"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ActiveTheme],
            error_mapper=get_active_theme_error_mapper,
            request_options=request_options,
        )

    async def get_custom_theme(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomTheme, GetCustomThemeErrorBody]:
        """Returns a custom theme by the specified Id.

        Args:
            id_: Custom theme ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/settings/themes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomTheme],
            error_mapper=get_custom_theme_error_mapper,
            request_options=request_options,
        )

    async def list_custom_themes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsV1SettingsThemesResponse, ListCustomThemesErrorBody]:
        """Returns the list of custom color themes defined for your account.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/settings/themes"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1SettingsThemesResponse],
            error_mapper=list_custom_themes_error_mapper,
            request_options=request_options,
        )

    async def set_active_theme(
        self,
        body: SetActiveThemeRequest | SetActiveThemeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActiveTheme, SetActiveThemeErrorBody]:
        """Sets the theme active for the authenticated user. Send the reserved sentinel ``themeId: "default"`` to clear
        the active theme and fall back to the built-in default. Returns the updated active theme.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/analytics/v1/settings/active-theme"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetActiveThemeRequest | SetActiveThemeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ActiveTheme],
            error_mapper=set_active_theme_error_mapper,
            request_options=request_options,
        )

    async def update_custom_theme(
        self,
        id_: str,
        body: UpdateCustomThemeRequest | UpdateCustomThemeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomTheme, UpdateCustomThemeErrorBody]:
        """Updates the custom theme specified by the Id. Requires Cloud Analytics Admin permission.

        Args:
            id_: Custom theme ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/settings/themes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCustomThemeRequest | UpdateCustomThemeRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CustomTheme],
            error_mapper=update_custom_theme_error_mapper,
            request_options=request_options,
        )
