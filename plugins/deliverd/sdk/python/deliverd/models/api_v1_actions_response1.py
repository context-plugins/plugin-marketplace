from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .action import Action, ActionDict


class ApiV1ActionsResponse1(SdkBaseModel):
    actions: list[Action]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1ActionsResponse1Dict(TypedDict):
    actions: list[ActionDict]
    next_cursor: str | None
