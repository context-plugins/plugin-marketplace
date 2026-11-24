from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.fetch_transaction_error import FetchTransactionErrorBody, fetch_transaction_error_mapper
from ..errors.list_transactions_error import ListTransactionsErrorBody, list_transactions_error_mapper
from ..models.transactions_response import TransactionsResponse
from ..models.x_transaction import XTransaction
from ..server.server import Server


class XTransactions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XTransactionsWithRawResponse(client, server, auth)

    def fetch_transaction(
        self, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> XTransaction:
        """Fetch details of a specific transaction from a RazorpayX account by its ID.

        Args:
            transaction_id: Transaction ID (txn_*)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transaction details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_transaction(transaction_id, request_options=request_options))

    def list_transactions(
        self,
        account_number: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionsResponse:
        """Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from
        Dashboard → My Account & Settings → Banking → Customer Identifier.

        Args:
            account_number: RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live
                mode.
            from_: Unix timestamp filter start
            to: Unix timestamp filter end
            count: Number of transactions to return. Default: 10. Maximum: 100.
            skip: Number of transactions to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of transactions

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_transactions(
                account_number, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> XTransactionsWithRawResponse:
        return self._with_raw_response


class AsyncXTransactions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXTransactionsWithRawResponse(client, server, auth)

    async def fetch_transaction(
        self, transaction_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> XTransaction:
        """Fetch details of a specific transaction from a RazorpayX account by its ID.

        Args:
            transaction_id: Transaction ID (txn_*)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transaction details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_transaction(transaction_id, request_options=request_options))

    async def list_transactions(
        self,
        account_number: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionsResponse:
        """Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from
        Dashboard → My Account & Settings → Banking → Customer Identifier.

        Args:
            account_number: RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live
                mode.
            from_: Unix timestamp filter start
            to: Unix timestamp filter end
            count: Number of transactions to return. Default: 10. Maximum: 100.
            skip: Number of transactions to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of transactions

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_transactions(
                account_number, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncXTransactionsWithRawResponse:
        return self._with_raw_response


class XTransactionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_transaction(
        self, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[XTransaction, FetchTransactionErrorBody]:
        """Fetch details of a specific transaction from a RazorpayX account by its ID.

        Args:
            transaction_id: Transaction ID (txn_*)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transactions/{transaction_id}"),
            path_params=[param[str]("transaction_id", transaction_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[XTransaction],
            error_mapper=fetch_transaction_error_mapper,
            request_options=request_options,
        )

    def list_transactions(
        self,
        account_number: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionsResponse, ListTransactionsErrorBody]:
        """Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from
        Dashboard → My Account & Settings → Banking → Customer Identifier.

        Args:
            account_number: RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live
                mode.
            from_: Unix timestamp filter start
            to: Unix timestamp filter end
            count: Number of transactions to return. Default: 10. Maximum: 100.
            skip: Number of transactions to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transactions"),
            query_params=[
                param[str]("account_number", account_number),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[TransactionsResponse],
            error_mapper=list_transactions_error_mapper,
            request_options=request_options,
        )


class AsyncXTransactionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_transaction(
        self, transaction_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[XTransaction, FetchTransactionErrorBody]:
        """Fetch details of a specific transaction from a RazorpayX account by its ID.

        Args:
            transaction_id: Transaction ID (txn_*)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transactions/{transaction_id}"),
            path_params=[param[str]("transaction_id", transaction_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[XTransaction],
            error_mapper=fetch_transaction_error_mapper,
            request_options=request_options,
        )

    async def list_transactions(
        self,
        account_number: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionsResponse, ListTransactionsErrorBody]:
        """Returns all transaction records (credits and debits) for a given RazorpayX account. Use account_number from
        Dashboard → My Account & Settings → Banking → Customer Identifier.

        Args:
            account_number: RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live
                mode.
            from_: Unix timestamp filter start
            to: Unix timestamp filter end
            count: Number of transactions to return. Default: 10. Maximum: 100.
            skip: Number of transactions to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transactions"),
            query_params=[
                param[str]("account_number", account_number),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[TransactionsResponse],
            error_mapper=list_transactions_error_mapper,
            request_options=request_options,
        )
