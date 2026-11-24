from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Attribute(str, Enum):
    PUBLIC = "public"
    READ_ONLY = "read_only"

    __str__ = str.__str__


AttributeOrStr: TypeAlias = Annotated[Attribute | str, open_enum_validator(Attribute)]
