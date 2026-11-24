from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BusinessAddress(SdkBaseModel):
    address_line1: Optional[str] = Field(default=UNSET, alias="addressLine1")
    """The first line of the business address."""

    address_line2: Optional[str] = Field(default=UNSET, alias="addressLine2")
    """Additional information about the business address (optional)."""

    suburb: Optional[str] = UNSET
    """The suburb or locality where the business is located."""

    state: Optional[str] = UNSET
    """The state or territory where the business is located."""

    postcode: Optional[str] = UNSET
    """The postal code of the business location."""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """The country code of the business location."""


class BusinessAddressDict(TypedDict):
    address_line1: NotRequired[str]
    address_line2: NotRequired[str]
    suburb: NotRequired[str]
    state: NotRequired[str]
    postcode: NotRequired[str]
    country_code: NotRequired[str]
