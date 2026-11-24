from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analytics import AsyncAnalytics
from .apis.app import AsyncApp
from .apis.automation import AsyncAutomation
from .apis.comment_api import AsyncCommentApi
from .apis.conversation_api import AsyncConversationApi
from .apis.credit import AsyncCredit
from .apis.misc import AsyncMisc
from .apis.organization_api import AsyncOrganizationApi
from .apis.post_api import AsyncPostApi
from .apis.post_csv import AsyncPostCsv
from .apis.post_import import AsyncPostImport
from .apis.social_account_api import AsyncSocialAccountApi
from .apis.team_api import AsyncTeamApi
from .apis.upload_api import AsyncUploadApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBundleSocialClient
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


class AsyncBundleSocialClient(BaseBundleSocialClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
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
                param[str]("User-Agent", "BundleSocialClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("x-api-key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def analytics(self) -> AsyncAnalytics:
        return AsyncAnalytics(self._raw_client, self._server, self._auth)

    @cached_property
    def app(self) -> AsyncApp:
        return AsyncApp(self._raw_client, self._server, self._auth)

    @cached_property
    def automation(self) -> AsyncAutomation:
        return AsyncAutomation(self._raw_client, self._server, self._auth)

    @cached_property
    def comment_api(self) -> AsyncCommentApi:
        return AsyncCommentApi(self._raw_client, self._server, self._auth)

    @cached_property
    def credit(self) -> AsyncCredit:
        return AsyncCredit(self._raw_client, self._server, self._auth)

    @cached_property
    def misc(self) -> AsyncMisc:
        return AsyncMisc(self._raw_client, self._server, self._auth)

    @cached_property
    def organization_api(self) -> AsyncOrganizationApi:
        return AsyncOrganizationApi(self._raw_client, self._server, self._auth)

    @cached_property
    def post_api(self) -> AsyncPostApi:
        return AsyncPostApi(self._raw_client, self._server, self._auth)

    @cached_property
    def team_api(self) -> AsyncTeamApi:
        return AsyncTeamApi(self._raw_client, self._server, self._auth)

    @cached_property
    def upload_api(self) -> AsyncUploadApi:
        return AsyncUploadApi(self._raw_client, self._server, self._auth)

    @cached_property
    def conversation_api(self) -> AsyncConversationApi:
        return AsyncConversationApi(self._raw_client, self._server, self._auth)

    @cached_property
    def post_csv(self) -> AsyncPostCsv:
        return AsyncPostCsv(self._raw_client, self._server, self._auth)

    @cached_property
    def post_import(self) -> AsyncPostImport:
        return AsyncPostImport(self._raw_client, self._server, self._auth)

    @cached_property
    def social_account_api(self) -> AsyncSocialAccountApi:
        return AsyncSocialAccountApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncBundleSocialClient
