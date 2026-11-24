from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicApiDatasourceTypeDto(str, Enum):
    BIGQUERY = "bigquery"
    MYSQL = "mysql"
    POSTGRES = "postgres"
    SNOWFLAKE = "snowflake"
    DASK = "dask"
    SPARK = "spark"
    SPARKDF = "sparkdf"
    REDSHIFT = "redshift"
    DUCKDB = "duckdb"
    PRESTO = "presto"
    ORACLE = "oracle"
    ATHENA = "athena"
    TRINO = "trino"
    DREMIO = "dremio"
    VERTICA = "vertica"
    DENODO = "denodo"
    DB2 = "db2"
    DB2Z = "db2z"
    SQLSERVER = "sqlserver"
    DATABRICKS = "databricks"
    SYNAPSE = "synapse"
    FABRIC = "fabric"
    SALESFORCE = "salesforce"

    __str__ = str.__str__


PublicApiDatasourceTypeDtoOrStr: TypeAlias = Annotated[
    PublicApiDatasourceTypeDto | str, open_enum_validator(PublicApiDatasourceTypeDto)
]
