from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task import Task, TaskDict


class Data(SdkBaseModel):
    tasks: Optional[list[Task]] = UNSET
    updated: Optional[int] = UNSET


class DataDict(TypedDict):
    tasks: NotRequired[list[TaskDict]]
    updated: NotRequired[int]
