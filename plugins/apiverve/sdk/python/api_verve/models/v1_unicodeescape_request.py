from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1UnicodeescapeRequest(SdkBaseModel):
    text: str
    """The text to escape"""

    action: Optional[str] = UNSET
    """The action to perform"""


class V1UnicodeescapeRequestDict(TypedDict):
    text: str
    action: NotRequired[str]
