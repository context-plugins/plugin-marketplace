from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Item1(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """The workflow run ID"""

    status: Optional[str] = UNSET
    """The status of the run"""

    duration: Optional[int] = UNSET
    """Duration in seconds"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the run was created"""

    stopped_at: Optional[RFC3339DateTime] = UNSET
    """When the run stopped"""

    credits_used: Optional[int] = UNSET
    """Credits consumed by this run"""

    branch: Optional[str] = UNSET
    """The branch that was built"""


class Item1Dict(TypedDict):
    id: NotRequired[UUID]
    status: NotRequired[str]
    duration: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    stopped_at: NotRequired[RFC3339DateTime]
    credits_used: NotRequired[int]
    branch: NotRequired[str]
