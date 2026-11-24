from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditUsage(SdkBaseModel):
    credit_type: Optional[str] = UNSET
    allocated: Optional[int] = UNSET
    """Value will be 'inf' if infinity"""

    used: Optional[int] = UNSET
    remaining: Optional[int] = UNSET
    """Value will be 'inf' if infinity"""


class CreditUsageDict(TypedDict):
    credit_type: NotRequired[str]
    allocated: NotRequired[int]
    used: NotRequired[int]
    remaining: NotRequired[int]
