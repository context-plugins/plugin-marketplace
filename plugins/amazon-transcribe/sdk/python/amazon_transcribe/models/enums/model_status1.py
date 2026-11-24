from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelStatus1(str, Enum):
    """The status of the specified custom language model. When the status displays as COMPLETED the model is ready for
    use."""

    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


ModelStatus1OrStr: TypeAlias = Annotated[ModelStatus1 | str, open_enum_validator(ModelStatus1)]
