from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpannerRpcPriority(str, Enum):
    """Optional. The RPC priority to use for the stream."""

    SPANNER_RPC_PRIORITY_UNSPECIFIED = "SPANNER_RPC_PRIORITY_UNSPECIFIED"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


SpannerRpcPriorityOrStr: TypeAlias = Annotated[SpannerRpcPriority | str, open_enum_validator(SpannerRpcPriority)]
