from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ModelInferenceLogEntry(SdkBaseModel):
    """One gateway call against this model, scoped to the caller's team."""

    id: UUID
    created_at: RFC3339DateTime
    route: str
    status: str
    error_code: Optional[str] = UNSET
    streaming: bool = False
    prompt_tokens: Optional[int] = UNSET
    completion_tokens: Optional[int] = UNSET
    total_tokens: Optional[int] = UNSET
    cost: float = 0.0
    duration_ms: Optional[int] = UNSET
    trace_id: Optional[UUID] = UNSET


class ModelInferenceLogEntryDict(TypedDict):
    id: UUID
    created_at: RFC3339DateTime
    route: str
    status: str
    error_code: NotRequired[str]
    streaming: NotRequired[bool]
    prompt_tokens: NotRequired[int]
    completion_tokens: NotRequired[int]
    total_tokens: NotRequired[int]
    cost: NotRequired[float]
    duration_ms: NotRequired[int]
    trace_id: NotRequired[UUID]
