from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OracleObjectIdentifier(SdkBaseModel):
    """Oracle data source object identifier."""

    table: Optional[str] = UNSET
    """Required. The table name."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """Required. The schema name."""


class OracleObjectIdentifierDict(TypedDict):
    table: NotRequired[str]
    schema_value: NotRequired[str]
