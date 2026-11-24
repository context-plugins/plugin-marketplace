from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .did_destination import DidDestination, DidDestinationDict


class ApiV1PurchasesDestinationsResponse1(SdkBaseModel):
    did_destination: DidDestination
    """Created destination details"""


class ApiV1PurchasesDestinationsResponse1Dict(TypedDict):
    did_destination: DidDestinationDict
