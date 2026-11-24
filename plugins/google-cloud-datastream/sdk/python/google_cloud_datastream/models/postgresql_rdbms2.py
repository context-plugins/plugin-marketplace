from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .postgresql_schema import PostgresqlSchema, PostgresqlSchemaDict


class PostgresqlRdbms2(SdkBaseModel):
    """Optional. PostgreSQL RDBMS to enrich with child data objects and metadata."""

    postgresql_schemas: Optional[list[PostgresqlSchema]] = Field(default=UNSET, alias="postgresqlSchemas")
    """PostgreSQL schemas in the database server."""


class PostgresqlRdbms2Dict(TypedDict):
    postgresql_schemas: NotRequired[list[PostgresqlSchemaDict]]
