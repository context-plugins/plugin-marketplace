from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PafIdentityIdentitiesApi(SdkBaseModel):
    """Postal Address File"""

    dpid: Optional[str] = UNSET
    """Delivery Point Identifier"""

    thoroughfare_number1: Optional[int] = Field(default=UNSET, alias="thoroughfareNumber1")
    """First Thoroughfare Number"""

    thoroughfare_number1_suffix: Optional[str] = Field(default=UNSET, alias="thoroughfareNumber1Suffix")
    """First Thoroughfare Number Suffix"""

    thoroughfare_number2: Optional[int] = Field(default=UNSET, alias="thoroughfareNumber2")
    """Second Thoroughfare Number"""

    thoroughfare_number2_suffix: Optional[str] = Field(default=UNSET, alias="thoroughfareNumber2Suffix")
    """Second Thoroughfare Number Suffix"""

    flat_unit_type: Optional[str] = Field(default=UNSET, alias="flatUnitType")
    """Flat Unit Type (e.g., Apartment, Unit)"""

    flat_unit_number: Optional[str] = Field(default=UNSET, alias="flatUnitNumber")
    """Flat Unit Number"""

    floor_level_type: Optional[str] = Field(default=UNSET, alias="floorLevelType")
    """Floor Level Type (e.g., Level, Floor)"""

    floor_level_number: Optional[str] = Field(default=UNSET, alias="floorLevelNumber")
    """Floor Level Number"""

    lot_number: Optional[str] = Field(default=UNSET, alias="lotNumber")
    """Lot Number"""

    building_name1: Optional[str] = Field(default=UNSET, alias="buildingName1")
    """First Building Name"""

    building_name2: Optional[str] = Field(default=UNSET, alias="buildingName2")
    """Second Building Name"""

    street_name: Optional[str] = Field(default=UNSET, alias="streetName")
    """Street Name"""

    street_type: Optional[str] = Field(default=UNSET, alias="streetType")
    """Street Type (e.g., St, Rd, Ave)"""

    street_suffix: Optional[str] = Field(default=UNSET, alias="streetSuffix")
    """Street Suffix (e.g., NW, SE)"""

    postal_delivery_type: Optional[str] = Field(default=UNSET, alias="postalDeliveryType")
    """Postal Delivery Type (e.g., PO Box, Locked Bag)"""

    postal_delivery_number: Optional[int] = Field(default=UNSET, alias="postalDeliveryNumber")
    """Postal Delivery Number"""

    postal_delivery_number_prefix: Optional[str] = Field(default=UNSET, alias="postalDeliveryNumberPrefix")
    """Postal Delivery Number Prefix"""

    locality_name: Optional[str] = Field(default=UNSET, alias="localityName")
    """Locality Name"""

    postcode: Optional[str] = UNSET
    """Postcode"""

    state: Optional[str] = UNSET
    """State"""


class PafIdentityIdentitiesApiDict(TypedDict):
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
    locality_name: NotRequired[str]
    postcode: NotRequired[str]
    state: NotRequired[str]
