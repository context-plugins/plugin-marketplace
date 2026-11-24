from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1 import Data1, Data1Dict


class TasksResponse5(SdkBaseModel):
    data: Optional[Data1] = UNSET
    message: Optional[str] = UNSET


class TasksResponse5Dict(TypedDict):
    data: NotRequired[Data1Dict]
    message: NotRequired[str]
