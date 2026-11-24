from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .physical_addresses import PhysicalAddresses, PhysicalAddressesDict


class Profile(SdkBaseModel):
    email_addresses: list[str] = Field(alias="emailAddresses")
    """User email address"""

    first_name: str = Field(alias="firstName")
    """User first name"""

    full_name: str = Field(alias="fullName")
    """User full name"""

    last_name: str = Field(alias="lastName")
    """User last name"""

    middle_name: str = Field(alias="middleName")
    """User middle name"""

    phone_numbers: list[str] = Field(alias="phoneNumbers")
    """User phone number"""

    physical_addresses: list[PhysicalAddresses] = Field(alias="physicalAddresses")
    """Physical user addresses"""


class ProfileDict(TypedDict):
    email_addresses: list[str]
    first_name: str
    full_name: str
    last_name: str
    middle_name: str
    phone_numbers: list[str]
    physical_addresses: list[PhysicalAddressesDict]
