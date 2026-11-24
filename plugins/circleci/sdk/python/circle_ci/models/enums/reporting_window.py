from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReportingWindow(str, Enum):
    LAST_7_DAYS = "last-7-days"
    LAST_30_DAYS = "last-30-days"
    LAST_60_DAYS = "last-60-days"
    LAST_90_DAYS = "last-90-days"

    __str__ = str.__str__


ReportingWindowOrStr: TypeAlias = Annotated[ReportingWindow | str, open_enum_validator(ReportingWindow)]
