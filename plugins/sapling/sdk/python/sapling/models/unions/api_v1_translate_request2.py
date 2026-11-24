from __future__ import annotations

from typing import TypeAlias

from ..api_v1_translate_request import ApiV1TranslateRequest, ApiV1TranslateRequestDict
from ..api_v1_translate_request1 import ApiV1TranslateRequest1, ApiV1TranslateRequest1Dict

ApiV1TranslateRequest2: TypeAlias = ApiV1TranslateRequest | ApiV1TranslateRequest1

ApiV1TranslateRequest2Dict: TypeAlias = ApiV1TranslateRequestDict | ApiV1TranslateRequest1Dict
