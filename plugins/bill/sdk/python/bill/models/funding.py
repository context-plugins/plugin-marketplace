from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Funding(SdkBaseModel):
    credit_card_rate: Optional[float] = Field(default=UNSET, alias="creditCardRate")
    """Credit card funding rate"""

    debit_card_rate: Optional[float] = Field(default=UNSET, alias="debitCardRate")
    """Debit card funding rate"""


class FundingDict(TypedDict):
    credit_card_rate: NotRequired[float]
    debit_card_rate: NotRequired[float]
