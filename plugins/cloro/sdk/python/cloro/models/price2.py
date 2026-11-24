from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price2(SdkBaseModel):
    """Offer price. Omitted when the displayed text can't be parsed."""

    value: float
    """Parsed numeric price. On installment offers, the monthly payment."""

    currency: str
    """ISO 4217 code, or the displayed token when it maps to none"""

    raw: Optional[str] = UNSET
    """Visible price text verbatim"""


class Price2Dict(TypedDict):
    value: float
    currency: str
    raw: NotRequired[str]
