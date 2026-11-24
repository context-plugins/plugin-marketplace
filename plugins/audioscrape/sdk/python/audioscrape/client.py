from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import Account
from .apis.agent_rail import AgentRail
from .apis.api_keys import ApiKeys
from .apis.charts import Charts
from .apis.data_export import DataExport
from .apis.episodes import Episodes
from .apis.items import Items
from .apis.knowledge_graph import KnowledgeGraph
from .apis.libraries import Libraries
from .apis.persons import Persons
from .apis.podcasts import Podcasts
from .apis.search import Search
from .apis.system import System
from .apis.workspaces import Workspaces
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAudioscrapeClient
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


class AudioscrapeClient(BaseAudioscrapeClient[RawClient]):
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
                param[str]("User-Agent", "AudioscrapeClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def api_keys(self) -> ApiKeys:
        return ApiKeys(self._raw_client, self._server, self._auth)

    @cached_property
    def account(self) -> Account:
        return Account(self._raw_client, self._server, self._auth)

    @cached_property
    def agent_rail(self) -> AgentRail:
        return AgentRail(self._raw_client, self._server, self._auth)

    @cached_property
    def charts(self) -> Charts:
        return Charts(self._raw_client, self._server, self._auth)

    @cached_property
    def data_export(self) -> DataExport:
        return DataExport(self._raw_client, self._server, self._auth)

    @cached_property
    def episodes(self) -> Episodes:
        return Episodes(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> Items:
        return Items(self._raw_client, self._server, self._auth)

    @cached_property
    def knowledge_graph(self) -> KnowledgeGraph:
        return KnowledgeGraph(self._raw_client, self._server, self._auth)

    @cached_property
    def libraries(self) -> Libraries:
        return Libraries(self._raw_client, self._server, self._auth)

    @cached_property
    def persons(self) -> Persons:
        return Persons(self._raw_client, self._server, self._auth)

    @cached_property
    def podcasts(self) -> Podcasts:
        return Podcasts(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def system(self) -> System:
        return System(self._raw_client, self._server)

    @cached_property
    def workspaces(self) -> Workspaces:
        return Workspaces(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AudioscrapeClient
