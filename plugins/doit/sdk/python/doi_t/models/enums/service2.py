from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service2(str, Enum):
    COMPUTE = "compute"
    DATABASE = "database"

    __str__ = str.__str__


Service2OrStr: TypeAlias = Annotated[Service2 | str, open_enum_validator(Service2)]
