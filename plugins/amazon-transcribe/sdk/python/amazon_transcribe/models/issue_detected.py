from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .character_offsets import CharacterOffsets, CharacterOffsetsDict


class IssueDetected(SdkBaseModel):
    character_offsets: Optional[CharacterOffsets] = Field(default=UNSET, alias="CharacterOffsets")


class IssueDetectedDict(TypedDict):
    character_offsets: NotRequired[CharacterOffsetsDict]
