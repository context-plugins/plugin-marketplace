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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_apis_v4_hermes_v0_event_by_id_error import (
    GetApisV4HermesV0EventByIdErrorBody,
    get_apis_v4_hermes_v0_event_by_id_error_mapper,
)
from ..errors.get_apis_v4_hermes_v0_subscriptions_error import (
    GetApisV4HermesV0SubscriptionsErrorBody,
    get_apis_v4_hermes_v0_subscriptions_error_mapper,
)
from ..errors.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error import (
    GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody,
    get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error_mapper,
)
from ..errors.post_apis_v4_hermes_v0_event_error import (
    PostApisV4HermesV0EventErrorBody,
    post_apis_v4_hermes_v0_event_error_mapper,
)
from ..models.app_subscriptions_response import AppSubscriptionsResponse
from ..models.app_user_subscription_status_response import AppUserSubscriptionStatusResponse
from ..models.create_event_request import CreateEventRequest, CreateEventRequestDict
from ..models.event_response import EventResponse
from ..server.server import Server


class HermesPartnerApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HermesPartnerApiWithRawResponse(client, server, auth)

    def get_apis_v4_hermes_v0_event_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventResponse:
        """Documentation

        Args:
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.get_apis_v4_hermes_v0_event_by_id(id_, request_options=request_options))

    def get_apis_v4_hermes_v0_subscriptions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AppSubscriptionsResponse:
        """List all application's registered subscriptions Documentation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.get_apis_v4_hermes_v0_subscriptions(request_options=request_options))

    def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
        self, user_id: int, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> AppUserSubscriptionStatusResponse:
        """Documentation

        Args:
            user_id: User id
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            self._with_raw_response.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
                user_id, id_, request_options=request_options
            ),
        )

    def post_apis_v4_hermes_v0_event(
        self,
        *,
        body: CreateEventRequest | CreateEventRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.post_apis_v4_hermes_v0_event(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> HermesPartnerApiWithRawResponse:
        return self._with_raw_response


class AsyncHermesPartnerApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHermesPartnerApiWithRawResponse(client, server, auth)

    async def get_apis_v4_hermes_v0_event_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EventResponse:
        """Documentation

        Args:
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apis_v4_hermes_v0_event_by_id(id_, request_options=request_options)
        )

    async def get_apis_v4_hermes_v0_subscriptions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AppSubscriptionsResponse:
        """List all application's registered subscriptions Documentation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apis_v4_hermes_v0_subscriptions(request_options=request_options)
        )

    async def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
        self, user_id: int, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AppUserSubscriptionStatusResponse:
        """Documentation

        Args:
            user_id: User id
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
                user_id, id_, request_options=request_options
            ),
        )

    async def post_apis_v4_hermes_v0_event(
        self,
        *,
        body: CreateEventRequest | CreateEventRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request. Something wrong with the request or JWT Unauthorized. Incorrect JWT fields or
                signature ``error`` is ``str | RawError``."""
        return unwrap(
            await self._with_raw_response.post_apis_v4_hermes_v0_event(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncHermesPartnerApiWithRawResponse:
        return self._with_raw_response


class HermesPartnerApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_apis_v4_hermes_v0_event_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventResponse, GetApisV4HermesV0EventByIdErrorBody]:
        """Documentation

        Args:
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apis/v4/hermes/v0/event/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=json_decoder[EventResponse],
            error_mapper=get_apis_v4_hermes_v0_event_by_id_error_mapper,
            request_options=request_options,
        )

    def get_apis_v4_hermes_v0_subscriptions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AppSubscriptionsResponse, GetApisV4HermesV0SubscriptionsErrorBody]:
        """List all application's registered subscriptions Documentation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apis/v4/hermes/v0/subscriptions"),
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=json_decoder[AppSubscriptionsResponse],
            error_mapper=get_apis_v4_hermes_v0_subscriptions_error_mapper,
            request_options=request_options,
        )

    def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
        self, user_id: int, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AppUserSubscriptionStatusResponse, GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody]:
        """Documentation

        Args:
            user_id: User id
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apis/v4/hermes/v0/user/{user_id}/subscription/{id}"),
            path_params=[param[int]("user_id", user_id), param[int]("id", id_)],
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=json_decoder[AppUserSubscriptionStatusResponse],
            error_mapper=get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error_mapper,
            request_options=request_options,
        )

    def post_apis_v4_hermes_v0_event(
        self,
        *,
        body: CreateEventRequest | CreateEventRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApisV4HermesV0EventErrorBody]:
        """Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/apis/v4/hermes/v0/event"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEventRequest | CreateEventRequestDict | None](body),
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=empty_response,
            error_mapper=post_apis_v4_hermes_v0_event_error_mapper,
            request_options=request_options,
        )


class AsyncHermesPartnerApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_apis_v4_hermes_v0_event_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EventResponse, GetApisV4HermesV0EventByIdErrorBody]:
        """Documentation

        Args:
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apis/v4/hermes/v0/event/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=async_json_decoder[EventResponse],
            error_mapper=get_apis_v4_hermes_v0_event_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_apis_v4_hermes_v0_subscriptions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AppSubscriptionsResponse, GetApisV4HermesV0SubscriptionsErrorBody]:
        """List all application's registered subscriptions Documentation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apis/v4/hermes/v0/subscriptions"),
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=async_json_decoder[AppSubscriptionsResponse],
            error_mapper=get_apis_v4_hermes_v0_subscriptions_error_mapper,
            request_options=request_options,
        )

    async def get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id(
        self, user_id: int, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AppUserSubscriptionStatusResponse, GetApisV4HermesV0UserByUserIdSubscriptionByIdErrorBody]:
        """Documentation

        Args:
            user_id: User id
            id_: Subscription id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apis/v4/hermes/v0/user/{user_id}/subscription/{id}"),
            path_params=[param[int]("user_id", user_id), param[int]("id", id_)],
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=async_json_decoder[AppUserSubscriptionStatusResponse],
            error_mapper=get_apis_v4_hermes_v0_user_by_user_id_subscription_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_apis_v4_hermes_v0_event(
        self,
        *,
        body: CreateEventRequest | CreateEventRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApisV4HermesV0EventErrorBody]:
        """Documentation

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/apis/v4/hermes/v0/event"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEventRequest | CreateEventRequestDict | None](body),
            auth_scheme=self._auth.jwt_issuer_token,
            decoder=async_empty_response,
            error_mapper=post_apis_v4_hermes_v0_event_error_mapper,
            request_options=request_options,
        )
