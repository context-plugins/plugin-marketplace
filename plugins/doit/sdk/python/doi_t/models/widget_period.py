from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class WidgetPeriod(SdkBaseModel):
    """UTC date-time range covered by the widget result. ``endTime`` is exclusive."""

    start_time: RFC3339DateTime = Field(alias="startTime")
    """Inclusive start of the period."""

    end_time: RFC3339DateTime = Field(alias="endTime")
    """Exclusive end of the period."""


class WidgetPeriodDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
