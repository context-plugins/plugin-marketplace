from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Brand(SdkBaseModel):
    """Advertiser brand information"""

    name: str
    """Advertiser brand name"""

    url: str
    """Advertiser brand URL"""

    favicon: Optional[str] = UNSET
    """Advertiser brand favicon URL"""


class BrandDict(TypedDict):
    name: str
    url: str
    favicon: NotRequired[str]
