from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelStatus2(str, Enum):
    """The status of the specified custom language model."""

    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


ModelStatus2OrStr: TypeAlias = Annotated[ModelStatus2 | str, open_enum_validator(ModelStatus2)]
