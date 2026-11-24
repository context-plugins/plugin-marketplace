from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dynamodb_data_source_config import DynamodbDataSourceConfig, DynamodbDataSourceConfigDict
from .elasticsearch_data_source_config import ElasticsearchDataSourceConfig, ElasticsearchDataSourceConfigDict
from .enums.metrics_config import MetricsConfigOrStr
from .enums.type_aws_app_sync_data_sources_api import TypeAwsAppSyncDataSourcesApiOrStr
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


class DataSource(SdkBaseModel):
    data_source_arn: Optional[str] = Field(default=UNSET, alias="dataSourceArn")
    """The data source Amazon Resource Name (ARN)."""

    name: Optional[str] = UNSET
    """The name of the data source."""

    description: Optional[str] = UNSET
    """The description of the data source."""

    type_: Optional[TypeAwsAppSyncDataSourcesApiOrStr] = Field(default=UNSET, alias="type")
    """The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB: The data source
    is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon OpenSearch Service domain.
    AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data
    source is an Amazon EventBridge configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock
    runtime. NONE: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting
    to a data source, such as when you're perf"""

    service_role_arn: Optional[str] = Field(default=UNSET, alias="serviceRoleArn")
    """The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system
    assumes this role when accessing the data source."""

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


class DataSourceDict(TypedDict):
    data_source_arn: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    type_: NotRequired[TypeAwsAppSyncDataSourcesApiOrStr]
    service_role_arn: NotRequired[str]
    dynamodb_config: NotRequired[DynamodbDataSourceConfigDict]
    lambda_config: NotRequired[LambdaDataSourceConfigDict]
    elasticsearch_config: NotRequired[ElasticsearchDataSourceConfigDict]
    open_search_service_config: NotRequired[OpenSearchServiceDataSourceConfigDict]
    http_config: NotRequired[HttpDataSourceConfigDict]
    relational_database_config: NotRequired[RelationalDatabaseDataSourceConfigDict]
    event_bridge_config: NotRequired[EventBridgeDataSourceConfigDict]
    metrics_config: NotRequired[MetricsConfigOrStr]
