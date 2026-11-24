from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublishResponse(SdkBaseModel):
    """Response returned after successfully publishing messages."""

    status: Optional[str] = UNSET
    """Status of the publish operation."""

    message_ids: Optional[str] = Field(default=UNSET, alias="messageIds")
    """Comma-separated list of message IDs assigned to the published messages."""


class PublishResponseDict(TypedDict):
    status: NotRequired[str]
    message_ids: NotRequired[str]
