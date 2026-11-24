from __future__ import annotations

from typing import Any, Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModerationOutputModerationResult(SdkBaseModel):
    """A moderation result produced for the response input or output."""

    categories: dict[str, bool]
    category_applied_input_types: dict[str, Any]
    category_scores: dict[str, float]
    flagged: bool
    model: str
    type_: Literal["moderation_result"] = Field(default="moderation_result", alias="type")


class ModerationOutputModerationResultDict(TypedDict):
    categories: dict[str, bool]
    category_applied_input_types: dict[str, Any]
    category_scores: dict[str, float]
    flagged: bool
    model: str
    type_: Literal["moderation_result"]
