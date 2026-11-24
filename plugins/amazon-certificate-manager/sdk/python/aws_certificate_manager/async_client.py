from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.acme_account_api import AsyncAcmeAccountApi
from .apis.acme_domain_validation_api import AsyncAcmeDomainValidationApi
from .apis.acme_endpoint_api import AsyncAcmeEndpointApi
from .apis.acme_external_account_binding_api import AsyncAcmeExternalAccountBindingApi
from .apis.certificates import AsyncCertificates
from .apis.operations import AsyncOperations
from .apis.tag_api import AsyncTagApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsCertificateManagerClient
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


class AsyncAwsCertificateManagerClient(BaseAwsCertificateManagerClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AwsCertificateManagerClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth
        )

    @cached_property
    def acme_account_api(self) -> AsyncAcmeAccountApi:
        return AsyncAcmeAccountApi(self._raw_client, self._server, self._auth)

    @cached_property
    def acme_domain_validation_api(self) -> AsyncAcmeDomainValidationApi:
        return AsyncAcmeDomainValidationApi(self._raw_client, self._server, self._auth)

    @cached_property
    def acme_endpoint_api(self) -> AsyncAcmeEndpointApi:
        return AsyncAcmeEndpointApi(self._raw_client, self._server, self._auth)

    @cached_property
    def acme_external_account_binding_api(self) -> AsyncAcmeExternalAccountBindingApi:
        return AsyncAcmeExternalAccountBindingApi(self._raw_client, self._server, self._auth)

    @cached_property
    def certificates(self) -> AsyncCertificates:
        return AsyncCertificates(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def tag_api(self) -> AsyncTagApi:
        return AsyncTagApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAwsCertificateManagerClient
