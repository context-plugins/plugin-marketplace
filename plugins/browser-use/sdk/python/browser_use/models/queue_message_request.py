from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QueueMessageRequest(SdkBaseModel):
    """Send a message to a session. If the session is busy the message waits on the queue and runs as the next turn; if
    idle it runs immediately.

    Set ``interrupt`` to make it take effect now: the session's active run is cancelled and this message drains straight
    after. Interrupt is a no-op when the session is already idle, and BEST-EFFORT when busy — if the cancel can't be
    delivered, the message stays queued and runs after the current turn."""

    model_config = ConfigDict(extra="forbid")

    text: str
    interrupt: bool = False
    attached_file_ids: Optional[list[UUID]] = Field(default=UNSET, alias="attachedFileIds")


class QueueMessageRequestDict(TypedDict):
    text: str
    interrupt: NotRequired[bool]
    attached_file_ids: NotRequired[list[UUID]]
