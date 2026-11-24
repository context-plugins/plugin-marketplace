from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service7(str, Enum):
    """Product line this coverage series belongs to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service7OrStr: TypeAlias = Annotated[Service7 | str, open_enum_validator(Service7)]
