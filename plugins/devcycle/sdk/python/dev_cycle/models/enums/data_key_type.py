from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DataKeyType(str, Enum):
    """Data Key Type used for custom data"""

    STRING = "String"
    BOOLEAN = "Boolean"
    NUMBER = "Number"

    __str__ = str.__str__


DataKeyTypeOrStr: TypeAlias = Annotated[DataKeyType | str, open_enum_validator(DataKeyType)]
