from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .question import Question, QuestionDict


class FollowUpForm(SdkBaseModel):
    """The form that ChatGPT shows at the end of an answer to refine the prompt: questions with options, and a button
    that sends a follow-up prompt. ``null`` when the answer has no form. The form is not part of ``text`` or
    ``markdown``. Schema at /api-reference/endpoint/chatgpt/follow-up-form."""

    questions: list[Question]
    """The questions, in the order ChatGPT shows them."""

    submit_label: Optional[str] = Field(default=UNSET, alias="submitLabel")
    """The label of the button that sends the follow-up prompt."""

    follow_up_prompt: Optional[str] = Field(default=UNSET, alias="followUpPrompt")
    """The prompt that the button sends, with ``{name}`` where ChatGPT puts the answer to the question of that ``name``.
    Absent when cloro cannot read it as a template."""


class FollowUpFormDict(TypedDict):
    questions: list[QuestionDict]
    submit_label: NotRequired[str]
    follow_up_prompt: NotRequired[str]
