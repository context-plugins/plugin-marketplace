from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .did_destination1 import DidDestination1, DidDestination1Dict


class ApiV1PurchasesDestinationsResponse2(SdkBaseModel):
    did_destination: DidDestination1
    """Updated destination details"""


class ApiV1PurchasesDestinationsResponse2Dict(TypedDict):
    did_destination: DidDestination1Dict
