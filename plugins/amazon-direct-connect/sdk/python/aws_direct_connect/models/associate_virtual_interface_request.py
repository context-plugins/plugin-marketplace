from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AssociateVirtualInterfaceRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    connection_id: str = Field(alias="connectionId")
    """The ID of the LAG or connection."""


class AssociateVirtualInterfaceRequestDict(TypedDict):
    virtual_interface_id: str
    connection_id: str
