from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1MorsecodeRequest(SdkBaseModel):
    text: str
    """The text to encode or decode in Morse code"""

    audio: Optional[bool] = UNSET
    """Set to true to include an audio file of the Morse code"""


class V1MorsecodeRequestDict(TypedDict):
    text: str
    audio: NotRequired[bool]
