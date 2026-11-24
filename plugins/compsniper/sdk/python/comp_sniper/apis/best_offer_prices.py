from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_best_offer_prices_error import GetBestOfferPricesErrorBody, get_best_offer_prices_error_mapper
from ..models.v1_best_offer_prices_response import V1BestOfferPricesResponse
from ..server.server import Server


class BestOfferPrices:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BestOfferPricesWithRawResponse(client, server, auth)

    def get_best_offer_prices(
        self, item_ids: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1BestOfferPricesResponse:
        """Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true
        searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

        Args:
            item_ids: 1 to 100 eBay item IDs, separated by commas.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One entry per item ID with acceptedOfferPrice (string or null) and acceptedOfferPriceStatus (found, pending,
            not_available or unknown).

        Raises:
            ApiError: itemIds missing or invalid. Missing or invalid API key. ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(self._with_raw_response.get_best_offer_prices(item_ids, request_options=request_options))

    @property
    def with_raw_response(self) -> BestOfferPricesWithRawResponse:
        return self._with_raw_response


class AsyncBestOfferPrices:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBestOfferPricesWithRawResponse(client, server, auth)

    async def get_best_offer_prices(
        self, item_ids: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BestOfferPricesResponse:
        """Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true
        searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

        Args:
            item_ids: 1 to 100 eBay item IDs, separated by commas.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One entry per item ID with acceptedOfferPrice (string or null) and acceptedOfferPriceStatus (found, pending,
            not_available or unknown).

        Raises:
            ApiError: itemIds missing or invalid. Missing or invalid API key. ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(await self._with_raw_response.get_best_offer_prices(item_ids, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBestOfferPricesWithRawResponse:
        return self._with_raw_response


class BestOfferPricesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_best_offer_prices(
        self, item_ids: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BestOfferPricesResponse, GetBestOfferPricesErrorBody]:
        """Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true
        searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

        Args:
            item_ids: 1 to 100 eBay item IDs, separated by commas.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/best-offer-prices"),
            query_params=[param[str]("itemIds", item_ids)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1BestOfferPricesResponse],
            error_mapper=get_best_offer_prices_error_mapper,
            request_options=request_options,
        )


class AsyncBestOfferPricesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_best_offer_prices(
        self, item_ids: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BestOfferPricesResponse, GetBestOfferPricesErrorBody]:
        """Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true
        searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.

        Args:
            item_ids: 1 to 100 eBay item IDs, separated by commas.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/best-offer-prices"),
            query_params=[param[str]("itemIds", item_ids)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1BestOfferPricesResponse],
            error_mapper=get_best_offer_prices_error_mapper,
            request_options=request_options,
        )
