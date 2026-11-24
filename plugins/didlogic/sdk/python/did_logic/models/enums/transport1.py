from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Transport1(int, Enum):
    """Transport type (1=SIP URI, 4=Phone number, 5=SIP device, 10=Webphone, 12=WebSocket). 12 requires an account
    enabled for voice streaming."""

    VALUE_1 = 1
    VALUE_4 = 4
    VALUE_5 = 5
    VALUE_10 = 10
    VALUE_12 = 12

    __str__ = str.__str__


Transport1OrInt: TypeAlias = Annotated[Transport1 | int, open_enum_validator(Transport1)]
