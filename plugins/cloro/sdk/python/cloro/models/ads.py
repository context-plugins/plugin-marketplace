from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ads1 import Ads1, Ads1Dict


class Ads(SdkBaseModel):
    """Sponsored ad section extracted from the response"""

    title: Optional[str] = UNSET
    """Section title for the ads"""

    ads: Optional[list[Ads1]] = UNSET
    """Array of sponsored ads"""


class AdsDict(TypedDict):
    title: NotRequired[str]
    ads: NotRequired[list[Ads1Dict]]
