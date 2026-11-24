from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TraceProtocol1(str, Enum):
    """Optional. The trace protocol to use."""

    TRACE_PROTOCOL_UNSPECIFIED = "TRACE_PROTOCOL_UNSPECIFIED"
    OPEN_CENSUS = "OPEN_CENSUS"
    OTLP = "OTLP"

    __str__ = str.__str__


TraceProtocol1OrStr: TypeAlias = Annotated[TraceProtocol1 | str, open_enum_validator(TraceProtocol1)]
