from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .new_bgp_peer import NewBgpPeer, NewBgpPeerDict


class CreateBgpPeerRequest(SdkBaseModel):
    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    new_bgp_peer: Optional[NewBgpPeer] = Field(default=UNSET, alias="newBGPPeer")


class CreateBgpPeerRequestDict(TypedDict):
    virtual_interface_id: NotRequired[str]
    new_bgp_peer: NotRequired[NewBgpPeerDict]
