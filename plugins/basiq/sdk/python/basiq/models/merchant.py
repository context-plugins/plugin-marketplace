from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phone_number import PhoneNumber, PhoneNumberDict


class Merchant(SdkBaseModel):
    id: Optional[str] = UNSET
    """The merchant id."""

    business_name: Optional[str] = Field(default=UNSET, alias="businessName")
    """The merchant business name."""

    website: Optional[str] = UNSET
    """The merchant website."""

    abn: Optional[str] = UNSET
    """Provides the Australian Business Number."""

    phone_number: Optional[PhoneNumber] = Field(default=UNSET, alias="phoneNumber")
    """Provides the local and international telephone numbers of the merchant."""


class MerchantDict(TypedDict):
    id: NotRequired[str]
    business_name: NotRequired[str]
    website: NotRequired[str]
    abn: NotRequired[str]
    phone_number: NotRequired[PhoneNumberDict]
