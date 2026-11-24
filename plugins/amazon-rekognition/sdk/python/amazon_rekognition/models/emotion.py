from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr


class Emotion(SdkBaseModel):
    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="Type")
    """Type of emotion detected."""

    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """Level of confidence in the determination."""


class EmotionDict(TypedDict):
    type_: NotRequired[Type1OrStr]
    confidence: NotRequired[float]
