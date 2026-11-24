from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .paf_identity_identities_api import PafIdentityIdentitiesApi, PafIdentityIdentitiesApiDict


class PhysicalAddress(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Physical Address Type."""

    address_line1: Optional[str] = Field(default=UNSET, alias="addressLine1")
    """AddressLine1."""

    address_line2: Optional[str] = Field(default=UNSET, alias="addressLine2")
    """AddressLine2."""

    address_line3: Optional[str] = Field(default=UNSET, alias="addressLine3")
    """AddressLine3."""

    postcode: Optional[str] = UNSET
    """Postcode."""

    city: Optional[str] = UNSET
    """City."""

    state: Optional[str] = UNSET
    """State."""

    country: Optional[str] = UNSET
    """Country."""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """Country Code."""

    formatted_address: Optional[str] = Field(default=UNSET, alias="formattedAddress")
    """Formatted Address."""

    paf: Optional[PafIdentityIdentitiesApi] = UNSET
    """Postal Address File"""


class PhysicalAddressDict(TypedDict):
    type_: NotRequired[str]
    address_line1: NotRequired[str]
    address_line2: NotRequired[str]
    address_line3: NotRequired[str]
    postcode: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    country_code: NotRequired[str]
    formatted_address: NotRequired[str]
    paf: NotRequired[PafIdentityIdentitiesApiDict]
