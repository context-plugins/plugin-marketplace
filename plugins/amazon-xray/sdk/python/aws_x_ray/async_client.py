from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.creategroup import AsyncCreategroup
from .apis.createsamplingrule import AsyncCreatesamplingrule
from .apis.delete_group import AsyncDeleteGroup
from .apis.deleteresourcepolicy import AsyncDeleteresourcepolicy
from .apis.deletesamplingrule import AsyncDeletesamplingrule
from .apis.encryptionconfig_api import AsyncEncryptionconfigApi
from .apis.get_group import AsyncGetGroup
from .apis.getsamplingrules import AsyncGetsamplingrules
from .apis.groups import AsyncGroups
from .apis.insight_api import AsyncInsightApi
from .apis.insightevents import AsyncInsightevents
from .apis.insightimpactgraph import AsyncInsightimpactgraph
from .apis.insightsummaries import AsyncInsightsummaries
from .apis.list_tags_for_resource import AsyncListTagsForResource
from .apis.listresourcepolicies import AsyncListresourcepolicies
from .apis.operations import AsyncOperations
from .apis.putencryptionconfig import AsyncPutencryptionconfig
from .apis.putresourcepolicy import AsyncPutresourcepolicy
from .apis.sampling import AsyncSampling
from .apis.samplingstatisticsummaries import AsyncSamplingstatisticsummaries
from .apis.samplingtargets import AsyncSamplingtargets
from .apis.service_graph import AsyncServiceGraph
from .apis.tag_resource import AsyncTagResource
from .apis.telemetryrecords import AsyncTelemetryrecords
from .apis.timeseriesservicestatistics_api import AsyncTimeseriesservicestatisticsApi
from .apis.tracegraph import AsyncTracegraph
from .apis.traces import AsyncTraces
from .apis.tracesegments import AsyncTracesegments
from .apis.tracesummaries import AsyncTracesummaries
from .apis.untag_resource import AsyncUntagResource
from .apis.update_group import AsyncUpdateGroup
from .apis.updatesamplingrule import AsyncUpdatesamplingrule
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsXRayClient
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


class AsyncAwsXRayClient(BaseAwsXRayClient[AsyncRawClient]):
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
                param[str]("User-Agent", "AwsXRayClient/0.1.0 Python"),
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
    def creategroup(self) -> AsyncCreategroup:
        return AsyncCreategroup(self._raw_client, self._server, self._auth)

    @cached_property
    def createsamplingrule(self) -> AsyncCreatesamplingrule:
        return AsyncCreatesamplingrule(self._raw_client, self._server, self._auth)

    @cached_property
    def delete_group(self) -> AsyncDeleteGroup:
        return AsyncDeleteGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def deleteresourcepolicy(self) -> AsyncDeleteresourcepolicy:
        return AsyncDeleteresourcepolicy(self._raw_client, self._server, self._auth)

    @cached_property
    def deletesamplingrule(self) -> AsyncDeletesamplingrule:
        return AsyncDeletesamplingrule(self._raw_client, self._server, self._auth)

    @cached_property
    def encryptionconfig_api(self) -> AsyncEncryptionconfigApi:
        return AsyncEncryptionconfigApi(self._raw_client, self._server, self._auth)

    @cached_property
    def get_group(self) -> AsyncGetGroup:
        return AsyncGetGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def getsamplingrules(self) -> AsyncGetsamplingrules:
        return AsyncGetsamplingrules(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> AsyncGroups:
        return AsyncGroups(self._raw_client, self._server, self._auth)

    @cached_property
    def insight_api(self) -> AsyncInsightApi:
        return AsyncInsightApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insightevents(self) -> AsyncInsightevents:
        return AsyncInsightevents(self._raw_client, self._server, self._auth)

    @cached_property
    def insightimpactgraph(self) -> AsyncInsightimpactgraph:
        return AsyncInsightimpactgraph(self._raw_client, self._server, self._auth)

    @cached_property
    def insightsummaries(self) -> AsyncInsightsummaries:
        return AsyncInsightsummaries(self._raw_client, self._server, self._auth)

    @cached_property
    def list_tags_for_resource(self) -> AsyncListTagsForResource:
        return AsyncListTagsForResource(self._raw_client, self._server, self._auth)

    @cached_property
    def listresourcepolicies(self) -> AsyncListresourcepolicies:
        return AsyncListresourcepolicies(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def putencryptionconfig(self) -> AsyncPutencryptionconfig:
        return AsyncPutencryptionconfig(self._raw_client, self._server, self._auth)

    @cached_property
    def putresourcepolicy(self) -> AsyncPutresourcepolicy:
        return AsyncPutresourcepolicy(self._raw_client, self._server, self._auth)

    @cached_property
    def sampling(self) -> AsyncSampling:
        return AsyncSampling(self._raw_client, self._server, self._auth)

    @cached_property
    def samplingstatisticsummaries(self) -> AsyncSamplingstatisticsummaries:
        return AsyncSamplingstatisticsummaries(self._raw_client, self._server, self._auth)

    @cached_property
    def samplingtargets(self) -> AsyncSamplingtargets:
        return AsyncSamplingtargets(self._raw_client, self._server, self._auth)

    @cached_property
    def service_graph(self) -> AsyncServiceGraph:
        return AsyncServiceGraph(self._raw_client, self._server, self._auth)

    @cached_property
    def tag_resource(self) -> AsyncTagResource:
        return AsyncTagResource(self._raw_client, self._server, self._auth)

    @cached_property
    def telemetryrecords(self) -> AsyncTelemetryrecords:
        return AsyncTelemetryrecords(self._raw_client, self._server, self._auth)

    @cached_property
    def timeseriesservicestatistics_api(self) -> AsyncTimeseriesservicestatisticsApi:
        return AsyncTimeseriesservicestatisticsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def tracegraph(self) -> AsyncTracegraph:
        return AsyncTracegraph(self._raw_client, self._server, self._auth)

    @cached_property
    def traces(self) -> AsyncTraces:
        return AsyncTraces(self._raw_client, self._server, self._auth)

    @cached_property
    def tracesegments(self) -> AsyncTracesegments:
        return AsyncTracesegments(self._raw_client, self._server, self._auth)

    @cached_property
    def tracesummaries(self) -> AsyncTracesummaries:
        return AsyncTracesummaries(self._raw_client, self._server, self._auth)

    @cached_property
    def untag_resource(self) -> AsyncUntagResource:
        return AsyncUntagResource(self._raw_client, self._server, self._auth)

    @cached_property
    def update_group(self) -> AsyncUpdateGroup:
        return AsyncUpdateGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def updatesamplingrule(self) -> AsyncUpdatesamplingrule:
        return AsyncUpdatesamplingrule(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAwsXRayClient
