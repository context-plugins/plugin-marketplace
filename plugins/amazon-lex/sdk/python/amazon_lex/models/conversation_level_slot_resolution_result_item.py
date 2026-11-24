from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.match_result1 import MatchResult1OrStr


class ConversationLevelSlotResolutionResultItem(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The intents used in the slots list for the slot resolution details."""

    slot_name: str = Field(alias="slotName")
    """The slot name in the slots list for the slot resolution details."""

    match_result: MatchResult1OrStr = Field(alias="matchResult")
    """The number of matching slots used in the slots listings for the slot resolution evaluation."""


class ConversationLevelSlotResolutionResultItemDict(TypedDict):
    intent_name: str
    slot_name: str
    match_result: MatchResult1OrStr
