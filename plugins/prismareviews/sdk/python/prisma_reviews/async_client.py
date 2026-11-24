from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.connections import AsyncConnections
from .apis.locations_api import AsyncLocationsApi
from .apis.platforms import AsyncPlatforms
from .apis.replies import AsyncReplies
from .apis.reviews import AsyncReviews
from .apis.stats_api import AsyncStatsApi
from .apis.usage_api import AsyncUsageApi
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BasePrismaReviewsClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncPrismaReviewsClient(BasePrismaReviewsClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
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
                param[str]("User-Agent", "PrismaReviewsClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(api_key=BearerAuthScheme(api_key) if api_key is not None else no_auth)

    @cached_property
    def connections(self) -> AsyncConnections:
        return AsyncConnections(self._raw_client, self._server, self._auth)

    @cached_property
    def locations_api(self) -> AsyncLocationsApi:
        return AsyncLocationsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def platforms(self) -> AsyncPlatforms:
        return AsyncPlatforms(self._raw_client, self._server, self._auth)

    @cached_property
    def replies(self) -> AsyncReplies:
        return AsyncReplies(self._raw_client, self._server, self._auth)

    @cached_property
    def reviews(self) -> AsyncReviews:
        return AsyncReviews(self._raw_client, self._server, self._auth)

    @cached_property
    def stats_api(self) -> AsyncStatsApi:
        return AsyncStatsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def usage_api(self) -> AsyncUsageApi:
        return AsyncUsageApi(self._raw_client, self._server, self._auth)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncPrismaReviewsClient
