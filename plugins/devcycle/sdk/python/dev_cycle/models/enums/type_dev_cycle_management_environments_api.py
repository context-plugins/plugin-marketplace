from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDevCycleManagementEnvironmentsApi(str, Enum):
    """The environment type"""

    DEVELOPMENT = "development"
    STAGING = "staging"
    PRODUCTION = "production"
    DISASTER_RECOVERY = "disaster_recovery"

    __str__ = str.__str__


TypeDevCycleManagementEnvironmentsApiOrStr: TypeAlias = Annotated[
    TypeDevCycleManagementEnvironmentsApi | str, open_enum_validator(TypeDevCycleManagementEnvironmentsApi)
]
