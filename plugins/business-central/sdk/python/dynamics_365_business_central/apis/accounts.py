from __future__ import annotations

from uuid import UUID

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
from ..errors.get_account_error import GetAccountErrorBody, get_account_error_mapper
from ..errors.list_accounts_error import ListAccountsErrorBody, list_accounts_error_mapper
from ..errors.list_general_ledger_entries_error import (
    ListGeneralLedgerEntriesErrorBody,
    list_general_ledger_entries_error_mapper,
)
from ..models.account import Account
from ..models.companies_api_accounts_response import CompaniesApiAccountsResponse
from ..models.companies_api_general_ledger_entries_response import CompaniesApiGeneralLedgerEntriesResponse
from ..server.server import Server


class Accounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsWithRawResponse(client, server, auth)

    def get_account(
        self, company_id: UUID, account_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> Account:
        """Retrieves a specific account by ID.

        Args:
            company_id: The unique identifier of the company
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved account

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_account(company_id, account_id, request_options=request_options))

    def list_accounts(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiAccountsResponse:
        """Returns a list of general ledger account objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved accounts

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_accounts(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    def list_general_ledger_entries(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiGeneralLedgerEntriesResponse:
        """Returns a list of general ledger entries.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved general ledger entries

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_general_ledger_entries(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AccountsWithRawResponse:
        return self._with_raw_response


class AsyncAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsWithRawResponse(client, server, auth)

    async def get_account(
        self, company_id: UUID, account_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Account:
        """Retrieves a specific account by ID.

        Args:
            company_id: The unique identifier of the company
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved account

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_account(company_id, account_id, request_options=request_options)
        )

    async def list_accounts(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiAccountsResponse:
        """Returns a list of general ledger account objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved accounts

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_accounts(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    async def list_general_ledger_entries(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiGeneralLedgerEntriesResponse:
        """Returns a list of general ledger entries.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved general ledger entries

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_general_ledger_entries(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAccountsWithRawResponse:
        return self._with_raw_response


class AccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account(
        self, company_id: UUID, account_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetAccountErrorBody]:
        """Retrieves a specific account by ID.

        Args:
            company_id: The unique identifier of the company
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/accounts({account_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("account_id", account_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Account],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    def list_accounts(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiAccountsResponse, ListAccountsErrorBody]:
        """Returns a list of general ledger account objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/accounts"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiAccountsResponse],
            error_mapper=list_accounts_error_mapper,
            request_options=request_options,
        )

    def list_general_ledger_entries(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiGeneralLedgerEntriesResponse, ListGeneralLedgerEntriesErrorBody]:
        """Returns a list of general ledger entries.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/generalLedgerEntries"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiGeneralLedgerEntriesResponse],
            error_mapper=list_general_ledger_entries_error_mapper,
            request_options=request_options,
        )


class AsyncAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account(
        self, company_id: UUID, account_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetAccountErrorBody]:
        """Retrieves a specific account by ID.

        Args:
            company_id: The unique identifier of the company
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/accounts({account_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("account_id", account_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Account],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    async def list_accounts(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiAccountsResponse, ListAccountsErrorBody]:
        """Returns a list of general ledger account objects.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/accounts"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiAccountsResponse],
            error_mapper=list_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_general_ledger_entries(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiGeneralLedgerEntriesResponse, ListGeneralLedgerEntriesErrorBody]:
        """Returns a list of general ledger entries.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/generalLedgerEntries"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiGeneralLedgerEntriesResponse],
            error_mapper=list_general_ledger_entries_error_mapper,
            request_options=request_options,
        )
