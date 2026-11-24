from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_funding_option import BankFundingOption, BankFundingOptionDict
from .card_funding_option import CardFundingOption, CardFundingOptionDict


class FundingOptions2(SdkBaseModel):
    banks: Optional[list[BankFundingOption]] = UNSET
    """Bank account options"""

    cards: Optional[list[CardFundingOption]] = UNSET
    """Card account options"""


class FundingOptions2Dict(TypedDict):
    banks: NotRequired[list[BankFundingOptionDict]]
    cards: NotRequired[list[CardFundingOptionDict]]
