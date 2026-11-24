from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.calendar import Calendar
from .apis.coverage_api import CoverageApi
from .apis.news import News
from .apis.radar import Radar
from .apis.stories import Stories
from .apis.symbols import Symbols
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAlphaAiClient
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


class AlphaAiClient(BaseAlphaAiClient[RawClient]):
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
                param[str]("User-Agent", "AlphaAiClient/1.52.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.52.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(api_key=BearerAuthScheme(api_key) if api_key is not None else no_auth)

    @cached_property
    def calendar(self) -> Calendar:
        return Calendar(self._raw_client, self._server, self._auth)

    @cached_property
    def coverage_api(self) -> CoverageApi:
        return CoverageApi(self._raw_client, self._server, self._auth)

    @cached_property
    def news(self) -> News:
        return News(self._raw_client, self._server, self._auth)

    @cached_property
    def radar(self) -> Radar:
        return Radar(self._raw_client, self._server, self._auth)

    @cached_property
    def stories(self) -> Stories:
        return Stories(self._raw_client, self._server, self._auth)

    @cached_property
    def symbols(self) -> Symbols:
        return Symbols(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AlphaAiClient
