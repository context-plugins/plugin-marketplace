from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_customer_portal_error import CreateCustomerPortalErrorBody, create_customer_portal_error_mapper
from ..models.create_customer_portal_request import CreateCustomerPortalRequest, CreateCustomerPortalRequestDict
from ..models.customer_portal import CustomerPortal
from ..server.server import Server


class CustomerPortals:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CustomerPortalsWithRawResponse(client, server)

    def create_customer_portal(
        self,
        authorization: str,
        *,
        body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomerPortal:
        """Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_customer_portal(authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CustomerPortalsWithRawResponse:
        return self._with_raw_response


class AsyncCustomerPortals:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCustomerPortalsWithRawResponse(client, server)

    async def create_customer_portal(
        self,
        authorization: str,
        *,
        body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomerPortal:
        """Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_customer_portal(
                authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomerPortalsWithRawResponse:
        return self._with_raw_response


class CustomerPortalsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_customer_portal(
        self,
        authorization: str,
        *,
        body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerPortal, CreateCustomerPortalErrorBody]:
        """Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-portals/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None](body),
            decoder=json_decoder[CustomerPortal],
            error_mapper=create_customer_portal_error_mapper,
            request_options=request_options,
        )


class AsyncCustomerPortalsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_customer_portal(
        self,
        authorization: str,
        *,
        body: CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomerPortal, CreateCustomerPortalErrorBody]:
        """Creates a portal session for the customer. Returns a short-lived URL to the customer portal.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/customer-portals/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCustomerPortalRequest | CreateCustomerPortalRequestDict | None](body),
            decoder=async_json_decoder[CustomerPortal],
            error_mapper=create_customer_portal_error_mapper,
            request_options=request_options,
        )
