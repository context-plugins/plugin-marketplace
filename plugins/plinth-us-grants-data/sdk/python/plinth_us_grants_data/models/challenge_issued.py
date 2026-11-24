from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .challenge_question import ChallengeQuestion, ChallengeQuestionDict


class ChallengeIssued(SdkBaseModel):
    code: int
    message: Optional[str] = UNSET
    questions: list[ChallengeQuestion]
    answer_at: str
    attempts: Optional[str] = UNSET
    """How many answers this challenge takes and how they are spaced. Running out draws a FRESH challenge rather than
    locking the key."""


class ChallengeIssuedDict(TypedDict):
    code: int
    message: NotRequired[str]
    questions: list[ChallengeQuestionDict]
    answer_at: str
    attempts: NotRequired[str]
