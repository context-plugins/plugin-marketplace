from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class QaAgentLinkedTaskset(SdkBaseModel):
    id: UUID
    name: str
    task_count: int = 0
    judged_trace_count: int = 0


class QaAgentLinkedTasksetDict(TypedDict):
    id: UUID
    name: str
    task_count: NotRequired[int]
    judged_trace_count: NotRequired[int]
