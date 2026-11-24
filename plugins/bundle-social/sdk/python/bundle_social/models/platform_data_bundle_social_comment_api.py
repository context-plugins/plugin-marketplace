from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkTypedExtrasModel
from .enums.display_state import DisplayStateOrStr
from .enums.origin import OriginOrStr
from .enums.reaction_type import ReactionTypeOrStr
from .unions.platform_data_additional_fields import PlatformDataAdditionalFields, PlatformDataAdditionalFieldsDict


class PlatformDataBundleSocialCommentApi(SdkTypedExtrasModel):
    can_delete: OptionalNullable[bool] = Field(default=UNSET, alias="canDelete")
    can_hide: OptionalNullable[bool] = Field(default=UNSET, alias="canHide")
    can_like: OptionalNullable[bool] = Field(default=UNSET, alias="canLike")
    can_moderate: OptionalNullable[bool] = Field(default=UNSET, alias="canModerate")
    hidden: OptionalNullable[bool] = UNSET
    liked_by_me: OptionalNullable[bool] = Field(default=UNSET, alias="likedByMe")
    liked_by_automation: OptionalNullable[bool] = Field(default=UNSET, alias="likedByAutomation")
    reactions_count: OptionalNullable[float] = Field(default=UNSET, alias="reactionsCount")
    reaction_type: OptionalNullable[ReactionTypeOrStr] = Field(default=UNSET, alias="reactionType")
    owner: OptionalNullable[bool] = UNSET
    hide_status: OptionalNullable[str] = Field(default=UNSET, alias="hideStatus")
    moderation_status: OptionalNullable[str] = Field(default=UNSET, alias="moderationStatus")
    approval_status: OptionalNullable[str] = Field(default=UNSET, alias="approvalStatus")
    status: OptionalNullable[str] = UNSET
    attachment_type: OptionalNullable[str] = Field(default=UNSET, alias="attachmentType")
    attachment_url: OptionalNullable[str] = Field(default=UNSET, alias="attachmentUrl")
    cid: OptionalNullable[str] = UNSET
    origin: OptionalNullable[OriginOrStr] = UNSET
    source: OptionalNullable[str] = UNSET
    media_product_type: OptionalNullable[str] = Field(default=UNSET, alias="mediaProductType")
    bundle_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="bundleCommentId")
    display_state: OptionalNullable[DisplayStateOrStr] = Field(default=UNSET, alias="displayState")
    disabled_reason: OptionalNullable[str] = Field(default=UNSET, alias="disabledReason")
    __pydantic_extra__: dict[str, PlatformDataAdditionalFields] = Field(init=False)


class PlatformDataBundleSocialCommentApiDict(TypedDict, extra_items=PlatformDataAdditionalFieldsDict):  # type: ignore[call-arg, unused-ignore]
    can_delete: NotRequired[bool | None]
    can_hide: NotRequired[bool | None]
    can_like: NotRequired[bool | None]
    can_moderate: NotRequired[bool | None]
    hidden: NotRequired[bool | None]
    liked_by_me: NotRequired[bool | None]
    liked_by_automation: NotRequired[bool | None]
    reactions_count: NotRequired[float | None]
    reaction_type: NotRequired[ReactionTypeOrStr | None]
    owner: NotRequired[bool | None]
    hide_status: NotRequired[str | None]
    moderation_status: NotRequired[str | None]
    approval_status: NotRequired[str | None]
    status: NotRequired[str | None]
    attachment_type: NotRequired[str | None]
    attachment_url: NotRequired[str | None]
    cid: NotRequired[str | None]
    origin: NotRequired[OriginOrStr | None]
    source: NotRequired[str | None]
    media_product_type: NotRequired[str | None]
    bundle_comment_id: NotRequired[str | None]
    display_state: NotRequired[DisplayStateOrStr | None]
    disabled_reason: NotRequired[str | None]
