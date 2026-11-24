from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CountingMethod(str, Enum):
    """Optional. The method by which conversions will be counted across multiple events within a session. If this value
    is not provided, it will be set to ``ONCE_PER_EVENT``."""

    CONVERSION_COUNTING_METHOD_UNSPECIFIED = "CONVERSION_COUNTING_METHOD_UNSPECIFIED"
    ONCE_PER_EVENT = "ONCE_PER_EVENT"
    ONCE_PER_SESSION = "ONCE_PER_SESSION"

    __str__ = str.__str__


CountingMethodOrStr: TypeAlias = Annotated[CountingMethod | str, open_enum_validator(CountingMethod)]
