from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DateRange2(SdkBaseModel):
    """Required. Date range of the data to export."""

    start: Optional[str] = UNSET
    """Required. Start date of the data to export in the format ``yyyy-mm-dd``. The date range begins at 00:00:00 UTC on
    the start date."""

    end: Optional[str] = UNSET
    """Required. End date (exclusive) of the data to export in the format ``yyyy-mm-dd``. The date range ends at
    00:00:00 UTC on the end date- which will not be in the output."""


class GoogleCloudApigeeV1DateRange2Dict(TypedDict):
    start: NotRequired[str]
    end: NotRequired[str]
