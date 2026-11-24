from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account_balance import AccountBalance
from .apis.api_access import ApiAccess
from .apis.calls import Calls
from .apis.click2_call import Click2Call
from .apis.hlr_lookups import HlrLookups
from .apis.identities import Identities
from .apis.inbound_destinations import InboundDestinations
from .apis.kyc_documents import KycDocuments
from .apis.numbers_inventory import NumbersInventory
from .apis.purchases import Purchases
from .apis.reports import Reports
from .apis.risk_checks import RiskChecks
from .apis.sip_accounts import SipAccounts
from .apis.sms_api import SmsApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseDidLogicClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BearerAuthScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class DidLogicClient(BaseDidLogicClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def api_access(self) -> ApiAccess:
        return ApiAccess(self._raw_client, self._server, self._auth)

    @cached_property
    def account_balance(self) -> AccountBalance:
        return AccountBalance(self._raw_client, self._server, self._auth)

    @cached_property
    def calls(self) -> Calls:
        return Calls(self._raw_client, self._server, self._auth)

    @cached_property
    def click2_call(self) -> Click2Call:
        return Click2Call(self._raw_client, self._server, self._auth)

    @cached_property
    def hlr_lookups(self) -> HlrLookups:
        return HlrLookups(self._raw_client, self._server, self._auth)

    @cached_property
    def identities(self) -> Identities:
        return Identities(self._raw_client, self._server, self._auth)

    @cached_property
    def inbound_destinations(self) -> InboundDestinations:
        return InboundDestinations(self._raw_client, self._server, self._auth)

    @cached_property
    def kyc_documents(self) -> KycDocuments:
        return KycDocuments(self._raw_client, self._server, self._auth)

    @cached_property
    def numbers_inventory(self) -> NumbersInventory:
        return NumbersInventory(self._raw_client, self._server, self._auth)

    @cached_property
    def purchases(self) -> Purchases:
        return Purchases(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server, self._auth)

    @cached_property
    def risk_checks(self) -> RiskChecks:
        return RiskChecks(self._raw_client, self._server, self._auth)

    @cached_property
    def sip_accounts(self) -> SipAccounts:
        return SipAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def sms_api(self) -> SmsApi:
        return SmsApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = DidLogicClient
