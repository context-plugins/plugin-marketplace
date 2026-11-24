from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_v1_tcgplayer_listings_error import (
    GetV1TcgplayerListingsErrorBody,
    get_v1_tcgplayer_listings_error_mapper,
)
from ..errors.get_v1_tcgplayer_sold_error import GetV1TcgplayerSoldErrorBody, get_v1_tcgplayer_sold_error_mapper
from ..models.enums.history import History, HistoryOrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_tcgplayer_listings_response import V1TcgplayerListingsResponse
from ..models.v1_tcgplayer_sold_response import V1TcgplayerSoldResponse
from ..server.server import Server


class TcGplayer:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TcGplayerWithRawResponse(client, server, auth)

    def get_v1_tcgplayer_listings(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        page: int | None = 1,
        count: int | None = 25,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TcgplayerListingsResponse:
        """Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1TcgplayerListings400Error1 |
                V1TcgplayerListings401Error1 | V1TcgplayerListings429Error1 | V1TcgplayerListings502Error1 |
                V1TcgplayerListings503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_tcgplayer_listings(
                keyword=keyword,
                product_id=product_id,
                page=page,
                count=count,
                condition=condition,
                variant=variant,
                language=language,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    def get_v1_tcgplayer_sold(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        count: int | None = 100,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        history: HistoryOrStr | None = History.NONE,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        fresh: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TcgplayerSoldResponse:
        """Full TCGplayer completed-sale history for a product, with optional market price history. One successful call
        uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live
        fetch.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            history: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            fresh: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1TcgplayerSold400Error1 | V1TcgplayerSold401Error1 |
                V1TcgplayerSold429Error1 | V1TcgplayerSold502Error1 | V1TcgplayerSold503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_tcgplayer_sold(
                keyword=keyword,
                product_id=product_id,
                count=count,
                condition=condition,
                variant=variant,
                language=language,
                history=history,
                sold_after=sold_after,
                sold_before=sold_before,
                fresh=fresh,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TcGplayerWithRawResponse:
        return self._with_raw_response


class AsyncTcGplayer:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTcGplayerWithRawResponse(client, server, auth)

    async def get_v1_tcgplayer_listings(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        page: int | None = 1,
        count: int | None = 25,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TcgplayerListingsResponse:
        """Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1TcgplayerListings400Error1 |
                V1TcgplayerListings401Error1 | V1TcgplayerListings429Error1 | V1TcgplayerListings502Error1 |
                V1TcgplayerListings503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_tcgplayer_listings(
                keyword=keyword,
                product_id=product_id,
                page=page,
                count=count,
                condition=condition,
                variant=variant,
                language=language,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    async def get_v1_tcgplayer_sold(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        count: int | None = 100,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        history: HistoryOrStr | None = History.NONE,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        fresh: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TcgplayerSoldResponse:
        """Full TCGplayer completed-sale history for a product, with optional market price history. One successful call
        uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live
        fetch.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            history: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            fresh: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1TcgplayerSold400Error1 | V1TcgplayerSold401Error1 |
                V1TcgplayerSold429Error1 | V1TcgplayerSold502Error1 | V1TcgplayerSold503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_tcgplayer_sold(
                keyword=keyword,
                product_id=product_id,
                count=count,
                condition=condition,
                variant=variant,
                language=language,
                history=history,
                sold_after=sold_after,
                sold_before=sold_before,
                fresh=fresh,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTcGplayerWithRawResponse:
        return self._with_raw_response


class TcGplayerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_v1_tcgplayer_listings(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        page: int | None = 1,
        count: int | None = 25,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TcgplayerListingsResponse, GetV1TcgplayerListingsErrorBody]:
        """Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tcgplayer/listings"),
            query_params=[
                param[str | None]("keyword", keyword),
                param[int | None]("productId", product_id),
                param[int | None]("page", page),
                param[int | None]("count", count),
                param[str | None]("condition", condition),
                param[str | None]("variant", variant),
                param[str | None]("language", language),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1TcgplayerListingsResponse],
            error_mapper=get_v1_tcgplayer_listings_error_mapper,
            request_options=request_options,
        )

    def get_v1_tcgplayer_sold(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        count: int | None = 100,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        history: HistoryOrStr | None = History.NONE,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        fresh: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TcgplayerSoldResponse, GetV1TcgplayerSoldErrorBody]:
        """Full TCGplayer completed-sale history for a product, with optional market price history. One successful call
        uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live
        fetch.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            history: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            fresh: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tcgplayer/sold"),
            query_params=[
                param[str | None]("keyword", keyword),
                param[int | None]("productId", product_id),
                param[int | None]("count", count),
                param[str | None]("condition", condition),
                param[str | None]("variant", variant),
                param[str | None]("language", language),
                param[HistoryOrStr | None]("history", history),
                param[Date | None]("soldAfter", sold_after),
                param[Date | None]("soldBefore", sold_before),
                param[bool | None]("fresh", fresh),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1TcgplayerSoldResponse],
            error_mapper=get_v1_tcgplayer_sold_error_mapper,
            request_options=request_options,
        )


class AsyncTcGplayerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_v1_tcgplayer_listings(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        page: int | None = 1,
        count: int | None = 25,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TcgplayerListingsResponse, GetV1TcgplayerListingsErrorBody]:
        """Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            page: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tcgplayer/listings"),
            query_params=[
                param[str | None]("keyword", keyword),
                param[int | None]("productId", product_id),
                param[int | None]("page", page),
                param[int | None]("count", count),
                param[str | None]("condition", condition),
                param[str | None]("variant", variant),
                param[str | None]("language", language),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1TcgplayerListingsResponse],
            error_mapper=get_v1_tcgplayer_listings_error_mapper,
            request_options=request_options,
        )

    async def get_v1_tcgplayer_sold(
        self,
        *,
        keyword: str | None = None,
        product_id: int | None = None,
        count: int | None = 100,
        condition: str | None = None,
        variant: str | None = None,
        language: str | None = None,
        history: HistoryOrStr | None = History.NONE,
        sold_after: Date | None = None,
        sold_before: Date | None = None,
        fresh: bool | None = False,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TcgplayerSoldResponse, GetV1TcgplayerSoldErrorBody]:
        """Full TCGplayer completed-sale history for a product, with optional market price history. One successful call
        uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live
        fetch.

        Args:
            keyword: Value sent with the request.
            product_id: Value sent with the request.
            count: Value sent with the request.
            condition: Value sent with the request.
            variant: Value sent with the request.
            language: Value sent with the request.
            history: Value sent with the request.
            sold_after: Value sent with the request.
            sold_before: Value sent with the request.
            fresh: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tcgplayer/sold"),
            query_params=[
                param[str | None]("keyword", keyword),
                param[int | None]("productId", product_id),
                param[int | None]("count", count),
                param[str | None]("condition", condition),
                param[str | None]("variant", variant),
                param[str | None]("language", language),
                param[HistoryOrStr | None]("history", history),
                param[Date | None]("soldAfter", sold_after),
                param[Date | None]("soldBefore", sold_before),
                param[bool | None]("fresh", fresh),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1TcgplayerSoldResponse],
            error_mapper=get_v1_tcgplayer_sold_error_mapper,
            request_options=request_options,
        )
