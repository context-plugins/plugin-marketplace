from __future__ import annotations

from typing import TypeAlias

from ..api_v2_numbers_purchase_response1 import ApiV2NumbersPurchaseResponse1, ApiV2NumbersPurchaseResponse1Dict
from ..error import Error, ErrorDict

ApiV2NumbersPurchaseResponse11: TypeAlias = Error | ApiV2NumbersPurchaseResponse1

ApiV2NumbersPurchaseResponse11Dict: TypeAlias = ErrorDict | ApiV2NumbersPurchaseResponse1Dict
