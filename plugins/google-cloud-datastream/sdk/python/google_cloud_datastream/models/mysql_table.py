from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mysql_column import MysqlColumn, MysqlColumnDict


class MysqlTable(SdkBaseModel):
    """MySQL table."""

    table: Optional[str] = UNSET
    """The table name."""

    mysql_columns: Optional[list[MysqlColumn]] = Field(default=UNSET, alias="mysqlColumns")
    """MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes
    everything."""


class MysqlTableDict(TypedDict):
    table: NotRequired[str]
    mysql_columns: NotRequired[list[MysqlColumnDict]]
