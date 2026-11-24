from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SipaccountsAllowedIpsRequest(SdkBaseModel):
    ip: str
    """Single IPv4 address in dotted-decimal form; a range (CIDR) is rejected"""


class ApiV1SipaccountsAllowedIpsRequestDict(TypedDict):
    ip: str
