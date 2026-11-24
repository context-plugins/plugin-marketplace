from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleTypeInterval1ApigeeProjectsApi(SdkBaseModel):
    """Required. The observation window. The server quantizes to day boundaries and caps the span at 90 days."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the
    same or after the start."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before
    the end."""


class GoogleTypeInterval1ApigeeProjectsApiDict(TypedDict):
    start_time: NotRequired[str]
    end_time: NotRequired[str]
