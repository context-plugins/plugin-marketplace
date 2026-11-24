from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Model(str, Enum):
    PARALLEL = "parallel"

    __str__ = str.__str__


ModelOrStr: TypeAlias = Annotated[Model | str, open_enum_validator(Model)]
