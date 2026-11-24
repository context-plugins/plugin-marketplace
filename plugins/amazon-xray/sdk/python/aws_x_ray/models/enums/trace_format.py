from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TraceFormat(str, Enum):
    """Format of the requested traces."""

    XRAY = "XRAY"
    OTEL = "OTEL"

    __str__ = str.__str__


TraceFormatOrStr: TypeAlias = Annotated[TraceFormat | str, open_enum_validator(TraceFormat)]
