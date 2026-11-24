from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .oracle_column import OracleColumn, OracleColumnDict


class OracleTable(SdkBaseModel):
    """Oracle table."""

    oracle_columns: Optional[list[OracleColumn]] = Field(default=UNSET, alias="oracleColumns")
    """Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes
    everything."""

    table: Optional[str] = UNSET
    """The table name."""


class OracleTableDict(TypedDict):
    oracle_columns: NotRequired[list[OracleColumnDict]]
    table: NotRequired[str]
