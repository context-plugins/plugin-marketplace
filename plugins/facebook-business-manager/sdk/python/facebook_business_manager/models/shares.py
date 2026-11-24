from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Shares(SdkBaseModel):
    """Share count information"""

    count: Optional[int] = UNSET


class SharesDict(TypedDict):
    count: NotRequired[int]
