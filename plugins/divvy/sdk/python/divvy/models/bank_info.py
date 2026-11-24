from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address1_bill_v3_vendors_api import Address1BillV3VendorsApi, Address1BillV3VendorsApiDict


class BankInfo(SdkBaseModel):
    """Bank branch info for a Bank account."""

    swift_bic: Optional[str] = Field(default=UNSET, alias="swiftBIC")
    """SWIFT code"""

    branch_name: Optional[str] = Field(default=UNSET, alias="branchName")
    """Branch name"""

    country_iso: Optional[str] = Field(default=UNSET, alias="countryISO")
    """Country ISO code"""

    national_bank_code: Optional[str] = Field(default=UNSET, alias="nationalBankCode")
    """National bank code"""

    institution_name: Optional[str] = Field(default=UNSET, alias="institutionName")
    """Bank institution name"""

    primary_key: Optional[str] = Field(default=UNSET, alias="primaryKey")
    """Primary key"""

    address: Optional[Address1BillV3VendorsApi] = UNSET


class BankInfoDict(TypedDict):
    swift_bic: NotRequired[str]
    branch_name: NotRequired[str]
    country_iso: NotRequired[str]
    national_bank_code: NotRequired[str]
    institution_name: NotRequired[str]
    primary_key: NotRequired[str]
    address: NotRequired[Address1BillV3VendorsApiDict]
