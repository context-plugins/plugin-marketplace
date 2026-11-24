from __future__ import annotations

from typing import TypeAlias

from ..api_v1_edits_accept_response1 import ApiV1EditsAcceptResponse1, ApiV1EditsAcceptResponse1Dict
from ..error import Error, ErrorDict

ApiV1EditsAcceptResponse11: TypeAlias = Error | ApiV1EditsAcceptResponse1

ApiV1EditsAcceptResponse11Dict: TypeAlias = ErrorDict | ApiV1EditsAcceptResponse1Dict
