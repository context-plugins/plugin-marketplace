from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1RevenueShareRange(SdkBaseModel):
    """API call volume range and the percentage of revenue to share with the developer when the total number of API
    calls is within the range."""

    end: Optional[str] = UNSET
    """Ending value of the range. Set to 0 or ``null`` for the last range of values."""

    share_percentage: Optional[float] = Field(default=UNSET, alias="sharePercentage")
    """Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue
    with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the
    decimal point."""

    start: Optional[str] = UNSET
    """Starting value of the range. Set to 0 or ``null`` for the initial range of values."""


class GoogleCloudApigeeV1RevenueShareRangeDict(TypedDict):
    end: NotRequired[str]
    share_percentage: NotRequired[float]
    start: NotRequired[str]
