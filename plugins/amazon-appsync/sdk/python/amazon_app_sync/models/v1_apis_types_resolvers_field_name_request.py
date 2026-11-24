from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .app_sync_runtime import AppSyncRuntime, AppSyncRuntimeDict
from .caching_config import CachingConfig, CachingConfigDict
from .enums.kind import KindOrStr
from .enums.metrics_config_aws_app_sync_resolvers_api import MetricsConfigAwsAppSyncResolversApiOrStr
from .pipeline_config import PipelineConfig, PipelineConfigDict
from .sync_config import SyncConfig, SyncConfigDict


class V1ApisTypesResolversFieldNameRequest(SdkBaseModel):
    data_source_name: Optional[str] = Field(default=UNSET, alias="dataSourceName")
    """The new data source name."""

    request_mapping_template: Optional[str] = Field(default=UNSET, alias="requestMappingTemplate")
    """The new request mapping template. A resolver uses a request mapping template to convert a GraphQL expression into
    a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language
    (VTL). VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL
    request and response mapping templates are required."""

    response_mapping_template: Optional[str] = Field(default=UNSET, alias="responseMappingTemplate")
    """The new response mapping template."""

    kind: Optional[KindOrStr] = UNSET
    """The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT
    resolver to run a GraphQL query against a single data source. PIPELINE: A PIPELINE resolver type. You can use a
    PIPELINE resolver to invoke a series of Function objects in a serial manner. You can use a pipeline resolver to run
    a GraphQL query against multiple data sources."""

    pipeline_config: Optional[PipelineConfig] = Field(default=UNSET, alias="pipelineConfig")
    sync_config: Optional[SyncConfig] = Field(default=UNSET, alias="syncConfig")
    caching_config: Optional[CachingConfig] = Field(default=UNSET, alias="cachingConfig")
    max_batch_size: Optional[int] = Field(default=UNSET, alias="maxBatchSize")
    """The maximum batching size for a resolver."""

    runtime: Optional[AppSyncRuntime] = UNSET
    code: Optional[str] = UNSET
    """The resolver code that contains the request and response functions. When code is used, the runtime is required.
    The runtime value must be APPSYNC_JS."""

    metrics_config: Optional[MetricsConfigAwsAppSyncResolversApiOrStr] = Field(default=UNSET, alias="metricsConfig")
    """Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig won't be used
    unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If the resolverLevelMetricsBehavior is
    set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig will be ignored. However, you can still set its value.
    metricsConfig can be ENABLED or DISABLED."""


class V1ApisTypesResolversFieldNameRequestDict(TypedDict):
    data_source_name: NotRequired[str]
    request_mapping_template: NotRequired[str]
    response_mapping_template: NotRequired[str]
    kind: NotRequired[KindOrStr]
    pipeline_config: NotRequired[PipelineConfigDict]
    sync_config: NotRequired[SyncConfigDict]
    caching_config: NotRequired[CachingConfigDict]
    max_batch_size: NotRequired[int]
    runtime: NotRequired[AppSyncRuntimeDict]
    code: NotRequired[str]
    metrics_config: NotRequired[MetricsConfigAwsAppSyncResolversApiOrStr]
