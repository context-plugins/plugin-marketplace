from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.network_type import NetworkTypeOrStr
from .rpps_information2 import RppsInformation2, RppsInformation2Dict


class CreateInvitationRequestDto(SdkBaseModel):
    """Create an organization in the BILL network"""

    network_id: str = Field(alias="networkId")
    """Payment Network ID (PNI) of the organization you want to connect with. For a verified national vendor, the value
    begins with ``0rv``. BILL uses the PNI to send and receive electronic payments.

    You can retrieve ``networkId`` from your ``GET /v3/network`` search result."""

    network_type: NetworkTypeOrStr = Field(alias="networkType")
    rpps_information: Optional[RppsInformation2] = Field(default=UNSET, alias="rppsInformation")


class CreateInvitationRequestDtoDict(TypedDict):
    network_id: str
    network_type: NetworkTypeOrStr
    rpps_information: NotRequired[RppsInformation2Dict]
