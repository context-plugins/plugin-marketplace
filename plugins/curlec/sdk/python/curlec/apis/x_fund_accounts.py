from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.activate_deactivate_fund_account_error import (
    ActivateDeactivateFundAccountErrorBody,
    activate_deactivate_fund_account_error_mapper,
)
from ..errors.create_fund_account_error import CreateFundAccountErrorBody, create_fund_account_error_mapper
from ..errors.fetch_fund_account_error import FetchFundAccountErrorBody, fetch_fund_account_error_mapper
from ..errors.list_fund_accounts_error import ListFundAccountsErrorBody, list_fund_accounts_error_mapper
from ..models.fund_account_razorpay_x_fund_accounts_api import FundAccountRazorpayXFundAccountsApi
from ..models.fund_accounts_request import FundAccountsRequest, FundAccountsRequestDict
from ..models.fund_accounts_request1 import FundAccountsRequest1, FundAccountsRequest1Dict
from ..models.fund_accounts_response import FundAccountsResponse
from ..server.server import Server


class XFundAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XFundAccountsWithRawResponse(client, server, auth)

    def activate_deactivate_fund_account(
        self,
        fund_account_id: str,
        body: FundAccountsRequest1 | FundAccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundAccountRazorpayXFundAccountsApi:
        """Activate or deactivate a fund account. Fund account details are immutable — only the ``active`` status can be
        changed.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated fund account

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.activate_deactivate_fund_account(
                fund_account_id, body, request_options=request_options
            ),
        )

    def create_fund_account(
        self,
        body: FundAccountsRequest | FundAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundAccountRazorpayXFundAccountsApi:
        """Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are
        immutable after creation. Returns existing record if contact_id + account details all match.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Fund account created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_fund_account(body, request_options=request_options))

    def fetch_fund_account(
        self, fund_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FundAccountRazorpayXFundAccountsApi:
        """Fetch details of a specific fund account by its ID.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Fund account details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_fund_account(fund_account_id, request_options=request_options))

    def list_fund_accounts(
        self,
        *,
        contact_id: str | None = None,
        account_type: str | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FundAccountsResponse:
        """List fund accounts linked to contacts. Filter by contact ID and/or account type.

        Args:
            contact_id: Filter by contact ID to list fund accounts linked to that contact.
            account_type: Filter by fund account type: ``bank_account``, ``vpa``, ``card``, or ``wallet``.
            count: Number of fund accounts to return. Default: 10. Maximum: 100.
            skip: Number of fund accounts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of fund accounts

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_fund_accounts(
                contact_id=contact_id,
                account_type=account_type,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> XFundAccountsWithRawResponse:
        return self._with_raw_response


class AsyncXFundAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXFundAccountsWithRawResponse(client, server, auth)

    async def activate_deactivate_fund_account(
        self,
        fund_account_id: str,
        body: FundAccountsRequest1 | FundAccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundAccountRazorpayXFundAccountsApi:
        """Activate or deactivate a fund account. Fund account details are immutable — only the ``active`` status can be
        changed.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated fund account

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.activate_deactivate_fund_account(
                fund_account_id, body, request_options=request_options
            ),
        )

    async def create_fund_account(
        self,
        body: FundAccountsRequest | FundAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundAccountRazorpayXFundAccountsApi:
        """Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are
        immutable after creation. Returns existing record if contact_id + account details all match.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Fund account created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_fund_account(body, request_options=request_options))

    async def fetch_fund_account(
        self, fund_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FundAccountRazorpayXFundAccountsApi:
        """Fetch details of a specific fund account by its ID.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Fund account details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_fund_account(fund_account_id, request_options=request_options)
        )

    async def list_fund_accounts(
        self,
        *,
        contact_id: str | None = None,
        account_type: str | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FundAccountsResponse:
        """List fund accounts linked to contacts. Filter by contact ID and/or account type.

        Args:
            contact_id: Filter by contact ID to list fund accounts linked to that contact.
            account_type: Filter by fund account type: ``bank_account``, ``vpa``, ``card``, or ``wallet``.
            count: Number of fund accounts to return. Default: 10. Maximum: 100.
            skip: Number of fund accounts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of fund accounts

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_fund_accounts(
                contact_id=contact_id,
                account_type=account_type,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncXFundAccountsWithRawResponse:
        return self._with_raw_response


class XFundAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_deactivate_fund_account(
        self,
        fund_account_id: str,
        body: FundAccountsRequest1 | FundAccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountRazorpayXFundAccountsApi, ActivateDeactivateFundAccountErrorBody]:
        """Activate or deactivate a fund account. Fund account details are immutable — only the ``active`` status can be
        changed.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/fund_accounts/{fund_account_id}"),
            path_params=[param[str]("fund_account_id", fund_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FundAccountsRequest1 | FundAccountsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountRazorpayXFundAccountsApi],
            error_mapper=activate_deactivate_fund_account_error_mapper,
            request_options=request_options,
        )

    def create_fund_account(
        self,
        body: FundAccountsRequest | FundAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountRazorpayXFundAccountsApi, CreateFundAccountErrorBody]:
        """Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are
        immutable after creation. Returns existing record if contact_id + account details all match.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/fund_accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FundAccountsRequest | FundAccountsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountRazorpayXFundAccountsApi],
            error_mapper=create_fund_account_error_mapper,
            request_options=request_options,
        )

    def fetch_fund_account(
        self, fund_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FundAccountRazorpayXFundAccountsApi, FetchFundAccountErrorBody]:
        """Fetch details of a specific fund account by its ID.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts/{fund_account_id}"),
            path_params=[param[str]("fund_account_id", fund_account_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountRazorpayXFundAccountsApi],
            error_mapper=fetch_fund_account_error_mapper,
            request_options=request_options,
        )

    def list_fund_accounts(
        self,
        *,
        contact_id: str | None = None,
        account_type: str | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountsResponse, ListFundAccountsErrorBody]:
        """List fund accounts linked to contacts. Filter by contact ID and/or account type.

        Args:
            contact_id: Filter by contact ID to list fund accounts linked to that contact.
            account_type: Filter by fund account type: ``bank_account``, ``vpa``, ``card``, or ``wallet``.
            count: Number of fund accounts to return. Default: 10. Maximum: 100.
            skip: Number of fund accounts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts"),
            query_params=[
                param[str | None]("contact_id", contact_id),
                param[str | None]("account_type", account_type),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[FundAccountsResponse],
            error_mapper=list_fund_accounts_error_mapper,
            request_options=request_options,
        )


class AsyncXFundAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_deactivate_fund_account(
        self,
        fund_account_id: str,
        body: FundAccountsRequest1 | FundAccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountRazorpayXFundAccountsApi, ActivateDeactivateFundAccountErrorBody]:
        """Activate or deactivate a fund account. Fund account details are immutable — only the ``active`` status can be
        changed.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/fund_accounts/{fund_account_id}"),
            path_params=[param[str]("fund_account_id", fund_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FundAccountsRequest1 | FundAccountsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountRazorpayXFundAccountsApi],
            error_mapper=activate_deactivate_fund_account_error_mapper,
            request_options=request_options,
        )

    async def create_fund_account(
        self,
        body: FundAccountsRequest | FundAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountRazorpayXFundAccountsApi, CreateFundAccountErrorBody]:
        """Create a bank account, VPA, card, or wallet (Amazon Pay) fund account linked to a contact. Fund accounts are
        immutable after creation. Returns existing record if contact_id + account details all match.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/fund_accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FundAccountsRequest | FundAccountsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountRazorpayXFundAccountsApi],
            error_mapper=create_fund_account_error_mapper,
            request_options=request_options,
        )

    async def fetch_fund_account(
        self, fund_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FundAccountRazorpayXFundAccountsApi, FetchFundAccountErrorBody]:
        """Fetch details of a specific fund account by its ID.

        Args:
            fund_account_id: Unique identifier of the fund account (e.g. ``fa_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts/{fund_account_id}"),
            path_params=[param[str]("fund_account_id", fund_account_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountRazorpayXFundAccountsApi],
            error_mapper=fetch_fund_account_error_mapper,
            request_options=request_options,
        )

    async def list_fund_accounts(
        self,
        *,
        contact_id: str | None = None,
        account_type: str | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FundAccountsResponse, ListFundAccountsErrorBody]:
        """List fund accounts linked to contacts. Filter by contact ID and/or account type.

        Args:
            contact_id: Filter by contact ID to list fund accounts linked to that contact.
            account_type: Filter by fund account type: ``bank_account``, ``vpa``, ``card``, or ``wallet``.
            count: Number of fund accounts to return. Default: 10. Maximum: 100.
            skip: Number of fund accounts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/fund_accounts"),
            query_params=[
                param[str | None]("contact_id", contact_id),
                param[str | None]("account_type", account_type),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[FundAccountsResponse],
            error_mapper=list_fund_accounts_error_mapper,
            request_options=request_options,
        )
