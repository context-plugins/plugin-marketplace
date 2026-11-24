from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class State1(SdkBaseModel):
    current_state: str | None = Field(alias="currentState")
    open_questions: list[str] = Field(alias="openQuestions")
    constraints: list[str]
    blocked_by: list[str] = Field(alias="blockedBy")
    next_action: str | None = Field(alias="nextAction")


class State1Dict(TypedDict):
    current_state: str | None
    open_questions: list[str]
    constraints: list[str]
    blocked_by: list[str]
    next_action: str | None
