from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spanner_table import SpannerTable, SpannerTableDict


class SpannerSchema(SdkBaseModel):
    """Spanner schema."""

    tables: Optional[list[SpannerTable]] = UNSET
    """Optional. Spanner tables in the schema."""

    schema_value: Optional[str] = Field(default=UNSET, alias="schema")
    """Required. The schema name."""


class SpannerSchemaDict(TypedDict):
    tables: NotRequired[list[SpannerTableDict]]
    schema_value: NotRequired[str]
