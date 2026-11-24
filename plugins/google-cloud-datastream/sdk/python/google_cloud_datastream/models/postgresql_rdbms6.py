from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_schema import PostgresqlSchema, PostgresqlSchemaDict


class PostgresqlRdbms6(SdkBaseModel):
    """PostgreSQL data source objects to avoid backfilling."""

    postgresql_schemas: Optional[list[PostgresqlSchema]] = Field(default=UNSET, alias="postgresqlSchemas")
    """PostgreSQL schemas in the database server."""


class PostgresqlRdbms6Dict(TypedDict):
    postgresql_schemas: NotRequired[list[PostgresqlSchemaDict]]
