from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ai_advanced_search import AiAdvancedSearch
from .apis.contact_points import ContactPoints
from .apis.monitors import Monitors
from .apis.news_stories import NewsStories
from .apis.source_groups import SourceGroups
from .apis.supplemental_endpoints import SupplementalEndpoints
from .apis.utilities import Utilities
from .apis.watchlists import Watchlists
from .apis.wikipedia import Wikipedia
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePerigonClient
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


class PerigonClient(BasePerigonClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "PerigonClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(api_key_auth=BearerAuthScheme(api_key_auth) if api_key_auth is not None else no_auth)

    @cached_property
    def ai_advanced_search(self) -> AiAdvancedSearch:
        return AiAdvancedSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def contact_points(self) -> ContactPoints:
        return ContactPoints(self._raw_client, self._server, self._auth)

    @cached_property
    def monitors(self) -> Monitors:
        return Monitors(self._raw_client, self._server, self._auth)

    @cached_property
    def news_stories(self) -> NewsStories:
        return NewsStories(self._raw_client, self._server, self._auth)

    @cached_property
    def source_groups(self) -> SourceGroups:
        return SourceGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def supplemental_endpoints(self) -> SupplementalEndpoints:
        return SupplementalEndpoints(self._raw_client, self._server, self._auth)

    @cached_property
    def utilities(self) -> Utilities:
        return Utilities(self._raw_client, self._server, self._auth)

    @cached_property
    def watchlists(self) -> Watchlists:
        return Watchlists(self._raw_client, self._server, self._auth)

    @cached_property
    def wikipedia(self) -> Wikipedia:
        return Wikipedia(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = PerigonClient
