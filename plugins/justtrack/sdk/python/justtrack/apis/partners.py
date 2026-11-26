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
from ..errors.post_management_v1_partners_error import (
    PostManagementV1PartnersErrorBody,
    post_management_v1_partners_error_mapper,
)
from ..models.list_partners_request import ListPartnersRequest, ListPartnersRequestDict
from ..models.list_partners_response import ListPartnersResponse
from ..server.server import Server


class Partners:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnersWithRawResponse(client, server, auth)

    def post_management_v1_partners(
        self,
        *,
        body: ListPartnersRequest | ListPartnersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListPartnersResponse:
        """Get a paginated list of partners available to your organization.

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
        return unwrap(self._with_raw_response.post_management_v1_partners(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> PartnersWithRawResponse:
        return self._with_raw_response


class AsyncPartners:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnersWithRawResponse(client, server, auth)

    async def post_management_v1_partners(
        self,
        *,
        body: ListPartnersRequest | ListPartnersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListPartnersResponse:
        """Get a paginated list of partners available to your organization.

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
        return unwrap(
            await self._with_raw_response.post_management_v1_partners(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPartnersWithRawResponse:
        return self._with_raw_response


class PartnersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_management_v1_partners(
        self,
        *,
        body: ListPartnersRequest | ListPartnersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPartnersResponse, PostManagementV1PartnersErrorBody]:
        """Get a paginated list of partners available to your organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/partners"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListPartnersRequest | ListPartnersRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ListPartnersResponse],
            error_mapper=post_management_v1_partners_error_mapper,
            request_options=request_options,
        )


class AsyncPartnersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_management_v1_partners(
        self,
        *,
        body: ListPartnersRequest | ListPartnersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListPartnersResponse, PostManagementV1PartnersErrorBody]:
        """Get a paginated list of partners available to your organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/partners"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListPartnersRequest | ListPartnersRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ListPartnersResponse],
            error_mapper=post_management_v1_partners_error_mapper,
            request_options=request_options,
        )
