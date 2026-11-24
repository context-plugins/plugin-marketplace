from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChallengeQuestion(SdkBaseModel):
    call: str
    """The exact request to make, method and URL."""

    ask: str
    """What to read out of that response, in plain English."""


class ChallengeQuestionDict(TypedDict):
    call: str
    ask: str
