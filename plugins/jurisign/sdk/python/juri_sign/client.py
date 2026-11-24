from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.account import Account
from .apis.authentication import Authentication
from .apis.bulk import Bulk
from .apis.documents import Documents
from .apis.public_forms import PublicForms
from .apis.sign_requests import SignRequests
from .apis.templates import Templates
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseJuriSignClient
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


class JuriSignClient(BaseJuriSignClient[RawClient]):
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
                param[str]("User-Agent", "JuriSignClient/3.24.1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "3.24.1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def account(self) -> Account:
        return Account(self._raw_client, self._server, self._auth)

    @cached_property
    def authentication(self) -> Authentication:
        return Authentication(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk(self) -> Bulk:
        return Bulk(self._raw_client, self._server, self._auth)

    @cached_property
    def documents(self) -> Documents:
        return Documents(self._raw_client, self._server, self._auth)

    @cached_property
    def public_forms(self) -> PublicForms:
        return PublicForms(self._raw_client, self._server, self._auth)

    @cached_property
    def sign_requests(self) -> SignRequests:
        return SignRequests(self._raw_client, self._server, self._auth)

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


Client = JuriSignClient
