from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_cluster6 import MongodbCluster6, MongodbCluster6Dict
from .mysql_rdbms6 import MysqlRdbms6, MysqlRdbms6Dict
from .oracle_rdbms6 import OracleRdbms6, OracleRdbms6Dict
from .postgresql_rdbms6 import PostgresqlRdbms6, PostgresqlRdbms6Dict
from .salesforce_org1 import SalesforceOrg1, SalesforceOrg1Dict
from .source_catalog2 import SourceCatalog2, SourceCatalog2Dict
from .spanner_database6 import SpannerDatabase6, SpannerDatabase6Dict
from .sql_server_rdbms6 import SqlServerRdbms6, SqlServerRdbms6Dict


class BackfillAllStrategy1(SdkBaseModel):
    """Automatically backfill objects included in the stream source configuration. Specific objects can be excluded."""

    saas_excluded_objects: Optional[SourceCatalog2] = Field(default=UNSET, alias="saasExcludedObjects")
    """Source catalog data source objects to avoid backfilling. This is mainly used to represent SaaS applications
    objects."""

    postgresql_excluded_objects: Optional[PostgresqlRdbms6] = Field(default=UNSET, alias="postgresqlExcludedObjects")
    """PostgreSQL data source objects to avoid backfilling."""

    spanner_excluded_objects: Optional[SpannerDatabase6] = Field(default=UNSET, alias="spannerExcludedObjects")
    """Spanner data source objects to avoid backfilling."""

    mysql_excluded_objects: Optional[MysqlRdbms6] = Field(default=UNSET, alias="mysqlExcludedObjects")
    """MySQL data source objects to avoid backfilling."""

    sql_server_excluded_objects: Optional[SqlServerRdbms6] = Field(default=UNSET, alias="sqlServerExcludedObjects")
    """SQLServer data source objects to avoid backfilling"""

    mongodb_excluded_objects: Optional[MongodbCluster6] = Field(default=UNSET, alias="mongodbExcludedObjects")
    """MongoDB data source objects to avoid backfilling"""

    oracle_excluded_objects: Optional[OracleRdbms6] = Field(default=UNSET, alias="oracleExcludedObjects")
    """Oracle data source objects to avoid backfilling."""

    salesforce_excluded_objects: Optional[SalesforceOrg1] = Field(default=UNSET, alias="salesforceExcludedObjects")
    """Salesforce data source objects to avoid backfilling"""


class BackfillAllStrategy1Dict(TypedDict):
    saas_excluded_objects: NotRequired[SourceCatalog2Dict]
    postgresql_excluded_objects: NotRequired[PostgresqlRdbms6Dict]
    spanner_excluded_objects: NotRequired[SpannerDatabase6Dict]
    mysql_excluded_objects: NotRequired[MysqlRdbms6Dict]
    sql_server_excluded_objects: NotRequired[SqlServerRdbms6Dict]
    mongodb_excluded_objects: NotRequired[MongodbCluster6Dict]
    oracle_excluded_objects: NotRequired[OracleRdbms6Dict]
    salesforce_excluded_objects: NotRequired[SalesforceOrg1Dict]
