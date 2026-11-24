from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_details import BankDetails, BankDetailsDict
from .beneficiary_details import BeneficiaryDetails, BeneficiaryDetailsDict


class InternationalPayeeDetails(SdkBaseModel):
    """Details specific to international payees."""

    beneficiary_details: Optional[BeneficiaryDetails] = Field(default=UNSET, alias="beneficiaryDetails")
    """Details about the beneficiary."""

    bank_details: Optional[BankDetails] = Field(default=UNSET, alias="bankDetails")
    """Details about the beneficiary's bank."""


class InternationalPayeeDetailsDict(TypedDict):
    beneficiary_details: NotRequired[BeneficiaryDetailsDict]
    bank_details: NotRequired[BankDetailsDict]
