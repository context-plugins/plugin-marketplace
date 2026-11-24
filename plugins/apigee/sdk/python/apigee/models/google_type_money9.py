from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleTypeMoney9(SdkBaseModel):
    """Required. * A positive value of ``adjustment`` means that that the API provider wants to adjust the balance for
    an under-charged AppGroup i.e. the balance of the AppGroup will decrease. * A negative value of ``adjustment`` is
    not supported. Use credit balance API instead."""

    units: Optional[str] = UNSET
    """The whole units of the amount. For example if ``currencyCode`` is ``"USD"``, then 1 unit is one US dollar."""

    nanos: Optional[int] = UNSET
    """Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If
    ``units`` is positive, ``nanos`` must be positive or zero. If ``units`` is zero, ``nanos`` can be positive, zero, or
    negative. If ``units`` is negative, ``nanos`` must be negative or zero. For example $-1.75 is represented as
    ``units``=-1 and ``nanos``=-750,000,000."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """The three-letter currency code defined in ISO 4217."""


class GoogleTypeMoney9Dict(TypedDict):
    units: NotRequired[str]
    nanos: NotRequired[int]
    currency_code: NotRequired[str]
