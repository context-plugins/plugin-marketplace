from __future__ import annotations

from typing import TypeAlias

from ..api_v1_extract_request import ApiV1ExtractRequest, ApiV1ExtractRequestDict
from ..api_v1_extract_request1 import ApiV1ExtractRequest1, ApiV1ExtractRequest1Dict

ApiV1ExtractRequest2: TypeAlias = ApiV1ExtractRequest | ApiV1ExtractRequest1

ApiV1ExtractRequest2Dict: TypeAlias = ApiV1ExtractRequestDict | ApiV1ExtractRequest1Dict
