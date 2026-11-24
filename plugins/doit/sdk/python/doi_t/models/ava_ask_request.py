from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AvaAskRequest(SdkBaseModel):
    question: str
    """The question to ask Ava."""

    conversation_id: Optional[str] = Field(default=UNSET, alias="conversationId")
    """Optional ID of an existing conversation to continue."""


class AvaAskRequestDict(TypedDict):
    question: str
    conversation_id: NotRequired[str]
