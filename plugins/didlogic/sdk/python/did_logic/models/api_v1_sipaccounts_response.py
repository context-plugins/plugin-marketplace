from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sipaccount import Sipaccount, SipaccountDict


class ApiV1SipaccountsResponse(SdkBaseModel):
    sipaccounts: list[Sipaccount]
    """List of SIP accounts"""


class ApiV1SipaccountsResponseDict(TypedDict):
    sipaccounts: list[SipaccountDict]
