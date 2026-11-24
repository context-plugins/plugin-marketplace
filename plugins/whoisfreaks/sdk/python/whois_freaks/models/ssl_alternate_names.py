from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SslAlternateNames(SdkBaseModel):
    dns_names: Optional[list[str]] = Field(default=UNSET, alias="dnsNames")
    email_addresses: Optional[list[str]] = Field(default=UNSET, alias="emailAddresses")
    ip_addresses: Optional[list[str]] = Field(default=UNSET, alias="ipAddresses")
    uris: Optional[list[str]] = UNSET


class SslAlternateNamesDict(TypedDict):
    dns_names: NotRequired[list[str]]
    email_addresses: NotRequired[list[str]]
    ip_addresses: NotRequired[list[str]]
    uris: NotRequired[list[str]]
