from __future__ import annotations

from typing import TypeAlias

from ..api_v1_langdetect_request import ApiV1LangdetectRequest, ApiV1LangdetectRequestDict
from ..api_v1_langdetect_request1 import ApiV1LangdetectRequest1, ApiV1LangdetectRequest1Dict

ApiV1LangdetectRequest2: TypeAlias = ApiV1LangdetectRequest | ApiV1LangdetectRequest1

ApiV1LangdetectRequest2Dict: TypeAlias = ApiV1LangdetectRequestDict | ApiV1LangdetectRequest1Dict
