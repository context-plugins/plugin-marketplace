from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class KeyRatioData(SdkBaseModel):
    name: Optional[str] = UNSET
    """Name of the ratio"""

    company_value: Optional[str] = UNSET
    """Ratio value for the company"""

    sector_value: Optional[str] = UNSET
    """Ratio value for the sector reference"""


class KeyRatioDataDict(TypedDict):
    name: NotRequired[str]
    company_value: NotRequired[str]
    sector_value: NotRequired[str]
