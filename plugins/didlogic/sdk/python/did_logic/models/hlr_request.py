from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class HlrRequest(SdkBaseModel):
    """Created HLR lookup task details"""

    status: StatusOrStr
    """Task status"""

    processed_at: Any
    """Processing completion timestamp"""

    created_at: str
    """Task creation timestamp"""

    task_id: int
    """Task identifier"""

    total_numbers: int
    """Total numbers in the request"""


class HlrRequestDict(TypedDict):
    status: StatusOrStr
    processed_at: Any
    created_at: str
    task_id: int
    total_numbers: int
