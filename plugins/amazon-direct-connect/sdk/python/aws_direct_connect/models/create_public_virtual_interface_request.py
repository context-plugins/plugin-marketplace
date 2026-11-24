from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .new_public_virtual_interface import NewPublicVirtualInterface, NewPublicVirtualInterfaceDict


class CreatePublicVirtualInterfaceRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection."""

    new_public_virtual_interface: NewPublicVirtualInterface = Field(alias="newPublicVirtualInterface")


class CreatePublicVirtualInterfaceRequestDict(TypedDict):
    connection_id: str
    new_public_virtual_interface: NewPublicVirtualInterfaceDict
