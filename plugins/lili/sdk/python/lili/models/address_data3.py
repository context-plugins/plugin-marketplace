from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AddressData3(SdkBaseModel):
    """The registered business address (the address the business provided to the state of formation to accept legal
    process). Can be outside of the US, in case only a registered agent address is available. Used as the billing
    address and presented on bank statements and invoices."""

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


class AddressData3Dict(TypedDict):
    line1: NotRequired[str]
    line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
    country: NotRequired[str]
