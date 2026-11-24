from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oracle_schema import OracleSchema, OracleSchemaDict


class OracleRdbms1(SdkBaseModel):
    """Enriched Oracle RDBMS object."""

    oracle_schemas: Optional[list[OracleSchema]] = Field(default=UNSET, alias="oracleSchemas")
    """Oracle schemas/databases in the database server."""


class OracleRdbms1Dict(TypedDict):
    oracle_schemas: NotRequired[list[OracleSchemaDict]]
