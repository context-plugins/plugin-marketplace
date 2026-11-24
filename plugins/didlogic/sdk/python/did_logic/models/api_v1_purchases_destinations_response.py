from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .destination import Destination, DestinationDict


class ApiV1PurchasesDestinationsResponse(SdkBaseModel):
    destination: list[Destination]
    """List of destinations"""


class ApiV1PurchasesDestinationsResponseDict(TypedDict):
    destination: list[DestinationDict]
