from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detailed_error import DetailedError, DetailedErrorDict
from .dev_country_aggregate import DevCountryAggregate, DevCountryAggregateDict


class DevCountryAggregatesResponse(SdkBaseModel):
    data: Optional[list[DevCountryAggregate]] = UNSET
    errors: Optional[list[DetailedError]] = UNSET
    total_count: int = 0


class DevCountryAggregatesResponseDict(TypedDict):
    data: NotRequired[list[DevCountryAggregateDict]]
    errors: NotRequired[list[DetailedErrorDict]]
    total_count: NotRequired[int]
