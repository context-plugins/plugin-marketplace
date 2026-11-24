from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .start_conversation_response_event_stream import (
    StartConversationResponseEventStream,
    StartConversationResponseEventStreamDict,
)


class StartConversationResponse(SdkBaseModel):
    response_event_stream: Optional[StartConversationResponseEventStream] = Field(
        default=UNSET, alias="responseEventStream"
    )
    """Exactly one member is set."""


class StartConversationResponseDict(TypedDict):
    response_event_stream: NotRequired[StartConversationResponseEventStreamDict]
