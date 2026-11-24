from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_schema import PostgresqlSchema, PostgresqlSchemaDict


class PostgresqlRdbms(SdkBaseModel):
    """PostgreSQL database structure."""

    postgresql_schemas: Optional[list[PostgresqlSchema]] = Field(default=UNSET, alias="postgresqlSchemas")
    """PostgreSQL schemas in the database server."""


class PostgresqlRdbmsDict(TypedDict):
    postgresql_schemas: NotRequired[list[PostgresqlSchemaDict]]
