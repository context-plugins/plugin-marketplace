from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DatahubV1EventsDeleteRequest(SdkBaseModel):
    """Exactly one of "eventIds" or "time ranges" must be provided."""

    dataset: str
    """The dataset (provider) of the events to be deleted."""

    event_ids: Optional[list[str]] = Field(default=UNSET, alias="eventIds")
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """The start timestamp of the time range in RFC3339 format."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """The end timestamp of the time range in RFC3339 format."""


class DatahubV1EventsDeleteRequestDict(TypedDict):
    dataset: str
    event_ids: NotRequired[list[str]]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
