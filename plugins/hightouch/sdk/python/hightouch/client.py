from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.campaigns import Campaigns
from .apis.decision_engine import DecisionEngine
from .apis.destinations import Destinations
from .apis.events import Events
from .apis.id_graphs import IdGraphs
from .apis.idr import Idr
from .apis.models_api import ModelsApi
from .apis.signups import Signups
from .apis.sources import Sources
from .apis.sync_sequences import SyncSequences
from .apis.sync_templates import SyncTemplates
from .apis.syncs import Syncs
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseHightouchClient
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


class HightouchClient(BaseHightouchClient[RawClient]):
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
                param[str]("User-Agent", "HightouchClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def campaigns(self) -> Campaigns:
        return Campaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def decision_engine(self) -> DecisionEngine:
        return DecisionEngine(self._raw_client, self._server, self._auth)

    @cached_property
    def destinations(self) -> Destinations:
        return Destinations(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def id_graphs(self) -> IdGraphs:
        return IdGraphs(self._raw_client, self._server, self._auth)

    @cached_property
    def idr(self) -> Idr:
        return Idr(self._raw_client, self._server, self._auth)

    @cached_property
    def models_api(self) -> ModelsApi:
        return ModelsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def signups(self) -> Signups:
        return Signups(self._raw_client, self._server, self._auth)

    @cached_property
    def sources(self) -> Sources:
        return Sources(self._raw_client, self._server, self._auth)

    @cached_property
    def sync_sequences(self) -> SyncSequences:
        return SyncSequences(self._raw_client, self._server, self._auth)

    @cached_property
    def sync_templates(self) -> SyncTemplates:
        return SyncTemplates(self._raw_client, self._server, self._auth)

    @cached_property
    def syncs(self) -> Syncs:
        return Syncs(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = HightouchClient
