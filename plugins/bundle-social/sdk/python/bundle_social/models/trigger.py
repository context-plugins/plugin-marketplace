from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.match_mode import MatchMode, MatchModeOrStr
from .enums.platform import PlatformOrStr
from .enums.type_bundle_social_automation_api import TypeBundleSocialAutomationApiOrStr


class Trigger(SdkBaseModel):
    keywords: Optional[list[str]] = UNSET
    match_mode: MatchModeOrStr = Field(default=MatchMode.ANY, alias="matchMode")
    case_sensitive: bool = Field(default=False, alias="caseSensitive")
    sender_external_ids: Optional[list[str]] = Field(default=UNSET, alias="senderExternalIds")
    payloads: Optional[list[str]] = UNSET
    action_delay_seconds: int = Field(default=0, alias="actionDelaySeconds")
    id: Optional[str] = UNSET
    type_: TypeBundleSocialAutomationApiOrStr = Field(alias="type")
    platform: PlatformOrStr
    social_account_id: str = Field(alias="socialAccountId")
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")


class TriggerDict(TypedDict):
    keywords: NotRequired[list[str]]
    match_mode: NotRequired[MatchModeOrStr]
    case_sensitive: NotRequired[bool]
    sender_external_ids: NotRequired[list[str]]
    payloads: NotRequired[list[str]]
    action_delay_seconds: NotRequired[int]
    id: NotRequired[str]
    type_: TypeBundleSocialAutomationApiOrStr
    platform: PlatformOrStr
    social_account_id: str
    post_id: NotRequired[str | None]
