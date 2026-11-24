from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestExecutionModality2(str, Enum):
    """Indicates whether audio or text is used."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


TestExecutionModality2OrStr: TypeAlias = Annotated[
    TestExecutionModality2 | str, open_enum_validator(TestExecutionModality2)
]
