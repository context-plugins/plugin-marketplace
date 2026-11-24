from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SchemaType(str, Enum):
    ENUM = "enum"

    __str__ = str.__str__


SchemaTypeOrStr: TypeAlias = Annotated[SchemaType | str, open_enum_validator(SchemaType)]
