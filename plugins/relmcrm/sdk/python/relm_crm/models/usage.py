from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Usage(SdkBaseModel):
    period: Optional[str] = UNSET
    used: Optional[int] = UNSET
    overage: Optional[int] = UNSET
    limit: Optional[int] = UNSET
    plan: Optional[str] = UNSET


class UsageDict(TypedDict):
    period: NotRequired[str]
    used: NotRequired[int]
    overage: NotRequired[int]
    limit: NotRequired[int]
    plan: NotRequired[str]
