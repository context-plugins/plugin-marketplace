from __future__ import annotations

from typing import TypeAlias

from ..api_v1_edits_reject_response1 import ApiV1EditsRejectResponse1, ApiV1EditsRejectResponse1Dict
from ..error import Error, ErrorDict

ApiV1EditsRejectResponse11: TypeAlias = Error | ApiV1EditsRejectResponse1

ApiV1EditsRejectResponse11Dict: TypeAlias = ErrorDict | ApiV1EditsRejectResponse1Dict
