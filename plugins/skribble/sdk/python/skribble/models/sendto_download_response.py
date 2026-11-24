from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SendtoDownloadResponse(SdkBaseModel):
    content: Optional[str] = UNSET
    """Base64-encoded document content."""


class SendtoDownloadResponseDict(TypedDict):
    content: NotRequired[str]
