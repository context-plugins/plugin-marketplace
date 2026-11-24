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
from ..errors.get_transaction_error import GetTransactionErrorBody, get_transaction_error_mapper
from ..errors.get_transactions_error import GetTransactionsErrorBody, get_transactions_error_mapper
from ..models.transactions_container_object_connect_transactions_api import (
    TransactionsContainerObjectConnectTransactionsApi,
)
from ..models.users_transactions_response import UsersTransactionsResponse
from ..server.server import Server


class Transactions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransactionsWithRawResponse(client, server, auth)

    def get_transaction(
        self, user_id: str, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> UsersTransactionsResponse:
        """Retrieve an existing transaction

        Args:
            user_id: The identifier of the user.
            transaction_id: The identifier of the transaction.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a transaction if a valid transaction ID was provided.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. Returns error response code indicates that the server is not
                ready to handle the request. ``error`` is ``UsersTransactions400Error1 | UsersTransactions403Error1 |
                UsersTransactions404Error1 | UsersTransactions500Error1 | UsersTransactions503Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_transaction(user_id, transaction_id, request_options=request_options))

    def get_transactions(
        self,
        user_id: str,
        *,
        limit: int | None = 500,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionsContainerObjectConnectTransactionsApi:
        """List all transactions belonging to a specified user

        Args:
            user_id: User identifier.
            limit: This represents the maximum number of items that may be included in the response (maximum of 500).
                Note that by default 500 items are returned if this value is not specified.
            filter_: Transaction filters; connection.id, account.id, transaction.postDate, transaction.status,
                institution.id, transaction.direction, transaction.class
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a paginated list with a data property that contains an array of transactions. Each entry in the
            array is a separate object. If no data is returned, the resulting array will be empty.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersTransactions400Error1 |
                UsersTransactions403Error1 | UsersTransactions404Error1 | UsersTransactions500Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_transactions(
                user_id, limit=limit, filter_=filter_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TransactionsWithRawResponse:
        return self._with_raw_response


class AsyncTransactions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransactionsWithRawResponse(client, server, auth)

    async def get_transaction(
        self, user_id: str, transaction_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsersTransactionsResponse:
        """Retrieve an existing transaction

        Args:
            user_id: The identifier of the user.
            transaction_id: The identifier of the transaction.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a transaction if a valid transaction ID was provided.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. Returns error response code indicates that the server is not
                ready to handle the request. ``error`` is ``UsersTransactions400Error1 | UsersTransactions403Error1 |
                UsersTransactions404Error1 | UsersTransactions500Error1 | UsersTransactions503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_transaction(user_id, transaction_id, request_options=request_options)
        )

    async def get_transactions(
        self,
        user_id: str,
        *,
        limit: int | None = 500,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionsContainerObjectConnectTransactionsApi:
        """List all transactions belonging to a specified user

        Args:
            user_id: User identifier.
            limit: This represents the maximum number of items that may be included in the response (maximum of 500).
                Note that by default 500 items are returned if this value is not specified.
            filter_: Transaction filters; connection.id, account.id, transaction.postDate, transaction.status,
                institution.id, transaction.direction, transaction.class
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a paginated list with a data property that contains an array of transactions. Each entry in the
            array is a separate object. If no data is returned, the resulting array will be empty.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``UsersTransactions400Error1 |
                UsersTransactions403Error1 | UsersTransactions404Error1 | UsersTransactions500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_transactions(
                user_id, limit=limit, filter_=filter_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTransactionsWithRawResponse:
        return self._with_raw_response


class TransactionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_transaction(
        self, user_id: str, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsersTransactionsResponse, GetTransactionErrorBody]:
        """Retrieve an existing transaction

        Args:
            user_id: The identifier of the user.
            transaction_id: The identifier of the transaction.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/transactions/{transactionId}"),
            path_params=[param[str]("userId", user_id), param[str]("transactionId", transaction_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersTransactionsResponse],
            error_mapper=get_transaction_error_mapper,
            request_options=request_options,
        )

    def get_transactions(
        self,
        user_id: str,
        *,
        limit: int | None = 500,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionsContainerObjectConnectTransactionsApi, GetTransactionsErrorBody]:
        """List all transactions belonging to a specified user

        Args:
            user_id: User identifier.
            limit: This represents the maximum number of items that may be included in the response (maximum of 500).
                Note that by default 500 items are returned if this value is not specified.
            filter_: Transaction filters; connection.id, account.id, transaction.postDate, transaction.status,
                institution.id, transaction.direction, transaction.class
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/transactions"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[int | None]("limit", limit), param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[TransactionsContainerObjectConnectTransactionsApi],
            error_mapper=get_transactions_error_mapper,
            request_options=request_options,
        )


class AsyncTransactionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_transaction(
        self, user_id: str, transaction_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersTransactionsResponse, GetTransactionErrorBody]:
        """Retrieve an existing transaction

        Args:
            user_id: The identifier of the user.
            transaction_id: The identifier of the transaction.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/transactions/{transactionId}"),
            path_params=[param[str]("userId", user_id), param[str]("transactionId", transaction_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersTransactionsResponse],
            error_mapper=get_transaction_error_mapper,
            request_options=request_options,
        )

    async def get_transactions(
        self,
        user_id: str,
        *,
        limit: int | None = 500,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionsContainerObjectConnectTransactionsApi, GetTransactionsErrorBody]:
        """List all transactions belonging to a specified user

        Args:
            user_id: User identifier.
            limit: This represents the maximum number of items that may be included in the response (maximum of 500).
                Note that by default 500 items are returned if this value is not specified.
            filter_: Transaction filters; connection.id, account.id, transaction.postDate, transaction.status,
                institution.id, transaction.direction, transaction.class
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/transactions"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[int | None]("limit", limit), param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[TransactionsContainerObjectConnectTransactionsApi],
            error_mapper=get_transactions_error_mapper,
            request_options=request_options,
        )
