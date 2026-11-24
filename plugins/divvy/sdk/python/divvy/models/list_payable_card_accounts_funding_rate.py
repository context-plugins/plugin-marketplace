from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListPayableCardAccountsFundingRate(SdkBaseModel):
    """List Payable Card Accounts Funding Rate."""

    credit_card_rate: Optional[float] = Field(default=UNSET, alias="creditCardRate")
    """Credit card funding rate"""

    debit_card_rate: Optional[float] = Field(default=UNSET, alias="debitCardRate")
    """Debit card funding rate"""


class ListPayableCardAccountsFundingRateDict(TypedDict):
    credit_card_rate: NotRequired[float]
    debit_card_rate: NotRequired[float]
