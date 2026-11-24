from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.accounts import AsyncAccounts
from .apis.anomalies import AsyncAnomalies
from .apis.channels import AsyncChannels
from .apis.cost_estimation import AsyncCostEstimation
from .apis.event_sources import AsyncEventSources
from .apis.events import AsyncEvents
from .apis.feedback_api import AsyncFeedbackApi
from .apis.insights import AsyncInsights
from .apis.list_log_anomalies import AsyncListLogAnomalies
from .apis.monitored_resources import AsyncMonitoredResources
from .apis.organization import AsyncOrganization
from .apis.recommendations import AsyncRecommendations
from .apis.resource_collections import AsyncResourceCollections
from .apis.service_integrations import AsyncServiceIntegrations
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonDevOpsGuruClient
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


class AsyncAmazonDevOpsGuruClient(BaseAmazonDevOpsGuruClient[AsyncRawClient]):
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
                param[str]("User-Agent", "AmazonDevOpsGuruClient/0.1.0 Python"),
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
    def accounts(self) -> AsyncAccounts:
        return AsyncAccounts(self._raw_client, self._server, self._auth)

    @cached_property
    def anomalies(self) -> AsyncAnomalies:
        return AsyncAnomalies(self._raw_client, self._server, self._auth)

    @cached_property
    def channels(self) -> AsyncChannels:
        return AsyncChannels(self._raw_client, self._server, self._auth)

    @cached_property
    def cost_estimation(self) -> AsyncCostEstimation:
        return AsyncCostEstimation(self._raw_client, self._server, self._auth)

    @cached_property
    def event_sources(self) -> AsyncEventSources:
        return AsyncEventSources(self._raw_client, self._server, self._auth)

    @cached_property
    def events(self) -> AsyncEvents:
        return AsyncEvents(self._raw_client, self._server, self._auth)

    @cached_property
    def feedback_api(self) -> AsyncFeedbackApi:
        return AsyncFeedbackApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insights(self) -> AsyncInsights:
        return AsyncInsights(self._raw_client, self._server, self._auth)

    @cached_property
    def list_log_anomalies(self) -> AsyncListLogAnomalies:
        return AsyncListLogAnomalies(self._raw_client, self._server, self._auth)

    @cached_property
    def monitored_resources(self) -> AsyncMonitoredResources:
        return AsyncMonitoredResources(self._raw_client, self._server, self._auth)

    @cached_property
    def organization(self) -> AsyncOrganization:
        return AsyncOrganization(self._raw_client, self._server, self._auth)

    @cached_property
    def recommendations(self) -> AsyncRecommendations:
        return AsyncRecommendations(self._raw_client, self._server, self._auth)

    @cached_property
    def resource_collections(self) -> AsyncResourceCollections:
        return AsyncResourceCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def service_integrations(self) -> AsyncServiceIntegrations:
        return AsyncServiceIntegrations(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonDevOpsGuruClient
