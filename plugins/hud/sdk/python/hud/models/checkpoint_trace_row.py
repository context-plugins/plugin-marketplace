from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CheckpointTraceRow(SdkBaseModel):
    """A trace that contributed gradients to a checkpoint (training step)."""

    trace_id: UUID
    reward: Optional[float] = UNSET
    status: str
    created_at: RFC3339DateTime


class CheckpointTraceRowDict(TypedDict):
    trace_id: UUID
    reward: NotRequired[float]
    status: str
    created_at: RFC3339DateTime
