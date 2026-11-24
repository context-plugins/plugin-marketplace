from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1PiglatinRequest(SdkBaseModel):
    text: str
    """The text to encode in Pig Latin"""

    exclusions: Optional[str] = UNSET
    """Words to exclude from encoding"""


class V1PiglatinRequestDict(TypedDict):
    text: str
    exclusions: NotRequired[str]
