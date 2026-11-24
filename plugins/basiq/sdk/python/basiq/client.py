from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts_api import AccountsApi
from .apis.analytics import Analytics
from .apis.auth_links import AuthLinks
from .apis.authentication import Authentication
from .apis.connections import Connections
from .apis.connectors import Connectors
from .apis.consents import Consents
from .apis.enrich_api import EnrichApi
from .apis.events import Events
from .apis.expenses import Expenses
from .apis.identities import Identities
from .apis.income_api import IncomeApi
from .apis.insights import Insights
from .apis.jobs import Jobs
from .apis.payees import Payees
from .apis.reports import Reports
from .apis.statements import Statements
from .apis.transactions import Transactions
from .apis.users import Users
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBasiqClient
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


class BasiqClient(BaseBasiqClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key: str | None = None,
        services_token: str | None = None,
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
                param[str]("User-Agent", "BasiqClient/3.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key=ApiKeyHeaderScheme("Authorization", api_key) if api_key is not None else no_auth,
            services_token=BearerAuthScheme(services_token) if services_token is not None else no_auth,
        )

    @cached_property
    def accounts_api(self) -> AccountsApi:
        return AccountsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> Analytics:
        return Analytics(self._raw_client, self._server, self._auth)

    @cached_property
    def auth_links(self) -> AuthLinks:
        return AuthLinks(self._raw_client, self._server, self._auth)

    @cached_property
    def authentication(self) -> Authentication:
        return Authentication(self._raw_client, self._server, self._auth)

    @cached_property
    def connections(self) -> Connections:
        return Connections(self._raw_client, self._server, self._auth)

    @cached_property
    def connectors(self) -> Connectors:
        return Connectors(self._raw_client, self._server, self._auth)

    @cached_property
    def consents(self) -> Consents:
        return Consents(self._raw_client, self._server, self._auth)

    @cached_property
    def enrich_api(self) -> EnrichApi:
        return EnrichApi(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def expenses(self) -> Expenses:
        return Expenses(self._raw_client, self._server, self._auth)

    @cached_property
    def identities(self) -> Identities:
        return Identities(self._raw_client, self._server, self._auth)

    @cached_property
    def income_api(self) -> IncomeApi:
        return IncomeApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs(self) -> Jobs:
        return Jobs(self._raw_client, self._server, self._auth)

    @cached_property
    def payees(self) -> Payees:
        return Payees(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server, self._auth)

    @cached_property
    def statements(self) -> Statements:
        return Statements(self._raw_client, self._server, self._auth)

    @cached_property
    def transactions(self) -> Transactions:
        return Transactions(self._raw_client, self._server, self._auth)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BasiqClient
