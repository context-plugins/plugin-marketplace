from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class Next(SdkBaseModel):
    date: Optional[Date] = UNSET
    """Next frequency date"""

    amount: Optional[str] = UNSET
    """Next frequency amount"""


class NextDict(TypedDict):
    date: NotRequired[Date]
    amount: NotRequired[str]
