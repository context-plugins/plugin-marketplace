from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Format1(str, Enum):
    RAML08 = "RAML08"
    RAML10 = "RAML10"
    SWAGGER = "SWAGGER"
    STOPLIGHTX = "STOPLIGHTX"

    __str__ = str.__str__


Format1OrStr: TypeAlias = Annotated[Format1 | str, open_enum_validator(Format1)]
