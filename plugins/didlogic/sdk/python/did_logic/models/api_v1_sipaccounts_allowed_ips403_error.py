from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1SipaccountsAllowedIps403Error(SdkBaseModel):
    error: str


class ApiV1SipaccountsAllowedIps403ErrorDict(TypedDict):
    error: str
