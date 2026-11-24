from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_server_column import SqlServerColumn, SqlServerColumnDict


class SqlServerTable(SdkBaseModel):
    """SQLServer table."""

    columns: Optional[list[SqlServerColumn]] = UNSET
    """SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes
    everything."""

    table: Optional[str] = UNSET
    """The table name."""


class SqlServerTableDict(TypedDict):
    columns: NotRequired[list[SqlServerColumnDict]]
    table: NotRequired[str]
