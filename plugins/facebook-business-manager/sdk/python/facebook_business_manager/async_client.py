from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ad_accounts import AsyncAdAccounts
from .apis.ad_creatives import AsyncAdCreatives
from .apis.ad_images import AsyncAdImages
from .apis.ad_sets import AsyncAdSets
from .apis.ads import AsyncAds
from .apis.campaigns import AsyncCampaigns
from .apis.comments_api import AsyncCommentsApi
from .apis.custom_audiences import AsyncCustomAudiences
from .apis.insights import AsyncInsights
from .apis.page_insights import AsyncPageInsights
from .apis.pages import AsyncPages
from .apis.photos import AsyncPhotos
from .apis.posts import AsyncPosts
from .apis.videos import AsyncVideos
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFacebookBusinessManagerClient
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


class AsyncFacebookBusinessManagerClient(BaseFacebookBusinessManagerClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "FacebookBusinessManagerClient/25.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "25.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def ad_accounts(self) -> AsyncAdAccounts:
        return AsyncAdAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def ad_creatives(self) -> AsyncAdCreatives:
        return AsyncAdCreatives(self._raw_client, self._server, self._auth)

    @cached_property
    def ad_images(self) -> AsyncAdImages:
        return AsyncAdImages(self._raw_client, self._server, self._auth)

    @cached_property
    def ad_sets(self) -> AsyncAdSets:
        return AsyncAdSets(self._raw_client, self._server, self._auth)

    @cached_property
    def ads(self) -> AsyncAds:
        return AsyncAds(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns(self) -> AsyncCampaigns:
        return AsyncCampaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def comments_api(self) -> AsyncCommentsApi:
        return AsyncCommentsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_audiences(self) -> AsyncCustomAudiences:
        return AsyncCustomAudiences(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> AsyncInsights:
        return AsyncInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def page_insights(self) -> AsyncPageInsights:
        return AsyncPageInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def pages(self) -> AsyncPages:
        return AsyncPages(self._raw_client, self._server, self._auth)

    @cached_property
    def photos(self) -> AsyncPhotos:
        return AsyncPhotos(self._raw_client, self._server, self._auth)

    @cached_property
    def posts(self) -> AsyncPosts:
        return AsyncPosts(self._raw_client, self._server, self._auth)

    @cached_property
    def videos(self) -> AsyncVideos:
        return AsyncVideos(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncFacebookBusinessManagerClient
