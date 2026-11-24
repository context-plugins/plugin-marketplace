from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReportType(str, Enum):
    """The type of the report."""

    SECURITY = "SECURITY"
    COVERAGE = "COVERAGE"
    TEST = "TEST"
    BUG = "BUG"

    __str__ = str.__str__


ReportTypeOrStr: TypeAlias = Annotated[ReportType | str, open_enum_validator(ReportType)]
