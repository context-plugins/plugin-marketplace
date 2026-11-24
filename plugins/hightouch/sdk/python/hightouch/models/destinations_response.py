from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .destination import Destination, DestinationDict


class DestinationsResponse(SdkBaseModel):
    data: list[Destination]


class DestinationsResponseDict(TypedDict):
    data: list[DestinationDict]
