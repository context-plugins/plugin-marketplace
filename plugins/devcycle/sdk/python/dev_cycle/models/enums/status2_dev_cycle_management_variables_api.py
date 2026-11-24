from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2DevCycleManagementVariablesApi(str, Enum):
    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


Status2DevCycleManagementVariablesApiOrStr: TypeAlias = Annotated[
    Status2DevCycleManagementVariablesApi | str, open_enum_validator(Status2DevCycleManagementVariablesApi)
]
