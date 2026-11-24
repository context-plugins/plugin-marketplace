from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.button3_bundle_social_conversation_api import (
    Button3BundleSocialConversationApi,
    Button3BundleSocialConversationApiDict,
)


class CardBundleSocialConversationApi(SdkBaseModel):
    id: Optional[str] = UNSET
    title: str
    subtitle: OptionalNullable[str] = UNSET
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    buttons: Optional[list[Button3BundleSocialConversationApi]] = UNSET


class CardBundleSocialConversationApiDict(TypedDict):
    id: NotRequired[str]
    title: str
    subtitle: NotRequired[str | None]
    image_url: NotRequired[str | None]
    buttons: NotRequired[list[Button3BundleSocialConversationApiDict]]
