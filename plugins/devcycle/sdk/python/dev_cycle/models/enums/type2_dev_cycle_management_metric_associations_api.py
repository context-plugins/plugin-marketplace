from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2DevCycleManagementMetricAssociationsApi(str, Enum):
    """The Feature type"""

    RELEASE = "release"
    EXPERIMENT = "experiment"
    PERMISSION = "permission"
    OPS = "ops"

    __str__ = str.__str__


Type2DevCycleManagementMetricAssociationsApiOrStr: TypeAlias = Annotated[
    Type2DevCycleManagementMetricAssociationsApi | str,
    open_enum_validator(Type2DevCycleManagementMetricAssociationsApi),
]
