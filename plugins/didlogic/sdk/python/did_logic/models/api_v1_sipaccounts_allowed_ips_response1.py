from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SipaccountsAllowedIpsResponse1(SdkBaseModel):
    allowed_ips: list[str]
    """List of allowed IP addresses after creation"""


class ApiV1SipaccountsAllowedIpsResponse1Dict(TypedDict):
    allowed_ips: list[str]
