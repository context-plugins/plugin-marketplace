from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .person_detail import PersonDetail, PersonDetailDict


class PersonDetection(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """The time, in milliseconds from the start of the video, that the person's path was tracked. Note that Timestamp is
    not guaranteed to be accurate to the individual frame where the person's path first appears."""

    person: Optional[PersonDetail] = Field(default=UNSET, alias="Person")


class PersonDetectionDict(TypedDict):
    timestamp: NotRequired[int]
    person: NotRequired[PersonDetailDict]
