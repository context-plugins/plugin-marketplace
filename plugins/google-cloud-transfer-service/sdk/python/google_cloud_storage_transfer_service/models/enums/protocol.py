from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Protocol(str, Enum):
    """Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol
    NETWORK_PROTOCOL_HTTPS is used."""

    NETWORK_PROTOCOL_UNSPECIFIED = "NETWORK_PROTOCOL_UNSPECIFIED"
    NETWORK_PROTOCOL_HTTPS = "NETWORK_PROTOCOL_HTTPS"
    NETWORK_PROTOCOL_HTTP = "NETWORK_PROTOCOL_HTTP"

    __str__ = str.__str__


ProtocolOrStr: TypeAlias = Annotated[Protocol | str, open_enum_validator(Protocol)]
