from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.chat_api_beta import AsyncChatApiBeta
from .apis.extract import AsyncExtract
from .apis.find_all import AsyncFindAll
from .apis.memory import AsyncMemory
from .apis.monitor import AsyncMonitor
from .apis.responses_api import AsyncResponsesApi
from .apis.search import AsyncSearch
from .apis.tasks import AsyncTasks
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseParallelClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncParallelClient(BaseParallelClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_auth: str | None = None,
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
                param[str]("User-Agent", "ParallelClient/0.1.2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("x-api-key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def chat_api_beta(self) -> AsyncChatApiBeta:
        return AsyncChatApiBeta(self._raw_client, self._server, self._auth)

    @cached_property
    def extract(self) -> AsyncExtract:
        return AsyncExtract(self._raw_client, self._server, self._auth)

    @cached_property
    def find_all(self) -> AsyncFindAll:
        return AsyncFindAll(self._raw_client, self._server, self._auth)

    @cached_property
    def memory(self) -> AsyncMemory:
        return AsyncMemory(self._raw_client, self._server, self._auth)

    @cached_property
    def monitor(self) -> AsyncMonitor:
        return AsyncMonitor(self._raw_client, self._server, self._auth)

    @cached_property
    def responses_api(self) -> AsyncResponsesApi:
        return AsyncResponsesApi(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def tasks(self) -> AsyncTasks:
        return AsyncTasks(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncParallelClient
