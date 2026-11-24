from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import AsyncAccount
from .apis.agent_rail import AsyncAgentRail
from .apis.api_keys import AsyncApiKeys
from .apis.charts import AsyncCharts
from .apis.data_export import AsyncDataExport
from .apis.episodes import AsyncEpisodes
from .apis.items import AsyncItems
from .apis.knowledge_graph import AsyncKnowledgeGraph
from .apis.libraries import AsyncLibraries
from .apis.persons import AsyncPersons
from .apis.podcasts import AsyncPodcasts
from .apis.search import AsyncSearch
from .apis.system import AsyncSystem
from .apis.workspaces import AsyncWorkspaces
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAudioscrapeClient
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


class AsyncAudioscrapeClient(BaseAudioscrapeClient[AsyncRawClient]):
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
                param[str]("User-Agent", "AudioscrapeClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def api_keys(self) -> AsyncApiKeys:
        return AsyncApiKeys(self._raw_client, self._server, self._auth)

    @cached_property
    def account(self) -> AsyncAccount:
        return AsyncAccount(self._raw_client, self._server, self._auth)

    @cached_property
    def agent_rail(self) -> AsyncAgentRail:
        return AsyncAgentRail(self._raw_client, self._server, self._auth)

    @cached_property
    def charts(self) -> AsyncCharts:
        return AsyncCharts(self._raw_client, self._server, self._auth)

    @cached_property
    def data_export(self) -> AsyncDataExport:
        return AsyncDataExport(self._raw_client, self._server, self._auth)

    @cached_property
    def episodes(self) -> AsyncEpisodes:
        return AsyncEpisodes(self._raw_client, self._server, self._auth)

    @cached_property
    def items(self) -> AsyncItems:
        return AsyncItems(self._raw_client, self._server, self._auth)

    @cached_property
    def knowledge_graph(self) -> AsyncKnowledgeGraph:
        return AsyncKnowledgeGraph(self._raw_client, self._server, self._auth)

    @cached_property
    def libraries(self) -> AsyncLibraries:
        return AsyncLibraries(self._raw_client, self._server, self._auth)

    @cached_property
    def persons(self) -> AsyncPersons:
        return AsyncPersons(self._raw_client, self._server, self._auth)

    @cached_property
    def podcasts(self) -> AsyncPodcasts:
        return AsyncPodcasts(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def system(self) -> AsyncSystem:
        return AsyncSystem(self._raw_client, self._server)

    @cached_property
    def workspaces(self) -> AsyncWorkspaces:
        return AsyncWorkspaces(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAudioscrapeClient
