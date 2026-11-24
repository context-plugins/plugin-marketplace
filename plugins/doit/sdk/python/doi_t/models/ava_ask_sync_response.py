from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AvaAskSyncResponse(SdkBaseModel):
    """Ava's response. On success, ``answer`` is present. The endpoint streams keep-alive whitespace while generating
    (to avoid proxy timeouts), so the HTTP status is committed to 200 before the answer is ready; if generation then
    fails, ``answer`` is omitted and ``error`` carries a message instead. Consumers should check for ``error`` before
    reading ``answer``."""

    answer: Optional[str] = UNSET
    """The Ava response text. Present on success."""

    conversation_id: Optional[str] = Field(default=UNSET, alias="conversationId")
    """The conversation ID. Present only for non-ephemeral requests. Can be used with the delete conversation
    endpoint."""

    answer_id: Optional[str] = Field(default=UNSET, alias="answerId")
    """The answer ID within the conversation. Present only for non-ephemeral requests. Required for the feedback
    endpoint."""

    error: Optional[str] = UNSET
    """Present instead of ``answer`` when generation fails after the response has begun streaming (the HTTP status
    remains 200). A human-readable error message."""


class AvaAskSyncResponseDict(TypedDict):
    answer: NotRequired[str]
    conversation_id: NotRequired[str]
    answer_id: NotRequired[str]
    error: NotRequired[str]
