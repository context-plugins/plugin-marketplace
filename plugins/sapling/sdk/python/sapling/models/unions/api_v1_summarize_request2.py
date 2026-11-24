from __future__ import annotations

from typing import TypeAlias

from ..api_v1_summarize_request import ApiV1SummarizeRequest, ApiV1SummarizeRequestDict
from ..api_v1_summarize_request1 import ApiV1SummarizeRequest1, ApiV1SummarizeRequest1Dict

ApiV1SummarizeRequest2: TypeAlias = ApiV1SummarizeRequest | ApiV1SummarizeRequest1

ApiV1SummarizeRequest2Dict: TypeAlias = ApiV1SummarizeRequestDict | ApiV1SummarizeRequest1Dict
