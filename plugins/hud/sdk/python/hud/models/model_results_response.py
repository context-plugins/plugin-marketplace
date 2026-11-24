from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .model_suggested_taskset import ModelSuggestedTaskset, ModelSuggestedTasksetDict
from .model_taskset_result_row import ModelTasksetResultRow, ModelTasksetResultRowDict


class ModelResultsResponse(SdkBaseModel):
    model_id: UUID
    checkpoint_ids: Optional[list[UUID]] = UNSET
    results: list[ModelTasksetResultRow]
    suggested: list[ModelSuggestedTaskset]


class ModelResultsResponseDict(TypedDict):
    model_id: UUID
    checkpoint_ids: NotRequired[list[UUID]]
    results: list[ModelTasksetResultRowDict]
    suggested: list[ModelSuggestedTasksetDict]
