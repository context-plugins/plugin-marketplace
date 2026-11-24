from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aggregates_and_compliance import AsyncAggregatesAndCompliance
from .apis.association_resources import AsyncAssociationResources
from .apis.associations import AsyncAssociations
from .apis.bulk_delivery import AsyncBulkDelivery
from .apis.bulk_export import AsyncBulkExport
from .apis.change_feed import AsyncChangeFeed
from .apis.cross_association_collections import AsyncCrossAssociationCollections
from .apis.dataset_catalog import AsyncDatasetCatalog
from .apis.meta import AsyncMeta
from .apis.professionals_and_licenses import AsyncProfessionalsAndLicenses
from .apis.statutes import AsyncStatutes
from .apis.vendors import AsyncVendors
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCommonElementsClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.environment import Environment


class AsyncCommonElementsClient(BaseCommonElementsClient[AsyncRawClient]):
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
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "CommonElementsClient/1.4.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.4.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def aggregates_and_compliance(self) -> AsyncAggregatesAndCompliance:
        return AsyncAggregatesAndCompliance(self._raw_client, self._server, self._auth)

    @cached_property
    def association_resources(self) -> AsyncAssociationResources:
        return AsyncAssociationResources(self._raw_client, self._server, self._auth)

    @cached_property
    def associations(self) -> AsyncAssociations:
        return AsyncAssociations(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk_delivery(self) -> AsyncBulkDelivery:
        return AsyncBulkDelivery(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk_export(self) -> AsyncBulkExport:
        return AsyncBulkExport(self._raw_client, self._server, self._auth)

    @cached_property
    def change_feed(self) -> AsyncChangeFeed:
        return AsyncChangeFeed(self._raw_client, self._server, self._auth)

    @cached_property
    def cross_association_collections(self) -> AsyncCrossAssociationCollections:
        return AsyncCrossAssociationCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def dataset_catalog(self) -> AsyncDatasetCatalog:
        return AsyncDatasetCatalog(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> AsyncMeta:
        return AsyncMeta(self._raw_client, self._server, self._auth)

    @cached_property
    def professionals_and_licenses(self) -> AsyncProfessionalsAndLicenses:
        return AsyncProfessionalsAndLicenses(self._raw_client, self._server, self._auth)

    @cached_property
    def statutes(self) -> AsyncStatutes:
        return AsyncStatutes(self._raw_client, self._server, self._auth)

    @cached_property
    def vendors(self) -> AsyncVendors:
        return AsyncVendors(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCommonElementsClient
