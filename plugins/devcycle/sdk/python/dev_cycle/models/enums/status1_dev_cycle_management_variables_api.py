from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1DevCycleManagementVariablesApi(str, Enum):
    """Status field indicating whether a variable is actively being used, or is archived."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


Status1DevCycleManagementVariablesApiOrStr: TypeAlias = Annotated[
    Status1DevCycleManagementVariablesApi | str, open_enum_validator(Status1DevCycleManagementVariablesApi)
]
