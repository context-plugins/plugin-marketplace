from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1MarkdowntoimageRequest(SdkBaseModel):
    markdown: str
    """Markdown text to convert"""

    width: Optional[int] = UNSET
    """Image width in pixels"""

    height: Optional[int] = UNSET
    """Image height in pixels"""

    format: Optional[str] = UNSET
    """Output image format"""


class V1MarkdowntoimageRequestDict(TypedDict):
    markdown: str
    width: NotRequired[int]
    height: NotRequired[int]
    format: NotRequired[str]
