from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sipaccount1 import Sipaccount1, Sipaccount1Dict


class ApiV1SipaccountsRequest(SdkBaseModel):
    sipaccount: Sipaccount1


class ApiV1SipaccountsRequestDict(TypedDict):
    sipaccount: Sipaccount1Dict
