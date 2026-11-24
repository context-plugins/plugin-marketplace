from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .celebrity_detail import CelebrityDetail, CelebrityDetailDict


class CelebrityRecognition(SdkBaseModel):
    timestamp: Optional[int] = Field(default=UNSET, alias="Timestamp")
    """The time, in milliseconds from the start of the video, that the celebrity was recognized. Note that Timestamp is
    not guaranteed to be accurate to the individual frame where the celebrity first appears."""

    celebrity: Optional[CelebrityDetail] = Field(default=UNSET, alias="Celebrity")


class CelebrityRecognitionDict(TypedDict):
    timestamp: NotRequired[int]
    celebrity: NotRequired[CelebrityDetailDict]
