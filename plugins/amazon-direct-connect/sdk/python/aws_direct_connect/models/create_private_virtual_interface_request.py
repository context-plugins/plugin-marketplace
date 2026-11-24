from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .new_private_virtual_interface import NewPrivateVirtualInterface, NewPrivateVirtualInterfaceDict


class CreatePrivateVirtualInterfaceRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection."""

    new_private_virtual_interface: NewPrivateVirtualInterface = Field(alias="newPrivateVirtualInterface")


class CreatePrivateVirtualInterfaceRequestDict(TypedDict):
    connection_id: str
    new_private_virtual_interface: NewPrivateVirtualInterfaceDict
