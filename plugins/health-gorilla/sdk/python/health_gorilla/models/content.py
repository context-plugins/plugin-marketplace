from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attachment import Attachment, AttachmentDict


class Content(SdkBaseModel):
    attachment: Optional[Attachment] = UNSET


class ContentDict(TypedDict):
    attachment: NotRequired[AttachmentDict]
