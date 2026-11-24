from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SipaccountsResponse1(SdkBaseModel):
    error: str


class ApiV1SipaccountsResponse1Dict(TypedDict):
    error: str
