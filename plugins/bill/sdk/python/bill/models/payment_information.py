from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentInformation(SdkBaseModel):
    bank_account_id: Optional[str] = Field(default=UNSET, alias="bankAccountId")
    """BILL-generated ID of the bank account used to pay each bill. The value begins with ``bac``."""

    card_account_id: Optional[str] = Field(default=UNSET, alias="cardAccountId")
    """BILL-generated ID of the card account used to pay each bill. The value begins with ``cat``."""


class PaymentInformationDict(TypedDict):
    bank_account_id: NotRequired[str]
    card_account_id: NotRequired[str]
