from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Attachment(SdkBaseModel):
    filename: str
    content: str
    """Base64 (a data URL is accepted)."""

    content_type: Optional[str] = UNSET


class AttachmentDict(TypedDict):
    filename: str
    content: str
    content_type: NotRequired[str]
