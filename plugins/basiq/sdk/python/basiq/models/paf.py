from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Paf(SdkBaseModel):
    """Australian address formatted according to the file format defined by the PAF file format."""

    dpid: Optional[str] = UNSET
    """Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier."""

    thoroughfare_number1: Optional[int] = Field(default=UNSET, alias="thoroughfareNumber1")
    """Thoroughfare number for a property (first number in a property ranged address)."""

    thoroughfare_number1_suffix: Optional[str] = Field(default=UNSET, alias="thoroughfareNumber1Suffix")
    """Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated."""

    thoroughfare_number2: Optional[int] = Field(default=UNSET, alias="thoroughfareNumber2")
    """Second thoroughfare number (only used if the property has a ranged address eg 23-25)."""

    thoroughfare_number2_suffix: Optional[str] = Field(default=UNSET, alias="thoroughfareNumber2Suffix")
    """Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated."""

    flat_unit_type: Optional[str] = Field(default=UNSET, alias="flatUnitType")
    """Type of flat or unit for the address."""

    flat_unit_number: Optional[str] = Field(default=UNSET, alias="flatUnitNumber")
    """Unit number (including suffix, if applicable)."""

    floor_level_type: Optional[str] = Field(default=UNSET, alias="floorLevelType")
    """Type of floor or level for the address."""

    floor_level_number: Optional[str] = Field(default=UNSET, alias="floorLevelNumber")
    """Floor or level number (including alpha characters)."""

    lot_number: Optional[str] = Field(default=UNSET, alias="lotNumber")
    """Allotment number for the address."""

    building_name1: Optional[str] = Field(default=UNSET, alias="buildingName1")
    """Building/Property name 1."""

    building_name2: Optional[str] = Field(default=UNSET, alias="buildingName2")
    """Building/Property name 2."""

    street_name: Optional[str] = Field(default=UNSET, alias="streetName")
    """The name of the street."""

    street_type: Optional[str] = Field(default=UNSET, alias="streetType")
    """The street type. Valid enumeration defined by Australia Post PAF code file."""

    street_suffix: Optional[str] = Field(default=UNSET, alias="streetSuffix")
    """The street type suffix. Valid enumeration defined by Australia Post PAF code file."""

    postal_delivery_type: Optional[str] = Field(default=UNSET, alias="postalDeliveryType")
    """Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file."""

    postal_delivery_number: Optional[int] = Field(default=UNSET, alias="postalDeliveryNumber")
    """Postal delivery number if the address is a postal delivery type."""

    postal_delivery_number_prefix: Optional[str] = Field(default=UNSET, alias="postalDeliveryNumberPrefix")
    """Postal delivery number prefix related to the postal delivery number."""

    postal_delivery_number_suffix: Optional[str] = Field(default=UNSET, alias="postalDeliveryNumberSuffix")
    """Postal delivery number suffix related to the postal delivery number."""

    locality_name: str = Field(alias="localityName")
    """Full name of locality."""

    postcode: str
    """Postcode for the locality."""

    state: str
    """State in which the address belongs. Valid enumeration defined by Australia Post PAF code file State Type
    Abbreviation. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT."""


class PafDict(TypedDict):
    dpid: NotRequired[str]
    thoroughfare_number1: NotRequired[int]
    thoroughfare_number1_suffix: NotRequired[str]
    thoroughfare_number2: NotRequired[int]
    thoroughfare_number2_suffix: NotRequired[str]
    flat_unit_type: NotRequired[str]
    flat_unit_number: NotRequired[str]
    floor_level_type: NotRequired[str]
    floor_level_number: NotRequired[str]
    lot_number: NotRequired[str]
    building_name1: NotRequired[str]
    building_name2: NotRequired[str]
    street_name: NotRequired[str]
    street_type: NotRequired[str]
    street_suffix: NotRequired[str]
    postal_delivery_type: NotRequired[str]
    postal_delivery_number: NotRequired[int]
    postal_delivery_number_prefix: NotRequired[str]
    postal_delivery_number_suffix: NotRequired[str]
    locality_name: str
    postcode: str
    state: str
