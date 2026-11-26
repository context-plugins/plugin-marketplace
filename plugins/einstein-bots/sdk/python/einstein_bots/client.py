from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.bot import Bot
from .apis.health import Health
from .apis.versions import Versions
from .auth import AuthSchemes, ChatbotAuthAuthorizationCodeScope
from .base_client import DEFAULT_TIMEOUT, BaseEinsteinBotsClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    BearerAuthScheme,
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


class EinsteinBotsClient(BaseEinsteinBotsClient[RawClient]):
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
        chatbot_auth_authorization_code: (
            AuthorizationCodeCredentialsOrDict[ChatbotAuthAuthorizationCodeScope] | None
        ) = None,
        chatbot_auth_authorization_code_token_source: (
            RefreshableTokenSource[AuthorizationCodeCredentials[ChatbotAuthAuthorizationCodeScope]] | None
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
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            chatbot_auth_authorization_code=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[ChatbotAuthAuthorizationCodeScope].coerce(
                        chatbot_auth_authorization_code
                    ),
                    source=(
                        chatbot_auth_authorization_code_token_source
                        if chatbot_auth_authorization_code_token_source is not None
                        else AuthorizationCodeTokenSource[ChatbotAuthAuthorizationCodeScope](
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
    def bot(self) -> Bot:
        return Bot(self._raw_client, self._server, self._auth)

    @cached_property
    def health(self) -> Health:
        return Health(self._raw_client, self._server)

    @cached_property
    def versions(self) -> Versions:
        return Versions(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = EinsteinBotsClient
