from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SipaccountsAllowedIpsResponse(SdkBaseModel):
    allowed_ips: list[str]
    """List of allowed IP address strings"""


class ApiV1SipaccountsAllowedIpsResponseDict(TypedDict):
    allowed_ips: list[str]
