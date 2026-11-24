from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.ad_accounts import AdAccounts
from .apis.ad_creatives import AdCreatives
from .apis.ad_images import AdImages
from .apis.ad_sets import AdSets
from .apis.ads import Ads
from .apis.campaigns import Campaigns
from .apis.comments_api import CommentsApi
from .apis.custom_audiences import CustomAudiences
from .apis.insights import Insights
from .apis.page_insights import PageInsights
from .apis.pages import Pages
from .apis.photos import Photos
from .apis.posts import Posts
from .apis.videos import Videos
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseFacebookBusinessManagerClient
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


class FacebookBusinessManagerClient(BaseFacebookBusinessManagerClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "FacebookBusinessManagerClient/25.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "25.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def ad_accounts(self) -> AdAccounts:
        return AdAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def ad_creatives(self) -> AdCreatives:
        return AdCreatives(self._raw_client, self._server, self._auth)

    @cached_property
    def ad_images(self) -> AdImages:
        return AdImages(self._raw_client, self._server, self._auth)

    @cached_property
    def ad_sets(self) -> AdSets:
        return AdSets(self._raw_client, self._server, self._auth)

    @cached_property
    def ads(self) -> Ads:
        return Ads(self._raw_client, self._server, self._auth)

    @cached_property
    def campaigns(self) -> Campaigns:
        return Campaigns(self._raw_client, self._server, self._auth)

    @cached_property
    def comments_api(self) -> CommentsApi:
        return CommentsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_audiences(self) -> CustomAudiences:
        return CustomAudiences(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server, self._auth)

    @cached_property
    def page_insights(self) -> PageInsights:
        return PageInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def pages(self) -> Pages:
        return Pages(self._raw_client, self._server, self._auth)

    @cached_property
    def photos(self) -> Photos:
        return Photos(self._raw_client, self._server, self._auth)

    @cached_property
    def posts(self) -> Posts:
        return Posts(self._raw_client, self._server, self._auth)

    @cached_property
    def videos(self) -> Videos:
        return Videos(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = FacebookBusinessManagerClient
