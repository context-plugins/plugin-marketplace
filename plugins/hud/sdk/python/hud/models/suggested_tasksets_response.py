from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .model_suggested_taskset import ModelSuggestedTaskset, ModelSuggestedTasksetDict


class SuggestedTasksetsResponse(SdkBaseModel):
    suggested: list[ModelSuggestedTaskset]


class SuggestedTasksetsResponseDict(TypedDict):
    suggested: list[ModelSuggestedTasksetDict]
