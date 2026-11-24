from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment_bundle_social_conversation_api import (
    AttachmentBundleSocialConversationApi,
    AttachmentBundleSocialConversationApiDict,
)
from .carousel import Carousel, CarouselDict


class Content1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    text: str
    attachments: Optional[list[AttachmentBundleSocialConversationApi]] = UNSET
    carousel: Optional[Carousel] = UNSET


class Content1Dict(TypedDict):
    text: str
    attachments: NotRequired[list[AttachmentBundleSocialConversationApiDict]]
    carousel: NotRequired[CarouselDict]
