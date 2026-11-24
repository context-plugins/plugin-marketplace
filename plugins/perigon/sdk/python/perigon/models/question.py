from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Question(SdkBaseModel):
    """Questions and answers generated from the story content."""

    question: OptionalNullable[str] = UNSET
    """Question generated from the story content."""

    answer: OptionalNullable[str] = UNSET
    """Answer generated from the story content."""

    references: OptionalNullable[list[str]] = UNSET
    """Article IDs supporting the answer."""


class QuestionDict(TypedDict):
    question: NotRequired[str | None]
    answer: NotRequired[str | None]
    references: NotRequired[list[str] | None]
