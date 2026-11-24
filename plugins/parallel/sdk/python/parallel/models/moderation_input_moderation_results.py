from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .moderation_input_moderation_results_result import (
    ModerationInputModerationResultsResult,
    ModerationInputModerationResultsResultDict,
)


class ModerationInputModerationResults(SdkBaseModel):
    """Successful moderation results for the request input or generated output."""

    model: str
    results: list[ModerationInputModerationResultsResult]
    type_: Literal["moderation_results"] = Field(default="moderation_results", alias="type")


class ModerationInputModerationResultsDict(TypedDict):
    model: str
    results: list[ModerationInputModerationResultsResultDict]
    type_: Literal["moderation_results"]
