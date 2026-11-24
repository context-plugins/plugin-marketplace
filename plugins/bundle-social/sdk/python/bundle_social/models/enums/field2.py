from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Field2(str, Enum):
    SERVICE_ITEMS = "serviceItems"

    __str__ = str.__str__


Field2OrStr: TypeAlias = Annotated[Field2 | str, open_enum_validator(Field2)]
