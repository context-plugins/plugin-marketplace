from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_server_table import SqlServerTable, SqlServerTableDict


class SqlServerSchema(SdkBaseModel):
    """SQLServer schema."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """The schema name."""

    tables: Optional[list[SqlServerTable]] = UNSET
    """Tables in the schema."""


class SqlServerSchemaDict(TypedDict):
    schema_value: NotRequired[str]
    tables: NotRequired[list[SqlServerTableDict]]
