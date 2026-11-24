from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oracle_table import OracleTable, OracleTableDict


class OracleSchema(SdkBaseModel):
    """Oracle schema."""

    oracle_tables: Optional[list[OracleTable]] = Field(default=UNSET, alias="oracleTables")
    """Tables in the schema."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """The schema name."""


class OracleSchemaDict(TypedDict):
    oracle_tables: NotRequired[list[OracleTableDict]]
    schema_value: NotRequired[str]
