from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewSummaryPeriodKind(str, Enum):
    """'relative' = a rolling window ending today (set ``unit`` + ``amount``); 'absolute' = a fixed calendar range (set
    ``start`` + ``end``)."""

    RELATIVE = "relative"
    ABSOLUTE = "absolute"

    __str__ = str.__str__


CustomViewSummaryPeriodKindOrStr: TypeAlias = Annotated[
    CustomViewSummaryPeriodKind | str, open_enum_validator(CustomViewSummaryPeriodKind)
]
