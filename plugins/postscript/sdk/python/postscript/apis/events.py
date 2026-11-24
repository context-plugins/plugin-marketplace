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
from ..errors.create_custom_event_error import CreateCustomEventErrorBody, create_custom_event_error_mapper
from ..models.api_v2_events_request import ApiV2EventsRequest, ApiV2EventsRequestDict
from ..models.api_v2_events_response import ApiV2EventsResponse
from ..server.server import Server


class Events:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EventsWithRawResponse(client, server, auth)

    def create_custom_event(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2EventsRequest | ApiV2EventsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2EventsResponse:
        """Send a Custom Event to use in Flows

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.create_custom_event(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EventsWithRawResponse:
        return self._with_raw_response


class AsyncEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEventsWithRawResponse(client, server, auth)

    async def create_custom_event(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2EventsRequest | ApiV2EventsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2EventsResponse:
        """Send a Custom Event to use in Flows

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.create_custom_event(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEventsWithRawResponse:
        return self._with_raw_response


class EventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_custom_event(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2EventsRequest | ApiV2EventsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2EventsResponse, CreateCustomEventErrorBody]:
        """Send a Custom Event to use in Flows

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/events"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2EventsRequest | ApiV2EventsRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2EventsResponse],
            error_mapper=create_custom_event_error_mapper,
            request_options=request_options,
        )


class AsyncEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_custom_event(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2EventsRequest | ApiV2EventsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2EventsResponse, CreateCustomEventErrorBody]:
        """Send a Custom Event to use in Flows

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/events"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2EventsRequest | ApiV2EventsRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2EventsResponse],
            error_mapper=create_custom_event_error_mapper,
            request_options=request_options,
        )
