from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Weather(SdkBaseModel):
    """Current weather — present for geographic entities (cities, regions)"""

    temperature: Optional[str] = UNSET
    """Temperature as displayed"""

    condition: Optional[str] = UNSET
    """Weather condition"""


class WeatherDict(TypedDict):
    temperature: NotRequired[str]
    condition: NotRequired[str]
