from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Plan(SdkBaseModel):
    id: Optional[str] = UNSET
    credits_per_cycle: Optional[int] = UNSET
    rate_limit_per_minute: Optional[int] = UNSET


class PlanDict(TypedDict):
    id: NotRequired[str]
    credits_per_cycle: NotRequired[int]
    rate_limit_per_minute: NotRequired[int]
