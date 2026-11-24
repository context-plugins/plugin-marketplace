from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ReversetextRequest(SdkBaseModel):
    text: str
    """Text to reverse"""

    mode: Optional[str] = UNSET
    """Reversal mode"""


class V1ReversetextRequestDict(TypedDict):
    text: str
    mode: NotRequired[str]
