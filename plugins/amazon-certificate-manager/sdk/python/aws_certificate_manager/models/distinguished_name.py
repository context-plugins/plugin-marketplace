from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_attribute import CustomAttribute, CustomAttributeDict


class DistinguishedName(SdkBaseModel):
    common_name: Optional[str] = Field(default=UNSET, alias="CommonName")
    """The common name (CN) attribute."""

    domain_components: Optional[list[str]] = Field(default=UNSET, alias="DomainComponents")
    """The domain component attributes."""

    country: Optional[str] = Field(default=UNSET, alias="Country")
    """The country (C) attribute."""

    custom_attributes: Optional[list[CustomAttribute]] = Field(default=UNSET, alias="CustomAttributes")
    """A list of custom attributes in the distinguished name. Each custom attribute contains an object identifier (OID)
    and its corresponding value."""

    distinguished_name_qualifier: Optional[str] = Field(default=UNSET, alias="DistinguishedNameQualifier")
    """The distinguished name qualifier attribute."""

    generation_qualifier: Optional[str] = Field(default=UNSET, alias="GenerationQualifier")
    """The generation qualifier attribute."""

    given_name: Optional[str] = Field(default=UNSET, alias="GivenName")
    """The given name attribute."""

    initials: Optional[str] = Field(default=UNSET, alias="Initials")
    """The initials attribute."""

    locality: Optional[str] = Field(default=UNSET, alias="Locality")
    """The locality (L) attribute."""

    organization: Optional[str] = Field(default=UNSET, alias="Organization")
    """The organization (O) attribute."""

    organizational_unit: Optional[str] = Field(default=UNSET, alias="OrganizationalUnit")
    """The organizational unit (OU) attribute."""

    pseudonym: Optional[str] = Field(default=UNSET, alias="Pseudonym")
    """The pseudonym attribute."""

    serial_number: Optional[str] = Field(default=UNSET, alias="SerialNumber")
    """The serial number attribute."""

    state: Optional[str] = Field(default=UNSET, alias="State")
    """The state or province (ST) attribute."""

    surname: Optional[str] = Field(default=UNSET, alias="Surname")
    """The surname attribute."""

    title: Optional[str] = Field(default=UNSET, alias="Title")
    """The title attribute."""


class DistinguishedNameDict(TypedDict):
    common_name: NotRequired[str]
    domain_components: NotRequired[list[str]]
    country: NotRequired[str]
    custom_attributes: NotRequired[list[CustomAttributeDict]]
    distinguished_name_qualifier: NotRequired[str]
    generation_qualifier: NotRequired[str]
    given_name: NotRequired[str]
    initials: NotRequired[str]
    locality: NotRequired[str]
    organization: NotRequired[str]
    organizational_unit: NotRequired[str]
    pseudonym: NotRequired[str]
    serial_number: NotRequired[str]
    state: NotRequired[str]
    surname: NotRequired[str]
    title: NotRequired[str]
