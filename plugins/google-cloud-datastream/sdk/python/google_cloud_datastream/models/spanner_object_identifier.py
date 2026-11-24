from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpannerObjectIdentifier(SdkBaseModel):
    """Spanner data source object identifier."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """Optional. The schema name."""

    table: Optional[str] = UNSET
    """Required. The table name."""


class SpannerObjectIdentifierDict(TypedDict):
    schema_value: NotRequired[str]
    table: NotRequired[str]
