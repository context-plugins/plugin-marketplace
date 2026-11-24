from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_server_schema import SqlServerSchema, SqlServerSchemaDict


class SqlServerRdbms1(SdkBaseModel):
    """Enriched SQLServer RDBMS object."""

    schemas: Optional[list[SqlServerSchema]] = UNSET
    """SQLServer schemas in the database server."""


class SqlServerRdbms1Dict(TypedDict):
    schemas: NotRequired[list[SqlServerSchemaDict]]
