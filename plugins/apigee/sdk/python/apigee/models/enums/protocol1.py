from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Protocol1(str, Enum):
    """The protocol used by this target server."""

    PROTOCOL_UNSPECIFIED = "PROTOCOL_UNSPECIFIED"
    HTTP = "HTTP"
    HTTP2 = "HTTP2"
    GRPC_TARGET = "GRPC_TARGET"
    GRPC = "GRPC"
    EXTERNAL_CALLOUT = "EXTERNAL_CALLOUT"

    __str__ = str.__str__


Protocol1OrStr: TypeAlias = Annotated[Protocol1 | str, open_enum_validator(Protocol1)]
