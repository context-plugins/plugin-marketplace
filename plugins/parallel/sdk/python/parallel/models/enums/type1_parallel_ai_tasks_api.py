from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1ParallelAiTasksApi(str, Enum):
    """The type of schema being defined. Always ``json``."""

    JSON = "json"

    __str__ = str.__str__


Type1ParallelAiTasksApiOrStr: TypeAlias = Annotated[
    Type1ParallelAiTasksApi | str, open_enum_validator(Type1ParallelAiTasksApi)
]
