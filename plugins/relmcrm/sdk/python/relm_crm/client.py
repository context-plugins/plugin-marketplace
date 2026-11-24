from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.activities import Activities
from .apis.automations import Automations
from .apis.batch import Batch
from .apis.companies import Companies
from .apis.connections import Connections
from .apis.contacts import Contacts
from .apis.deals import Deals
from .apis.discovery import Discovery
from .apis.pipelines import Pipelines
from .apis.registry import Registry
from .apis.search import Search
from .apis.sequences import Sequences
from .apis.templates import Templates
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseRelmCrmClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
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
from .server.server_config import ServerConfigOrDict


class RelmCrmClient(BaseRelmCrmClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "RelmCrmClient/0.17.1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.17.1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/authorize"),
                            token_url=self._server.auth_server("/token"),
                            refresh_url=self._server.auth_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def activities(self) -> Activities:
        return Activities(self._raw_client, self._server, self._auth)

    @cached_property
    def automations(self) -> Automations:
        return Automations(self._raw_client, self._server, self._auth)

    @cached_property
    def batch(self) -> Batch:
        return Batch(self._raw_client, self._server, self._auth)

    @cached_property
    def companies(self) -> Companies:
        return Companies(self._raw_client, self._server, self._auth)

    @cached_property
    def connections(self) -> Connections:
        return Connections(self._raw_client, self._server, self._auth)

    @cached_property
    def contacts(self) -> Contacts:
        return Contacts(self._raw_client, self._server, self._auth)

    @cached_property
    def deals(self) -> Deals:
        return Deals(self._raw_client, self._server, self._auth)

    @cached_property
    def discovery(self) -> Discovery:
        return Discovery(self._raw_client, self._server, self._auth)

    @cached_property
    def pipelines(self) -> Pipelines:
        return Pipelines(self._raw_client, self._server, self._auth)

    @cached_property
    def registry(self) -> Registry:
        return Registry(self._raw_client, self._server, self._auth)

    @cached_property
    def search(self) -> Search:
        return Search(self._raw_client, self._server, self._auth)

    @cached_property
    def sequences(self) -> Sequences:
        return Sequences(self._raw_client, self._server, self._auth)

    @cached_property
    def templates(self) -> Templates:
        return Templates(self._raw_client, self._server, self._auth)

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


Client = RelmCrmClient
