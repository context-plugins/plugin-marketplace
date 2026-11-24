from __future__ import annotations

from typing import TypeAlias

from ..api_v1_sipaccounts_response1 import ApiV1SipaccountsResponse1, ApiV1SipaccountsResponse1Dict
from ..error import Error, ErrorDict

ApiV1SipaccountsResponse11: TypeAlias = Error | ApiV1SipaccountsResponse1

ApiV1SipaccountsResponse11Dict: TypeAlias = ErrorDict | ApiV1SipaccountsResponse1Dict
