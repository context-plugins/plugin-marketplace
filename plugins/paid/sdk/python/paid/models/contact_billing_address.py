from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactBillingAddress(SdkBaseModel):
    street: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    zip_code: Optional[str] = Field(default=UNSET, alias="zipCode")


class ContactBillingAddressDict(TypedDict):
    street: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    zip_code: NotRequired[str]
