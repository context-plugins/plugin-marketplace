from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Protocol(str, Enum):
    """Immutable. The protocol used by this TargetServer."""

    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    HTTP = "HTTP"
    HTTP2 = "HTTP2"
    GRPC_TARGET = "GRPC_TARGET"
    GRPC = "GRPC"
    EXTERNAL_CALLOUT = "EXTERNAL_CALLOUT"

    __str__ = str.__str__


ProtocolOrStr: TypeAlias = Annotated[Protocol | str, open_enum_validator(Protocol)]
