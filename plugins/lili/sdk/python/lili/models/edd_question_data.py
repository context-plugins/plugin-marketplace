from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EddQuestionData(SdkBaseModel):
    question: Optional[str] = UNSET
    """The question"""

    answer: Optional[str] = UNSET
    """The answer"""

    question_id: Optional[str] = Field(default=UNSET, alias="questionId")
    """The answer"""


class EddQuestionDataDict(TypedDict):
    question: NotRequired[str]
    answer: NotRequired[str]
    question_id: NotRequired[str]
