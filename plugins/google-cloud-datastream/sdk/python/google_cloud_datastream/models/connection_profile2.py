from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataverse_profile import DataverseProfile, DataverseProfileDict
from .forward_ssh_tunnel_connectivity1 import ForwardSshTunnelConnectivity1, ForwardSshTunnelConnectivity1Dict
from .gcs_profile import GcsProfile, GcsProfileDict
from .mongodb_profile import MongodbProfile, MongodbProfileDict
from .mysql_profile import MysqlProfile, MysqlProfileDict
from .oracle_profile import OracleProfile, OracleProfileDict
from .postgresql_profile import PostgresqlProfile, PostgresqlProfileDict
from .private_connectivity2 import PrivateConnectivity2, PrivateConnectivity2Dict
from .salesforce_marketing_cloud_profile import SalesforceMarketingCloudProfile, SalesforceMarketingCloudProfileDict
from .salesforce_profile import SalesforceProfile, SalesforceProfileDict
from .service_now_profile import ServiceNowProfile, ServiceNowProfileDict
from .spanner_profile import SpannerProfile, SpannerProfileDict
from .sql_server_profile import SqlServerProfile, SqlServerProfileDict
from .workday_profile1 import WorkdayProfile1, WorkdayProfile1Dict


class ConnectionProfile2(SdkBaseModel):
    """Optional. An ad-hoc connection profile configuration."""

    bigquery_profile: Optional[Any] = Field(default=UNSET, alias="bigqueryProfile")
    """Profile for connecting to a BigQuery destination."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name."""

    mysql_profile: Optional[MysqlProfile] = Field(default=UNSET, alias="mysqlProfile")
    """Profile for connecting to a MySQL source."""

    workday_profile: Optional[WorkdayProfile1] = Field(default=UNSET, alias="workdayProfile")
    """Optional. Profile for connecting to a Workday source."""

    gcs_profile: Optional[GcsProfile] = Field(default=UNSET, alias="gcsProfile")
    """Profile for connecting to a Cloud Storage destination."""

    spanner_profile: Optional[SpannerProfile] = Field(default=UNSET, alias="spannerProfile")
    """Profile for connecting to a Spanner source."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The create time of the resource."""

    sql_server_profile: Optional[SqlServerProfile] = Field(default=UNSET, alias="sqlServerProfile")
    """Profile for connecting to a SQLServer source."""

    labels: Optional[dict[str, str]] = UNSET
    """Labels."""

    salesforce_marketing_cloud_profile: Optional[SalesforceMarketingCloudProfile] = Field(
        default=UNSET, alias="salesforceMarketingCloudProfile"
    )
    """Profile for connecting to a Salesforce Marketing Cloud source."""

    dataverse_profile: Optional[DataverseProfile] = Field(default=UNSET, alias="dataverseProfile")
    """Profile for connecting to a Dataverse source."""

    salesforce_profile: Optional[SalesforceProfile] = Field(default=UNSET, alias="salesforceProfile")
    """Profile for connecting to a Salesforce source."""

    mongodb_profile: Optional[MongodbProfile] = Field(default=UNSET, alias="mongodbProfile")
    """Profile for connecting to a MongoDB source."""

    service_now_profile: Optional[ServiceNowProfile] = Field(default=UNSET, alias="serviceNowProfile")
    """Profile for connecting to a ServiceNow source."""

    private_connectivity: Optional[PrivateConnectivity2] = Field(default=UNSET, alias="privateConnectivity")
    """Private connectivity."""

    satisfies_pzs: Optional[bool] = Field(default=UNSET, alias="satisfiesPzs")
    """Output only. Reserved for future use."""

    satisfies_pzi: Optional[bool] = Field(default=UNSET, alias="satisfiesPzi")
    """Output only. Reserved for future use."""

    name: Optional[str] = UNSET
    """Output only. Identifier. The resource's name."""

    forward_ssh_connectivity: Optional[ForwardSshTunnelConnectivity1] = Field(
        default=UNSET, alias="forwardSshConnectivity"
    )
    """Forward SSH tunnel connectivity."""

    oracle_profile: Optional[OracleProfile] = Field(default=UNSET, alias="oracleProfile")
    """Profile for connecting to an Oracle source."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The update time of the resource."""

    static_service_ip_connectivity: Optional[Any] = Field(default=UNSET, alias="staticServiceIpConnectivity")
    """Static Service IP connectivity."""

    postgresql_profile: Optional[PostgresqlProfile] = Field(default=UNSET, alias="postgresqlProfile")
    """Profile for connecting to a PostgreSQL source."""


class ConnectionProfile2Dict(TypedDict):
    bigquery_profile: NotRequired[Any]
    display_name: NotRequired[str]
    mysql_profile: NotRequired[MysqlProfileDict]
    workday_profile: NotRequired[WorkdayProfile1Dict]
    gcs_profile: NotRequired[GcsProfileDict]
    spanner_profile: NotRequired[SpannerProfileDict]
    create_time: NotRequired[str]
    sql_server_profile: NotRequired[SqlServerProfileDict]
    labels: NotRequired[dict[str, str]]
    salesforce_marketing_cloud_profile: NotRequired[SalesforceMarketingCloudProfileDict]
    dataverse_profile: NotRequired[DataverseProfileDict]
    salesforce_profile: NotRequired[SalesforceProfileDict]
    mongodb_profile: NotRequired[MongodbProfileDict]
    service_now_profile: NotRequired[ServiceNowProfileDict]
    private_connectivity: NotRequired[PrivateConnectivity2Dict]
    satisfies_pzs: NotRequired[bool]
    satisfies_pzi: NotRequired[bool]
    name: NotRequired[str]
    forward_ssh_connectivity: NotRequired[ForwardSshTunnelConnectivity1Dict]
    oracle_profile: NotRequired[OracleProfileDict]
    update_time: NotRequired[str]
    static_service_ip_connectivity: NotRequired[Any]
    postgresql_profile: NotRequired[PostgresqlProfileDict]
