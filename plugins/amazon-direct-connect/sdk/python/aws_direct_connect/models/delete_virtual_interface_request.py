from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteVirtualInterfaceRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface."""


class DeleteVirtualInterfaceRequestDict(TypedDict):
    virtual_interface_id: str
