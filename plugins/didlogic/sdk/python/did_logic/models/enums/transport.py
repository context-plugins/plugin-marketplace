from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Transport(int, Enum):
    """Transport type: 1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 = Webphone, 12 = WebSocket, 13 = SDK (rings the
    account of one of your SDK tokens; set up through the SDK, not through this API)"""

    VALUE_1 = 1
    VALUE_4 = 4
    VALUE_5 = 5
    VALUE_10 = 10
    VALUE_12 = 12
    VALUE_13 = 13

    __str__ = str.__str__


TransportOrInt: TypeAlias = Annotated[Transport | int, open_enum_validator(Transport)]
