from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnswerRequest(SdkBaseModel):
    answers: list[str]
    """One value per question, in the order given. Compared case-insensitively; "yes"/"true" and "$1,234"/"1234" are
    equivalent."""


class AnswerRequestDict(TypedDict):
    answers: list[str]
