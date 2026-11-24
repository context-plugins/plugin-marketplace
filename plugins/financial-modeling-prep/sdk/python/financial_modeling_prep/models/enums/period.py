from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Period(str, Enum):
    ANNUAL = "annual"
    QUARTER = "quarter"

    __str__ = str.__str__


PeriodOrStr: TypeAlias = Annotated[Period | str, open_enum_validator(Period)]
