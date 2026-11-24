from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.chat_api_beta import ChatApiBeta
from .apis.extract import Extract
from .apis.find_all import FindAll
from .apis.memory import Memory
from .apis.monitor import Monitor
from .apis.responses_api import ResponsesApi
from .apis.search import Search
from .apis.tasks import Tasks
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseParallelClient
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


class ParallelClient(BaseParallelClient[RawClient]):
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
                param[str]("User-Agent", "ParallelClient/0.1.2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("x-api-key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def chat_api_beta(self) -> ChatApiBeta:
        return ChatApiBeta(self._raw_client, self._server, self._auth)

    @cached_property
    def extract(self) -> Extract:
        return Extract(self._raw_client, self._server, self._auth)

    @cached_property
    def find_all(self) -> FindAll:
        return FindAll(self._raw_client, self._server, self._auth)

    @cached_property
    def memory(self) -> Memory:
        return Memory(self._raw_client, self._server, self._auth)

    @cached_property
    def monitor(self) -> Monitor:
        return Monitor(self._raw_client, self._server, self._auth)

    @cached_property
    def responses_api(self) -> ResponsesApi:
        return ResponsesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def tasks(self) -> Tasks:
        return Tasks(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = ParallelClient
