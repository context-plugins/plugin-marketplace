from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connection_profile2 import ConnectionProfile2, ConnectionProfile2Dict
from .mongodb_cluster3 import MongodbCluster3, MongodbCluster3Dict
from .mysql_rdbms4 import MysqlRdbms4, MysqlRdbms4Dict
from .oracle_rdbms4 import OracleRdbms4, OracleRdbms4Dict
from .postgresql_rdbms2 import PostgresqlRdbms2, PostgresqlRdbms2Dict
from .salesforce_org5 import SalesforceOrg5, SalesforceOrg5Dict
from .source_catalog4 import SourceCatalog4, SourceCatalog4Dict
from .spanner_database2 import SpannerDatabase2, SpannerDatabase2Dict
from .sql_server_rdbms2 import SqlServerRdbms2, SqlServerRdbms2Dict


class DiscoverConnectionProfileRequest(SdkBaseModel):
    """Request message for 'discover' ConnectionProfile request."""

    postgresql_rdbms: Optional[PostgresqlRdbms2] = Field(default=UNSET, alias="postgresqlRdbms")
    """Optional. PostgreSQL RDBMS to enrich with child data objects and metadata."""

    hierarchy_depth: Optional[int] = Field(default=UNSET, alias="hierarchyDepth")
    """Optional. The number of hierarchy levels below the current level to be retrieved."""

    source_catalog: Optional[SourceCatalog4] = Field(default=UNSET, alias="sourceCatalog")
    """Optional. Source catalog to enrich with child data objects and metadata. This is mainly used to represent SaaS
    sources databases."""

    sql_server_rdbms: Optional[SqlServerRdbms2] = Field(default=UNSET, alias="sqlServerRdbms")
    """Optional. SQLServer RDBMS to enrich with child data objects and metadata."""

    mongodb_cluster: Optional[MongodbCluster3] = Field(default=UNSET, alias="mongodbCluster")
    """Optional. MongoDB cluster to enrich with child data objects and metadata."""

    oracle_rdbms: Optional[OracleRdbms4] = Field(default=UNSET, alias="oracleRdbms")
    """Optional. Oracle RDBMS to enrich with child data objects and metadata."""

    mysql_rdbms: Optional[MysqlRdbms4] = Field(default=UNSET, alias="mysqlRdbms")
    """Optional. MySQL RDBMS to enrich with child data objects and metadata."""

    salesforce_org: Optional[SalesforceOrg5] = Field(default=UNSET, alias="salesforceOrg")
    """Optional. Salesforce organization to enrich with child data objects and metadata."""

    connection_profile: Optional[ConnectionProfile2] = Field(default=UNSET, alias="connectionProfile")
    """Optional. An ad-hoc connection profile configuration."""

    connection_profile_name: Optional[str] = Field(default=UNSET, alias="connectionProfileName")
    """Optional. A reference to an existing connection profile."""

    full_hierarchy: Optional[bool] = Field(default=UNSET, alias="fullHierarchy")
    """Optional. Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE)."""

    spanner_database: Optional[SpannerDatabase2] = Field(default=UNSET, alias="spannerDatabase")
    """Optional. Spanner database to enrich with child data objects and metadata."""


class DiscoverConnectionProfileRequestDict(TypedDict):
    postgresql_rdbms: NotRequired[PostgresqlRdbms2Dict]
    hierarchy_depth: NotRequired[int]
    source_catalog: NotRequired[SourceCatalog4Dict]
    sql_server_rdbms: NotRequired[SqlServerRdbms2Dict]
    mongodb_cluster: NotRequired[MongodbCluster3Dict]
    oracle_rdbms: NotRequired[OracleRdbms4Dict]
    mysql_rdbms: NotRequired[MysqlRdbms4Dict]
    salesforce_org: NotRequired[SalesforceOrg5Dict]
    connection_profile: NotRequired[ConnectionProfile2Dict]
    connection_profile_name: NotRequired[str]
    full_hierarchy: NotRequired[bool]
    spanner_database: NotRequired[SpannerDatabase2Dict]
