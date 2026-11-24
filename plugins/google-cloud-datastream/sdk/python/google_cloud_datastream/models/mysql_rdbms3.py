from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mysql_database import MysqlDatabase, MysqlDatabaseDict


class MysqlRdbms3(SdkBaseModel):
    """The MySQL objects to retrieve from the source."""

    mysql_databases: Optional[list[MysqlDatabase]] = Field(default=UNSET, alias="mysqlDatabases")
    """Mysql databases on the server"""


class MysqlRdbms3Dict(TypedDict):
    mysql_databases: NotRequired[list[MysqlDatabaseDict]]
