from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account_balance import AsyncAccountBalance
from .apis.api_access import AsyncApiAccess
from .apis.calls import AsyncCalls
from .apis.click2_call import AsyncClick2Call
from .apis.hlr_lookups import AsyncHlrLookups
from .apis.identities import AsyncIdentities
from .apis.inbound_destinations import AsyncInboundDestinations
from .apis.kyc_documents import AsyncKycDocuments
from .apis.numbers_inventory import AsyncNumbersInventory
from .apis.purchases import AsyncPurchases
from .apis.reports import AsyncReports
from .apis.risk_checks import AsyncRiskChecks
from .apis.sip_accounts import AsyncSipAccounts
from .apis.sms_api import AsyncSmsApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseDidLogicClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncDidLogicClient(BaseDidLogicClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "DidLogicClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def api_access(self) -> AsyncApiAccess:
        return AsyncApiAccess(self._raw_client, self._server, self._auth)

    @cached_property
    def account_balance(self) -> AsyncAccountBalance:
        return AsyncAccountBalance(self._raw_client, self._server, self._auth)

    @cached_property
    def calls(self) -> AsyncCalls:
        return AsyncCalls(self._raw_client, self._server, self._auth)

    @cached_property
    def click2_call(self) -> AsyncClick2Call:
        return AsyncClick2Call(self._raw_client, self._server, self._auth)

    @cached_property
    def hlr_lookups(self) -> AsyncHlrLookups:
        return AsyncHlrLookups(self._raw_client, self._server, self._auth)

    @cached_property
    def identities(self) -> AsyncIdentities:
        return AsyncIdentities(self._raw_client, self._server, self._auth)

    @cached_property
    def inbound_destinations(self) -> AsyncInboundDestinations:
        return AsyncInboundDestinations(self._raw_client, self._server, self._auth)

    @cached_property
    def kyc_documents(self) -> AsyncKycDocuments:
        return AsyncKycDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def numbers_inventory(self) -> AsyncNumbersInventory:
        return AsyncNumbersInventory(self._raw_client, self._server, self._auth)

    @cached_property
    def purchases(self) -> AsyncPurchases:
        return AsyncPurchases(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server, self._auth)

    @cached_property
    def risk_checks(self) -> AsyncRiskChecks:
        return AsyncRiskChecks(self._raw_client, self._server, self._auth)

    @cached_property
    def sip_accounts(self) -> AsyncSipAccounts:
        return AsyncSipAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def sms_api(self) -> AsyncSmsApi:
        return AsyncSmsApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncDidLogicClient
