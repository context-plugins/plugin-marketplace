from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Location(SdkBaseModel):
    """Business location"""

    address: Optional[str] = UNSET
    """Full street address"""

    latitude: Optional[float] = UNSET
    """GPS latitude"""

    longitude: Optional[float] = UNSET
    """GPS longitude"""


class LocationDict(TypedDict):
    address: NotRequired[str]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
