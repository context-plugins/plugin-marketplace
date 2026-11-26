from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RppsInformation2(SdkBaseModel):
    account_number: str = Field(alias="accountNumber")
    """Your billing statement account number with the verified national vendor organization.

    This value must match the vendor ``accountNumber`` set while creating or updating a vendor."""

    address_id: Optional[str] = Field(default=UNSET, alias="addressId")
    """BILL-generated ID of the billing address for the verified national vendor organization. The value begins with
    ``0ra``. Each address is identified by a unique ID."""


class RppsInformation2Dict(TypedDict):
    account_number: str
    address_id: NotRequired[str]
