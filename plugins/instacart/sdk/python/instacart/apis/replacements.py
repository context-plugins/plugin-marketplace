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
from ..errors.update_item_replacement_error import UpdateItemReplacementErrorBody, update_item_replacement_error_mapper
from ..models.replacement_decision_request import ReplacementDecisionRequest, ReplacementDecisionRequestDict
from ..models.replacement_response import ReplacementResponse
from ..server.server import Server


class Replacements:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReplacementsWithRawResponse(client, server, auth)

    def update_item_replacement(
        self,
        order_id: str,
        order_item_id: str,
        body: ReplacementDecisionRequest | ReplacementDecisionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReplacementResponse:
        """Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer
        approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the
        status as REJECTED. Items with a rejected replacement are automatically refunded.

        Args:
            order_id: The unique identifier for the order.
            order_item_id: The unique identifier for a specific item within the order.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replacement decision applied successfully

        Raises:
            ApiError: Bad request Unauthorized Order item not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_item_replacement(
                order_id, order_item_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ReplacementsWithRawResponse:
        return self._with_raw_response


class AsyncReplacements:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReplacementsWithRawResponse(client, server, auth)

    async def update_item_replacement(
        self,
        order_id: str,
        order_item_id: str,
        body: ReplacementDecisionRequest | ReplacementDecisionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReplacementResponse:
        """Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer
        approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the
        status as REJECTED. Items with a rejected replacement are automatically refunded.

        Args:
            order_id: The unique identifier for the order.
            order_item_id: The unique identifier for a specific item within the order.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replacement decision applied successfully

        Raises:
            ApiError: Bad request Unauthorized Order item not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_item_replacement(
                order_id, order_item_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReplacementsWithRawResponse:
        return self._with_raw_response


class ReplacementsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def update_item_replacement(
        self,
        order_id: str,
        order_item_id: str,
        body: ReplacementDecisionRequest | ReplacementDecisionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReplacementResponse, UpdateItemReplacementErrorBody]:
        """Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer
        approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the
        status as REJECTED. Items with a rejected replacement are automatically refunded.

        Args:
            order_id: The unique identifier for the order.
            order_item_id: The unique identifier for a specific item within the order.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/post_checkout/orders/{order_id}/items/{order_item_id}/replacement"),
            path_params=[param[str]("order_id", order_id), param[str]("order_item_id", order_item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReplacementDecisionRequest | ReplacementDecisionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ReplacementResponse],
            error_mapper=update_item_replacement_error_mapper,
            request_options=request_options,
        )


class AsyncReplacementsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def update_item_replacement(
        self,
        order_id: str,
        order_item_id: str,
        body: ReplacementDecisionRequest | ReplacementDecisionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReplacementResponse, UpdateItemReplacementErrorBody]:
        """Approves or rejects a replacement suggested by the shopper for a specific order item. If the customer
        approves the replacement, specify the status as APPROVED. If the customer rejects the replacement, specify the
        status as REJECTED. Items with a rejected replacement are automatically refunded.

        Args:
            order_id: The unique identifier for the order.
            order_item_id: The unique identifier for a specific item within the order.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/post_checkout/orders/{order_id}/items/{order_item_id}/replacement"),
            path_params=[param[str]("order_id", order_id), param[str]("order_item_id", order_item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReplacementDecisionRequest | ReplacementDecisionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ReplacementResponse],
            error_mapper=update_item_replacement_error_mapper,
            request_options=request_options,
        )
