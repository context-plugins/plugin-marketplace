from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type9(str, Enum):
    """The type of the ReportGroup. This can be one of the following values: CODE_COVERAGE The report group contains
    code coverage reports. TEST The report group contains test reports."""

    TEST = "TEST"
    CODE_COVERAGE = "CODE_COVERAGE"

    __str__ = str.__str__


Type9OrStr: TypeAlias = Annotated[Type9 | str, open_enum_validator(Type9)]
