from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .moderation_output_moderation_results_result import (
    ModerationOutputModerationResultsResult,
    ModerationOutputModerationResultsResultDict,
)


class ModerationOutputModerationResults(SdkBaseModel):
    """Successful moderation results for the request input or generated output."""

    model: str
    results: list[ModerationOutputModerationResultsResult]
    type_: Literal["moderation_results"] = Field(default="moderation_results", alias="type")


class ModerationOutputModerationResultsDict(TypedDict):
    model: str
    results: list[ModerationOutputModerationResultsResultDict]
    type_: Literal["moderation_results"]
