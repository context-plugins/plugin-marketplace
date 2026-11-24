from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Destination(SdkBaseModel):
    """Destination city and airport"""

    air_code: str
    """Destination IATA airport code, for example - LAX"""

    city_code: str
    """Destination city code, for example - LAX"""


class DestinationDict(TypedDict):
    air_code: str
    city_code: str
