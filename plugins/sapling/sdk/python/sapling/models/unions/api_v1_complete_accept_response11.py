from __future__ import annotations

from typing import TypeAlias

from ..api_v1_complete_accept_response1 import ApiV1CompleteAcceptResponse1, ApiV1CompleteAcceptResponse1Dict
from ..error import Error, ErrorDict

ApiV1CompleteAcceptResponse11: TypeAlias = Error | ApiV1CompleteAcceptResponse1

ApiV1CompleteAcceptResponse11Dict: TypeAlias = ErrorDict | ApiV1CompleteAcceptResponse1Dict
