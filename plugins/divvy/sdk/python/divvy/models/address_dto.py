from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AddressDto(SdkBaseModel):
    """Address information."""

    line1: Optional[str] = UNSET
    """Address line 1"""

    line2: Optional[str] = UNSET
    """Address line 2"""

    city: Optional[str] = UNSET
    """City"""

    state_or_province: Optional[str] = Field(default=UNSET, alias="stateOrProvince")
    """State or province"""

    zip_or_postal_code: Optional[str] = Field(default=UNSET, alias="zipOrPostalCode")
    """Zip or postal code"""

    country: Optional[str] = UNSET
    """Country"""


class AddressDtoDict(TypedDict):
    line1: NotRequired[str]
    line2: NotRequired[str]
    city: NotRequired[str]
    state_or_province: NotRequired[str]
    zip_or_postal_code: NotRequired[str]
    country: NotRequired[str]
