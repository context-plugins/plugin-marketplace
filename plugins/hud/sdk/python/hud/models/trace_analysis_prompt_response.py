from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TraceAnalysisPromptResponse(SdkBaseModel):
    """A size-bounded debugging prompt for a trace, ready to paste into a coding agent."""

    trace_id: UUID
    prompt: str
    truncated: bool


class TraceAnalysisPromptResponseDict(TypedDict):
    trace_id: UUID
    prompt: str
    truncated: bool
