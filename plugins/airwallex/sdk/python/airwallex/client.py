from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.authentication import Authentication
from .apis.balances import Balances
from .apis.beneficiaries import Beneficiaries
from .apis.customers import Customers
from .apis.payment_intents import PaymentIntents
from .apis.payouts import Payouts
from .apis.refunds import Refunds
from .apis.transfers import Transfers
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAirwallexClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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
from .server.environment import Environment


class AirwallexClient(BaseAirwallexClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
        client_id_header: str | None = None,
        api_key_header: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "AirwallexClient/v1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            client_id_header=(
                ApiKeyHeaderScheme("x-client-id", client_id_header) if client_id_header is not None else no_auth
            ),
            api_key_header=ApiKeyHeaderScheme("x-api-key", api_key_header) if api_key_header is not None else no_auth,
        )

    @cached_property
    def authentication(self) -> Authentication:
        return Authentication(self._raw_client, self._server, self._auth)

    @cached_property
    def balances(self) -> Balances:
        return Balances(self._raw_client, self._server, self._auth)

    @cached_property
    def beneficiaries(self) -> Beneficiaries:
        return Beneficiaries(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> Customers:
        return Customers(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_intents(self) -> PaymentIntents:
        return PaymentIntents(self._raw_client, self._server, self._auth)

    @cached_property
    def payouts(self) -> Payouts:
        return Payouts(self._raw_client, self._server, self._auth)

    @cached_property
    def refunds(self) -> Refunds:
        return Refunds(self._raw_client, self._server, self._auth)

    @cached_property
    def transfers(self) -> Transfers:
        return Transfers(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AirwallexClient
