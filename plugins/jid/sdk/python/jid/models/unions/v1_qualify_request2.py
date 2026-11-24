from __future__ import annotations

from typing import TypeAlias

from ..v1_qualify_request import V1QualifyRequest, V1QualifyRequestDict
from ..v1_qualify_request1 import V1QualifyRequest1, V1QualifyRequest1Dict

V1QualifyRequest2: TypeAlias = V1QualifyRequest | V1QualifyRequest1

V1QualifyRequest2Dict: TypeAlias = V1QualifyRequestDict | V1QualifyRequest1Dict
