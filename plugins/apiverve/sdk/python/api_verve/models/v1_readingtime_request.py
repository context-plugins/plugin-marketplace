from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ReadingtimeRequest(SdkBaseModel):
    text: str
    """The text to calculate reading time for"""

    wpm: Optional[int] = UNSET
    """Words per minute reading speed"""


class V1ReadingtimeRequestDict(TypedDict):
    text: str
    wpm: NotRequired[int]
