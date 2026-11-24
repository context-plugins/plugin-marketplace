from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignupChannel(str, Enum):
    """Delivery channels a signup can consent on."""

    EMAIL = "email"
    SMS = "sms"

    __str__ = str.__str__


SignupChannelOrStr: TypeAlias = Annotated[SignupChannel | str, open_enum_validator(SignupChannel)]
