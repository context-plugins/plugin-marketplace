from __future__ import annotations

from typing import TypeAlias

from ..api_v1_safety_request import ApiV1SafetyRequest, ApiV1SafetyRequestDict
from ..api_v1_safety_request1 import ApiV1SafetyRequest1, ApiV1SafetyRequest1Dict

ApiV1SafetyRequest2: TypeAlias = ApiV1SafetyRequest | ApiV1SafetyRequest1

ApiV1SafetyRequest2Dict: TypeAlias = ApiV1SafetyRequestDict | ApiV1SafetyRequest1Dict
