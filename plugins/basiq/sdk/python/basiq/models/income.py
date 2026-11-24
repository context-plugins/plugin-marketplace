from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Income(SdkBaseModel):
    """Income range to verify"""

    min: str
    """Minimum income value as a numeric string"""

    max: Optional[str] = UNSET
    """Maximum income value as a numeric string"""


class IncomeDict(TypedDict):
    min: str
    max: NotRequired[str]
