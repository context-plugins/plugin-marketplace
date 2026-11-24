from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tag2 import Tag2OrStr


class PartOfSpeechTag(SdkBaseModel):
    tag: Optional[Tag2OrStr] = Field(default=UNSET, alias="Tag")
    """Identifies the part of speech that the token represents."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The confidence that Amazon Comprehend has that the part of speech was correctly identified."""


class PartOfSpeechTagDict(TypedDict):
    tag: NotRequired[Tag2OrStr]
    score: NotRequired[float]
