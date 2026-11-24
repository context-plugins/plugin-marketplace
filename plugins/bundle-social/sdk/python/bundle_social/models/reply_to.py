from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ReplyTo(SdkBaseModel):
    external_message_id: OptionalNullable[str] = Field(default=UNSET, alias="externalMessageId")
    is_self_reply: OptionalNullable[bool] = Field(default=UNSET, alias="isSelfReply")
    message_id: OptionalNullable[str] = Field(default=UNSET, alias="messageId")


class ReplyToDict(TypedDict):
    external_message_id: NotRequired[str | None]
    is_self_reply: NotRequired[bool | None]
    message_id: NotRequired[str | None]
