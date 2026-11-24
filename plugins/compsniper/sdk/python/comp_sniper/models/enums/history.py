from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class History(str, Enum):
    """Market price history range"""

    NONE = "none"
    MONTH = "month"
    QUARTER = "quarter"
    ANNUAL = "annual"

    __str__ = str.__str__


HistoryOrStr: TypeAlias = Annotated[History | str, open_enum_validator(History)]
