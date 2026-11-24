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
from ..errors.create_message_error import CreateMessageErrorBody, create_message_error_mapper
from ..errors.get_message_request_error import GetMessageRequestErrorBody, get_message_request_error_mapper
from ..errors.get_sent_message_error import GetSentMessageErrorBody, get_sent_message_error_mapper
from ..models.api_v2_message_requests_request import ApiV2MessageRequestsRequest, ApiV2MessageRequestsRequestDict
from ..models.api_v2_message_requests_response import ApiV2MessageRequestsResponse
from ..models.api_v2_sent_messages_response import ApiV2SentMessagesResponse
from ..server.server import Server


class Messages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MessagesWithRawResponse(client, server, auth)

    def create_message(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2MessageRequestsResponse:
        """Send a message to a subscriber.

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
            self._with_raw_response.create_message(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    def get_message_request(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2MessageRequestsResponse:
        """Send a ``GET`` request.

        Args:
            id_: ID of the message request to look up.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.get_message_request(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def get_sent_message(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2SentMessagesResponse:
        """Send a ``GET`` request.

        Args:
            id_: ID of sent message to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``ApiV2SentMessages400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_sent_message(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MessagesWithRawResponse:
        return self._with_raw_response


class AsyncMessages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMessagesWithRawResponse(client, server, auth)

    async def create_message(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2MessageRequestsResponse:
        """Send a message to a subscriber.

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
            await self._with_raw_response.create_message(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    async def get_message_request(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2MessageRequestsResponse:
        """Send a ``GET`` request.

        Args:
            id_: ID of the message request to look up.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.get_message_request(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def get_sent_message(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2SentMessagesResponse:
        """Send a ``GET`` request.

        Args:
            id_: ID of sent message to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``ApiV2SentMessages400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_sent_message(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMessagesWithRawResponse:
        return self._with_raw_response


class MessagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_message(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2MessageRequestsResponse, CreateMessageErrorBody]:
        """Send a message to a subscriber.

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
            url_template=self._server.default("/api/v2/message_requests"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2MessageRequestsResponse],
            error_mapper=create_message_error_mapper,
            request_options=request_options,
        )

    def get_message_request(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2MessageRequestsResponse, GetMessageRequestErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: ID of the message request to look up.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/message_requests/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2MessageRequestsResponse],
            error_mapper=get_message_request_error_mapper,
            request_options=request_options,
        )

    def get_sent_message(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2SentMessagesResponse, GetSentMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: ID of sent message to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/sent_messages/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2SentMessagesResponse],
            error_mapper=get_sent_message_error_mapper,
            request_options=request_options,
        )


class AsyncMessagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_message(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2MessageRequestsResponse, CreateMessageErrorBody]:
        """Send a message to a subscriber.

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
            url_template=self._server.default("/api/v2/message_requests"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2MessageRequestsRequest | ApiV2MessageRequestsRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2MessageRequestsResponse],
            error_mapper=create_message_error_mapper,
            request_options=request_options,
        )

    async def get_message_request(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2MessageRequestsResponse, GetMessageRequestErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: ID of the message request to look up.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/message_requests/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2MessageRequestsResponse],
            error_mapper=get_message_request_error_mapper,
            request_options=request_options,
        )

    async def get_sent_message(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2SentMessagesResponse, GetSentMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: ID of sent message to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/sent_messages/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2SentMessagesResponse],
            error_mapper=get_sent_message_error_mapper,
            request_options=request_options,
        )
