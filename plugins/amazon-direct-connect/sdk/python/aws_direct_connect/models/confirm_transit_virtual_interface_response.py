from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.virtual_interface_state import VirtualInterfaceStateOrStr


class ConfirmTransitVirtualInterfaceResponse(SdkBaseModel):
    virtual_interface_state: Optional[VirtualInterfaceStateOrStr] = Field(default=UNSET, alias="virtualInterfaceState")
    """The state of the virtual interface. The following are the possible values: confirming: The creation of the
    virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is
    different from the owner of the connection on which it is provisioned, then the virtual interface will remain in
    this state until it is confirmed by the virtual interface owner. verifying: This state only applies to public
    virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.
    pending: A virtual interface is in this s"""


class ConfirmTransitVirtualInterfaceResponseDict(TypedDict):
    virtual_interface_state: NotRequired[VirtualInterfaceStateOrStr]
