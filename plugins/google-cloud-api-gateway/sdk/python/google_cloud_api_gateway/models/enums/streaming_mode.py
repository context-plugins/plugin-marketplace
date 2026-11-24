from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StreamingMode(str, Enum):
    """Optional. Immutable. Requests streaming for a new gateway. An attempt to change it on update is rejected. If
    unset, the service selects the mode. This field records only what was requested and is never modified by the
    service; read ``effective_streaming_mode`` for the mode the gateway is served with."""

    STREAMING_MODE_UNSPECIFIED = "STREAMING_MODE_UNSPECIFIED"
    STREAMING_MODE_ENABLED = "STREAMING_MODE_ENABLED"

    __str__ = str.__str__


StreamingModeOrStr: TypeAlias = Annotated[StreamingMode | str, open_enum_validator(StreamingMode)]
