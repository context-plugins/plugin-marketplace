from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AddressData4(SdkBaseModel):
    """Business mailing address. Optional. Must be in the US, can be a registered agent address. Used as the card
    shipment address for Non-US applicants when selected."""

    line1: Optional[str] = UNSET
    """Line 1 of the address"""

    line2: Optional[str] = UNSET
    """Line 2 of the address"""

    city: Optional[str] = UNSET
    """City"""

    state: Optional[str] = UNSET
    """State 2 letter code (ISO 3166 format)"""

    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """Postal code"""

    country: Optional[str] = UNSET
    """Country 2 letter code (ISO 3166 format)"""


class AddressData4Dict(TypedDict):
    line1: NotRequired[str]
    line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
    country: NotRequired[str]
