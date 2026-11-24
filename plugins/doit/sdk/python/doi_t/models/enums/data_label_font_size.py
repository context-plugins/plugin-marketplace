from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataLabelFontSize(str, Enum):
    """Font size used for data labels on charts."""

    AUTO = "auto"
    SMALL = "small"
    MEDIUM = "medium"
    LARGE = "large"

    __str__ = str.__str__


DataLabelFontSizeOrStr: TypeAlias = Annotated[DataLabelFontSize | str, open_enum_validator(DataLabelFontSize)]
