from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dynamodb_data_source_config import DynamodbDataSourceConfig, DynamodbDataSourceConfigDict
from .elasticsearch_data_source_config import ElasticsearchDataSourceConfig, ElasticsearchDataSourceConfigDict
from .enums.metrics_config import MetricsConfigOrStr
from .enums.type2 import Type2OrStr
from .event_bridge_data_source_config import EventBridgeDataSourceConfig, EventBridgeDataSourceConfigDict
from .http_data_source_config import HttpDataSourceConfig, HttpDataSourceConfigDict
from .lambda_data_source_config import LambdaDataSourceConfig, LambdaDataSourceConfigDict
from .open_search_service_data_source_config import (
    OpenSearchServiceDataSourceConfig,
    OpenSearchServiceDataSourceConfigDict,
)
from .relational_database_data_source_config import (
    RelationalDatabaseDataSourceConfig,
    RelationalDatabaseDataSourceConfigDict,
)


class V1ApisDatasourcesRequest1(SdkBaseModel):
    description: Optional[str] = UNSET
    """The new description for the data source."""

    type_: Type2OrStr = Field(alias="type")
    """The new data source type."""

    service_role_arn: Optional[str] = Field(default=UNSET, alias="serviceRoleArn")
    """The new service role Amazon Resource Name (ARN) for the data source."""

    dynamodb_config: Optional[DynamodbDataSourceConfig] = Field(default=UNSET, alias="dynamodbConfig")
    lambda_config: Optional[LambdaDataSourceConfig] = Field(default=UNSET, alias="lambdaConfig")
    elasticsearch_config: Optional[ElasticsearchDataSourceConfig] = Field(default=UNSET, alias="elasticsearchConfig")
    open_search_service_config: Optional[OpenSearchServiceDataSourceConfig] = Field(
        default=UNSET, alias="openSearchServiceConfig"
    )
    http_config: Optional[HttpDataSourceConfig] = Field(default=UNSET, alias="httpConfig")
    relational_database_config: Optional[RelationalDatabaseDataSourceConfig] = Field(
        default=UNSET, alias="relationalDatabaseConfig"
    )
    event_bridge_config: Optional[EventBridgeDataSourceConfig] = Field(default=UNSET, alias="eventBridgeConfig")
    metrics_config: Optional[MetricsConfigOrStr] = Field(default=UNSET, alias="metricsConfig")
    """Enables or disables enhanced data source metrics for specified data sources. Note that metricsConfig won't be
    used unless the dataSourceLevelMetricsBehavior value is set to PER_DATA_SOURCE_METRICS. If the
    dataSourceLevelMetricsBehavior is set to FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored.
    However, you can still set its value. metricsConfig can be ENABLED or DISABLED."""


class V1ApisDatasourcesRequest1Dict(TypedDict):
    description: NotRequired[str]
    type_: Type2OrStr
    service_role_arn: NotRequired[str]
    dynamodb_config: NotRequired[DynamodbDataSourceConfigDict]
    lambda_config: NotRequired[LambdaDataSourceConfigDict]
    elasticsearch_config: NotRequired[ElasticsearchDataSourceConfigDict]
    open_search_service_config: NotRequired[OpenSearchServiceDataSourceConfigDict]
    http_config: NotRequired[HttpDataSourceConfigDict]
    relational_database_config: NotRequired[RelationalDatabaseDataSourceConfigDict]
    event_bridge_config: NotRequired[EventBridgeDataSourceConfigDict]
    metrics_config: NotRequired[MetricsConfigOrStr]
