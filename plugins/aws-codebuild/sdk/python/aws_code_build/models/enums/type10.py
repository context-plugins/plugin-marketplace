from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type10(str, Enum):
    """The type of the report that was run. CODE_COVERAGE A code coverage report. TEST A test report."""

    TEST = "TEST"
    CODE_COVERAGE = "CODE_COVERAGE"

    __str__ = str.__str__


Type10OrStr: TypeAlias = Annotated[Type10 | str, open_enum_validator(Type10)]
