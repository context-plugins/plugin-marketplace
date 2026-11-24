from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.audiences import AsyncAudiences
from .apis.audit_log import AsyncAuditLog
from .apis.beta_semantic_patch import AsyncBetaSemanticPatch
from .apis.bucketing_api import AsyncBucketingApi
from .apis.custom_properties import AsyncCustomProperties
from .apis.deprecated_features_v1 import AsyncDeprecatedFeaturesV1
from .apis.edge_db import AsyncEdgeDb
from .apis.environments import AsyncEnvironments
from .apis.feature_change_requests import AsyncFeatureChangeRequests
from .apis.feature_configurations import AsyncFeatureConfigurations
from .apis.feature_opt_in import AsyncFeatureOptIn
from .apis.features_v2 import AsyncFeaturesV2
from .apis.integrations_dynatrace import AsyncIntegrationsDynatrace
from .apis.integrations_jira import AsyncIntegrationsJira
from .apis.metric_associations import AsyncMetricAssociations
from .apis.metrics import AsyncMetrics
from .apis.open_feature_remote_evaluation_api_ofrep import AsyncOpenFeatureRemoteEvaluationApiOfrep
from .apis.overrides import AsyncOverrides
from .apis.project_change_requests import AsyncProjectChangeRequests
from .apis.projects import AsyncProjects
from .apis.results import AsyncResults
from .apis.user_profiles import AsyncUserProfiles
from .apis.variables_api import AsyncVariablesApi
from .apis.variations import AsyncVariations
from .apis.webhooks_api import AsyncWebhooksApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseDevCycleClient
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
from .server.server_config import ServerConfigOrDict


class AsyncDevCycleClient(BaseDevCycleClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "DevCycleClient/1.0.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            bearer_auth=ApiKeyHeaderScheme("Authorization", bearer_auth) if bearer_auth is not None else no_auth
        )

    @cached_property
    def audiences(self) -> AsyncAudiences:
        return AsyncAudiences(self._raw_client, self._server)

    @cached_property
    def audit_log(self) -> AsyncAuditLog:
        return AsyncAuditLog(self._raw_client, self._server)

    @cached_property
    def bucketing_api(self) -> AsyncBucketingApi:
        return AsyncBucketingApi(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_properties(self) -> AsyncCustomProperties:
        return AsyncCustomProperties(self._raw_client, self._server)

    @cached_property
    def edge_db(self) -> AsyncEdgeDb:
        return AsyncEdgeDb(self._raw_client, self._server)

    @cached_property
    def environments(self) -> AsyncEnvironments:
        return AsyncEnvironments(self._raw_client, self._server)

    @cached_property
    def feature_change_requests(self) -> AsyncFeatureChangeRequests:
        return AsyncFeatureChangeRequests(self._raw_client, self._server)

    @cached_property
    def feature_configurations(self) -> AsyncFeatureConfigurations:
        return AsyncFeatureConfigurations(self._raw_client, self._server)

    @cached_property
    def feature_opt_in(self) -> AsyncFeatureOptIn:
        return AsyncFeatureOptIn(self._raw_client, self._server)

    @cached_property
    def features_v2(self) -> AsyncFeaturesV2:
        return AsyncFeaturesV2(self._raw_client, self._server)

    @cached_property
    def integrations_dynatrace(self) -> AsyncIntegrationsDynatrace:
        return AsyncIntegrationsDynatrace(self._raw_client, self._server)

    @cached_property
    def integrations_jira(self) -> AsyncIntegrationsJira:
        return AsyncIntegrationsJira(self._raw_client, self._server)

    @cached_property
    def metric_associations(self) -> AsyncMetricAssociations:
        return AsyncMetricAssociations(self._raw_client, self._server)

    @cached_property
    def metrics(self) -> AsyncMetrics:
        return AsyncMetrics(self._raw_client, self._server)

    @cached_property
    def open_feature_remote_evaluation_api_ofrep(self) -> AsyncOpenFeatureRemoteEvaluationApiOfrep:
        return AsyncOpenFeatureRemoteEvaluationApiOfrep(self._raw_client, self._server)

    @cached_property
    def overrides(self) -> AsyncOverrides:
        return AsyncOverrides(self._raw_client, self._server)

    @cached_property
    def project_change_requests(self) -> AsyncProjectChangeRequests:
        return AsyncProjectChangeRequests(self._raw_client, self._server)

    @cached_property
    def projects(self) -> AsyncProjects:
        return AsyncProjects(self._raw_client, self._server)

    @cached_property
    def results(self) -> AsyncResults:
        return AsyncResults(self._raw_client, self._server)

    @cached_property
    def user_profiles(self) -> AsyncUserProfiles:
        return AsyncUserProfiles(self._raw_client, self._server)

    @cached_property
    def variables_api(self) -> AsyncVariablesApi:
        return AsyncVariablesApi(self._raw_client, self._server)

    @cached_property
    def variations(self) -> AsyncVariations:
        return AsyncVariations(self._raw_client, self._server)

    @cached_property
    def webhooks_api(self) -> AsyncWebhooksApi:
        return AsyncWebhooksApi(self._raw_client, self._server)

    @cached_property
    def beta_semantic_patch(self) -> AsyncBetaSemanticPatch:
        return AsyncBetaSemanticPatch(self._raw_client, self._server)

    @cached_property
    def deprecated_features_v1(self) -> AsyncDeprecatedFeaturesV1:
        return AsyncDeprecatedFeaturesV1(self._raw_client, self._server)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncDevCycleClient
