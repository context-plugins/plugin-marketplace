from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EndpointProtocol(str, Enum):
    """Optional. The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT."""

    ENDPOINT_PROTOCOL_UNSPECIFIED = "ENDPOINT_PROTOCOL_UNSPECIFIED"
    THRIFT = "THRIFT"
    GRPC = "GRPC"

    __str__ = str.__str__


EndpointProtocolOrStr: TypeAlias = Annotated[EndpointProtocol | str, open_enum_validator(EndpointProtocol)]
