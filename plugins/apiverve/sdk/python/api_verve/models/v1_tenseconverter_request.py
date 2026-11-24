from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1TenseconverterRequest(SdkBaseModel):
    text: str
    """The text to convert to past or future tense"""

    tense: Optional[str] = UNSET
    """The tense to convert the text to"""


class V1TenseconverterRequestDict(TypedDict):
    text: str
    tense: NotRequired[str]
