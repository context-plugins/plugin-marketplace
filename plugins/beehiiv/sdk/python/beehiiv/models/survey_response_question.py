from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SurveyResponseQuestion(SdkBaseModel):
    answer: Optional[str] = UNSET
    """The answer provided to the question."""

    prompt: Optional[str] = UNSET
    """The question that was asked."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of question asked (e.g. multiple choice)."""


class SurveyResponseQuestionDict(TypedDict):
    answer: NotRequired[str]
    prompt: NotRequired[str]
    type_: NotRequired[str]
