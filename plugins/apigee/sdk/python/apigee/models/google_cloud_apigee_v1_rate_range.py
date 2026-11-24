from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_type_money4 import GoogleTypeMoney4, GoogleTypeMoney4Dict


class GoogleCloudApigeeV1RateRange(SdkBaseModel):
    """API call volume range and the fees charged when the total number of API calls is within the range."""

    end: Optional[str] = UNSET
    """Ending value of the range. Set to 0 or ``null`` for the last range of values."""

    start: Optional[str] = UNSET
    """Starting value of the range. Set to 0 or ``null`` for the initial range of values."""

    fee: Optional[GoogleTypeMoney4] = UNSET
    """Fee to charge when total number of API calls falls within this range."""


class GoogleCloudApigeeV1RateRangeDict(TypedDict):
    end: NotRequired[str]
    start: NotRequired[str]
    fee: NotRequired[GoogleTypeMoney4Dict]
