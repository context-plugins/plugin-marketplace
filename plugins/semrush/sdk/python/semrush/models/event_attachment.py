from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventAttachment(SdkBaseModel):
    """Event additional files"""

    name: Optional[str] = UNSET
    """File name"""

    mime: Optional[str] = UNSET
    """File content mime type"""

    content: Optional[str] = UNSET
    """File content in Base64"""


class EventAttachmentDict(TypedDict):
    name: NotRequired[str]
    mime: NotRequired[str]
    content: NotRequired[str]
