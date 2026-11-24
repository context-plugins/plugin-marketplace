from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartBgpFailoverTestRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface you want to test."""

    bgp_peers: Optional[list[str]] = Field(default=UNSET, alias="bgpPeers")
    """The BGP peers to place in the DOWN state."""

    test_duration_in_minutes: Optional[int] = Field(default=UNSET, alias="testDurationInMinutes")
    """The time in minutes that the virtual interface failover test will last. Maximum value: 4,320 minutes (72 hours).
    Default: 180 minutes (3 hours)."""


class StartBgpFailoverTestRequestDict(TypedDict):
    virtual_interface_id: str
    bgp_peers: NotRequired[list[str]]
    test_duration_in_minutes: NotRequired[int]
