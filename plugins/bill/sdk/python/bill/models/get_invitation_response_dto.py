from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.network_invitation_status import NetworkInvitationStatusOrStr


class GetInvitationResponseDto(SdkBaseModel):
    """Invitation status response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the customer or vendor record in your organization"""

    status: Optional[NetworkInvitationStatusOrStr] = UNSET
    network_id: Optional[str] = Field(default=UNSET, alias="networkId")
    """Payment Network ID (PNI). BILL uses the PNI to send and receive electronic payments."""


class GetInvitationResponseDtoDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[NetworkInvitationStatusOrStr]
    network_id: NotRequired[str]
