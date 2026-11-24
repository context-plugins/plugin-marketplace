from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3ParallelAiTasksApi(str, Enum):
    """The type of schema being defined. Always ``auto``."""

    AUTO = "auto"

    __str__ = str.__str__


Type3ParallelAiTasksApiOrStr: TypeAlias = Annotated[
    Type3ParallelAiTasksApi | str, open_enum_validator(Type3ParallelAiTasksApi)
]
