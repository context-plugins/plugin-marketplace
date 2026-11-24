from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_entity import MedicalEntity, MedicalEntityDict
from .medical_item import MedicalItem, MedicalItemDict


class MedicalAlternative(SdkBaseModel):
    transcript: Optional[str] = Field(default=UNSET, alias="Transcript")
    """Contains transcribed text."""

    items: Optional[list[MedicalItem]] = Field(default=UNSET, alias="Items")
    """Contains words, phrases, or punctuation marks in your transcription output."""

    entities: Optional[list[MedicalEntity]] = Field(default=UNSET, alias="Entities")
    """Contains entities identified as personal health information (PHI) in your transcription output."""


class MedicalAlternativeDict(TypedDict):
    transcript: NotRequired[str]
    items: NotRequired[list[MedicalItemDict]]
    entities: NotRequired[list[MedicalEntityDict]]
