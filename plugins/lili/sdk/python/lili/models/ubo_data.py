from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .address_data5 import AddressData5, AddressData5Dict
from .enums.role import RoleOrStr


class UboData(SdkBaseModel):
    email: EmailStr
    """The unique ID of the webhook"""

    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Customer phone number. E.164 format."""

    ssn: Optional[str] = UNSET
    """Customer SSN"""

    birth_date: Optional[Date] = Field(default=UNSET, alias="birthDate")
    """Customer birth date"""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """Customer first name"""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """Customer last name"""

    passport_number: Optional[str] = Field(default=UNSET, alias="passportNumber")
    """Passport number"""

    id_gov_number: Optional[str] = Field(default=UNSET, alias="idGovNumber")
    """Non US customer National ID number"""

    id_country: Optional[str] = Field(default=UNSET, alias="idCountry")
    """National ID country (Alpha 2, ISO 3166 format). Note that if a passport number is supplied, this is the passport
    issuance country"""

    id_expiration_date: Optional[str] = Field(default=UNSET, alias="idExpirationDate")
    """National ID expiration date. Note that if passport number is supplied, this is the passport expiration date"""

    role: Optional[RoleOrStr] = UNSET
    """The UBO role in the account"""

    ownership_percent: Optional[float] = Field(default=UNSET, alias="ownershipPercent")
    """The ownership percentage of the UBO"""

    address: Optional[AddressData5] = UNSET
    """The UBO address"""


class UboDataDict(TypedDict):
    email: EmailStr
    phone_number: NotRequired[str]
    ssn: NotRequired[str]
    birth_date: NotRequired[Date]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    passport_number: NotRequired[str]
    id_gov_number: NotRequired[str]
    id_country: NotRequired[str]
    id_expiration_date: NotRequired[str]
    role: NotRequired[RoleOrStr]
    ownership_percent: NotRequired[float]
    address: NotRequired[AddressData5Dict]
