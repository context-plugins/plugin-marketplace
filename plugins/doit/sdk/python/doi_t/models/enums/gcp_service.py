from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class GcpService(str, Enum):
    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


GcpServiceOrStr: TypeAlias = Annotated[GcpService | str, open_enum_validator(GcpService)]
