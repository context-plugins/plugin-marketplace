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
from ..errors.apply_for_ipo_error import ApplyForIpoErrorBody, apply_for_ipo_error_mapper
from ..errors.cancel_ipo_order_error import CancelIpoOrderErrorBody, cancel_ipo_order_error_mapper
from ..errors.get_ipo_details_error import GetIpoDetailsErrorBody, get_ipo_details_error_mapper
from ..errors.get_ipo_listing_error import GetIpoListingErrorBody, get_ipo_listing_error_mapper
from ..errors.get_ipo_order_by_id_error import GetIpoOrderByIdErrorBody, get_ipo_order_by_id_error_mapper
from ..errors.get_ipo_orders_error import GetIpoOrdersErrorBody, get_ipo_orders_error_mapper
from ..models.enums.issue_type3 import IssueType3OrStr
from ..models.enums.status9 import Status9OrStr
from ..models.ipo_apply_request import IpoApplyRequest, IpoApplyRequestDict
from ..models.ipo_apply_response import IpoApplyResponse
from ..models.ipo_cancel_response import IpoCancelResponse
from ..models.ipo_details_response import IpoDetailsResponse
from ..models.ipo_listing_response import IpoListingResponse
from ..models.ipo_order_detail_response import IpoOrderDetailResponse
from ..models.ipo_order_response import IpoOrderResponse
from ..server.server import Server


class Ipo:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IpoWithRawResponse(client, server, auth)

    def apply_for_ipo(
        self, body: IpoApplyRequest | IpoApplyRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> IpoApplyResponse:
        """Places an IPO application for the authenticated user.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid request payload. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests IPO not found. Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.apply_for_ipo(body, request_options=request_options))

    def cancel_ipo_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IpoCancelResponse:
        """Cancels/deletes an IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Order not found. Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.cancel_ipo_order(order_id, request_options=request_options))

    def get_ipo_details(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> IpoDetailsResponse:
        """Fetches detailed information for an IPO by its slug ID.

        Args:
            id_: IPO id (slug), as returned in ``id`` by the IPO listing API
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid IPO ID. Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_ipo_details(id_, request_options=request_options))

    def get_ipo_listing(
        self,
        *,
        status: Status9OrStr | None = None,
        issue_type: IssueType3OrStr | None = None,
        page_number: str | None = None,
        records: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IpoListingResponse:
        """Fetches list of IPOs filtered by status.

        Args:
            status: IPO status to filter by
            issue_type: Issue type filter. ``regular`` is a mainboard issue. Returns both when omitted
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid status or issue_type. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_ipo_listing(
                status=status,
                issue_type=issue_type,
                page_number=page_number,
                records=records,
                request_options=request_options,
            ),
        )

    def get_ipo_order_by_id(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> IpoOrderDetailResponse:
        """Fetches a single IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Order not found. Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_ipo_order_by_id(order_id, request_options=request_options))

    def get_ipo_orders(
        self,
        *,
        page_number: str | None = None,
        records: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IpoOrderResponse:
        """Fetches the authenticated user's IPO orders/applications.

        Args:
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid pagination parameters. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_ipo_orders(
                page_number=page_number, records=records, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> IpoWithRawResponse:
        return self._with_raw_response


class AsyncIpo:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIpoWithRawResponse(client, server, auth)

    async def apply_for_ipo(
        self, body: IpoApplyRequest | IpoApplyRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IpoApplyResponse:
        """Places an IPO application for the authenticated user.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid request payload. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests IPO not found. Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.apply_for_ipo(body, request_options=request_options))

    async def cancel_ipo_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IpoCancelResponse:
        """Cancels/deletes an IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Order not found. Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.cancel_ipo_order(order_id, request_options=request_options))

    async def get_ipo_details(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IpoDetailsResponse:
        """Fetches detailed information for an IPO by its slug ID.

        Args:
            id_: IPO id (slug), as returned in ``id`` by the IPO listing API
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid IPO ID. Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_ipo_details(id_, request_options=request_options))

    async def get_ipo_listing(
        self,
        *,
        status: Status9OrStr | None = None,
        issue_type: IssueType3OrStr | None = None,
        page_number: str | None = None,
        records: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IpoListingResponse:
        """Fetches list of IPOs filtered by status.

        Args:
            status: IPO status to filter by
            issue_type: Issue type filter. ``regular`` is a mainboard issue. Returns both when omitted
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid status or issue_type. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_ipo_listing(
                status=status,
                issue_type=issue_type,
                page_number=page_number,
                records=records,
                request_options=request_options,
            ),
        )

    async def get_ipo_order_by_id(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IpoOrderDetailResponse:
        """Fetches a single IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Order not found. Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_ipo_order_by_id(order_id, request_options=request_options))

    async def get_ipo_orders(
        self,
        *,
        page_number: str | None = None,
        records: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IpoOrderResponse:
        """Fetches the authenticated user's IPO orders/applications.

        Args:
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Invalid pagination parameters. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_ipo_orders(
                page_number=page_number, records=records, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIpoWithRawResponse:
        return self._with_raw_response


class IpoWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apply_for_ipo(
        self, body: IpoApplyRequest | IpoApplyRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IpoApplyResponse, ApplyForIpoErrorBody]:
        """Places an IPO application for the authenticated user.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/ipos/orders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IpoApplyRequest | IpoApplyRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IpoApplyResponse],
            error_mapper=apply_for_ipo_error_mapper,
            request_options=request_options,
        )

    def cancel_ipo_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IpoCancelResponse, CancelIpoOrderErrorBody]:
        """Cancels/deletes an IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/ipos/orders/{order_id}"),
            path_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IpoCancelResponse],
            error_mapper=cancel_ipo_order_error_mapper,
            request_options=request_options,
        )

    def get_ipo_details(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IpoDetailsResponse, GetIpoDetailsErrorBody]:
        """Fetches detailed information for an IPO by its slug ID.

        Args:
            id_: IPO id (slug), as returned in ``id`` by the IPO listing API
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IpoDetailsResponse],
            error_mapper=get_ipo_details_error_mapper,
            request_options=request_options,
        )

    def get_ipo_listing(
        self,
        *,
        status: Status9OrStr | None = None,
        issue_type: IssueType3OrStr | None = None,
        page_number: str | None = None,
        records: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IpoListingResponse, GetIpoListingErrorBody]:
        """Fetches list of IPOs filtered by status.

        Args:
            status: IPO status to filter by
            issue_type: Issue type filter. ``regular`` is a mainboard issue. Returns both when omitted
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos"),
            query_params=[
                param[Status9OrStr | None]("status", status),
                param[IssueType3OrStr | None]("issue_type", issue_type),
                param[str | None]("page_number", page_number),
                param[str | None]("records", records),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IpoListingResponse],
            error_mapper=get_ipo_listing_error_mapper,
            request_options=request_options,
        )

    def get_ipo_order_by_id(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IpoOrderDetailResponse, GetIpoOrderByIdErrorBody]:
        """Fetches a single IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos/orders/{order_id}"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IpoOrderDetailResponse],
            error_mapper=get_ipo_order_by_id_error_mapper,
            request_options=request_options,
        )

    def get_ipo_orders(
        self,
        *,
        page_number: str | None = None,
        records: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IpoOrderResponse, GetIpoOrdersErrorBody]:
        """Fetches the authenticated user's IPO orders/applications.

        Args:
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos/orders"),
            query_params=[param[str | None]("page_number", page_number), param[str | None]("records", records)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IpoOrderResponse],
            error_mapper=get_ipo_orders_error_mapper,
            request_options=request_options,
        )


class AsyncIpoWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apply_for_ipo(
        self, body: IpoApplyRequest | IpoApplyRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IpoApplyResponse, ApplyForIpoErrorBody]:
        """Places an IPO application for the authenticated user.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/ipos/orders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IpoApplyRequest | IpoApplyRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IpoApplyResponse],
            error_mapper=apply_for_ipo_error_mapper,
            request_options=request_options,
        )

    async def cancel_ipo_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IpoCancelResponse, CancelIpoOrderErrorBody]:
        """Cancels/deletes an IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/ipos/orders/{order_id}"),
            path_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IpoCancelResponse],
            error_mapper=cancel_ipo_order_error_mapper,
            request_options=request_options,
        )

    async def get_ipo_details(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IpoDetailsResponse, GetIpoDetailsErrorBody]:
        """Fetches detailed information for an IPO by its slug ID.

        Args:
            id_: IPO id (slug), as returned in ``id`` by the IPO listing API
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IpoDetailsResponse],
            error_mapper=get_ipo_details_error_mapper,
            request_options=request_options,
        )

    async def get_ipo_listing(
        self,
        *,
        status: Status9OrStr | None = None,
        issue_type: IssueType3OrStr | None = None,
        page_number: str | None = None,
        records: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IpoListingResponse, GetIpoListingErrorBody]:
        """Fetches list of IPOs filtered by status.

        Args:
            status: IPO status to filter by
            issue_type: Issue type filter. ``regular`` is a mainboard issue. Returns both when omitted
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos"),
            query_params=[
                param[Status9OrStr | None]("status", status),
                param[IssueType3OrStr | None]("issue_type", issue_type),
                param[str | None]("page_number", page_number),
                param[str | None]("records", records),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IpoListingResponse],
            error_mapper=get_ipo_listing_error_mapper,
            request_options=request_options,
        )

    async def get_ipo_order_by_id(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IpoOrderDetailResponse, GetIpoOrderByIdErrorBody]:
        """Fetches a single IPO order of the authenticated user by order id.

        Args:
            order_id: IPO application id, as returned in ``order_id`` by the apply and orders APIs
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos/orders/{order_id}"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IpoOrderDetailResponse],
            error_mapper=get_ipo_order_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_ipo_orders(
        self,
        *,
        page_number: str | None = None,
        records: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IpoOrderResponse, GetIpoOrdersErrorBody]:
        """Fetches the authenticated user's IPO orders/applications.

        Args:
            page_number: Page number, starting at 1
            records: Number of records per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/ipos/orders"),
            query_params=[param[str | None]("page_number", page_number), param[str | None]("records", records)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IpoOrderResponse],
            error_mapper=get_ipo_orders_error_mapper,
            request_options=request_options,
        )
