from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OtpChannelJuriSignSignRequestsApi(str, Enum):
    """OTP verification channel"""

    SMS = "sms"
    EMAIL = "email"

    __str__ = str.__str__


OtpChannelJuriSignSignRequestsApiOrStr: TypeAlias = Annotated[
    OtpChannelJuriSignSignRequestsApi | str, open_enum_validator(OtpChannelJuriSignSignRequestsApi)
]
