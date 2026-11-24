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
from ..errors.submit_items_error import SubmitItemsErrorBody, submit_items_error_mapper
from ..models.item_submission_request import ItemSubmissionRequest, ItemSubmissionRequestDict
from ..models.submission_response import SubmissionResponse
from ..server.server import Server


class Items:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ItemsWithRawResponse(client, server, auth)

    def submit_items(
        self,
        body: ItemSubmissionRequest | ItemSubmissionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubmissionResponse:
        """Updates or sets item-level attributes for a product at a specific store location. Items contain information
        that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes
        can take around two to three hours before they are displayed on the storefront.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Items submitted successfully

        Raises:
            ApiError: Bad request due to invalid item data Unauthorized Too many requests - rate limit exceeded
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.submit_items(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ItemsWithRawResponse:
        return self._with_raw_response


class AsyncItems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncItemsWithRawResponse(client, server, auth)

    async def submit_items(
        self,
        body: ItemSubmissionRequest | ItemSubmissionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubmissionResponse:
        """Updates or sets item-level attributes for a product at a specific store location. Items contain information
        that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes
        can take around two to three hours before they are displayed on the storefront.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Items submitted successfully

        Raises:
            ApiError: Bad request due to invalid item data Unauthorized Too many requests - rate limit exceeded
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.submit_items(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncItemsWithRawResponse:
        return self._with_raw_response


class ItemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def submit_items(
        self,
        body: ItemSubmissionRequest | ItemSubmissionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubmissionResponse, SubmitItemsErrorBody]:
        """Updates or sets item-level attributes for a product at a specific store location. Items contain information
        that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes
        can take around two to three hours before they are displayed on the storefront.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data_ingestion/catalog/item/submission"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemSubmissionRequest | ItemSubmissionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SubmissionResponse],
            error_mapper=submit_items_error_mapper,
            request_options=request_options,
        )


class AsyncItemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def submit_items(
        self,
        body: ItemSubmissionRequest | ItemSubmissionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubmissionResponse, SubmitItemsErrorBody]:
        """Updates or sets item-level attributes for a product at a specific store location. Items contain information
        that can vary from one retailer store to another, such as pricing, availability, and inventory levels. Changes
        can take around two to three hours before they are displayed on the storefront.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data_ingestion/catalog/item/submission"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemSubmissionRequest | ItemSubmissionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SubmissionResponse],
            error_mapper=submit_items_error_mapper,
            request_options=request_options,
        )
