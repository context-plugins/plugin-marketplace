from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .money1 import Money1, Money1Dict
from .money4 import Money4, Money4Dict


class CompensationRange(SdkBaseModel):
    """Compensation range."""

    max_compensation: Optional[Money4] = Field(default=UNSET, alias="maxCompensation")
    """The maximum amount of compensation. If left empty, the value is set to a maximal compensation value and the
    currency code is set to match the currency code of min_compensation."""

    min_compensation: Optional[Money1] = Field(default=UNSET, alias="minCompensation")
    """The minimum amount of compensation. If left empty, the value is set to zero and the currency code is set to match
    the currency code of max_compensation."""


class CompensationRangeDict(TypedDict):
    max_compensation: NotRequired[Money4Dict]
    min_compensation: NotRequired[Money1Dict]
