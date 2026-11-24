from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sipaccount3 import Sipaccount3, Sipaccount3Dict


class ApiV1SipaccountsResponse4(SdkBaseModel):
    sipaccount: Sipaccount3
    """SIP account details"""


class ApiV1SipaccountsResponse4Dict(TypedDict):
    sipaccount: Sipaccount3Dict
