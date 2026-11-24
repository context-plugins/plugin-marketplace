from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr


class Data(SdkBaseModel):
    id: Optional[str] = UNSET
    """access control request id"""

    status: Optional[Status1OrStr] = UNSET
    """request status"""


class DataDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[Status1OrStr]
