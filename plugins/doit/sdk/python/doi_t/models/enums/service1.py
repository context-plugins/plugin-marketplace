from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service1(str, Enum):
    """Commitment type these settings apply to."""

    COMPUTE = "compute"
    DATABASE = "database"

    __str__ = str.__str__


Service1OrStr: TypeAlias = Annotated[Service1 | str, open_enum_validator(Service1)]
