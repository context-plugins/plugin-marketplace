from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GenerationStatus(str, Enum):
    """The status of the generation request."""

    FAILED = "Failed"
    COMPLETE = "Complete"
    IN_PROGRESS = "InProgress"

    __str__ = str.__str__


GenerationStatusOrStr: TypeAlias = Annotated[GenerationStatus | str, open_enum_validator(GenerationStatus)]
