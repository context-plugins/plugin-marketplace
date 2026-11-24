from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spanner_column import SpannerColumn, SpannerColumnDict


class SpannerTable(SdkBaseModel):
    """Spanner table."""

    table: Optional[str] = UNSET
    """Required. The table name."""

    columns: Optional[list[SpannerColumn]] = UNSET
    """Optional. Spanner columns in the table."""


class SpannerTableDict(TypedDict):
    table: NotRequired[str]
    columns: NotRequired[list[SpannerColumnDict]]
