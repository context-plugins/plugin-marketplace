from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_column import PostgresqlColumn, PostgresqlColumnDict


class PostgresqlTable(SdkBaseModel):
    """PostgreSQL table."""

    table: Optional[str] = UNSET
    """The table name."""

    postgresql_columns: Optional[list[PostgresqlColumn]] = Field(default=UNSET, alias="postgresqlColumns")
    """PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes
    everything."""


class PostgresqlTableDict(TypedDict):
    table: NotRequired[str]
    postgresql_columns: NotRequired[list[PostgresqlColumnDict]]
