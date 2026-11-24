from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr
from .intent_modeling_scores import IntentModelingScores, IntentModelingScoresDict


class IntentData(SdkBaseModel):
    status: Optional[Status1OrStr] = UNSET
    domain_used: Optional[str] = UNSET
    domain_intent: Optional[str] = UNSET
    """Company's top surging intent topics; "No Surging Topics" when empty"""

    intent_modeling_scores: Optional[IntentModelingScores] = UNSET


class IntentDataDict(TypedDict):
    status: NotRequired[Status1OrStr]
    domain_used: NotRequired[str]
    domain_intent: NotRequired[str]
    intent_modeling_scores: NotRequired[IntentModelingScoresDict]
