from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudFlowBuildRequest(SdkBaseModel):
    question: str
    """Natural language description of the CloudFlow to build from scratch."""

    conversation_id: Optional[str] = Field(default=UNSET, alias="conversationId")
    """ID of an existing conversation to continue. When omitted, a new conversation is started."""


class CloudFlowBuildRequestDict(TypedDict):
    question: str
    conversation_id: NotRequired[str]
