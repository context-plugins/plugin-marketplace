from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .new_transit_virtual_interface import NewTransitVirtualInterface, NewTransitVirtualInterfaceDict


class CreateTransitVirtualInterfaceRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection."""

    new_transit_virtual_interface: NewTransitVirtualInterface = Field(alias="newTransitVirtualInterface")


class CreateTransitVirtualInterfaceRequestDict(TypedDict):
    connection_id: str
    new_transit_virtual_interface: NewTransitVirtualInterfaceDict
