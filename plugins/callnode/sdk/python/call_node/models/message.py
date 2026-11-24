from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.message_type import MessageTypeOrStr
from .enums.status_callnode_io_messaging_api import StatusCallnodeIoMessagingApiOrStr


class Message(SdkBaseModel):
    id: Optional[str] = UNSET
    status: Optional[StatusCallnodeIoMessagingApiOrStr] = UNSET
    from_: Optional[str] = Field(default=UNSET, alias="from")
    """Plus sign followed by 7–15 digits."""

    to: Optional[str] = UNSET
    """Plus sign followed by 7–15 digits."""

    message_type: Optional[MessageTypeOrStr] = Field(default=UNSET, alias="messageType")
    segments: Optional[int] = UNSET
    cost: Optional[float] = UNSET
    error_code: OptionalNullable[str] = Field(default=UNSET, alias="errorCode")
    error_message: OptionalNullable[str] = Field(default=UNSET, alias="errorMessage")
    delivered_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deliveredAt")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    metadata: Optional[Any] = UNSET


class MessageDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[StatusCallnodeIoMessagingApiOrStr]
    from_: NotRequired[str]
    to: NotRequired[str]
    message_type: NotRequired[MessageTypeOrStr]
    segments: NotRequired[int]
    cost: NotRequired[float]
    error_code: NotRequired[str | None]
    error_message: NotRequired[str | None]
    delivered_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
    metadata: NotRequired[Any]
