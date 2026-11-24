from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ServiceId(str, Enum):
    COMPUTE = "compute"
    DATABASE = "database"

    __str__ = str.__str__


ServiceIdOrStr: TypeAlias = Annotated[ServiceId | str, open_enum_validator(ServiceId)]
