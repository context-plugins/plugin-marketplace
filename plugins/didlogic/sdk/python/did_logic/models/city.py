from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class City(SdkBaseModel):
    id: int
    """City identifier"""

    name: str
    """City name and state/province"""

    area_code: str
    """Area code for this city"""

    count: int
    """Number of available DIDs in this city"""


class CityDict(TypedDict):
    id: int
    name: str
    area_code: str
    count: int
