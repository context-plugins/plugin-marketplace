from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModelVersionDto(str, Enum):
    _3 = "3"
    _4 = "4"

    __str__ = str.__str__


ModelVersionDtoOrStr: TypeAlias = Annotated[ModelVersionDto | str, open_enum_validator(ModelVersionDto)]
