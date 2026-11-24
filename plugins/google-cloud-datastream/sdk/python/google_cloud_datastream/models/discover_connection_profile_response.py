from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_cluster1 import MongodbCluster1, MongodbCluster1Dict
from .mysql_rdbms1 import MysqlRdbms1, MysqlRdbms1Dict
from .oracle_rdbms1 import OracleRdbms1, OracleRdbms1Dict
from .postgresql_rdbms1 import PostgresqlRdbms1, PostgresqlRdbms1Dict
from .salesforce_org2 import SalesforceOrg2, SalesforceOrg2Dict
from .source_catalog3 import SourceCatalog3, SourceCatalog3Dict
from .spanner_database1 import SpannerDatabase1, SpannerDatabase1Dict
from .sql_server_rdbms1 import SqlServerRdbms1, SqlServerRdbms1Dict


class DiscoverConnectionProfileResponse(SdkBaseModel):
    """Response from a discover request."""

    spanner_database: Optional[SpannerDatabase1] = Field(default=UNSET, alias="spannerDatabase")
    """Enriched Spanner database."""

    salesforce_org: Optional[SalesforceOrg2] = Field(default=UNSET, alias="salesforceOrg")
    """Enriched Salesforce organization."""

    oracle_rdbms: Optional[OracleRdbms1] = Field(default=UNSET, alias="oracleRdbms")
    """Enriched Oracle RDBMS object."""

    source_catalog: Optional[SourceCatalog3] = Field(default=UNSET, alias="sourceCatalog")
    """Enriched source catalog. This is mainly used to represent SaaS sources databases."""

    sql_server_rdbms: Optional[SqlServerRdbms1] = Field(default=UNSET, alias="sqlServerRdbms")
    """Enriched SQLServer RDBMS object."""

    mongodb_cluster: Optional[MongodbCluster1] = Field(default=UNSET, alias="mongodbCluster")
    """Enriched MongoDB cluster."""

    mysql_rdbms: Optional[MysqlRdbms1] = Field(default=UNSET, alias="mysqlRdbms")
    """Enriched MySQL RDBMS object."""

    postgresql_rdbms: Optional[PostgresqlRdbms1] = Field(default=UNSET, alias="postgresqlRdbms")
    """Enriched PostgreSQL RDBMS object."""


class DiscoverConnectionProfileResponseDict(TypedDict):
    spanner_database: NotRequired[SpannerDatabase1Dict]
    salesforce_org: NotRequired[SalesforceOrg2Dict]
    oracle_rdbms: NotRequired[OracleRdbms1Dict]
    source_catalog: NotRequired[SourceCatalog3Dict]
    sql_server_rdbms: NotRequired[SqlServerRdbms1Dict]
    mongodb_cluster: NotRequired[MongodbCluster1Dict]
    mysql_rdbms: NotRequired[MysqlRdbms1Dict]
    postgresql_rdbms: NotRequired[PostgresqlRdbms1Dict]
