from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.agents import AsyncAgents
from .apis.analytics_experimental import AsyncAnalyticsExperimental
from .apis.checkouts import AsyncCheckouts
from .apis.contacts import AsyncContacts
from .apis.costs import AsyncCosts
from .apis.credits import AsyncCredits
from .apis.custom_views_experimental import AsyncCustomViewsExperimental
from .apis.customer_groups import AsyncCustomerGroups
from .apis.customer_portals import AsyncCustomerPortals
from .apis.customers import AsyncCustomers
from .apis.invoices import AsyncInvoices
from .apis.orders import AsyncOrders
from .apis.orders_lines import AsyncOrdersLines
from .apis.plans import AsyncPlans
from .apis.pricing_api import AsyncPricingApi
from .apis.products import AsyncProducts
from .apis.signals import AsyncSignals
from .apis.traces import AsyncTraces
from .apis.usage import AsyncUsage
from .apis.value_models import AsyncValueModels
from .apis.value_receipts import AsyncValueReceipts
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePaidClient
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncPaidClient(BasePaidClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
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
                param[str]("User-Agent", "PaidClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def agents(self) -> AsyncAgents:
        return AsyncAgents(self._raw_client, self._server)

    @cached_property
    def checkouts(self) -> AsyncCheckouts:
        return AsyncCheckouts(self._raw_client, self._server)

    @cached_property
    def contacts(self) -> AsyncContacts:
        return AsyncContacts(self._raw_client, self._server)

    @cached_property
    def costs(self) -> AsyncCosts:
        return AsyncCosts(self._raw_client, self._server)

    @cached_property
    def credits(self) -> AsyncCredits:
        return AsyncCredits(self._raw_client, self._server)

    @cached_property
    def customer_groups(self) -> AsyncCustomerGroups:
        return AsyncCustomerGroups(self._raw_client, self._server)

    @cached_property
    def customers(self) -> AsyncCustomers:
        return AsyncCustomers(self._raw_client, self._server)

    @cached_property
    def invoices(self) -> AsyncInvoices:
        return AsyncInvoices(self._raw_client, self._server)

    @cached_property
    def orders(self) -> AsyncOrders:
        return AsyncOrders(self._raw_client, self._server)

    @cached_property
    def plans(self) -> AsyncPlans:
        return AsyncPlans(self._raw_client, self._server)

    @cached_property
    def pricing_api(self) -> AsyncPricingApi:
        return AsyncPricingApi(self._raw_client, self._server)

    @cached_property
    def products(self) -> AsyncProducts:
        return AsyncProducts(self._raw_client, self._server)

    @cached_property
    def signals(self) -> AsyncSignals:
        return AsyncSignals(self._raw_client, self._server)

    @cached_property
    def traces(self) -> AsyncTraces:
        return AsyncTraces(self._raw_client, self._server)

    @cached_property
    def usage(self) -> AsyncUsage:
        return AsyncUsage(self._raw_client, self._server)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server)

    @cached_property
    def analytics_experimental(self) -> AsyncAnalyticsExperimental:
        return AsyncAnalyticsExperimental(self._raw_client, self._server)

    @cached_property
    def custom_views_experimental(self) -> AsyncCustomViewsExperimental:
        return AsyncCustomViewsExperimental(self._raw_client, self._server)

    @cached_property
    def customer_portals(self) -> AsyncCustomerPortals:
        return AsyncCustomerPortals(self._raw_client, self._server)

    @cached_property
    def orders_lines(self) -> AsyncOrdersLines:
        return AsyncOrdersLines(self._raw_client, self._server)

    @cached_property
    def value_models(self) -> AsyncValueModels:
        return AsyncValueModels(self._raw_client, self._server)

    @cached_property
    def value_receipts(self) -> AsyncValueReceipts:
        return AsyncValueReceipts(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncPaidClient
