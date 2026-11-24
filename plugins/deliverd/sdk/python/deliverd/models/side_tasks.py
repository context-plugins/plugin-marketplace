from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SideTasks(SdkBaseModel):
    open: float
    done: float
    awaiting: float


class SideTasksDict(TypedDict):
    open: float
    done: float
    awaiting: float
