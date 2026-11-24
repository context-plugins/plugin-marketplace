from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.comments import Comments
from .apis.hashtags import Hashtags
from .apis.insights import Insights
from .apis.media_api import MediaApi
from .apis.mentions import Mentions
from .apis.publishing import Publishing
from .apis.users import Users
from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseInstagramClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    RawClient,
    RefreshableTokenSource,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class InstagramClient(BaseInstagramClient[RawClient]):
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
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
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
                param[str]("User-Agent", "InstagramClient/21.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "21.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/oauth"),
                            token_url=self._server.access_token_server("/access_token"),
                            refresh_url=self._server.access_token_server("/access_token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def comments(self) -> Comments:
        return Comments(self._raw_client, self._server)

    @cached_property
    def hashtags(self) -> Hashtags:
        return Hashtags(self._raw_client, self._server)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server)

    @cached_property
    def media_api(self) -> MediaApi:
        return MediaApi(self._raw_client, self._server)

    @cached_property
    def mentions(self) -> Mentions:
        return Mentions(self._raw_client, self._server)

    @cached_property
    def publishing(self) -> Publishing:
        return Publishing(self._raw_client, self._server)

    @cached_property
    def users(self) -> Users:
        return Users(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = InstagramClient
