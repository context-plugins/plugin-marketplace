from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Jobs(SdkBaseModel):
    scheduled: Optional[int] = UNSET
    running: Optional[int] = UNSET
    total: Optional[int] = UNSET


class JobsDict(TypedDict):
    scheduled: NotRequired[int]
    running: NotRequired[int]
    total: NotRequired[int]
