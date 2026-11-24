from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VisualSignatureImage(SdkBaseModel):
    """Visual signature image."""

    content: str
    """Base64 encoded bytes of content."""

    content_type: str
    """Content type of bytes sent in content. At the moment this MUST be image/png"""

    content_size: Optional[int] = UNSET
    """Size of ``content`` in bytes. Calculated by the server."""


class VisualSignatureImageDict(TypedDict):
    content: str
    content_type: str
    content_size: NotRequired[int]
