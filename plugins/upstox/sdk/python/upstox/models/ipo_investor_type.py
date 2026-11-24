from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.category1 import Category1OrStr


class IpoInvestorType(SdkBaseModel):
    category: Optional[Category1OrStr] = UNSET
    """Investor category the issue accepts. Pass this value as category when applying"""

    description: Optional[str] = UNSET
    """Human-readable name of the category; null when the IPO service does not provide one"""


class IpoInvestorTypeDict(TypedDict):
    category: NotRequired[Category1OrStr]
    description: NotRequired[str]
