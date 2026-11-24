from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .paf import Paf, PafDict


class Simple(SdkBaseModel):
    mailing_name: Optional[str] = Field(default=UNSET, alias="mailingName")
    """Name of the individual or business formatted for inclusion in an address used for physical mail."""

    address_line1: str = Field(alias="addressLine1")
    """First line of the standard address object."""

    address_line2: Optional[str] = Field(default=UNSET, alias="addressLine2")
    """Second line of the standard address object."""

    address_line3: Optional[str] = Field(default=UNSET, alias="addressLine3")
    """Third line of the standard address object."""

    postcode: Optional[str] = UNSET
    """Mandatory for Australian addresses."""

    city: str
    """Name of the city or locality."""

    state: str
    """Free text if the country is not Australia. If country is Australia then must be one of the values defined by the
    State Type Abbreviation in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT."""

    country: Optional[str] = UNSET
    """A valid ISO 3166 Alpha-3 country code. Australia (AUS) is assumed if country is not present."""

    paf: Optional[Paf] = UNSET
    """Australian address formatted according to the file format defined by the PAF file format."""


class SimpleDict(TypedDict):
    mailing_name: NotRequired[str]
    address_line1: str
    address_line2: NotRequired[str]
    address_line3: NotRequired[str]
    postcode: NotRequired[str]
    city: str
    state: str
    country: NotRequired[str]
    paf: NotRequired[PafDict]
