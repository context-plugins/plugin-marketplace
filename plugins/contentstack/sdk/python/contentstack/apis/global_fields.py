from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.get_all_global_fields_error import GetAllGlobalFieldsErrorBody, get_all_global_fields_error_mapper
from ..errors.get_single_global_field_error import GetSingleGlobalFieldErrorBody, get_single_global_field_error_mapper
from ..models.global_field import GlobalField
from ..models.global_field_list import GlobalFieldList
from ..server.server import Server


class GlobalFields:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GlobalFieldsWithRawResponse(client, server, auth)

    def get_all_global_fields(
        self, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GlobalFieldList:
        """Fetches all reusable global field definitions available in the stack. Global fields can be embedded in
        content type schemas to create consistent field structures across multiple content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of global fields defined in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_all_global_fields(api_key, access_token, request_options=request_options)
        )

    def get_single_global_field(
        self,
        global_field_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GlobalField:
        """Returns the schema and metadata for a specific global field identified by its UID.

        Args:
            global_field_uid: The unique identifier (UID) of the global field.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested global field object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_single_global_field(
                global_field_uid, api_key, access_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> GlobalFieldsWithRawResponse:
        return self._with_raw_response


class AsyncGlobalFields:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGlobalFieldsWithRawResponse(client, server, auth)

    async def get_all_global_fields(
        self, api_key: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GlobalFieldList:
        """Fetches all reusable global field definitions available in the stack. Global fields can be embedded in
        content type schemas to create consistent field structures across multiple content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of global fields defined in the stack.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``ErrorContentstackAssetsApi |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_global_fields(api_key, access_token, request_options=request_options)
        )

    async def get_single_global_field(
        self,
        global_field_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GlobalField:
        """Returns the schema and metadata for a specific global field identified by its UID.

        Args:
            global_field_uid: The unique identifier (UID) of the global field.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested global field object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_single_global_field(
                global_field_uid, api_key, access_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGlobalFieldsWithRawResponse:
        return self._with_raw_response


class GlobalFieldsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_global_fields(
        self, api_key: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GlobalFieldList, GetAllGlobalFieldsErrorBody]:
        """Fetches all reusable global field definitions available in the stack. Global fields can be embedded in
        content type schemas to create consistent field structures across multiple content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/global_fields"),
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[GlobalFieldList],
            error_mapper=get_all_global_fields_error_mapper,
            request_options=request_options,
        )

    def get_single_global_field(
        self,
        global_field_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GlobalField, GetSingleGlobalFieldErrorBody]:
        """Returns the schema and metadata for a specific global field identified by its UID.

        Args:
            global_field_uid: The unique identifier (UID) of the global field.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/global_fields/{global_field_uid}"),
            path_params=[param[str]("global_field_uid", global_field_uid)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[GlobalField],
            error_mapper=get_single_global_field_error_mapper,
            request_options=request_options,
        )


class AsyncGlobalFieldsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_global_fields(
        self, api_key: str, access_token: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GlobalFieldList, GetAllGlobalFieldsErrorBody]:
        """Fetches all reusable global field definitions available in the stack. Global fields can be embedded in
        content type schemas to create consistent field structures across multiple content types.

        Args:
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/global_fields"),
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[GlobalFieldList],
            error_mapper=get_all_global_fields_error_mapper,
            request_options=request_options,
        )

    async def get_single_global_field(
        self,
        global_field_uid: str,
        api_key: str,
        access_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GlobalField, GetSingleGlobalFieldErrorBody]:
        """Returns the schema and metadata for a specific global field identified by its UID.

        Args:
            global_field_uid: The unique identifier (UID) of the global field.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/global_fields/{global_field_uid}"),
            path_params=[param[str]("global_field_uid", global_field_uid)],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[GlobalField],
            error_mapper=get_single_global_field_error_mapper,
            request_options=request_options,
        )
