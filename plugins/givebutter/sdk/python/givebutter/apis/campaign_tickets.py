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
from ..errors.campaigns_items_tickets_index_error import (
    CampaignsItemsTicketsIndexErrorBody,
    campaigns_items_tickets_index_error_mapper,
)
from ..errors.campaigns_items_tickets_show_error import (
    CampaignsItemsTicketsShowErrorBody,
    campaigns_items_tickets_show_error_mapper,
)
from ..errors.campaigns_items_tickets_store_error import (
    CampaignsItemsTicketsStoreErrorBody,
    campaigns_items_tickets_store_error_mapper,
)
from ..models.campaign_item_ticket_resource import CampaignItemTicketResource
from ..models.store_campaign_item_ticket_request import (
    StoreCampaignItemTicketRequest,
    StoreCampaignItemTicketRequestDict,
)
from ..models.v1_campaigns_items_tickets_response import V1CampaignsItemsTicketsResponse
from ..server.server import Server


class CampaignTickets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignTicketsWithRawResponse(client, server, auth)

    def campaigns_items_tickets_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CampaignsItemsTicketsResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignItemTicketResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_items_tickets_index(campaign, request_options=request_options))

    def campaigns_items_tickets_show(
        self, campaign: int, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CampaignItemTicketResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            ticket_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignItemTicketResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_items_tickets_show(campaign, ticket_id, request_options=request_options)
        )

    def campaigns_items_tickets_store(
        self,
        campaign: int,
        body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignItemTicketResource:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignItemTicketResource``

        Raises:
            ApiError: Validation error Not found ``error`` is ``ModelNotFoundException1 | ValidationException1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_items_tickets_store(campaign, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CampaignTicketsWithRawResponse:
        return self._with_raw_response


class AsyncCampaignTickets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignTicketsWithRawResponse(client, server, auth)

    async def campaigns_items_tickets_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CampaignsItemsTicketsResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignItemTicketResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_items_tickets_index(campaign, request_options=request_options)
        )

    async def campaigns_items_tickets_show(
        self, campaign: int, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CampaignItemTicketResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            ticket_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignItemTicketResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_items_tickets_show(
                campaign, ticket_id, request_options=request_options
            ),
        )

    async def campaigns_items_tickets_store(
        self,
        campaign: int,
        body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignItemTicketResource:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignItemTicketResource``

        Raises:
            ApiError: Validation error Not found ``error`` is ``ModelNotFoundException1 | ValidationException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_items_tickets_store(campaign, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCampaignTicketsWithRawResponse:
        return self._with_raw_response


class CampaignTicketsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def campaigns_items_tickets_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsItemsTicketsResponse, CampaignsItemsTicketsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/items/tickets"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1CampaignsItemsTicketsResponse],
            error_mapper=campaigns_items_tickets_index_error_mapper,
            request_options=request_options,
        )

    def campaigns_items_tickets_show(
        self, campaign: int, ticket_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            ticket_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/items/tickets/{ticketId}"),
            path_params=[param[int]("campaign", campaign), param[int]("ticketId", ticket_id)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignItemTicketResource],
            error_mapper=campaigns_items_tickets_show_error_mapper,
            request_options=request_options,
        )

    def campaigns_items_tickets_store(
        self,
        campaign: int,
        body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/campaigns/{campaign}/items/tickets"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignItemTicketResource],
            error_mapper=campaigns_items_tickets_store_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignTicketsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def campaigns_items_tickets_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsItemsTicketsResponse, CampaignsItemsTicketsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/items/tickets"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1CampaignsItemsTicketsResponse],
            error_mapper=campaigns_items_tickets_index_error_mapper,
            request_options=request_options,
        )

    async def campaigns_items_tickets_show(
        self, campaign: int, ticket_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            ticket_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/items/tickets/{ticketId}"),
            path_params=[param[int]("campaign", campaign), param[int]("ticketId", ticket_id)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignItemTicketResource],
            error_mapper=campaigns_items_tickets_show_error_mapper,
            request_options=request_options,
        )

    async def campaigns_items_tickets_store(
        self,
        campaign: int,
        body: StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignItemTicketResource, CampaignsItemsTicketsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/campaigns/{campaign}/items/tickets"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreCampaignItemTicketRequest | StoreCampaignItemTicketRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignItemTicketResource],
            error_mapper=campaigns_items_tickets_store_error_mapper,
            request_options=request_options,
        )
