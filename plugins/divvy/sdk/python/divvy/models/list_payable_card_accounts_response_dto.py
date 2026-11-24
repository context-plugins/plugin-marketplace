from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .card_account_response_dto import CardAccountResponseDto, CardAccountResponseDtoDict
from .rates import Rates, RatesDict


class ListPayableCardAccountsResponseDto(SdkBaseModel):
    """List Card Accounts response DTO."""

    rates: Optional[Rates] = UNSET
    cards: Optional[list[CardAccountResponseDto]] = UNSET
    """List of card accounts"""


class ListPayableCardAccountsResponseDtoDict(TypedDict):
    rates: NotRequired[RatesDict]
    cards: NotRequired[list[CardAccountResponseDtoDict]]
