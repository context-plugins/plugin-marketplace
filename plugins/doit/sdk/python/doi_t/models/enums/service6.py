from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service6(str, Enum):
    """Commitment type this projection group belongs to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service6OrStr: TypeAlias = Annotated[Service6 | str, open_enum_validator(Service6)]
