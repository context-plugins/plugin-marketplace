from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.connections import Connections
from .apis.locations_api import LocationsApi
from .apis.platforms import Platforms
from .apis.replies import Replies
from .apis.reviews import Reviews
from .apis.stats_api import StatsApi
from .apis.usage_api import UsageApi
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePrismaReviewsClient
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


class PrismaReviewsClient(BasePrismaReviewsClient[RawClient]):
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
                param[str]("User-Agent", "PrismaReviewsClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(api_key=BearerAuthScheme(api_key) if api_key is not None else no_auth)

    @cached_property
    def connections(self) -> Connections:
        return Connections(self._raw_client, self._server, self._auth)

    @cached_property
    def locations_api(self) -> LocationsApi:
        return LocationsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def platforms(self) -> Platforms:
        return Platforms(self._raw_client, self._server, self._auth)

    @cached_property
    def replies(self) -> Replies:
        return Replies(self._raw_client, self._server, self._auth)

    @cached_property
    def reviews(self) -> Reviews:
        return Reviews(self._raw_client, self._server, self._auth)

    @cached_property
    def stats_api(self) -> StatsApi:
        return StatsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def usage_api(self) -> UsageApi:
        return UsageApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = PrismaReviewsClient
