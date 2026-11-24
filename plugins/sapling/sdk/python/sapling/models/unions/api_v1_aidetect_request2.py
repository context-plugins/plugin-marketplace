from __future__ import annotations

from typing import TypeAlias

from ..api_v1_aidetect_request import ApiV1AidetectRequest, ApiV1AidetectRequestDict
from ..api_v1_aidetect_request1 import ApiV1AidetectRequest1, ApiV1AidetectRequest1Dict

ApiV1AidetectRequest2: TypeAlias = ApiV1AidetectRequest | ApiV1AidetectRequest1

ApiV1AidetectRequest2Dict: TypeAlias = ApiV1AidetectRequestDict | ApiV1AidetectRequest1Dict
