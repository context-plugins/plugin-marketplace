from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .virtual_interface import VirtualInterface, VirtualInterfaceDict


class VirtualInterfaces(SdkBaseModel):
    virtual_interfaces: Optional[list[VirtualInterface]] = Field(default=UNSET, alias="virtualInterfaces")
    """The virtual interfaces"""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class VirtualInterfacesDict(TypedDict):
    virtual_interfaces: NotRequired[list[VirtualInterfaceDict]]
    next_token: NotRequired[str]
