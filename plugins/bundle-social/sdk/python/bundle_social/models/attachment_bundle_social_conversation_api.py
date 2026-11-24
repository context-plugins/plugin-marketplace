from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.type3_bundle_social_conversation_api import Type3BundleSocialConversationApiOrStr


class AttachmentBundleSocialConversationApi(SdkBaseModel):
    type_: Type3BundleSocialConversationApiOrStr = Field(alias="type")
    url: OptionalNullable[str] = UNSET
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    mime_type: OptionalNullable[str] = Field(default=UNSET, alias="mimeType")
    name: OptionalNullable[str] = UNSET
    caption_track_url: OptionalNullable[str] = Field(default=UNSET, alias="captionTrackUrl")
    caption_language: OptionalNullable[str] = Field(default=UNSET, alias="captionLanguage")
    caption_label: OptionalNullable[str] = Field(default=UNSET, alias="captionLabel")


class AttachmentBundleSocialConversationApiDict(TypedDict):
    type_: Type3BundleSocialConversationApiOrStr
    url: NotRequired[str | None]
    external_id: NotRequired[str | None]
    mime_type: NotRequired[str | None]
    name: NotRequired[str | None]
    caption_track_url: NotRequired[str | None]
    caption_language: NotRequired[str | None]
    caption_label: NotRequired[str | None]
