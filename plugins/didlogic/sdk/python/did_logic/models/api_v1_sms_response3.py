from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sms1 import Sms1, Sms1Dict


class ApiV1SmsResponse3(SdkBaseModel):
    sms: Sms1
    """SMS message details"""


class ApiV1SmsResponse3Dict(TypedDict):
    sms: Sms1Dict
