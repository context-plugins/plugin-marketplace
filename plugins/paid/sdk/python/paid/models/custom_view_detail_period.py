from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.custom_view_detail_period_kind import CustomViewDetailPeriodKindOrStr
from .enums.custom_view_detail_period_unit import CustomViewDetailPeriodUnitOrStr


class CustomViewDetailPeriod(SdkBaseModel):
    """The view's current default date range, or null if it uses no adjustable period."""

    kind: CustomViewDetailPeriodKindOrStr
    """'relative' = a rolling window ending today (set ``unit`` + ``amount``); 'absolute' = a fixed calendar range (set
    ``start`` + ``end``)."""

    unit: Optional[CustomViewDetailPeriodUnitOrStr] = UNSET
    """relative only: the unit of the rolling window."""

    amount: Optional[int] = UNSET
    """relative only: how many units back from today (e.g. unit 'day', amount 30 = last 30 days)."""

    start: Optional[str] = UNSET
    """absolute only: inclusive start date (YYYY-MM-DD)."""

    end: Optional[str] = UNSET
    """absolute only: inclusive end date (YYYY-MM-DD)."""


class CustomViewDetailPeriodDict(TypedDict):
    kind: CustomViewDetailPeriodKindOrStr
    unit: NotRequired[CustomViewDetailPeriodUnitOrStr]
    amount: NotRequired[int]
    start: NotRequired[str]
    end: NotRequired[str]
