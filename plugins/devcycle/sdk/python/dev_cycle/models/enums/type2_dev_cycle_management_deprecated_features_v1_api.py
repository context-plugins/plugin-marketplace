from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2DevCycleManagementDeprecatedFeaturesV1Api(str, Enum):
    """Feature type."""

    RELEASE = "release"
    EXPERIMENT = "experiment"
    PERMISSION = "permission"
    OPS = "ops"

    __str__ = str.__str__


Type2DevCycleManagementDeprecatedFeaturesV1ApiOrStr: TypeAlias = Annotated[
    Type2DevCycleManagementDeprecatedFeaturesV1Api | str,
    open_enum_validator(Type2DevCycleManagementDeprecatedFeaturesV1Api),
]
