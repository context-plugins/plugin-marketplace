from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stream_object2 import StreamObject2, StreamObject2Dict


class StartBackfillJobResponse(SdkBaseModel):
    """Response for manually initiating a backfill job for a specific stream object."""

    object_: Optional[StreamObject2] = Field(default=UNSET, alias="object")
    """The stream object resource a backfill job was started for."""


class StartBackfillJobResponseDict(TypedDict):
    object_: NotRequired[StreamObject2Dict]
