from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudFlowRefineRequest(SdkBaseModel):
    question: str
    """Natural language description of what to refine or modify in the CloudFlow."""

    conversation_id: Optional[str] = Field(default=UNSET, alias="conversationId")
    """ID of an existing conversation to continue. When omitted, a new conversation is started."""


class CloudFlowRefineRequestDict(TypedDict):
    question: str
    conversation_id: NotRequired[str]
