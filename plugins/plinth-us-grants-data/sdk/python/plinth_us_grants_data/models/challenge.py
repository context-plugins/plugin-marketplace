from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .challenge_question import ChallengeQuestion, ChallengeQuestionDict


class Challenge(SdkBaseModel):
    """Present when the key arrives LOCKED. Until these are answered the key may make only the calls named here."""

    questions: Optional[list[ChallengeQuestion]] = UNSET
    answer_at: Optional[str] = UNSET
    attempts: Optional[str] = UNSET
    """How many answers this challenge takes and how they are spaced. Running out draws a FRESH challenge rather than
    locking the key."""


class ChallengeDict(TypedDict):
    questions: NotRequired[list[ChallengeQuestionDict]]
    answer_at: NotRequired[str]
    attempts: NotRequired[str]
