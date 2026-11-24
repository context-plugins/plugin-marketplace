from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aliases import Aliases
from .apis.bots import Bots
from .apis.builtins import Builtins
from .apis.channels import Channels
from .apis.createuploadurl import Createuploadurl
from .apis.exports import Exports
from .apis.imports import Imports
from .apis.migrations import Migrations
from .apis.operations import Operations
from .apis.policy import Policy
from .apis.tags import Tags
from .apis.testexecutions import Testexecutions
from .apis.testsetdiscrepancy import Testsetdiscrepancy
from .apis.testsetgenerations import Testsetgenerations
from .apis.testsets import Testsets
from .apis.versions import Versions
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonLexClient
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AmazonLexClient(BaseAmazonLexClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        sigv4: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def aliases(self) -> Aliases:
        return Aliases(self._raw_client, self._server, self._auth)

    @cached_property
    def bots(self) -> Bots:
        return Bots(self._raw_client, self._server, self._auth)

    @cached_property
    def builtins(self) -> Builtins:
        return Builtins(self._raw_client, self._server, self._auth)

    @cached_property
    def channels(self) -> Channels:
        return Channels(self._raw_client, self._server, self._auth)

    @cached_property
    def createuploadurl(self) -> Createuploadurl:
        return Createuploadurl(self._raw_client, self._server, self._auth)

    @cached_property
    def exports(self) -> Exports:
        return Exports(self._raw_client, self._server, self._auth)

    @cached_property
    def imports(self) -> Imports:
        return Imports(self._raw_client, self._server, self._auth)

    @cached_property
    def migrations(self) -> Migrations:
        return Migrations(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> Operations:
        return Operations(self._raw_client, self._server, self._auth)

    @cached_property
    def policy(self) -> Policy:
        return Policy(self._raw_client, self._server, self._auth)

    @cached_property
    def tags(self) -> Tags:
        return Tags(self._raw_client, self._server, self._auth)

    @cached_property
    def testexecutions(self) -> Testexecutions:
        return Testexecutions(self._raw_client, self._server, self._auth)

    @cached_property
    def testsetdiscrepancy(self) -> Testsetdiscrepancy:
        return Testsetdiscrepancy(self._raw_client, self._server, self._auth)

    @cached_property
    def testsetgenerations(self) -> Testsetgenerations:
        return Testsetgenerations(self._raw_client, self._server, self._auth)

    @cached_property
    def testsets(self) -> Testsets:
        return Testsets(self._raw_client, self._server, self._auth)

    @cached_property
    def versions(self) -> Versions:
        return Versions(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AmazonLexClient
