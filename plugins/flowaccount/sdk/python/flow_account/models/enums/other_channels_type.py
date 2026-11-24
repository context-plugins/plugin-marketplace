from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OtherChannelsType(int, Enum):
    """1 = Receive 3 = ReceivePay 5 = Pay"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5

    __str__ = str.__str__


OtherChannelsTypeOrInt: TypeAlias = Annotated[OtherChannelsType | int, open_enum_validator(OtherChannelsType)]
