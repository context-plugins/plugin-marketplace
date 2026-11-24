from __future__ import annotations

from typing import TypeAlias

from ..api_v1_sms_response2 import ApiV1SmsResponse2, ApiV1SmsResponse2Dict
from ..error import Error, ErrorDict

ApiV1SmsResponse21: TypeAlias = Error | ApiV1SmsResponse2

ApiV1SmsResponse21Dict: TypeAlias = ErrorDict | ApiV1SmsResponse2Dict
