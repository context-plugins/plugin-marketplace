from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .update_custom_view_period_request_period import (
    UpdateCustomViewPeriodRequestPeriod,
    UpdateCustomViewPeriodRequestPeriodDict,
)


class UpdateCustomViewPeriodRequest(SdkBaseModel):
    period: UpdateCustomViewPeriodRequestPeriod
    """Default date range for the view's queries. Use ``{period_start:DateTime}`` / ``{period_end:DateTime}``
    placeholders in your SQL to make the range adjustable. Either relative (unit+amount) or absolute (start+end)."""


class UpdateCustomViewPeriodRequestDict(TypedDict):
    period: UpdateCustomViewPeriodRequestPeriodDict
