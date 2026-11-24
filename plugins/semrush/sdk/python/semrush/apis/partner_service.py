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
from ..errors.post_apis_v4_app_center_v2_partner_viewer_status_error import (
    PostApisV4AppCenterV2PartnerViewerStatusErrorBody,
    post_apis_v4_app_center_v2_partner_viewer_status_error_mapper,
)
from ..models.viewer_status_request import ViewerStatusRequest, ViewerStatusRequestDict
from ..models.viewer_status_response import ViewerStatusResponse
from ..server.server import Server


class PartnerService:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnerServiceWithRawResponse(client, server, auth)

    def post_apis_v4_app_center_v2_partner_viewer_status(
        self,
        *,
        body: ViewerStatusRequest | ViewerStatusRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ViewerStatusResponse:
        """Retrieves user status, related to the app (purchases, subscriptions) Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            self._with_raw_response.post_apis_v4_app_center_v2_partner_viewer_status(
                body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PartnerServiceWithRawResponse:
        return self._with_raw_response


class AsyncPartnerService:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnerServiceWithRawResponse(client, server, auth)

    async def post_apis_v4_app_center_v2_partner_viewer_status(
        self,
        *,
        body: ViewerStatusRequest | ViewerStatusRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ViewerStatusResponse:
        """Retrieves user status, related to the app (purchases, subscriptions) Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.post_apis_v4_app_center_v2_partner_viewer_status(
                body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPartnerServiceWithRawResponse:
        return self._with_raw_response


class PartnerServiceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_apis_v4_app_center_v2_partner_viewer_status(
        self,
        *,
        body: ViewerStatusRequest | ViewerStatusRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ViewerStatusResponse, PostApisV4AppCenterV2PartnerViewerStatusErrorBody]:
        """Retrieves user status, related to the app (purchases, subscriptions) Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/apis/v4/app-center/v2/partner/viewer-status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ViewerStatusRequest | ViewerStatusRequestDict | None](body),
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=json_decoder[ViewerStatusResponse],
            error_mapper=post_apis_v4_app_center_v2_partner_viewer_status_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerServiceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_apis_v4_app_center_v2_partner_viewer_status(
        self,
        *,
        body: ViewerStatusRequest | ViewerStatusRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ViewerStatusResponse, PostApisV4AppCenterV2PartnerViewerStatusErrorBody]:
        """Retrieves user status, related to the app (purchases, subscriptions) Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/apis/v4/app-center/v2/partner/viewer-status"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ViewerStatusRequest | ViewerStatusRequestDict | None](body),
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=async_json_decoder[ViewerStatusResponse],
            error_mapper=post_apis_v4_app_center_v2_partner_viewer_status_error_mapper,
            request_options=request_options,
        )
