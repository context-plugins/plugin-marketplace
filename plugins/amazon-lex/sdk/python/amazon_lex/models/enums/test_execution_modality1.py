from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestExecutionModality1(str, Enum):
    """Specifies whether the data used for the test execution is written or spoken."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


TestExecutionModality1OrStr: TypeAlias = Annotated[
    TestExecutionModality1 | str, open_enum_validator(TestExecutionModality1)
]
