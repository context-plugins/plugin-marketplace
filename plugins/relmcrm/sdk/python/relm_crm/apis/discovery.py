from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.schema_doc import SchemaDoc
from ..models.settings import Settings
from ..models.settings_request import SettingsRequest, SettingsRequestDict
from ..models.usage import Usage
from ..server.server import Server


class Discovery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DiscoveryWithRawResponse(client, server, auth)

    def get_schema(self, *, request_options: RequestOptionsOrDict | None = None) -> SchemaDoc:
        """Returns every object with its fields, id_prefix and list_filters, all enum groups, list_controls, the
        automation capability catalog, and usage notes. Call this before guessing a type, field or filter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schema document

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_schema(request_options=request_options))

    def get_settings(self, *, request_options: RequestOptionsOrDict | None = None) -> Settings:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settings

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_settings(request_options=request_options))

    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> Usage:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_usage(request_options=request_options))

    def set_settings(
        self, body: SettingsRequest | SettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Settings:
        """Send a ``PATCH`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settings

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.set_settings(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DiscoveryWithRawResponse:
        return self._with_raw_response


class AsyncDiscovery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDiscoveryWithRawResponse(client, server, auth)

    async def get_schema(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SchemaDoc:
        """Returns every object with its fields, id_prefix and list_filters, all enum groups, list_controls, the
        automation capability catalog, and usage notes. Call this before guessing a type, field or filter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Schema document

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_schema(request_options=request_options))

    async def get_settings(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Settings:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settings

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_settings(request_options=request_options))

    async def get_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Usage:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_usage(request_options=request_options))

    async def set_settings(
        self, body: SettingsRequest | SettingsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Settings:
        """Send a ``PATCH`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settings

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.set_settings(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDiscoveryWithRawResponse:
        return self._with_raw_response


class DiscoveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_schema(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SchemaDoc, RawError]:
        """Returns every object with its fields, id_prefix and list_filters, all enum groups, list_controls, the
        automation capability catalog, and usage notes. Call this before guessing a type, field or filter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/schema"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[SchemaDoc],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_settings(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Settings, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settings"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Settings],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Usage, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Usage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def set_settings(
        self, body: SettingsRequest | SettingsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Settings, RawError]:
        """Send a ``PATCH`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/settings"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SettingsRequest | SettingsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Settings],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDiscoveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_schema(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SchemaDoc, RawError]:
        """Returns every object with its fields, id_prefix and list_filters, all enum groups, list_controls, the
        automation capability catalog, and usage notes. Call this before guessing a type, field or filter.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/schema"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[SchemaDoc],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_settings(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Settings, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settings"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Settings],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Usage, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Usage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def set_settings(
        self, body: SettingsRequest | SettingsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Settings, RawError]:
        """Send a ``PATCH`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/settings"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SettingsRequest | SettingsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Settings],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
