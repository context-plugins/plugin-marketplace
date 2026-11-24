from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataverse_source_config1 import DataverseSourceConfig1, DataverseSourceConfig1Dict
from .mongodb_source_config2 import MongodbSourceConfig2, MongodbSourceConfig2Dict
from .mysql_source_config1 import MysqlSourceConfig1, MysqlSourceConfig1Dict
from .oracle_source_config1 import OracleSourceConfig1, OracleSourceConfig1Dict
from .postgresql_source_config2 import PostgresqlSourceConfig2, PostgresqlSourceConfig2Dict
from .salesforce_marketing_cloud_source_config2 import (
    SalesforceMarketingCloudSourceConfig2,
    SalesforceMarketingCloudSourceConfig2Dict,
)
from .salesforce_source_config1 import SalesforceSourceConfig1, SalesforceSourceConfig1Dict
from .service_now_source_config2 import ServiceNowSourceConfig2, ServiceNowSourceConfig2Dict
from .spanner_source_config2 import SpannerSourceConfig2, SpannerSourceConfig2Dict
from .sql_server_source_config1 import SqlServerSourceConfig1, SqlServerSourceConfig1Dict
from .workday_source_config2 import WorkdaySourceConfig2, WorkdaySourceConfig2Dict


class SourceConfig(SdkBaseModel):
    """The configuration of the stream source."""

    source_connection_profile: Optional[str] = Field(default=UNSET, alias="sourceConnectionProfile")
    """Required. Source connection profile resource. Format:
    ``projects/{project}/locations/{location}/connectionProfiles/{name}``"""

    postgresql_source_config: Optional[PostgresqlSourceConfig2] = Field(default=UNSET, alias="postgresqlSourceConfig")
    """PostgreSQL data source configuration."""

    oracle_source_config: Optional[OracleSourceConfig1] = Field(default=UNSET, alias="oracleSourceConfig")
    """Oracle data source configuration."""

    spanner_source_config: Optional[SpannerSourceConfig2] = Field(default=UNSET, alias="spannerSourceConfig")
    """Spanner data source configuration."""

    workday_source_config: Optional[WorkdaySourceConfig2] = Field(default=UNSET, alias="workdaySourceConfig")
    """Optional. Workday data source configuration."""

    mysql_source_config: Optional[MysqlSourceConfig1] = Field(default=UNSET, alias="mysqlSourceConfig")
    """MySQL data source configuration."""

    sql_server_source_config: Optional[SqlServerSourceConfig1] = Field(default=UNSET, alias="sqlServerSourceConfig")
    """SQLServer data source configuration."""

    salesforce_source_config: Optional[SalesforceSourceConfig1] = Field(default=UNSET, alias="salesforceSourceConfig")
    """Salesforce data source configuration."""

    mongodb_source_config: Optional[MongodbSourceConfig2] = Field(default=UNSET, alias="mongodbSourceConfig")
    """MongoDB data source configuration."""

    dataverse_source_config: Optional[DataverseSourceConfig1] = Field(default=UNSET, alias="dataverseSourceConfig")
    """Dataverse data source configuration."""

    service_now_source_config: Optional[ServiceNowSourceConfig2] = Field(default=UNSET, alias="serviceNowSourceConfig")
    """ServiceNow data source configuration."""

    salesforce_marketing_cloud_source_config: Optional[SalesforceMarketingCloudSourceConfig2] = Field(
        default=UNSET, alias="salesforceMarketingCloudSourceConfig"
    )
    """Salesforce Marketing Cloud data source configuration."""


class SourceConfigDict(TypedDict):
    source_connection_profile: NotRequired[str]
    postgresql_source_config: NotRequired[PostgresqlSourceConfig2Dict]
    oracle_source_config: NotRequired[OracleSourceConfig1Dict]
    spanner_source_config: NotRequired[SpannerSourceConfig2Dict]
    workday_source_config: NotRequired[WorkdaySourceConfig2Dict]
    mysql_source_config: NotRequired[MysqlSourceConfig1Dict]
    sql_server_source_config: NotRequired[SqlServerSourceConfig1Dict]
    salesforce_source_config: NotRequired[SalesforceSourceConfig1Dict]
    mongodb_source_config: NotRequired[MongodbSourceConfig2Dict]
    dataverse_source_config: NotRequired[DataverseSourceConfig1Dict]
    service_now_source_config: NotRequired[ServiceNowSourceConfig2Dict]
    salesforce_marketing_cloud_source_config: NotRequired[SalesforceMarketingCloudSourceConfig2Dict]
