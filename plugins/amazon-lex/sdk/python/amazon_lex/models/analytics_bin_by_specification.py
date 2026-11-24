from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.interval import IntervalOrStr
from .enums.name import NameOrStr
from .enums.order1 import Order1OrStr


class AnalyticsBinBySpecification(SdkBaseModel):
    name: NameOrStr
    """Specifies the time metric by which to bin the analytics data."""

    interval: IntervalOrStr
    """Specifies the interval of time by which to bin the analytics data."""

    order: Optional[Order1OrStr] = UNSET
    """Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the
    default order is by the key of the bin in descending order."""


class AnalyticsBinBySpecificationDict(TypedDict):
    name: NameOrStr
    interval: IntervalOrStr
    order: NotRequired[Order1OrStr]
