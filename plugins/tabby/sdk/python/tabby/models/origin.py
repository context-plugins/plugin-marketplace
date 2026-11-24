from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Origin(SdkBaseModel):
    """Origin city and airport"""

    air_code: str
    """Origin IATA airport code, for example - JFK"""

    city_code: str
    """Origin city code, for example - NYC"""


class OriginDict(TypedDict):
    air_code: str
    city_code: str
