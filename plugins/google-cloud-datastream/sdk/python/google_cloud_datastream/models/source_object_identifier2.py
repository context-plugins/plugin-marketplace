from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_object_identifier import MongodbObjectIdentifier, MongodbObjectIdentifierDict
from .mysql_object_identifier import MysqlObjectIdentifier, MysqlObjectIdentifierDict
from .oracle_object_identifier import OracleObjectIdentifier, OracleObjectIdentifierDict
from .postgresql_object_identifier import PostgresqlObjectIdentifier, PostgresqlObjectIdentifierDict
from .salesforce_object_identifier import SalesforceObjectIdentifier, SalesforceObjectIdentifierDict
from .spanner_object_identifier import SpannerObjectIdentifier, SpannerObjectIdentifierDict
from .sql_server_object_identifier import SqlServerObjectIdentifier, SqlServerObjectIdentifierDict


class SourceObjectIdentifier2(SdkBaseModel):
    """Required. The source object identifier which maps to the stream object."""

    mongodb_identifier: Optional[MongodbObjectIdentifier] = Field(default=UNSET, alias="mongodbIdentifier")
    """MongoDB data source object identifier."""

    oracle_identifier: Optional[OracleObjectIdentifier] = Field(default=UNSET, alias="oracleIdentifier")
    """Oracle data source object identifier."""

    spanner_identifier: Optional[SpannerObjectIdentifier] = Field(default=UNSET, alias="spannerIdentifier")
    """Spanner data source object identifier."""

    salesforce_identifier: Optional[SalesforceObjectIdentifier] = Field(default=UNSET, alias="salesforceIdentifier")
    """Salesforce data source object identifier."""

    postgresql_identifier: Optional[PostgresqlObjectIdentifier] = Field(default=UNSET, alias="postgresqlIdentifier")
    """PostgreSQL data source object identifier."""

    sql_server_identifier: Optional[SqlServerObjectIdentifier] = Field(default=UNSET, alias="sqlServerIdentifier")
    """SQLServer data source object identifier."""

    mysql_identifier: Optional[MysqlObjectIdentifier] = Field(default=UNSET, alias="mysqlIdentifier")
    """Mysql data source object identifier."""


class SourceObjectIdentifier2Dict(TypedDict):
    mongodb_identifier: NotRequired[MongodbObjectIdentifierDict]
    oracle_identifier: NotRequired[OracleObjectIdentifierDict]
    spanner_identifier: NotRequired[SpannerObjectIdentifierDict]
    salesforce_identifier: NotRequired[SalesforceObjectIdentifierDict]
    postgresql_identifier: NotRequired[PostgresqlObjectIdentifierDict]
    sql_server_identifier: NotRequired[SqlServerObjectIdentifierDict]
    mysql_identifier: NotRequired[MysqlObjectIdentifierDict]
