from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaymentInformationCommon(SdkBaseModel):
    """Common payment information POJO."""

    payee_name: str = Field(alias="payeeName")
    """Vendor name for check and electronic payments. This field is overridden when you connect with a vendor in the
    BILL network."""

    email: Optional[str] = UNSET
    """Vendor email address for receiving payment information. BILL uses the vendor ``email`` value when this payment
    ``email`` value is not set."""


class PaymentInformationCommonDict(TypedDict):
    payee_name: str
    email: NotRequired[str]
