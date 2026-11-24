from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhysicalAddresses(SdkBaseModel):
    """User physical addresses holding the connection."""

    address_line1: str = Field(alias="addressLine1")
    """User address."""

    address_line2: str | None = Field(alias="addressLine2")
    """Always "null"
    """

    address_line3: str | None = Field(alias="addressLine3")
    """Always "null"
    """

    city: str
    """City"""

    country: Optional[str] = UNSET
    country_code: str = Field(alias="countryCode")
    """Country code"""

    formatted_address: str = Field(alias="formattedAddress")
    """Address formatted."""

    postcode: str
    """Post code"""

    state: str
    """State"""


class PhysicalAddressesDict(TypedDict):
    address_line1: str
    address_line2: str | None
    address_line3: str | None
    city: str
    country: NotRequired[str]
    country_code: str
    formatted_address: str
    postcode: str
    state: str
