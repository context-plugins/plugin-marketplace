from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_table import PostgresqlTable, PostgresqlTableDict


class PostgresqlSchema(SdkBaseModel):
    """PostgreSQL schema."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """The schema name."""

    postgresql_tables: Optional[list[PostgresqlTable]] = Field(default=UNSET, alias="postgresqlTables")
    """Tables in the schema."""


class PostgresqlSchemaDict(TypedDict):
    schema_value: NotRequired[str]
    postgresql_tables: NotRequired[list[PostgresqlTableDict]]
