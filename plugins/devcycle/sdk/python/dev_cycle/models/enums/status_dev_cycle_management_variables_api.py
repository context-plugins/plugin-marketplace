from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDevCycleManagementVariablesApi(str, Enum):
    """The status of a Variable. Must be one of [active | archived]"""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


StatusDevCycleManagementVariablesApiOrStr: TypeAlias = Annotated[
    StatusDevCycleManagementVariablesApi | str, open_enum_validator(StatusDevCycleManagementVariablesApi)
]
