from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InviteVendorNotInBillNetworkRequestDto(SdkBaseModel):
    """Invite a vendor not in BILL network"""

    email: str
    """Vendor email address"""


class InviteVendorNotInBillNetworkRequestDtoDict(TypedDict):
    email: str
