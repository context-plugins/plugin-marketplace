from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.audiences import Audiences
from .apis.audit_log import AuditLog
from .apis.beta_semantic_patch import BetaSemanticPatch
from .apis.bucketing_api import BucketingApi
from .apis.custom_properties import CustomProperties
from .apis.deprecated_features_v1 import DeprecatedFeaturesV1
from .apis.edge_db import EdgeDb
from .apis.environments import Environments
from .apis.feature_change_requests import FeatureChangeRequests
from .apis.feature_configurations import FeatureConfigurations
from .apis.feature_opt_in import FeatureOptIn
from .apis.features_v2 import FeaturesV2
from .apis.integrations_dynatrace import IntegrationsDynatrace
from .apis.integrations_jira import IntegrationsJira
from .apis.metric_associations import MetricAssociations
from .apis.metrics import Metrics
from .apis.open_feature_remote_evaluation_api_ofrep import OpenFeatureRemoteEvaluationApiOfrep
from .apis.overrides import Overrides
from .apis.project_change_requests import ProjectChangeRequests
from .apis.projects import Projects
from .apis.results import Results
from .apis.user_profiles import UserProfiles
from .apis.variables_api import VariablesApi
from .apis.variations import Variations
from .apis.webhooks_api import WebhooksApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseDevCycleClient
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
from .server.server_config import ServerConfigOrDict


class DevCycleClient(BaseDevCycleClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            bearer_auth=ApiKeyHeaderScheme("Authorization", bearer_auth) if bearer_auth is not None else no_auth
        )

    @cached_property
    def audiences(self) -> Audiences:
        return Audiences(self._raw_client, self._server)

    @cached_property
    def audit_log(self) -> AuditLog:
        return AuditLog(self._raw_client, self._server)

    @cached_property
    def bucketing_api(self) -> BucketingApi:
        return BucketingApi(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_properties(self) -> CustomProperties:
        return CustomProperties(self._raw_client, self._server)

    @cached_property
    def edge_db(self) -> EdgeDb:
        return EdgeDb(self._raw_client, self._server)

    @cached_property
    def environments(self) -> Environments:
        return Environments(self._raw_client, self._server)

    @cached_property
    def feature_change_requests(self) -> FeatureChangeRequests:
        return FeatureChangeRequests(self._raw_client, self._server)

    @cached_property
    def feature_configurations(self) -> FeatureConfigurations:
        return FeatureConfigurations(self._raw_client, self._server)

    @cached_property
    def feature_opt_in(self) -> FeatureOptIn:
        return FeatureOptIn(self._raw_client, self._server)

    @cached_property
    def features_v2(self) -> FeaturesV2:
        return FeaturesV2(self._raw_client, self._server)

    @cached_property
    def integrations_dynatrace(self) -> IntegrationsDynatrace:
        return IntegrationsDynatrace(self._raw_client, self._server)

    @cached_property
    def integrations_jira(self) -> IntegrationsJira:
        return IntegrationsJira(self._raw_client, self._server)

    @cached_property
    def metric_associations(self) -> MetricAssociations:
        return MetricAssociations(self._raw_client, self._server)

    @cached_property
    def metrics(self) -> Metrics:
        return Metrics(self._raw_client, self._server)

    @cached_property
    def open_feature_remote_evaluation_api_ofrep(self) -> OpenFeatureRemoteEvaluationApiOfrep:
        return OpenFeatureRemoteEvaluationApiOfrep(self._raw_client, self._server)

    @cached_property
    def overrides(self) -> Overrides:
        return Overrides(self._raw_client, self._server)

    @cached_property
    def project_change_requests(self) -> ProjectChangeRequests:
        return ProjectChangeRequests(self._raw_client, self._server)

    @cached_property
    def projects(self) -> Projects:
        return Projects(self._raw_client, self._server)

    @cached_property
    def results(self) -> Results:
        return Results(self._raw_client, self._server)

    @cached_property
    def user_profiles(self) -> UserProfiles:
        return UserProfiles(self._raw_client, self._server)

    @cached_property
    def variables_api(self) -> VariablesApi:
        return VariablesApi(self._raw_client, self._server)

    @cached_property
    def variations(self) -> Variations:
        return Variations(self._raw_client, self._server)

    @cached_property
    def webhooks_api(self) -> WebhooksApi:
        return WebhooksApi(self._raw_client, self._server)

    @cached_property
    def beta_semantic_patch(self) -> BetaSemanticPatch:
        return BetaSemanticPatch(self._raw_client, self._server)

    @cached_property
    def deprecated_features_v1(self) -> DeprecatedFeaturesV1:
        return DeprecatedFeaturesV1(self._raw_client, self._server)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = DevCycleClient
