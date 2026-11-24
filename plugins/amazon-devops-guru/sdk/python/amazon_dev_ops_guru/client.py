from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts import Accounts
from .apis.anomalies import Anomalies
from .apis.channels import Channels
from .apis.cost_estimation import CostEstimation
from .apis.event_sources import EventSources
from .apis.events import Events
from .apis.feedback_api import FeedbackApi
from .apis.insights import Insights
from .apis.list_log_anomalies import ListLogAnomalies
from .apis.monitored_resources import MonitoredResources
from .apis.organization import Organization
from .apis.recommendations import Recommendations
from .apis.resource_collections import ResourceCollections
from .apis.service_integrations import ServiceIntegrations
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonDevOpsGuruClient
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


class AmazonDevOpsGuruClient(BaseAmazonDevOpsGuruClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonDevOpsGuruClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def accounts(self) -> Accounts:
        return Accounts(self._raw_client, self._server, self._auth)

    @cached_property
    def anomalies(self) -> Anomalies:
        return Anomalies(self._raw_client, self._server, self._auth)

    @cached_property
    def channels(self) -> Channels:
        return Channels(self._raw_client, self._server, self._auth)

    @cached_property
    def cost_estimation(self) -> CostEstimation:
        return CostEstimation(self._raw_client, self._server, self._auth)

    @cached_property
    def event_sources(self) -> EventSources:
        return EventSources(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> Events:
        return Events(self._raw_client, self._server, self._auth)

    @cached_property
    def feedback_api(self) -> FeedbackApi:
        return FeedbackApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> Insights:
        return Insights(self._raw_client, self._server, self._auth)

    @cached_property
    def list_log_anomalies(self) -> ListLogAnomalies:
        return ListLogAnomalies(self._raw_client, self._server, self._auth)

    @cached_property
    def monitored_resources(self) -> MonitoredResources:
        return MonitoredResources(self._raw_client, self._server, self._auth)

    @cached_property
    def organization(self) -> Organization:
        return Organization(self._raw_client, self._server, self._auth)

    @cached_property
    def recommendations(self) -> Recommendations:
        return Recommendations(self._raw_client, self._server, self._auth)

    @cached_property
    def resource_collections(self) -> ResourceCollections:
        return ResourceCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def service_integrations(self) -> ServiceIntegrations:
        return ServiceIntegrations(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AmazonDevOpsGuruClient
