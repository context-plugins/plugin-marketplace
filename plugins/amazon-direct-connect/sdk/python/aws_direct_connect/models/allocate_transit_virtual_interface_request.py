from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .new_transit_virtual_interface_allocation import (
    NewTransitVirtualInterfaceAllocation,
    NewTransitVirtualInterfaceAllocationDict,
)


class AllocateTransitVirtualInterfaceRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection on which the transit virtual interface is provisioned."""

    owner_account: str = Field(alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the transit virtual interface."""

    new_transit_virtual_interface_allocation: NewTransitVirtualInterfaceAllocation = Field(
        alias="newTransitVirtualInterfaceAllocation"
    )


class AllocateTransitVirtualInterfaceRequestDict(TypedDict):
    connection_id: str
    owner_account: str
    new_transit_virtual_interface_allocation: NewTransitVirtualInterfaceAllocationDict
