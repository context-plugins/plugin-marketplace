from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class VirtualInterfaceTestHistory(SdkBaseModel):
    test_id: Optional[str] = Field(default=UNSET, alias="testId")
    """The ID of the virtual interface failover test."""

    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the tested virtual interface."""

    bgp_peers: Optional[list[str]] = Field(default=UNSET, alias="bgpPeers")
    """The BGP peers that were put in the DOWN state as part of the virtual interface failover test."""

    status: Optional[str] = UNSET
    """The status of the virtual interface failover test."""

    owner_account: Optional[str] = Field(default=UNSET, alias="ownerAccount")
    """The owner ID of the tested virtual interface."""

    test_duration_in_minutes: Optional[int] = Field(default=UNSET, alias="testDurationInMinutes")
    """The time that the virtual interface failover test ran in minutes."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """The time that the virtual interface moves to the DOWN state."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """The time that the virtual interface moves out of the DOWN state."""


class VirtualInterfaceTestHistoryDict(TypedDict):
    test_id: NotRequired[str]
    virtual_interface_id: NotRequired[str]
    bgp_peers: NotRequired[list[str]]
    status: NotRequired[str]
    owner_account: NotRequired[str]
    test_duration_in_minutes: NotRequired[int]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
