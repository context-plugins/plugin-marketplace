from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1LeetspeakRequest(SdkBaseModel):
    text: str
    """The text to encode or decode in Leet Speak"""

    mode: str
    """The mode to use"""


class V1LeetspeakRequestDict(TypedDict):
    text: str
    mode: str
