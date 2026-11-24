from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .new_public_virtual_interface_allocation import (
    NewPublicVirtualInterfaceAllocation,
    NewPublicVirtualInterfaceAllocationDict,
)


class AllocatePublicVirtualInterfaceRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection on which the public virtual interface is provisioned."""

    owner_account: str = Field(alias="ownerAccount")
    """The ID of the Amazon Web Services account that owns the public virtual interface."""

    new_public_virtual_interface_allocation: NewPublicVirtualInterfaceAllocation = Field(
        alias="newPublicVirtualInterfaceAllocation"
    )


class AllocatePublicVirtualInterfaceRequestDict(TypedDict):
    connection_id: str
    owner_account: str
    new_public_virtual_interface_allocation: NewPublicVirtualInterfaceAllocationDict
