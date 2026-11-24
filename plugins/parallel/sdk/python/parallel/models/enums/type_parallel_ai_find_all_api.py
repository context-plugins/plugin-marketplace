from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeParallelAiFindAllApi(str, Enum):
    """The type of schema being defined. Always ``json``."""

    JSON = "json"

    __str__ = str.__str__


TypeParallelAiFindAllApiOrStr: TypeAlias = Annotated[
    TypeParallelAiFindAllApi | str, open_enum_validator(TypeParallelAiFindAllApi)
]
