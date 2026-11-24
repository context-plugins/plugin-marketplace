from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SlotPriority(SdkBaseModel):
    priority: int
    """The priority that Amazon Lex should apply to the slot."""

    slot_id: str = Field(alias="slotId")
    """The unique identifier of the slot."""


class SlotPriorityDict(TypedDict):
    priority: int
    slot_id: str
