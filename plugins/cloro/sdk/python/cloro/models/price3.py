from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price3(SdkBaseModel):
    """Product price for ``type: SHOPPING_CARD`` ads. ``currency`` and ``raw`` are always present; ``value`` is omitted
    when the number doesn't parse, and the whole object is omitted when no currency appears beside a number. ``raw``
    carries the visible text verbatim (e.g. ``"$0 down with 24 monthly payments"`` on installment offers) so consumers
    can disambiguate genuine zero prices from down-payment labels."""

    value: Optional[float] = UNSET
    """Numeric price value"""

    currency: Optional[str] = UNSET
    """Currency symbol"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class Price3Dict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    raw: NotRequired[str]
