from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service5(str, Enum):
    """Product line these settings apply to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service5OrStr: TypeAlias = Annotated[Service5 | str, open_enum_validator(Service5)]
