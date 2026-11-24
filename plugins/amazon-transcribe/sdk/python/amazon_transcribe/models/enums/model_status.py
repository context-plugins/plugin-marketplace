from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelStatus(str, Enum):
    """The status of your custom language model. When the status displays as COMPLETED, your model is ready to use."""

    IN_PROGRESS = "IN_PROGRESS"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


ModelStatusOrStr: TypeAlias = Annotated[ModelStatus | str, open_enum_validator(ModelStatus)]
