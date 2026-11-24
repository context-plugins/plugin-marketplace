from __future__ import annotations

from typing import TypeAlias

from ..api_v1_inclusive_request import ApiV1InclusiveRequest, ApiV1InclusiveRequestDict
from ..api_v1_inclusive_request1 import ApiV1InclusiveRequest1, ApiV1InclusiveRequest1Dict

ApiV1InclusiveRequest2: TypeAlias = ApiV1InclusiveRequest | ApiV1InclusiveRequest1

ApiV1InclusiveRequest2Dict: TypeAlias = ApiV1InclusiveRequestDict | ApiV1InclusiveRequest1Dict
