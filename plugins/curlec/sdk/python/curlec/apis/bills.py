from __future__ import annotations

from typing import Any
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
from ..errors.create_bill_error import CreateBillErrorBody, create_bill_error_mapper
from ..errors.delete_bill_error import DeleteBillErrorBody, delete_bill_error_mapper
from ..errors.update_bill_error import UpdateBillErrorBody, update_bill_error_mapper
from ..models.bill import Bill, BillDict
from ..models.bills_request import BillsRequest, BillsRequestDict
from ..server.server import Server


class Bills:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BillsWithRawResponse(client, server, auth)

    def create_bill(
        self, body: BillsRequest | BillsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Bill:
        """Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and ecommerce use
        cases. Used for Razorpay Billme digital receipts.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bill created successfully

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_bill(body, request_options=request_options))

    def delete_bill(self, bill_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Delete a digital bill/receipt.

        Args:
            bill_id: Bill ID with prefix bill_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bill deleted successfully

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_bill(bill_id, request_options=request_options))

    def update_bill(
        self, bill_id: str, body: Bill | BillDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Bill:
        """Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.

        Args:
            bill_id: Bill ID with prefix bill_
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bill updated successfully

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_bill(bill_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> BillsWithRawResponse:
        return self._with_raw_response


class AsyncBills:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBillsWithRawResponse(client, server, auth)

    async def create_bill(
        self, body: BillsRequest | BillsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Bill:
        """Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and ecommerce use
        cases. Used for Razorpay Billme digital receipts.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bill created successfully

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_bill(body, request_options=request_options))

    async def delete_bill(self, bill_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Delete a digital bill/receipt.

        Args:
            bill_id: Bill ID with prefix bill_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bill deleted successfully

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_bill(bill_id, request_options=request_options))

    async def update_bill(
        self, bill_id: str, body: Bill | BillDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Bill:
        """Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.

        Args:
            bill_id: Bill ID with prefix bill_
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bill updated successfully

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_bill(bill_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBillsWithRawResponse:
        return self._with_raw_response


class BillsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_bill(
        self, body: BillsRequest | BillsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Bill, CreateBillErrorBody]:
        """Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and ecommerce use
        cases. Used for Razorpay Billme digital receipts.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bills"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BillsRequest | BillsRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Bill],
            error_mapper=create_bill_error_mapper,
            request_options=request_options,
        )

    def delete_bill(
        self, bill_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteBillErrorBody]:
        """Delete a digital bill/receipt.

        Args:
            bill_id: Bill ID with prefix bill_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bills/{bill_id}"),
            path_params=[param[str]("bill_id", bill_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Any],
            error_mapper=delete_bill_error_mapper,
            request_options=request_options,
        )

    def update_bill(
        self, bill_id: str, body: Bill | BillDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Bill, UpdateBillErrorBody]:
        """Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.

        Args:
            bill_id: Bill ID with prefix bill_
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/bills/{bill_id}"),
            path_params=[param[str]("bill_id", bill_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Bill | BillDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Bill],
            error_mapper=update_bill_error_mapper,
            request_options=request_options,
        )


class AsyncBillsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_bill(
        self, body: BillsRequest | BillsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Bill, CreateBillErrorBody]:
        """Create a digital bill/receipt for a customer. Supports retail, food & beverage, events, and ecommerce use
        cases. Used for Razorpay Billme digital receipts.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bills"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BillsRequest | BillsRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Bill],
            error_mapper=create_bill_error_mapper,
            request_options=request_options,
        )

    async def delete_bill(
        self, bill_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteBillErrorBody]:
        """Delete a digital bill/receipt.

        Args:
            bill_id: Bill ID with prefix bill_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bills/{bill_id}"),
            path_params=[param[str]("bill_id", bill_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Any],
            error_mapper=delete_bill_error_mapper,
            request_options=request_options,
        )

    async def update_bill(
        self, bill_id: str, body: Bill | BillDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Bill, UpdateBillErrorBody]:
        """Update an existing digital bill. Can update customer details, line items, receipt summary, and other fields.

        Args:
            bill_id: Bill ID with prefix bill_
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/bills/{bill_id}"),
            path_params=[param[str]("bill_id", bill_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Bill | BillDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Bill],
            error_mapper=update_bill_error_mapper,
            request_options=request_options,
        )
