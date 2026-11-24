from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.creategroup import Creategroup
from .apis.createsamplingrule import Createsamplingrule
from .apis.delete_group import DeleteGroup
from .apis.deleteresourcepolicy import Deleteresourcepolicy
from .apis.deletesamplingrule import Deletesamplingrule
from .apis.encryptionconfig_api import EncryptionconfigApi
from .apis.get_group import GetGroup
from .apis.getsamplingrules import Getsamplingrules
from .apis.groups import Groups
from .apis.insight_api import InsightApi
from .apis.insightevents import Insightevents
from .apis.insightimpactgraph import Insightimpactgraph
from .apis.insightsummaries import Insightsummaries
from .apis.list_tags_for_resource import ListTagsForResource
from .apis.listresourcepolicies import Listresourcepolicies
from .apis.operations import Operations
from .apis.putencryptionconfig import Putencryptionconfig
from .apis.putresourcepolicy import Putresourcepolicy
from .apis.sampling import Sampling
from .apis.samplingstatisticsummaries import Samplingstatisticsummaries
from .apis.samplingtargets import Samplingtargets
from .apis.service_graph import ServiceGraph
from .apis.tag_resource import TagResource
from .apis.telemetryrecords import Telemetryrecords
from .apis.timeseriesservicestatistics_api import TimeseriesservicestatisticsApi
from .apis.tracegraph import Tracegraph
from .apis.traces import Traces
from .apis.tracesegments import Tracesegments
from .apis.tracesummaries import Tracesummaries
from .apis.untag_resource import UntagResource
from .apis.update_group import UpdateGroup
from .apis.updatesamplingrule import Updatesamplingrule
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAwsXRayClient
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


class AwsXRayClient(BaseAwsXRayClient[RawClient]):
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
                param[str]("User-Agent", "AwsXRayClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def creategroup(self) -> Creategroup:
        return Creategroup(self._raw_client, self._server, self._auth)

    @cached_property
    def createsamplingrule(self) -> Createsamplingrule:
        return Createsamplingrule(self._raw_client, self._server, self._auth)

    @cached_property
    def delete_group(self) -> DeleteGroup:
        return DeleteGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def deleteresourcepolicy(self) -> Deleteresourcepolicy:
        return Deleteresourcepolicy(self._raw_client, self._server, self._auth)

    @cached_property
    def deletesamplingrule(self) -> Deletesamplingrule:
        return Deletesamplingrule(self._raw_client, self._server, self._auth)

    @cached_property
    def encryptionconfig_api(self) -> EncryptionconfigApi:
        return EncryptionconfigApi(self._raw_client, self._server, self._auth)

    @cached_property
    def get_group(self) -> GetGroup:
        return GetGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def getsamplingrules(self) -> Getsamplingrules:
        return Getsamplingrules(self._raw_client, self._server, self._auth)

    @cached_property
    def groups(self) -> Groups:
        return Groups(self._raw_client, self._server, self._auth)

    @cached_property
    def insight_api(self) -> InsightApi:
        return InsightApi(self._raw_client, self._server, self._auth)

    @cached_property
    def insightevents(self) -> Insightevents:
        return Insightevents(self._raw_client, self._server, self._auth)

    @cached_property
    def insightimpactgraph(self) -> Insightimpactgraph:
        return Insightimpactgraph(self._raw_client, self._server, self._auth)

    @cached_property
    def insightsummaries(self) -> Insightsummaries:
        return Insightsummaries(self._raw_client, self._server, self._auth)

    @cached_property
    def list_tags_for_resource(self) -> ListTagsForResource:
        return ListTagsForResource(self._raw_client, self._server, self._auth)

    @cached_property
    def listresourcepolicies(self) -> Listresourcepolicies:
        return Listresourcepolicies(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> Operations:
        return Operations(self._raw_client, self._server, self._auth)

    @cached_property
    def putencryptionconfig(self) -> Putencryptionconfig:
        return Putencryptionconfig(self._raw_client, self._server, self._auth)

    @cached_property
    def putresourcepolicy(self) -> Putresourcepolicy:
        return Putresourcepolicy(self._raw_client, self._server, self._auth)

    @cached_property
    def sampling(self) -> Sampling:
        return Sampling(self._raw_client, self._server, self._auth)

    @cached_property
    def samplingstatisticsummaries(self) -> Samplingstatisticsummaries:
        return Samplingstatisticsummaries(self._raw_client, self._server, self._auth)

    @cached_property
    def samplingtargets(self) -> Samplingtargets:
        return Samplingtargets(self._raw_client, self._server, self._auth)

    @cached_property
    def service_graph(self) -> ServiceGraph:
        return ServiceGraph(self._raw_client, self._server, self._auth)

    @cached_property
    def tag_resource(self) -> TagResource:
        return TagResource(self._raw_client, self._server, self._auth)

    @cached_property
    def telemetryrecords(self) -> Telemetryrecords:
        return Telemetryrecords(self._raw_client, self._server, self._auth)

    @cached_property
    def timeseriesservicestatistics_api(self) -> TimeseriesservicestatisticsApi:
        return TimeseriesservicestatisticsApi(self._raw_client, self._server, self._auth)

    @cached_property
    def tracegraph(self) -> Tracegraph:
        return Tracegraph(self._raw_client, self._server, self._auth)

    @cached_property
    def traces(self) -> Traces:
        return Traces(self._raw_client, self._server, self._auth)

    @cached_property
    def tracesegments(self) -> Tracesegments:
        return Tracesegments(self._raw_client, self._server, self._auth)

    @cached_property
    def tracesummaries(self) -> Tracesummaries:
        return Tracesummaries(self._raw_client, self._server, self._auth)

    @cached_property
    def untag_resource(self) -> UntagResource:
        return UntagResource(self._raw_client, self._server, self._auth)

    @cached_property
    def update_group(self) -> UpdateGroup:
        return UpdateGroup(self._raw_client, self._server, self._auth)

    @cached_property
    def updatesamplingrule(self) -> Updatesamplingrule:
        return Updatesamplingrule(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AwsXRayClient
