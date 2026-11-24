from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.platform import PlatformOrStr
from .enums.type_bundle_social_automation_api import TypeBundleSocialAutomationApiOrStr


class Input(SdkBaseModel):
    type_: OptionalNullable[TypeBundleSocialAutomationApiOrStr] = Field(default=UNSET, alias="type")
    platform: OptionalNullable[PlatformOrStr] = UNSET
    social_account_id: OptionalNullable[str] = Field(default=UNSET, alias="socialAccountId")
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    conversation_id: OptionalNullable[str] = Field(default=UNSET, alias="conversationId")
    conversation_message_id: OptionalNullable[str] = Field(default=UNSET, alias="conversationMessageId")
    fetched_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="fetchedCommentId")
    sender_external_id: OptionalNullable[str] = Field(default=UNSET, alias="senderExternalId")
    external_message_id: OptionalNullable[str] = Field(default=UNSET, alias="externalMessageId")
    text: OptionalNullable[str] = UNSET
    payload: OptionalNullable[str] = UNSET
    __pydantic_extra__: dict[str, Any] = Field(init=False)


class InputDict(TypedDict, extra_items=Any):  # type: ignore[call-arg, unused-ignore]
    type_: NotRequired[TypeBundleSocialAutomationApiOrStr | None]
    platform: NotRequired[PlatformOrStr | None]
    social_account_id: NotRequired[str | None]
    post_id: NotRequired[str | None]
    conversation_id: NotRequired[str | None]
    conversation_message_id: NotRequired[str | None]
    fetched_comment_id: NotRequired[str | None]
    sender_external_id: NotRequired[str | None]
    external_message_id: NotRequired[str | None]
    text: NotRequired[str | None]
    payload: NotRequired[str | None]
