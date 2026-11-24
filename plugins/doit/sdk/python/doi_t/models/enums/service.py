from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service(str, Enum):
    """Commitment type this projection belongs to (``compute`` or ``database``)."""

    COMPUTE = "compute"
    DATABASE = "database"

    __str__ = str.__str__


ServiceOrStr: TypeAlias = Annotated[Service | str, open_enum_validator(Service)]
