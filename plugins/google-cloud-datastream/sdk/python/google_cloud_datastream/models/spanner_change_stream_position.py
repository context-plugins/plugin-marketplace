from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpannerChangeStreamPosition(SdkBaseModel):
    """Represents a position in a Spanner change stream from which to start replicating."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Required. The timestamp to start change stream queries from. The timestamp must be a positive value."""


class SpannerChangeStreamPositionDict(TypedDict):
    start_time: NotRequired[str]
