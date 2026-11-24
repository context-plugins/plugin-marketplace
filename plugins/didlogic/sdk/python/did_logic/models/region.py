from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Region(SdkBaseModel):
    id: int
    """Region/state identifier"""

    name: str
    """State or province name"""

    short_name: str
    """State abbreviation"""


class RegionDict(TypedDict):
    id: int
    name: str
    short_name: str
