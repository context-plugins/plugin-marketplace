from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TasksResponse3(SdkBaseModel):
    data: Optional[Any] = UNSET
    message: Optional[str] = UNSET


class TasksResponse3Dict(TypedDict):
    data: NotRequired[Any]
    message: NotRequired[str]
