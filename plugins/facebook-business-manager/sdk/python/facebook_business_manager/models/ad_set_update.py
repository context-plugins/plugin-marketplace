from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class AdSetUpdate(SdkBaseModel):
    name: Optional[str] = UNSET
    status: Optional[StatusOrStr] = UNSET
    daily_budget: Optional[str] = UNSET
    lifetime_budget: Optional[str] = UNSET
    targeting: Optional[Any] = UNSET
    bid_amount: Optional[int] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET


class AdSetUpdateDict(TypedDict):
    name: NotRequired[str]
    status: NotRequired[StatusOrStr]
    daily_budget: NotRequired[str]
    lifetime_budget: NotRequired[str]
    targeting: NotRequired[Any]
    bid_amount: NotRequired[int]
    end_time: NotRequired[RFC3339DateTime]
