from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .checkpoint_ref import CheckpointRef, CheckpointRefDict


class CheckpointResponse(SdkBaseModel):
    """One node in a model's training-checkpoint tree.

    ``id`` is the ``model_checkpoints`` node id (what the tree keys + links on via ``prev_model_checkpoint_id``).
    ``checkpoint_name`` is the served sampler path."""

    id: UUID
    name: Optional[str] = UNSET
    checkpoint_name: Optional[str] = UNSET
    prev_model_checkpoint_id: Optional[UUID] = UNSET
    is_active: bool = False
    created_at: RFC3339DateTime
    num_traces: Optional[int] = UNSET
    num_datums: Optional[int] = UNSET
    num_tokens: Optional[int] = UNSET
    mean_reward: Optional[float] = UNSET
    learning_rate: Optional[float] = UNSET
    loss_fn: Optional[str] = UNSET
    metrics: Optional[dict[str, float]] = UNSET
    jobs: Optional[list[CheckpointRef]] = UNSET
    tasksets: Optional[list[CheckpointRef]] = UNSET
    session_id: Optional[UUID] = UNSET
    session_name: Optional[str] = UNSET
    reward_groups: Optional[list[list[float]]] = UNSET


class CheckpointResponseDict(TypedDict):
    id: UUID
    name: NotRequired[str]
    checkpoint_name: NotRequired[str]
    prev_model_checkpoint_id: NotRequired[UUID]
    is_active: NotRequired[bool]
    created_at: RFC3339DateTime
    num_traces: NotRequired[int]
    num_datums: NotRequired[int]
    num_tokens: NotRequired[int]
    mean_reward: NotRequired[float]
    learning_rate: NotRequired[float]
    loss_fn: NotRequired[str]
    metrics: NotRequired[dict[str, float]]
    jobs: NotRequired[list[CheckpointRefDict]]
    tasksets: NotRequired[list[CheckpointRefDict]]
    session_id: NotRequired[UUID]
    session_name: NotRequired[str]
    reward_groups: NotRequired[list[list[float]]]
