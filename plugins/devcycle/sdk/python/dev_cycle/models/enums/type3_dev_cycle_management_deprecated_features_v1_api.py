from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3DevCycleManagementDeprecatedFeaturesV1Api(str, Enum):
    """The Feature type"""

    RELEASE = "release"
    EXPERIMENT = "experiment"
    PERMISSION = "permission"
    OPS = "ops"

    __str__ = str.__str__


Type3DevCycleManagementDeprecatedFeaturesV1ApiOrStr: TypeAlias = Annotated[
    Type3DevCycleManagementDeprecatedFeaturesV1Api | str,
    open_enum_validator(Type3DevCycleManagementDeprecatedFeaturesV1Api),
]
