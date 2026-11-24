from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NumberScale(str, Enum):
    """Scale applied to numeric values when rendering the report."""

    AUTO = "auto"
    THOUSANDS = "thousands"
    MILLIONS = "millions"
    BILLIONS = "billions"
    RAW = "raw"

    __str__ = str.__str__


NumberScaleOrStr: TypeAlias = Annotated[NumberScale | str, open_enum_validator(NumberScale)]
