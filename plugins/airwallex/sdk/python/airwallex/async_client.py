from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.authentication import AsyncAuthentication
from .apis.balances import AsyncBalances
from .apis.beneficiaries import AsyncBeneficiaries
from .apis.customers import AsyncCustomers
from .apis.payment_intents import AsyncPaymentIntents
from .apis.payouts import AsyncPayouts
from .apis.refunds import AsyncRefunds
from .apis.transfers import AsyncTransfers
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAirwallexClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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
from .server.environment import Environment


class AsyncAirwallexClient(BaseAirwallexClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
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
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
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
        self._auth = AsyncAuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            client_id_header=(
                ApiKeyHeaderScheme("x-client-id", client_id_header) if client_id_header is not None else no_auth
            ),
            api_key_header=ApiKeyHeaderScheme("x-api-key", api_key_header) if api_key_header is not None else no_auth,
        )

    @cached_property
    def authentication(self) -> AsyncAuthentication:
        return AsyncAuthentication(self._raw_client, self._server, self._auth)

    @cached_property
    def balances(self) -> AsyncBalances:
        return AsyncBalances(self._raw_client, self._server, self._auth)

    @cached_property
    def beneficiaries(self) -> AsyncBeneficiaries:
        return AsyncBeneficiaries(self._raw_client, self._server, self._auth)

    @cached_property
    def customers(self) -> AsyncCustomers:
        return AsyncCustomers(self._raw_client, self._server, self._auth)

    @cached_property
    def payment_intents(self) -> AsyncPaymentIntents:
        return AsyncPaymentIntents(self._raw_client, self._server, self._auth)

    @cached_property
    def payouts(self) -> AsyncPayouts:
        return AsyncPayouts(self._raw_client, self._server, self._auth)

    @cached_property
    def refunds(self) -> AsyncRefunds:
        return AsyncRefunds(self._raw_client, self._server, self._auth)

    @cached_property
    def transfers(self) -> AsyncTransfers:
        return AsyncTransfers(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAirwallexClient
