from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EndpointNetworkConfiguration(SdkBaseModel):
    ip_addresses: Optional[list[str]] = Field(default=UNSET, alias="IpAddresses")
    """A list of gateway IP addresses on which the associated Amazon FSx file system is available. If multiple file
    systems are associated with this gateway, this field is required."""


class EndpointNetworkConfigurationDict(TypedDict):
    ip_addresses: NotRequired[list[str]]
