from __future__ import annotations

from typing import TypeAlias

from ..api_v1_classify_request import ApiV1ClassifyRequest, ApiV1ClassifyRequestDict
from ..api_v1_classify_request1 import ApiV1ClassifyRequest1, ApiV1ClassifyRequest1Dict

ApiV1ClassifyRequest2: TypeAlias = ApiV1ClassifyRequest | ApiV1ClassifyRequest1

ApiV1ClassifyRequest2Dict: TypeAlias = ApiV1ClassifyRequestDict | ApiV1ClassifyRequest1Dict
