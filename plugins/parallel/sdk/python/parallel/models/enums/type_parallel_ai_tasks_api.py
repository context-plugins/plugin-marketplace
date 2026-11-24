from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeParallelAiTasksApi(str, Enum):
    """The type of schema being defined. Always ``text``."""

    TEXT = "text"

    __str__ = str.__str__


TypeParallelAiTasksApiOrStr: TypeAlias = Annotated[
    TypeParallelAiTasksApi | str, open_enum_validator(TypeParallelAiTasksApi)
]
