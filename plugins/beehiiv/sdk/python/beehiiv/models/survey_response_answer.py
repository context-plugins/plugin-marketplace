from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .survey_response_question import SurveyResponseQuestion, SurveyResponseQuestionDict


class SurveyResponseAnswer(SdkBaseModel):
    answer: Optional[str] = UNSET
    """The answer provided to the question."""

    created: Optional[int] = UNSET
    """The time the answer was created. Measured in seconds since the Unix epoch."""

    id: Optional[int] = UNSET
    """The ID of the answer."""

    question_data: Optional[SurveyResponseQuestion] = UNSET
    updated: Optional[int] = UNSET
    """The date the answer was updated. Measured in seconds since the Unix epoch."""


class SurveyResponseAnswerDict(TypedDict):
    answer: NotRequired[str]
    created: NotRequired[int]
    id: NotRequired[int]
    question_data: NotRequired[SurveyResponseQuestionDict]
    updated: NotRequired[int]
