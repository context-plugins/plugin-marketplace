from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service3(str, Enum):
    """PS4C product line (``gcp_service``) this recommendation belongs to."""

    COMPUTE = "compute"
    CLOUD_SQL = "cloud_sql"

    __str__ = str.__str__


Service3OrStr: TypeAlias = Annotated[Service3 | str, open_enum_validator(Service3)]
