from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Amount(SdkBaseModel):
    """Suggested budget amount as a decimal-string value with its currency."""

    amount: Optional[str] = UNSET
    """Decimal string, e.g. "1234.56"."""

    currency: Optional[str] = UNSET


class AmountDict(TypedDict):
    amount: NotRequired[str]
    currency: NotRequired[str]
