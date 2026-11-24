from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links_identity_identities_api import LinksIdentityIdentitiesApi, LinksIdentityIdentitiesApiDict
from .organisation import Organisation, OrganisationDict
from .physical_address import PhysicalAddress, PhysicalAddressDict


class DatumIdentityIdentitiesApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type, always "identity"."""

    id: str
    """Identity identification."""

    created: str
    """Created date of the identity."""

    updated: str
    """Created date of the identity."""

    connection_id: Optional[str] = Field(default=UNSET, alias="connectionID")
    """ID of that connection."""

    institution_id: Optional[str] = Field(default=UNSET, alias="institutionID")
    """ID of that institution."""

    source: Optional[str] = UNSET
    """Data source."""

    full_name: Optional[str] = Field(default=UNSET, alias="fullName")
    """FullName of the identity owner."""

    first_name: Optional[str] = Field(default=UNSET, alias="firstName")
    """FirstName of the identity owner."""

    last_name: Optional[str] = Field(default=UNSET, alias="lastName")
    """LastName of the identity owner."""

    middle_name: Optional[str] = Field(default=UNSET, alias="middleName")
    """MiddleName of the identity owner."""

    title: Optional[str] = UNSET
    """Title is the prefix to the name of the identity owner."""

    dob: Optional[str] = Field(default=UNSET, alias="DOB")
    """Date of birth of the identity owner."""

    occupation_code: Optional[str] = Field(default=UNSET, alias="occupationCode")
    """Code relating to the occupation held by the identity owner."""

    occupation_code_version: Optional[str] = Field(default=UNSET, alias="occupationCodeVersion")
    """Occupation Code Version."""

    phone_numbers: Optional[list[str]] = Field(default=UNSET, alias="phoneNumbers")
    """List of phone numbers of the identity owner."""

    email_addresses: Optional[list[str]] = Field(default=UNSET, alias="emailAddresses")
    """List of email addresses of the identity owner."""

    physical_addresses: Optional[list[PhysicalAddress]] = Field(default=UNSET, alias="physicalAddresses")
    """List of physical addresses of the identity owner."""

    organisation: Optional[Organisation] = UNSET
    """Organisation data."""

    links: LinksIdentityIdentitiesApi


class DatumIdentityIdentitiesApiDict(TypedDict):
    type_: str
    id: str
    created: str
    updated: str
    connection_id: NotRequired[str]
    institution_id: NotRequired[str]
    source: NotRequired[str]
    full_name: NotRequired[str]
    first_name: NotRequired[str]
    last_name: NotRequired[str]
    middle_name: NotRequired[str]
    title: NotRequired[str]
    dob: NotRequired[str]
    occupation_code: NotRequired[str]
    occupation_code_version: NotRequired[str]
    phone_numbers: NotRequired[list[str]]
    email_addresses: NotRequired[list[str]]
    physical_addresses: NotRequired[list[PhysicalAddressDict]]
    organisation: NotRequired[OrganisationDict]
    links: LinksIdentityIdentitiesApiDict
