from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
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
from ..errors.transactions_index_error import TransactionsIndexErrorBody, transactions_index_error_mapper
from ..errors.transactions_show_error import TransactionsShowErrorBody, transactions_show_error_mapper
from ..errors.transactions_store_error import TransactionsStoreErrorBody, transactions_store_error_mapper
from ..errors.transactions_update_error import TransactionsUpdateErrorBody, transactions_update_error_mapper
from ..models.enums.scope_givebutter_api_documentation_transactions_api import (
    ScopeGivebutterApiDocumentationTransactionsApiOrStr,
)
from ..models.enums.sort_by_desc_givebutter_api_documentation_transactions_api import (
    SortByDescGivebutterApiDocumentationTransactionsApiOrStr,
)
from ..models.enums.sort_by_givebutter_api_documentation_transactions_api import (
    SortByGivebutterApiDocumentationTransactionsApiOrStr,
)
from ..models.store_transaction_request import StoreTransactionRequest, StoreTransactionRequestDict
from ..models.unions.transaction_resource2 import TransactionResource2
from ..models.update_transaction_request import UpdateTransactionRequest, UpdateTransactionRequestDict
from ..models.v1_transactions_response import V1TransactionsResponse
from ..server.server import Server


class Transactions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransactionsWithRawResponse(client, server, auth)

    def transactions_index(
        self,
        *,
        transacted_after: RFC3339DateTime | None = None,
        transacted_before: RFC3339DateTime | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        check_deposited_after: RFC3339DateTime | None = None,
        check_deposited_before: RFC3339DateTime | None = None,
        contacts: str | None = None,
        method: str | None = None,
        scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TransactionsResponse:
        """Send a ``GET`` request.

        Args:
            transacted_after: Value sent with the request.
            transacted_before: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            check_deposited_after: Value sent with the request.
            check_deposited_before: Value sent with the request.
            contacts: Value sent with the request.
            method: Value sent with the request.
            scope: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``TransactionResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.transactions_index(
                transacted_after=transacted_after,
                transacted_before=transacted_before,
                created_after=created_after,
                created_before=created_before,
                updated_after=updated_after,
                updated_before=updated_before,
                check_deposited_after=check_deposited_after,
                check_deposited_before=check_deposited_before,
                contacts=contacts,
                method=method,
                scope=scope,
                sort_by=sort_by,
                sort_by_desc=sort_by_desc,
                request_options=request_options,
            ),
        )

    def transactions_show(
        self, transaction: str | None, *, request_options: RequestOptionsOrDict | None = None
    ) -> TransactionResource2:
        """Send a ``GET`` request.

        Args:
            transaction: The transaction tid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TransactionResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.transactions_show(transaction, request_options=request_options))

    def transactions_store(
        self,
        body: StoreTransactionRequest | StoreTransactionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionResource2:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TransactionResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                NotFoundHttpException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.transactions_store(body, request_options=request_options))

    def transactions_update(
        self,
        transaction: str | None,
        *,
        body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransactionResource2:
        """Send a ``PUT`` request.

        Args:
            transaction: The transaction tid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TransactionResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.transactions_update(transaction, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> TransactionsWithRawResponse:
        return self._with_raw_response


class AsyncTransactions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransactionsWithRawResponse(client, server, auth)

    async def transactions_index(
        self,
        *,
        transacted_after: RFC3339DateTime | None = None,
        transacted_before: RFC3339DateTime | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        check_deposited_after: RFC3339DateTime | None = None,
        check_deposited_before: RFC3339DateTime | None = None,
        contacts: str | None = None,
        method: str | None = None,
        scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TransactionsResponse:
        """Send a ``GET`` request.

        Args:
            transacted_after: Value sent with the request.
            transacted_before: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            check_deposited_after: Value sent with the request.
            check_deposited_before: Value sent with the request.
            contacts: Value sent with the request.
            method: Value sent with the request.
            scope: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``TransactionResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.transactions_index(
                transacted_after=transacted_after,
                transacted_before=transacted_before,
                created_after=created_after,
                created_before=created_before,
                updated_after=updated_after,
                updated_before=updated_before,
                check_deposited_after=check_deposited_after,
                check_deposited_before=check_deposited_before,
                contacts=contacts,
                method=method,
                scope=scope,
                sort_by=sort_by,
                sort_by_desc=sort_by_desc,
                request_options=request_options,
            ),
        )

    async def transactions_show(
        self, transaction: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TransactionResource2:
        """Send a ``GET`` request.

        Args:
            transaction: The transaction tid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TransactionResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.transactions_show(transaction, request_options=request_options))

    async def transactions_store(
        self,
        body: StoreTransactionRequest | StoreTransactionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionResource2:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TransactionResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                NotFoundHttpException1 | ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.transactions_store(body, request_options=request_options))

    async def transactions_update(
        self,
        transaction: str | None,
        *,
        body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransactionResource2:
        """Send a ``PUT`` request.

        Args:
            transaction: The transaction tid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``TransactionResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.transactions_update(transaction, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncTransactionsWithRawResponse:
        return self._with_raw_response


class TransactionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def transactions_index(
        self,
        *,
        transacted_after: RFC3339DateTime | None = None,
        transacted_before: RFC3339DateTime | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        check_deposited_after: RFC3339DateTime | None = None,
        check_deposited_before: RFC3339DateTime | None = None,
        contacts: str | None = None,
        method: str | None = None,
        scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TransactionsResponse, TransactionsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            transacted_after: Value sent with the request.
            transacted_before: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            check_deposited_after: Value sent with the request.
            check_deposited_before: Value sent with the request.
            contacts: Value sent with the request.
            method: Value sent with the request.
            scope: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transactions"),
            query_params=[
                param[RFC3339DateTime | None]("transactedAfter", transacted_after),
                param[RFC3339DateTime | None]("transactedBefore", transacted_before),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("updatedAfter", updated_after),
                param[RFC3339DateTime | None]("updatedBefore", updated_before),
                param[RFC3339DateTime | None]("checkDepositedAfter", check_deposited_after),
                param[RFC3339DateTime | None]("checkDepositedBefore", check_deposited_before),
                param[str | None]("contacts", contacts),
                param[str | None]("method", method),
                param[ScopeGivebutterApiDocumentationTransactionsApiOrStr | None]("scope", scope),
                param[SortByGivebutterApiDocumentationTransactionsApiOrStr | None]("sortBy", sort_by),
                param[SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None]("sortByDesc", sort_by_desc),
            ],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1TransactionsResponse],
            error_mapper=transactions_index_error_mapper,
            request_options=request_options,
        )

    def transactions_show(
        self, transaction: str | None, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TransactionResource2, TransactionsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            transaction: The transaction tid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transactions/{transaction}"),
            path_params=[param[str | None]("transaction", transaction)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[TransactionResource2],
            error_mapper=transactions_show_error_mapper,
            request_options=request_options,
        )

    def transactions_store(
        self,
        body: StoreTransactionRequest | StoreTransactionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResource2, TransactionsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transactions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreTransactionRequest | StoreTransactionRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[TransactionResource2],
            error_mapper=transactions_store_error_mapper,
            request_options=request_options,
        )

    def transactions_update(
        self,
        transaction: str | None,
        *,
        body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResource2, TransactionsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            transaction: The transaction tid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/transactions/{transaction}"),
            path_params=[param[str | None]("transaction", transaction)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTransactionRequest | UpdateTransactionRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[TransactionResource2],
            error_mapper=transactions_update_error_mapper,
            request_options=request_options,
        )


class AsyncTransactionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def transactions_index(
        self,
        *,
        transacted_after: RFC3339DateTime | None = None,
        transacted_before: RFC3339DateTime | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        check_deposited_after: RFC3339DateTime | None = None,
        check_deposited_before: RFC3339DateTime | None = None,
        contacts: str | None = None,
        method: str | None = None,
        scope: ScopeGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by: SortByGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        sort_by_desc: SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TransactionsResponse, TransactionsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            transacted_after: Value sent with the request.
            transacted_before: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            check_deposited_after: Value sent with the request.
            check_deposited_before: Value sent with the request.
            contacts: Value sent with the request.
            method: Value sent with the request.
            scope: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transactions"),
            query_params=[
                param[RFC3339DateTime | None]("transactedAfter", transacted_after),
                param[RFC3339DateTime | None]("transactedBefore", transacted_before),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("updatedAfter", updated_after),
                param[RFC3339DateTime | None]("updatedBefore", updated_before),
                param[RFC3339DateTime | None]("checkDepositedAfter", check_deposited_after),
                param[RFC3339DateTime | None]("checkDepositedBefore", check_deposited_before),
                param[str | None]("contacts", contacts),
                param[str | None]("method", method),
                param[ScopeGivebutterApiDocumentationTransactionsApiOrStr | None]("scope", scope),
                param[SortByGivebutterApiDocumentationTransactionsApiOrStr | None]("sortBy", sort_by),
                param[SortByDescGivebutterApiDocumentationTransactionsApiOrStr | None]("sortByDesc", sort_by_desc),
            ],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1TransactionsResponse],
            error_mapper=transactions_index_error_mapper,
            request_options=request_options,
        )

    async def transactions_show(
        self, transaction: str | None, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TransactionResource2, TransactionsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            transaction: The transaction tid
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/transactions/{transaction}"),
            path_params=[param[str | None]("transaction", transaction)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[TransactionResource2],
            error_mapper=transactions_show_error_mapper,
            request_options=request_options,
        )

    async def transactions_store(
        self,
        body: StoreTransactionRequest | StoreTransactionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResource2, TransactionsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/transactions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreTransactionRequest | StoreTransactionRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[TransactionResource2],
            error_mapper=transactions_store_error_mapper,
            request_options=request_options,
        )

    async def transactions_update(
        self,
        transaction: str | None,
        *,
        body: UpdateTransactionRequest | UpdateTransactionRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransactionResource2, TransactionsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            transaction: The transaction tid
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/transactions/{transaction}"),
            path_params=[param[str | None]("transaction", transaction)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTransactionRequest | UpdateTransactionRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[TransactionResource2],
            error_mapper=transactions_update_error_mapper,
            request_options=request_options,
        )
