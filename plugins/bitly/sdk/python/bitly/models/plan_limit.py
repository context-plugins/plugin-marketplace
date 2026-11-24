from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PlanLimit(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    limit: Optional[int] = UNSET
    count: Optional[int] = UNSET


class PlanLimitDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    limit: NotRequired[int]
    count: NotRequired[int]
