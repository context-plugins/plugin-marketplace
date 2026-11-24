from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.campaigns import AsyncCampaigns
from .apis.decision_engine import AsyncDecisionEngine
from .apis.destinations import AsyncDestinations
from .apis.events import AsyncEvents
from .apis.id_graphs import AsyncIdGraphs
from .apis.idr import AsyncIdr
from .apis.models_api import AsyncModelsApi
from .apis.signups import AsyncSignups
from .apis.sources import AsyncSources
from .apis.sync_sequences import AsyncSyncSequences
from .apis.sync_templates import AsyncSyncTemplates
from .apis.syncs import AsyncSyncs
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseHightouchClient
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


class AsyncHightouchClient(BaseHightouchClient[AsyncRawClient]):
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
                param[str]("User-Agent", "HightouchClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def campaigns(self) -> AsyncCampaigns:
        return AsyncCampaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def decision_engine(self) -> AsyncDecisionEngine:
        return AsyncDecisionEngine(self._raw_client, self._server, self._auth)

    @cached_property
    def destinations(self) -> AsyncDestinations:
        return AsyncDestinations(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def id_graphs(self) -> AsyncIdGraphs:
        return AsyncIdGraphs(self._raw_client, self._server, self._auth)

    @cached_property
    def idr(self) -> AsyncIdr:
        return AsyncIdr(self._raw_client, self._server, self._auth)

    @cached_property
    def models_api(self) -> AsyncModelsApi:
        return AsyncModelsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def signups(self) -> AsyncSignups:
        return AsyncSignups(self._raw_client, self._server, self._auth)

    @cached_property
    def sources(self) -> AsyncSources:
        return AsyncSources(self._raw_client, self._server, self._auth)

    @cached_property
    def sync_sequences(self) -> AsyncSyncSequences:
        return AsyncSyncSequences(self._raw_client, self._server, self._auth)

    @cached_property
    def sync_templates(self) -> AsyncSyncTemplates:
        return AsyncSyncTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def syncs(self) -> AsyncSyncs:
        return AsyncSyncs(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncHightouchClient
