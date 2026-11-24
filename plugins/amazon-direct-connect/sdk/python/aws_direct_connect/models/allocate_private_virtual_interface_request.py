from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .new_private_virtual_interface_allocation import (
    NewPrivateVirtualInterfaceAllocation,
    NewPrivateVirtualInterfaceAllocationDict,
)


class AllocatePrivateVirtualInterfaceRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection on which the private virtual interface is provisioned."""

    owner_account: str = Field(alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the virtual private interface."""

    new_private_virtual_interface_allocation: NewPrivateVirtualInterfaceAllocation = Field(
        alias="newPrivateVirtualInterfaceAllocation"
    )


class AllocatePrivateVirtualInterfaceRequestDict(TypedDict):
    connection_id: str
    owner_account: str
    new_private_virtual_interface_allocation: NewPrivateVirtualInterfaceAllocationDict
