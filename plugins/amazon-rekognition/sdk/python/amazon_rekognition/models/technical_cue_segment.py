from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type6 import Type6OrStr


class TechnicalCueSegment(SdkBaseModel):
    type_: Optional[Type6OrStr] = Field(default=UNSET, alias="Type")
    """The type of the technical cue."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence that Amazon Rekognition Video has in the accuracy of the detected segment."""


class TechnicalCueSegmentDict(TypedDict):
    type_: NotRequired[Type6OrStr]
    confidence: NotRequired[float]
