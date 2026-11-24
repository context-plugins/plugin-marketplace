from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.agents import Agents
from .apis.credentials import Credentials
from .apis.deliveries import Deliveries
from .apis.fillo_management_api import FilloManagementApi
from .apis.forms import Forms
from .apis.insights import Insights
from .apis.integrations import Integrations
from .apis.members import Members
from .apis.respondents import Respondents
from .apis.responses import Responses
from .apis.settings import Settings
from .apis.storage import Storage
from .apis.webhooks_api import WebhooksApi
from .apis.workspace_api import WorkspaceApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFilloClient
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


class FilloClient(BaseFilloClient[RawClient]):
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
                param[str]("User-Agent", "FilloClient/1.0.0 Python"),
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
        return Agents(self._raw_client, self._server, self._auth)

    @cached_property
    def credentials(self) -> Credentials:
        return Credentials(self._raw_client, self._server, self._auth)

    @cached_property
    def deliveries(self) -> Deliveries:
        return Deliveries(self._raw_client, self._server, self._auth)

    @cached_property
    def fillo_management_api(self) -> FilloManagementApi:
        return FilloManagementApi(self._raw_client, self._server)

    @cached_property
    def forms(self) -> Forms:
        return Forms(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server, self._auth)

    @cached_property
    def integrations(self) -> Integrations:
        return Integrations(self._raw_client, self._server, self._auth)

    @cached_property
    def members(self) -> Members:
        return Members(self._raw_client, self._server, self._auth)

    @cached_property
    def respondents(self) -> Respondents:
        return Respondents(self._raw_client, self._server, self._auth)

    @cached_property
    def responses(self) -> Responses:
        return Responses(self._raw_client, self._server, self._auth)

    @cached_property
    def settings(self) -> Settings:
        return Settings(self._raw_client, self._server, self._auth)

    @cached_property
    def storage(self) -> Storage:
        return Storage(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    @cached_property
    def workspace_api(self) -> WorkspaceApi:
        return WorkspaceApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = FilloClient
