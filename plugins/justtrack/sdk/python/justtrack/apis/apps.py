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
from ..errors.post_management_v1_app_error import PostManagementV1AppErrorBody, post_management_v1_app_error_mapper
from ..errors.post_management_v1_apps_error import PostManagementV1AppsErrorBody, post_management_v1_apps_error_mapper
from ..models.app_output import AppOutput
from ..models.create_app_request import CreateAppRequest, CreateAppRequestDict
from ..models.list_apps_request import ListAppsRequest, ListAppsRequestDict
from ..models.list_apps_response import ListAppsResponse
from ..server.server import Server


class Apps:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppsWithRawResponse(client, server, auth)

    def post_management_v1_app(
        self,
        *,
        body: CreateAppRequest | CreateAppRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AppOutput:
        """Create an app.

        :::info

        We validate the following constraints when creating an app:

        - The bundle ID must be unique to your organization, though multiple apps within your organization can have the
            same bundle ID if the platform is different.
        - A (bundle ID, platform) pair must be unique within your organization.
        - A (name, platform) pair must be unique within your organization.
        - The store ID must be unique across all organizations.

        :::

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Forbidden Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_management_v1_app(body=body, request_options=request_options))

    def post_management_v1_apps(
        self,
        *,
        body: ListAppsRequest | ListAppsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAppsResponse:
        """Get a paginated list of your organization's apps.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Internal server error. Please try
                again, or contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.post_management_v1_apps(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AppsWithRawResponse:
        return self._with_raw_response


class AsyncApps:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppsWithRawResponse(client, server, auth)

    async def post_management_v1_app(
        self,
        *,
        body: CreateAppRequest | CreateAppRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppOutput:
        """Create an app.

        :::info

        We validate the following constraints when creating an app:

        - The bundle ID must be unique to your organization, though multiple apps within your organization can have the
            same bundle ID if the platform is different.
        - A (bundle ID, platform) pair must be unique within your organization.
        - A (name, platform) pair must be unique within your organization.
        - The store ID must be unique across all organizations.

        :::

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Forbidden Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_management_v1_app(body=body, request_options=request_options))

    async def post_management_v1_apps(
        self,
        *,
        body: ListAppsRequest | ListAppsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAppsResponse:
        """Get a paginated list of your organization's apps.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Internal server error. Please try
                again, or contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.post_management_v1_apps(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAppsWithRawResponse:
        return self._with_raw_response


class AppsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_management_v1_app(
        self,
        *,
        body: CreateAppRequest | CreateAppRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AppOutput, PostManagementV1AppErrorBody]:
        """Create an app.

        :::info

        We validate the following constraints when creating an app:

        - The bundle ID must be unique to your organization, though multiple apps within your organization can have the
            same bundle ID if the platform is different.
        - A (bundle ID, platform) pair must be unique within your organization.
        - A (name, platform) pair must be unique within your organization.
        - The store ID must be unique across all organizations.

        :::

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/app"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAppRequest | CreateAppRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AppOutput],
            error_mapper=post_management_v1_app_error_mapper,
            request_options=request_options,
        )

    def post_management_v1_apps(
        self,
        *,
        body: ListAppsRequest | ListAppsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAppsResponse, PostManagementV1AppsErrorBody]:
        """Get a paginated list of your organization's apps.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/apps"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListAppsRequest | ListAppsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ListAppsResponse],
            error_mapper=post_management_v1_apps_error_mapper,
            request_options=request_options,
        )


class AsyncAppsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_management_v1_app(
        self,
        *,
        body: CreateAppRequest | CreateAppRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppOutput, PostManagementV1AppErrorBody]:
        """Create an app.

        :::info

        We validate the following constraints when creating an app:

        - The bundle ID must be unique to your organization, though multiple apps within your organization can have the
            same bundle ID if the platform is different.
        - A (bundle ID, platform) pair must be unique within your organization.
        - A (name, platform) pair must be unique within your organization.
        - The store ID must be unique across all organizations.

        :::

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/app"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAppRequest | CreateAppRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AppOutput],
            error_mapper=post_management_v1_app_error_mapper,
            request_options=request_options,
        )

    async def post_management_v1_apps(
        self,
        *,
        body: ListAppsRequest | ListAppsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAppsResponse, PostManagementV1AppsErrorBody]:
        """Get a paginated list of your organization's apps.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/apps"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListAppsRequest | ListAppsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ListAppsResponse],
            error_mapper=post_management_v1_apps_error_mapper,
            request_options=request_options,
        )
