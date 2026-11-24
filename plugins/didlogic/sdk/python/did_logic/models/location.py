from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Location(SdkBaseModel):
    city_id: int
    """City identifier"""

    city_name: str
    """City name"""

    country_name: str
    """Country name"""

    state_id: int
    """State identifier (if applicable)"""

    country_id: int
    """Country identifier"""

    label: str
    """Combined location label for display"""

    city_code: int
    """City code/area code"""

    state_name: str
    """State name (if applicable)"""


class LocationDict(TypedDict):
    city_id: int
    city_name: str
    country_name: str
    state_id: int
    country_id: int
    label: str
    city_code: int
    state_name: str
