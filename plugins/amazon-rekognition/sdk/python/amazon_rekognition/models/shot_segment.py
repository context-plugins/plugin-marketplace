from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShotSegment(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """An Identifier for a shot detection segment detected in a video."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition Video has in the accuracy of the detected segment."""


class ShotSegmentDict(TypedDict):
    index: NotRequired[int]
    confidence: NotRequired[float]
