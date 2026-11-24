from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status2 import Status2OrStr


class AccessControlRequest400Error1(SdkBaseModel):
    status: Optional[Status2OrStr] = UNSET
    """Response Status"""

    messages: Optional[list[str]] = UNSET
    """Array of messages"""


class AccessControlRequest400Error1Dict(TypedDict):
    status: NotRequired[Status2OrStr]
    messages: NotRequired[list[str]]
