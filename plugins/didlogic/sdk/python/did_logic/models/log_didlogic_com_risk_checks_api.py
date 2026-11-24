from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.risk_level1 import RiskLevel1OrStr
from .enums.status4 import Status4OrStr


class LogDidlogicComRiskChecksApi(SdkBaseModel):
    id: int
    """Log identifier"""

    number: str
    """Phone number that was checked"""

    status: Status4OrStr
    """Check status"""

    risk_level: RiskLevel1OrStr
    """Risk assessment level"""

    category: Any
    """Risk category"""

    task_id: int
    """Parent task identifier"""

    processed_at: str
    """Processing completion timestamp"""

    created_at: str
    """Log creation timestamp"""


class LogDidlogicComRiskChecksApiDict(TypedDict):
    id: int
    number: str
    status: Status4OrStr
    risk_level: RiskLevel1OrStr
    category: Any
    task_id: int
    processed_at: str
    created_at: str
