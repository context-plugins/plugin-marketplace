from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Attachment(SdkBaseModel):
    id: Optional[int] = UNSET
    file_name: Optional[str] = UNSET
    content_url: Optional[str] = UNSET


class AttachmentDict(TypedDict):
    id: NotRequired[int]
    file_name: NotRequired[str]
    content_url: NotRequired[str]
