from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aliases import AsyncAliases
from .apis.bots import AsyncBots
from .apis.builtins import AsyncBuiltins
from .apis.channels import AsyncChannels
from .apis.createuploadurl import AsyncCreateuploadurl
from .apis.exports import AsyncExports
from .apis.imports import AsyncImports
from .apis.migrations import AsyncMigrations
from .apis.operations import AsyncOperations
from .apis.policy import AsyncPolicy
from .apis.tags import AsyncTags
from .apis.testexecutions import AsyncTestexecutions
from .apis.testsetdiscrepancy import AsyncTestsetdiscrepancy
from .apis.testsetgenerations import AsyncTestsetgenerations
from .apis.testsets import AsyncTestsets
from .apis.versions import AsyncVersions
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonLexClient
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncAmazonLexClient(BaseAmazonLexClient[AsyncRawClient]):
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
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonLexClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth
        )

    @cached_property
    def aliases(self) -> AsyncAliases:
        return AsyncAliases(self._raw_client, self._server, self._auth)

    @cached_property
    def bots(self) -> AsyncBots:
        return AsyncBots(self._raw_client, self._server, self._auth)

    @cached_property
    def builtins(self) -> AsyncBuiltins:
        return AsyncBuiltins(self._raw_client, self._server, self._auth)

    @cached_property
    def channels(self) -> AsyncChannels:
        return AsyncChannels(self._raw_client, self._server, self._auth)

    @cached_property
    def createuploadurl(self) -> AsyncCreateuploadurl:
        return AsyncCreateuploadurl(self._raw_client, self._server, self._auth)

    @cached_property
    def exports(self) -> AsyncExports:
        return AsyncExports(self._raw_client, self._server, self._auth)

    @cached_property
    def imports(self) -> AsyncImports:
        return AsyncImports(self._raw_client, self._server, self._auth)

    @cached_property
    def migrations(self) -> AsyncMigrations:
        return AsyncMigrations(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def policy(self) -> AsyncPolicy:
        return AsyncPolicy(self._raw_client, self._server, self._auth)

    @cached_property
    def tags(self) -> AsyncTags:
        return AsyncTags(self._raw_client, self._server, self._auth)

    @cached_property
    def testexecutions(self) -> AsyncTestexecutions:
        return AsyncTestexecutions(self._raw_client, self._server, self._auth)

    @cached_property
    def testsetdiscrepancy(self) -> AsyncTestsetdiscrepancy:
        return AsyncTestsetdiscrepancy(self._raw_client, self._server, self._auth)

    @cached_property
    def testsetgenerations(self) -> AsyncTestsetgenerations:
        return AsyncTestsetgenerations(self._raw_client, self._server, self._auth)

    @cached_property
    def testsets(self) -> AsyncTestsets:
        return AsyncTestsets(self._raw_client, self._server, self._auth)

    @cached_property
    def versions(self) -> AsyncVersions:
        return AsyncVersions(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonLexClient
