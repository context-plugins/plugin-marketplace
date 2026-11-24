from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_subscriber_error import GetSubscriberErrorBody, get_subscriber_error_mapper
from ..errors.get_subscribers_error import GetSubscribersErrorBody, get_subscribers_error_mapper
from ..errors.update_subscriber_by_id_error import UpdateSubscriberByIdErrorBody, update_subscriber_by_id_error_mapper
from ..models.api_v2_subscribers_request import ApiV2SubscribersRequest, ApiV2SubscribersRequestDict
from ..server.server import Server


class Subscribers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SubscribersWithRawResponse(client, server, auth)

    def get_subscriber(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Get an individual subscriber for a shop.

        Args:
            id_: The ID for the subscriber you'd like to get.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.get_subscriber(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def get_subscribers(
        self,
        *,
        created_at_eq: RFC3339DateTime | None = None,
        created_at_gt: RFC3339DateTime | None = None,
        created_at_gte: RFC3339DateTime | None = None,
        created_at_lt: RFC3339DateTime | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        email_contains: str | None = None,
        email_eq: str | None = None,
        email_in: list[str] | None = None,
        page: int | None = None,
        phone_number_contains: str | None = None,
        phone_number_eq: str | None = None,
        phone_number_in: list[str] | None = None,
        shopify_customer_id_contains: str | None = None,
        shopify_customer_id_eq: str | None = None,
        shopify_customer_id_in: list[str] | None = None,
        sort: str | None = None,
        updated_at_eq: RFC3339DateTime | None = None,
        updated_at_gt: Date | None = None,
        updated_at_gte: RFC3339DateTime | None = None,
        updated_at_lt: RFC3339DateTime | None = None,
        updated_at_lte: RFC3339DateTime | None = None,
        ps_id_eq: int | None = None,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Get a list of subscribers for a shop.

        Args:
            created_at_eq: Created at is equal to
            created_at_gt: Created at is greater than
            created_at_gte: Created at is greater than or equal to
            created_at_lt: Created at is less than
            created_at_lte: Created at is less than or equal to
            email_contains: Email contains
            email_eq: Email is equal to
            email_in: Email is in
            page: Page number of results to start from
            phone_number_contains: Phone number contains
            phone_number_eq: Phone number is equal to
            phone_number_in: Phone number is in
            shopify_customer_id_contains: Shopify customer id contains
            shopify_customer_id_eq: Shopify customer id is equal to
            shopify_customer_id_in: Shopify customer id is in
            sort: Sorting Order. In ``{field}__asc`` or ``{field}__desc`` format. Valid fields: ``created_at``,
                ``updated_at``, ``phone_number``, ``shopify_customer_id``
            updated_at_eq: Updated at is equal to
            updated_at_gt: Updated at is greater than
            updated_at_gte: Updated at is greater than or equal to
            updated_at_lt: Updated at is less than
            updated_at_lte: Updated at is less than or equal to
            ps_id_eq: Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for
                subscribers on the front end and is used to uniquely identify a subscriber across sessions.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.get_subscribers(
                created_at_eq=created_at_eq,
                created_at_gt=created_at_gt,
                created_at_gte=created_at_gte,
                created_at_lt=created_at_lt,
                created_at_lte=created_at_lte,
                email_contains=email_contains,
                email_eq=email_eq,
                email_in=email_in,
                page=page,
                phone_number_contains=phone_number_contains,
                phone_number_eq=phone_number_eq,
                phone_number_in=phone_number_in,
                shopify_customer_id_contains=shopify_customer_id_contains,
                shopify_customer_id_eq=shopify_customer_id_eq,
                shopify_customer_id_in=shopify_customer_id_in,
                sort=sort,
                updated_at_eq=updated_at_eq,
                updated_at_gt=updated_at_gt,
                updated_at_gte=updated_at_gte,
                updated_at_lt=updated_at_lt,
                updated_at_lte=updated_at_lte,
                ps_id_eq=ps_id_eq,
                x_postscript_shop_token=x_postscript_shop_token,
                request_options=request_options,
            ),
        )

    def update_subscriber_by_id(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Updates data for a given subscriber.

        Args:
            id_: ID of the subscriber you'd like to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.update_subscriber_by_id(
                id_, x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SubscribersWithRawResponse:
        return self._with_raw_response


class AsyncSubscribers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSubscribersWithRawResponse(client, server, auth)

    async def get_subscriber(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Get an individual subscriber for a shop.

        Args:
            id_: The ID for the subscriber you'd like to get.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.get_subscriber(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def get_subscribers(
        self,
        *,
        created_at_eq: RFC3339DateTime | None = None,
        created_at_gt: RFC3339DateTime | None = None,
        created_at_gte: RFC3339DateTime | None = None,
        created_at_lt: RFC3339DateTime | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        email_contains: str | None = None,
        email_eq: str | None = None,
        email_in: list[str] | None = None,
        page: int | None = None,
        phone_number_contains: str | None = None,
        phone_number_eq: str | None = None,
        phone_number_in: list[str] | None = None,
        shopify_customer_id_contains: str | None = None,
        shopify_customer_id_eq: str | None = None,
        shopify_customer_id_in: list[str] | None = None,
        sort: str | None = None,
        updated_at_eq: RFC3339DateTime | None = None,
        updated_at_gt: Date | None = None,
        updated_at_gte: RFC3339DateTime | None = None,
        updated_at_lt: RFC3339DateTime | None = None,
        updated_at_lte: RFC3339DateTime | None = None,
        ps_id_eq: int | None = None,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Get a list of subscribers for a shop.

        Args:
            created_at_eq: Created at is equal to
            created_at_gt: Created at is greater than
            created_at_gte: Created at is greater than or equal to
            created_at_lt: Created at is less than
            created_at_lte: Created at is less than or equal to
            email_contains: Email contains
            email_eq: Email is equal to
            email_in: Email is in
            page: Page number of results to start from
            phone_number_contains: Phone number contains
            phone_number_eq: Phone number is equal to
            phone_number_in: Phone number is in
            shopify_customer_id_contains: Shopify customer id contains
            shopify_customer_id_eq: Shopify customer id is equal to
            shopify_customer_id_in: Shopify customer id is in
            sort: Sorting Order. In ``{field}__asc`` or ``{field}__desc`` format. Valid fields: ``created_at``,
                ``updated_at``, ``phone_number``, ``shopify_customer_id``
            updated_at_eq: Updated at is equal to
            updated_at_gt: Updated at is greater than
            updated_at_gte: Updated at is greater than or equal to
            updated_at_lt: Updated at is less than
            updated_at_lte: Updated at is less than or equal to
            ps_id_eq: Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for
                subscribers on the front end and is used to uniquely identify a subscriber across sessions.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.get_subscribers(
                created_at_eq=created_at_eq,
                created_at_gt=created_at_gt,
                created_at_gte=created_at_gte,
                created_at_lt=created_at_lt,
                created_at_lte=created_at_lte,
                email_contains=email_contains,
                email_eq=email_eq,
                email_in=email_in,
                page=page,
                phone_number_contains=phone_number_contains,
                phone_number_eq=phone_number_eq,
                phone_number_in=phone_number_in,
                shopify_customer_id_contains=shopify_customer_id_contains,
                shopify_customer_id_eq=shopify_customer_id_eq,
                shopify_customer_id_in=shopify_customer_id_in,
                sort=sort,
                updated_at_eq=updated_at_eq,
                updated_at_gt=updated_at_gt,
                updated_at_gte=updated_at_gte,
                updated_at_lt=updated_at_lt,
                updated_at_lte=updated_at_lte,
                ps_id_eq=ps_id_eq,
                x_postscript_shop_token=x_postscript_shop_token,
                request_options=request_options,
            ),
        )

    async def update_subscriber_by_id(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Updates data for a given subscriber.

        Args:
            id_: ID of the subscriber you'd like to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.update_subscriber_by_id(
                id_, x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSubscribersWithRawResponse:
        return self._with_raw_response


class SubscribersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_subscriber(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetSubscriberErrorBody]:
        """Get an individual subscriber for a shop.

        Args:
            id_: The ID for the subscriber you'd like to get.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/subscribers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=get_subscriber_error_mapper,
            request_options=request_options,
        )

    def get_subscribers(
        self,
        *,
        created_at_eq: RFC3339DateTime | None = None,
        created_at_gt: RFC3339DateTime | None = None,
        created_at_gte: RFC3339DateTime | None = None,
        created_at_lt: RFC3339DateTime | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        email_contains: str | None = None,
        email_eq: str | None = None,
        email_in: list[str] | None = None,
        page: int | None = None,
        phone_number_contains: str | None = None,
        phone_number_eq: str | None = None,
        phone_number_in: list[str] | None = None,
        shopify_customer_id_contains: str | None = None,
        shopify_customer_id_eq: str | None = None,
        shopify_customer_id_in: list[str] | None = None,
        sort: str | None = None,
        updated_at_eq: RFC3339DateTime | None = None,
        updated_at_gt: Date | None = None,
        updated_at_gte: RFC3339DateTime | None = None,
        updated_at_lt: RFC3339DateTime | None = None,
        updated_at_lte: RFC3339DateTime | None = None,
        ps_id_eq: int | None = None,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetSubscribersErrorBody]:
        """Get a list of subscribers for a shop.

        Args:
            created_at_eq: Created at is equal to
            created_at_gt: Created at is greater than
            created_at_gte: Created at is greater than or equal to
            created_at_lt: Created at is less than
            created_at_lte: Created at is less than or equal to
            email_contains: Email contains
            email_eq: Email is equal to
            email_in: Email is in
            page: Page number of results to start from
            phone_number_contains: Phone number contains
            phone_number_eq: Phone number is equal to
            phone_number_in: Phone number is in
            shopify_customer_id_contains: Shopify customer id contains
            shopify_customer_id_eq: Shopify customer id is equal to
            shopify_customer_id_in: Shopify customer id is in
            sort: Sorting Order. In ``{field}__asc`` or ``{field}__desc`` format. Valid fields: ``created_at``,
                ``updated_at``, ``phone_number``, ``shopify_customer_id``
            updated_at_eq: Updated at is equal to
            updated_at_gt: Updated at is greater than
            updated_at_gte: Updated at is greater than or equal to
            updated_at_lt: Updated at is less than
            updated_at_lte: Updated at is less than or equal to
            ps_id_eq: Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for
                subscribers on the front end and is used to uniquely identify a subscriber across sessions.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/subscribers"),
            query_params=[
                param[RFC3339DateTime | None]("created_at__eq", created_at_eq),
                param[RFC3339DateTime | None]("created_at__gt", created_at_gt),
                param[RFC3339DateTime | None]("created_at__gte", created_at_gte),
                param[RFC3339DateTime | None]("created_at__lt", created_at_lt),
                param[RFC3339DateTime | None]("created_at__lte", created_at_lte),
                param[str | None]("email__contains", email_contains),
                param[str | None]("email__eq", email_eq),
                param[list[str] | None]("email__in", email_in),
                param[int | None]("page", page),
                param[str | None]("phone_number__contains", phone_number_contains),
                param[str | None]("phone_number__eq", phone_number_eq),
                param[list[str] | None]("phone_number__in", phone_number_in),
                param[str | None]("shopify_customer_id__contains", shopify_customer_id_contains),
                param[str | None]("shopify_customer_id__eq", shopify_customer_id_eq),
                param[list[str] | None]("shopify_customer_id__in", shopify_customer_id_in),
                param[str | None]("sort", sort),
                param[RFC3339DateTime | None]("updated_at__eq", updated_at_eq),
                param[Date | None]("updated_at__gt", updated_at_gt),
                param[RFC3339DateTime | None]("updated_at__gte", updated_at_gte),
                param[RFC3339DateTime | None]("updated_at__lt", updated_at_lt),
                param[RFC3339DateTime | None]("updated_at__lte", updated_at_lte),
                param[int | None]("ps_id__eq", ps_id_eq),
            ],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=get_subscribers_error_mapper,
            request_options=request_options,
        )

    def update_subscriber_by_id(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateSubscriberByIdErrorBody]:
        """Updates data for a given subscriber.

        Args:
            id_: ID of the subscriber you'd like to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/subscribers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=update_subscriber_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncSubscribersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_subscriber(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetSubscriberErrorBody]:
        """Get an individual subscriber for a shop.

        Args:
            id_: The ID for the subscriber you'd like to get.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/subscribers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=get_subscriber_error_mapper,
            request_options=request_options,
        )

    async def get_subscribers(
        self,
        *,
        created_at_eq: RFC3339DateTime | None = None,
        created_at_gt: RFC3339DateTime | None = None,
        created_at_gte: RFC3339DateTime | None = None,
        created_at_lt: RFC3339DateTime | None = None,
        created_at_lte: RFC3339DateTime | None = None,
        email_contains: str | None = None,
        email_eq: str | None = None,
        email_in: list[str] | None = None,
        page: int | None = None,
        phone_number_contains: str | None = None,
        phone_number_eq: str | None = None,
        phone_number_in: list[str] | None = None,
        shopify_customer_id_contains: str | None = None,
        shopify_customer_id_eq: str | None = None,
        shopify_customer_id_in: list[str] | None = None,
        sort: str | None = None,
        updated_at_eq: RFC3339DateTime | None = None,
        updated_at_gt: Date | None = None,
        updated_at_gte: RFC3339DateTime | None = None,
        updated_at_lt: RFC3339DateTime | None = None,
        updated_at_lte: RFC3339DateTime | None = None,
        ps_id_eq: int | None = None,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetSubscribersErrorBody]:
        """Get a list of subscribers for a shop.

        Args:
            created_at_eq: Created at is equal to
            created_at_gt: Created at is greater than
            created_at_gte: Created at is greater than or equal to
            created_at_lt: Created at is less than
            created_at_lte: Created at is less than or equal to
            email_contains: Email contains
            email_eq: Email is equal to
            email_in: Email is in
            page: Page number of results to start from
            phone_number_contains: Phone number contains
            phone_number_eq: Phone number is equal to
            phone_number_in: Phone number is in
            shopify_customer_id_contains: Shopify customer id contains
            shopify_customer_id_eq: Shopify customer id is equal to
            shopify_customer_id_in: Shopify customer id is in
            sort: Sorting Order. In ``{field}__asc`` or ``{field}__desc`` format. Valid fields: ``created_at``,
                ``updated_at``, ``phone_number``, ``shopify_customer_id``
            updated_at_eq: Updated at is equal to
            updated_at_gt: Updated at is greater than
            updated_at_gte: Updated at is greater than or equal to
            updated_at_lt: Updated at is less than
            updated_at_lte: Updated at is less than or equal to
            ps_id_eq: Filters subscribers by their ps_id tracking ID. This ID is stored in the ps_id cookie for
                subscribers on the front end and is used to uniquely identify a subscriber across sessions.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/subscribers"),
            query_params=[
                param[RFC3339DateTime | None]("created_at__eq", created_at_eq),
                param[RFC3339DateTime | None]("created_at__gt", created_at_gt),
                param[RFC3339DateTime | None]("created_at__gte", created_at_gte),
                param[RFC3339DateTime | None]("created_at__lt", created_at_lt),
                param[RFC3339DateTime | None]("created_at__lte", created_at_lte),
                param[str | None]("email__contains", email_contains),
                param[str | None]("email__eq", email_eq),
                param[list[str] | None]("email__in", email_in),
                param[int | None]("page", page),
                param[str | None]("phone_number__contains", phone_number_contains),
                param[str | None]("phone_number__eq", phone_number_eq),
                param[list[str] | None]("phone_number__in", phone_number_in),
                param[str | None]("shopify_customer_id__contains", shopify_customer_id_contains),
                param[str | None]("shopify_customer_id__eq", shopify_customer_id_eq),
                param[list[str] | None]("shopify_customer_id__in", shopify_customer_id_in),
                param[str | None]("sort", sort),
                param[RFC3339DateTime | None]("updated_at__eq", updated_at_eq),
                param[Date | None]("updated_at__gt", updated_at_gt),
                param[RFC3339DateTime | None]("updated_at__gte", updated_at_gte),
                param[RFC3339DateTime | None]("updated_at__lt", updated_at_lt),
                param[RFC3339DateTime | None]("updated_at__lte", updated_at_lte),
                param[int | None]("ps_id__eq", ps_id_eq),
            ],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=get_subscribers_error_mapper,
            request_options=request_options,
        )

    async def update_subscriber_by_id(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateSubscriberByIdErrorBody]:
        """Updates data for a given subscriber.

        Args:
            id_: ID of the subscriber you'd like to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/subscribers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2SubscribersRequest | ApiV2SubscribersRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=update_subscriber_by_id_error_mapper,
            request_options=request_options,
        )
