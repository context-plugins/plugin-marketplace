from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1UrlencodeRequest(SdkBaseModel):
    text: str
    """The text to encode"""

    action: Optional[str] = UNSET
    """The action to perform"""


class V1UrlencodeRequestDict(TypedDict):
    text: str
    action: NotRequired[str]
