from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpannerChangeStreamPosition2(SdkBaseModel):
    """Optional. Spanner change stream position to start replicating from."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Required. The timestamp to start change stream queries from. The timestamp must be a positive value."""


class SpannerChangeStreamPosition2Dict(TypedDict):
    start_time: NotRequired[str]
