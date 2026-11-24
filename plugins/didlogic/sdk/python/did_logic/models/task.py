from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1_didlogic_com_risk_checks_api import Status1DidlogicComRiskChecksApiOrStr


class Task(SdkBaseModel):
    id: int
    """Task identifier"""

    status: Status1DidlogicComRiskChecksApiOrStr
    """Task status"""

    processed_at: str
    """Processing completion timestamp"""

    created_at: str
    """Task creation timestamp"""

    total_numbers: int
    """Total numbers in the task"""

    completed_count: int
    """Number of completed checks"""

    failed_count: int
    """Number of failed checks"""

    pending_count: int
    """Number of pending checks"""


class TaskDict(TypedDict):
    id: int
    status: Status1DidlogicComRiskChecksApiOrStr
    processed_at: str
    created_at: str
    total_numbers: int
    completed_count: int
    failed_count: int
    pending_count: int
