from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1_didlogic_com_risk_checks_api import Status1DidlogicComRiskChecksApiOrStr


class RiskCheckRequest(SdkBaseModel):
    """Created risk check task details"""

    status: Status1DidlogicComRiskChecksApiOrStr
    """Task status"""

    processed_at: Any
    """Processing completion timestamp"""

    created_at: str
    """Task creation timestamp"""

    task_id: int
    """Task identifier"""

    total_numbers: int
    """Total numbers in the request"""


class RiskCheckRequestDict(TypedDict):
    status: Status1DidlogicComRiskChecksApiOrStr
    processed_at: Any
    created_at: str
    task_id: int
    total_numbers: int
