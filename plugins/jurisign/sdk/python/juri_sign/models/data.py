from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Data(SdkBaseModel):
    plan: Optional[str] = UNSET
    credits_total: Optional[int] = UNSET
    credits_used: Optional[int] = UNSET
    credits_remaining: Optional[int] = UNSET
    """Never negative, even if usage exceeds the plan."""

    trial_ends_at: OptionalNullable[RFC3339DateTime] = UNSET


class DataDict(TypedDict):
    plan: NotRequired[str]
    credits_total: NotRequired[int]
    credits_used: NotRequired[int]
    credits_remaining: NotRequired[int]
    trial_ends_at: NotRequired[RFC3339DateTime | None]
