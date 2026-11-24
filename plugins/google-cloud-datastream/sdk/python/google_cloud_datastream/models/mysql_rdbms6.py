from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mysql_database import MysqlDatabase, MysqlDatabaseDict


class MysqlRdbms6(SdkBaseModel):
    """MySQL data source objects to avoid backfilling."""

    mysql_databases: Optional[list[MysqlDatabase]] = Field(default=UNSET, alias="mysqlDatabases")
    """Mysql databases on the server"""


class MysqlRdbms6Dict(TypedDict):
    mysql_databases: NotRequired[list[MysqlDatabaseDict]]
