from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operand(str, Enum):
    """Whether the threshold applies to each value (default) or the series total. Same field as the DoiT Console metric
    filter ``operand`` (``OperandSingleValue`` / ``OperandSeriesTotal``). On input, omitted defaults to
    ``single_value``. GET responses echo the effective value (``single_value`` or ``series_total``)."""

    SINGLE_VALUE = "single_value"
    SERIES_TOTAL = "series_total"

    __str__ = str.__str__


OperandOrStr: TypeAlias = Annotated[Operand | str, open_enum_validator(Operand)]
