from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.agents import Agents
from .apis.analytics_experimental import AnalyticsExperimental
from .apis.checkouts import Checkouts
from .apis.contacts import Contacts
from .apis.costs import Costs
from .apis.credits import Credits
from .apis.custom_views_experimental import CustomViewsExperimental
from .apis.customer_groups import CustomerGroups
from .apis.customer_portals import CustomerPortals
from .apis.customers import Customers
from .apis.invoices import Invoices
from .apis.orders import Orders
from .apis.orders_lines import OrdersLines
from .apis.plans import Plans
from .apis.pricing_api import PricingApi
from .apis.products import Products
from .apis.signals import Signals
from .apis.traces import Traces
from .apis.usage import Usage
from .apis.value_models import ValueModels
from .apis.value_receipts import ValueReceipts
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePaidClient
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class PaidClient(BasePaidClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def agents(self) -> Agents:
        return Agents(self._raw_client, self._server)

    @cached_property
    def checkouts(self) -> Checkouts:
        return Checkouts(self._raw_client, self._server)

    @cached_property
    def contacts(self) -> Contacts:
        return Contacts(self._raw_client, self._server)

    @cached_property
    def costs(self) -> Costs:
        return Costs(self._raw_client, self._server)

    @cached_property
    def credits(self) -> Credits:
        return Credits(self._raw_client, self._server)

    @cached_property
    def customer_groups(self) -> CustomerGroups:
        return CustomerGroups(self._raw_client, self._server)

    @cached_property
    def customers(self) -> Customers:
        return Customers(self._raw_client, self._server)

    @cached_property
    def invoices(self) -> Invoices:
        return Invoices(self._raw_client, self._server)

    @cached_property
    def orders(self) -> Orders:
        return Orders(self._raw_client, self._server)

    @cached_property
    def plans(self) -> Plans:
        return Plans(self._raw_client, self._server)

    @cached_property
    def pricing_api(self) -> PricingApi:
        return PricingApi(self._raw_client, self._server)

    @cached_property
    def products(self) -> Products:
        return Products(self._raw_client, self._server)

    @cached_property
    def signals(self) -> Signals:
        return Signals(self._raw_client, self._server)

    @cached_property
    def traces(self) -> Traces:
        return Traces(self._raw_client, self._server)

    @cached_property
    def usage(self) -> Usage:
        return Usage(self._raw_client, self._server)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server)

    @cached_property
    def analytics_experimental(self) -> AnalyticsExperimental:
        return AnalyticsExperimental(self._raw_client, self._server)

    @cached_property
    def custom_views_experimental(self) -> CustomViewsExperimental:
        return CustomViewsExperimental(self._raw_client, self._server)

    @cached_property
    def customer_portals(self) -> CustomerPortals:
        return CustomerPortals(self._raw_client, self._server)

    @cached_property
    def orders_lines(self) -> OrdersLines:
        return OrdersLines(self._raw_client, self._server)

    @cached_property
    def value_models(self) -> ValueModels:
        return ValueModels(self._raw_client, self._server)

    @cached_property
    def value_receipts(self) -> ValueReceipts:
        return ValueReceipts(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = PaidClient
