from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestExecutionModality(str, Enum):
    """Indicates whether test set is audio or text."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


TestExecutionModalityOrStr: TypeAlias = Annotated[
    TestExecutionModality | str, open_enum_validator(TestExecutionModality)
]
