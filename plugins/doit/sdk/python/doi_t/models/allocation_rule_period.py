from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class AllocationRulePeriod(SdkBaseModel):
    """A date range when a rule applies. startDate and endDate are both inclusive, so a handover between two rules needs
    a one-day gap: the first rule's endDate the day before, the second rule's startDate the handover day. Only the first
    period in the list may omit startDate, and only the last may omit endDate."""

    start_date: OptionalNullable[str] = Field(default=UNSET, alias="startDate")
    """Start date (YYYY-MM-DD, UTC), inclusive. Absent means no lower bound."""

    end_date: OptionalNullable[str] = Field(default=UNSET, alias="endDate")
    """End date (YYYY-MM-DD, UTC), inclusive. Absent means no upper bound."""


class AllocationRulePeriodDict(TypedDict):
    start_date: NotRequired[str | None]
    end_date: NotRequired[str | None]
