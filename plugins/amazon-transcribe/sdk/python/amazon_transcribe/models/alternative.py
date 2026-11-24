from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity import Entity, EntityDict
from .item import Item, ItemDict


class Alternative(SdkBaseModel):
    transcript: Optional[str] = Field(default=UNSET, alias="Transcript")
    """Contains transcribed text."""

    items: Optional[list[Item]] = Field(default=UNSET, alias="Items")
    """Contains words, phrases, or punctuation marks in your transcription output."""

    entities: Optional[list[Entity]] = Field(default=UNSET, alias="Entities")
    """Contains entities identified as personally identifiable information (PII) in your transcription output."""


class AlternativeDict(TypedDict):
    transcript: NotRequired[str]
    items: NotRequired[list[ItemDict]]
    entities: NotRequired[list[EntityDict]]
