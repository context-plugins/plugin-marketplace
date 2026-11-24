from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateVirtualInterfaceAttributesRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual private interface."""

    mtu: Optional[int] = UNSET
    """The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The default value is
    1500."""

    enable_site_link: Optional[bool] = Field(default=UNSET, alias="enableSiteLink")
    """Indicates whether to enable or disable SiteLink."""

    virtual_interface_name: Optional[str] = Field(default=UNSET, alias="virtualInterfaceName")
    """The name of the virtual private interface."""

    prefix_pool_allocated_count_ipv4: Optional[int] = Field(default=UNSET, alias="prefixPoolAllocatedCountIpv4")
    """The number of inbound IPv4 route prefixes to allocate to the virtual interface. Not applicable to public virtual
    interfaces."""

    prefix_pool_allocated_count_ipv6: Optional[int] = Field(default=UNSET, alias="prefixPoolAllocatedCountIpv6")
    """The number of inbound IPv6 route prefixes to allocate to the virtual interface. Not applicable to public virtual
    interfaces."""

    rate_limit: Optional[str] = Field(default=UNSET, alias="rateLimit")
    """The rate limit (bandwidth allocation) to apply to the virtual interface. Use this to update the bandwidth
    allocation on an existing virtual interface."""


class UpdateVirtualInterfaceAttributesRequestDict(TypedDict):
    virtual_interface_id: str
    mtu: NotRequired[int]
    enable_site_link: NotRequired[bool]
    virtual_interface_name: NotRequired[str]
    prefix_pool_allocated_count_ipv4: NotRequired[int]
    prefix_pool_allocated_count_ipv6: NotRequired[int]
    rate_limit: NotRequired[str]
