from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.analytics import Analytics
from .apis.app import App
from .apis.automation import Automation
from .apis.comment_api import CommentApi
from .apis.conversation_api import ConversationApi
from .apis.credit import Credit
from .apis.misc import Misc
from .apis.organization_api import OrganizationApi
from .apis.post_api import PostApi
from .apis.post_csv import PostCsv
from .apis.post_import import PostImport
from .apis.social_account_api import SocialAccountApi
from .apis.team_api import TeamApi
from .apis.upload_api import UploadApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseBundleSocialClient
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


class BundleSocialClient(BaseBundleSocialClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            api_key_auth=ApiKeyHeaderScheme("x-api-key", api_key_auth) if api_key_auth is not None else no_auth
        )

    @cached_property
    def analytics(self) -> Analytics:
        return Analytics(self._raw_client, self._server, self._auth)

    @cached_property
    def app(self) -> App:
        return App(self._raw_client, self._server, self._auth)

    @cached_property
    def automation(self) -> Automation:
        return Automation(self._raw_client, self._server, self._auth)

    @cached_property
    def comment_api(self) -> CommentApi:
        return CommentApi(self._raw_client, self._server, self._auth)

    @cached_property
    def credit(self) -> Credit:
        return Credit(self._raw_client, self._server, self._auth)

    @cached_property
    def misc(self) -> Misc:
        return Misc(self._raw_client, self._server, self._auth)

    @cached_property
    def organization_api(self) -> OrganizationApi:
        return OrganizationApi(self._raw_client, self._server, self._auth)

    @cached_property
    def post_api(self) -> PostApi:
        return PostApi(self._raw_client, self._server, self._auth)

    @cached_property
    def team_api(self) -> TeamApi:
        return TeamApi(self._raw_client, self._server, self._auth)

    @cached_property
    def upload_api(self) -> UploadApi:
        return UploadApi(self._raw_client, self._server, self._auth)

    @cached_property
    def conversation_api(self) -> ConversationApi:
        return ConversationApi(self._raw_client, self._server, self._auth)

    @cached_property
    def post_csv(self) -> PostCsv:
        return PostCsv(self._raw_client, self._server, self._auth)

    @cached_property
    def post_import(self) -> PostImport:
        return PostImport(self._raw_client, self._server, self._auth)

    @cached_property
    def social_account_api(self) -> SocialAccountApi:
        return SocialAccountApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = BundleSocialClient
