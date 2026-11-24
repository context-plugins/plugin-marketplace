from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .destination import Destination, DestinationDict
from .origin import Origin, OriginDict


class FlightPointsSimple(SdkBaseModel):
    origin: Origin
    """Origin city and airport"""

    destination: Destination
    """Destination city and airport"""


class FlightPointsSimpleDict(TypedDict):
    origin: OriginDict
    destination: DestinationDict
