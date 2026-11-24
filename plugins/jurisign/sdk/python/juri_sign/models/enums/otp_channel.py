from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OtpChannel(str, Enum):
    SMS = "sms"
    EMAIL = "email"

    __str__ = str.__str__


OtpChannelOrStr: TypeAlias = Annotated[OtpChannel | str, open_enum_validator(OtpChannel)]
