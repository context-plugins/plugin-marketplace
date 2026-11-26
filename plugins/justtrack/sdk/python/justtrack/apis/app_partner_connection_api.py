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
from ..errors.get_management_v1_app_by_app_id_connection_by_partner_id_error import (
    GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody,
    get_management_v1_app_by_app_id_connection_by_partner_id_error_mapper,
)
from ..errors.put_management_v1_app_by_app_id_connection_by_partner_id_error import (
    PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody,
    put_management_v1_app_by_app_id_connection_by_partner_id_error_mapper,
)
from ..models.app_partner_connection import AppPartnerConnection, AppPartnerConnectionDict
from ..server.server import Server


class AppPartnerConnectionApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppPartnerConnectionApiWithRawResponse(client, server, auth)

    def get_management_v1_app_by_app_id_connection_by_partner_id(
        self, app_id: int, partner_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> AppPartnerConnection:
        """Get data for existing app partner connection.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Not found Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_management_v1_app_by_app_id_connection_by_partner_id(
                app_id, partner_id, request_options=request_options
            ),
        )

    def put_management_v1_app_by_app_id_connection_by_partner_id(
        self,
        app_id: int,
        partner_id: int,
        *,
        body: AppPartnerConnection | AppPartnerConnectionDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AppPartnerConnection:
        """Connect your app to a partner. If this app-partner connection already exists, update the connection details.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Internal server error. Please try
                again, or contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.put_management_v1_app_by_app_id_connection_by_partner_id(
                app_id, partner_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AppPartnerConnectionApiWithRawResponse:
        return self._with_raw_response


class AsyncAppPartnerConnectionApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppPartnerConnectionApiWithRawResponse(client, server, auth)

    async def get_management_v1_app_by_app_id_connection_by_partner_id(
        self, app_id: int, partner_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AppPartnerConnection:
        """Get data for existing app partner connection.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Not found Internal server error.
                Please try again, or contact us at support@justtrack.io if the error persists. ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_management_v1_app_by_app_id_connection_by_partner_id(
                app_id, partner_id, request_options=request_options
            ),
        )

    async def put_management_v1_app_by_app_id_connection_by_partner_id(
        self,
        app_id: int,
        partner_id: int,
        *,
        body: AppPartnerConnection | AppPartnerConnectionDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AppPartnerConnection:
        """Connect your app to a partner. If this app-partner connection already exists, update the connection details.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request input. Check the response for details. Unauthorized Internal server error. Please try
                again, or contact us at support@justtrack.io if the error persists. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.put_management_v1_app_by_app_id_connection_by_partner_id(
                app_id, partner_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAppPartnerConnectionApiWithRawResponse:
        return self._with_raw_response


class AppPartnerConnectionApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_management_v1_app_by_app_id_connection_by_partner_id(
        self, app_id: int, partner_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AppPartnerConnection, GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody]:
        """Get data for existing app partner connection.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/app/{appId}/connection/{partnerId}"
            ),
            path_params=[param[int]("appId", app_id), param[int]("partnerId", partner_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AppPartnerConnection],
            error_mapper=get_management_v1_app_by_app_id_connection_by_partner_id_error_mapper,
            request_options=request_options,
        )

    def put_management_v1_app_by_app_id_connection_by_partner_id(
        self,
        app_id: int,
        partner_id: int,
        *,
        body: AppPartnerConnection | AppPartnerConnectionDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AppPartnerConnection, PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody]:
        """Connect your app to a partner. If this app-partner connection already exists, update the connection details.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/app/{appId}/connection/{partnerId}"
            ),
            path_params=[param[int]("appId", app_id), param[int]("partnerId", partner_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppPartnerConnection | AppPartnerConnectionDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AppPartnerConnection],
            error_mapper=put_management_v1_app_by_app_id_connection_by_partner_id_error_mapper,
            request_options=request_options,
        )


class AsyncAppPartnerConnectionApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_management_v1_app_by_app_id_connection_by_partner_id(
        self, app_id: int, partner_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AppPartnerConnection, GetManagementV1AppByAppIdConnectionByPartnerIdErrorBody]:
        """Get data for existing app partner connection.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/app/{appId}/connection/{partnerId}"
            ),
            path_params=[param[int]("appId", app_id), param[int]("partnerId", partner_id)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AppPartnerConnection],
            error_mapper=get_management_v1_app_by_app_id_connection_by_partner_id_error_mapper,
            request_options=request_options,
        )

    async def put_management_v1_app_by_app_id_connection_by_partner_id(
        self,
        app_id: int,
        partner_id: int,
        *,
        body: AppPartnerConnection | AppPartnerConnectionDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AppPartnerConnection, PutManagementV1AppByAppIdConnectionByPartnerIdErrorBody]:
        """Connect your app to a partner. If this app-partner connection already exists, update the connection details.

        Args:
            app_id: justtrack's identifier for the app
            partner_id: justtrack's identifier for the advertising partner
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_management_app_partner_connection_api(
                "/management/v1/app/{appId}/connection/{partnerId}"
            ),
            path_params=[param[int]("appId", app_id), param[int]("partnerId", partner_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppPartnerConnection | AppPartnerConnectionDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AppPartnerConnection],
            error_mapper=put_management_v1_app_by_app_id_connection_by_partner_id_error_mapper,
            request_options=request_options,
        )
