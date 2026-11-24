from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.plan import PlanOrStr
from .upgrade import Upgrade, UpgradeDict
from .usage import Usage, UsageDict


class Data(SdkBaseModel):
    plan: Optional[PlanOrStr] = UNSET
    usage: Optional[Usage] = UNSET
    rate_limit_per_minute: Optional[int] = Field(default=UNSET, alias="rateLimitPerMinute")
    upgrade: OptionalNullable[Upgrade] = UNSET


class DataDict(TypedDict):
    plan: NotRequired[PlanOrStr]
    usage: NotRequired[UsageDict]
    rate_limit_per_minute: NotRequired[int]
    upgrade: NotRequired[UpgradeDict | None]
