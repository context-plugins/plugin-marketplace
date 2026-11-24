from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzChecksumAggregationMethod(str, Enum):
    LINEAR = "LINEAR"

    __str__ = str.__str__


XAmzChecksumAggregationMethodOrStr: TypeAlias = Annotated[
    XAmzChecksumAggregationMethod | str, open_enum_validator(XAmzChecksumAggregationMethod)
]
