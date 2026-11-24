from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.match_result import MatchResultOrStr


class ConversationLevelIntentClassificationResultItem(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The intent name used in the evaluation of intent level success or failure."""

    match_result: MatchResultOrStr = Field(alias="matchResult")
    """The number of times the specific intent is used in the evaluation of intent level success or failure."""


class ConversationLevelIntentClassificationResultItemDict(TypedDict):
    intent_name: str
    match_result: MatchResultOrStr
