from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerBillingAddressInput(SdkBaseModel):
    line1: Optional[str] = UNSET
    line2: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    zip_code: Optional[str] = Field(default=UNSET, alias="zipCode")
    country: Optional[str] = UNSET


class CustomerBillingAddressInputDict(TypedDict):
    line1: NotRequired[str]
    line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    zip_code: NotRequired[str]
    country: NotRequired[str]
