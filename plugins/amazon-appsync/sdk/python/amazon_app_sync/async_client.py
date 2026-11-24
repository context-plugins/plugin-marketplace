from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.api_keys import AsyncApiKeys
from .apis.apicaches import AsyncApicaches
from .apis.apis_api import AsyncApisApi
from .apis.channelnamespaces import AsyncChannelnamespaces
from .apis.data_sources import AsyncDataSources
from .apis.domain_names import AsyncDomainNames
from .apis.functions import AsyncFunctions
from .apis.graphql_apis import AsyncGraphqlApis
from .apis.operations import AsyncOperations
from .apis.resolvers import AsyncResolvers
from .apis.schema import AsyncSchema
from .apis.sourceapiassociations import AsyncSourceapiassociations
from .apis.tags import AsyncTags
from .apis.types import AsyncTypes
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonAppSyncClient
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


class AsyncAmazonAppSyncClient(BaseAmazonAppSyncClient[AsyncRawClient]):
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
                param[str]("User-Agent", "AmazonAppSyncClient/0.1.0 Python"),
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
    def api_keys(self) -> AsyncApiKeys:
        return AsyncApiKeys(self._raw_client, self._server, self._auth)

    @cached_property
    def apicaches(self) -> AsyncApicaches:
        return AsyncApicaches(self._raw_client, self._server, self._auth)

    @cached_property
    def apis_api(self) -> AsyncApisApi:
        return AsyncApisApi(self._raw_client, self._server, self._auth)

    @cached_property
    def channelnamespaces(self) -> AsyncChannelnamespaces:
        return AsyncChannelnamespaces(self._raw_client, self._server, self._auth)

    @cached_property
    def data_sources(self) -> AsyncDataSources:
        return AsyncDataSources(self._raw_client, self._server, self._auth)

    @cached_property
    def domain_names(self) -> AsyncDomainNames:
        return AsyncDomainNames(self._raw_client, self._server, self._auth)

    @cached_property
    def functions(self) -> AsyncFunctions:
        return AsyncFunctions(self._raw_client, self._server, self._auth)

    @cached_property
    def graphql_apis(self) -> AsyncGraphqlApis:
        return AsyncGraphqlApis(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def resolvers(self) -> AsyncResolvers:
        return AsyncResolvers(self._raw_client, self._server, self._auth)

    @cached_property
    def schema(self) -> AsyncSchema:
        return AsyncSchema(self._raw_client, self._server, self._auth)

    @cached_property
    def sourceapiassociations(self) -> AsyncSourceapiassociations:
        return AsyncSourceapiassociations(self._raw_client, self._server, self._auth)

    @cached_property
    def tags(self) -> AsyncTags:
        return AsyncTags(self._raw_client, self._server, self._auth)

    @cached_property
    def types(self) -> AsyncTypes:
        return AsyncTypes(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonAppSyncClient
