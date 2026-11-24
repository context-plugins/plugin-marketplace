from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status1 import Status1OrStr


class CloseStatusFilter(SdkBaseModel):
    status: Status1OrStr
    """The close status that must match the close status of an execution for it to meet the criteria of this filter."""


class CloseStatusFilterDict(TypedDict):
    status: Status1OrStr
