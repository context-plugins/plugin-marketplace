from __future__ import annotations

from typing import TypeAlias

from ..api_v1_quality_request import ApiV1QualityRequest, ApiV1QualityRequestDict
from ..api_v1_quality_request1 import ApiV1QualityRequest1, ApiV1QualityRequest1Dict

ApiV1QualityRequest2: TypeAlias = ApiV1QualityRequest | ApiV1QualityRequest1

ApiV1QualityRequest2Dict: TypeAlias = ApiV1QualityRequestDict | ApiV1QualityRequest1Dict
