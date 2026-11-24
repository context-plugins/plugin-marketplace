from __future__ import annotations

from typing import TypeAlias

from ..api_v1_ner_request import ApiV1NerRequest, ApiV1NerRequestDict
from ..api_v1_ner_request1 import ApiV1NerRequest1, ApiV1NerRequest1Dict

ApiV1NerRequest2: TypeAlias = ApiV1NerRequest | ApiV1NerRequest1

ApiV1NerRequest2Dict: TypeAlias = ApiV1NerRequestDict | ApiV1NerRequest1Dict
