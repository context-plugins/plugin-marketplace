from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ads7 import Ads7, Ads7Dict


class Ads6(SdkBaseModel):
    """Sponsored ad section extracted from the response"""

    title: Optional[str] = UNSET
    """Section title for the ads"""

    ads: Optional[list[Ads7]] = UNSET
    """Array of sponsored ads"""


class Ads6Dict(TypedDict):
    title: NotRequired[str]
    ads: NotRequired[list[Ads7Dict]]
