from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stream_object3 import StreamObject3, StreamObject3Dict


class StopBackfillJobResponse(SdkBaseModel):
    """Response for manually stop a backfill job for a specific stream object."""

    object_: Optional[StreamObject3] = Field(default=UNSET, alias="object")
    """The stream object resource the backfill job was stopped for."""


class StopBackfillJobResponseDict(TypedDict):
    object_: NotRequired[StreamObject3Dict]
