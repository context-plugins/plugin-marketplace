from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestSetGenerationStatus(str, Enum):
    """The status for the test set generation."""

    GENERATING = "Generating"
    READY = "Ready"
    FAILED = "Failed"
    PENDING = "Pending"

    __str__ = str.__str__


TestSetGenerationStatusOrStr: TypeAlias = Annotated[
    TestSetGenerationStatus | str, open_enum_validator(TestSetGenerationStatus)
]
