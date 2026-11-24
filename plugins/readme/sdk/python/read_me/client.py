from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analytics import Analytics
from .apis.ap_is import ApIs
from .apis.api_keys import ApiKeys
from .apis.branches import Branches
from .apis.categories import Categories
from .apis.changelog import Changelog
from .apis.custom_pages import CustomPages
from .apis.guides import Guides
from .apis.images import Images
from .apis.metrics import Metrics
from .apis.recipes import Recipes
from .apis.search import Search
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseReadMeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BasicAuthCredentials,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class ReadMeClient(BaseReadMeClient[RawClient]):
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
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            basic_auth=BasicAuthScheme(BasicAuthCredentials.coerce(basic_auth)) if basic_auth is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def api_keys(self) -> ApiKeys:
        return ApiKeys(self._raw_client, self._server, self._auth)

    @cached_property
    def ap_is(self) -> ApIs:
        return ApIs(self._raw_client, self._server, self._auth)

    @cached_property
    def analytics(self) -> Analytics:
        return Analytics(self._raw_client, self._server, self._auth)

    @cached_property
    def branches(self) -> Branches:
        return Branches(self._raw_client, self._server, self._auth)

    @cached_property
    def categories(self) -> Categories:
        return Categories(self._raw_client, self._server, self._auth)

    @cached_property
    def changelog(self) -> Changelog:
        return Changelog(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_pages(self) -> CustomPages:
        return CustomPages(self._raw_client, self._server, self._auth)

    @cached_property
    def guides(self) -> Guides:
        return Guides(self._raw_client, self._server, self._auth)

    @cached_property
    def images(self) -> Images:
        return Images(self._raw_client, self._server, self._auth)

    @cached_property
    def metrics(self) -> Metrics:
        return Metrics(self._raw_client, self._server, self._auth)

    @cached_property
    def recipes(self) -> Recipes:
        return Recipes(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = ReadMeClient
