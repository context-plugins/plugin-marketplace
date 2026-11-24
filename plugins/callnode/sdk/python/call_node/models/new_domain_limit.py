from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class NewDomainLimit(SdkBaseModel):
    """On the create, verify and refresh=1 answers only (absent on plain reads): the per-day cap on a domain registered
    less than 30 days ago, rising over its first month and reset at 00:00 UTC; null once the domain is not capped."""

    age_days: OptionalNullable[int] = Field(default=UNSET, alias="ageDays")
    daily_cap: Optional[int] = Field(default=UNSET, alias="dailyCap")
    sent_today: OptionalNullable[int] = Field(default=UNSET, alias="sentToday")
    remaining: OptionalNullable[int] = UNSET
    resets_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="resetsAt")


class NewDomainLimitDict(TypedDict):
    age_days: NotRequired[int | None]
    daily_cap: NotRequired[int]
    sent_today: NotRequired[int | None]
    remaining: NotRequired[int | None]
    resets_at: NotRequired[RFC3339DateTime]
