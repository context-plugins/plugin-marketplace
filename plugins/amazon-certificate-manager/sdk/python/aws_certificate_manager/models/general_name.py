from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .distinguished_name import DistinguishedName, DistinguishedNameDict
from .other_name import OtherName, OtherNameDict


class GeneralName(SdkBaseModel):
    """Exactly one member is set."""

    directory_name: Optional[DistinguishedName] = Field(default=UNSET, alias="DirectoryName")
    dns_name: Optional[str] = Field(default=UNSET, alias="DnsName")
    """Represents GeneralName as a DNS name."""

    ip_address: Optional[str] = Field(default=UNSET, alias="IpAddress")
    """Represents GeneralName as an IPv4 or IPv6 address."""

    other_name: Optional[OtherName] = Field(default=UNSET, alias="OtherName")
    registered_id: Optional[str] = Field(default=UNSET, alias="RegisteredId")
    """Represents GeneralName as an object identifier (OID)."""

    rfc822_name: Optional[str] = Field(default=UNSET, alias="Rfc822Name")
    """Represents GeneralName as an RFC 822 email address."""

    uniform_resource_identifier: Optional[str] = Field(default=UNSET, alias="UniformResourceIdentifier")
    """Represents GeneralName as a URI."""


class GeneralNameDict(TypedDict):
    directory_name: NotRequired[DistinguishedNameDict]
    dns_name: NotRequired[str]
    ip_address: NotRequired[str]
    other_name: NotRequired[OtherNameDict]
    registered_id: NotRequired[str]
    rfc822_name: NotRequired[str]
    uniform_resource_identifier: NotRequired[str]
