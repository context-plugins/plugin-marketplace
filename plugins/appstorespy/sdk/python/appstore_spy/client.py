from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.app_store import AppStore
from .apis.events import Events
from .apis.google_play import GooglePlay
from .apis.jobs import Jobs
from .apis.search_filter_v2 import SearchFilterV2
from .apis.suggestions import Suggestions
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAppstoreSpyClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class AppstoreSpyClient(BaseAppstoreSpyClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_header: str | None = None,
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
                param[str]("User-Agent", "AppstoreSpyClient/1.5.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.5.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_header=ApiKeyHeaderScheme("API-KEY", api_key_header) if api_key_header is not None else no_auth
        )

    @cached_property
    def app_store(self) -> AppStore:
        return AppStore(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def google_play(self) -> GooglePlay:
        return GooglePlay(self._raw_client, self._server, self._auth)

    @cached_property
    def jobs(self) -> Jobs:
        return Jobs(self._raw_client, self._server, self._auth)

    @cached_property
    def search_filter_v2(self) -> SearchFilterV2:
        return SearchFilterV2(self._raw_client, self._server, self._auth)

    @cached_property
    def suggestions(self) -> Suggestions:
        return Suggestions(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AppstoreSpyClient
