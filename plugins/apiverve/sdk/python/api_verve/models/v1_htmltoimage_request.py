from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1HtmltoimageRequest(SdkBaseModel):
    html: str
    """HTML code to convert"""

    width: Optional[int] = UNSET
    """Image width in pixels"""

    height: Optional[int] = UNSET
    """Image height in pixels"""

    format: Optional[str] = UNSET
    """Output image format"""


class V1HtmltoimageRequestDict(TypedDict):
    html: str
    width: NotRequired[int]
    height: NotRequired[int]
    format: NotRequired[str]
