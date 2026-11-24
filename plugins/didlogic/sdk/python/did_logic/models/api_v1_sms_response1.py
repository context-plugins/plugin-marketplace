from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sms import Sms, SmsDict


class ApiV1SmsResponse1(SdkBaseModel):
    sms: Sms
    """Created SMS details"""


class ApiV1SmsResponse1Dict(TypedDict):
    sms: SmsDict
