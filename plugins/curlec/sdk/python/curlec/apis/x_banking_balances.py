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
from ..errors.fetch_banking_balances_error import FetchBankingBalancesErrorBody, fetch_banking_balances_error_mapper
from ..models.banking_balances_response import BankingBalancesResponse
from ..models.enums.account_type1 import AccountType1OrStr
from ..server.server import Server


class XBankingBalances:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XBankingBalancesWithRawResponse(client, server, auth)

    def fetch_banking_balances(
        self,
        *,
        account_type: AccountType1OrStr | None = None,
        bank_code: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BankingBalancesResponse:
        """Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.

        Args:
            account_type: Type of RazorpayX account to query. Accepted values: ``current_account`` or
                ``razorpayx_lite``.
            bank_code: First 4 characters of IFSC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Banking balances

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_banking_balances(
                account_type=account_type, bank_code=bank_code, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> XBankingBalancesWithRawResponse:
        return self._with_raw_response


class AsyncXBankingBalances:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXBankingBalancesWithRawResponse(client, server, auth)

    async def fetch_banking_balances(
        self,
        *,
        account_type: AccountType1OrStr | None = None,
        bank_code: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BankingBalancesResponse:
        """Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.

        Args:
            account_type: Type of RazorpayX account to query. Accepted values: ``current_account`` or
                ``razorpayx_lite``.
            bank_code: First 4 characters of IFSC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Banking balances

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_banking_balances(
                account_type=account_type, bank_code=bank_code, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncXBankingBalancesWithRawResponse:
        return self._with_raw_response


class XBankingBalancesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_banking_balances(
        self,
        *,
        account_type: AccountType1OrStr | None = None,
        bank_code: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BankingBalancesResponse, FetchBankingBalancesErrorBody]:
        """Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.

        Args:
            account_type: Type of RazorpayX account to query. Accepted values: ``current_account`` or
                ``razorpayx_lite``.
            bank_code: First 4 characters of IFSC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/banking_balances"),
            query_params=[
                param[AccountType1OrStr | None]("account_type", account_type), param[str | None]("bank_code", bank_code)
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[BankingBalancesResponse],
            error_mapper=fetch_banking_balances_error_mapper,
            request_options=request_options,
        )


class AsyncXBankingBalancesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_banking_balances(
        self,
        *,
        account_type: AccountType1OrStr | None = None,
        bank_code: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BankingBalancesResponse, FetchBankingBalancesErrorBody]:
        """Fetch balance details for RazorpayX current accounts or RazorpayX Lite accounts.

        Args:
            account_type: Type of RazorpayX account to query. Accepted values: ``current_account`` or
                ``razorpayx_lite``.
            bank_code: First 4 characters of IFSC
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/banking_balances"),
            query_params=[
                param[AccountType1OrStr | None]("account_type", account_type), param[str | None]("bank_code", bank_code)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[BankingBalancesResponse],
            error_mapper=fetch_banking_balances_error_mapper,
            request_options=request_options,
        )
