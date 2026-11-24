from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Question(SdkBaseModel):
    id: UUID
    question: str
    answer: str | None
    asked_at: str = Field(alias="askedAt")
    answered_at: str | None = Field(alias="answeredAt")


class QuestionDict(TypedDict):
    id: UUID
    question: str
    answer: str | None
    asked_at: str
    answered_at: str | None
