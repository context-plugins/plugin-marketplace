from __future__ import annotations

from typing import TypeAlias

from ..api_v1_simplify_request import ApiV1SimplifyRequest, ApiV1SimplifyRequestDict
from ..api_v1_simplify_request1 import ApiV1SimplifyRequest1, ApiV1SimplifyRequest1Dict

ApiV1SimplifyRequest2: TypeAlias = ApiV1SimplifyRequest | ApiV1SimplifyRequest1

ApiV1SimplifyRequest2Dict: TypeAlias = ApiV1SimplifyRequestDict | ApiV1SimplifyRequest1Dict
