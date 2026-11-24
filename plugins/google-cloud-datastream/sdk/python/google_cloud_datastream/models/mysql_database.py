from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mysql_table import MysqlTable, MysqlTableDict


class MysqlDatabase(SdkBaseModel):
    """MySQL database."""

    database: Optional[str] = UNSET
    """The database name."""

    mysql_tables: Optional[list[MysqlTable]] = Field(default=UNSET, alias="mysqlTables")
    """Tables in the database."""


class MysqlDatabaseDict(TypedDict):
    database: NotRequired[str]
    mysql_tables: NotRequired[list[MysqlTableDict]]
