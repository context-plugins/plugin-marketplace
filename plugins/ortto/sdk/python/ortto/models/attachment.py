from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Attachment(SdkBaseModel):
    name: Optional[str] = UNSET
    data: Optional[str] = UNSET
    """Base64-encoded file contents."""

    mime_type: Optional[str] = UNSET


class AttachmentDict(TypedDict):
    name: NotRequired[str]
    data: NotRequired[str]
    mime_type: NotRequired[str]
