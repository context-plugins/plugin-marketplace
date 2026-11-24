from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ProfanityfilterRequest(SdkBaseModel):
    text: str
    """The text to filter profanity words from"""

    mask: Optional[str] = UNSET
    """The mask to replace the profanity words with. Should be a Single Character (e.g., *)"""


class V1ProfanityfilterRequestDict(TypedDict):
    text: str
    mask: NotRequired[str]
