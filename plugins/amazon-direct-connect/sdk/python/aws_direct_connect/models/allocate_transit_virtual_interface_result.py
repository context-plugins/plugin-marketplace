from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .virtual_interface import VirtualInterface, VirtualInterfaceDict


class AllocateTransitVirtualInterfaceResult(SdkBaseModel):
    virtual_interface: Optional[VirtualInterface] = Field(default=UNSET, alias="virtualInterface")


class AllocateTransitVirtualInterfaceResultDict(TypedDict):
    virtual_interface: NotRequired[VirtualInterfaceDict]
