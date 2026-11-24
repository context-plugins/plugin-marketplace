from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDoiTCloudIncidentsApi(str, Enum):
    """The Status of the issue"""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


StatusDoiTCloudIncidentsApiOrStr: TypeAlias = Annotated[
    StatusDoiTCloudIncidentsApi | str, open_enum_validator(StatusDoiTCloudIncidentsApi)
]
