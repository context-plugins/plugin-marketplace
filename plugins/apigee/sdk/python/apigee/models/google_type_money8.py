from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleTypeMoney8(SdkBaseModel):
    """Current remaining balance of the developer for a particular currency."""

    units: Optional[str] = UNSET
    """The whole units of the amount. For example if ``currencyCode`` is ``"USD"``, then 1 unit is one US dollar."""

    nanos: Optional[int] = UNSET
    """Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If
    ``units`` is positive, ``nanos`` must be positive or zero. If ``units`` is zero, ``nanos`` can be positive, zero, or
    negative. If ``units`` is negative, ``nanos`` must be negative or zero. For example $-1.75 is represented as
    ``units``=-1 and ``nanos``=-750,000,000."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """The three-letter currency code defined in ISO 4217."""


class GoogleTypeMoney8Dict(TypedDict):
    units: NotRequired[str]
    nanos: NotRequired[int]
    currency_code: NotRequired[str]
