from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service4(str, Enum):
    """Product line these monthly stats belong to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service4OrStr: TypeAlias = Annotated[Service4 | str, open_enum_validator(Service4)]
