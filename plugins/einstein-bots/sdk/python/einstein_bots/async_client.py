from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.bot import AsyncBot
from .apis.health import AsyncHealth
from .apis.versions import AsyncVersions
from .auth import AsyncAuthSchemes, ChatbotAuthAuthorizationCodeScope
from .base_client import DEFAULT_TIMEOUT, BaseEinsteinBotsClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodeTokenSource,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncOAuth2RefreshableScheme,
    AsyncRawClient,
    AsyncRefreshableTokenSource,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    client_secret_basic,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncEinsteinBotsClient(BaseEinsteinBotsClient[AsyncRawClient]):
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
        chatbot_auth_authorization_code: (
            AsyncAuthorizationCodeCredentialsOrDict[ChatbotAuthAuthorizationCodeScope] | None
        ) = None,
        chatbot_auth_authorization_code_token_source: (
            AsyncRefreshableTokenSource[AsyncAuthorizationCodeCredentials[ChatbotAuthAuthorizationCodeScope]] | None
        ) = None,
        chatbot_auth_implicit: str | None = None,
        jwt_bearer: str | None = None,
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
                param[str]("User-Agent", "EinsteinBotsClient/v5.3.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v5.3.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            chatbot_auth_authorization_code=(
                AsyncOAuth2RefreshableScheme(
                    credentials=AsyncAuthorizationCodeCredentials[ChatbotAuthAuthorizationCodeScope].coerce(
                        chatbot_auth_authorization_code
                    ),
                    source=(
                        chatbot_auth_authorization_code_token_source
                        if chatbot_auth_authorization_code_token_source is not None
                        else AsyncAuthorizationCodeTokenSource[ChatbotAuthAuthorizationCodeScope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/authorize"),
                            token_url=self._server.auth_server("/token"),
                            refresh_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if chatbot_auth_authorization_code is not None
                else no_auth
            ),
            chatbot_auth_implicit=(
                ApiKeyHeaderScheme("Authorization", chatbot_auth_implicit)
                if chatbot_auth_implicit is not None
                else no_auth
            ),
            jwt_bearer=BearerAuthScheme(jwt_bearer) if jwt_bearer is not None else no_auth,
        )

    @cached_property
    def bot(self) -> AsyncBot:
        return AsyncBot(self._raw_client, self._server, self._auth)

    @cached_property
    def health(self) -> AsyncHealth:
        return AsyncHealth(self._raw_client, self._server)

    @cached_property
    def versions(self) -> AsyncVersions:
        return AsyncVersions(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncEinsteinBotsClient
