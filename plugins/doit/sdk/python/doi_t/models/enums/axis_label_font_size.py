from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AxisLabelFontSize(str, Enum):
    """Font size used for axis labels on charts."""

    AUTO = "auto"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"

    __str__ = str.__str__


AxisLabelFontSizeOrStr: TypeAlias = Annotated[AxisLabelFontSize | str, open_enum_validator(AxisLabelFontSize)]
