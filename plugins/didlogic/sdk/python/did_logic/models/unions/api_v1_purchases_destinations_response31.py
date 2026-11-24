from __future__ import annotations

from typing import TypeAlias

from ..api_v1_purchases_destinations_response3 import (
    ApiV1PurchasesDestinationsResponse3,
    ApiV1PurchasesDestinationsResponse3Dict,
)
from ..error import Error, ErrorDict

ApiV1PurchasesDestinationsResponse31: TypeAlias = Error | ApiV1PurchasesDestinationsResponse3

ApiV1PurchasesDestinationsResponse31Dict: TypeAlias = ErrorDict | ApiV1PurchasesDestinationsResponse3Dict
