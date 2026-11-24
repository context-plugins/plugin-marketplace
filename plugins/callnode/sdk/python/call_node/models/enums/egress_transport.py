from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EgressTransport(str, Enum):
    UDP = "udp"
    TCP = "tcp"
    TLS = "tls"

    __str__ = str.__str__


EgressTransportOrStr: TypeAlias = Annotated[EgressTransport | str, open_enum_validator(EgressTransport)]
