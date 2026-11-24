from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.aggregates_and_compliance import AggregatesAndCompliance
from .apis.association_resources import AssociationResources
from .apis.associations import Associations
from .apis.bulk_delivery import BulkDelivery
from .apis.bulk_export import BulkExport
from .apis.change_feed import ChangeFeed
from .apis.cross_association_collections import CrossAssociationCollections
from .apis.dataset_catalog import DatasetCatalog
from .apis.meta import Meta
from .apis.professionals_and_licenses import ProfessionalsAndLicenses
from .apis.statutes import Statutes
from .apis.vendors import Vendors
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCommonElementsClient
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
from .server.environment import Environment


class CommonElementsClient(BaseCommonElementsClient[RawClient]):
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
        bearer_auth: str | None = None,
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
                param[str]("User-Agent", "CommonElementsClient/1.4.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.4.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def aggregates_and_compliance(self) -> AggregatesAndCompliance:
        return AggregatesAndCompliance(self._raw_client, self._server, self._auth)

    @cached_property
    def association_resources(self) -> AssociationResources:
        return AssociationResources(self._raw_client, self._server, self._auth)

    @cached_property
    def associations(self) -> Associations:
        return Associations(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk_delivery(self) -> BulkDelivery:
        return BulkDelivery(self._raw_client, self._server, self._auth)

    @cached_property
    def bulk_export(self) -> BulkExport:
        return BulkExport(self._raw_client, self._server, self._auth)

    @cached_property
    def change_feed(self) -> ChangeFeed:
        return ChangeFeed(self._raw_client, self._server, self._auth)

    @cached_property
    def cross_association_collections(self) -> CrossAssociationCollections:
        return CrossAssociationCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def dataset_catalog(self) -> DatasetCatalog:
        return DatasetCatalog(self._raw_client, self._server, self._auth)

    @cached_property
    def meta(self) -> Meta:
        return Meta(self._raw_client, self._server, self._auth)

    @cached_property
    def professionals_and_licenses(self) -> ProfessionalsAndLicenses:
        return ProfessionalsAndLicenses(self._raw_client, self._server, self._auth)

    @cached_property
    def statutes(self) -> Statutes:
        return Statutes(self._raw_client, self._server, self._auth)

    @cached_property
    def vendors(self) -> Vendors:
        return Vendors(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CommonElementsClient
