from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostgresqlObjectIdentifier(SdkBaseModel):
    """PostgreSQL data source object identifier."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """Required. The schema name."""

    table: Optional[str] = UNSET
    """Required. The table name."""


class PostgresqlObjectIdentifierDict(TypedDict):
    schema_value: NotRequired[str]
    table: NotRequired[str]
