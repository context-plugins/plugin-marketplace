from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analytics import AsyncAnalytics
from .apis.ap_is import AsyncApIs
from .apis.api_keys import AsyncApiKeys
from .apis.branches import AsyncBranches
from .apis.categories import AsyncCategories
from .apis.changelog import AsyncChangelog
from .apis.custom_pages import AsyncCustomPages
from .apis.guides import AsyncGuides
from .apis.images import AsyncImages
from .apis.metrics import AsyncMetrics
from .apis.recipes import AsyncRecipes
from .apis.search import AsyncSearch
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseReadMeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncReadMeClient(BaseReadMeClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        basic_auth: BasicAuthCredentialsOrDict | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "ReadMeClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def api_keys(self) -> AsyncApiKeys:
        return AsyncApiKeys(self._raw_client, self._server, self._auth)

    @cached_property
    def ap_is(self) -> AsyncApIs:
        return AsyncApIs(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> AsyncAnalytics:
        return AsyncAnalytics(self._raw_client, self._server, self._auth)

    @cached_property
    def branches(self) -> AsyncBranches:
        return AsyncBranches(self._raw_client, self._server, self._auth)

    @cached_property
    def categories(self) -> AsyncCategories:
        return AsyncCategories(self._raw_client, self._server, self._auth)

    @cached_property
    def changelog(self) -> AsyncChangelog:
        return AsyncChangelog(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_pages(self) -> AsyncCustomPages:
        return AsyncCustomPages(self._raw_client, self._server, self._auth)

    @cached_property
    def guides(self) -> AsyncGuides:
        return AsyncGuides(self._raw_client, self._server, self._auth)

    @cached_property
    def images(self) -> AsyncImages:
        return AsyncImages(self._raw_client, self._server, self._auth)

    @cached_property
    def metrics(self) -> AsyncMetrics:
        return AsyncMetrics(self._raw_client, self._server, self._auth)

    @cached_property
    def recipes(self) -> AsyncRecipes:
        return AsyncRecipes(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> AsyncSearch:
        return AsyncSearch(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncReadMeClient
