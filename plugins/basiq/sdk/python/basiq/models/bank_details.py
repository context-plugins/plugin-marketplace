from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BankDetails(SdkBaseModel):
    """Details about the beneficiary's bank."""

    country: Optional[str] = UNSET
    """The country of the bank (ISO 3166-1 alpha-2)."""

    account_number: Optional[str] = Field(default=UNSET, alias="accountNumber")
    """The account number or IBAN."""

    beneficiary_bank_bic: Optional[str] = Field(default=UNSET, alias="beneficiaryBankBIC")
    """The BIC/SWIFT code of the beneficiary's bank."""

    routing_number: Optional[str] = Field(default=UNSET, alias="routingNumber")
    """The routing number (if applicable)."""

    bank_address: Optional[str] = Field(default=UNSET, alias="bankAddress")
    """The address of the bank."""


class BankDetailsDict(TypedDict):
    country: NotRequired[str]
    account_number: NotRequired[str]
    beneficiary_bank_bic: NotRequired[str]
    routing_number: NotRequired[str]
    bank_address: NotRequired[str]
