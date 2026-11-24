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
from ..errors.get_v1_depop_listings_error import GetV1DepopListingsErrorBody, get_v1_depop_listings_error_mapper
from ..models.enums.country import Country, CountryOrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_depop_listings_response import V1DepopListingsResponse
from ..server.server import Server


class Depop:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DepopWithRawResponse(client, server, auth)

    def get_v1_depop_listings(
        self,
        keyword: str,
        *,
        country: CountryOrStr | None = Country.US,
        count: int | None = 24,
        cursor: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1DepopListingsResponse:
        """Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a
        discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one
        request.

        Args:
            keyword: Value sent with the request.
            country: Value sent with the request.
            count: Value sent with the request.
            cursor: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Active listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1DepopListings400Error1 | V1DepopListings401Error1 |
                V1DepopListings429Error1 | V1DepopListings502Error1 | V1DepopListings503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_depop_listings(
                keyword,
                country=country,
                count=count,
                cursor=cursor,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> DepopWithRawResponse:
        return self._with_raw_response


class AsyncDepop:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDepopWithRawResponse(client, server, auth)

    async def get_v1_depop_listings(
        self,
        keyword: str,
        *,
        country: CountryOrStr | None = Country.US,
        count: int | None = 24,
        cursor: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DepopListingsResponse:
        """Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a
        discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one
        request.

        Args:
            keyword: Value sent with the request.
            country: Value sent with the request.
            count: Value sent with the request.
            cursor: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Active listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1DepopListings400Error1 | V1DepopListings401Error1 |
                V1DepopListings429Error1 | V1DepopListings502Error1 | V1DepopListings503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_depop_listings(
                keyword,
                country=country,
                count=count,
                cursor=cursor,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDepopWithRawResponse:
        return self._with_raw_response


class DepopWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_v1_depop_listings(
        self,
        keyword: str,
        *,
        country: CountryOrStr | None = Country.US,
        count: int | None = 24,
        cursor: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DepopListingsResponse, GetV1DepopListingsErrorBody]:
        """Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a
        discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one
        request.

        Args:
            keyword: Value sent with the request.
            country: Value sent with the request.
            count: Value sent with the request.
            cursor: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/depop/listings"),
            query_params=[
                param[str]("keyword", keyword),
                param[CountryOrStr | None]("country", country),
                param[int | None]("count", count),
                param[str | None]("cursor", cursor),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1DepopListingsResponse],
            error_mapper=get_v1_depop_listings_error_mapper,
            request_options=request_options,
        )


class AsyncDepopWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_v1_depop_listings(
        self,
        keyword: str,
        *,
        country: CountryOrStr | None = Country.US,
        count: int | None = 24,
        cursor: str | None = None,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DepopListingsResponse, GetV1DepopListingsErrorBody]:
        """Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a
        discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one
        request.

        Args:
            keyword: Value sent with the request.
            country: Value sent with the request.
            count: Value sent with the request.
            cursor: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/depop/listings"),
            query_params=[
                param[str]("keyword", keyword),
                param[CountryOrStr | None]("country", country),
                param[int | None]("count", count),
                param[str | None]("cursor", cursor),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1DepopListingsResponse],
            error_mapper=get_v1_depop_listings_error_mapper,
            request_options=request_options,
        )
