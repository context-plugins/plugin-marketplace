from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ModelSuggestedTaskset(SdkBaseModel):
    """A taskset the model has not been evaluated on yet."""

    taskset_id: UUID
    taskset_name: str
    is_public: bool
    purpose: Optional[str] = UNSET
    task_count: int
    updated_at: Optional[RFC3339DateTime] = UNSET


class ModelSuggestedTasksetDict(TypedDict):
    taskset_id: UUID
    taskset_name: str
    is_public: bool
    purpose: NotRequired[str]
    task_count: int
    updated_at: NotRequired[RFC3339DateTime]
