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
from ..errors.get_page_error import GetPageErrorBody, get_page_error_mapper
from ..errors.subscribe_page_app_error import SubscribePageAppErrorBody, subscribe_page_app_error_mapper
from ..models.page import Page
from ..models.subscribed_apps_request import SubscribedAppsRequest, SubscribedAppsRequestDict
from ..models.success_response_facebook_business_manager_facebook_pages_comments_api import (
    SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
)
from ..server.server import Server


class Pages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PagesWithRawResponse(client, server, auth)

    def get_page(
        self, page_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Page:
        """Retrieves information about a Facebook Page including name, category, description, fan count, and other
        metadata.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved page details

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_page(page_id, fields=fields, request_options=request_options))

    def subscribe_page_app(
        self,
        page_id: str,
        body: SubscribedAppsRequest | SubscribedAppsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the
        Page.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App subscribed to page successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.subscribe_page_app(page_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PagesWithRawResponse:
        return self._with_raw_response


class AsyncPages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPagesWithRawResponse(client, server, auth)

    async def get_page(
        self, page_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Page:
        """Retrieves information about a Facebook Page including name, category, description, fan count, and other
        metadata.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved page details

        Raises:
            ApiError: Invalid or expired access token or insufficient permissions The requested resource was not found
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_page(page_id, fields=fields, request_options=request_options))

    async def subscribe_page_app(
        self,
        page_id: str,
        body: SubscribedAppsRequest | SubscribedAppsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi:
        """Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the
        Page.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App subscribed to page successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.subscribe_page_app(page_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPagesWithRawResponse:
        return self._with_raw_response


class PagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_page(
        self, page_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Page, GetPageErrorBody]:
        """Retrieves information about a Facebook Page including name, category, description, fan count, and other
        metadata.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{page_id}"),
            path_params=[param[str]("page_id", page_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Page],
            error_mapper=get_page_error_mapper,
            request_options=request_options,
        )

    def subscribe_page_app(
        self,
        page_id: str,
        body: SubscribedAppsRequest | SubscribedAppsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, SubscribePageAppErrorBody]:
        """Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the
        Page.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/subscribed_apps"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscribedAppsRequest | SubscribedAppsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=subscribe_page_app_error_mapper,
            request_options=request_options,
        )


class AsyncPagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_page(
        self, page_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Page, GetPageErrorBody]:
        """Retrieves information about a Facebook Page including name, category, description, fan count, and other
        metadata.

        Args:
            page_id: The ID of the Facebook Page
            fields: Comma-separated list of fields to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{page_id}"),
            path_params=[param[str]("page_id", page_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Page],
            error_mapper=get_page_error_mapper,
            request_options=request_options,
        )

    async def subscribe_page_app(
        self,
        page_id: str,
        body: SubscribedAppsRequest | SubscribedAppsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, SubscribePageAppErrorBody]:
        """Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the
        Page.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/subscribed_apps"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubscribedAppsRequest | SubscribedAppsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi],
            error_mapper=subscribe_page_app_error_mapper,
            request_options=request_options,
        )
