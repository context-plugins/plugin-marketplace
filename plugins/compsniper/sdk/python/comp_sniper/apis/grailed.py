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
from ..errors.get_v1_grailed_listings_error import GetV1GrailedListingsErrorBody, get_v1_grailed_listings_error_mapper
from ..errors.get_v1_grailed_sold_error import GetV1GrailedSoldErrorBody, get_v1_grailed_sold_error_mapper
from ..models.enums.condition import Condition, ConditionOrStr
from ..models.enums.department import Department, DepartmentOrStr
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_by1 import SortBy1, SortBy1OrStr
from ..models.enums.x_credit_source import XCreditSourceOrStr
from ..models.v1_grailed_listings_response import V1GrailedListingsResponse
from ..models.v1_grailed_sold_response import V1GrailedSoldResponse
from ..server.server import Server


class Grailed:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GrailedWithRawResponse(client, server, auth)

    def get_v1_grailed_listings(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortBy1OrStr | None = SortBy1.DEFAULT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GrailedListingsResponse:
        """Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Active listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1GrailedListings400Error1 |
                V1GrailedListings401Error1 | V1GrailedListings429Error1 | V1GrailedListings502Error1 |
                V1GrailedListings503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_grailed_listings(
                keyword,
                department=department,
                condition=condition,
                min_price=min_price,
                max_price=max_price,
                count=count,
                page=page,
                sort_by=sort_by,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    def get_v1_grailed_sold(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortByOrStr | None = SortBy.RECENT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GrailedSoldResponse:
        """Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold
        from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One
        successful call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1GrailedSold400Error1 | V1GrailedSold401Error1 |
                V1GrailedSold429Error1 | V1GrailedSold502Error1 | V1GrailedSold503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_grailed_sold(
                keyword,
                department=department,
                condition=condition,
                min_price=min_price,
                max_price=max_price,
                count=count,
                page=page,
                sort_by=sort_by,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> GrailedWithRawResponse:
        return self._with_raw_response


class AsyncGrailed:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGrailedWithRawResponse(client, server, auth)

    async def get_v1_grailed_listings(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortBy1OrStr | None = SortBy1.DEFAULT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GrailedListingsResponse:
        """Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Active listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1GrailedListings400Error1 |
                V1GrailedListings401Error1 | V1GrailedListings429Error1 | V1GrailedListings502Error1 |
                V1GrailedListings503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_grailed_listings(
                keyword,
                department=department,
                condition=condition,
                min_price=min_price,
                max_price=max_price,
                count=count,
                page=page,
                sort_by=sort_by,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    async def get_v1_grailed_sold(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortByOrStr | None = SortBy.RECENT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GrailedSoldResponse:
        """Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold
        from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One
        successful call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sold listings

        Raises:
            ApiError: Error Error Error Error Error ``error`` is ``V1GrailedSold400Error1 | V1GrailedSold401Error1 |
                V1GrailedSold429Error1 | V1GrailedSold502Error1 | V1GrailedSold503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_grailed_sold(
                keyword,
                department=department,
                condition=condition,
                min_price=min_price,
                max_price=max_price,
                count=count,
                page=page,
                sort_by=sort_by,
                x_credit_source=x_credit_source,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGrailedWithRawResponse:
        return self._with_raw_response


class GrailedWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_v1_grailed_listings(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortBy1OrStr | None = SortBy1.DEFAULT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GrailedListingsResponse, GetV1GrailedListingsErrorBody]:
        """Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/grailed/listings"),
            query_params=[
                param[str]("keyword", keyword),
                param[DepartmentOrStr | None]("department", department),
                param[ConditionOrStr | None]("condition", condition),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[SortBy1OrStr | None]("sortBy", sort_by),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1GrailedListingsResponse],
            error_mapper=get_v1_grailed_listings_error_mapper,
            request_options=request_options,
        )

    def get_v1_grailed_sold(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortByOrStr | None = SortBy.RECENT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GrailedSoldResponse, GetV1GrailedSoldErrorBody]:
        """Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold
        from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One
        successful call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/grailed/sold"),
            query_params=[
                param[str]("keyword", keyword),
                param[DepartmentOrStr | None]("department", department),
                param[ConditionOrStr | None]("condition", condition),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[SortByOrStr | None]("sortBy", sort_by),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1GrailedSoldResponse],
            error_mapper=get_v1_grailed_sold_error_mapper,
            request_options=request_options,
        )


class AsyncGrailedWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_v1_grailed_listings(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortBy1OrStr | None = SortBy1.DEFAULT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GrailedListingsResponse, GetV1GrailedListingsErrorBody]:
        """Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful
        call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/grailed/listings"),
            query_params=[
                param[str]("keyword", keyword),
                param[DepartmentOrStr | None]("department", department),
                param[ConditionOrStr | None]("condition", condition),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[SortBy1OrStr | None]("sortBy", sort_by),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1GrailedListingsResponse],
            error_mapper=get_v1_grailed_listings_error_mapper,
            request_options=request_options,
        )

    async def get_v1_grailed_sold(
        self,
        keyword: str,
        *,
        department: DepartmentOrStr | None = Department.ANY,
        condition: ConditionOrStr | None = Condition.ANY,
        min_price: float | None = None,
        max_price: float | None = None,
        count: int | None = 40,
        page: int | None = 1,
        sort_by: SortByOrStr | None = SortBy.RECENT,
        x_credit_source: XCreditSourceOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GrailedSoldResponse, GetV1GrailedSoldErrorBody]:
        """Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold
        from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One
        successful call uses one request.

        Args:
            keyword: Value sent with the request.
            department: Value sent with the request.
            condition: Value sent with the request.
            min_price: Value sent with the request.
            max_price: Value sent with the request.
            count: Value sent with the request.
            page: Value sent with the request.
            sort_by: Value sent with the request.
            x_credit_source: Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
                credits to spend a purchased credit directly. Failed searches are not charged.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/grailed/sold"),
            query_params=[
                param[str]("keyword", keyword),
                param[DepartmentOrStr | None]("department", department),
                param[ConditionOrStr | None]("condition", condition),
                param[float | None]("minPrice", min_price),
                param[float | None]("maxPrice", max_price),
                param[int | None]("count", count),
                param[int | None]("page", page),
                param[SortByOrStr | None]("sortBy", sort_by),
            ],
            headers=[param[XCreditSourceOrStr | None]("X-Credit-Source", x_credit_source)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1GrailedSoldResponse],
            error_mapper=get_v1_grailed_sold_error_mapper,
            request_options=request_options,
        )
